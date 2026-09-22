"use client";

import React from "react";
import { ArrowRight, CheckCircle2, ShieldCheck, Sparkles } from "lucide-react";

interface ProductCatalogProps {
  onOpenQuoteModal: (product?: string) => void;
}

export default function ProductCatalog({ onOpenQuoteModal }: ProductCatalogProps) {
  const instruments = [
    {
      name: "Handcrafted Zatil Violin",
      category: "Full 4/4 & Student Graduations",
      desc: "Indigenously crafted acoustic violin with precision-carved spruce/African tonewood, ebony pegs, hand-varnished amber finish, and balanced bow.",
      specs: ["Seasoned African Tonewood", "Ebony Fingerboard & Chinrest", "Protective Case & Rosin", "6-Month Free Restoration"],
      for: "Cathedral Orchestras, Students, Soloists",
    },
    {
      name: "Bespoke Zatil Viola",
      category: "15” to 16.5” Body Patterns",
      desc: "Deep, warm tenor resonance crafted with enhanced chamber acoustics for orchestral ensembles and institutional worship bands.",
      specs: ["Deeper Rib Depth for Warm Lows", "Fine Tuner Tailpiece", "Precision Carved Bridge", "Hardwood Case Included"],
      for: "Orchestras, Chamber Quartets, Music Schools",
    },
    {
      name: "Master Zatil Cello",
      category: "4/4 Concert & Study Grades",
      desc: "Rich, commanding cello designed with robust internal bass bracing to project effortlessly across large halls without distortion.",
      specs: ["Hand-Carved Acoustic Scroll", "Seasoned Hardwood Bridge", "Endpin Stability Lock", "Deluxe Padded Gig Case"],
      for: "Cathedrals, Ensembles, Conservatories",
    },
    {
      name: "Concert Zatil Double Bass",
      category: "3/4 Orchestral & Jazz Standard",
      desc: "Massive acoustic presence delivering foundational low frequencies. Built with reinforced neck joins for tropical climatic resilience.",
      specs: ["Solid Spruce/Acoustic Hardwood", "Adjustable Height Bridge", "Heavy-Duty Brass Gears", "Reinforced Endpin"],
      for: "Churches, Symphony Orchestras, Jazz Ensembles",
    },
  ];

  return (
    <section id="products" className="bg-[#0B0D10] text-white py-16 sm:py-24 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#F26522]">
            Bespoke Instruments
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white mt-1">
            Handcrafted Bowed String Instruments
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed">
            Every stringed instrument crafted in our atelier is built with seasoned African acoustic tonewoods conditioned for tropical climatic durability.
          </p>
        </div>

        {/* ZUSP Banner */}
        <div className="p-6 sm:p-8 rounded-2xl bg-[#13161C] border border-white/10 mb-12">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-white/10 mb-6">
            <div>
              <span className="text-xs font-mono font-bold text-[#FFA726] uppercase">
                Zatil Strings' Unique Selling Points (ZUSP)
              </span>
              <h3 className="text-lg sm:text-xl font-bold text-white mt-0.5">
                Standard Guarantee on All Builds
              </h3>
            </div>
            <span className="text-xs font-bold text-[#7CB342] bg-lime-500/10 border border-lime-500/20 px-3 py-1 rounded-full w-fit">
              100% Quality Assurance
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 text-xs text-slate-300">
            <div className="p-3 rounded-xl bg-white/5">
              <span className="font-bold text-white block mb-1">01. Tonewood</span>
              <p className="text-slate-400">Seasoned African acoustic wood suited for our climate.</p>
            </div>
            <div className="p-3 rounded-xl bg-white/5">
              <span className="font-bold text-white block mb-1">02. Warranty</span>
              <p className="text-slate-400">Manufacturer warranty on all instruments.</p>
            </div>
            <div className="p-3 rounded-xl bg-white/5">
              <span className="font-bold text-white block mb-1">03. Casing</span>
              <p className="text-slate-400">Lightweight protective casing included.</p>
            </div>
            <div className="p-3 rounded-xl bg-white/5">
              <span className="font-bold text-white block mb-1">04. Free Restoration</span>
              <p className="text-slate-400">Complimentary servicing within first 6 months.</p>
            </div>
            <div className="p-3 rounded-xl bg-white/5">
              <span className="font-bold text-white block mb-1">05. User Manual</span>
              <p className="text-slate-400">Owner's care guide provided with every unit.</p>
            </div>
          </div>
        </div>

        {/* Product Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {instruments.map((inst, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-8 rounded-2xl bg-[#13161C] border border-white/10 hover:border-orange-500/40 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-4">
                  <span className="text-xs font-mono font-bold text-[#F26522]">
                    [ 0{idx + 1} ]
                  </span>
                  <span className="text-xs text-[#7CB342] font-semibold bg-lime-500/10 px-2.5 py-0.5 rounded">
                    {inst.category}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  {inst.name}
                </h3>
                <p className="text-xs text-slate-400 font-semibold mt-0.5 mb-3">
                  Target: {inst.for}
                </p>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-5">
                  {inst.desc}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">
                  {inst.specs.map((sp, sIdx) => (
                    <div key={sIdx} className="flex items-center gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#7CB342] flex-shrink-0" />
                      <span>{sp}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <span className="text-xs text-slate-400">Custom Sizing Available</span>
                <button
                  onClick={() => onOpenQuoteModal(inst.name)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-white bg-[#F26522] hover:bg-orange-600 px-4 py-2 rounded-lg transition-colors"
                >
                  <span>Request Pricing</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
