import { Suspense, lazy } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import { ScrollToTop } from "@/components/ScrollToTop";
import { LoadingSpinner } from "@/components/LoadingSpinner";

// Route-level code splitting with React.lazy()
const Index = lazy(() => import("./pages/Index"));
const FortPayne = lazy(() => import("./pages/FortPayne"));
const Fyffe = lazy(() => import("./pages/Fyffe"));
const Centre = lazy(() => import("./pages/Centre"));
const Henagar = lazy(() => import("./pages/Henagar"));
const Rainsville = lazy(() => import("./pages/Rainsville"));
const Pisgah = lazy(() => import("./pages/Pisgah"));
const ValleyHead = lazy(() => import("./pages/ValleyHead"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const FAQ = lazy(() => import("./pages/FAQ"));
const BailBondsGuide = lazy(() => import("./pages/BailBondsGuide"));
const HowBailWorksAlabama = lazy(() => import("./pages/HowBailWorksAlabama"));
const BailCostsAlabama = lazy(() => import("./pages/BailCostsAlabama"));
const DeKalbCountyJailGuide = lazy(() => import("./pages/DeKalbCountyJailGuide"));
const CherokeeCountyJailGuide = lazy(() => import("./pages/CherokeeCountyJailGuide"));
const CosignerResponsibilities = lazy(() => import("./pages/CosignerResponsibilities"));
const TypesOfBailBonds = lazy(() => import("./pages/TypesOfBailBonds"));
const BondForfeitureProcess = lazy(() => import("./pages/BondForfeitureProcess"));
const WhatHappensAfterArrest = lazy(() => import("./pages/WhatHappensAfterArrest"));
const BailBondScams = lazy(() => import("./pages/BailBondScams"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const TermsOfService = lazy(() => import("./pages/TermsOfService"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <HelmetProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/fort-payne" element={<FortPayne />} />
              <Route path="/fyffe" element={<Fyffe />} />
              <Route path="/centre" element={<Centre />} />
              <Route path="/henagar" element={<Henagar />} />
              <Route path="/rainsville" element={<Rainsville />} />
              <Route path="/pisgah" element={<Pisgah />} />
              <Route path="/valley-head" element={<ValleyHead />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/bail-bonds-guide" element={<BailBondsGuide />} />
              <Route path="/bail-bonds-guide/how-bail-works-alabama" element={<HowBailWorksAlabama />} />
              <Route path="/bail-bonds-guide/bail-costs-alabama" element={<BailCostsAlabama />} />
              <Route path="/bail-bonds-guide/dekalb-county-jail-guide" element={<DeKalbCountyJailGuide />} />
              <Route path="/bail-bonds-guide/cherokee-county-jail-guide" element={<CherokeeCountyJailGuide />} />
              <Route path="/bail-bonds-guide/cosigner-responsibilities" element={<CosignerResponsibilities />} />
              <Route path="/bail-bonds-guide/types-of-bail-bonds" element={<TypesOfBailBonds />} />
              <Route path="/bail-bonds-guide/bond-forfeiture-process" element={<BondForfeitureProcess />} />
              <Route path="/bail-bonds-guide/what-happens-after-arrest" element={<WhatHappensAfterArrest />} />
              <Route path="/bail-bonds-guide/bail-bond-scams" element={<BailBondScams />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/terms-of-service" element={<TermsOfService />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </TooltipProvider>
    </HelmetProvider>
  </QueryClientProvider>
);

export default App;
