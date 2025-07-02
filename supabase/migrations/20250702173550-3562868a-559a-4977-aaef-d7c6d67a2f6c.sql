-- Update RLS policies to allow public access for service insertions

-- Drop existing restrictive policies for packout_services
DROP POLICY IF EXISTS "Users can create packout services" ON public.packout_services;
DROP POLICY IF EXISTS "Users can view their own packout services" ON public.packout_services;
DROP POLICY IF EXISTS "Users can update their own packout services" ON public.packout_services;

-- Drop existing restrictive policies for estimating_services  
DROP POLICY IF EXISTS "Users can create estimating services" ON public.estimating_services;
DROP POLICY IF EXISTS "Users can view their own estimating services" ON public.estimating_services;
DROP POLICY IF EXISTS "Users can update their own estimating services" ON public.estimating_services;

-- Drop existing restrictive policies for production_services
DROP POLICY IF EXISTS "Users can create production services" ON public.production_services;
DROP POLICY IF EXISTS "Users can view their own production services" ON public.production_services;
DROP POLICY IF EXISTS "Users can update their own production services" ON public.production_services;

-- Create new public access policies for packout_services
CREATE POLICY "Allow public insert on packout services" 
ON public.packout_services 
FOR INSERT 
WITH CHECK (true);

CREATE POLICY "Allow public select on packout services" 
ON public.packout_services 
FOR SELECT 
USING (true);

CREATE POLICY "Allow public update on packout services" 
ON public.packout_services 
FOR UPDATE 
USING (true);

-- Create new public access policies for estimating_services
CREATE POLICY "Allow public insert on estimating services" 
ON public.estimating_services 
FOR INSERT 
WITH CHECK (true);

CREATE POLICY "Allow public select on estimating services" 
ON public.estimating_services 
FOR SELECT 
USING (true);

CREATE POLICY "Allow public update on estimating services" 
ON public.estimating_services 
FOR UPDATE 
USING (true);

-- Create new public access policies for production_services
CREATE POLICY "Allow public insert on production services" 
ON public.production_services 
FOR INSERT 
WITH CHECK (true);

CREATE POLICY "Allow public select on production services" 
ON public.production_services 
FOR SELECT 
USING (true);

CREATE POLICY "Allow public update on production services" 
ON public.production_services 
FOR UPDATE 
USING (true);