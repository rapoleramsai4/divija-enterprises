"use client";

import React from "react";
import {
  Recycle,
  Droplets,
  SunMedium,
  Compass,
  CheckCircle,
  TrendingDown,
} from "lucide-react";

export default function SustainabilityPillars() {
  const pillars = [
    {
      icon: <Recycle className="w-6 h-6 text-emerald-600" />,
      title: "Circular Raw Materials",
      description:
        "We prioritize slag cements, fly-ash masonry blocks, and recycled aggregates that repurpose industrial by-products into high-strength civil infrastructure.",
      metric: "Up to 40% carbon offset",
    },
    {
      icon: <Droplets className="w-6 h-6 text-emerald-600" />,
      title: "River Conservation via M-Sand",
      description:
        "By replacing natural river sand with scientifically crushed, triple-washed M-Sand, we protect vital riparian riverbeds from destructive dredging.",
      metric: "100% riverbed preservation",
    },
    {
      icon: <SunMedium className="w-6 h-6 text-emerald-600" />,
      title: "Clean Energy Integration",
      description:
        "Our electrical division designs sites with direct solar photovoltaic integration, LED high-bay luminaires, and power factor optimization.",
      metric: "Renewable-ready systems",
    },
    {
      icon: <TrendingDown className="w-6 h-6 text-emerald-600" />,
      title: "Route-Optimized Logistics",
      description:
        "Our haulage fleet uses telematics and batch-loading algorithms to curb empty transit trips, directly slashing diesel emissions per metric ton moved.",
      metric: "Minimized fuel consumption",
    },
  ];

  return (
    <section id="sustainability" className="py-20 bg-stone-900 text-white relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-950 border border-emerald-500/30 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Compass className="w-3.5 h-3.5 text-emerald-400" />
            Sustainable Methodology
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-4">
            How Divija Enterprises Builds with Respect for Nature
          </h2>
          <p className="text-stone-300 text-base sm:text-lg">
            Sustainable construction is not an afterthought — it is the cornerstone of every blueprint, procurement order, and site we manage.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, index) => (
            <div
              key={index}
              className="rounded-2xl bg-stone-800/80 border border-stone-700/80 p-6 flex flex-col justify-between hover:border-emerald-500/60 hover:bg-stone-800 transition-all duration-300 shadow-md group"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-emerald-950/80 border border-emerald-500/30 flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                  {pillar.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-emerald-300 transition-colors">
                  {pillar.title}
                </h3>
                <p className="text-sm text-stone-300 leading-relaxed mb-4">
                  {pillar.description}
                </p>
              </div>

              <div className="pt-4 border-t border-stone-700/60 flex items-center gap-2 text-xs font-semibold text-emerald-400">
                <CheckCircle className="w-4 h-4 shrink-0 text-emerald-400" />
                <span>{pillar.metric}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
