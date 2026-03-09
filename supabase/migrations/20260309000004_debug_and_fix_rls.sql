-- Nuclear option: disable RLS entirely, then re-enable with correct policy
-- First drop ALL existing policies on the table
DO $$
DECLARE
  pol RECORD;
BEGIN
  FOR pol IN SELECT policyname FROM pg_policies WHERE tablename = 'topmix_leads'
  LOOP
    EXECUTE format('DROP POLICY IF EXISTS %I ON topmix_leads', pol.policyname);
  END LOOP;
END $$;

-- Temporarily disable RLS to confirm table works
ALTER TABLE topmix_leads DISABLE ROW LEVEL SECURITY;

-- Re-enable with correct policies
ALTER TABLE topmix_leads ENABLE ROW LEVEL SECURITY;

-- Grant permissions
GRANT USAGE ON SCHEMA public TO anon;
GRANT USAGE ON SCHEMA public TO authenticated;
GRANT INSERT ON TABLE public.topmix_leads TO anon;
GRANT SELECT, UPDATE ON TABLE public.topmix_leads TO authenticated;
GRANT ALL ON TABLE public.topmix_leads TO service_role;

-- Single permissive insert policy for anon
CREATE POLICY "allow_public_insert" ON topmix_leads
  AS PERMISSIVE
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Service role full access
CREATE POLICY "service_role_all" ON topmix_leads
  AS PERMISSIVE
  FOR ALL
  TO service_role
  USING (true)
  WITH CHECK (true);

-- Authenticated read/update for CRM
CREATE POLICY "authenticated_select" ON topmix_leads
  AS PERMISSIVE
  FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "authenticated_update" ON topmix_leads
  AS PERMISSIVE
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);
