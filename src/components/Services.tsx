"use client";

import React from "react";
import {
  Zap,
  Building2,
  Route,
  Boxes,
  Tractor,
  Truck,
  Users,
  Mountain,
  Hammer,
  ArrowUpRight,
  Leaf,
  Check,
} from "lucide-react";
import { ServiceItem } from "@/types";

interface ServicesProps {
  onSelectService: (serviceName: string) => void;
}

export const servicesData: ServiceItem[] = [
  {
    id: "electric-works",
    title: "Electric Works",
    category: "Clean Energy & Grid Systems",
    iconName: "Zap",
    ecoFeature: "Solar Integration & Low-loss Cabling",
    description:
      "Comprehensive commercial and industrial electrical infrastructure with high-efficiency transformers, renewable solar integrations, and smart energy-saving distribution boards.",
    capabilities: [
      "Solar rooftop & substation cabling",
      "Industrial electrical grid wiring",
      "Energy audit & surge suppression",
    ],
  },
  {
    id: "civil-works",
    title: "Civil Works",
    category: "Sustainable Structural Engineering",
    iconName: "Building2",
    ecoFeature: "Green Concrete & Rainwater Basins",
    description:
      "End-to-end sustainable civil construction, including reinforced structural engineering, eco-friendly concrete foundations, retaining walls, and soil-erosion management.",
    capabilities: [
      "Eco-concrete structural framing",
      "Industrial warehouses & commercial complexes",
      "Rainwater harvesting & percolation tanks",
    ],
  },
  {
    id: "road-works",
    title: "Road Works",
    category: "Highway & Urban Paving",
    iconName: "Route",
    ecoFeature: "Recycled Asphalts & Permeable Pavers",
    description:
      "Durable, climate-resilient roadway grading, porous asphalt paving for groundwater recharge, industrial haul-road development, and precision bitumen surfacing.",
    capabilities: [
      "Permeable eco-friendly pavements",
      "Highway grading & stormwater gutters",
      "Industrial access road construction",
    ],
  },
  {
    id: "building-materials-supply",
    title: "Building Materials Supply",
    category: "Certified Green Inventory",
    iconName: "Boxes",
    ecoFeature: "Low-Carbon Cements & Fly-Ash Bricks",
    description:
      "Wholesale procurement of verified eco-friendly building supplies including fly-ash bricks, autoclaved aerated concrete (AAC) blocks, eco-cements, and non-toxic admixtures.",
    capabilities: [
      "AAC blocks & fly-ash eco-bricks",
      "Green-certified Portland pozzolana cement",
      "Certified sustainable timber & aggregates",
    ],
  },
  {
    id: "machinery-procurement",
    title: "Machinery Procurement",
    category: "Fleet Leasing & Heavy Equipment",
    iconName: "Tractor",
    ecoFeature: "Tier-4 Low-Emission & Hybrid Fleet",
    description:
      "Sourcing and leasing of heavy earthmoving machinery, modern hydraulic excavators, road rollers, telehandlers, and transit mixers optimized for minimal emissions and peak fuel efficiency.",
    capabilities: [
      "Hydraulic excavators & backhoe loaders",
      "Low-emission tandem & vibratory rollers",
      "Crane, boom pump & dumper leasing",
    ],
  },
  {
    id: "transport",
    title: "Transport",
    category: "Heavy Haulage & Green Logistics",
    iconName: "Truck",
    ecoFeature: "Optimized Route Telematics & Clean Fleet",
    description:
      "Bulk material transportation with GPS-monitored heavy tippers and trailer fleets. Route-optimized dispatch reduces empty deadhead miles and curtails transit carbon emissions.",
    capabilities: [
      "Multi-axle tippers & trailers",
      "Live GPS tracking & carbon-smart routing",
      "Site-to-site bulk aggregate haulage",
    ],
  },
  {
    id: "manpower-supply",
    title: "Manpower Supply",
    category: "Skilled Technical & Labor Workforce",
    iconName: "Users",
    ecoFeature: "Safety-Certified & Green Building Trained",
    description:
      "Provision of certified site engineers, safety officers, heavy equipment operators, skilled masons, bar benders, and general laborers trained in modern sustainable construction techniques.",
    capabilities: [
      "Certified civil site supervisors",
      "Skilled machine operators & riggers",
      "OSHA-trained green construction crews",
    ],
  },
  {
    id: "sand-supply",
    title: "Sand Supply",
    category: "Eco-Aggregates & River Alternatives",
    iconName: "Mountain",
    ecoFeature: "Manufactured Sand (M-Sand & P-Sand)",
    description:
      "Ecologically responsible manufactured sand (M-Sand) and plastering sand (P-Sand) conforming to IS 383 standards, reducing riverbed extraction while maximizing concrete strength.",
    capabilities: [
      "Triple-washed M-Sand for concrete",
      "Ultra-fine P-Sand for smooth plastering",
      "100% silt-free granular consistency",
    ],
  },
  {
    id: "metal-supply",
    title: "Metal Supply",
    category: "Structural Steel & Recycled Rebar",
    iconName: "Hammer",
    ecoFeature: "Recycled TMT Bars & High-Yield Steel",
    description:
      "High-grade Fe 550D TMT rebars, structural steel sections (I-beams, channels, angles), and galvanized metal sheets sourced from sustainable, energy-efficient induction mills.",
    capabilities: [
      "Fe 550D earthquake-resistant TMT rebar",
      "Structural steel beams, columns & trusses",
      "Scrap recovery & circular metal management",
    ],
  },
];

