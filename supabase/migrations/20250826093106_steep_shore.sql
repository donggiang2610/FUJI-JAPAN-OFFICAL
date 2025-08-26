/*
  # Create serial_numbers table

  1. New Tables
    - `serial_numbers`
      - `id` (uuid, primary key)
      - `serial_number` (text, unique, required)
      - `product_id` (uuid, nullable - references products table)
      - `installation_date` (text, nullable - stores year or date)
      - `location` (text, nullable)
      - `status` (text, nullable - active/maintenance/retired)
      - `notes` (text, nullable)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)

  2. Security
    - Enable RLS on `serial_numbers` table
    - Add policy for public read access (since this is for serial number lookup)
    - Add policy for authenticated users to manage data

  3. Indexes
    - Unique index on serial_number for fast lookups
    - Index on status for filtering
*/

-- Create the serial_numbers table
CREATE TABLE IF NOT EXISTS serial_numbers (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  serial_number text UNIQUE NOT NULL,
  product_id uuid DEFAULT NULL,
  installation_date text DEFAULT NULL,
  location text DEFAULT NULL,
  status text DEFAULT 'active',
  notes text DEFAULT NULL,
  created_at timestamptz DEFAULT now() NOT NULL,
  updated_at timestamptz DEFAULT now() NOT NULL
);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_serial_numbers_serial_number ON serial_numbers(serial_number);
CREATE INDEX IF NOT EXISTS idx_serial_numbers_status ON serial_numbers(status);
CREATE INDEX IF NOT EXISTS idx_serial_numbers_created_at ON serial_numbers(created_at DESC);

-- Enable Row Level Security
ALTER TABLE serial_numbers ENABLE ROW LEVEL SECURITY;

-- Create policies for public access (serial number lookup should be public)
CREATE POLICY "Enable read access for all users"
  ON serial_numbers
  FOR SELECT
  USING (true);

-- Create policy for authenticated users to insert/update/delete
CREATE POLICY "Enable full access for authenticated users"
  ON serial_numbers
  FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Create trigger to automatically update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = now();
    RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_serial_numbers_updated_at
    BEFORE UPDATE ON serial_numbers
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();