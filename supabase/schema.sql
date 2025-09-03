-- Equipment Tracker Schema
-- LA-AI Workshop

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Users table (simplified for workshop)
CREATE TABLE users (
  id INTEGER PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT UNIQUE NOT NULL,
  department TEXT,
  trust_score INTEGER DEFAULT 85,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Equipment table
CREATE TABLE equipment (
  id INTEGER PRIMARY KEY,
  name TEXT NOT NULL,
  category TEXT NOT NULL,
  serial_number TEXT UNIQUE NOT NULL,
  status TEXT DEFAULT 'available' CHECK (status IN ('available', 'checked_out', 'maintenance')),
  condition TEXT DEFAULT 'good' CHECK (condition IN ('excellent', 'good', 'fair', 'needs_repair')),
  notes TEXT,
  image_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Checkouts table
CREATE TABLE checkouts (
  id INTEGER PRIMARY KEY,
  equipment_id INTEGER REFERENCES equipment(id),
  user_id INTEGER REFERENCES users(id),
  checkout_date TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  expected_return DATE NOT NULL,
  actual_return TIMESTAMP WITH TIME ZONE,
  condition_out TEXT,
  condition_in TEXT,
  checkout_notes TEXT,
  return_notes TEXT,
  -- is_overdue removed - will calculate in queries instead
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes
CREATE INDEX idx_equipment_status ON equipment(status);
CREATE INDEX idx_checkouts_user ON checkouts(user_id);
CREATE INDEX idx_checkouts_equipment ON checkouts(equipment_id);
-- CREATE INDEX idx_checkouts_overdue ON checkouts(is_overdue) WHERE is_overdue = true;

-- Create view for current checkouts
CREATE VIEW current_checkouts AS
SELECT 
  c.*,
  e.name as equipment_name,
  e.category as equipment_category,
  u.name as user_name,
  u.email as user_email,
  u.department as user_department,
  (c.actual_return IS NULL AND c.expected_return < CURRENT_DATE) as is_overdue
FROM checkouts c
JOIN equipment e ON c.equipment_id = e.id
JOIN users u ON c.user_id = u.id
WHERE c.actual_return IS NULL;

-- Enable RLS
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE equipment ENABLE ROW LEVEL SECURITY;
ALTER TABLE checkouts ENABLE ROW LEVEL SECURITY;

-- Policies (open for workshop - tighten for production)
CREATE POLICY "Public read access" ON users FOR SELECT USING (true);
CREATE POLICY "Public read access" ON equipment FOR SELECT USING (true);
CREATE POLICY "Public read access" ON checkouts FOR SELECT USING (true);
CREATE POLICY "Public insert access" ON checkouts FOR INSERT WITH CHECK (true);
CREATE POLICY "Public update access" ON checkouts FOR UPDATE USING (true);
CREATE POLICY "Public update equipment" ON equipment FOR UPDATE USING (true);