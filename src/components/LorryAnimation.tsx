"use client";

import React from "react";
import { motion } from "framer-motion";
import { Leaf, Wind, Sun } from "lucide-react";

export default function LorryAnimation() {
  return (
    <div className="w-full relative overflow-hidden bg-gradient-to-b from-stone-50 via-emerald-50/30 to-stone-100 pt-6 select-none border-t border-stone-200/70">
      {/* Background eco-landscape: Windmills, trees, solar lights */}
      <div className="max-w-7xl mx-auto px-4 relative">
        <div className="flex justify-between items-end pb-1 text-stone-300 pointer-events-none opacity-60">
          {/* Subtle Eco Background elements */}
          <div className="flex items-end gap-6 text-emerald-800/40">
            <div className="flex flex-col items-center">
              <Sun className="w-4 h-4 text-amber-500/70 mb-1" />
              <div className="w-0.5 h-6 bg-stone-300" />
            </div>
            <div className="hidden sm:flex flex-col items-center">
              <Wind className="w-4 h-4 text-emerald-600/60 mb-0.5 animate-spin" style={{ animationDuration: "6s" }} />
              <div className="w-0.5 h-8 bg-stone-300" />
            </div>
            {/* Simple pine tree silhouette */}
            <div className="w-4 h-7 bg-emerald-800/25 rounded-t-full" />
            <div className="w-3 h-5 bg-emerald-800/20 rounded-t-full" />
          </div>

          <div className="hidden md:flex items-center gap-3 text-xs font-medium text-emerald-800/70 bg-white/70 backdrop-blur-xs px-3 py-1 rounded-full border border-emerald-200/60 shadow-2xs mb-2">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-ping mr-1" />
            <span>Eco Transport Fleet • In Transit with Sustainable Materials</span>
          </div>

          <div className="flex items-end gap-5 text-emerald-800/40">
            <div className="w-4 h-6 bg-emerald-800/20 rounded-t-full" />
            <div className="flex flex-col items-center">
              <Wind className="w-4 h-4 text-emerald-600/60 mb-0.5 animate-spin" style={{ animationDuration: "8s" }} />
              <div className="w-0.5 h-9 bg-stone-300" />
            </div>
            <div className="hidden sm:block w-5 h-8 bg-emerald-800/25 rounded-t-full" />
          </div>
        </div>
      </div>

      {/* The Road Surface Container */}
      <div className="w-full relative h-20 sm:h-24 bg-stone-800 overflow-hidden shadow-inner">
        {/* Curbs / Road edging */}
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-stone-400 via-stone-300 to-stone-400 border-b border-stone-600" />

        {/* Animated Dashed Center-line */}
        <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 h-1 sm:h-1.5 w-full flex items-center">
          <div className="w-full h-full animate-road" />
        </div>

        {/* Bottom curb / Earth shoulder */}
        <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-amber-900 via-stone-700 to-amber-950 border-t border-stone-900" />

        {/* Continuous Looping Lorry (Truck) using Framer Motion */}
        <motion.div
          className="absolute top-1.5 sm:top-2 z-20 flex items-center"
          initial={{ x: "-220px" }}
          animate={{ x: "calc(100vw + 240px)" }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 11,
            ease: "linear",
          }}
        >
          {/* Detailed Loaded Construction Lorry SVG */}
          <div className="relative group cursor-pointer filter drop-shadow-md">
            {/* Eco Dust/Sparkle particle trail */}
            <div className="absolute -left-5 bottom-3 flex items-center gap-1 opacity-70">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400/80 animate-ping" />
              <span className="w-1 h-1 rounded-full bg-stone-400 animate-pulse" />
            </div>

            <svg
              width="190"
              height="65"
              viewBox="0 0 190 65"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="transform translate-y-0.5"
            >
              {/* Loaded Materials Mound in the Cargo Bed (Eco Aggregates / Earth / Sustainable Timber) */}
              <path
                d="M18 24 Q35 12 55 18 Q75 10 95 18 Q115 11 126 24 Z"
                fill="#92400e"
              />
              <path
                d="M24 24 Q45 15 65 20 Q85 13 105 20 Q118 16 124 24 Z"
                fill="#b45309"
              />
              {/* Eco Foliage/Materials Accent */}
              <circle cx="48" cy="18" r="4" fill="#059669" />
              <circle cx="78" cy="16" r="3.5" fill="#10b981" />
              <circle cx="98" cy="17" r="3" fill="#047857" />

              {/* Cargo Bed Body (Heavy Tipper Dump Box) */}
              <rect
                x="14"
                y="22"
                width="114"
                height="24"
                rx="3"
                fill="#065f46"
                stroke="#044e3b"
                strokeWidth="1.5"
              />
              {/* Cargo Ribs */}
              <line x1="38" y1="23" x2="38" y2="45" stroke="#047857" strokeWidth="2" />
              <line x1="64" y1="23" x2="64" y2="45" stroke="#047857" strokeWidth="2" />
              <line x1="90" y1="23" x2="90" y2="45" stroke="#047857" strokeWidth="2" />
              <line x1="114" y1="23" x2="114" y2="45" stroke="#047857" strokeWidth="2" />

              {/* Company Branding on Truck Bed */}
              <text
                x="68"
                y="36"
                fill="#ecfdf5"
                fontSize="7.5"
                fontWeight="bold"
                letterSpacing="0.8"
                textAnchor="middle"
                fontFamily="sans-serif"
              >
                DIVIJA ENTERPRISES
              </text>
              <text
                x="68"
                y="43"
                fill="#a7f3d0"
                fontSize="5"
                fontWeight="600"
                letterSpacing="0.5"
                textAnchor="middle"
                fontFamily="sans-serif"
              >
                ECO LOGISTICS
              </text>

              {/* Chassis / Underframe */}
              <rect x="20" y="44" width="150" height="5" fill="#292524" rx="1" />
              {/* Fuel Tank / Battery Pack */}
              <rect x="80" y="42" width="28" height="6" rx="2" fill="#15803d" />
              <rect x="83" y="44" width="6" height="2" rx="0.5" fill="#86efac" />

              {/* Front Cabin */}
              <path
                d="M128 46 V22 C128 20 130 19 133 19 H156 C161 19 165 23 167 27 L173 36 C174 38 175 40 175 42 V46 H128 Z"
                fill="#047857"
                stroke="#064e3b"
                strokeWidth="1.5"
              />

              {/* Cabin Windshield and Window */}
              <path
                d="M148 23 H134 V34 H148 V23 Z"
                fill="#d1fae5"
                opacity="0.85"
              />
              <path
                d="M152 23 H156 C158 23 160 25 162 28 L166 34 H152 V23 Z"
                fill="#d1fae5"
                opacity="0.85"
              />
              {/* Driver silhouette */}
              <circle cx="141" cy="27" r="2.5" fill="#064e3b" />
              <path d="M136 34 C136 31 138 30 141 30 C144 30 146 31 146 34" fill="#064e3b" />

              {/* Front Bumper & Headlight */}
              <rect x="171" y="42" width="7" height="6" rx="1.5" fill="#e2e8f0" />
              {/* Headlight beam */}
              <polygon points="178,42 190,39 190,49 178,46" fill="#fef08a" opacity="0.6" />
              <circle cx="174" cy="44" r="1.5" fill="#facc15" />

              {/* Rear Tail Light */}
              <rect x="13" y="38" width="2" height="6" fill="#ef4444" rx="0.5" />

              {/* Mudguards */}
              <path d="M28 46 A9 9 0 0 1 48 46" stroke="#1c1917" strokeWidth="2.5" fill="none" />
              <path d="M50 46 A9 9 0 0 1 70 46" stroke="#1c1917" strokeWidth="2.5" fill="none" />
              <path d="M142 46 A9 9 0 0 1 162 46" stroke="#1c1917" strokeWidth="2.5" fill="none" />

              {/* Wheels (3 pairs) */}
              {/* Wheel 1 (Rear 1) */}
              <g className="animate-spin" style={{ transformOrigin: "38px 48px", animationDuration: "1s" }}>
                <circle cx="38" cy="48" r="8" fill="#1c1917" stroke="#44403c" strokeWidth="2" />
                <circle cx="38" cy="48" r="4.5" fill="#78716c" />
                <circle cx="38" cy="48" r="2" fill="#d6d3d1" />
                <line x1="38" y1="43" x2="38" y2="53" stroke="#44403c" strokeWidth="1" />
                <line x1="33" y1="48" x2="43" y2="48" stroke="#44403c" strokeWidth="1" />
              </g>

              {/* Wheel 2 (Rear 2) */}
              <g className="animate-spin" style={{ transformOrigin: "60px 48px", animationDuration: "1s" }}>
                <circle cx="60" cy="48" r="8" fill="#1c1917" stroke="#44403c" strokeWidth="2" />
                <circle cx="60" cy="48" r="4.5" fill="#78716c" />
                <circle cx="60" cy="48" r="2" fill="#d6d3d1" />
                <line x1="60" y1="43" x2="60" y2="53" stroke="#44403c" strokeWidth="1" />
                <line x1="55" y1="48" x2="65" y2="48" stroke="#44403c" strokeWidth="1" />
              </g>

              {/* Wheel 3 (Front) */}
              <g className="animate-spin" style={{ transformOrigin: "152px 48px", animationDuration: "1s" }}>
                <circle cx="152" cy="48" r="8" fill="#1c1917" stroke="#44403c" strokeWidth="2" />
                <circle cx="152" cy="48" r="4.5" fill="#78716c" />
                <circle cx="152" cy="48" r="2" fill="#d6d3d1" />
                <line x1="152" y1="43" x2="152" y2="53" stroke="#44403c" strokeWidth="1" />
                <line x1="147" y1="48" x2="157" y2="48" stroke="#44403c" strokeWidth="1" />
              </g>

              {/* Eco Leaf Emblem on the Door */}
              <path
                d="M136 38 C136 36 138 35 140 35 C141 37 141 39 139 40 C138 40.5 136.5 40 136 38 Z"
                fill="#22c55e"
              />
            </svg>
          </div>
        </motion.div>
      </div>

      {/* Styled Earthy Sub-layer Border (Gravel & Stone Base) */}
      <div className="h-2 bg-gradient-to-r from-stone-400 via-amber-800/40 to-stone-400" />
    </div>
  );
}
