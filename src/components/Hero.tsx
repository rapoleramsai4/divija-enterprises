"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Leaf, Shield, CheckCircle2, PhoneCall, Sparkles, Compass } from "lucide-react";
import LorryAnimation from "./LorryAnimation";

interface HeroProps {
  onQuoteClick?: () => void;
}

const rotatingSynonyms = [
  "Sustainable Future",
  "Greener Tomorrow",
  "Cleaner Legacy",
  "Resilient Habitat",
  "Net-Zero World",
  "Eco-Conscious Era",
];

export default function Hero({ onQuoteClick }: HeroProps) {
  const [synonymIndex, setSynonymIndex] = useState(0);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    const rotate = () => {
      setSynonymIndex((prev) => (prev + 1) % rotatingSynonyms.length);
      timeoutId = setTimeout(rotate, 3000);
    };

    timeoutId = setTimeout(rotate, 3000);
    return () => clearTimeout(timeoutId);
  }, []);
  return (
    <section id="home" className="relative pt-10 sm:pt-16 pb-0 bg-white bg-architect-grid overflow-hidden border-b border-stone-200/80">
      {/* Subtle Architectural Drafting Corner Crosshairs */}
      <div className="absolute top-4 left-4 text-emerald-800/25 font-mono text-[10px] hidden lg:flex items-center gap-1.5 select-none pointer-events-none">
        <span className="text-emerald-700/40 text-xs font-bold">+</span>
        <span>COORD 12°58&apos;23&quot;N 77°35&apos;45&quot;E</span>
        <span className="text-emerald-700/30">|</span>
        <span>DIVIJA-GRID-01</span>
      </div>

      <div className="absolute top-4 right-4 text-emerald-800/25 font-mono text-[10px] hidden lg:flex items-center gap-1.5 select-none pointer-events-none">
        <span>SUSTAINABLE CIVIL BLUEPRINT</span>
        <span className="text-emerald-700/30">|</span>
        <span className="text-emerald-700/40 text-xs font-bold">+</span>
      </div>

      {/* Decorative Topographic & Elevation Curves Overlay (Low Opacity) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none -z-0 opacity-40">
        <svg
          className="w-full h-full"
          viewBox="0 0 1440 600"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Topographic elevation contours */}
          <path
            d="M-100 120 C 300 40, 700 240, 1100 80 C 1300 -10, 1500 180, 1600 120"
            stroke="#065f46"
            strokeWidth="0.85"
            strokeOpacity="0.12"
            strokeDasharray="4 4"
          />
          <path
            d="M-50 220 C 350 160, 750 320, 1150 190 C 1350 120, 1520 280, 1650 210"
            stroke="#065f46"
            strokeWidth="1"
            strokeOpacity="0.15"
          />
          <path
            d="M-80 340 C 400 260, 800 420, 1200 290 C 1400 220, 1550 370, 1680 320"
            stroke="#065f46"
            strokeWidth="0.85"
            strokeOpacity="0.1"
          />
          <circle cx="200" cy="180" r="120" stroke="#065f46" strokeWidth="0.65" strokeOpacity="0.08" strokeDasharray="3 3" />
          <circle cx="200" cy="180" r="220" stroke="#065f46" strokeWidth="0.5" strokeOpacity="0.06" strokeDasharray="2 4" />
          <circle cx="1250" cy="220" r="140" stroke="#065f46" strokeWidth="0.65" strokeOpacity="0.08" strokeDasharray="3 3" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Eco Badge with drafting bracket marks */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50/90 border border-emerald-300/80 text-emerald-900 text-xs sm:text-sm font-semibold mb-6 shadow-2xs backdrop-blur-xs">
            <Leaf className="w-4 h-4 text-emerald-700 fill-emerald-600/30" />
            <span>Eco-Friendly Construction & Infrastructure</span>
            <span className="hidden sm:inline text-emerald-400">•</span>
            <span className="hidden sm:inline font-normal text-emerald-800">
              Divija Enterprises
            </span>
          </div>

          {/* Bold Welcoming Headline with Rotating Synonyms */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-stone-900 leading-[1.2] mb-6">
            Building a{" "}
            <span className="text-emerald-700 underline decoration-emerald-400 decoration-wavy decoration-2 inline-block">
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={synonymIndex}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.28, ease: "easeOut" }}
                  className="inline-block"
                >
                  {rotatingSynonyms[synonymIndex % rotatingSynonyms.length]}
                </motion.span>
              </AnimatePresence>
            </span>
            Engineered for Generations
          </h1>

          {/* Eco-Friendly Quotation Required by User */}
          <div className="my-6 inline-block">
            <div className="relative px-6 py-4 rounded-2xl bg-gradient-to-r from-emerald-900 via-emerald-800 to-teal-950 text-white shadow-xl border border-emerald-700/60 max-w-2xl mx-auto">
              <div className="absolute -top-3 left-6 px-2.5 py-0.5 rounded-md bg-amber-400 text-stone-900 text-[10px] font-bold uppercase tracking-wider flex items-center gap-1 shadow-xs">
                <Sparkles className="w-2.5 h-2.5" />
                Our Sustainable Creed
              </div>
              <p className="text-base sm:text-lg italic font-medium text-emerald-100 tracking-wide">
                &ldquo;Building a sustainable future today, for a greener tomorrow.&rdquo;
              </p>
            </div>
          </div>

          {/* Description */}
          <p className="text-base sm:text-lg text-stone-600 max-w-2xl mx-auto leading-relaxed mb-8">
            Divija Enterprises delivers comprehensive civil engineering, sustainable road infrastructure, certified green building materials, and heavy fleet solutions with a steadfast commitment to environmental preservation.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            <a
              href="#contact"
              onClick={onQuoteClick}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl text-base font-semibold text-white bg-emerald-700 hover:bg-emerald-800 active:bg-emerald-900 shadow-md hover:shadow-lg transition-all"
            >
              <span>Get a Quote</span>
              <ArrowRight className="w-5 h-5" />
            </a>

            <a
              href="#services"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl text-base font-semibold text-stone-800 bg-white/95 hover:bg-stone-50 border border-stone-300 shadow-2xs hover:border-emerald-500 transition-all backdrop-blur-xs"
            >
              <span>Our Services</span>
            </a>

            <a
              href="tel:+919876543210"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl text-sm font-semibold text-emerald-900 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 transition-colors"
            >
              <PhoneCall className="w-4 h-4 text-emerald-700" />
              <span>Talk to an Expert</span>
            </a>
          </div>

          {/* Trust Value Badges with Drafting Precision Borders */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 max-w-3xl mx-auto mb-10 text-left">
            <div className="flex items-center gap-2.5 p-3 rounded-lg bg-white/95 border border-stone-200/90 shadow-2xs backdrop-blur-xs hover:border-emerald-400 transition-colors">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
              <div>
                <div className="text-xs font-bold text-stone-900">100% Eco-Compliant</div>
                <div className="text-[11px] text-stone-500">Certified green materials</div>
              </div>
            </div>

            <div className="flex items-center gap-2.5 p-3 rounded-lg bg-white/95 border border-stone-200/90 shadow-2xs backdrop-blur-xs hover:border-emerald-400 transition-colors">
              <Shield className="w-5 h-5 text-emerald-600 shrink-0" />
              <div>
                <div className="text-xs font-bold text-stone-900">Safety First</div>
                <div className="text-[11px] text-stone-500">Zero-accident protocols</div>
              </div>
            </div>

            <div className="flex items-center gap-2.5 p-3 rounded-lg bg-white/95 border border-stone-200/90 shadow-2xs backdrop-blur-xs hover:border-emerald-400 transition-colors">
              <Leaf className="w-5 h-5 text-emerald-600 shrink-0" />
              <div>
                <div className="text-xs font-bold text-stone-900">Carbon Reduction</div>
                <div className="text-[11px] text-stone-500">Recycled aggregates</div>
              </div>
            </div>

            <div className="flex items-center gap-2.5 p-3 rounded-lg bg-white/95 border border-stone-200/90 shadow-2xs backdrop-blur-xs hover:border-emerald-400 transition-colors">
              <Compass className="w-5 h-5 text-emerald-600 shrink-0" />
              <div>
                <div className="text-xs font-bold text-stone-900">On-Time Logistics</div>
                <div className="text-[11px] text-stone-500">Dedicated transport fleet</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Lorry Animation Crucial Section: Placed right at the bottom of the hero section */}
      <div className="w-full mt-4 relative z-10">
        <LorryAnimation />
      </div>
    </section>
  );
}
