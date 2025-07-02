-- Create table for packout services
CREATE TABLE public.packout_services (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id),
  name TEXT,
  email TEXT,
  phone TEXT,
  service TEXT,
  city TEXT,
  message TEXT,
  is_insurance_claim BOOLEAN DEFAULT false,
  contractor_name TEXT,
  contractor_phone TEXT,
  contractor_email TEXT,
  claim_name TEXT,
  claim_phone TEXT,
  claim_email TEXT,
  status TEXT DEFAULT 'scheduled',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create table for estimating services
CREATE TABLE public.estimating_services (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id),
  name TEXT,
  email TEXT,
  phone TEXT,
  service TEXT,
  city TEXT,
  message TEXT,
  is_insurance_claim BOOLEAN DEFAULT false,
  status TEXT DEFAULT 'scheduled',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create table for production management services
CREATE TABLE public.production_services (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id),
  name TEXT,
  email TEXT,
  phone TEXT,
  service TEXT,
  city TEXT,
  message TEXT,
  is_insurance_claim BOOLEAN DEFAULT false,
  status TEXT DEFAULT 'scheduled',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.packout_services ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.estimating_services ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.production_services ENABLE ROW LEVEL SECURITY;

-- Create policies for packout services
CREATE POLICY "Users can view their own packout services" 
ON public.packout_services 
FOR SELECT 
USING (auth.uid() = user_id);

CREATE POLICY "Users can create packout services" 
ON public.packout_services 
FOR INSERT 
WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own packout services" 
ON public.packout_services 
FOR UPDATE 
USING (auth.uid() = user_id);

-- Create policies for estimating services
CREATE POLICY "Users can view their own estimating services" 
ON public.estimating_services 
FOR SELECT 
USING (auth.uid() = user_id);

CREATE POLICY "Users can create estimating services" 
ON public.estimating_services 
FOR INSERT 
WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own estimating services" 
ON public.estimating_services 
FOR UPDATE 
USING (auth.uid() = user_id);

-- Create policies for production services
CREATE POLICY "Users can view their own production services" 
ON public.production_services 
FOR SELECT 
USING (auth.uid() = user_id);

CREATE POLICY "Users can create production services" 
ON public.production_services 
FOR INSERT 
WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own production services" 
ON public.production_services 
FOR UPDATE 
USING (auth.uid() = user_id);

-- Create triggers for automatic timestamp updates
CREATE TRIGGER update_packout_services_updated_at
BEFORE UPDATE ON public.packout_services
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_estimating_services_updated_at
BEFORE UPDATE ON public.estimating_services
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_production_services_updated_at
BEFORE UPDATE ON public.production_services
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();