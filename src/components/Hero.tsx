"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, ChevronDown } from "lucide-react";

interface HeroProps {
  onOpenQuoteModal: () => void;
}

export default function Hero({ onOpenQuoteModal }: HeroProps) {
  return (
    <section className="relative min-h-[92vh] flex flex-col justify-between pt-32 sm:pt-40 pb-12 text-white border-b border-neutral-200 overflow-hidden">
      {/* Authentic Background Organ Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero/hero-organ.jpg"
          alt="Zatil Pipe Organ Façade in Nigerian Cathedral Sanctuary"
          fill
          priority
          className="object-cover object-center"
        />
        {/* Warm Classical Gradient Scrim */}
        <div className="absolute inset-0 bg-black/45" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-black/40" />
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full my-auto">
        <div className="max-w-3xl space-y-6">
          
          {/* Category Tag */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-md text-xs font-semibold uppercase tracking-wider text-[#FFA726]">
            <span>Indigenous African Craftsmanship</span>
          </div>

          {/* Master Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.1] drop-shadow-md">
            Handcrafted Church Pipe Organs <br />
            <span className="font-serif italic font-normal text-[#FFA726]">
              & Concert String Instruments
            </span>
          </h1>

          {/* Genuine Human Description */}
          <p className="text-base sm:text-lg text-slate-100 max-w-2xl font-normal leading-relaxed drop-shadow">
            We design, fabricate, erect, and restore custom <strong>cathedral pipe-organ façades</strong> and hand-carve concert-grade <strong>violins, violas, cellos, and double basses</strong> from seasoned tonewoods across Nigeria.
          </p>

          {/* Action Buttons */}
          <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <button
              onClick={onOpenQuoteModal}
              className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-[#F26522] hover:bg-orange-600 text-white text-xs font-bold uppercase tracking-wider transition-all shadow-xl shadow-orange-500/30 hover:scale-[1.02] cursor-pointer"
            >
              <span>Request a Project Quote</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href="#pipe-organs"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white/10 hover:bg-white/20 border border-white/25 backdrop-blur-md text-xs font-bold uppercase tracking-wider text-white transition-all shadow-sm"
            >
              <span>View 51+ Completed Installations</span>
            </a>
          </div>
        </div>
      </div>

      {/* Editorial Metric Strip */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full pt-10">
        <div className="border-t border-white/20 pt-6 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div>
            <span className="text-3xl sm:text-4xl font-extrabold text-white font-serif block">
              51+
            </span>
            <span className="text-xs font-semibold text-slate-200 block mt-1">
              Cathedral Pipe Organ Façades
            </span>
            <span className="text-[11px] text-slate-300">
              Completed across Nigeria
            </span>
          </div>

          <div>
            <span className="text-3xl sm:text-4xl font-extrabold text-[#FFA726] font-serif block">
              500+
            </span>
            <span className="text-xs font-semibold text-slate-200 block mt-1">
              Handcrafted String Instruments
            </span>
            <span className="text-[11px] text-slate-300">
              Violins, Violas, Cellos & Basses
            </span>
          </div>

          <div>
            <span className="text-3xl sm:text-4xl font-extrabold text-white font-serif block">
              11+
            </span>
            <span className="text-xs font-semibold text-slate-200 block mt-1">
              States Serviced Nationwide
            </span>
            <span className="text-[11px] text-slate-300">
              Lagos, Abuja, Rivers, Delta & beyond
            </span>
          </div>

          <div>
            <span className="text-3xl sm:text-4xl font-extrabold text-[#7CB342] font-serif block">
              10+
            </span>
            <span className="text-xs font-semibold text-slate-200 block mt-1">
              Years of Master Craftsmanship
            </span>
            <span className="text-[11px] text-slate-300">
              Generational family heritage
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
