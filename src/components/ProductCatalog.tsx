import React, { useState, useMemo } from 'react';
import { useStore } from '../context/StoreContext';
import { ProductCard } from './ProductCard';
import { Filter, SlidersHorizontal, ArrowUpDown, X, Search, Check, RefreshCw } from 'lucide-react';
import { ProductCategory } from '../types';

export const ProductCatalog: React.FC = () => {
  const { products, categories, brands, selectedCategorySlug, setSelectedCategorySlug } = useStore();

  // Local filter states
  const [searchFilter, setSearchFilter] = useState('');
  const [selectedBrand, setSelectedBrand] = useState<string>('all');
  const [selectedFuel, setSelectedFuel] = useState<string>('all');
  const [selectedApplication, setSelectedApplication] = useState<string>('all');
  const [sortBy, setSortBy] = useState<'featured' | 'newest' | 'name-asc' | 'popular'>('featured');
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  // Derive active category from slug
  const activeCategoryObj = useMemo(() => {
    if (!selectedCategorySlug) return null;
    return categories.find(c => c.slug === selectedCategorySlug || c.id === selectedCategorySlug);
  }, [selectedCategorySlug, categories]);

  // Extract unique fuel types and applications from current products
  const fuelTypes = useMemo(() => {
    const set = new Set<string>();
    products.forEach(p => {
      if (p.specs.fuelType) set.add(p.specs.fuelType);
    });
    return Array.from(set);
  }, [products]);

  const uniqueApplications = [
    'Fine Dining Restaurants',
    'Fast Food Chains',
    'Cafes',
    'Commercial Bakeries',
    'Cloud Kitchens',
    'Hotels'
  ];

  // Filtering & Sorting
  const filteredProducts = useMemo(() => {
    return products.filter((p) => {
      // Category filter
      if (activeCategoryObj && p.category !== activeCategoryObj.id) {
        return false;
      }

      // Brand filter
      if (selectedBrand !== 'all' && !p.brand.toLowerCase().includes(selectedBrand.toLowerCase())) {
        return false;
      }

      // Fuel filter
      if (selectedFuel !== 'all' && p.specs.fuelType !== selectedFuel) {
        return false;
      }

      // Application filter
      if (selectedApplication !== 'all' && !p.applications.some(a => a.toLowerCase().includes(selectedApplication.toLowerCase()))) {
        return false;
      }

      // Search query filter
      if (searchFilter.trim()) {
        const q = searchFilter.toLowerCase();
        const matchName = p.name.toLowerCase().includes(q);
        const matchBrand = p.brand.toLowerCase().includes(q);
        const matchSku = p.sku.toLowerCase().includes(q);
        const matchDesc = p.shortDesc.toLowerCase().includes(q);
        const matchSub = p.subcategory.toLowerCase().includes(q);
        if (!matchName && !matchBrand && !matchSku && !matchDesc && !matchSub) {
          return false;
        }
      }

      return true;
    }).sort((a, b) => {
      if (sortBy === 'featured') {
        return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
      }
      if (sortBy === 'popular') {
        return (b.popular ? 1 : 0) - (a.popular ? 1 : 0);
      }
      if (sortBy === 'name-asc') {
        return a.name.localeCompare(b.name);
      }
      if (sortBy === 'newest') {
        return b.id.localeCompare(a.id);
      }
      return 0;
    });
  }, [products, activeCategoryObj, selectedBrand, selectedFuel, selectedApplication, searchFilter, sortBy]);

  const resetAllFilters = () => {
    setSelectedCategorySlug(null);
    setSelectedBrand('all');
    setSelectedFuel('all');
    setSelectedApplication('all');
    setSearchFilter('');
    setSortBy('featured');
  };

  return (
    <section id="catalog-section" className="w-full bg-[#ECE5D2] py-16 border-b border-[#DDD4BD]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-10">
          <div className="flex items-center gap-2 text-xs font-mono text-[#3E4A2E] uppercase tracking-widest font-semibold mb-2">
            <span>03 / COMMERCIAL PRODUCT CATALOGUE</span>
            <span>•</span>
            <span>SHOWROOM INVENTORY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#20241E] tracking-tight mb-3">
            Built for Professional Kitchens
          </h2>
          <p className="text-base text-[#20241E]/80 leading-relaxed">
            Explore equipment selected for performance, reliability and heavy commercial use. Direct from certified global manufacturers and precision manufactured in our Karachi facility.
          </p>
        </div>

        {/* Filter Bar Controls Header */}
        <div className="bg-[#F5F1E5] rounded-xl border border-[#DDD4BD] p-4 mb-8 flex flex-col md:flex-row items-center justify-between gap-4 shadow-xs">
          {/* Active status & Results count */}
          <div className="flex flex-wrap items-center gap-2.5 w-full md:w-auto">
            <span className="text-xs font-mono text-[#8E959B]">SHOWING:</span>
            <span className="px-2.5 py-1 rounded bg-[#20241E] text-[#ECE5D2] font-mono text-xs font-bold">
              {filteredProducts.length} UNITS
            </span>
            {activeCategoryObj && (
              <span className="px-2.5 py-1 rounded bg-[#3E4A2E] text-[#F5F1E5] font-mono text-xs flex items-center gap-1.5 font-medium">
                <span>Category: {activeCategoryObj.title}</span>
                <button onClick={() => setSelectedCategorySlug(null)} className="hover:text-white cursor-pointer">
                  <X className="w-3 h-3" />
                </button>
              </span>
            )}
            {selectedBrand !== 'all' && (
              <span className="px-2.5 py-1 rounded bg-[#2C3229] text-[#ECE5D2] font-mono text-xs flex items-center gap-1.5">
                <span>Brand: {selectedBrand}</span>
                <button onClick={() => setSelectedBrand('all')} className="hover:text-white cursor-pointer">
                  <X className="w-3 h-3" />
                </button>
              </span>
            )}
            {(activeCategoryObj || selectedBrand !== 'all' || selectedFuel !== 'all' || searchFilter) && (
              <button
                onClick={resetAllFilters}
                className="text-xs font-mono text-[#3E4A2E] hover:underline flex items-center gap-1 ml-2 cursor-pointer"
              >
                <RefreshCw className="w-3 h-3" />
                <span>Reset All</span>
              </button>
            )}
          </div>

          {/* Sort & Mobile Filter Toggle */}
          <div className="flex items-center gap-3 w-full md:w-auto justify-end">
            <button
              onClick={() => setIsMobileFilterOpen(!isMobileFilterOpen)}
              className="lg:hidden px-3.5 py-2 rounded bg-[#ECE5D2] border border-[#DDD4BD] text-xs font-mono font-medium flex items-center gap-2 text-[#20241E] cursor-pointer"
            >
              <Filter className="w-3.5 h-3.5" />
              <span>Filters</span>
            </button>

            <div className="flex items-center gap-2 text-xs font-mono text-[#8E959B]">
              <ArrowUpDown className="w-3.5 h-3.5 text-[#3E4A2E]" />
              <span className="hidden sm:inline">SORT BY:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="bg-[#ECE5D2] border border-[#DDD4BD] text-[#20241E] text-xs rounded px-2.5 py-1.5 focus:outline-none focus:border-[#3E4A2E] font-medium"
              >
                <option value="featured">Featured Picks</option>
                <option value="popular">Most Popular</option>
                <option value="newest">Newest Equipment</option>
                <option value="name-asc">Alphabetical (A-Z)</option>
              </select>
            </div>
          </div>
        </div>

        {/* 2-Column Layout: Left Sidebar Filters + Right Product Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Sidebar Filter (3 cols on desktop) */}
          <aside className={`lg:col-span-3 space-y-6 ${isMobileFilterOpen ? 'block' : 'hidden lg:block'}`}>
            <div className="bg-[#F5F1E5] rounded-xl border border-[#DDD4BD] p-5 shadow-xs space-y-6">
              <div className="flex items-center justify-between pb-3 border-b border-[#DDD4BD]">
                <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#20241E] uppercase tracking-wider">
                  <Filter className="w-4 h-4 text-[#3E4A2E]" />
                  <span>FILTER PRODUCTS</span>
                </div>
                <button
                  onClick={resetAllFilters}
                  className="text-[11px] font-mono text-[#8E959B] hover:text-[#3E4A2E] cursor-pointer"
                >
                  Clear All
                </button>
              </div>

              {/* Quick Search in Filter */}
              <div>
                <label className="text-xs font-mono uppercase text-[#8E959B] font-semibold block mb-2">
                  Keyword / Model Search
                </label>
                <div className="relative">
                  <input
                    type="text"
                    value={searchFilter}
                    onChange={(e) => setSearchFilter(e.target.value)}
                    placeholder="e.g. range, fryer, ice..."
                    className="w-full bg-[#ECE5D2] border border-[#DDD4BD] rounded px-3 py-2 pl-8 text-xs text-[#20241E] focus:outline-none focus:border-[#3E4A2E]"
                  />
                  <Search className="w-3.5 h-3.5 text-[#8E959B] absolute left-2.5 top-2.5" />
                  {searchFilter && (
                    <button onClick={() => setSearchFilter('')} className="absolute right-2.5 top-2.5 text-[#8E959B]">
                      <X className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>
              </div>

              {/* Categories Filter */}
              <div>
                <label className="text-xs font-mono uppercase text-[#8E959B] font-semibold block mb-2">
                  Equipment Category
                </label>
                <div className="space-y-1">
                  <button
                    onClick={() => setSelectedCategorySlug(null)}
                    className={`w-full text-left px-2.5 py-1.5 rounded text-xs transition-colors flex items-center justify-between ${
                      !selectedCategorySlug 
                        ? 'bg-[#3E4A2E] text-[#F5F1E5] font-bold font-mono' 
                        : 'text-[#20241E] hover:bg-[#ECE5D2]'
                    }`}
                  >
                    <span>All Equipment Sectors</span>
                    <span className="text-[10px] font-mono opacity-80">{products.length}</span>
                  </button>

                  {categories.map((cat) => {
                    const isSelected = activeCategoryObj?.id === cat.id;
                    const countInCat = products.filter(p => p.category === cat.id).length;
                    return (
                      <button
                        key={cat.id}
                        onClick={() => setSelectedCategorySlug(cat.slug)}
                        className={`w-full text-left px-2.5 py-1.5 rounded text-xs transition-colors flex items-center justify-between ${
                          isSelected 
                            ? 'bg-[#3E4A2E] text-[#F5F1E5] font-bold font-mono' 
                            : 'text-[#20241E] hover:bg-[#ECE5D2]'
                        }`}
                      >
                        <span className="truncate pr-2">{cat.title}</span>
                        <span className="text-[10px] font-mono opacity-80 shrink-0">{countInCat}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Brand Filter */}
              <div>
                <label className="text-xs font-mono uppercase text-[#8E959B] font-semibold block mb-2">
                  Brand / Manufacturer
                </label>
                <select
                  value={selectedBrand}
                  onChange={(e) => setSelectedBrand(e.target.value)}
                  className="w-full bg-[#ECE5D2] border border-[#DDD4BD] text-[#20241E] text-xs rounded px-3 py-2 focus:outline-none focus:border-[#3E4A2E] font-medium"
                >
                  <option value="all">All Brands</option>
                  <option value="KE">Kitchen Engineering In-House</option>
                  <option value="Rational">RATIONAL (Germany)</option>
                  <option value="True">True Refrigeration (USA)</option>
                  <option value="La Marzocco">La Marzocco (Italy)</option>
                  <option value="Frymaster">Frymaster (USA)</option>
                  <option value="Scotsman">Scotsman (Italy/USA)</option>
                </select>
              </div>

              {/* Fuel Type */}
              <div>
                <label className="text-xs font-mono uppercase text-[#8E959B] font-semibold block mb-2">
                  Fuel / Utility Type
                </label>
                <div className="space-y-1.5 text-xs font-mono">
                  <label className="flex items-center gap-2 cursor-pointer text-[#20241E]">
                    <input
                      type="radio"
                      name="fuelFilter"
                      checked={selectedFuel === 'all'}
                      onChange={() => setSelectedFuel('all')}
                      className="accent-[#3E4A2E]"
                    />
                    <span>All Utility Types</span>
                  </label>
                  {fuelTypes.map((fuel) => (
                    <label key={fuel} className="flex items-center gap-2 cursor-pointer text-[#20241E]">
                      <input
                        type="radio"
                        name="fuelFilter"
                        checked={selectedFuel === fuel}
                        onChange={() => setSelectedFuel(fuel)}
                        className="accent-[#3E4A2E]"
                      />
                      <span>{fuel}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Application / Sector Filter */}
              <div>
                <label className="text-xs font-mono uppercase text-[#8E959B] font-semibold block mb-2">
                  Target Kitchen Application
                </label>
                <select
                  value={selectedApplication}
                  onChange={(e) => setSelectedApplication(e.target.value)}
                  className="w-full bg-[#ECE5D2] border border-[#DDD4BD] text-[#20241E] text-xs rounded px-3 py-2 focus:outline-none focus:border-[#3E4A2E] font-medium"
                >
                  <option value="all">All Kitchen Types</option>
                  {uniqueApplications.map((app) => (
                    <option key={app} value={app}>{app}</option>
                  ))}
                </select>
              </div>

              {/* B2B Consultation Callout Box in Sidebar */}
              <div className="p-4 rounded-lg bg-[#20241E] text-[#ECE5D2] text-xs space-y-2">
                <div className="font-bold text-[#F5F1E5] flex items-center gap-1.5">
                  <span>Custom Sizing Needed?</span>
                </div>
                <p className="text-[11px] text-[#8E959B] leading-relaxed">
                  We fabricate tables, sinks, bain-maries & exhaust hoods to any custom millimeters.
                </p>
                <a 
                  href="#fabrication-section" 
                  className="text-[11px] font-mono text-[#ECE5D2] font-semibold hover:underline block pt-1"
                >
                  View Custom Metal Shop →
                </a>
              </div>
            </div>
          </aside>

          {/* Right Product Grid (9 cols on desktop: 3 per row on laptop, 4 per row on large screen) */}
          <div className="lg:col-span-9">
            {filteredProducts.length === 0 ? (
              <div className="bg-[#F5F1E5] rounded-xl border border-[#DDD4BD] p-12 text-center space-y-4">
                <div className="w-12 h-12 rounded-full bg-[#ECE5D2] flex items-center justify-center mx-auto text-[#8E959B]">
                  <Search className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-[#20241E]">
                  No matching commercial equipment found
                </h3>
                <p className="text-sm text-[#20241E]/75 max-w-md mx-auto">
                  Try adjusting your filter criteria or search terms. Alternatively, request custom fabrication or sourcing from our engineering desk.
                </p>
                <button
                  onClick={resetAllFilters}
                  className="px-5 py-2.5 rounded bg-[#3E4A2E] text-[#F5F1E5] font-mono text-xs uppercase tracking-wider font-semibold cursor-pointer"
                >
                  Reset All Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
