import React from 'react';
import { Compass, ShieldCheck, Wrench, Layers, Cpu, Clock, CheckCircle2 } from 'lucide-react';

export const WhyUs: React.FC = () => {
  const trustBlocks = [
    {
      num: '01',
      title: 'ENGINEERING-FIRST APPROACH',
      desc: 'We calculate BTU thermal outputs, electrical breaker amperages, air velocity FPMs, and drainage fall gradients mathematically before recommending any model.',
      icon: <Compass className="w-5 h-5 text-[#3E4A2E]" />
    },
    {
      num: '02',
      title: 'COMMERCIAL-GRADE EQUIPMENT',
      desc: 'Tested for continuous 16-hour kitchen operations in Pakistani summers. Tropicalized compressors, heavy brass burners, and reinforced hinges that do not buckle.',
      icon: <Cpu className="w-5 h-5 text-[#3E4A2E]" />
    },
    {
      num: '03',
      title: 'CUSTOM FABRICATION',
      desc: 'Full in-house sheet metal facility utilizing certified AISI 304 food-grade stainless steel with non-magnetic integrity, marine core dampening, and seamless TIG welding.',
      icon: <Wrench className="w-5 h-5 text-[#3E4A2E]" />
    },
    {
      num: '04',
      title: 'COMPLETE KITCHEN SOLUTIONS',
      desc: 'One accountable partner providing cooking lines, refrigeration, bakery, espresso bars, ventilation ducting, and smallwares with centralized project management.',
      icon: <Layers className="w-5 h-5 text-[#3E4A2E]" />
    },
    {
      num: '05',
      title: 'INSTALLATION & TECHNICAL SUPPORT',
      desc: 'Factory-certified technicians handle site rigging, gas pressure leak detection, electrical phase balancing, and kitchen exhaust air volume testing.',
      icon: <ShieldCheck className="w-5 h-5 text-[#3E4A2E]" />
    },
    {
      num: '06',
      title: 'AFTER-SALES SERVICE',
      desc: 'Rapid breakdown response within 4 hours in Karachi, Lahore, and Islamabad with guaranteed genuine OEM spare parts stocked in our regional depots.',
      icon: <Clock className="w-5 h-5 text-[#3E4A2E]" />
    }
  ];

  return (
    <section className="w-full bg-[#ECE5D2] py-20 border-b border-[#DDD4BD]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 text-xs font-mono text-[#3E4A2E] uppercase tracking-widest font-semibold mb-2">
            <span>09 / VALUE ARCHITECTURE</span>
            <span>•</span>
            <span>TECHNICAL CREDIBILITY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#20241E] tracking-tight mb-4">
            Why Leading Chefs & Developers <br />
            <span className="text-[#3E4A2E]">Rely on Kitchen Engineering.</span>
          </h2>
          <p className="text-base sm:text-lg text-[#20241E]/80 leading-relaxed">
            We avoid marketing hyperbole. Commercial kitchens fail when airflow is unbalanced, compressors freeze, or thin stainless steel drums. Here is how our engineering discipline protects your capital investment.
          </p>
        </div>

        {/* 6 Trust Blocks Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {trustBlocks.map((block) => (
            <div
              key={block.num}
              className="bg-[#F5F1E5] rounded-xl border border-[#DDD4BD] p-6 hover:border-[#3E4A2E] transition-all shadow-xs hover:shadow-md flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-[#DDD4BD]">
                  <span className="font-mono text-xs font-bold text-[#8E959B]">
                    PILLAR {block.num}
                  </span>
                  <div className="w-9 h-9 rounded-md bg-[#ECE5D2] border border-[#DDD4BD] flex items-center justify-center">
                    {block.icon}
                  </div>
                </div>

                <h3 className="font-mono text-sm font-bold tracking-wider text-[#20241E] uppercase mb-2">
                  {block.title}
                </h3>

                <p className="text-xs text-[#20241E]/75 leading-relaxed">
                  {block.desc}
                </p>
              </div>

              <div className="mt-4 pt-2 border-t border-[#DDD4BD]/60 flex items-center gap-1.5 text-[11px] font-mono text-[#3E4A2E] font-medium">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Verified Standard</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
