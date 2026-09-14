import React from 'react';
import { useStore } from '../context/StoreContext';
import { ShieldCheck, ExternalLink, Globe } from 'lucide-react';

export const BrandsWall: React.FC = () => {
  const { brands, setSelectedCategorySlug, setCurrentView } = useStore();

  return (
    <section className="w-full bg-[#ECE5D2] py-16 border-b border-[#DDD4BD]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-mono uppercase tracking-widest text-[#3E4A2E] font-semibold block mb-2">
            11 / GLOBAL SUPPLY NETWORK
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#20241E] tracking-tight mb-2">
            Equipment From Trusted Brands
          </h2>
          <p className="text-xs sm:text-sm text-[#20241E]/75">
            We partner directly with tier-1 international culinary manufacturers and maintain in-house certified stainless-steel fabrication to European standards.
          </p>
        </div>

        {/* Monochrome Architectural Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {brands.map((brand) => (
            <div
              key={brand.id}
              className="p-5 rounded-lg bg-[#F5F1E5] border border-[#DDD4BD] hover:border-[#3E4A2E] transition-all flex flex-col items-center justify-between text-center group"
            >
              <div className="w-full flex items-center justify-center h-14 grayscale group-hover:grayscale-0 opacity-75 group-hover:opacity-100 transition-all">
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="max-h-12 max-w-full object-contain"
                />
              </div>

              <div className="mt-4 pt-3 border-t border-[#DDD4BD] w-full">
                <div className="text-xs font-bold text-[#20241E] truncate">
                  {brand.name}
                </div>
                <div className="text-[10px] font-mono text-[#8E959B] flex items-center justify-center gap-1 mt-0.5">
                  <Globe className="w-2.5 h-2.5" />
                  <span>{brand.country}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
