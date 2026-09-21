"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import ZatilLogo from "./ZatilLogo";
import { Menu, X, ArrowUpRight, Phone } from "lucide-react";
import { SOCIAL_LINKS } from "./SocialIcons";

interface NavbarProps {
  onOpenQuoteModal: () => void;
}

export default function Navbar({ onOpenQuoteModal }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Instruments", href: "#instruments" },
    { name: "Pipe Organs", href: "#pipe-organs" },
    { name: "Services", href: "#services" },
    { name: "Impact", href: "#impact" },
    { name: "Archive", href: "#archive" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md border-b border-neutral-200 py-3 shadow-sm"
          : "bg-black/40 backdrop-blur-md border-b border-white/10 py-4 sm:py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="focus:outline-none">
            <ZatilLogo variant={isScrolled ? "light" : "dark"} />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-xs font-semibold uppercase tracking-[0.14em] transition-colors ${
                  isScrolled
                    ? "text-neutral-600 hover:text-black"
                    : "text-slate-200 hover:text-[#FFA726]"
                }`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-5">
            <a
              href="tel:+2348030814281"
              className={`text-xs font-semibold tracking-wider transition-colors flex items-center gap-1.5 ${
                isScrolled ? "text-neutral-600 hover:text-black" : "text-slate-200 hover:text-white"
              }`}
            >
              <Phone className="w-3.5 h-3.5 text-[#F26522]" />
              <span>0803 081 4281</span>
            </a>

            <button
              onClick={onOpenQuoteModal}
              className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all shadow-sm cursor-pointer ${
                isScrolled
                  ? "bg-black text-white hover:bg-neutral-800"
                  : "bg-[#F26522] text-white hover:bg-orange-600 shadow-orange-500/30"
              }`}
            >
              <span>Request Quote</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Right */}
          <div className="lg:hidden flex items-center gap-3">
            <button
              onClick={onOpenQuoteModal}
              className="px-3.5 py-1.5 rounded-full text-xs font-bold bg-[#F26522] text-white cursor-pointer"
            >
              Quote
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 focus:outline-none cursor-pointer ${isScrolled ? "text-black" : "text-white"}`}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white text-black border-b border-neutral-200 px-6 py-6 space-y-4 shadow-xl animate-in fade-in duration-150">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-semibold uppercase tracking-wider text-neutral-800 py-1"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Social Links inside Mobile Drawer */}
          <div className="pt-3 border-t border-neutral-100 flex items-center gap-3">
            <span className="text-[11px] font-mono text-neutral-400 uppercase">Social:</span>
            <div className="flex items-center gap-2">
              {SOCIAL_LINKS.map((soc) => {
                const Icon = soc.icon;
                return (
                  <a
                    key={soc.name}
                    href={soc.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={soc.label}
                    className="p-2 rounded-full bg-neutral-100 hover:bg-black text-neutral-700 hover:text-white transition-colors"
                  >
                    <Icon className="w-3.5 h-3.5" />
                  </a>
                );
              })}
            </div>
          </div>

          <div className="pt-2 flex flex-col gap-3">
            <a
              href="tel:+2348030814281"
              className="flex items-center justify-center gap-2 w-full py-3 bg-neutral-100 text-neutral-800 text-xs font-bold uppercase rounded-lg"
            >
              <Phone className="w-4 h-4 text-[#F26522]" />
              <span>Call Akure: 0803 081 4281</span>
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuoteModal();
              }}
              className="w-full py-3.5 bg-[#F26522] text-white font-bold text-xs uppercase tracking-wider rounded-lg shadow cursor-pointer"
            >
              Request a Project Quote
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
