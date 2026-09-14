import React from 'react';
import { Compass, Cpu, Wrench, ShieldCheck, Headphones, Layers, ArrowRight } from 'lucide-react';
import { useStore } from '../context/StoreContext';

export const ProcessTimeline: React.FC = () => {
  const { setIsQuoteModalOpen } = useStore();

  const steps = [
    {
      num: '01',
      title: 'CONSULT',
      detail: 'Menu concept analysis, anticipated seat turns, culinary volume calculations, and budget roadmap.'
    },
    {
      num: '02',
      title: 'DESIGN',
      detail: 'AutoCAD 2D spatial layouts, 3D visualizations, HACCP hygiene zoning, and MEP utility connection points.'
    },
    {
      num: '03',
      title: 'SELECT',
      detail: 'Curating heavy-duty imported and local equipment matched to your fuel type, electrical phase, and load.'
    },
    {
      num: '04',
      title: 'FABRICATE',
      detail: 'Laser cutting, CNC folding, and TIG welding of custom AISI 304 food-grade stainless counters and hoods.'
    },
    {
      num: '05',
      title: 'INSTALL',
      detail: 'Mechanical rigging, gas line pressure safety tests, electrical balancing, and ventilation CFM verification.'
    },
    {
      num: '06',
      title: 'SUPPORT',
      detail: 'Chef training, warranty coverage, preventative maintenance schedules, and 24/7 technical breakdown support.'
    }
  ];

  return (
    <section className="w-full bg-[#20241E] text-[#ECE5D2] py-20 border-b border-[#3E4A2E] relative overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 bg-arch-grid-dark opacity-25 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 text-xs font-mono text-[#8E959B] uppercase tracking-widest mb-2">
            <span className="text-[#ECE5D2] font-bold">08 / TURNKEY LIFECYCLE</span>
            <span>•</span>
            <span>SIX-PHASE EXECUTION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#F5F1E5] tracking-tight mb-4">
            One Team. One Kitchen. <br />
            <span className="text-[#ECE5D2]">From Concept to Completion.</span>
          </h2>
          <p className="text-base sm:text-lg text-[#ECE5D2]/80 leading-relaxed">
            Eliminate finger-pointing between equipment dealers, local welders, HVAC technicians, and plumbers. Kitchen Engineering acts as your single technical contractor from the empty shell to opening day.
          </p>
        </div>

        {/* Horizontal Timeline Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4 relative">
          {/* Subtle connecting line for desktop */}
          <div className="hidden lg:block absolute top-7 left-12 right-12 h-[1px] bg-[#3E4A2E] z-0" />

          {steps.map((step) => (
            <div
              key={step.num}
              className="bg-[#151814] rounded-lg border border-[#3E4A2E] p-5 flex flex-col justify-between hover:border-[#52633C] transition-all relative z-10 group"
            >
              <div>
                {/* Step number badge */}
                <div className="w-10 h-10 rounded-md bg-[#2C3229] border border-[#3E4A2E] flex items-center justify-center font-mono font-bold text-[#F5F1E5] text-sm mb-4 group-hover:bg-[#3E4A2E] group-hover:text-white transition-colors">
                  {step.num}
                </div>

                <h3 className="font-mono text-sm font-bold tracking-wider text-[#F5F1E5] uppercase mb-2">
                  {step.title}
                </h3>

                <p className="text-xs text-[#ECE5D2]/75 leading-relaxed">
                  {step.detail}
                </p>
              </div>

              <div className="mt-4 pt-2 border-t border-[#3E4A2E]/40 text-[10px] font-mono text-[#8E959B]">
                PHASE {step.num} / 06
              </div>
            </div>
          ))}
        </div>

        {/* Action button */}
        <div className="mt-12 text-center">
          <button
            onClick={() => setIsQuoteModalOpen(true)}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-md bg-[#3E4A2E] hover:bg-[#52633C] text-[#F5F1E5] font-bold text-xs uppercase tracking-wider transition-all shadow-md cursor-pointer"
          >
            <span>START YOUR TURNKEY PROJECT</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
