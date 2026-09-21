"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowRight, Sparkles, Volume2, Shield, CheckCircle2 } from "lucide-react";

interface InstrumentStudioProps {
  onOpenQuoteModal: (product?: string) => void;
}

export default function InstrumentStudio({ onOpenQuoteModal }: InstrumentStudioProps) {
  const [activeTab, setActiveTab] = useState<number>(0);

  const instruments = [
    {
      id: "violin",
      name: "Handcrafted Zatil Violin",
      category: "Bowed String Opus",
      scale: "4/4 Concert & Student (3/4, 1/2)",
      acousticProfile: "Vibrant, Warm Concert Soprano",
      wood: "Seasoned African Spruce Top & Tone Hardwood Back",
      finish: "Hand-Rubbed Amber Oil Varnish",
      fittings: "Madagascar Ebony Pegs, Fingerboard & Chinrest",
      image: "/images/zatil/showcase/sounds-about-right-4-01.jpg",
      lead: "Artisan-carved in Akure for cathedral soloists, orchestral concertmasters, and advanced students seeking effortless projection and tropical climatic stability.",
      specs: [
        "Acoustic Spruce Soundboard conditioned for humidity resilience",
        "Ebony fingerboard planed to 0.5mm precision camber",
        "Includes hard flight case, octagonal brazilwood bow & rosin",
        "6-Month complimentary setup & tonal adjustment included",
      ],
    },
    {
      id: "viola",
      name: "Bespoke Zatil Viola",
      category: "Bowed String Opus",
      scale: "15” to 16.5” Body Patterns",
      acousticProfile: "Deep, Velvety Tenor Resonance",
      wood: "Seasoned African Hardwood & Flamed Ribs",
      finish: "Hand-Applied Golden Honey Lacquer",
      fittings: "Ebony Fingerboard & 4-Fine-Tuner Tailpiece",
      image: "/images/zatil/showcase/sounds-about-right-4-03.jpg",
      lead: "Engineered with an enlarged internal chamber depth for rich lower-register resonance in worship sanctuaries, classical quartets, and chamber ensembles.",
      specs: [
        "Enlarged air chamber for rich, dark C-string resonance",
        "Hand-carved acoustic bridge shaped for fast string response",
        "Durable lightweight travel flight case & balanced bow",
        "6-Month complimentary setup & tonal adjustment included",
      ],
    },
    {
      id: "cello",
      name: "Master Zatil Cello",
      category: "Bowed String Opus",
      scale: "4/4 Concert & Study Grades",
      acousticProfile: "Thunderous, Commanding Bass Projection",
      wood: "Aged Acoustic Tonewood & Solid Hardwood",
      finish: "Traditional Deep Amber Varnish",
      fittings: "Ebony Fingerboard & Heavy Brass Endpin",
      image: "/images/zatil/showcase/sounds-about-right-4-05.jpg",
      lead: "Commanding cello designed with reinforced internal bass-bar bracing to project effortlessly across large cathedral halls without acoustic compression or distortion.",
      specs: [
        "Reinforced bass-bar for powerful, distortion-free low end",
        "Heavy-duty brass collar endpin with positive lock mechanism",
        "Padded high-denier water-resistant gig case & concert bow",
        "6-Month complimentary setup & tonal adjustment included",
      ],
    },
    {
      id: "double-bass",
      name: "Concert Zatil Double Bass",
      category: "Bowed String Opus",
      scale: "3/4 Orchestral & Jazz Standard",
      acousticProfile: "Subterranean Foundational Lows",
      wood: "Solid Acoustic Tonewood with Heavy Bracing",
      finish: "Satin Walnut & Hardwood Protective Oil",
      fittings: "Heavy-Duty Brass Tuning Machine Gears",
      image: "/images/zatil/showcase/sounds-about-right-5-04.jpg",
      lead: "Massive acoustic foundation delivering thunderous projection and warmth. Built with reinforced joints specifically tempered for tropical temperature shifts.",
      specs: [
        "Solid tonewood soundboard with heavy-duty internal bracing",
        "Precision brass machine gear tuners with smooth gear ratios",
        "Reinforced transport bag with double-padded accessory pouches",
        "6-Month complimentary setup & tonal adjustment included",
      ],
    },
  ];

  const current = instruments[activeTab];

  return (
    <section id="instruments" className="py-24 sm:py-32 bg-white text-[#0A0A0A] border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-[0.2em] text-[#F26522] mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Acoustic Lutherie Showroom</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-[#0A0A0A] uppercase">
              Bespoke String Instruments
            </h2>
          </div>
          <p className="text-sm text-neutral-500 max-w-md leading-relaxed">
            Hand-carved at 39 Yaba Street atelier in Akure from seasoned African acoustic tonewoods. Select an instrument to view real workshop lutherie and acoustic profiling.
          </p>
        </div>

        {/* Interactive Studio Switcher */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-12">
          {instruments.map((inst, idx) => (
            <button
              key={inst.id}
              onClick={() => setActiveTab(idx)}
              className={`p-4 sm:p-5 text-left rounded-2xl border transition-all cursor-pointer ${
                activeTab === idx
                  ? "bg-[#0A0A0A] text-white border-black shadow-xl"
                  : "bg-neutral-50 hover:bg-neutral-100 text-neutral-700 border-neutral-200"
              }`}
            >
              <span className={`text-[10px] font-mono uppercase tracking-wider block mb-1 ${activeTab === idx ? "text-[#FFA726]" : "text-neutral-400"}`}>
                [ 0{idx + 1} ]
              </span>
              <h3 className="text-sm sm:text-base font-bold truncate">
                {inst.name.replace("Handcrafted Zatil ", "").replace("Bespoke Zatil ", "").replace("Master Zatil ", "").replace("Concert Zatil ", "")}
              </h3>
              <span className={`text-xs block mt-0.5 ${activeTab === idx ? "text-neutral-300" : "text-neutral-500"}`}>
                {inst.scale.split("&")[0]}
              </span>
            </button>
          ))}
        </div>

        {/* Studio Showcase Display */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 bg-neutral-50 border border-neutral-200 p-6 sm:p-12 rounded-3xl items-center">
          {/* Visual Showcase Frame with Real Atelier Photo */}
          <div className="lg:col-span-5 relative">
            <div className="h-80 sm:h-[440px] rounded-2xl overflow-hidden relative shadow-2xl group border border-neutral-300 bg-black">
              <Image
                src={current.image}
                alt={current.name}
                fill
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/40" />
              
              {/* Top Tag */}
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                <span className="text-xs font-mono font-bold text-[#FFA726] bg-black/70 backdrop-blur-md px-3 py-1 rounded-full uppercase border border-white/10">
                  Akure Master Build
                </span>
                <div className="flex items-center gap-1.5 text-xs text-white bg-black/70 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/10">
                  <Volume2 className="w-3.5 h-3.5 text-[#7CB342]" />
                  <span>Acoustic Voicing</span>
                </div>
              </div>

              {/* Bottom Acoustic Summary */}
              <div className="absolute bottom-4 left-4 right-4 z-10 space-y-1">
                <span className="text-[10px] font-mono text-neutral-300 uppercase tracking-widest block">
                  Acoustic Signature
                </span>
                <h4 className="text-xl sm:text-2xl font-black text-white uppercase tracking-tight">
                  {current.acousticProfile}
                </h4>
                <p className="text-[11px] text-neutral-300 font-mono pt-1">
                  Tonewood: {current.wood}
                </p>
              </div>
            </div>
          </div>

          {/* Technical Specs & Details */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <span className="text-xs font-mono font-bold text-[#F26522] uppercase tracking-wider">
                {current.category} • {current.scale}
              </span>
              <h3 className="text-2xl sm:text-4xl font-black text-[#0A0A0A] tracking-tight uppercase mt-1">
                {current.name}
              </h3>
              <p className="text-sm text-neutral-600 leading-relaxed mt-2">
                {current.lead}
              </p>
            </div>

            {/* Spec Highlights Checklist */}
            <div className="space-y-2.5 pt-2">
              {current.specs.map((sp, sIdx) => (
                <div key={sIdx} className="flex items-start gap-3 text-xs sm:text-sm text-neutral-700">
                  <CheckCircle2 className="w-4 h-4 text-[#7CB342] flex-shrink-0 mt-0.5" />
                  <span>{sp}</span>
                </div>
              ))}
            </div>

            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={() => onOpenQuoteModal(current.name)}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-[#0A0A0A] hover:bg-neutral-800 text-white text-xs font-bold uppercase tracking-wider transition-all shadow-md cursor-pointer"
              >
                <span>Request Commission Pricing</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="inline-flex items-center gap-2 text-xs text-neutral-600 font-semibold px-4 py-3 bg-white rounded-full border border-neutral-200">
                <Shield className="w-4 h-4 text-[#7CB342]" />
                <span>Includes 6-Month Free Restoration Warranty</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
