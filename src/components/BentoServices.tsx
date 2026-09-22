"use client";

import React, { useState } from "react";
import { ChevronDown, ArrowRight, Church, Music, Volume2, Wrench, RefreshCw, GraduationCap, Compass } from "lucide-react";

interface BentoServicesProps {
  onOpenQuoteModal: (serviceName?: string) => void;
}

export default function BentoServices({ onOpenQuoteModal }: BentoServicesProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const capabilities = [
    {
      num: "01",
      icon: Church,
      title: "Church Pipe Organ Façade Engineering",
      subtitle: "Cathedrals • Basilicas • Worship Auditoriums",
      desc: "Custom architectural design, hardwood casework, and on-site rigging with 51+ completed installations across Nigeria. Symmetrical pipe scaling matched to your sanctuary acoustics.",
      details: "Includes 3D sanctuary modeling, structural hardwood framing, gold and silver pipe gilding, and audio integration for Viscount, Allen, Johannus, Rodgers, and AltusKlass organ consoles.",
    },
    {
      num: "02",
      icon: Music,
      title: "Handmade Violins, Violas, Cellos & Double Basses",
      subtitle: "Concert Performers • Soloists • Music Academies",
      desc: "Artisan-carved instruments built from seasoned African acoustic tonewoods. Specially conditioned for African climates with protective flight cases and a 6-month free maintenance warranty.",
      details: "Each instrument features hand-rubbed spirit or amber oil varnish, Madagascar ebony fittings, hand-carved maple bridges, and individualized soundpost voicing for concert halls and churches.",
    },
    {
      num: "03",
      icon: Volume2,
      title: "Sanctuary Sound Reinforcement & Speakers",
      subtitle: "Institutional Speech Intelligibility & High-SPL Acoustic Systems",
      desc: "Locally manufactured heavy-duty speaker systems engineered specifically for vocal clarity and long-term acoustic performance in high-vaulted cathedral sanctuaries.",
      details: "Built with reinforced acoustic plywood, internal dampening chambers, and directional high-frequency horns designed to eliminate acoustic echo in reverberant churches.",
    },
    {
      num: "04",
      icon: Wrench,
      title: "Professional Luthier Repairs & Bow Re-hairing",
      subtitle: "String Instrument Maintenance & Acoustic Calibration",
      desc: "Expert workshop repairs: premium Mongolian horsehair bow re-hairing, soundpost resetting, bridge carving, crack sealing, and neck adjustments with free initial inspection.",
      details: "Restoring tonal projection and playability for musicians nationwide, using classical European and African lutherie standards.",
    },
    {
      num: "05",
      icon: RefreshCw,
      title: "Complete Church Organ Restoration & Voicing",
      subtitle: "Sanctuary Maintenance • Re-voicing • Electronic Upgrades",
      desc: "Restoring aged pipe façades, cleaning gold ranks, re-voicing organ consoles, and upgrading older church audio installations back to pristine performance.",
      details: "Routine maintenance contracts available for dioceses and church leadership to ensure organs sound majestic for every Sunday and cathedral festival.",
    },
    {
      num: "06",
      icon: GraduationCap,
      title: "Technical Lutherie & Apprenticeship Training",
      subtitle: "Youth Capacity Building & African Craftsmanship",
      desc: "Hands-on apprenticeship programs in fine instrument making, acoustic science, wood mechanics, and church sound engineering for young Nigerians.",
      details: "Equipping young craftspeople with sovereign skills in instrument building, preservation, and acoustic engineering.",
    },
  ];

  return (
    <section id="services" className="py-24 sm:py-32 bg-white text-[#1A1A1A] border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14 pb-6 border-b border-neutral-200">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#F26522] block mb-2">
              Our Capabilities
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#111827]">
              Specialized Services & Manufacturing
            </h2>
          </div>
          <p className="text-sm text-neutral-600 max-w-md leading-relaxed">
            From monumental cathedral pipe organ façades to hand-carved violins and sanctuary acoustic repairs.
          </p>
        </div>

        {/* Accordion Capabilities Directory */}
        <div className="divide-y divide-neutral-200 border-b border-neutral-200">
          {capabilities.map((svc, idx) => {
            const isOpen = openIndex === idx;
            const Icon = svc.icon;

            return (
              <div key={idx} className="py-6 sm:py-8 transition-colors">
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full text-left flex items-start justify-between gap-6 focus:outline-none group cursor-pointer"
                >
                  <div className="flex items-start gap-5">
                    <div className={`p-3.5 rounded-2xl transition-colors ${
                      isOpen ? "bg-[#F26522] text-white" : "bg-neutral-100 text-neutral-700 group-hover:bg-neutral-200"
                    }`}>
                      <Icon className="w-5 h-5" />
                    </div>

                    <div>
                      <span className="text-xs font-semibold text-[#C2410C] block">
                        {svc.subtitle}
                      </span>
                      <h3 className="text-xl sm:text-2xl font-bold text-[#111827] group-hover:text-[#F26522] transition-colors mt-0.5">
                        {svc.title}
                      </h3>
                      <p className="text-sm text-neutral-600 max-w-3xl mt-2 leading-relaxed">
                        {svc.desc}
                      </p>
                    </div>
                  </div>

                  <div className="p-2 rounded-full border border-neutral-200 text-neutral-400 group-hover:text-black group-hover:border-black transition-all flex-shrink-0 mt-2">
                    <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${isOpen ? "rotate-180 text-black" : ""}`} />
                  </div>
                </button>

                {/* Expanded Details */}
                {isOpen && (
                  <div className="mt-6 pt-6 border-t border-neutral-100 pl-4 sm:pl-16 pr-4 sm:pr-8 animate-in fade-in duration-300">
                    <div className="bg-[#FAF8F5] p-6 rounded-2xl border border-neutral-200 flex flex-col md:flex-row md:items-center justify-between gap-6">
                      <div className="space-y-2 max-w-2xl">
                        <span className="text-xs font-bold uppercase tracking-wider text-neutral-500">
                          Scope of Service & Craftsmanship
                        </span>
                        <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed">
                          {svc.details}
                        </p>
                      </div>

                      <button
                        onClick={() => onOpenQuoteModal(svc.title)}
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#111827] hover:bg-black text-white text-xs font-bold uppercase tracking-wider transition-all flex-shrink-0 shadow-md cursor-pointer"
                      >
                        <span>Inquire About This Service</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
