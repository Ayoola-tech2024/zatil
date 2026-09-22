"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowRight, MapPin, Church, CheckCircle2 } from "lucide-react";

interface OrganMilestoneProps {
  onOpenQuoteModal: () => void;
}

export default function OrganMilestone({ onOpenQuoteModal }: OrganMilestoneProps) {
  const [activeCase, setActiveCase] = useState(0);

  const cases = [
    {
      badge: "Mega-Auditorium Installation",
      title: "Redeemed Christian Church of God (RCCG) Arena",
      location: "3x3km Auditorium, Redemption Camp, Ogun State",
      image: "/images/zatil/projects/sights-from-the-commencement-of-phase-ii-of-01.jpg",
      highlight: "Zatil Conference Pipe 21 • Phase II Arena Façade",
      desc: "Custom-engineered for the world's largest church auditorium arena. Scaled for long acoustic throw with gold-anodized display pipes that integrate with the arena's high-capacity sanctuary audio system.",
      specs: [
        { label: "Auditorium Scale", value: "3x3km World Arena" },
        { label: "Façade Architecture", value: "Zatil Conference Pipe 21" },
        { label: "Finish Quality", value: "Gold-Anodized Display Pipes" },
        { label: "Status", value: "Completed & Commissioned" },
      ],
    },
    {
      badge: "Cathedral 4-Manual Façade",
      title: "Bishop Akinyele Memorial Anglican Church",
      location: "Ibadan, Oyo State",
      image: "/images/zatil/projects/installation-of-51-piped-extended-conference-01.jpg",
      highlight: "51-Piped Extended Façade + Dual 37-Piped Side Screens",
      desc: "Full woodwork fabrication and on-site assembly of a 51-piped extended conference façade with dual side screens, harmonized with a 4-Manual AltusKlass digital pipe organ console.",
      specs: [
        { label: "Organ Console", value: "4-Manual AltusKlass" },
        { label: "Center Façade", value: "51-Piped Extended Tower" },
        { label: "Side Towers", value: "Dual 37-Piped Screens" },
        { label: "Status", value: "Installed & Voiced in Chancel" },
      ],
    },
    {
      badge: "Federal Capital Territory Project",
      title: "New Estate Baptist Church",
      location: "Abuja FCT",
      image: "/images/zatil/projects/we-are-pleased-to-announce-the-completion-of-01.jpg",
      highlight: "43-Piped E-Series Façade + Viscount CLV8",
      desc: "Decorative 43-piped architectural façade tailored to the sanctuary chancel, paired with a Viscount CLV8 console with matching hardwood staining.",
      specs: [
        { label: "Console System", value: "Viscount CLV8 Organ" },
        { label: "Façade Series", value: "43-Piped E-Series" },
        { label: "Wood Joinery", value: "Seasoned Nigerian Hardwood" },
        { label: "Status", value: "Completed & In Use" },
      ],
    },
    {
      badge: "Diocesan Cathedral Project",
      title: "Cathedral of St. Paul's Anglican Church",
      location: "Ozoro, Delta State",
      image: "/images/hero/hero-organ.jpg",
      highlight: "Opus 51 Milestone • 2-Manual Viscount Console",
      desc: "Engineered for high-vaulted altar acoustics. Includes symmetrical gold-scaled pipe towers, rich hardwood cabinetry, and digital sound voicing tuned for cathedral hymnody.",
      specs: [
        { label: "Console Type", value: "2-Manual Viscount" },
        { label: "Timber Chassis", value: "Seasoned Mahogany Joinery" },
        { label: "Acoustic Tuning", value: "High-Vault Cathedral Reverb" },
        { label: "Status", value: "Dedicated & In Liturgical Use" },
      ],
    },
  ];

  const steps = [
    { num: "01", title: "Sanctuary Survey", desc: "Detailed measurement of church chancel width, ceiling height, and acoustic reverb." },
    { num: "02", title: "Timber Joinery", desc: "Solid seasoned hardwood chassis crafted for rigid structural pipe support." },
    { num: "03", title: "Pipe Gilding", desc: "Hand-finished gold and silver display pipes matching sanctuary altar woodwork." },
    { num: "04", title: "Direct Logistics", desc: "Specialist transport directly from our atelier to your church location anywhere in Nigeria." },
    { num: "05", title: "On-Site Rigging", desc: "Precision assembly, mounting, and alignment by our experienced master installers." },
    { num: "06", title: "Sound Voicing", desc: "Acoustic coupling and stop balancing for Viscount, Allen, Johannus & AltusKlass consoles." },
  ];

  const current = cases[activeCase];

  return (
    <section id="pipe-organs" className="py-24 sm:py-32 bg-[#1C1917] text-white border-b border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-xs font-semibold uppercase tracking-wider text-[#FFA726] mb-4">
            <Church className="w-3.5 h-3.5" />
            <span>Church Pipe Organ Façades</span>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
            51+ Organ Installations <br />
            <span className="font-serif italic font-normal text-[#F26522]">Across Nigerian Sanctuaries</span>
          </h2>
          <p className="mt-4 text-base text-slate-300 leading-relaxed max-w-2xl font-normal">
            We work with church committees, bishops, and music directors to design, build, and erect custom architectural pipe façades tailored to each sanctuary's interior woodwork.
          </p>
        </div>

        {/* Case Switcher Tabs */}
        <div className="flex flex-wrap gap-2 sm:gap-3 mb-8">
          {cases.map((cs, idx) => (
            <button
              key={idx}
              onClick={() => setActiveCase(idx)}
              className={`px-5 py-3 rounded-2xl text-xs font-bold tracking-wide transition-all cursor-pointer ${
                activeCase === idx
                  ? "bg-[#F26522] text-white shadow-lg shadow-orange-500/25"
                  : "bg-white/5 text-slate-300 hover:bg-white/10 border border-white/10"
              }`}
            >
              {cs.title.replace(" Church", "").replace(" Anglican", "")}
            </button>
          ))}
        </div>

        {/* Featured Case Showcase */}
        <div className="bg-[#292524] border border-white/10 rounded-3xl p-6 sm:p-10 mb-20 relative overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Real Project Photo */}
            <div className="lg:col-span-6 relative">
              <div className="relative h-80 sm:h-[450px] rounded-2xl overflow-hidden border border-white/15 shadow-2xl bg-neutral-950">
                <Image
                  src={current.image}
                  alt={current.title}
                  fill
                  className="object-cover object-center"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                
                {/* Location Overlay */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between z-10">
                  <div className="bg-black/80 backdrop-blur-md px-3.5 py-1.5 rounded-xl border border-white/20 text-xs font-semibold text-white flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#F26522] flex-shrink-0" />
                    <span>{current.location}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Case Details */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#FFA726] block">
                  {current.badge}
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mt-1">
                  {current.title}
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  {current.highlight}
                </p>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed font-normal">
                {current.desc}
              </p>

              {/* Specs Grid */}
              <div className="grid grid-cols-2 gap-3 text-xs">
                {current.specs.map((sp, i) => (
                  <div key={i} className="p-4 bg-white/5 border border-white/10 rounded-2xl">
                    <span className="text-[10px] uppercase font-semibold text-slate-400 block">{sp.label}</span>
                    <span className="font-bold text-white mt-1 block">{sp.value}</span>
                  </div>
                ))}
              </div>

              <div className="pt-2 flex flex-wrap gap-4 items-center">
                <button
                  onClick={onOpenQuoteModal}
                  className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-[#F26522] hover:bg-orange-600 text-white text-xs font-bold uppercase tracking-wider transition-all shadow-xl shadow-orange-500/25 cursor-pointer"
                >
                  <span>Inquire for Your Church Sanctuary</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* 6-Step Installation Journey */}
        <div>
          <div className="mb-8 flex items-center justify-between pb-4 border-b border-white/10">
            <h3 className="text-lg sm:text-xl font-bold uppercase tracking-wider text-white">
              How We Execute a Sanctuary Project
            </h3>
            <span className="text-xs text-slate-400">
              From Initial Survey to Dedication Sunday
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
            {steps.map((st, idx) => (
              <div key={idx} className={`${idx > 0 ? "pt-4 sm:pt-0 sm:pl-4" : ""}`}>
                <span className="text-xs font-bold text-[#FFA726] block mb-1 font-serif">
                  Step {st.num}
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
