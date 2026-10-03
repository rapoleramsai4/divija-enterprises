"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Phone, Mail, Leaf, ArrowRight, ShieldCheck } from "lucide-react";

interface HeaderProps {
  onQuoteClick?: () => void;
}

export default function Header({ onQuoteClick }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "About", href: "#about" },
    { name: "Why Us", href: "#sustainability" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-300">
      {/* Top micro bar for corporate info */}
      <div className="bg-emerald-950 text-emerald-100/90 text-xs py-2 px-4 border-b border-emerald-800/40 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <span className="flex items-center gap-1.5 text-emerald-300">
              <Leaf className="w-3.5 h-3.5 text-emerald-400" />
              <span className="font-medium">Divija Enterprises</span>
              <span className="text-emerald-400/60">•</span>
              <span className="text-emerald-200/80">Eco-Friendly & Sustainable Construction</span>
            </span>
            <span className="flex items-center gap-1 text-emerald-200/70">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              Certified Green Infrastructure Partner
            </span>
          </div>
          <div className="flex items-center space-x-6 text-emerald-200/80">
            <a
              href="tel:+919876543210"
              className="hover:text-white transition-colors flex items-center gap-1.5"
            >
              <Phone className="w-3 h-3 text-emerald-400" />
              <span>+91 98765 43210</span>
            </a>
            <a
              href="mailto:contact@divijaenterprises.com"
              className="hover:text-white transition-colors flex items-center gap-1.5"
            >
              <Mail className="w-3 h-3 text-emerald-400" />
              <span>contact@divijaenterprises.com</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div
        className={`w-full transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-md py-3 border-b border-stone-200"
            : "bg-white/90 backdrop-blur-sm py-4 border-b border-stone-100"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Divija Eco Construction Brand Logo */}
          <Link href="#home" className="flex items-center gap-3 group">
            <div className="relative h-11 sm:h-13 flex items-center">
              <Image
                src="/logo.png"
                alt="Divija Enterprises - Eco-Friendly Constructions"
                width={220}
                height={146}
                className="h-10 sm:h-12 w-auto object-contain transition-transform group-hover:scale-105 duration-200"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3 py-2 text-sm font-medium text-stone-700 hover:text-emerald-700 hover:bg-emerald-50/60 rounded-md transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action CTA Button */}
          <div className="hidden md:flex items-center space-x-3">
            <a
              href="#contact"
              onClick={onQuoteClick}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold text-white bg-emerald-700 hover:bg-emerald-800 active:bg-emerald-900 shadow-sm hover:shadow transition-all group"
            >
              <span>Get a Quote</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md text-stone-700 hover:text-emerald-700 hover:bg-emerald-50 focus:outline-hidden focus:ring-2 focus:ring-emerald-500"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/98 backdrop-blur-md border-b border-stone-200 px-4 pt-3 pb-6 shadow-xl animate-in slide-in-from-top duration-200">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2.5 rounded-md text-base font-medium text-stone-800 hover:text-emerald-700 hover:bg-emerald-50 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-3 border-t border-stone-100 flex flex-col gap-2">
              <a
                href="#contact"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onQuoteClick?.();
                }}
                className="w-full text-center py-3 px-4 rounded-lg bg-emerald-700 text-white font-semibold text-sm hover:bg-emerald-800 shadow-sm"
              >
                Get a Quote
              </a>
              <div className="flex flex-col gap-1 text-xs text-stone-500 pt-2 text-center">
                <span>Direct Contact: +91 98765 43210</span>
                <span>contact@divijaenterprises.com</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