export default function Services({ onSelectService }: ServicesProps) {
  const getIcon = (name: string) => {
    switch (name) {
      case "Zap":
        return <Zap className="w-6 h-6 text-emerald-600" />;
      case "Building2":
        return <Building2 className="w-6 h-6 text-emerald-600" />;
      case "Route":
        return <Route className="w-6 h-6 text-emerald-600" />;
      case "Boxes":
        return <Boxes className="w-6 h-6 text-emerald-600" />;
      case "Tractor":
        return <Tractor className="w-6 h-6 text-emerald-600" />;
      case "Truck":
        return <Truck className="w-6 h-6 text-emerald-600" />;
      case "Users":
        return <Users className="w-6 h-6 text-emerald-600" />;
      case "Mountain":
        return <Mountain className="w-6 h-6 text-emerald-600" />;
      case "Hammer":
        return <Hammer className="w-6 h-6 text-emerald-600" />;
      default:
        return <Leaf className="w-6 h-6 text-emerald-600" />;
    }
  };

  return (
    <section id="services" className="py-20 bg-stone-50/60 border-t border-b border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-emerald-100/80 text-emerald-900 text-xs font-semibold uppercase tracking-wider mb-3">
            <Leaf className="w-3.5 h-3.5 text-emerald-700" />
            Specialized Capabilities
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight mb-4">
            9 Pillars of Eco-Friendly Construction & Infrastructure
          </h2>
          <p className="text-stone-600 text-base sm:text-lg">
            From renewable civil works to sustainable supply chain procurement, Divija Enterprises provides comprehensive solutions engineered for quality, speed, and ecological responsibility.
          </p>
        </div>

        {/* 3-Column Grid on Desktop, 1-Column on Mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {servicesData.map((service, index) => (
            <div
              key={service.id}
              className="group relative flex flex-col justify-between rounded-2xl bg-white p-7 border border-stone-200/90 shadow-xs hover:shadow-xl hover:border-emerald-500/50 transition-all duration-300 transform hover:-translate-y-1"
            >
              {/* Card Header & Icon */}
              <div>
                <div className="flex items-start justify-between mb-5">
                  <div className="w-13 h-13 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300 shadow-2xs">
                    <div className="group-hover:brightness-200 group-hover:text-white transition-all">
                      {getIcon(service.iconName)}
                    </div>
                  </div>
                  <span className="text-xs font-bold text-stone-600 bg-stone-100 px-2.5 py-1 rounded-full group-hover:bg-emerald-50 group-hover:text-emerald-800 transition-colors">
                    0{index + 1}
                  </span>
                </div>

                {/* Service Title */}
                <h3 className="text-xl font-bold text-stone-900 group-hover:text-emerald-700 transition-colors mb-1">
                  {service.title}
                </h3>

                {/* Subcategory */}
                <p className="text-xs font-semibold text-emerald-800 uppercase tracking-wider mb-3">
                  {service.category}
                </p>

                {/* Eco Feature Pill */}
                <div className="inline-flex items-center gap-1.5 text-xs font-medium text-emerald-900 bg-emerald-50/90 border border-emerald-200/80 px-2.5 py-1 rounded-md mb-4">
                  <Leaf className="w-3 h-3 text-emerald-600 shrink-0" />
                  <span>{service.ecoFeature}</span>
                </div>

                {/* Description */}
                <p className="text-sm text-stone-600 leading-relaxed mb-5">
                  {service.description}
                </p>

                {/* Key Capabilities List */}
                <ul className="space-y-2 mb-6 pt-3 border-t border-stone-100">
                  {service.capabilities.map((cap, i) => (
                    <li key={i} className="flex items-center text-xs text-stone-700 gap-2">
                      <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>{cap}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Card Footer Action */}
              <div className="pt-2">
                <a
                  href="#contact"
                  onClick={() => onSelectService(service.title)}
                  className="w-full inline-flex items-center justify-between px-4 py-2.5 rounded-lg text-xs font-semibold text-stone-700 bg-stone-50 hover:bg-emerald-700 hover:text-white border border-stone-200 hover:border-emerald-700 transition-all duration-200 group/btn"
                >
                  <span>Inquire for {service.title}</span>
                  <ArrowUpRight className="w-4 h-4 text-stone-400 group-hover/btn:text-white group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
