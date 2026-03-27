import { Suspense, lazy } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Keep Index as regular import for fastest initial load
import Index from "./pages/Index";

// Lazy load all other pages for code splitting
const NotFound = lazy(() => import("./pages/NotFound"));
const ServiceDetail = lazy(() => import("./pages/ServiceDetail"));
const ScheduleService = lazy(() => import("./pages/ScheduleService"));
const BookingRedirect = lazy(() => import("./pages/BookingRedirect"));
const EmbeddedBooking = lazy(() => import("./pages/EmbeddedBooking"));
const TermsOfService = lazy(() => import("./pages/TermsOfService"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const ContactPage = lazy(() => import("./pages/Contact"));
const PackoutLanding1 = lazy(() => import("./pages/PackoutLanding1"));
const PackoutLanding2 = lazy(() => import("./pages/PackoutLanding2"));
const PackoutLanding3 = lazy(() => import("./pages/PackoutLanding3"));
const PackoutLanding4 = lazy(() => import("./pages/PackoutLanding4"));
const HomepageDemo = lazy(() => import("./pages/HomepageDemo"));
const OperationsConsulting = lazy(() => import("./pages/OperationsConsulting"));
const ProductionWorkflow = lazy(() => import("./pages/ProductionWorkflow"));
const PackoutSystems = lazy(() => import("./pages/PackoutSystems"));
const EstimatingWorkflow = lazy(() => import("./pages/EstimatingWorkflow"));
const SubcontractorNetwork = lazy(() => import("./pages/SubcontractorNetwork"));
const InteriorMaterials = lazy(() => import("./pages/InteriorMaterials"));
const InteriorDesign = lazy(() => import("./pages/InteriorDesign"));
const Consultation = lazy(() => import("./pages/Consultation"));

const queryClient = new QueryClient();

// Loading fallback component
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-gray-50">
    <div className="flex flex-col items-center gap-4">
      <div className="w-12 h-12 border-4 border-[#D4611C] border-t-transparent rounded-full animate-spin"></div>
      <p className="text-gray-600 font-medium">Loading...</p>
    </div>
  </div>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/services/:serviceId" element={<ServiceDetail />} />
            <Route path="/schedule" element={<ScheduleService />} />
            <Route path="/booking-redirect" element={<BookingRedirect />} />
            <Route path="/book" element={<EmbeddedBooking />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/packout-landing-1" element={<PackoutLanding1 />} />
            <Route path="/packout-landing-2" element={<PackoutLanding2 />} />
            <Route path="/packout-landing-3" element={<PackoutLanding3 />} />
            <Route path="/packout-landing-4" element={<PackoutLanding4 />} />
            <Route path="/homepage-demo" element={<HomepageDemo />} />
            <Route path="/operations-consulting" element={<OperationsConsulting />} />
            <Route path="/production-workflow" element={<ProductionWorkflow />} />
            <Route path="/packout-systems" element={<PackoutSystems />} />
            <Route path="/estimating-workflow" element={<EstimatingWorkflow />} />
            <Route path="/subcontractor-network" element={<SubcontractorNetwork />} />
            <Route path="/interior-materials" element={<InteriorMaterials />} />
            <Route path="/interior-design" element={<InteriorDesign />} />
            <Route path="/consultation" element={<Consultation />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
