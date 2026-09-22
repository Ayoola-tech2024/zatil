"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowRight, MapPin, Building2, CheckCircle2 } from "lucide-react";

interface OrganMilestoneProps {
  onOpenQuoteModal: () => void;
}

export default function OrganMilestone({ onOpenQuoteModal }: OrganMilestoneProps) {
  const [activeCase, setActiveCase] = useState(0);

  const cases = [
    {
      badge: "National Mega-Sanctuary Project",
      title: "Redeemed Christian Church of God (RCCG) Arena",
      location: "3x3km Auditorium, Redemption Camp, Ogun State",
      opus: "OPUS-ARENA",
      image: "/images/zatil/projects/sights-from-the-commencement-of-phase-ii-of-01.jpg",
      highlight: "Zatil Conference Pipe 21 • Phase II Arena Installation",
      desc: "Engineered specifically for the world's largest church auditorium (3x3km Arena). Features monumental acoustic scaling, gold-anodized display pipes, and specialized acoustic projection systems.",
      specs: [
        { label: "Scale Architecture", value: "3x3km Mega-Auditorium" },
        { label: "Pipe Series", value: "Conference Pipe 21" },
        { label: "Console Interface", value: "Multi-Division Audio" },
        { label: "Status", value: "Phase II Completed ✓" },
      ],
    },
    {
      badge: "Cathedral 4-Manual Installation",
      title: "Bishop Akinyele Memorial Anglican Church",
      location: "Ibadan, Oyo State",
      opus: "OPUS-IBADAN",
      image: "/images/zatil/projects/installation-of-51-piped-extended-conference-01.jpg",
      highlight: "51-Piped Extended Façade + Dual 37-Piped Screens",
      desc: "Comprehensive fabrication and erection of a 51-piped Extended Conference pipe façade and dual 37-piped side screen towers supporting a prestigious 4-Manual AltusKlass digital pipe organ.",
      specs: [
        { label: "Console System", value: "4-Manual AltusKlass" },
        { label: "Main Façade", value: "51-Piped Extended" },
        { label: "Side Towers", value: "Dual 37-Piped Screens" },
        { label: "Status", value: "Installed & Voiced ✓" },
      ],
    },
    {
      badge: "Federal Capital Territory Project",
      title: "New Estate Baptist Church",
      location: "Abuja FCT",
      opus: "OPUS-ABUJA",
      image: "/images/zatil/projects/we-are-pleased-to-announce-the-completion-of-01.jpg",
      highlight: "Zatil Conference Pipe E-Series + Viscount CLV8",
      desc: "Architectural 43-piped decorative façade meticulously designed and harmonized with a Viscount CLV8 organ console in the church chancel.",
      specs: [
        { label: "Organ Console", value: "Viscount CLV8" },
        { label: "Façade Structure", value: "43-Piped E-Series" },
        { label: "Wood Joinery", value: "Seasoned Nigerian Timber" },
        { label: "Status", value: "Commissioned ✓" },
      ],
    },
  ];

  const steps = [
    { num: "01", title: "CAD & Sanctuary Survey", desc: "Acoustic modeling customized to church chancel width & vault ceiling height." },
    { num: "02", title: "Casework Joinery", desc: "Solid seasoned hardwood chassis engineered for structural pipe support." },
    { num: "03", title: "Staining & Pipe Gilding", desc: "Casework staining harmonized with sanctuary interior woodwork." },
    { num: "04", title: "Nationwide Transit", desc: "Secure specialized logistical transit directly from our manufacturing atelier to the cathedral site." },
    { num: "05", title: "On-Site Erection & Rigging", desc: "Precision assembly and mounting by master luthier technicians." },
    { num: "06", title: "Console Voicing & Testing", desc: "Acoustic coupling and stop balancing for Viscount, Allen, Johannus & AltusKlass." },
  ];

  const current = cases[activeCase];

  return (
    <section id="pipe-organs" className="py-24 sm:py-32 bg-[#0B0D10] text-white border-b border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-xs font-bold font-mono uppercase tracking-widest text-[#FFA726] mb-4">
            <Building2 className="w-3.5 h-3.5" />
            <span>Architectural Pipe Façade Engineering</span>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white uppercase leading-tight">
            51+ Pipe Organ Façades <br />
            <span className="text-[#F26522] italic font-serif font-light lowercase">across</span> Nigerian Sanctuaries
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl font-normal">
            Zatil Group is Nigeria's leading engineering firm fabricating and erecting custom architectural pipe-organ façades for cathedrals, basilicas, and mega-auditoriums across 11+ states.
          </p>
        </div>

        {/* Case Switcher Tabs */}
        <div className="flex flex-wrap gap-2 sm:gap-3 mb-8">
          {cases.map((cs, idx) => (
            <button
              key={idx}
              onClick={() => setActiveCase(idx)}
              className={`px-4 sm:px-6 py-3 rounded-2xl text-xs font-bold tracking-wider uppercase transition-all cursor-pointer ${
                activeCase === idx
                  ? "bg-[#F26522] text-white shadow-lg shadow-orange-500/20"
                  : "bg-white/5 text-slate-300 hover:bg-white/10 border border-white/10"
              }`}
            >
              {cs.title.split(" ")[0]} {cs.title.split(" ")[1]} ({cs.opus})
            </button>
          ))}
        </div>

        {/* Monumental Case Study Showcase */}
        <div className="bg-[#13161C] border border-white/10 rounded-3xl p-6 sm:p-10 mb-20 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Real Project Photo Frame */}
            <div className="lg:col-span-6 relative">
              <div className="relative h-80 sm:h-[450px] rounded-2xl overflow-hidden border border-white/15 shadow-2xl group bg-neutral-950">
                <Image
                  src={current.image}
                  alt={current.title}
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />
                
                {/* Photo Tag Overlay */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between z-10">
                  <div className="bg-black/80 backdrop-blur-md px-3.5 py-1.5 rounded-xl border border-white/20 text-xs font-semibold text-white flex items-center gap-1.5 truncate max-w-[70%]">
                    <MapPin className="w-3.5 h-3.5 text-[#F26522] flex-shrink-0" />
                    <span className="truncate">{current.location}</span>
                  </div>
                  <span className="bg-[#F26522] text-white font-mono text-xs font-bold px-3 py-1.5 rounded-xl uppercase flex-shrink-0">
                    {current.opus}
                  </span>
                </div>
              </div>
            </div>

            {/* Case Study Details */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#FFA726]">
                  {current.badge}
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mt-1">
                  {current.title}
                </h3>
                <p className="text-xs text-slate-400 mt-1 font-mono">
                  {current.highlight}
                </p>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                {current.desc}
              </p>

              {/* Specs Grid */}
              <div className="grid grid-cols-2 gap-3 text-xs">
                {current.specs.map((sp, i) => (
                  <div key={i} className="p-4 bg-white/5 border border-white/10 rounded-2xl">
                    <span className="text-[10px] font-mono uppercase text-slate-400 block">{sp.label}</span>
                    <span className="font-bold text-white mt-1 block">{sp.value}</span>
                  </div>
                ))}
              </div>

              <div className="pt-2 flex flex-wrap gap-4 items-center">
                <button
                  onClick={onOpenQuoteModal}
                  className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-[#F26522] hover:bg-orange-600 text-white text-xs font-bold uppercase tracking-wider transition-all shadow-xl shadow-orange-500/25 cursor-pointer"
                >
                  <span>Commission a Pipe Organ</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <div className="text-xs text-slate-400 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#7CB342]" />
                  <span>Free Initial Architectural CAD Consultation</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 6-Phase Engineering Pipeline */}
        <div>
          <div className="mb-8 flex items-center justify-between pb-4 border-b border-white/10">
            <h3 className="text-lg sm:text-xl font-bold uppercase tracking-wider text-white">
              The 6-Phase Engineering Pipeline
            </h3>
            <span className="text-xs font-mono text-slate-400">
              Master Workshop to Cathedral Chancel
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
            {steps.map((st, idx) => (
              <div key={idx} className={`${idx > 0 ? "pt-4 sm:pt-0 sm:pl-4" : ""}`}>
                <span className="text-xs font-mono font-bold text-[#FFA726] block mb-1">
                  [{st.num}]
                </span>
                <h4 className="text-xs font-bold uppercase text-white mb-1">
                  {st.title}
                </h4>
                <p className="text-[11px] text-slate-400 leading-relaxed">
                  {st.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
