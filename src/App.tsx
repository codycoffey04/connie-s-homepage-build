import { Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import { ScrollToTop } from "@/components/ScrollToTop";
import { LoadingSpinner } from "@/components/LoadingSpinner";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import { lazyWithRetry } from "@/utils/lazyWithRetry";

// Route-level code splitting with retry logic for failed imports
const Index = lazyWithRetry(() => import("./pages/Index"));
const FortPayne = lazyWithRetry(() => import("./pages/FortPayne"));
const Fyffe = lazyWithRetry(() => import("./pages/Fyffe"));
const Centre = lazyWithRetry(() => import("./pages/Centre"));
const Henagar = lazyWithRetry(() => import("./pages/Henagar"));
const Rainsville = lazyWithRetry(() => import("./pages/Rainsville"));
const Pisgah = lazyWithRetry(() => import("./pages/Pisgah"));
const ValleyHead = lazyWithRetry(() => import("./pages/ValleyHead"));
const About = lazyWithRetry(() => import("./pages/About"));
const Contact = lazyWithRetry(() => import("./pages/Contact"));
const FAQ = lazyWithRetry(() => import("./pages/FAQ"));
const BailBondsGuide = lazyWithRetry(() => import("./pages/BailBondsGuide"));
const HowBailWorksAlabama = lazyWithRetry(() => import("./pages/HowBailWorksAlabama"));
const BailCostsAlabama = lazyWithRetry(() => import("./pages/BailCostsAlabama"));
const DeKalbCountyJailGuide = lazyWithRetry(() => import("./pages/DeKalbCountyJailGuide"));
const CherokeeCountyJailGuide = lazyWithRetry(() => import("./pages/CherokeeCountyJailGuide"));
const CosignerResponsibilities = lazyWithRetry(() => import("./pages/CosignerResponsibilities"));
const TypesOfBailBonds = lazyWithRetry(() => import("./pages/TypesOfBailBonds"));
const BondForfeitureProcess = lazyWithRetry(() => import("./pages/BondForfeitureProcess"));
const WhatHappensAfterArrest = lazyWithRetry(() => import("./pages/WhatHappensAfterArrest"));
const BailBondScams = lazyWithRetry(() => import("./pages/BailBondScams"));
const PrivacyPolicy = lazyWithRetry(() => import("./pages/PrivacyPolicy"));
const TermsOfService = lazyWithRetry(() => import("./pages/TermsOfService"));
const NotFound = lazyWithRetry(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

const App = () => (
  <ErrorBoundary>
    <QueryClientProvider client={queryClient}>
      <HelmetProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <ScrollToTop />
            <ErrorBoundary>
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
            </ErrorBoundary>
          </BrowserRouter>
        </TooltipProvider>
      </HelmetProvider>
    </QueryClientProvider>
  </ErrorBoundary>
);

export default App;
