-- Completely disable RLS to test if inserts work without it
ALTER TABLE topmix_leads DISABLE ROW LEVEL SECURITY;

-- Notify PostgREST to reload its schema cache
NOTIFY pgrst, 'reload schema';
