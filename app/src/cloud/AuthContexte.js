/**
 * Contexte d'authentification (partagé web + mobile).
 * Suit la session Supabase et expose les actions inscription / connexion /
 * déconnexion. La session est stockée en local (AsyncStorage) : une fois
 * connecté, l'appli s'ouvre même hors ligne.
 *
 * Robustesse : au démarrage, si une session existe on la VALIDE côté serveur.
 * Un token invalide (compte supprimé / révoqué) renvoie proprement vers
 * l'écran de connexion ; une simple coupure réseau NE déconnecte PAS
 * (offline-first : on garde la session).
 */

import { createContext, useContext, useEffect, useState } from 'react';
import { supabase } from './supabase';

const AuthContexte = createContext(null);

/** Vrai si l'erreur getUser() indique un token invalide (et pas juste un souci réseau). */
function sessionInvalide(error) {
  if (!error) return false;
  const txt = ((error.message || '') + ' ' + (error.name || '')).toLowerCase();
  const reseau = /fetch|network|timeout|retryable|failed to fetch/.test(txt);
  if (reseau) return false;
  if (error.status === 401 || error.status === 403) return true;
  return /invalid|not exist|expired|revoked|jwt|sub claim|unauthorized/.test(txt);
}

export function AuthProvider({ children }) {
  const [session, setSession] = useState(null);
  const [chargement, setChargement] = useState(true);
  const [recuperation, setRecuperation] = useState(false); // mot de passe oublié en cours

  useEffect(() => {
    let actif = true;

    supabase.auth.getSession().then(async ({ data }) => {
      const s = data.session ?? null;
      if (s) {
        try {
          const { error } = await supabase.auth.getUser();
          if (sessionInvalide(error)) {
            try { await supabase.auth.signOut(); } catch {}
            if (actif) {
              setSession(null);
              setChargement(false);
            }
            return;
          }
        } catch {
          // Exception (hors ligne, etc.) : on garde la session locale.
        }
      }
      if (actif) {
        setSession(s);
        setChargement(false);
      }
    });

    const { data: abo } = supabase.auth.onAuthStateChange((_evenement, s) => {
      setSession(s ?? null);
    });

    return () => {
      actif = false;
      abo.subscription.unsubscribe();
    };
  }, []);

  const sInscrire = (email, motDePasse) =>
    supabase.auth.signUp({ email, password: motDePasse });

  const seConnecter = (email, motDePasse) =>
    supabase.auth.signInWithPassword({ email, password: motDePasse });

  const seDeconnecter = () => supabase.auth.signOut();

  // ── Mot de passe oublié ──────────────────────────────────────────────────
  // 1. Supabase envoie un code provisoire par e-mail (modèle « Reset password », valable 10 min).
  //    Pas d'erreur si l'adresse est inconnue : on ne révèle pas qui a un compte.
  const envoyerCodeOubli = (email) => supabase.auth.resetPasswordForEmail(email);

  // 2. Le code ouvre une session ; on change aussitôt le mot de passe. Pendant ce temps, `recuperation`
  //    garde l'écran de connexion affiché (sinon l'appli s'ouvrirait avant le nouveau mot de passe).
  const reinitialiserMotDePasse = async (email, code, nouveau) => {
    setRecuperation(true);
    try {
      const v = await supabase.auth.verifyOtp({ email, token: code, type: 'recovery' });
      if (v.error) return { error: v.error };
      const u = await supabase.auth.updateUser({ password: nouveau });
      if (u.error) {
        // Mot de passe refusé : on referme la session ouverte par le code (il faudra un nouveau code).
        try { await supabase.auth.signOut(); } catch {}
        return { error: u.error };
      }
      return { error: null };
    } finally {
      setRecuperation(false);
    }
  };

  return (
    <AuthContexte.Provider
      value={{
        session,
        utilisateur: session?.user ?? null,
        chargement,
        sInscrire,
        seConnecter,
        seDeconnecter,
        envoyerCodeOubli,
        reinitialiserMotDePasse,
        recuperation,
      }}
    >
      {children}
    </AuthContexte.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContexte);
  if (!ctx) throw new Error('useAuth doit être utilisé dans <AuthProvider>');
  return ctx;
}
