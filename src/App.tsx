import React, { useState } from "react"; 
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ContactModal from "@/components/ContactModal"; 
import HeroSection from "@/components/HeroSection";
import { ThemeProvider } from "@/contexts/ThemeContext";
import ThemeToggle from "@/components/ThemeToggle";

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
    <ThemeProvider>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index onOpenContact={openContact} />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>

          <ContactModal
            open={contactOpen}
            onClose={closeContact}
            selectedTopic={selectedTopic}
          />
          
          <ThemeToggle />
        </TooltipProvider>
      </QueryClientProvider>
    </ThemeProvider>
  );
};

export default App;