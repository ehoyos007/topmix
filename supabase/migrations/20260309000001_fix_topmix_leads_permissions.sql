-- Grant INSERT permission to anon role for the contact form
GRANT INSERT ON topmix_leads TO anon;

-- Grant full access to service_role
GRANT ALL ON topmix_leads TO service_role;

-- Grant authenticated users read access (for future CRM dashboard)
GRANT SELECT, UPDATE ON topmix_leads TO authenticated;

-- Allow authenticated users to view and update leads
CREATE POLICY "authenticated_read_leads" ON topmix_leads
  FOR SELECT TO authenticated
  USING (true);

CREATE POLICY "authenticated_update_leads" ON topmix_leads
  FOR UPDATE TO authenticated
  USING (true)
  WITH CHECK (true);
