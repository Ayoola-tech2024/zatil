"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, ArrowUpRight } from "lucide-react";

interface HeroProps {
  onOpenQuoteModal: () => void;
}

export default function Hero({ onOpenQuoteModal }: HeroProps) {
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-between pt-32 sm:pt-40 pb-12 text-white border-b border-neutral-200 overflow-hidden">
      {/* Real Background Organ Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero/hero-organ.jpg"
          alt="Zatil Master Pipe Organ Installation in Cathedral Sanctuary"
          fill
          priority
          className="object-cover object-center transform scale-100"
        />
        {/* Subtle, Light Scrim */}
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />
      </div>

      {/* Main Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full my-auto">
        <div className="max-w-3xl space-y-6">
          {/* Master Headline */}
          <div className="space-y-3">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white leading-[1.05] uppercase drop-shadow-[0_4px_24px_rgba(0,0,0,0.8)]">
              Made in Nigeria. <br />
              <span className="text-[#FFA726] italic lowercase font-serif font-light">
                built for
              </span> Africa. <br />
              Designed to Inspire.
            </h1>
          </div>

          {/* Clean Narrative Text Without Any Box / Background Container */}
          <p className="text-base sm:text-xl text-slate-100 max-w-2xl font-normal leading-relaxed drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]">
            We design, craft, erect, and restore monumental <strong>church pipe-organ façades</strong>, 
            handcrafted <strong>stringed instruments</strong> with seasoned African tonewood, and institutional <strong>audio systems</strong> across Nigeria.
          </p>

          {/* Minimalist Action Controls */}
          <div className="pt-3 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <button
              onClick={onOpenQuoteModal}
              className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-[#F26522] hover:bg-orange-600 text-white text-xs font-bold uppercase tracking-[0.16em] transition-all shadow-xl shadow-orange-500/40 hover:scale-105"
            >
              <span>Request a Quote / Project RFP</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href="#pipe-organs"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white/10 hover:bg-white/20 border border-white/30 backdrop-blur-md text-xs font-bold uppercase tracking-[0.14em] text-white transition-all shadow-md"
            >
              <span>Explore 51+ Organ Installations</span>
              <ArrowUpRight className="w-4 h-4 text-[#FFA726]" />
            </a>
          </div>
        </div>
      </div>

      {/* Integrated Metrics Ledger */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full pt-8">
        <div className="pt-6 border-t border-white/20 bg-black/40 p-6 rounded-2xl backdrop-blur-md border border-white/15 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          <div>
            <span className="text-2xl sm:text-3xl font-extrabold text-white font-mono tracking-tight block">
              10+
            </span>
            <span className="text-xs font-bold uppercase tracking-wider text-slate-200 block mt-0.5">
              Years Experience
            </span>
            <span className="text-[11px] text-slate-300 block">
              Continuous lutherie
            </span>
          </div>

          <div>
            <span className="text-2xl sm:text-3xl font-extrabold text-[#FFA726] font-mono tracking-tight block">
              51+
            </span>
            <span className="text-xs font-bold uppercase tracking-wider text-slate-200 block mt-0.5">
              Organ Façades
            </span>
            <span className="text-[11px] text-slate-300 block">
              Cathedrals & churches
            </span>
          </div>

          <div>
            <span className="text-2xl sm:text-3xl font-extrabold text-white font-mono tracking-tight block">
              500+
            </span>
            <span className="text-xs font-bold uppercase tracking-wider text-slate-200 block mt-0.5">
              String Instruments
            </span>
            <span className="text-[11px] text-slate-300 block">
              Violins, cellos, basses
            </span>
          </div>

          <div>
            <span className="text-2xl sm:text-3xl font-extrabold text-white font-mono tracking-tight block">
              400+
            </span>
            <span className="text-xs font-bold uppercase tracking-wider text-slate-200 block mt-0.5">
              Audio Speakers
            </span>
            <span className="text-[11px] text-slate-300 block">
              Sanctuary acoustics
            </span>
          </div>

          <div>
            <span className="text-2xl sm:text-3xl font-extrabold text-white font-mono tracking-tight block">
              11+
            </span>
            <span className="text-xs font-bold uppercase tracking-wider text-slate-200 block mt-0.5">
              States Reached
            </span>
            <span className="text-[11px] text-slate-300 block">
              Nationwide delivery
            </span>
          </div>

          <div>
            <span className="text-2xl sm:text-3xl font-extrabold text-[#7CB342] font-mono tracking-tight block">
              26
            </span>
            <span className="text-xs font-bold uppercase tracking-wider text-slate-200 block mt-0.5">
              Craft Workforce
            </span>
            <span className="text-[11px] text-slate-300 block">
              Master craft collective
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
