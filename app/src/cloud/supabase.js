/**
 * Client Supabase partagé (web + mobile).
 * Clé PUBLIQUE (publishable) : sans danger côté client, protégée par les
 * règles RLS posées sur la base. Ne JAMAIS mettre ici une clé sb_secret_.
 */
import 'react-native-url-polyfill/auto';
import { Platform } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://zxhxevucpuudknyfidla.supabase.co';
const SUPABASE_CLE_PUBLIQUE = 'sb_publishable_07OkmTas1JvRtODtJlWCzQ_uSX6Wre-';

export const supabase = createClient(SUPABASE_URL, SUPABASE_CLE_PUBLIQUE, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    // Sur le web, Supabase lit le lien de confirmation/redirection dans l'URL.
    detectSessionInUrl: Platform.OS === 'web',
  },
});
