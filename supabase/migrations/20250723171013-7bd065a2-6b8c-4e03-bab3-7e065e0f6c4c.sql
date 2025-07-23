-- Enable pg_cron extension if not already enabled
CREATE EXTENSION IF NOT EXISTS pg_cron;

-- Enable pg_net extension if not already enabled  
CREATE EXTENSION IF NOT EXISTS pg_net;

-- Create a cron job to run the booking reminder function daily at 9:00 AM
SELECT cron.schedule(
  'send-daily-booking-reminders',
  '0 9 * * *', -- Run at 9:00 AM every day
  $$
  SELECT
    net.http_post(
        url:='https://nknqzotxlvxhdqylvpxz.supabase.co/functions/v1/send-booking-reminders',
        headers:='{"Content-Type": "application/json", "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5rbnF6b3R4bHZ4aGRxeWx2cHh6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDY4OTU5MDksImV4cCI6MjA2MjQ3MTkwOX0.Cs405K6FdGejaMT35GYteLzjvKMGPEWGzA5CUgl51GE"}'::jsonb,
        body:='{}'::jsonb
    ) as request_id;
  $$
);