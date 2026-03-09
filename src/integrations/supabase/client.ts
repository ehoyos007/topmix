import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

// Satori project (shared Supabase instance)
const SUPABASE_URL = "https://cbeurhcgvqptclggkbhb.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNiZXVyaGNndnFwdGNsZ2drYmhiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzEyMDc2NjAsImV4cCI6MjA4Njc4MzY2MH0.zEQo-3WKp5doV1sgh0Z--XO__u0Ce4ENVKR4sVrtrPg";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY, {
  auth: {
    storage: localStorage,
    persistSession: true,
    autoRefreshToken: true,
  }
});