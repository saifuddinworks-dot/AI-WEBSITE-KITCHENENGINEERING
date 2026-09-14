import React from 'react';
import { useStore } from '../context/StoreContext';
import { Coffee, ArrowRight, ShieldCheck, Flame, Droplets, Sparkles } from 'lucide-react';

export const CoffeeSection: React.FC = () => {
  const { setSelectedCategorySlug, setCurrentView, openWhatsApp } = useStore();

  const coffeeCategories = [
    {
      title: 'Commercial Espresso Machines',
      desc: 'Dual and multi-boiler PID saturated group heads from Florence, Italy and precision manufacturers.',
      image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=800&auto=format&fit=crop'
    },
    {
      title: 'On-Demand Espresso Grinders',
      desc: 'Micrometric stepped and stepless 75mm-83mm flat titanium burrs with clump-crusher technology.',
      image: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?q=80&w=800&auto=format&fit=crop'
    },
    {
      title: 'Acoustic Sound Bar Blenders',
      desc: 'Brushless low-decibel motors engineered for front-counter frappes and smoothie blending.',
      image: 'https://images.unsplash.com/photo-1570831739435-6601aa3fa4fb?q=80&w=800&auto=format&fit=crop'
    },
    {
      title: 'Custom Barista Stations & Sinks',
      desc: 'In-house fabricated brushed stainless bar counters with sunken pitcher rinsers and knock drawers.',
      image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=800&auto=format&fit=crop'
    }
  ];

  return (
    <section className="w-full bg-[#ECE5D2] py-20 border-b border-[#DDD4BD]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-mono text-[#3E4A2E] uppercase tracking-widest font-semibold mb-2">
              <span>06 / SPECIALTY BEVERAGE & CAFÉ ENGINEERING</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#20241E] tracking-tight mb-4">
              Build a Better <br />
              <span className="text-[#3E4A2E]">Coffee Station.</span>
            </h2>
            <p className="text-base text-[#20241E]/80 leading-relaxed">
              Specialty third-wave coffee shops require milligram dosing consistency, temperature stability, and reverse-osmosis remineralized water loops. We configure front-of-house espresso bars engineered for rapid barista flow.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => {
                setSelectedCategorySlug('commercial-coffee-equipment');
                setCurrentView('catalog');
              }}
              className="px-6 py-3.5 rounded bg-[#3E4A2E] hover:bg-[#52633C] text-[#F5F1E5] font-bold text-xs uppercase tracking-wider transition-all shadow-md flex items-center gap-2 cursor-pointer"
            >
              <span>EXPLORE COFFEE EQUIPMENT</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* 4 Architectural Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {coffeeCategories.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#F5F1E5] rounded-xl border border-[#DDD4BD] overflow-hidden group hover:border-[#3E4A2E] transition-all shadow-sm hover:shadow-md flex flex-col justify-between"
            >
              <div className="h-48 overflow-hidden relative bg-[#20241E]/10">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-95"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#20241E]/50 via-transparent to-transparent" />
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-bold text-base text-[#20241E] group-hover:text-[#3E4A2E] transition-colors mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#20241E]/75 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-[#DDD4BD] flex items-center justify-between text-xs font-mono text-[#3E4A2E] font-semibold">
                  <span>View Specifications</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Café Consultation Callout */}
        <div className="p-6 sm:p-8 rounded-xl bg-[#20241E] text-[#ECE5D2] flex flex-col md:flex-row items-center justify-between gap-6 border border-[#3E4A2E]">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded bg-[#3E4A2E] flex items-center justify-center shrink-0">
              <Coffee className="w-6 h-6 text-[#F5F1E5]" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-[#F5F1E5]">
                Opening a Café or Roastery in Pakistan?
              </h4>
              <p className="text-xs sm:text-sm text-[#8E959B]">
                We provide complete espresso machine procurement, water filtration systems, custom stainless drop-in counters, and barista training.
              </p>
            </div>
          </div>

          <button
            onClick={() => openWhatsApp("Hello Kitchen Engineering, I am planning a new café / coffee bar and need assistance with espresso equipment and bar counter fabrication.")}
            className="shrink-0 px-6 py-3 rounded bg-[#3E4A2E] hover:bg-[#52633C] text-[#F5F1E5] font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer"
          >
            CONSULT CAFÉ ENGINEER
          </button>
        </div>
      </div>
    </section>
  );
};
