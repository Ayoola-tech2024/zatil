"use client";

import React, { useState } from "react";
import { ArrowUpRight, Plus, Minus } from "lucide-react";

interface BentoServicesProps {
  onOpenQuoteModal: (service?: string) => void;
}

export default function BentoServices({ onOpenQuoteModal }: BentoServicesProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const capabilities = [
    {
      num: "01",
      title: "Bespoke Stringed Instruments",
      subtitle: "Violins • Violas • Cellos • Double Basses",
      desc: "Master-crafted with seasoned African acoustic tonewoods. Specially conditioned for tropical African climates with protective flight cases and a 6-month free restoration warranty.",
      details: "Includes custom neck cambering, hand-rubbed amber varnish, and precision soundpost voicing tailored to student, orchestra, or cathedral soloist requirements.",
    },
    {
      num: "02",
      title: "Pipe Organ Façade Engineering",
      subtitle: "Cathedrals • Churches • Worship Auditoriums",
      desc: "Architectural façade design, fabrication, and on-site rigging with 51+ completed installations across Nigeria. Custom pipe scaling and console integration.",
      details: "Full 3D modeling and acoustic simulation to harmonize pipe heights with church altar geometry and organ consoles like Viscount, Allen, Johannus, and Rodgers.",
    },
    {
      num: "03",
      title: "Audio Speaker Systems",
      subtitle: "Institutional & Sanctuary Sound Reinforcement",
      desc: "Locally manufactured high-SPL speaker enclosures engineered for vocal intelligibility and long-term acoustic endurance in large assembly halls.",
      details: "Built with heavy-duty acoustic plywood, internal dampening baffles, and high-frequency dispersion horns suited for high-reverberation cathedral spaces.",
    },
    {
      num: "04",
      title: "Luthier Repairs & Maintenance Clinic",
      subtitle: "Bowed Strings & Acoustic Calibration",
      desc: "Precision workshop repairs: bow re-hairing with premium Mongolian horsehair, soundpost resetting, bridge carving, crack stabilization, and free initial inspection.",
      details: "Professional luthier servicing adhering to classical European and African acoustic standards to maintain tonal resonance and longevity.",
    },
    {
      num: "05",
      title: "Instrument Refurbishment & Restoration",
      subtitle: "Circular Life-Extension & Material Recovery",
      desc: "Restoring aged and damaged instruments back to concert condition, recovering usable tonewood and vintage hardware to reduce unnecessary waste.",
      details: "Stripping cracked varnish, re-gluing internal braces, and retrofitting modern tuning pegs to extend an instrument's lifespan by decades.",
    },
    {
      num: "06",
      title: "Technical & Luthier Apprenticeships",
      subtitle: "Youth Skills & Capacity Development",
      desc: "Hands-on apprenticeship programs in musical instrument manufacturing, acoustic physics, woodwork mechanics, and sound engineering.",
      details: "Providing young Nigerians with sovereign technical skills in wood craftsmanship, electronics, and acoustic system maintenance.",
    },
    {
      num: "07",
      title: "Custom Digital CAD Fabrication",
      subtitle: "Architectural Space Planning & Casework",
      desc: "Converting space blueprints into tailored architectural musical infrastructure, acoustic cabinetry, and custom choir installations.",
      details: "Precision CNC and joinery modeling for custom choir risers, organ cabinetry, and sanctuary acoustic diffusers.",
    },
  ];

  return (
    <section id="services" className="py-24 sm:py-32 bg-white text-[#0A0A0A] border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-6 border-b border-neutral-200">
          <div>
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#F26522]">
              Atelier Practice
            </span>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-[#0A0A0A] uppercase mt-1">
              Manufacturing Capabilities
            </h2>
          </div>
          <p className="text-sm text-neutral-500 max-w-md leading-relaxed">
            From handcrafted violins to monumental cathedral pipe organ installations, our manufacturing collective connects indigenous African woodworking with modern acoustic engineering.
          </p>
        </div>

        {/* Interactive Accordion Capabilities Directory */}
        <div className="divide-y divide-neutral-200 border-b border-neutral-200">
          {capabilities.map((svc, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="py-6 sm:py-8 transition-colors hover:bg-neutral-50/80 px-4 -mx-4 rounded-2xl cursor-pointer"
                onClick={() => setOpenIndex(isOpen ? null : idx)}
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 items-center">
                  <div className="lg:col-span-2 flex items-center gap-3">
                    <span className="text-xl font-mono font-black text-[#F26522]">
                      [{svc.num}]
                    </span>
                    <span className="text-xs font-mono uppercase tracking-wider text-neutral-400">
                      Facility
                    </span>
                  </div>

                  <div className="lg:col-span-4">
                    <h3 className="text-xl sm:text-2xl font-bold text-[#0A0A0A]">
                      {svc.title}
                    </h3>
                    <p className="text-xs font-semibold text-[#7CB342] mt-0.5">
                      {svc.subtitle}
                    </p>
                  </div>

                  <div className="lg:col-span-5">
                    <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-normal">
                      {svc.desc}
                    </p>
                  </div>

                  <div className="lg:col-span-1 flex justify-end">
                    <div className="p-2 rounded-full bg-neutral-100 text-neutral-700">
                      {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    </div>
                  </div>
                </div>

                {/* Expanded Drawer Details */}
                {isOpen && (
                  <div className="mt-6 pt-6 border-t border-neutral-200 grid grid-cols-1 lg:grid-cols-12 gap-6 bg-neutral-50 p-6 rounded-2xl animate-in fade-in duration-200">
                    <div className="lg:col-span-8 space-y-2">
                      <span className="text-xs font-mono font-bold uppercase tracking-wider text-neutral-400">
                        Technical Engineering Scope
                      </span>
                      <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed">
                        {svc.details}
                      </p>
                    </div>
                    <div className="lg:col-span-4 flex items-center justify-start lg:justify-end">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onOpenQuoteModal(svc.title);
                        }}
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#0A0A0A] hover:bg-neutral-800 text-white text-xs font-bold uppercase tracking-wider transition-colors"
                      >
                        <span>Commission Service</span>
                        <ArrowUpRight className="w-4 h-4" />
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
