"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import InstrumentStudio from "@/components/InstrumentStudio";
import OrganMilestone from "@/components/OrganMilestone";
import BentoServices from "@/components/BentoServices";
import WhyZatil from "@/components/WhyZatil";
import PhotoGallery from "@/components/PhotoGallery";
import CompanyStory from "@/components/CompanyStory";
import QuoteModal from "@/components/QuoteModal";
import Footer from "@/components/Footer";

export default function HomePage() {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string>("");

  const handleOpenQuote = (serviceName?: string) => {
    if (serviceName) {
      setSelectedService(serviceName);
    } else {
      setSelectedService("Pipe Organ Façade Installation");
    }
    setQuoteModalOpen(true);
  };

  const handleCloseQuote = () => {
    setQuoteModalOpen(false);
  };

  return (
    <main className="min-h-screen bg-white text-[#111827] overflow-x-hidden">
      {/* Frosted Glass Navigation */}
      <Navbar onOpenQuoteModal={() => handleOpenQuote()} />

      {/* Hero Section */}
      <Hero onOpenQuoteModal={() => handleOpenQuote()} />

      {/* Handcrafted String Instruments */}
      <InstrumentStudio onOpenQuoteModal={(prod) => handleOpenQuote(prod)} />

      {/* 51+ Church Pipe Organ Installations */}
      <OrganMilestone onOpenQuoteModal={() => handleOpenQuote("Pipe Organ Façade Installation")} />

      {/* Specialized Services & Capabilities */}
      <BentoServices onOpenQuoteModal={(svc) => handleOpenQuote(svc)} />

      {/* Why Nigerian Churches & Musicians Choose Zatil */}
      <WhyZatil onOpenQuoteModal={() => handleOpenQuote()} />

      {/* Visual Project Portfolio & Photo Archive */}
      <PhotoGallery />

      {/* Heritage, Lineage & Leadership */}
      <CompanyStory />

      {/* Consultation & Quote Modal */}
      <QuoteModal
        isOpen={quoteModalOpen}
        onClose={handleCloseQuote}
        preselectedService={selectedService}
      />

      {/* Footer */}
      <Footer />
    </main>
  );
}
