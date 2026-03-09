-- TopMix Concrete: Contact form leads table
CREATE TABLE IF NOT EXISTS topmix_leads (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  full_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  service TEXT NOT NULL,
  message TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'new' CHECK (status IN ('new', 'contacted', 'quoted', 'won', 'lost')),
  source TEXT DEFAULT 'website',
  notes TEXT,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- Index for quick filtering by status
CREATE INDEX IF NOT EXISTS idx_topmix_leads_status ON topmix_leads(status);

-- Index for sorting by newest first
CREATE INDEX IF NOT EXISTS idx_topmix_leads_created ON topmix_leads(created_at DESC);

-- Enable RLS
ALTER TABLE topmix_leads ENABLE ROW LEVEL SECURITY;

-- Allow anonymous inserts (for the website contact form)
CREATE POLICY "anon_insert_leads" ON topmix_leads
  FOR INSERT TO anon
  WITH CHECK (true);

-- Only service_role can read, update, delete (for admin/CRM use)
CREATE POLICY "service_all_leads" ON topmix_leads
  FOR ALL TO service_role
  USING (true)
  WITH CHECK (true);

-- Auto-update the updated_at timestamp
CREATE OR REPLACE FUNCTION update_topmix_leads_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE OR REPLACE TRIGGER topmix_leads_updated_at
  BEFORE UPDATE ON topmix_leads
  FOR EACH ROW
  EXECUTE FUNCTION update_topmix_leads_updated_at();

COMMENT ON TABLE topmix_leads IS 'Contact form submissions and leads for TopMix Concrete website';
