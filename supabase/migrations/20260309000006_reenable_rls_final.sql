-- Re-enable RLS with clean policies
ALTER TABLE topmix_leads ENABLE ROW LEVEL SECURITY;

-- Drop any stale policies
DROP POLICY IF EXISTS "allow_public_insert" ON topmix_leads;
DROP POLICY IF EXISTS "service_role_all" ON topmix_leads;
DROP POLICY IF EXISTS "authenticated_select" ON topmix_leads;
DROP POLICY IF EXISTS "authenticated_update" ON topmix_leads;

-- Ensure grants are in place
GRANT USAGE ON SCHEMA public TO anon;
GRANT INSERT ON TABLE public.topmix_leads TO anon;
GRANT SELECT, UPDATE ON TABLE public.topmix_leads TO authenticated;
GRANT ALL ON TABLE public.topmix_leads TO service_role;

-- Create fresh policies
CREATE POLICY "anon_can_insert" ON topmix_leads
  AS PERMISSIVE FOR INSERT TO anon
  WITH CHECK (true);

CREATE POLICY "service_full_access" ON topmix_leads
  AS PERMISSIVE FOR ALL TO service_role
  USING (true) WITH CHECK (true);

CREATE POLICY "auth_can_read" ON topmix_leads
  AS PERMISSIVE FOR SELECT TO authenticated
  USING (true);

CREATE POLICY "auth_can_update" ON topmix_leads
  AS PERMISSIVE FOR UPDATE TO authenticated
  USING (true) WITH CHECK (true);

-- Force PostgREST schema cache reload
NOTIFY pgrst, 'reload schema';
