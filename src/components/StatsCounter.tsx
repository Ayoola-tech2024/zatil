import React from "react";

export default function StatsCounter() {
  const metrics = [
    { num: "10+", label: "Years Experience", desc: "Continuous African production" },
    { num: "51+", label: "Organ Façades", desc: "Installed in Cathedrals & Churches" },
    { num: "500+", label: "String Instruments", desc: "Violins, Violas, Cellos & Basses" },
    { num: "400+", label: "Audio Speakers", desc: "Acoustic institutional sound" },
    { num: "11+", label: "States Reached", desc: "Active across Nigerian regions" },
    { num: "26", label: "Craft Workforce", desc: "Master luthiers & field crew" },
  ];

  return (
    <section className="bg-[#0F1217] text-white border-b border-white/10 py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-8">
          {metrics.map((item, idx) => (
            <div key={idx} className="space-y-1">
              <span className="text-3xl sm:text-4xl font-extrabold text-[#F26522] tracking-tight block font-mono">
                {item.num}
              </span>
              <h3 className="text-xs sm:text-sm font-bold text-white">
                {item.label}
              </h3>
              <p className="text-[11px] text-slate-400 leading-snug">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-slate-400">
          <p className="italic">
            * Selected figures based on Zatil Group's internal business records & project archive.
          </p>
          <span className="text-[#7CB342] font-semibold">
            📍 Indigenous Manufacturing Facility • Made in Nigeria
          </span>
        </div>
      </div>
    </section>
  );
}
