import React, { useState } from "react"; 
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import TripSync from "./pages/TripSync";
import Neaaa from "./pages/Neaaa";
import NotFound from "./pages/NotFound";
import ContactModal from "@/components/ContactModal"; 

const queryClient = new QueryClient();

const App = () => {
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
            <Route path="/" element={<Index onOpenContact={openContact} />} />
            <Route path="/tripsync" element={<TripSync />} />
            <Route path="/neaaa" element={<Neaaa />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>

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

