import React from 'react';
import { useStore } from '../context/StoreContext';
import { Compass, Cpu, Wrench, ShieldCheck, ArrowRight, Layers } from 'lucide-react';

export const EngineeredSolutions: React.FC = () => {
  const { setCurrentView, setIsQuoteModalOpen } = useStore();

  const solutions = [
    {
      num: '01',
      title: 'KITCHEN DESIGN',
      tagline: 'Workflow Ergonomics & 2D/3D MEP Planning',
      desc: 'Complete AutoCAD and 3D architectural kitchen layouts, HACCP hygiene zoning, ergonomic prep workflow planning, and precise gas/electrical/plumbing MEP load schedules.',
      icon: <Compass className="w-6 h-6 text-[#3E4A2E]" />,
      deliverables: ['AutoCAD Layouts & 3D Renderings', 'Gas, Electric & Plumbing MEP Points', 'HACCP Hygiene & Workflow Flowcharts'],
      action: () => setIsQuoteModalOpen(true)
    },
    {
      num: '02',
      title: 'EQUIPMENT SUPPLY',
      tagline: 'Direct Commercial Sourcing & Certified Performance',
      desc: 'End-to-end commercial kitchen equipment procurement: heavy cooking suites, blast chillers, European stone deck ovens, specialty espresso bars, and dishwashing lines.',
      icon: <Cpu className="w-6 h-6 text-[#3E4A2E]" />,
      deliverables: ['Tropicalized +43°C Rated Refrigeration', 'Direct European & Asian Factory Imports', 'Full Spare Parts Inventory in Karachi'],
      action: () => setCurrentView('catalog')
    },
    {
      num: '03',
      title: 'CUSTOM FABRICATION',
      tagline: 'In-House AISI 304 Food-Grade Metal Craftsmanship',
      desc: 'Precision stainless steel fabrication crafted to exact millimeters in our Karachi facility. Custom chef counters, marine-dampened work tables, deep scullery sinks, and display hot wells.',
      icon: <Wrench className="w-6 h-6 text-[#3E4A2E]" />,
      deliverables: ['Heavy-Gauge 1.5mm AISI 304 Stainless', 'Seamless Welded Hygienic Edges', 'Custom Profiles to Fit Odd Column Spaces'],
      action: () => setCurrentView('fabrication')
    },
    {
      num: '04',
      title: 'INSTALLATION & SUPPORT',
      tagline: 'Turnkey Commissioning, Gas Calibration & AMC',
      desc: 'On-site technical rigging, electrical balancing, gas pressure testing, ventilation duct calibration, kitchen team operational training, and annual maintenance contracts (AMC).',
      icon: <ShieldCheck className="w-6 h-6 text-[#3E4A2E]" />,
      deliverables: ['Full Gas Leak & Pressure Testing', 'VFD Air Balancing & CFM Verification', 'Rapid 24/7 Emergency Technical Response'],
      action: () => setCurrentView('services')
    }
  ];

  return (
    <section className="w-full bg-[#20241E] text-[#ECE5D2] py-20 border-b border-[#3E4A2E] relative overflow-hidden">
      {/* Subtle blueprint grid background */}
      <div className="absolute inset-0 bg-arch-grid-dark opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 font-mono text-xs text-[#8E959B] uppercase tracking-widest mb-2">
            <span className="text-[#ECE5D2] font-bold">02 / INTEGRATED METHODOLOGY</span>
            <span>•</span>
            <span>TURNKEY CAPABILITY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#F5F1E5] mb-4">
            More Than Equipment. <br />
            <span className="text-[#ECE5D2]">We Engineer Kitchens.</span>
          </h2>
          <p className="text-base sm:text-lg text-[#ECE5D2]/80 leading-relaxed">
            A commercial kitchen is an industrial production plant operating in a high-heat, high-pressure environment. We bridge the gap between architectural concept, equipment engineering, bespoke fabrication, and technical maintenance.
          </p>
        </div>

        {/* 4 Architectural Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {solutions.map((item) => (
            <div 
              key={item.num}
              className="bg-[#151814]/90 border border-[#3E4A2E] rounded-lg p-6 sm:p-8 flex flex-col justify-between hover:border-[#52633C] hover:bg-[#151814] transition-all duration-300 relative group shadow-md"
            >
              {/* Corner crosshairs */}
              <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-[#3E4A2E] group-hover:border-[#ECE5D2] transition-colors" />

              <div>
                {/* Header row: Number & Icon */}
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#3E4A2E]/50">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-2xl font-bold text-[#8E959B]">
                      {item.num}
                    </span>
                    <span className="h-4 w-[1px] bg-[#3E4A2E]" />
                    <span className="font-mono text-xs uppercase tracking-widest text-[#ECE5D2]">
                      PHASE {item.num}
                    </span>
                  </div>
                  <div className="w-10 h-10 rounded bg-[#2C3229] border border-[#3E4A2E] flex items-center justify-center">
                    {item.icon}
                  </div>
                </div>

                {/* Title and tagline */}
                <h3 className="text-xl sm:text-2xl font-bold text-[#F5F1E5] mb-1">
                  {item.title}
                </h3>
                <div className="text-xs font-mono text-[#8E959B] mb-4">
                  {item.tagline}
                </div>

                <p className="text-sm text-[#ECE5D2]/85 leading-relaxed mb-6">
                  {item.desc}
                </p>

                {/* Deliverables bullet items */}
                <div className="space-y-2 mb-8 bg-[#20241E]/80 p-3.5 rounded border border-[#3E4A2E]/40 font-mono text-xs">
                  <div className="text-[10px] text-[#8E959B] uppercase tracking-wider mb-1">Key Deliverables:</div>
                  {item.deliverables.map((deliv, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-[#ECE5D2]/90">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#3E4A2E]" />
                      <span>{deliv}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action link */}
              <button
                onClick={item.action}
                className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#ECE5D2] hover:text-white font-bold transition-colors group/btn pt-2 border-t border-[#3E4A2E]/40 cursor-pointer"
              >
                <span>Consult with Specialists</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>
          ))}
        </div>

        {/* Architectural Quote / Process Banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-lg bg-[#2C3229]/80 border border-[#3E4A2E] flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded bg-[#3E4A2E] flex items-center justify-center shrink-0">
              <Layers className="w-6 h-6 text-[#F5F1E5]" />
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-bold text-[#F5F1E5]">
                Planning a New Hospitality or Culinary Facility?
              </h4>
              <p className="text-xs sm:text-sm text-[#ECE5D2]/80">
                Our kitchen engineering team evaluates architectural CAD drawings and provides MEP load schedules before you pour concrete or order equipment.
              </p>
            </div>
          </div>

          <button
            onClick={() => setIsQuoteModalOpen(true)}
            className="shrink-0 px-6 py-3 rounded bg-[#3E4A2E] hover:bg-[#52633C] text-[#F5F1E5] font-bold text-xs uppercase tracking-wider transition-all border border-[#3E4A2E] cursor-pointer"
          >
            Submit Drawings for Review
          </button>
        </div>
      </div>
    </section>
  );
};
