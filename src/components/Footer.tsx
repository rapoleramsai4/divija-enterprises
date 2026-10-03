"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Leaf,
  ShieldCheck,
  Phone,
  Mail,
  MapPin,
  Clock,
  ArrowUp,
  Heart,
} from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const serviceLinks = [
    "Electric works",
    "Civil works",
    "Road works",
    "Building materials supply",
    "Machinery procurement",
    "Transport",
    "Manpower supply",
    "Sand Supply",
    "Metal supply",
  ];

  return (
    <footer className="bg-stone-950 text-stone-300 pt-16 pb-8 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-stone-800">
          {/* Brand & Ethos Column */}
          <div className="lg:col-span-4 space-y-4">
            <Link
              href="#home"
              className="inline-block p-2 bg-white rounded-xl shadow-md border border-stone-800 hover:border-emerald-500 transition-colors group"
            >
              <Image
                src="/logo.png"
                alt="Divija Enterprises - Eco-Friendly Constructions"
                width={200}
                height={133}
                className="h-10 sm:h-12 w-auto object-contain transition-transform group-hover:scale-102"
              />
            </Link>

            <p className="text-sm text-stone-400 leading-relaxed">
              Sustainable civil engineering, renewable infrastructure solutions, eco-building supplies, and heavy machinery logistics. Delivering green landmarks built for future generations.
            </p>

            <div className="p-3.5 rounded-xl bg-stone-900 border border-stone-800 text-xs text-stone-300 space-y-1">
              <div className="text-emerald-400 font-semibold uppercase tracking-wider text-[10px]">
                Founder & Managing Director
              </div>
              <div className="font-bold text-white text-sm">
                Founded and led by M. Sudharshan
              </div>
              <p className="text-stone-400 text-[11px] leading-relaxed italic">
                &ldquo;Nature is not a place to visit, it is home. We build with respect for it.&rdquo;
              </p>
            </div>
          </div>

          {/* 9 Services Column */}
          <div className="lg:col-span-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4 flex items-center gap-2">
              <Leaf className="w-4 h-4 text-emerald-400" />
              Specialized Divisions
            </h4>
            <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-xs">
              {serviceLinks.map((name) => (
                <a
                  key={name}
                  href="#services"
                  className="text-stone-400 hover:text-emerald-400 transition-colors"
                >
                  {name}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Contact & Working Hours */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              Direct Contacts & Hours
            </h4>

            <div className="space-y-2.5 text-xs text-stone-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>
                  Divija Enterprises, Plot No. 48/B, Green Horizon Hub, IDA, Bengaluru - 560099
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>+91 98765 43210 / +91 91234 56789</span>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>contact@divijaenterprises.com</span>
              </div>

              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <p className="text-stone-300 font-medium">Mon – Sat: 8:00 AM – 7:00 PM</p>
                  <p className="text-stone-500">Sunday: On-Call Support</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-500 gap-4">
          <p>
            © {new Date().getFullYear()} Divija Enterprises. All rights reserved. Founded & led by M. Sudharshan.
          </p>

          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1 text-emerald-400/80">
              <Leaf className="w-3.5 h-3.5" />
              100% Eco-Conscious Construction
            </span>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 p-2 rounded-lg bg-stone-900 hover:bg-stone-800 text-stone-300 hover:text-white transition-colors border border-stone-800"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span>Back to Top</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
