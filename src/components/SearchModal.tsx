import React, { useState, useEffect, useRef, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useStore } from '../context/StoreContext';
import { 
  Search, 
  X, 
  ArrowLeft,
  ArrowRight, 
  Flame, 
  Snowflake, 
  Wrench, 
  Wind, 
  Coffee, 
  MessageSquare,
  FileSpreadsheet,
  CheckCircle2,
  Sparkles,
  ChevronRight,
  SlidersHorizontal,
  RotateCcw
} from 'lucide-react';
import { Product } from '../types';

export const SearchModal: React.FC = () => {
  const { 
    isSearchModalOpen, 
    setIsSearchModalOpen, 
    products, 
    setSelectedProduct, 
    setIsQuoteModalOpen, 
    setQuoteTargetProduct, 
    setCurrentView,
    openWhatsApp,
    searchQuery,
    setSearchQuery
  } = useStore();

  const [query, setQuery] = useState(searchQuery || '');
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const inputRef = useRef<HTMLInputElement>(null);

  // Sync initial query when opened
  useEffect(() => {
    if (isSearchModalOpen) {
      if (searchQuery) {
        setQuery(searchQuery);
      }
      const timer = setTimeout(() => {
        inputRef.current?.focus();
      }, 80);
      document.body.style.overflow = 'hidden';
      return () => clearTimeout(timer);
    } else {
      document.body.style.overflow = 'unset';
      setQuery('');
      setSearchQuery('');
      setActiveCategory('all');
    }
  }, [isSearchModalOpen, searchQuery, setSearchQuery]);

  // Handle ESC and keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Ctrl+K or Cmd+K to toggle search
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsSearchModalOpen(!isSearchModalOpen);
      }
      // ESC to close
      if (e.key === 'Escape' && isSearchModalOpen) {
        setIsSearchModalOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isSearchModalOpen, setIsSearchModalOpen]);

  // Filter products by query and category
  const results = useMemo(() => {
    return products.filter((p) => {
      if (activeCategory !== 'all' && p.category !== activeCategory) {
        return false;
      }
      if (!query.trim()) return true;

      const q = query.toLowerCase().trim();
      return (
        p.name.toLowerCase().includes(q) ||
        p.sku.toLowerCase().includes(q) ||
        p.brand.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.subcategory.toLowerCase().includes(q) ||
        p.shortDesc.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        (p.specs.power && p.specs.power.toLowerCase().includes(q)) ||
        (p.specs.fuelType && p.specs.fuelType.toLowerCase().includes(q)) ||
        (p.specs.material && p.specs.material.toLowerCase().includes(q)) ||
        p.applications.some(app => app.toLowerCase().includes(q))
      );
    });
  }, [products, activeCategory, query]);

  const trendingSearches = [
    { label: 'Rational Combi', query: 'Rational' },
    { label: 'Gas Fryer 50 Lb', query: 'Fryer' },
    { label: 'Walk-In Cold Room', query: 'Cold Room' },
    { label: 'SS304 Exhaust Hood', query: 'Hood' },
    { label: 'La Marzocco Espresso', query: 'Espresso' },
    { label: '4-Burner Heavy Range', query: '4-Burner' },
    { label: 'Spiral Dough Mixer', query: 'Mixer' },
    { label: 'Stainless Work Table', query: 'Table' },
  ];

  const categoryFilters = [
    { id: 'all', label: 'All Equipment' },
    { id: 'cooking', label: 'Cooking' },
    { id: 'refrigeration', label: 'Cold Storage' },
    { id: 'fabrication', label: 'SS 304' },
    { id: 'ventilation', label: 'Ventilation' },
    { id: 'coffee', label: 'Coffee / Bar' },
    { id: 'bakery', label: 'Bakery' },
  ];

  const handleSelectProduct = (product: Product) => {
    setIsSearchModalOpen(false);
    setSelectedProduct(product);
  };

  const handleRequestQuote = (e: React.MouseEvent, product: Product) => {
    e.stopPropagation();
    setIsSearchModalOpen(false);
    setQuoteTargetProduct(product.name);
    setIsQuoteModalOpen(true);
  };

  const handleWhatsAppProduct = (e: React.MouseEvent, product: Product) => {
    e.stopPropagation();
    openWhatsApp(`Hello Kitchen Engineering, I found ${product.name} (SKU: ${product.sku}) on your search desk and would like pricing and delivery details.`);
  };

  const handleViewAllInCatalog = () => {
    setIsSearchModalOpen(false);
    setCurrentView('catalog');
    const catalogEl = document.getElementById('catalog-section');
    if (catalogEl) {
      catalogEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <AnimatePresence>
      {isSearchModalOpen && (
        <div className="fixed inset-0 z-50 flex flex-col justify-start">
          {/* Smooth Dark Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-md"
            onClick={() => setIsSearchModalOpen(false)}
          />

          {/* ANIMATED SEARCH BAR & DRAWER CONTAINER */}
          <motion.div
            initial={{ y: -70, opacity: 0, scale: 0.98 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: -50, opacity: 0, scale: 0.98 }}
            transition={{ type: 'spring', damping: 28, stiffness: 340 }}
            className="relative z-10 w-full sm:max-w-3xl sm:mx-auto sm:mt-6 sm:px-4 flex flex-col h-full sm:h-auto sm:max-h-[88vh]"
          >
            <div className="bg-[#181C17] border-b sm:border border-[#3E4A2E] sm:rounded-2xl shadow-2xl overflow-hidden flex flex-col h-full sm:h-auto">
              
              {/* TOP ANIMATED SEARCH BAR */}
              <div className="p-3 sm:p-4 bg-[#141713] border-b border-[#3E4A2E]">
                <div className="flex items-center gap-2">
                  {/* Mobile Back Arrow Button */}
                  <button
                    onClick={() => setIsSearchModalOpen(false)}
                    className="sm:hidden p-2 rounded-lg bg-[#20241E] hover:bg-[#2C3229] text-[#ECE5D2] border border-[#3E4A2E] transition-colors shrink-0 cursor-pointer"
                    aria-label="Back to page"
                  >
                    <ArrowLeft className="w-5 h-5 text-[#D9642C]" />
                  </button>

                  {/* Input wrapper with pulse search indicator */}
                  <div className="relative flex-1 flex items-center">
                    <div className="absolute left-3.5 flex items-center pointer-events-none">
                      <Search className="w-4.5 h-4.5 text-[#D9642C] animate-pulse" />
                    </div>

                    <input
                      ref={inputRef}
                      type="text"
                      value={query}
                      onChange={(e) => setQuery(e.target.value)}
                      placeholder="Search 40+ models, Rational, Fryer, Chiller..."
                      className="w-full pl-10 sm:pl-11 pr-16 sm:pr-20 py-2.5 sm:py-3.5 bg-[#20241E] text-[#F5F1E5] placeholder-[#8E959B] text-sm sm:text-base rounded-xl border border-[#3E4A2E] focus:border-[#D9642C] focus:ring-2 focus:ring-[#D9642C]/20 outline-none transition-all font-medium"
                    />

                    {/* Clear Button */}
                    {query && (
                      <button
                        onClick={() => setQuery('')}
                        className="absolute right-2.5 sm:right-3 p-1.5 rounded-lg bg-[#2C3229] hover:bg-[#3E4A2E] text-[#8E959B] hover:text-[#F5F1E5] transition-colors cursor-pointer"
                        title="Clear input"
                        aria-label="Clear query"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    )}
                  </div>

                  {/* Desktop ESC / Close button */}
                  <button
                    onClick={() => setIsSearchModalOpen(false)}
                    className="hidden sm:flex items-center px-3 py-2.5 rounded-xl bg-[#20241E] hover:bg-[#2C3229] text-[#ECE5D2] hover:text-white text-xs font-mono font-bold border border-[#3E4A2E] transition-colors cursor-pointer shrink-0"
                  >
                    <span>ESC</span>
                  </button>
                </div>

                {/* Filter category pills */}
                <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar pt-3">
                  {categoryFilters.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => setActiveCategory(cat.id)}
                      className={`px-3 py-1 rounded-lg text-xs font-mono whitespace-nowrap transition-all cursor-pointer ${
                        activeCategory === cat.id
                          ? 'bg-[#D9642C] text-[#20241E] font-bold shadow'
                          : 'bg-[#20241E] text-[#ECE5D2]/80 hover:text-[#ECE5D2] hover:bg-[#2C3229] border border-[#3E4A2E]/60'
                      }`}
                    >
                      {cat.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* LIVE RESULTS & SEARCH FEED */}
              <div className="flex-1 overflow-y-auto p-3 sm:p-4 divide-y divide-[#3E4A2E]/40 space-y-3">
                {/* Status Bar */}
                <div className="flex items-center justify-between text-xs font-mono text-[#8E959B] pb-2">
                  <span>
                    {query.trim() ? (
                      <>Found <strong className="text-[#D9642C]">{results.length}</strong> matching models for &ldquo;<span className="text-[#ECE5D2]">{query}</span>&rdquo;</>
                    ) : (
                      <>Verified Inventory &bull; <strong className="text-[#ECE5D2]">{results.length}</strong> Equipment Models</>
                    )}
                  </span>
                  {query.trim() && (
                    <button 
                      onClick={handleViewAllInCatalog}
                      className="text-[#D9642C] hover:underline flex items-center gap-1 font-semibold cursor-pointer"
                    >
                      <span>Catalog View</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  )}
                </div>

                {/* Empty State Trending Searches */}
                {!query.trim() && activeCategory === 'all' && (
                  <div className="py-2 space-y-3">
                    <div className="flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-[#D9642C] font-semibold">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>Trending Commercial Searches</span>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {trendingSearches.map((item) => (
                        <button
                          key={item.label}
                          onClick={() => setQuery(item.query)}
                          className="px-3 py-1.5 bg-[#20241E] hover:bg-[#2C3229] text-[#ECE5D2] hover:text-white border border-[#3E4A2E] rounded-lg text-xs font-mono transition-all flex items-center gap-1.5 cursor-pointer"
                        >
                          <Search className="w-3 h-3 text-[#D9642C]" />
                          <span>{item.label}</span>
                        </button>
                      ))}
                    </div>

                    <div className="mt-4 p-3 rounded-xl bg-[#20241E]/80 border border-[#3E4A2E] flex items-center justify-between text-xs text-[#8E959B] font-mono">
                      <span>⚡ Search tip: Try typing brand (Rational, Pitco) or specs (Gas, 380V).</span>
                    </div>
                  </div>
                )}

                {/* RESULTS LIST */}
                {results.length > 0 ? (
                  <div className="space-y-2 pt-2">
                    {results.slice(0, 15).map((product) => (
                      <div
                        key={product.id}
                        onClick={() => handleSelectProduct(product)}
                        className="p-2.5 sm:p-3 bg-[#20241E]/70 hover:bg-[#20241E] border border-[#3E4A2E]/60 hover:border-[#D9642C]/70 rounded-xl transition-all flex items-center justify-between gap-3 cursor-pointer group shadow-sm"
                      >
                        {/* Thumbnail & Product Details */}
                        <div className="flex items-center gap-3 min-w-0">
                          <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-lg bg-[#121511] p-1 shrink-0 border border-[#3E4A2E]/60 overflow-hidden flex items-center justify-center">
                            <img
                              src={product.image}
                              alt={product.name}
                              className="w-full h-full object-cover rounded group-hover:scale-105 transition-transform duration-300"
                              referrerPolicy="no-referrer"
                            />
                          </div>

                          <div className="min-w-0">
                            <div className="flex items-center gap-1.5 flex-wrap">
                              <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-[#3E4A2E]/60 text-[#D9642C] font-semibold border border-[#3E4A2E]">
                                {product.brand}
                              </span>
                              <span className="text-[10px] font-mono text-[#8E959B]">
                                SKU: {product.sku}
                              </span>
                              {product.specs.fuelType && (
                                <span className="hidden xs:inline text-[9.5px] font-mono text-[#8E959B] px-1.5 py-0.5 rounded bg-[#151814]">
                                  {product.specs.fuelType}
                                </span>
                              )}
                            </div>

                            <h4 className="text-xs sm:text-sm font-bold text-[#F5F1E5] group-hover:text-[#D9642C] transition-colors truncate mt-0.5">
                              {product.name}
                            </h4>

                            <p className="text-[11px] text-[#8E959B] line-clamp-1 hidden xs:block">
                              {product.shortDesc}
                            </p>
                          </div>
                        </div>

                        {/* Direct Action Buttons */}
                        <div className="flex items-center gap-1.5 shrink-0">
                          <button
                            onClick={(e) => handleWhatsAppProduct(e, product)}
                            className="p-2 sm:px-2.5 sm:py-1.5 rounded-lg bg-emerald-950/40 hover:bg-emerald-900/60 text-emerald-400 border border-emerald-500/30 text-xs font-mono transition-colors flex items-center gap-1 cursor-pointer"
                            title="Inquire on WhatsApp"
                            aria-label="Inquire on WhatsApp"
                          >
                            <MessageSquare className="w-3.5 h-3.5 fill-current" />
                            <span className="hidden md:inline">WhatsApp</span>
                          </button>

                          <button
                            onClick={(e) => handleRequestQuote(e, product)}
                            className="p-2 sm:px-2.5 sm:py-1.5 rounded-lg bg-[#D9642C] hover:bg-[#C55722] text-[#20241E] text-xs font-bold font-mono transition-colors flex items-center gap-1 cursor-pointer"
                            title="Request Quote"
                            aria-label="Request Quote"
                          >
                            <FileSpreadsheet className="w-3.5 h-3.5 text-[#20241E]" />
                            <span className="hidden md:inline">Quote</span>
                          </button>

                          <div className="p-1 text-[#8E959B] group-hover:text-[#F5F1E5] transition-colors">
                            <ChevronRight className="w-4 h-4" />
                          </div>
                        </div>
                      </div>
                    ))}

                    {results.length > 15 && (
                      <div className="pt-2 text-center pb-2">
                        <button
                          onClick={handleViewAllInCatalog}
                          className="px-4 py-2 bg-[#2C3229] hover:bg-[#3E4A2E] text-[#ECE5D2] hover:text-white rounded-lg text-xs font-mono font-semibold transition-colors border border-[#3E4A2E] cursor-pointer"
                        >
                          View all {results.length} results in Catalog &rarr;
                        </button>
                      </div>
                    )}
                  </div>
                ) : (
                  /* No Results Found */
                  <div className="py-12 text-center space-y-3">
                    <div className="w-12 h-12 mx-auto rounded-full bg-[#20241E] flex items-center justify-center border border-[#3E4A2E]">
                      <Search className="w-6 h-6 text-[#8E959B]" />
                    </div>
                    <div className="space-y-1">
                      <h4 className="text-sm font-bold text-[#F5F1E5]">
                        No commercial equipment found
                      </h4>
                      <p className="text-xs text-[#8E959B] max-w-sm mx-auto">
                        We couldn&apos;t find any equipment matching &ldquo;{query}&rdquo;. Our engineering workshop also fabricates custom units to specification.
                      </p>
                    </div>

                    <div className="flex items-center justify-center gap-2 pt-2">
                      <button
                        onClick={() => {
                          setQuery('');
                          setActiveCategory('all');
                        }}
                        className="px-3.5 py-1.5 rounded-lg bg-[#2C3229] hover:bg-[#3E4A2E] text-xs font-mono text-[#ECE5D2] cursor-pointer"
                      >
                        Reset Search
                      </button>
                      <button
                        onClick={() => {
                          setIsSearchModalOpen(false);
                          openWhatsApp(`Hello Kitchen Engineering team, I searched for "${query}" on your catalog. Do you have or can you fabricate this equipment?`);
                        }}
                        className="px-3.5 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-xs font-mono font-semibold text-white flex items-center gap-1.5 cursor-pointer"
                      >
                        <MessageSquare className="w-3.5 h-3.5 fill-current" />
                        <span>Ask Engineering Desk</span>
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* Mobile Drawer Footer */}
              <div className="p-3 bg-[#121511] border-t border-[#3E4A2E] flex items-center justify-between text-[11px] font-mono text-[#8E959B]">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  <span className="truncate">Kitchen Engineering &bull; 40+ Commercial Models</span>
                </div>
                <div className="hidden sm:flex items-center gap-3">
                  <span>Press <kbd className="px-1.5 py-0.5 rounded bg-[#20241E] border border-[#3E4A2E] text-[#ECE5D2]">ESC</kbd> to exit</span>
                </div>
              </div>

            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
