import React from 'react';
import { 
  Utensils, 
  Coffee, 
  Building2, 
  CakeSlice, 
  Cloud, 
  Zap, 
  ChefHat, 
  GraduationCap, 
  Cross, 
  Briefcase, 
  Factory, 
  ShoppingCart,
  ArrowRight
} from 'lucide-react';
import { useStore } from '../context/StoreContext';

export const IndustriesSection: React.FC = () => {
  const { setIsQuoteModalOpen } = useStore();

  const industries = [
    { title: 'Fine Dining & Bistros', icon: <Utensils className="w-5 h-5" />, desc: 'High-speed sauté lines, combi steamers & open show kitchens.' },
    { title: 'Cafés & Roasteries', icon: <Coffee className="w-5 h-5" />, desc: 'Precision multi-boiler espresso bars & bakery display chillers.' },
    { title: 'Hotels & Banquets', icon: <Building2 className="w-5 h-5" />, desc: 'Large batch combi suites, banquet carts & cold rooms.' },
    { title: 'Commercial Bakeries', icon: <CakeSlice className="w-5 h-5" />, desc: 'Deck stone ovens, heavy spiral mixers & retarder proofers.' },
    { title: 'Cloud & Ghost Kitchens', icon: <Cloud className="w-5 h-5" />, desc: 'Multi-brand modular pods, KDS systems & heavy exhaust.' },
    { title: 'Fast Food & QSR', icon: <Zap className="w-5 h-5" />, desc: 'High-recovery pressure fryers, bun toasters & holding bins.' },
    { title: 'Catering & Events', icon: <ChefHat className="w-5 h-5" />, desc: 'Heavy transportable GN containers, mobile bain-maries & burner batteries.' },
    { title: 'Schools & Universities', icon: <GraduationCap className="w-5 h-5" />, desc: 'High-throughput student cafeteria lines & flight dishwashers.' },
    { title: 'Hospitals & Medical', icon: <Cross className="w-5 h-5" />, desc: 'Sterile HACCP dietary kitchens & insulated meal delivery carts.' },
    { title: 'Corporate Kitchens', icon: <Briefcase className="w-5 h-5" />, desc: 'Staff canteen serveries, salad counters & beverage islands.' },
    { title: 'Food Production Plants', icon: <Factory className="w-5 h-5" />, desc: 'Industrial kettles, vegetable processing lines & blast freezers.' },
    { title: 'Supermarkets & Delis', icon: <ShoppingCart className="w-5 h-5" />, desc: 'Rotisserie ovens, butchery meat saws & refrigerated display cases.' }
  ];

  return (
    <section className="w-full bg-[#20241E] text-[#ECE5D2] py-20 border-b border-[#3E4A2E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-mono text-[#8E959B] uppercase tracking-widest mb-2">
            <span className="text-[#ECE5D2] font-bold">10 / SECTOR CAPABILITIES</span>
            <span>•</span>
            <span>CUSTOMIZED ENGINEERING</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#F5F1E5] tracking-tight mb-4">
            Industries We Serve
          </h2>
          <p className="text-base text-[#ECE5D2]/80 leading-relaxed">
            Every food sector has unique hygienic standards, volume spikes, and space constraints. We engineer purpose-built setups designed for your exact operational tempo.
          </p>
        </div>

        {/* 12 Industries Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {industries.map((ind, idx) => (
            <div
              key={idx}
              className="p-5 rounded-lg bg-[#151814] border border-[#3E4A2E] hover:border-[#52633C] hover:bg-[#1c221a] transition-all group flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded bg-[#2C3229] border border-[#3E4A2E] flex items-center justify-center text-[#ECE5D2] mb-4 group-hover:text-white group-hover:bg-[#3E4A2E] transition-colors">
                  {ind.icon}
                </div>

                <h3 className="font-bold text-sm text-[#F5F1E5] mb-1.5 group-hover:text-white transition-colors">
                  {ind.title}
                </h3>

                <p className="text-xs text-[#8E959B] leading-relaxed">
                  {ind.desc}
                </p>
              </div>

              <div className="mt-4 pt-2 border-t border-[#3E4A2E]/40 text-[10px] font-mono text-[#3E4A2E] font-semibold group-hover:text-[#ECE5D2] flex items-center gap-1">
                <span>View Solutions</span>
                <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
