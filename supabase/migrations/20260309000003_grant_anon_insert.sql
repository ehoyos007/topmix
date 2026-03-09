-- The issue is the default column values - anon needs USAGE on sequences and DEFAULT expressions
-- Let's also ensure the GRANT is correct and try a broader policy

-- Re-grant INSERT explicitly
GRANT USAGE ON SCHEMA public TO anon;
GRANT INSERT ON TABLE public.topmix_leads TO anon;

-- Drop all existing insert policies and create a simple one
DROP POLICY IF EXISTS "allow_anon_insert" ON topmix_leads;
DROP POLICY IF EXISTS "anon_insert_leads" ON topmix_leads;

-- Create a permissive policy for insert (applies to all roles including anon)
CREATE POLICY "public_insert" ON topmix_leads
  AS PERMISSIVE
  FOR INSERT
  TO public
  WITH CHECK (true);
