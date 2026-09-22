"use client";

import React, { useState, useEffect } from "react";
import { X, MessageSquare, Send, CheckCircle2 } from "lucide-react";

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedService?: string;
}

export default function QuoteModal({
  isOpen,
  onClose,
  preselectedService = "",
}: QuoteModalProps) {
  const [fullName, setFullName] = useState("");
  const [orgName, setOrgName] = useState("");
  const [service, setService] = useState(preselectedService || "Pipe Organ Façade Installation");
  const [location, setLocation] = useState("");
  const [phone, setPhone] = useState("");
  const [details, setDetails] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (preselectedService) {
      setService(preselectedService);
    }
  }, [preselectedService]);

  if (!isOpen) return null;

  const handleWhatsAppSend = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `*NEW INQUIRY FOR ZATIL GROUP*\n\n` +
      `*Full Name:* ${fullName || "Not specified"}\n` +
      `*Church/Institution:* ${orgName || "Individual"}\n` +
      `*Location:* ${location || "Nigeria"}\n` +
      `*Contact Phone:* ${phone || "Not specified"}\n` +
      `*Required Service/Product:* ${service}\n` +
      `*Project Details:* ${details || "Standard Inquiry"}\n\n` +
      `_Sent from zatilgroup.com web consultation engine_`;

    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/2348030814281?text=${encoded}`, "_blank");
    setSubmitted(true);
  };

  const handleEmailSend = () => {
    const subject = encodeURIComponent(`Project Quote Request: ${service} - ${orgName || fullName}`);
    const body = encodeURIComponent(
      `Name: ${fullName}\nInstitution: ${orgName}\nLocation: ${location}\nPhone: ${phone}\nService: ${service}\nDetails: ${details}`
    );
    window.open(`mailto:zatilsystems@gmail.com?subject=${subject}&body=${body}`, "_blank");
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-150">
      <div className="relative w-full max-w-lg bg-white text-[#0A0A0A] rounded-3xl shadow-2xl border border-neutral-200 overflow-hidden">
        {/* Header */}
        <div className="p-6 sm:p-8 border-b border-neutral-100 flex items-start justify-between">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-[#F26522] block mb-1">
              Direct Consultation
            </span>
            <h3 className="text-2xl font-black uppercase text-[#0A0A0A]">
              Request a Project Quote
            </h3>
            <p className="text-xs text-neutral-500 mt-1">
              Connect directly with our master craftsmen and acoustic engineers.
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full text-neutral-400 hover:text-black hover:bg-neutral-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {submitted ? (
          <div className="p-8 text-center space-y-4">
            <div className="w-14 h-14 rounded-full bg-lime-100 text-[#7CB342] flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-7 h-7" />
            </div>
            <h4 className="text-xl font-bold text-[#0A0A0A]">
              Inquiry Dispatched
            </h4>
            <p className="text-xs text-neutral-600 max-w-sm mx-auto">
              Thank you for reaching out to Zatil Group. Our technical team will review your project requirements and connect with you shortly.
            </p>
            <div className="pt-2">
              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="px-6 py-2.5 rounded-full bg-black text-white text-xs font-bold uppercase"
              >
                Close Window
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleWhatsAppSend} className="p-6 sm:p-8 space-y-4 max-h-[75vh] overflow-y-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-neutral-600 mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="e.g. Pastor Emmanuel"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-200 text-xs text-[#0A0A0A] placeholder-neutral-400 focus:outline-none focus:border-black"
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-neutral-600 mb-1">
                  Church / Institution
                </label>
                <input
                  type="text"
                  value={orgName}
                  onChange={(e) => setOrgName(e.target.value)}
                  placeholder="e.g. St. Paul Cathedral"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-200 text-xs text-[#0A0A0A] placeholder-neutral-400 focus:outline-none focus:border-black"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-neutral-600 mb-1">
                  WhatsApp Phone *
                </label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="e.g. 0803 081 4281"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-200 text-xs text-[#0A0A0A] placeholder-neutral-400 focus:outline-none focus:border-black"
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-neutral-600 mb-1">
                  Location (City / State) *
                </label>
                <input
                  type="text"
                  required
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder="e.g. Akure, Lagos, Delta"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-200 text-xs text-[#0A0A0A] placeholder-neutral-400 focus:outline-none focus:border-black"
                />
              </div>
            </div>

            <div>
              <label className="block text-[11px] font-bold uppercase tracking-wider text-neutral-600 mb-1">
                Select Service / Product *
              </label>
              <select
                value={service}
                onChange={(e) => setService(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-200 text-xs text-[#0A0A0A] bg-white focus:outline-none focus:border-black"
              >
                <option value="Pipe Organ Façade Installation">Pipe Organ Façade Installation (Church / Cathedral)</option>
                <option value="Handcrafted Violin / Viola / Cello Purchase">Stringed Instrument Purchase (Violin, Viola, Cello, Bass)</option>
                <option value="Audio Speakers & Sound Reinforcement">Audio Speakers & Sound Reinforcement Systems</option>
                <option value="Luthier Repair / Maintenance">Luthier Repair / Maintenance / Bow Re-hairing</option>
                <option value="Instrument Refurbishment">Instrument Refurbishment & Restoration</option>
                <option value="Music & Technical Training">Music & Technical Luthier Training</option>
                <option value="Custom Architectural Fabrication">Custom Architectural CAD Fabrication</option>
              </select>
            </div>

            <div>
              <label className="block text-[11px] font-bold uppercase tracking-wider text-neutral-600 mb-1">
                Project Notes / Details
              </label>
              <textarea
                rows={3}
                value={details}
                onChange={(e) => setDetails(e.target.value)}
                placeholder="Describe your sanctuary dimensions or requirements..."
                className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-200 text-xs text-[#0A0A0A] placeholder-neutral-400 focus:outline-none focus:border-black"
              />
            </div>

            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <button
                type="submit"
                className="flex-1 inline-flex items-center justify-center gap-2 py-3.5 rounded-full bg-[#25D366] hover:bg-[#1EBE5D] text-white font-bold text-xs shadow-sm transition-colors"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Send via WhatsApp</span>
              </button>

              <button
                type="button"
                onClick={handleEmailSend}
                className="inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-full bg-neutral-100 hover:bg-neutral-200 text-neutral-800 font-bold text-xs transition-colors"
              >
                <Send className="w-4 h-4" />
                <span>Send Email</span>
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
