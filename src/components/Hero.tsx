import React from 'react';
import { useStore } from '../context/StoreContext';
import { ArrowRight, Compass, MessageSquare, Layers, Flame, Wind, Snowflake } from 'lucide-react';

export const Hero: React.FC = () => {
  const { 
    setCurrentView, 
    setIsQuoteModalOpen, 
    setSelectedCategorySlug, 
    openWhatsApp 
  } = useStore();

  const capabilities = [
    {
      id: 'fabrication',
      number: '01',
      title: 'Stainless Fabrication',
      tagline: 'Custom AISI 304 Food-Grade',
      specs: '±0.5mm Precision',
      desc: 'Worktables, double sinks, neutral counters & bespoke bain-maries.',
      image: 'https://images.unsplash.com/photo-1590794056226-79ef3a8147e1?q=80&w=800&auto=format&fit=crop',
      actionText: 'View Fabrication',
      icon: Layers,
      onClick: () => setCurrentView('fabrication')
    },
    {
      id: 'cooking',
      number: '02',
      title: 'Commercial Cooking Lines',
      tagline: 'Heavy-Duty & Direct OEM',
      specs: 'European & Imported',
      desc: 'Rational combis, Pitco fryers, industrial Chinese ranges & salamanders.',
      image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=800&auto=format&fit=crop',
      actionText: 'Explore Cooking',
      icon: Flame,
      onClick: () => {
        setSelectedCategorySlug('cooking-equipment');
        setCurrentView('catalog');
      }
    },
    {
      id: 'ventilation',
      number: '03',
      title: 'Hoods & Exhaust HVAC',
      tagline: 'Aerodynamic Kitchen Extraction',
      specs: 'Custom CFM Flow',
      desc: 'AISI 304 baffle filter hoods, centrifugal exhaust blowers & fresh air ducting.',
      image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=800&auto=format&fit=crop',
      actionText: 'View Ventilation',
      icon: Wind,
      onClick: () => setCurrentView('ventilation')
    },
    {
      id: 'refrigeration',
      number: '04',
      title: 'Cold Rooms & Chillers',
      tagline: 'Modular Cold Chain Systems',
      specs: '-20°C to +4°C',
      desc: 'Walk-in chillers, blast freezers, under-counter refrigeration & saladettes.',
      image: 'https://images.unsplash.com/photo-1584905066893-7d5c142ba4e1?q=80&w=800&auto=format&fit=crop',
      actionText: 'Explore Cooling',
      icon: Snowflake,
      onClick: () => {
        setSelectedCategorySlug('commercial-refrigeration');
        setCurrentView('catalog');
      }
    },
    {
      id: 'turnkey',
      number: '05',
      title: '3D CAD & MEP Planning',
      tagline: 'Architectural Turnkey Layouts',
      specs: 'PEC C6 Licensed',
      desc: 'Complete kitchen workflows, gas piping, plumbing & electrical schematics.',
      image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=800&auto=format&fit=crop',
      actionText: 'Request Layout',
      icon: Compass,
      onClick: () => setIsQuoteModalOpen(true)
    }
  ];

  return (
    <section className="relative w-full bg-[#121511] text-[#ECE5D2] overflow-hidden border-b border-[#3E4A2E]">
      {/* Precision Blueprint Canvas & Ambient Lighting */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-[#121511] via-[#161A14] to-[#0E100D]" />
        {/* Engineering blueprint grid watermark */}
        <div className="absolute inset-0 bg-arch-grid-dark opacity-45" />
        {/* Ambient warm technical spotlight accents */}
        <div className="absolute -top-32 -left-32 w-[480px] h-[480px] bg-[#D9642C]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[420px] h-[420px] bg-[#3E4A2E]/25 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-10 w-full">
        {/* Redesigned High-Precision Architectural Command Bar Header */}
        <div className="relative mb-6 sm:mb-8 rounded-2xl bg-[#171B15]/95 border border-[#3E4A2E] p-4 sm:p-5 lg:px-6 shadow-2xl backdrop-blur-md overflow-hidden">
          {/* Architectural amber laser accent line */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#D9642C] to-transparent opacity-90" />

          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            {/* Left Title & System Badge */}
            <div className="flex flex-col gap-1.5 min-w-0">
              {/* Technical System Status Pill */}
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#20271E] border border-[#3E4A2E] text-[10px] sm:text-[11px] font-mono font-semibold text-[#ECE5D2]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D9642C] animate-pulse" />
                  PEC LIC: 76516 // C6 CONTRACTOR
                </span>
                <span className="hidden sm:inline text-xs text-[#3E4A2E]">|</span>
                <span className="text-[10px] sm:text-[11px] font-mono text-[#8E959B]">
                  21+ YEARS · KARACHI · LAHORE · ISLAMABAD
                </span>
              </div>

              {/* Sculpted Master Headline */}
              <h1 className="text-xl xs:text-2xl sm:text-3xl lg:text-[32px] font-black tracking-tight text-[#F5F1E5] uppercase font-sans leading-none flex flex-wrap items-baseline gap-x-2.5 gap-y-1">
                <span>ONE-WINDOW</span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D9642C] to-[#E58348]">
                  KITCHEN ENGINEERING
                </span>
              </h1>

              {/* Micro-Spec Subtitle */}
              <p className="text-[11px] sm:text-xs text-[#ECE5D2]/75 font-mono tracking-tight flex items-center gap-2">
                <span className="text-[#D9642C] font-bold">●</span>
                <span>AISI 304 FABRICATION</span>
                <span className="text-[#3E4A2E]">/</span>
                <span>DIRECT EUROPEAN IMPORTS</span>
                <span className="text-[#3E4A2E]">/</span>
                <span>HVAC EXTRACTION</span>
              </p>
            </div>

            {/* Right Action Suite - Compact Single-Line (No Scrollbar) */}
            <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
              <button
                onClick={() => {
                  setSelectedCategorySlug(null);
                  setCurrentView('catalog');
                }}
                className="px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-lg bg-[#D9642C] hover:bg-[#C55722] text-[#20241E] font-extrabold text-[10px] sm:text-[11px] uppercase tracking-wider transition-all shadow-sm flex items-center gap-1 cursor-pointer active:scale-95 whitespace-nowrap"
              >
                <span>CATALOG</span>
                <ArrowRight className="w-3 h-3" />
              </button>

              <button
                onClick={() => openWhatsApp("Hello Kitchen Engineering team, I want to discuss a turnkey commercial kitchen setup.")}
                className="px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-lg bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-[10px] sm:text-[11px] uppercase tracking-wider transition-all shadow-sm flex items-center gap-1 cursor-pointer active:scale-95 whitespace-nowrap"
              >
                <MessageSquare className="w-3 h-3 fill-current" />
                <span>WHATSAPP</span>
              </button>

              <button
                onClick={() => setIsQuoteModalOpen(true)}
                className="px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-lg bg-[#1C211A] hover:bg-[#242B21] text-[#ECE5D2] hover:text-white font-semibold text-[10px] sm:text-[11px] uppercase tracking-wider transition-all border border-[#3E4A2E] hover:border-[#D9642C]/60 flex items-center gap-1 cursor-pointer active:scale-95 whitespace-nowrap"
              >
                <Compass className="w-3 h-3 text-[#D9642C]" />
                <span>RFQ</span>
              </button>
            </div>
          </div>
        </div>

        {/* INSTANT DISPLAY OF WHAT WE DO: 5 Core Architectural Capability Tiles */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3.5 sm:gap-4">
          {capabilities.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                onClick={item.onClick}
                className="group relative h-64 sm:h-72 xl:h-80 rounded-xl overflow-hidden border border-[#3E4A2E] hover:border-[#D9642C] transition-all duration-300 shadow-xl cursor-pointer flex flex-col justify-between p-3.5 sm:p-4 bg-[#151914]"
              >
                {/* Visual Imagery Background */}
                <div className="absolute inset-0 z-0 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover object-center filter brightness-[0.7] contrast-110 group-hover:scale-110 group-hover:brightness-[0.8] transition-all duration-500"
                  />
                  {/* High contrast gradient overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0E100D] via-[#0E100D]/75 to-[#0E100D]/30" />
                  <div className="absolute inset-0 bg-[#121511]/30 group-hover:bg-transparent transition-colors" />
                </div>

                {/* Top Badge Strip: Division Index & Technical Badge */}
                <div className="relative z-10 flex items-center justify-between">
                  <span className="font-mono text-[10px] font-bold text-[#D9642C] px-2 py-0.5 rounded bg-[#181C17]/90 border border-[#3E4A2E]">
                    {item.number}
                  </span>
                  <span className="font-mono text-[9.5px] uppercase text-[#ECE5D2] px-2 py-0.5 rounded bg-[#1F251E]/90 border border-[#3E4A2E]">
                    {item.specs}
                  </span>
                </div>

                {/* Bottom Content: Immediate Visual Understanding */}
                <div className="relative z-10">
                  <div className="flex items-center gap-1.5 text-[#D9642C] mb-1">
                    <Icon className="w-3.5 h-3.5" />
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#ECE5D2]/80">
                      {item.tagline}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-[#F5F1E5] leading-snug group-hover:text-[#D9642C] transition-colors mb-1.5">
                    {item.title}
                  </h3>

                  <p className="text-[11px] text-[#ECE5D2]/80 leading-relaxed line-clamp-2 mb-2.5">
                    {item.desc}
                  </p>

                  <div className="flex items-center gap-1.5 text-[11px] font-mono font-semibold text-[#D9642C] group-hover:translate-x-1 transition-transform">
                    <span>{item.actionText}</span>
                    <ArrowRight className="w-3 h-3" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
