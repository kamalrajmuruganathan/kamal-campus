/**
 * Contexte d'authentification (partagé web + mobile).
 * Suit la session Supabase et expose les actions inscription / connexion /
 * déconnexion. La session est stockée en local (AsyncStorage) : une fois
 * connecté, l'appli s'ouvre même hors ligne.
 */

import { createContext, useContext, useEffect, useState } from 'react';
import { supabase } from './supabase';

const AuthContexte = createContext(null);

export function AuthProvider({ children }) {
  const [session, setSession] = useState(null);
  const [chargement, setChargement] = useState(true);

  useEffect(() => {
    let actif = true;

    supabase.auth.getSession().then(({ data }) => {
      if (!actif) return;
      setSession(data.session ?? null);
      setChargement(false);
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

  return (
    <AuthContexte.Provider
      value={{
        session,
        utilisateur: session?.user ?? null,
        chargement,
        sInscrire,
        seConnecter,
        seDeconnecter,
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
