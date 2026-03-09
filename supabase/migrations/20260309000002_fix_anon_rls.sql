-- Drop the old policy that isn't working
DROP POLICY IF EXISTS "anon_insert_leads" ON topmix_leads;

-- Recreate with explicit permissions
CREATE POLICY "allow_anon_insert" ON topmix_leads
  FOR INSERT
  WITH CHECK (true);
