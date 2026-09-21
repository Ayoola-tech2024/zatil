import React from "react";
import Image from "next/image";
import { Award, CheckCircle2 } from "lucide-react";

export default function CompanyStory() {
  const chapters = [
    {
      era: "01. ORIGINS",
      title: "Family Craftsmanship Heritage",
      narrative: "Deep family experience in fine woodwork and acoustic instruments laid the groundwork for an indigenous Nigerian lutherie tradition.",
    },
    {
      era: "02. ESTABLISHED",
      title: "Akure Workshop Founded",
      narrative: "Founded on the core belief that high-quality concert instruments and specialist church infrastructure can be built and maintained locally.",
    },
    {
      era: "03. INNOVATION",
      title: "Pipe-Organ Façades",
      narrative: "Pioneered decorative organ façade engineering in Nigeria, creating monumental installations for cathedrals nationwide.",
    },
    {
      era: "04. EXPANSION",
      title: "500+ Instruments & 51+ Organs",
      narrative: "Expanded across 11+ states with a dedicated 26-person team of master craftsmen, apprentices, and acoustic field engineers.",
    },
    {
      era: "05. FUTURE",
      title: "Circular Pan-African Impact",
      narrative: "Integrating tonewood recovery, zero-waste restoration, and youth apprenticeships to solidify Africa's capacity to build its own sound.",
    },
  ];

  const leadership = [
    { name: "Isaac Akinbobola", title: "Managing Partner", focus: "Corporate Strategy & Institutional Partnerships" },
    { name: "Henry Akinbobola", title: "Founding Partner / Technical Director", focus: "Master Lutherie, Organ Façade Engineering & Voicing" },
    { name: "Grace Akinbobola", title: "Human Resources", focus: "Talent Development, Apprenticeship & Administration" },
    { name: "Ayomikun Akinbobola", title: "Finance", focus: "Project Financing & Supply Chain Logistics" },
  ];

  return (
    <section id="about" className="py-20 sm:py-28 bg-[#FAFAFA] text-[#0A0A0A] border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#F26522]">
            Heritage & Lineage
          </span>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-[#0A0A0A] uppercase mt-1">
            From Family Craft to African Manufacturing
          </h2>
          <p className="mt-4 text-sm sm:text-base text-neutral-600 leading-relaxed">
            Zatil Group is an indigenous Nigerian musical instrument manufacturing company based in Akure, Ondo State. We combine classical lutherie, modern acoustic engineering, and technical training.
          </p>
        </div>

        {/* Timeline Row */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-16 border-b border-neutral-200 pb-16">
          {chapters.map((chap, idx) => (
            <div key={idx} className="space-y-2">
              <span className="text-xs font-mono font-bold text-[#F26522] block">
                {chap.era}
              </span>
              <h3 className="text-base font-bold text-[#0A0A0A]">
                {chap.title}
              </h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                {chap.narrative}
              </p>
            </div>
          ))}
        </div>

        {/* Award Highlight Banner */}
        <div className="mb-20 bg-amber-500/10 border border-amber-500/30 rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row items-center gap-6 justify-between">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-amber-500 text-black rounded-2xl flex-shrink-0">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[10px] font-mono uppercase font-bold text-amber-700 tracking-wider">
                Official Industry Recognition • 2020
              </span>
              <h4 className="text-base sm:text-lg font-bold text-[#0A0A0A] mt-0.5">
                Southwest Nigeria Outstanding Musical Equipment Manufacturing Company
              </h4>
              <p className="text-xs text-neutral-600 mt-1 max-w-2xl">
                Honoring Zatil Group for pioneering indigenous production of classical bowed strings and cathedral pipe organ facades across West Africa.
              </p>
            </div>
          </div>
          <div className="flex-shrink-0 flex items-center gap-2 text-xs font-mono font-bold text-neutral-700 bg-white px-4 py-2 rounded-xl border border-amber-500/20">
            <CheckCircle2 className="w-4 h-4 text-[#7CB342]" />
            <span>Verified Industry Merit</span>
          </div>
        </div>

        {/* Leadership Row */}
        <div>
          <h3 className="text-xl font-bold uppercase tracking-wider text-[#0A0A0A] mb-8">
            Executive Leadership & Directorate
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {leadership.map((lead, idx) => (
              <div key={idx} className="space-y-1">
                <span className="text-xs font-mono text-neutral-400 block">[ 0{idx + 1} ]</span>
                <h4 className="text-base font-bold text-[#0A0A0A]">
                  {lead.name}
                </h4>
                <span className="text-xs font-semibold text-[#F26522] block">
                  {lead.title}
                </span>
                <p className="text-xs text-neutral-600 leading-relaxed pt-1">
                  {lead.focus}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
