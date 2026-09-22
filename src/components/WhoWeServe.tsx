import React from "react";
import { Church, School, User, GraduationCap, Building, Wrench } from "lucide-react";

export default function WhoWeServe() {
  const sectors = [
    {
      icon: Church,
      title: "Churches & Cathedrals",
      desc: "Custom organ façades, sanctuary sound systems, acoustic enhancement, repairs, and technical maintenance retainers.",
    },
    {
      icon: School,
      title: "Schools & Music Faculties",
      desc: "Durable stringed instrument sets (violins, violas, cellos) engineered for intensive student practice and music education.",
    },
    {
      icon: User,
      title: "Orchestras & Musicians",
      desc: "Bespoke instruments crafted to individual acoustic preferences with tailored setups and responsive action.",
    },
    {
      icon: GraduationCap,
      title: "Music Teachers & Tutors",
      desc: "Dependable study instruments that stay in tune, featuring ergonomic string heights for beginner and advanced students.",
    },
    {
      icon: Building,
      title: "Auditoriums & Event Halls",
      desc: "Custom audio enclosures, specialized acoustic infrastructure, and tailored architectural cabinetry.",
    },
    {
      icon: Wrench,
      title: "Instrument Owners",
      desc: "Full luthier repairs: bow re-hairing, soundpost calibration, crack sealing, and free initial inspection.",
    },
  ];

  return (
    <section className="bg-[#0F1217] text-white py-16 sm:py-24 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#F26522]">
            Target Sectors
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white mt-1">
            Built for the People Who Make Music Happen
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-300">
            From premier Nigerian cathedrals to student musicians, Zatil connects local manufacturing with reliable lifetime support.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {sectors.map((sec, idx) => {
            const Icon = sec.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#13161C] border border-white/10 hover:border-white/20 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="p-3 rounded-xl bg-orange-500/10 text-[#F26522] w-fit mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">
                    {sec.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {sec.desc}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-white/10 text-xs text-[#FFA726] font-semibold">
                  Lifetime Support Backed →
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
