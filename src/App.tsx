
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ServiceDetail from "./pages/ServiceDetail";
import ScheduleService from "./pages/ScheduleService";
import BookingRedirect from "./pages/BookingRedirect";
import EmbeddedBooking from "./pages/EmbeddedBooking";
import TermsOfService from "./pages/TermsOfService";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import ContactPage from "./pages/Contact";
import PackoutLanding1 from "./pages/PackoutLanding1";
import PackoutLanding2 from "./pages/PackoutLanding2";
import PackoutLanding3 from "./pages/PackoutLanding3";
import PackoutLanding4 from "./pages/PackoutLanding4";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
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
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
