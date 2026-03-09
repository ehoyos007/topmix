-- Disable RLS - use GRANT-level permissions for access control instead
-- This is simpler and avoids PostgREST cache issues
ALTER TABLE topmix_leads DISABLE ROW LEVEL SECURITY;

-- Clean up all policies (not needed with RLS off)
DO $$
DECLARE pol RECORD;
BEGIN
  FOR pol IN SELECT policyname FROM pg_policies WHERE tablename = 'topmix_leads'
  LOOP
    EXECUTE format('DROP POLICY IF EXISTS %I ON topmix_leads', pol.policyname);
  END LOOP;
END $$;

-- Revoke all from public first
REVOKE ALL ON TABLE public.topmix_leads FROM anon;
REVOKE ALL ON TABLE public.topmix_leads FROM authenticated;

-- Anon: INSERT only (for website contact form)
GRANT INSERT ON TABLE public.topmix_leads TO anon;

-- Authenticated: SELECT + UPDATE (for future CRM dashboard)
GRANT SELECT, UPDATE ON TABLE public.topmix_leads TO authenticated;

-- Service role: full access (for admin, Edge Functions, etc.)
GRANT ALL ON TABLE public.topmix_leads TO service_role;

NOTIFY pgrst, 'reload schema';
