-- Add LemonSqueezy customer ID to teams table
-- Run this in Supabase SQL Editor

ALTER TABLE teams
ADD COLUMN IF NOT EXISTS lemon_squeezy_customer_id TEXT;

-- Create index for faster lookups
CREATE INDEX IF NOT EXISTS idx_teams_lemon_squeezy_customer_id
ON teams(lemon_squeezy_customer_id);
