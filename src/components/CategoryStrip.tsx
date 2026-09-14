import React from 'react';
import { useStore } from '../context/StoreContext';
import { ArrowRight } from 'lucide-react';

export const CategoryStrip: React.FC = () => {
  const { categories, setSelectedCategorySlug, setCurrentView } = useStore();

  // Pick the top 8 categories as requested in section 6
  const displayCategories = categories.slice(0, 8);

  const handleCategoryClick = (slug: string) => {
    setSelectedCategorySlug(slug);
    setCurrentView('catalog');
    const catalogEl = document.getElementById('catalog-section');
    if (catalogEl) {
      catalogEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="w-full bg-[#ECE5D2] py-12 border-b border-[#DDD4BD]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with technical engineering numbering */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-[#3E4A2E] font-semibold block mb-1">
              01 / CATALOGUE DIRECTORY
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#20241E]">
              Equipment Sectors & Engineering Categories
            </h2>
          </div>
          <button 
            onClick={() => {
              setSelectedCategorySlug(null);
              setCurrentView('catalog');
            }}
            className="text-xs font-mono uppercase tracking-wider text-[#3E4A2E] hover:text-[#20241E] font-bold flex items-center gap-1 group self-start sm:self-auto cursor-pointer"
          >
            <span>View All Sectors</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Responsive Grid / Horizontal Scroll for Mobile */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-5">
          {displayCategories.map((cat) => (
            <div
              key={cat.id}
              onClick={() => handleCategoryClick(cat.slug)}
              className="group relative bg-[#F5F1E5] rounded-lg border border-[#DDD4BD] overflow-hidden hover:border-[#3E4A2E] transition-all duration-300 shadow-sm hover:shadow-md cursor-pointer flex flex-col justify-between"
            >
              {/* Category Image with zoom */}
              <div className="w-full h-32 sm:h-36 overflow-hidden relative bg-[#20241E]/10">
                <img
                  src={cat.featuredImage}
                  alt={cat.title}
                  loading="lazy"
                  className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#20241E]/60 to-transparent" />
                <span className="absolute bottom-2 left-2 text-[10px] font-mono text-[#F5F1E5] bg-[#20241E]/80 px-2 py-0.5 rounded backdrop-blur-xs">
                  {cat.itemCount}+ UNITS
                </span>
              </div>

              {/* Text info */}
              <div className="p-4 flex flex-col justify-between flex-1">
                <div>
                  <h3 className="font-bold text-sm sm:text-base text-[#20241E] group-hover:text-[#3E4A2E] transition-colors mb-1">
                    {cat.title}
                  </h3>
                  <p className="text-xs text-[#20241E]/75 line-clamp-2 leading-relaxed mb-3">
                    {cat.shortDesc}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-2 border-t border-[#DDD4BD]/60 text-xs font-mono text-[#3E4A2E] font-semibold group-hover:text-[#20241E]">
                  <span>Explore Line</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform duration-200" />
                </div>
              </div>

              {/* Bottom active olive accent line */}
              <div className="h-0.5 w-0 group-hover:w-full bg-[#3E4A2E] transition-all duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
