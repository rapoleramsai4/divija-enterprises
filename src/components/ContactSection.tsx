"use client";

import React, { useState, useEffect } from "react";
import { useMutation } from "@tanstack/react-query";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle,
  AlertCircle,
  Loader2,
  Sparkles,
  Building,
} from "lucide-react";
import { ContactFormData, ContactApiResponse } from "@/types";

interface ContactSectionProps {
  initialService?: string;
}

const servicesList = [
  "Electric works",
  "Civil works",
  "Road works",
  "Building materials supply",
  "Machinery procurement",
  "Transport",
  "Manpower supply",
  "Sand Supply",
  "Metal supply",
  "Other / General Inquiry",
];

export default function ContactSection({ initialService }: ContactSectionProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState(initialService || "Civil works");
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (initialService) {
      setService(initialService);
    }
  }, [initialService]);

  // TanStack Query useMutation Hook Template
  const contactMutation = useMutation<ContactApiResponse, Error, ContactFormData>({
    mutationFn: async (formData: ContactFormData) => {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.error || "Failed to submit inquiry. Please try again.");
      }

      return response.json();
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    contactMutation.mutate({
      name,
      email,
      phone,
      service,
      message,
    });
  };

  const handleReset = () => {
    contactMutation.reset();
    setName("");
    setEmail("");
    setPhone("");
    setMessage("");
  };

  return (
    <section id="contact" className="py-20 bg-white bg-grid-plus relative border-t border-stone-200 overflow-hidden">
      {/* Subtle CAD Drafting Metadata */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-4">
        <div className="flex justify-between items-center text-[10px] font-mono text-emerald-800/30 uppercase tracking-widest hidden sm:flex select-none">
          <span>// DISPATCH & ESTIMATION INTERFACE</span>
          <span>ESTIMATOR ID: DIV-INQ-2026</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-emerald-50 border border-emerald-300/80 text-emerald-900 text-xs font-semibold uppercase tracking-wider mb-3 shadow-2xs backdrop-blur-xs">
            <Building className="w-3.5 h-3.5 text-emerald-700" />
            Connect With Us
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight mb-4">
            Request a Quote or Consultation
          </h2>
          <p className="text-stone-600 text-base sm:text-lg">
            Reach out to our eco-construction specialists for project estimates, sustainable building materials, machinery leasing, or civil engineering support.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Construction Company Details (Placeholders) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-2xl bg-white p-7 sm:p-8 border border-stone-200 shadow-sm space-y-6">
              <h3 className="text-xl font-bold text-stone-900 pb-3 border-b border-stone-100 flex items-center justify-between">
                <span>Company Headquarters</span>
                <span className="text-xs px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-semibold">
                  Divija Enterprises
                </span>
              </h3>

              {/* Full Address Placeholder */}
              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-xl bg-emerald-50 text-emerald-700 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-stone-600 mb-0.5">
                    Corporate & Yard Address
                  </div>
                  <p className="text-sm font-medium text-stone-800 leading-snug">
                    Divija Enterprises
                  </p>
                  <p className="text-xs text-stone-600 mt-0.5 leading-relaxed">
                    Plot No. 48/B, Green Horizon Eco-Industrial Hub, Near Ring Road Phase 2, Industrial Development Area, Bengaluru, Karnataka - 560099, India (Placeholder)
                  </p>
                </div>
              </div>

              {/* Phone Numbers Placeholder */}
              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-xl bg-emerald-50 text-emerald-700 shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-stone-600 mb-0.5">
                    Direct Phone Numbers
                  </div>
                  <div className="space-y-0.5 text-sm font-semibold text-stone-800">
                    <p>
                      Main Line:{" "}
                      <a href="tel:+919876543210" className="text-emerald-700 hover:underline">
                        +91 98765 43210
                      </a>
                    </p>
                    <p>
                      Haulage & Logistics:{" "}
                      <a href="tel:+919123456789" className="text-emerald-700 hover:underline">
                        +91 91234 56789
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              {/* Email Address Placeholder */}
              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-xl bg-emerald-50 text-emerald-700 shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-stone-600 mb-0.5">
                    Email Addresses
                  </div>
                  <div className="space-y-0.5 text-sm font-semibold text-stone-800">
                    <p>
                      General:{" "}
                      <a href="mailto:contact@divijaenterprises.com" className="text-emerald-700 hover:underline">
                        contact@divijaenterprises.com
                      </a>
                    </p>
                    <p>
                      Procurement:{" "}
                      <a href="mailto:procurement@divijaenterprises.com" className="text-emerald-700 hover:underline">
                        procurement@divijaenterprises.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              {/* Working Hours Placeholder */}
              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-xl bg-emerald-50 text-emerald-700 shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-stone-600 mb-0.5">
                    Operational Working Hours
                  </div>
                  <p className="text-sm font-semibold text-stone-800">
                    Monday – Saturday: 8:00 AM – 7:00 PM
                  </p>
                  <p className="text-xs text-stone-600 mt-0.5">
                    Sunday: Emergency Infrastructure Support On-Call
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form UI Wrapped in TanStack Query */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl bg-white p-7 sm:p-9 border border-stone-200 shadow-sm relative">
              <div className="mb-6 pb-4 border-b border-stone-100 flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-bold text-stone-900">
                    Send an Inquiry or Quote Request
                  </h3>
                  <p className="text-xs text-stone-500 mt-0.5">
                    Integrated with TanStack Query for reactive data handling
                  </p>
                </div>
                <span className="text-[11px] font-mono text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                  TanStack Query v5
                </span>
              </div>

              {/* Success Notification */}
              {contactMutation.isSuccess && (
                <div className="mb-6 p-6 rounded-xl bg-emerald-50 border border-emerald-300 text-emerald-950 animate-in fade-in-50">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-base font-bold text-emerald-900 mb-1">
                        Inquiry Successfully Submitted!
                      </h4>
                      <p className="text-sm text-emerald-800 leading-relaxed mb-3">
                        {contactMutation.data?.message}
                      </p>
                      {contactMutation.data?.confirmationId && (
                        <div className="inline-block px-3 py-1 bg-white rounded border border-emerald-200 text-xs font-mono text-emerald-800 mb-4">
                          Tracking Reference: <strong>{contactMutation.data.confirmationId}</strong>
                        </div>
                      )}
                      <div>
                        <button
                          type="button"
                          onClick={handleReset}
                          className="px-4 py-2 text-xs font-semibold text-white bg-emerald-700 hover:bg-emerald-800 rounded-lg shadow-xs transition-colors"
                        >
                          Submit Another Inquiry
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Error Notification */}
              {contactMutation.isError && (
                <div className="mb-6 p-4 rounded-xl bg-red-50 border border-red-200 text-red-900 flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-red-800">Submission Notice</h4>
                    <p className="text-xs text-red-700 mt-0.5">
                      {contactMutation.error?.message || "An unexpected error occurred. Please try again."}
                    </p>
                  </div>
                </div>
              )}

              {/* Form inputs */}
              {!contactMutation.isSuccess && (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div>
                      <label htmlFor="name" className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1.5">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="name"
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g. Rajesh Kumar"
                        className="w-full px-3.5 py-2.5 rounded-lg border border-stone-300 text-sm text-stone-900 focus:outline-hidden focus:ring-2 focus:ring-emerald-600 focus:border-transparent transition-all placeholder:text-stone-400 bg-stone-50/50"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="email" className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1.5">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="e.g. rajesh@example.com"
                        className="w-full px-3.5 py-2.5 rounded-lg border border-stone-300 text-sm text-stone-900 focus:outline-hidden focus:ring-2 focus:ring-emerald-600 focus:border-transparent transition-all placeholder:text-stone-400 bg-stone-50/50"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Phone Number */}
                    <div>
                      <label htmlFor="phone" className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1.5">
                        Phone Number
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="e.g. +91 98765 00000"
                        className="w-full px-3.5 py-2.5 rounded-lg border border-stone-300 text-sm text-stone-900 focus:outline-hidden focus:ring-2 focus:ring-emerald-600 focus:border-transparent transition-all placeholder:text-stone-400 bg-stone-50/50"
                      />
                    </div>

                    {/* Service Needed Dropdown (With all 9 specialized services) */}
                    <div>
                      <label htmlFor="service" className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1.5">
                        Service Needed <span className="text-red-500">*</span>
                      </label>
                      <select
                        id="service"
                        value={service}
                        onChange={(e) => setService(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-lg border border-stone-300 text-sm text-stone-900 focus:outline-hidden focus:ring-2 focus:ring-emerald-600 focus:border-transparent transition-all bg-stone-50/50"
                      >
                        {servicesList.map((svc) => (
                          <option key={svc} value={svc}>
                            {svc}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1.5">
                      Project Requirements & Location <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      required
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Please describe project scale, site location, timeline, and material volume specifications..."
                      className="w-full px-3.5 py-2.5 rounded-lg border border-stone-300 text-sm text-stone-900 focus:outline-hidden focus:ring-2 focus:ring-emerald-600 focus:border-transparent transition-all placeholder:text-stone-400 bg-stone-50/50"
                    />
                  </div>

                  {/* Submit Button with TanStack Query Loading State */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={contactMutation.isPending}
                      className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-white bg-emerald-700 hover:bg-emerald-800 active:bg-emerald-900 shadow-md hover:shadow-lg disabled:opacity-60 disabled:cursor-not-allowed transition-all"
                    >
                      {contactMutation.isPending ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          <span>Processing Inquiry with TanStack Query...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Submit Quote Request</span>
                        </>
                      )}
                    </button>
                    <p className="text-center text-[11px] text-stone-400 mt-2">
                      🔒 Your inquiry is encrypted. Our team led by M. Sudharshan will respond within 24 hours.
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
