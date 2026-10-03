"use client";

import React from "react";
import { ArrowRight, Leaf, Shield, CheckCircle2, PhoneCall, Sparkles } from "lucide-react";
import LorryAnimation from "./LorryAnimation";

interface HeroProps {
  onQuoteClick?: () => void;
}

export default function Hero({ onQuoteClick }: HeroProps) {
  return (
    <section id="home" className="relative pt-8 sm:pt-14 pb-0 bg-gradient-to-b from-emerald-50/50 via-[#fcfdfa] to-stone-50 overflow-hidden">
      {/* Background organic blur circles */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 pointer-events-none overflow-hidden -z-10">
        <div className="absolute top-0 right-10 w-96 h-96 rounded-full bg-emerald-200/30 blur-3xl" />
        <div className="absolute top-20 left-10 w-80 h-80 rounded-full bg-amber-200/20 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          {/* Eco Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-100/80 border border-emerald-300/80 text-emerald-900 text-xs sm:text-sm font-semibold mb-6 shadow-2xs">
            <Leaf className="w-4 h-4 text-emerald-700 fill-emerald-600/30" />
            <span>Eco-Friendly Construction & Infrastructure</span>
            <span className="hidden sm:inline text-emerald-500">•</span>
            <span className="hidden sm:inline font-normal text-emerald-800">
              Divija Enterprises
            </span>
          </div>

          {/* Bold Welcoming Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-stone-900 leading-[1.15] mb-6">
            Building a <span className="text-emerald-700 underline decoration-emerald-400 decoration-wavy decoration-2">Sustainable Future</span>, Engineered for Generations
          </h1>

          {/* Eco-Friendly Quotation Required by User */}
          <div className="my-6 inline-block">
            <div className="relative px-6 py-4 rounded-2xl bg-gradient-to-r from-emerald-900 via-emerald-800 to-teal-950 text-white shadow-lg border border-emerald-700/60 max-w-2xl mx-auto">
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
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl text-base font-semibold text-stone-800 bg-white hover:bg-stone-50 border border-stone-300 shadow-2xs hover:border-emerald-500 transition-all"
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

          {/* Trust Value Badges */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 max-w-3xl mx-auto mb-10 text-left">
            <div className="flex items-center gap-2.5 p-3 rounded-lg bg-white/80 border border-stone-200/80 shadow-2xs">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
              <div>
                <div className="text-xs font-bold text-stone-900">100% Eco-Compliant</div>
                <div className="text-[11px] text-stone-500">Certified green materials</div>
              </div>
            </div>

            <div className="flex items-center gap-2.5 p-3 rounded-lg bg-white/80 border border-stone-200/80 shadow-2xs">
              <Shield className="w-5 h-5 text-emerald-600 shrink-0" />
              <div>
                <div className="text-xs font-bold text-stone-900">Safety First</div>
                <div className="text-[11px] text-stone-500">Zero-accident protocols</div>
              </div>
            </div>

            <div className="flex items-center gap-2.5 p-3 rounded-lg bg-white/80 border border-stone-200/80 shadow-2xs">
              <Leaf className="w-5 h-5 text-emerald-600 shrink-0" />
              <div>
                <div className="text-xs font-bold text-stone-900">Carbon Reduction</div>
                <div className="text-[11px] text-stone-500">Recycled aggregates</div>
              </div>
            </div>

            <div className="flex items-center gap-2.5 p-3 rounded-lg bg-white/80 border border-stone-200/80 shadow-2xs">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
              <div>
                <div className="text-xs font-bold text-stone-900">On-Time Logistics</div>
                <div className="text-[11px] text-stone-500">Dedicated transport fleet</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Lorry Animation Crucial Section: Placed right at the bottom of the hero section */}
      <div className="w-full mt-4">
        <LorryAnimation />
      </div>
    </section>
  );
}
