"use client";

import React from "react";
import {
  Quote,
  Award,
  TreePine,
  ShieldCheck,
  Target,
  Sparkles,
  Users2,
  HardHat,
} from "lucide-react";

export default function AboutFounder() {
  return (
    <section id="about" className="py-20 bg-white bg-architect-grid relative overflow-hidden border-t border-stone-200/80">
      {/* Subtle CAD Drafting Marks */}
      <div className="absolute top-4 left-6 text-emerald-800/30 font-mono text-[10px] hidden sm:flex items-center gap-1 select-none pointer-events-none z-0">
        <span>+</span>
        <span>DRAWING SHEET: DIV-FND-01</span>
      </div>
      <div className="absolute top-4 right-6 text-emerald-800/30 font-mono text-[10px] hidden sm:flex items-center gap-1 select-none pointer-events-none z-0">
        <span>SUSTAINABILITY PRINCIPLES // AUDITED</span>
        <span>+</span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Company Background & Founder Quote */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-stone-100 border border-stone-300 text-stone-900 text-xs font-bold uppercase tracking-wider shadow-2xs">
              <TreePine className="w-3.5 h-3.5 text-emerald-700" />
              Leadership & Ethos
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-stone-950 tracking-tight leading-[1.15]">
              Pioneering Sustainable Infrastructure with Purpose & Integrity
            </h2>

            {/* Crucial requirement: Mention the owner */}
            <div className="p-4 rounded-xl bg-emerald-50 border-l-4 border-emerald-600 shadow-xs flex items-center gap-3.5">
              <div className="p-2.5 rounded-lg bg-emerald-700 text-white shrink-0 shadow-2xs">
                <HardHat className="w-5 h-5" />
              </div>
              <div>
                <span className="block text-xs uppercase tracking-wider text-emerald-800 font-bold">
                  Visionary Leadership
                </span>
                <span className="text-stone-950 font-extrabold text-base sm:text-lg">
                  Founded and led by M. Sudharshan
                </span>
              </div>
            </div>

            <p className="text-stone-800 text-base sm:text-lg leading-relaxed font-normal">
              Divija Enterprises was established with a clear mandate: to transform conventional construction methodologies into ecologically sustainable realities. We believe that modern civil infrastructure, roads, and commercial developments can thrive without compromising delicate natural ecosystems.
            </p>

            <p className="text-stone-800 text-sm sm:text-base leading-relaxed font-normal">
              Under the proactive stewardship of <strong className="text-stone-950 font-bold">M. Sudharshan</strong>, Divija Enterprises has unified heavy civil execution, clean energy electrification, precision road building, and verified low-carbon supply logistics under one reliable banner.
            </p>

            {/* Crucial requirement: Second Eco-Friendly Quote */}
            <div className="relative p-6 sm:p-7 rounded-2xl bg-gradient-to-br from-stone-900 via-stone-800 to-emerald-950 text-white shadow-xl border border-stone-700 mt-6">
              <Quote className="w-8 h-8 text-emerald-400/50 mb-3" />
              <blockquote className="text-lg sm:text-xl font-medium italic text-stone-100 mb-4 leading-relaxed">
                &ldquo;Nature is not a place to visit, it is home. We build with respect for it.&rdquo;
              </blockquote>
              <div className="flex items-center justify-between pt-4 border-t border-stone-700/80">
                <div>
                  <div className="font-bold text-white text-base">M. Sudharshan</div>
                  <div className="text-xs text-emerald-400 font-medium">
                    Founder & Managing Director, Divija Enterprises
                  </div>
                </div>
                <div className="px-3 py-1 rounded-full bg-emerald-900/60 border border-emerald-500/40 text-[11px] font-semibold text-emerald-300">
                  Green Vision
                </div>
              </div>
            </div>

            {/* Core Values / Commitments */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              <div className="p-4 rounded-xl bg-white border border-stone-200 shadow-2xs">
                <Target className="w-5 h-5 text-emerald-700 mb-2" />
                <h4 className="font-bold text-stone-900 text-sm mb-1">Precision Quality</h4>
                <p className="text-xs text-stone-600 leading-normal">
                  Zero tolerance for sub-standard raw aggregates or non-compliant engineering.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-stone-200 shadow-2xs">
                <TreePine className="w-5 h-5 text-emerald-700 mb-2" />
                <h4 className="font-bold text-stone-900 text-sm mb-1">Eco Stewardship</h4>
                <p className="text-xs text-stone-600 leading-normal">
                  Active riverbed protection via M-Sand and optimized circular scrap reclamation.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-stone-200 shadow-2xs">
                <ShieldCheck className="w-5 h-5 text-emerald-700 mb-2" />
                <h4 className="font-bold text-stone-900 text-sm mb-1">Total Compliance</h4>
                <p className="text-xs text-stone-600 leading-normal">
                  Rigorous adherence to IS codes, municipal guidelines, and environmental clearances.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Founder & Company Credibility Card */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl bg-gradient-to-b from-stone-900 via-stone-900 to-emerald-950 p-8 sm:p-10 text-white shadow-2xl border border-stone-700">
              {/* Decorative accent top badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 text-xs font-semibold mb-6">
                <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                Founder’s Commitment
              </div>

              {/* Founder Avatar Placeholder / Icon Badge */}
              <div className="flex items-center gap-4 mb-6 pb-6 border-b border-stone-800">
                <div className="w-18 h-18 rounded-2xl bg-gradient-to-tr from-emerald-700 to-emerald-500 flex items-center justify-center text-white text-2xl font-black shadow-inner border-2 border-emerald-300/40">
                  MS
                </div>
                <div>
                  <h3 className="text-2xl font-extrabold text-white">M. Sudharshan</h3>
                  <p className="text-emerald-400 font-medium text-sm">
                    Founder & Managing Director
                  </p>
                  <p className="text-stone-400 text-xs mt-0.5">
                    Divija Enterprises
                  </p>
                </div>
              </div>

              {/* Founder message */}
              <p className="text-stone-300 text-sm leading-relaxed mb-8">
                &ldquo;Every structure we raise and every roadway we pave is a promise left behind for future generations. At Divija Enterprises, we do not simply supply materials or pour concrete — we engineer sustainable landmarks with deep reverence for our planet.&rdquo;
              </p>

              {/* Company Metrics Grid */}
              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-stone-800/80 border border-stone-700/80">
                  <div className="text-2xl font-black text-emerald-400">100%</div>
                  <div className="text-xs font-medium text-stone-300 mt-0.5">
                    Green Materials Sourced
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-stone-800/80 border border-stone-700/80">
                  <div className="text-2xl font-black text-amber-400">9+</div>
                  <div className="text-xs font-medium text-stone-300 mt-0.5">
                    Specialized Divisions
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-stone-800/80 border border-stone-700/80">
                  <div className="text-2xl font-black text-emerald-400">250+</div>
                  <div className="text-xs font-medium text-stone-300 mt-0.5">
                    Successful Deliveries
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-stone-800/80 border border-stone-700/80">
                  <div className="text-2xl font-black text-amber-400">0</div>
                  <div className="text-xs font-medium text-stone-300 mt-0.5">
                    Environmental Violations
                  </div>
                </div>
              </div>

              {/* Seal of Trust */}
              <div className="mt-8 pt-6 border-t border-stone-800 flex items-center justify-between text-xs text-stone-400">
                <span className="flex items-center gap-1.5">
                  <Award className="w-4 h-4 text-emerald-400" />
                  Eco-Certified Construction
                </span>
                <span className="flex items-center gap-1.5">
                  <Users2 className="w-4 h-4 text-emerald-400" />
                  Client Centric
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
