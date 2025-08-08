-- Add secondary contractor columns to packout_services
ALTER TABLE public.packout_services
  ADD COLUMN IF NOT EXISTS contractor_name2 text,
  ADD COLUMN IF NOT EXISTS contractor_email2 text;