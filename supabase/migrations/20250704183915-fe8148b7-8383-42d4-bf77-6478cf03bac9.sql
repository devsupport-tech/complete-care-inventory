-- Add booking_date column to packout_services table
ALTER TABLE public.packout_services 
ADD COLUMN booking_date TIMESTAMP WITH TIME ZONE;