import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import Index from "./pages/Index";
import FortPayne from "./pages/FortPayne";
import Fyffe from "./pages/Fyffe";
import Centre from "./pages/Centre";
import Henagar from "./pages/Henagar";
import Rainsville from "./pages/Rainsville";
import Pisgah from "./pages/Pisgah";
import ValleyHead from "./pages/ValleyHead";
import About from "./pages/About";
import Contact from "./pages/Contact";
import FAQ from "./pages/FAQ";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <HelmetProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
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
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </HelmetProvider>
  </QueryClientProvider>
);

export default App;
