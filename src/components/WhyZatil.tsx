import React from "react";
import { ShieldCheck, Sparkles, Wrench, Clock, HeartHandshake, Church } from "lucide-react";

interface WhyZatilProps {
  onOpenQuoteModal: () => void;
}

export default function WhyZatil({ onOpenQuoteModal }: WhyZatilProps) {
  const points = [
    {
      icon: Clock,
      title: "Built for Tropical Climates",
      desc: "Imported instruments often warp or crack in African weather. We use properly seasoned native tonewoods and specialized varnishes that withstand tropical temperature and humidity shifts.",
    },
    {
      icon: Wrench,
      title: "Local Parts & Direct Support",
      desc: "No waiting months for imported spares. Our master craftsmen, replacement pipe ranks, and repair workshops are readily available across Nigeria for routine maintenance.",
    },
    {
      icon: Church,
      title: "Custom Architectural Fit",
      desc: "Every church chancel is unique. We survey your altar space, choir stalls, and acoustic height to build pipe organ façades that integrate seamlessly into your sanctuary interior.",
    },
    {
      icon: ShieldCheck,
      title: "Comprehensive Builder Warranty",
      desc: "Every organ façade and handcrafted string instrument comes backed with our direct builder warranty and complimentary initial tuning and acoustic balancing.",
    },
  ];

  return (
    <section className="py-24 sm:py-32 bg-[#FAF8F5] text-[#1A1A1A] border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#F26522] block mb-2">
            The Zatil Advantage
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#111827] leading-tight">
            Why Churches & Musicians <br />
            <span className="font-serif italic font-normal text-[#C2410C]">Choose Indigenous Craftsmanship</span>
          </h2>
          <p className="mt-4 text-base text-neutral-600 leading-relaxed">
            Instead of spending millions importing second-hand instruments with no local warranty, Nigerian churches and orchestras partner directly with our master builders for lifetime acoustic reliability.
          </p>
        </div>

        {/* 4 Feature Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {points.map((pt, idx) => {
            const Icon = pt.icon;
            return (
              <div key={idx} className="space-y-3 bg-white p-7 rounded-2xl border border-neutral-200/80 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-orange-50 text-[#F26522] flex items-center justify-center mb-5">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-[#111827]">
                    {pt.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed mt-2">
                    {pt.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Callout Banner */}
        <div className="bg-[#1C1917] text-white p-8 sm:p-12 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl">
          <div className="space-y-2 max-w-2xl">
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
              Planning a Sanctuary Upgrade or Need New Instruments?
            </h3>
            <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
              Speak directly with our technical director for a free architectural survey and soundboard consultation.
            </p>
          </div>

          <button
            onClick={onOpenQuoteModal}
            className="px-8 py-4 rounded-full bg-[#F26522] hover:bg-orange-600 text-white text-xs font-bold uppercase tracking-wider transition-all flex-shrink-0 shadow-lg shadow-orange-500/30 cursor-pointer"
          >
            Schedule a Consultation
          </button>
        </div>

      </div>
    </section>
  );
}
