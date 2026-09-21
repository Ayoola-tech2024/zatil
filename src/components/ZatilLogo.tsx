import React from "react";
import Image from "next/image";

interface LogoProps {
  variant?: "light" | "dark" | "full-color";
  className?: string;
  showText?: boolean;
}

export default function ZatilLogo({
  variant = "full-color",
  className = "",
  showText = true,
}: LogoProps) {
  return (
    <div className={`flex items-center gap-2.5 sm:gap-3 select-none flex-shrink-0 ${className}`}>
      {/* Crisp Emblem */}
      <div className="relative w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 rounded-lg overflow-hidden flex-shrink-0 shadow-sm transition-transform hover:scale-105">
        <Image
          src="/images/logo/zatil-logo.jpg"
          alt="Zatil Group Emblem"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Brand Typography */}
      {showText && (
        <div className="flex flex-col justify-center flex-shrink-0">
          <div className="flex items-center tracking-tight leading-none font-extrabold text-lg sm:text-xl md:text-2xl whitespace-nowrap">
            <span className="text-[#F26522] font-serif">ZΛTIL</span>
          </div>
          <span
            className={`text-[9px] sm:text-[10px] md:text-[11px] font-bold tracking-[0.25em] uppercase whitespace-nowrap leading-tight mt-0.5 ${
              variant === "dark"
                ? "text-slate-300"
                : "text-neutral-600"
            }`}
          >
            GROUP
          </span>
        </div>
      )}
    </div>
  );
}
