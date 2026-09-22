"use client";

import React, { useState } from "react";
import Image from "next/image";
import { MapPin, ArrowUpRight, X, ChevronLeft, ChevronRight, Award, Music2, Sparkles, Building2 } from "lucide-react";
import { ZATIL_PROJECTS, ZATIL_SHOWCASE, ZATIL_AWARDS, ZatilProject, ShowcaseItem, AwardItem } from "@/data/zatilProjects";

export default function PhotoGallery() {
  const [activeTab, setActiveTab] = useState<"all" | "organs" | "strings" | "awards">("all");
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);
  const [activeGalleryList, setActiveGalleryList] = useState<{ url: string; title: string; subtitle: string }[]>([]);

  // Open Lightbox with a list of photos
  const openLightbox = (photos: string[], title: string, subtitle: string, initialIndex = 0) => {
    setActiveGalleryList(photos.map(url => ({ url, title, subtitle })));
    setSelectedPhotoIndex(initialIndex);
  };

  const closeLightbox = () => {
    setSelectedPhotoIndex(null);
    setActiveGalleryList([]);
  };

  const nextPhoto = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedPhotoIndex !== null && activeGalleryList.length > 0) {
      setSelectedPhotoIndex((selectedPhotoIndex + 1) % activeGalleryList.length);
    }
  };

  const prevPhoto = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedPhotoIndex !== null && activeGalleryList.length > 0) {
      setSelectedPhotoIndex((selectedPhotoIndex - 1 + activeGalleryList.length) % activeGalleryList.length);
    }
  };

  return (
    <section id="archive" className="py-24 sm:py-32 bg-white text-[#0A0A0A] border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header and Filter Tabs */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-200/60 text-[11px] font-mono font-bold uppercase tracking-wider text-[#F26522] mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Verified Archival Records</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-[#0A0A0A] uppercase">
              Project Portfolio & Archive
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-neutral-500 max-w-xl font-normal">
              Explore 88+ verified photo records of monumental church pipe organ installations, master string instrument crafting, and regional manufacturing awards.
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {[
              { id: "all", label: `All Archives (${ZATIL_PROJECTS.length + ZATIL_SHOWCASE.length + ZATIL_AWARDS.length})` },
              { id: "organs", label: `Pipe Organs (${ZATIL_PROJECTS.length})` },
              { id: "strings", label: `Lutherie & Strings (${ZATIL_SHOWCASE.length})` },
              { id: "awards", label: `Honors & Awards (${ZATIL_AWARDS.length})` },
            ].map((btn) => (
              <button
                key={btn.id}
                onClick={() => setActiveTab(btn.id as any)}
                className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                  activeTab === btn.id
                    ? "bg-[#0A0A0A] text-white shadow-sm"
                    : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200"
                }`}
              >
                {btn.label}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          
          {/* 1. Pipe Organ Projects */}
          {(activeTab === "all" || activeTab === "organs") &&
            ZATIL_PROJECTS.map((proj) => {
              const primaryImg = proj.images[0] || "/images/hero/hero-organ.jpg";
              return (
                <div
                  key={proj.id}
                  onClick={() => openLightbox(proj.images, proj.title, proj.location)}
                  className="bg-neutral-50 border border-neutral-200 rounded-3xl overflow-hidden hover:border-[#F26522] transition-all group flex flex-col justify-between cursor-pointer shadow-sm hover:shadow-md"
                >
                  <div>
                    {/* Main Image View */}
                    <div className="relative h-56 w-full overflow-hidden bg-neutral-900">
                      <Image
                        src={primaryImg}
                        alt={proj.title}
                        fill
                        className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />
                      
                      {/* Top Badges */}
                      <div className="absolute top-3 left-3 bg-black/70 backdrop-blur-md px-2.5 py-1 rounded-md text-[10px] font-mono text-white flex items-center gap-1.5">
                        <Building2 className="w-3 h-3 text-[#FFA726]" />
                        <span>{proj.code}</span>
                      </div>

                      <div className="absolute top-3 right-3 bg-[#F26522] text-white font-mono text-[10px] font-bold px-2 py-0.5 rounded">
                        {proj.images.length} Photos
                      </div>

                      {/* Tag at bottom of photo */}
                      <div className="absolute bottom-3 left-3 right-3 text-xs font-bold text-[#FFA726] truncate">
                        {proj.tag}
                      </div>
                    </div>

                    {/* Content Details */}
                    <div className="p-6">
                      <h3 className="text-base font-bold text-[#0A0A0A] group-hover:text-[#F26522] transition-colors leading-snug mb-1">
                        {proj.title}
                      </h3>

                      <div className="flex items-center gap-1.5 text-xs text-neutral-500 mb-3 font-medium">
                        <MapPin className="w-3.5 h-3.5 text-[#F26522] flex-shrink-0" />
                        <span>{proj.location}</span>
                      </div>

                      <p className="text-xs text-neutral-600 leading-relaxed line-clamp-2">
                        {proj.description}
                      </p>

                      {/* Specs pills */}
                      <div className="mt-4 flex flex-wrap gap-1.5">
                        {proj.specs.map((sp, i) => (
                          <span
                            key={i}
                            className="px-2.5 py-1 rounded-md bg-white border border-neutral-200 text-[10px] font-mono text-neutral-700"
                          >
                            {sp}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Card Footer */}
                  <div className="p-6 pt-0 border-t border-neutral-200/70 mt-2 flex items-center justify-between text-xs font-mono">
                    <span className="text-neutral-400">Click to view photos</span>
                    <span className="text-[#7CB342] font-bold flex items-center gap-1">
                      Installed ✓
                    </span>
                  </div>
                </div>
              );
            })}

          {/* 2. Bowed String Lutherie / Showcase */}
          {(activeTab === "all" || activeTab === "strings") &&
            ZATIL_SHOWCASE.map((show, idx) => (
              <div
                key={`showcase-${idx}`}
                onClick={() => openLightbox(show.images, show.title, show.tag)}
                className="bg-neutral-50 border border-neutral-200 rounded-3xl overflow-hidden hover:border-[#F26522] transition-all group flex flex-col justify-between cursor-pointer shadow-sm hover:shadow-md"
              >
                <div>
                  <div className="relative h-56 w-full overflow-hidden bg-neutral-900">
                    <Image
                      src={show.image}
                      alt={show.title}
                      fill
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />
                    
                    <div className="absolute top-3 left-3 bg-black/70 backdrop-blur-md px-2.5 py-1 rounded-md text-[10px] font-mono text-white flex items-center gap-1.5">
                      <Music2 className="w-3 h-3 text-[#F26522]" />
                      <span>ATELIER</span>
                    </div>

                    <div className="absolute top-3 right-3 bg-[#0A0A0A] text-white font-mono text-[10px] font-bold px-2 py-0.5 rounded border border-white/20">
                      {show.images.length} Photos
                    </div>

                    <div className="absolute bottom-3 left-3 right-3 text-xs font-bold text-[#FFA726] truncate">
                      {show.tag}
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-base font-bold text-[#0A0A0A] group-hover:text-[#F26522] transition-colors leading-snug mb-2">
                      {show.title}
                    </h3>
                    <p className="text-xs text-neutral-600 leading-relaxed line-clamp-3">
                      {show.description}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0 border-t border-neutral-200/70 mt-2 flex items-center justify-between text-xs font-mono">
                  <span className="text-neutral-400">Master Atelier Showcase</span>
                  <span className="text-[#F26522] font-bold">Showcase ↗</span>
                </div>
              </div>
            ))}

          {/* 3. Awards & Honors */}
          {(activeTab === "all" || activeTab === "awards") &&
            ZATIL_AWARDS.map((award, idx) => (
              <div
                key={`award-${idx}`}
                onClick={() => openLightbox(award.images, award.title, `${award.issuer} • ${award.year}`)}
                className="bg-neutral-50 border border-neutral-200 rounded-3xl overflow-hidden hover:border-amber-500 transition-all group flex flex-col justify-between cursor-pointer shadow-sm hover:shadow-md"
              >
                <div>
                  <div className="relative h-56 w-full overflow-hidden bg-neutral-900">
                    <Image
                      src={award.images[0]}
                      alt={award.title}
                      fill
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />
                    
                    <div className="absolute top-3 left-3 bg-amber-500/90 text-black px-2.5 py-1 rounded-md text-[10px] font-mono font-bold flex items-center gap-1.5">
                      <Award className="w-3.5 h-3.5" />
                      <span>OFFICIAL AWARD</span>
                    </div>

                    <div className="absolute top-3 right-3 bg-[#0A0A0A] text-white font-mono text-[10px] font-bold px-2 py-0.5 rounded border border-white/20">
                      {award.images.length} Photos
                    </div>

                    <div className="absolute bottom-3 left-3 right-3 text-xs font-bold text-amber-300">
                      {award.year} Regional Recognition
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-base font-bold text-[#0A0A0A] group-hover:text-amber-600 transition-colors leading-snug mb-1">
                      {award.title}
                    </h3>
                    <span className="text-xs font-semibold text-neutral-500 block mb-2">
                      {award.issuer}
                    </span>
                    <p className="text-xs text-neutral-600 leading-relaxed">
                      {award.description}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0 border-t border-neutral-200/70 mt-2 flex items-center justify-between text-xs font-mono">
                  <span className="text-neutral-400">Award Archive</span>
                  <span className="text-amber-600 font-bold">Verified Honor ★</span>
                </div>
              </div>
            ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedPhotoIndex !== null && activeGalleryList.length > 0 && (
        <div
          onClick={closeLightbox}
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 transition-opacity duration-300 animate-in fade-in"
        >
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 text-white/80 hover:text-white p-2 rounded-full bg-white/10 hover:bg-white/20 transition-all z-20 cursor-pointer"
            aria-label="Close photo preview"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Prev Button */}
          {activeGalleryList.length > 1 && (
            <button
              onClick={prevPhoto}
              className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 text-white/80 hover:text-white p-3 rounded-full bg-white/10 hover:bg-white/20 transition-all z-20 cursor-pointer"
              aria-label="Previous photo"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
          )}

          {/* Next Button */}
          {activeGalleryList.length > 1 && (
            <button
              onClick={nextPhoto}
              className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 text-white/80 hover:text-white p-3 rounded-full bg-white/10 hover:bg-white/20 transition-all z-20 cursor-pointer"
              aria-label="Next photo"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          )}

          {/* Central Modal Content */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-5xl w-full max-h-[90vh] flex flex-col items-center justify-center"
          >
            <div className="relative w-full h-[60vh] sm:h-[75vh] rounded-2xl overflow-hidden shadow-2xl bg-black border border-white/10">
              <Image
                src={activeGalleryList[selectedPhotoIndex].url}
                alt={activeGalleryList[selectedPhotoIndex].title}
                fill
                className="object-contain"
                priority
              />
            </div>

            {/* Captions and Navigation count */}
            <div className="mt-4 text-center text-white space-y-1 max-w-2xl px-4">
              <h4 className="text-base sm:text-lg font-bold">
                {activeGalleryList[selectedPhotoIndex].title}
              </h4>
              <p className="text-xs text-neutral-400">
                {activeGalleryList[selectedPhotoIndex].subtitle}
              </p>
              <div className="text-[11px] font-mono text-[#F26522] pt-1">
                Photo {selectedPhotoIndex + 1} of {activeGalleryList.length}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
