"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowRight, ShieldCheck, Check } from "lucide-react";

interface InstrumentStudioProps {
  onOpenQuoteModal: (product?: string) => void;
}

export default function InstrumentStudio({ onOpenQuoteModal }: InstrumentStudioProps) {
  const [activeTab, setActiveTab] = useState<number>(0);

  const instruments = [
    {
      id: "violin",
      name: "Handcrafted Zatil Violin",
      category: "Concert & Student Grades",
      scale: "Full 4/4 Concert & Study Sizes (3/4, 1/2)",
      acousticProfile: "Bright, rich soprano projection with effortless response",
      wood: "Seasoned African Spruce Soundboard & Flamed Hardwood Back",
      finish: "Hand-applied amber oil varnish",
      fittings: "Madagascar Ebony pegs, fingerboard & chinrest",
      image: "/images/instruments/zatil-violin.jpg",
      lead: "Hand-carved for cathedral soloists, orchestral concertmasters, and music academy students. Conditioned specifically for African humidity so it stays in tune through seasonal shifts.",
      features: [
        { label: "Soundboard", value: "Seasoned tonewood conditioned for tropical durability" },
        { label: "Fingerboard", value: "Madagascar ebony planed to precision camber" },
        { label: "Included Pack", value: "Hard flight case, octagonal brazilwood bow & rosin" },
        { label: "Warranty", value: "6-month complimentary tonal setup & maintenance" },
      ],
    },
    {
      id: "viola",
      name: "Bespoke Zatil Viola",
      category: "Ensemble & Orchestral Tenor",
      scale: "15” to 16.5” Body Patterns",
      acousticProfile: "Deep, velvety tenor resonance with commanding C-string warmth",
      wood: "Seasoned African Hardwood with Flamed Ribs",
      finish: "Golden honey traditional lacquer",
      fittings: "Ebony fingerboard with 4-fine-tuner tailpiece",
      image: "/images/instruments/zatil-viola.jpg",
      lead: "Designed with an expanded internal air chamber to produce a dark, full-bodied resonance ideal for sanctuary worship, string quartets, and chamber orchestras.",
      features: [
        { label: "Acoustic Chamber", value: "Deep body pattern for rich lower-register tone" },
        { label: "Bridge Joinery", value: "Hand-carved maple bridge tuned for fast string attack" },
        { label: "Included Pack", value: "Padded travel case, balanced viola bow & rosin" },
        { label: "Warranty", value: "6-month complimentary tonal setup & maintenance" },
      ],
    },
    {
      id: "cello",
      name: "Master Zatil Cello",
      category: "Cathedral & Orchestral Bass",
      scale: "4/4 Concert Standard & 3/4 Student Sizes",
      acousticProfile: "Warm, powerful bass projection across large sanctuaries",
      wood: "Aged Acoustic Tonewood with Solid Hardwood Framing",
      finish: "Deep amber hand-rubbed spirit varnish",
      fittings: "Ebony fingerboard & heavy-duty brass lock endpin",
      image: "/images/zatil/showcase/sounds-about-right-4-05.jpg",
      lead: "Built with reinforced internal bass-bar bracing to project deep, warm tones effortlessly across wide cathedral halls without distortion.",
      features: [
        { label: "Internal Bracing", value: "Reinforced bass-bar for distortion-free low end" },
        { label: "Hardware Endpin", value: "Heavy-duty brass collar positive-lock mechanism" },
        { label: "Included Pack", value: "High-denier water-resistant padded gig case & bow" },
        { label: "Warranty", value: "6-month complimentary tonal setup & maintenance" },
      ],
    },
    {
      id: "double-bass",
      name: "Concert Zatil Double Bass",
      category: "Orchestral & Worship Foundation",
      scale: "3/4 Standard Size",
      acousticProfile: "Subterranean acoustic punch and foundational low-end warmth",
      wood: "Solid Seasoned Tonewood with Heavy Internal Bracing",
      finish: "Satin walnut and protective natural oils",
      fittings: "Precision brass tuning machine gears",
      image: "/images/zatil/showcase/sounds-about-right-5-04.jpg",
      lead: "The anchor of any orchestra or church worship band. Built with reinforced joints specifically tempered to prevent seam-splitting in West African climates.",
      features: [
        { label: "Construction", value: "Heavy-duty joint reinforcement for climatic resilience" },
        { label: "Machine Tuners", value: "Smooth-action brass geared machine tuners" },
        { label: "Included Pack", value: "Heavy padded transport bag with accessory pockets" },
        { label: "Warranty", value: "6-month complimentary tonal setup & maintenance" },
      ],
    },
  ];

  const current = instruments[activeTab];

  return (
    <section id="instruments" className="py-24 sm:py-32 bg-white text-[#1A1A1A] border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#F26522] block mb-2">
              Bespoke String Lutherie
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#111827]">
              Handcrafted String Instruments
            </h2>
          </div>
          <p className="text-sm text-neutral-600 max-w-md leading-relaxed">
            Every violin, viola, cello, and double bass is individually carved and voiced by our master artisans from seasoned tonewoods.
          </p>
        </div>

        {/* Tab Buttons (Clean, Human Design) */}
        <div className="flex flex-wrap gap-3 mb-10">
          {instruments.map((inst, idx) => (
            <button
              key={inst.id}
              onClick={() => setActiveTab(idx)}
              className={`px-6 py-3.5 rounded-2xl text-xs sm:text-sm font-bold tracking-wide transition-all cursor-pointer ${
                activeTab === idx
                  ? "bg-[#111827] text-white shadow-lg"
                  : "bg-neutral-100 hover:bg-neutral-200 text-neutral-700"
              }`}
            >
              {inst.name.replace("Handcrafted Zatil ", "").replace("Bespoke Zatil ", "").replace("Master Zatil ", "").replace("Concert Zatil ", "")}
            </button>
          ))}
        </div>

        {/* Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 bg-[#FAF8F5] border border-neutral-200/90 p-6 sm:p-12 rounded-3xl items-center">
          
          {/* Photo Frame */}
          <div className="lg:col-span-5 relative">
            <div className="h-80 sm:h-[460px] rounded-2xl overflow-hidden relative shadow-xl bg-black border border-neutral-300">
              <Image
                src={current.image}
                alt={current.name}
                fill
                className="object-cover object-center"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              
              <div className="absolute bottom-5 left-5 right-5 text-white">
                <span className="text-[10px] uppercase font-bold tracking-widest text-[#FFA726] block">
                  Acoustic Character
                </span>
                <p className="text-sm font-semibold mt-0.5 text-slate-100">
                  {current.acousticProfile}
                </p>
              </div>
            </div>
          </div>

          {/* Details & Specs */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <span className="text-xs font-bold text-[#F26522] uppercase tracking-wider block">
                {current.category}
              </span>
              <h3 className="text-2xl sm:text-4xl font-extrabold text-[#111827] tracking-tight mt-1">
                {current.name}
              </h3>
              <p className="text-sm text-neutral-600 leading-relaxed mt-2.5">
                {current.lead}
              </p>
            </div>

            {/* Spec Table */}
            <div className="bg-white rounded-2xl p-5 border border-neutral-200 space-y-3">
              {current.features.map((feat, fIdx) => (
                <div key={fIdx} className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-xs pb-2.5 border-b border-neutral-100 last:border-0 last:pb-0">
                  <span className="font-bold text-neutral-800 w-32 flex-shrink-0">
                    {feat.label}:
                  </span>
                  <span className="text-neutral-600">
                    {feat.value}
                  </span>
                </div>
              ))}
            </div>

            {/* Actions */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={() => onOpenQuoteModal(current.name)}
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-[#111827] hover:bg-black text-white text-xs font-bold uppercase tracking-wider transition-all shadow-md cursor-pointer"
              >
                <span>Inquire About {current.name.split(" ").pop()}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="inline-flex items-center gap-2 text-xs text-neutral-600 font-medium px-4 py-3 bg-white rounded-full border border-neutral-200">
                <ShieldCheck className="w-4 h-4 text-[#7CB342]" />
                <span>6-Month Free Workshop Setup Warranty</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
