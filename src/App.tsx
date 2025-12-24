import React, { useState } from "react"; // ✅ added
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ContactModal from "@/components/ContactModal"; // ✅ added
import HeroSection from "@/components/HeroSection";


const queryClient = new QueryClient();

const App = () => {
  // ✅ added state + functions
  const [contactOpen, setContactOpen] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState();

  const openContact = (topic) => {
    setSelectedTopic(topic);
    setContactOpen(true);
  };
  const closeContact = () => setContactOpen(false);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            {/* ✅ pass openContact into Index so its buttons can trigger modal */}
            <Route path="/" element={<Index onOpenContact={openContact} />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>

        {/* ✅ mount ContactModal globally */}
        <ContactModal
          open={contactOpen}
          onClose={closeContact}
          selectedTopic={selectedTopic}
        />
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;