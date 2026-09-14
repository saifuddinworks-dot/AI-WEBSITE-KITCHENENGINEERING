import React from 'react';
import { useStore } from '../context/StoreContext';
import { ChevronRight, ArrowUpRight, Flame, Snowflake, CakeSlice, UtensilsCrossed, Coffee, Wrench, Wind, MonitorSmartphone, PackageCheck } from 'lucide-react';
import { ProductCategory } from '../types';

interface MegaMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const CATEGORY_ICONS: Record<ProductCategory, React.ReactNode> = {
  'cooking': <Flame className="w-4 h-4 text-[#ECE5D2]" />,
  'refrigeration': <Snowflake className="w-4 h-4 text-[#ECE5D2]" />,
  'bakery': <CakeSlice className="w-4 h-4 text-[#ECE5D2]" />,
  'preparation': <UtensilsCrossed className="w-4 h-4 text-[#ECE5D2]" />,
  'coffee': <Coffee className="w-4 h-4 text-[#ECE5D2]" />,
  'fabrication': <Wrench className="w-4 h-4 text-[#ECE5D2]" />,
  'ventilation': <Wind className="w-4 h-4 text-[#ECE5D2]" />,
  'pos-tech': <MonitorSmartphone className="w-4 h-4 text-[#ECE5D2]" />,
  'smallware': <PackageCheck className="w-4 h-4 text-[#ECE5D2]" />
};

export const MegaMenu: React.FC<MegaMenuProps> = ({ isOpen, onClose }) => {
  const { categories, setCurrentView, setSelectedCategorySlug } = useStore();

  if (!isOpen) return null;

  const handleSelectCategory = (slug: string) => {
    setSelectedCategorySlug(slug);
    setCurrentView('catalog');
    onClose();
  };

  const handleSubcategoryClick = (catSlug: string, sub: string) => {
    setSelectedCategorySlug(catSlug);
    setCurrentView('catalog');
    onClose();
  };

  return (
    <div 
      className="absolute top-full left-0 w-full bg-[#20241E] border-b border-[#3E4A2E] shadow-2xl z-50 text-[#ECE5D2] transition-all duration-200"
      onMouseLeave={onClose}
    >
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Header strip inside mega-menu */}
        <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#3E4A2E]/50">
          <div className="flex items-center gap-3">
            <span className="text-xs uppercase font-mono tracking-widest text-[#8E959B]">
              CATALOGUE ARCHITECTURE
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#3E4A2E]" />
            <span className="text-xs text-[#ECE5D2]/70">
              Commercial-Grade Hospitality Equipment & Custom Fabrication
            </span>
          </div>

          <button 
            onClick={() => {
              setSelectedCategorySlug(null);
              setCurrentView('catalog');
              onClose();
            }}
            className="flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-[#ECE5D2] hover:text-white transition-colors group cursor-pointer"
          >
            <span>View Complete Catalogue</span>
            <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

        {/* 9 Category Grid in 3 rows × 3 columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat) => (
            <div 
              key={cat.id} 
              className="p-4 rounded-lg bg-[#151814]/60 border border-[#3E4A2E]/30 hover:border-[#3E4A2E] hover:bg-[#151814] transition-all group"
            >
              <div 
                onClick={() => handleSelectCategory(cat.slug)}
                className="flex items-center justify-between cursor-pointer mb-3"
              >
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded bg-[#3E4A2E] flex items-center justify-center shadow-inner">
                    {CATEGORY_ICONS[cat.id]}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold tracking-tight text-[#F5F1E5] group-hover:text-white transition-colors">
                      {cat.title}
                    </h4>
                    <span className="text-[11px] text-[#8E959B] font-mono">
                      {cat.itemCount}+ Units Available
                    </span>
                  </div>
                </div>
                <ChevronRight className="w-4 h-4 text-[#8E959B] group-hover:text-[#F5F1E5] group-hover:translate-x-1 transition-all" />
              </div>

              {/* Subcategories list */}
              <ul className="space-y-1 pl-10 border-l border-[#3E4A2E]/30 my-2">
                {cat.subcategories.slice(0, 5).map((sub) => (
                  <li key={sub}>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleSubcategoryClick(cat.slug, sub);
                      }}
                      className="text-xs text-[#ECE5D2]/70 hover:text-white hover:underline transition-colors block text-left w-full py-0.5"
                    >
                      {sub}
                    </button>
                  </li>
                ))}
                {cat.subcategories.length > 5 && (
                  <li>
                    <button
                      onClick={() => handleSelectCategory(cat.slug)}
                      className="text-[11px] font-mono text-[#8E959B] hover:text-[#ECE5D2] pt-1 block"
                    >
                      +{cat.subcategories.length - 5} more items →
                    </button>
                  </li>
                )}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Banner inside Mega Menu */}
        <div className="mt-8 pt-4 border-t border-[#3E4A2E]/40 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#8E959B]">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>DIRECT IMPORTERS & MANUFACTURERS IN KARACHI • LAHORE • ISLAMABAD</span>
          </div>
          <div className="flex items-center gap-6">
            <span className="text-[#ECE5D2]">ISO 9001 & CE Certified Equipment</span>
            <span>AISI 304 Food-Safe Guarantees</span>
          </div>
        </div>
      </div>
    </div>
  );
};
