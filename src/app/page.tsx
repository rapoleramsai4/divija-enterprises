"use client";

import React, { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import SustainabilityPillars from "@/components/SustainabilityPillars";
import AboutFounder from "@/components/AboutFounder";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function LandingPage() {
  const [selectedService, setSelectedService] = useState<string>("Civil works");

  const handleSelectService = (serviceName: string) => {
    setSelectedService(serviceName);
    const contactElem = document.getElementById("contact");
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleQuoteClick = () => {
    const contactElem = document.getElementById("contact");
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#fbfdfa] text-stone-900 selection:bg-emerald-200 selection:text-emerald-950">
      {/* Header */}
      <Header onQuoteClick={handleQuoteClick} />

      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section with Integrated Lorry Animation */}
        <Hero onQuoteClick={handleQuoteClick} />

        {/* 9 Specialized Services Grid */}
        <Services onSelectService={handleSelectService} />

        {/* Eco-Friendly Construction Pillars */}
        <SustainabilityPillars />

        {/* About & Founder M. Sudharshan Section */}
        <AboutFounder />

        {/* Contact Form with TanStack Query Mutation & Company Info Placeholders */}
        <ContactSection initialService={selectedService} />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
