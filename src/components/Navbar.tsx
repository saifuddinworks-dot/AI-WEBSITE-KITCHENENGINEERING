import React, { useState, useEffect } from 'react';
import { useStore } from '../context/StoreContext';
import { Logo } from './Logo';
import { MegaMenu } from './MegaMenu';
import { 
  Search, 
  MessageSquare, 
  ChevronDown, 
  ChevronRight,
  Menu, 
  X, 
  Sliders, 
  FileSpreadsheet, 
  PhoneCall, 
  ArrowRight,
  ShieldCheck,
  Flame,
  Snowflake,
  Wrench,
  Wind,
  Croissant,
  Coffee,
  Compass,
  Building2,
  MapPin,
  Clock,
  Sparkles
} from 'lucide-react';

export const Navbar: React.FC = () => {
  const { 
    currentView, 
    setCurrentView, 
    categories,
    selectedCategorySlug,
    setSelectedCategorySlug,
    setIsSearchModalOpen, 
    setIsQuoteModalOpen, 
    setIsAdminModalOpen,
    openWhatsApp,
    companyInfo 
  } = useStore();

  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [isMobileDrawerOpen, setIsMobileDrawerOpen] = useState(false);
  const [isCategoriesExpanded, setIsCategoriesExpanded] = useState(true);

  // Lock body scroll when mobile drawer is open
  useEffect(() => {
    if (isMobileDrawerOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileDrawerOpen]);

  // Close drawer on ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMobileDrawerOpen) {
        setIsMobileDrawerOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isMobileDrawerOpen]);

  const navLinks = [
    { name: 'Home', view: 'home' },
    { name: 'Products', view: 'catalog', hasMegaMenu: true },
    { name: 'POS Packages', view: 'pos' },
    { name: 'Fabrication', view: 'fabrication' },
    { name: 'Ventilation', view: 'ventilation' },
    { name: 'Projects', view: 'projects' },
    { name: 'Services & AMC', view: 'services' },
  ];

  const handleNavClick = (view: string) => {
    if (view === 'catalog') {
      setSelectedCategorySlug(null);
    }
    setCurrentView(view);
    setIsMobileDrawerOpen(false);
    setIsMegaMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCategorySelect = (slug: string) => {
    setSelectedCategorySlug(slug);
    setCurrentView('catalog');
    setIsMobileDrawerOpen(false);
    setIsMegaMenuOpen(false);
    const catalogEl = document.getElementById('catalog-section');
    if (catalogEl) {
      catalogEl.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const getCategoryIcon = (id: string) => {
    switch (id) {
      case 'cooking':
        return <Flame className="w-3.5 h-3.5 text-amber-500" />;
      case 'refrigeration':
        return <Snowflake className="w-3.5 h-3.5 text-sky-400" />;
      case 'fabrication':
        return <Wrench className="w-3.5 h-3.5 text-zinc-400" />;
      case 'ventilation':
        return <Wind className="w-3.5 h-3.5 text-emerald-400" />;
      case 'bakery':
        return <Croissant className="w-3.5 h-3.5 text-orange-400" />;
      case 'coffee':
        return <Coffee className="w-3.5 h-3.5 text-amber-600" />;
      default:
        return <Sparkles className="w-3.5 h-3.5 text-[#D9642C]" />;
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-[#20241E] text-[#ECE5D2] border-b border-[#3E4A2E] shadow-lg">
      {/* Top micro engineering status bar for desktop */}
      <div className="hidden lg:block bg-[#151814] border-b border-[#3E4A2E]/40 py-1.5 px-6 text-[11px] font-mono">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3 text-[#8E959B]">
            <span className="flex items-center gap-1.5 text-[#ECE5D2] font-semibold whitespace-nowrap">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D9642C] animate-ping shrink-0" />
              <span className="whitespace-nowrap">D.A.T CONTRACTOR BUILDERS (PEC C6 #76516)</span>
            </span>
            <span className="text-[#3E4A2E]">|</span>
            <span className="text-[#8E959B] whitespace-nowrap">📍 3rd Zamzama Commercial Lane, DHA Phase 5, Karachi</span>
          </div>

          <div className="flex items-center gap-6 whitespace-nowrap">
            <a 
              href="tel:+923153000476"
              className="text-[#8E959B] hover:text-[#ECE5D2] transition-colors whitespace-nowrap"
            >
              Direct Line: <strong className="text-[#ECE5D2] font-bold">+92 315 3000476</strong>
            </a>
            <button 
              onClick={() => openWhatsApp()}
              className="text-emerald-400 hover:text-emerald-300 font-bold transition-colors cursor-pointer flex items-center gap-1 whitespace-nowrap"
            >
              <MessageSquare className="w-3 h-3 fill-current shrink-0" />
              <span className="whitespace-nowrap">WhatsApp Hotline</span>
            </button>
            <button 
              onClick={() => setCurrentView('admin')}
              className="flex items-center gap-1 text-[#8E959B] hover:text-[#F5F1E5] transition-colors cursor-pointer whitespace-nowrap"
              title="Open Admin CMS to edit products, brands, and view quotes"
            >
              <Sliders className="w-3 h-3 text-[#3E4A2E] shrink-0" />
              <span className="whitespace-nowrap">Admin CMS</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 h-16 sm:h-20 flex items-center justify-between relative">
        {/* Left: Responsive Logo isolated with generous margin and subtle divider */}
        <div 
          onClick={() => handleNavClick('home')} 
          className="shrink-0 mr-6 sm:mr-8 lg:mr-10 xl:mr-12 pr-4 sm:pr-6 border-r border-[#3E4A2E]/50 cursor-pointer"
        >
          <Logo variant="light" size="md" />
        </div>

        {/* Center: Desktop Menu with clear separation */}
        <nav className="hidden xl:flex items-center gap-1 ml-2">
          {navLinks.map((link) => {
            const isActive = currentView === link.view;
            return (
              <div 
                key={link.name} 
                className="relative"
                onMouseEnter={() => link.hasMegaMenu && setIsMegaMenuOpen(true)}
              >
                <button
                  onClick={() => handleNavClick(link.view)}
                  className={`px-3.5 py-2 rounded-md text-sm font-medium tracking-wide flex items-center gap-1 transition-all cursor-pointer whitespace-nowrap ${
                    isActive 
                      ? 'text-[#F5F1E5] bg-[#3E4A2E] shadow-sm font-semibold' 
                      : 'text-[#ECE5D2]/85 hover:text-white hover:bg-[#2C3229]'
                  }`}
                >
                  <span className="whitespace-nowrap">{link.name}</span>
                  {link.hasMegaMenu && (
                    <ChevronDown className={`w-3.5 h-3.5 shrink-0 transition-transform duration-200 ${isMegaMenuOpen ? 'rotate-180 text-white' : 'text-[#8E959B]'}`} />
                  )}
                </button>
              </div>
            );
          })}
        </nav>

        {/* Right: Quick Search, WhatsApp, Request Quote CTAs & Burger Menu */}
        <div className="flex items-center gap-1.5 xs:gap-2 sm:gap-3 shrink-0">
          {/* Global Search Button */}
          <button
            onClick={() => setIsSearchModalOpen(true)}
            className="p-2 sm:p-2.5 rounded-lg bg-[#2C3229] hover:bg-[#3E4A2E] text-[#ECE5D2] hover:text-white transition-all border border-[#3E4A2E]/60 flex items-center gap-1.5 text-xs font-mono cursor-pointer whitespace-nowrap"
            aria-label="Search equipment"
            title="Search products by model, brand, or specs (Ctrl+K)"
          >
            <Search className="w-4 h-4 text-[#D9642C] shrink-0" />
            <span className="hidden md:inline text-[11px] text-[#8E959B] whitespace-nowrap">SEARCH</span>
          </button>

          {/* Quick WhatsApp Hotline CTA */}
          <button
            onClick={() => openWhatsApp()}
            className="p-2 sm:px-3 sm:py-2 rounded-lg bg-emerald-950/40 hover:bg-emerald-900/60 text-emerald-400 hover:text-emerald-300 transition-all border border-emerald-500/40 text-xs font-medium cursor-pointer flex items-center gap-1.5 whitespace-nowrap"
            title="Chat with Kitchen Engineering on WhatsApp"
            aria-label="WhatsApp Hotline"
          >
            <MessageSquare className="w-4 h-4 fill-current shrink-0" />
            <span className="hidden sm:inline font-mono font-semibold whitespace-nowrap">WhatsApp</span>
          </button>

          {/* Primary CTA: Request Quote (Visible on sm+ screens) */}
          <button
            onClick={() => setIsQuoteModalOpen(true)}
            className="hidden sm:flex px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-lg bg-[#D9642C] hover:bg-[#C55722] text-[#20241E] font-bold text-xs uppercase tracking-wider transition-all shadow-md hover:shadow-lg border border-[#D9642C] items-center gap-1.5 cursor-pointer whitespace-nowrap"
          >
            <FileSpreadsheet className="w-3.5 h-3.5 text-[#20241E] shrink-0" />
            <span className="whitespace-nowrap">REQUEST QUOTE</span>
          </button>

          {/* Highly Professional Mobile & Tablet Burger Menu Toggle Button */}
          <button
            onClick={() => setIsMobileDrawerOpen(!isMobileDrawerOpen)}
            className={`xl:hidden p-2 sm:p-2.5 rounded-lg transition-all flex items-center gap-1.5 cursor-pointer border ${
              isMobileDrawerOpen 
                ? 'bg-[#3E4A2E] text-[#F5F1E5] border-[#D9642C]' 
                : 'bg-[#2C3229] hover:bg-[#3E4A2E] text-[#ECE5D2] border-[#3E4A2E]/80'
            }`}
            aria-label={isMobileDrawerOpen ? "Close navigation drawer" : "Open navigation drawer"}
            aria-expanded={isMobileDrawerOpen}
          >
            {isMobileDrawerOpen ? (
              <X className="w-5 h-5 text-[#D9642C]" />
            ) : (
              <Menu className="w-5 h-5 text-[#ECE5D2]" />
            )}
            <span className="hidden xs:inline text-[11px] font-mono tracking-wider text-[#ECE5D2] font-semibold uppercase">
              {isMobileDrawerOpen ? 'Close' : 'Menu'}
            </span>
          </button>
        </div>
      </div>

      {/* MegaMenu for Products (Desktop Hover) */}
      <MegaMenu 
        isOpen={isMegaMenuOpen} 
        onClose={() => setIsMegaMenuOpen(false)} 
      />

      {/* HIGHLY PROFESSIONAL MOBILE SLIDE-OVER DRAWER */}
      {isMobileDrawerOpen && (
        <div className="xl:hidden fixed inset-0 z-50">
          {/* Smooth Dark Backdrop */}
          <div 
            className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity duration-300"
            onClick={() => setIsMobileDrawerOpen(false)}
            aria-hidden="true"
          />

          {/* Drawer Container Panel */}
          <div className="fixed inset-y-0 right-0 w-full max-w-[340px] xs:max-w-[380px] sm:max-w-md bg-[#181C17] text-[#ECE5D2] shadow-2xl flex flex-col border-l border-[#3E4A2E] z-50 animate-in slide-in-from-right duration-300">
            {/* Drawer Top Header */}
            <div className="p-4 sm:p-5 border-b border-[#3E4A2E] flex items-center justify-between bg-[#151814]">
              <div className="flex items-center gap-2.5">
                <Logo variant="light" size="sm" showTagline={false} />
              </div>

              <button
                onClick={() => setIsMobileDrawerOpen(false)}
                className="p-2 rounded-lg bg-[#2C3229] hover:bg-[#3E4A2E] text-[#8E959B] hover:text-[#F5F1E5] border border-[#3E4A2E]/60 transition-colors cursor-pointer"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Quick Action Hub: Instant Quote & WhatsApp Buttons */}
            <div className="p-4 bg-[#20241E]/90 border-b border-[#3E4A2E]/60 space-y-2.5">
              <button
                onClick={() => {
                  setIsMobileDrawerOpen(false);
                  setIsQuoteModalOpen(true);
                }}
                className="w-full py-3 px-4 rounded-lg bg-[#D9642C] hover:bg-[#C55722] text-[#20241E] font-extrabold text-xs uppercase tracking-wider transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
              >
                <FileSpreadsheet className="w-4 h-4 text-[#20241E]" />
                <span>REQUEST INSTANT B2B QUOTE</span>
              </button>

              <button
                onClick={() => {
                  setIsMobileDrawerOpen(false);
                  openWhatsApp("Hello Kitchen Engineering team, I would like to consult on commercial kitchen equipment.");
                }}
                className="w-full py-2.5 px-4 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider transition-all shadow flex items-center justify-center gap-2 cursor-pointer"
              >
                <MessageSquare className="w-4 h-4 fill-current" />
                <span>WHATSAPP PROJECT DESK</span>
              </button>

              {/* Quick Search trigger */}
              <button
                onClick={() => {
                  setIsMobileDrawerOpen(false);
                  setIsSearchModalOpen(true);
                }}
                className="w-full mt-2 flex items-center justify-between p-2.5 bg-[#131612] rounded-lg border border-[#3E4A2E] text-left hover:border-[#D9642C]/70 transition-colors cursor-pointer"
              >
                <div className="flex items-center gap-2.5 text-xs text-[#8E959B] font-mono">
                  <Search className="w-3.5 h-3.5 text-[#D9642C]" />
                  <span>Search 40+ commercial models...</span>
                </div>
                <span className="text-[10px] font-mono bg-[#2C3229] text-[#ECE5D2] px-1.5 py-0.5 rounded border border-[#3E4A2E]/60">SEARCH</span>
              </button>
            </div>

            {/* Scrollable Navigation Body */}
            <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4 divide-y divide-[#3E4A2E]/40">
              {/* Primary Links */}
              <div className="space-y-1">
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#8E959B] px-3 font-semibold block mb-1">
                  MAIN NAVIGATION
                </span>

                {/* Home */}
                <button
                  onClick={() => handleNavClick('home')}
                  className={`w-full text-left px-3.5 py-2.5 rounded-lg text-sm font-semibold flex items-center justify-between transition-colors ${
                    currentView === 'home'
                      ? 'bg-[#3E4A2E] text-[#F5F1E5]'
                      : 'hover:bg-[#2C3229] text-[#ECE5D2]'
                  }`}
                >
                  <span className="flex items-center gap-2.5">
                    <Building2 className="w-4 h-4 text-[#D9642C]" />
                    <span>Home &amp; Overview</span>
                  </span>
                  <ChevronRight className="w-4 h-4 opacity-50" />
                </button>

                {/* Products & Equipment Catalog with Interactive Sub-Categories */}
                <div className="rounded-lg border border-[#3E4A2E]/60 bg-[#151814] overflow-hidden my-1">
                  <div className="flex items-center justify-between px-3.5 py-2.5 bg-[#20241E]">
                    <button
                      onClick={() => handleNavClick('catalog')}
                      className="flex-1 text-left text-sm font-bold text-[#F5F1E5] flex items-center gap-2.5"
                    >
                      <Sparkles className="w-4 h-4 text-[#D9642C]" />
                      <span>Equipment Catalog</span>
                    </button>
                    <button
                      onClick={() => setIsCategoriesExpanded(!isCategoriesExpanded)}
                      className="p-1 text-[#8E959B] hover:text-[#F5F1E5] rounded hover:bg-[#2C3229] transition-colors"
                      aria-label="Toggle categories list"
                    >
                      <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isCategoriesExpanded ? 'rotate-180' : ''}`} />
                    </button>
                  </div>

                  {/* Expandable Category Quick-Links */}
                  {isCategoriesExpanded && (
                    <div className="p-2 space-y-1 bg-[#131612] border-t border-[#3E4A2E]/50">
                      <button
                        onClick={() => handleNavClick('catalog')}
                        className={`w-full text-left px-3 py-2 rounded text-xs font-mono flex items-center justify-between transition-colors ${
                          currentView === 'catalog' && !selectedCategorySlug
                            ? 'bg-[#3E4A2E] text-[#F5F1E5] font-bold'
                            : 'text-[#ECE5D2]/80 hover:bg-[#20241E]'
                        }`}
                      >
                        <span>All Equipment Sectors</span>
                        <span className="text-[10px] opacity-70">VIEW ALL</span>
                      </button>

                      {categories.map((cat) => {
                        const isSelected = currentView === 'catalog' && selectedCategorySlug === cat.slug;
                        return (
                          <button
                            key={cat.id}
                            onClick={() => handleCategorySelect(cat.slug)}
                            className={`w-full text-left px-3 py-2 rounded text-xs flex items-center justify-between transition-colors ${
                              isSelected
                                ? 'bg-[#3E4A2E] text-[#F5F1E5] font-bold'
                                : 'text-[#ECE5D2]/85 hover:bg-[#20241E]'
                            }`}
                          >
                            <span className="flex items-center gap-2">
                              {getCategoryIcon(cat.id)}
                              <span>{cat.title}</span>
                            </span>
                            <span className="text-[10px] font-mono text-[#8E959B]">
                              {cat.itemCount}+ Units
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  )}
                </div>

                {/* POS Packages */}
                <button
                  onClick={() => handleNavClick('pos')}
                  className={`w-full text-left px-3.5 py-2.5 rounded-lg text-sm font-semibold flex items-center justify-between transition-colors ${
                    currentView === 'pos'
                      ? 'bg-[#3E4A2E] text-[#F5F1E5]'
                      : 'hover:bg-[#2C3229] text-[#ECE5D2]'
                  }`}
                >
                  <span className="flex items-center gap-2.5">
                    <Compass className="w-4 h-4 text-emerald-400" />
                    <span>POS Cloud Packages</span>
                  </span>
                  <ChevronRight className="w-4 h-4 opacity-50" />
                </button>

                {/* Custom Fabrication */}
                <button
                  onClick={() => handleNavClick('fabrication')}
                  className={`w-full text-left px-3.5 py-2.5 rounded-lg text-sm font-semibold flex items-center justify-between transition-colors ${
                    currentView === 'fabrication'
                      ? 'bg-[#3E4A2E] text-[#F5F1E5]'
                      : 'hover:bg-[#2C3229] text-[#ECE5D2]'
                  }`}
                >
                  <span className="flex items-center gap-2.5">
                    <Wrench className="w-4 h-4 text-zinc-300" />
                    <span>Stainless Steel 304 Fabrication</span>
                  </span>
                  <ChevronRight className="w-4 h-4 opacity-50" />
                </button>

                {/* Commercial Ventilation */}
                <button
                  onClick={() => handleNavClick('ventilation')}
                  className={`w-full text-left px-3.5 py-2.5 rounded-lg text-sm font-semibold flex items-center justify-between transition-colors ${
                    currentView === 'ventilation'
                      ? 'bg-[#3E4A2E] text-[#F5F1E5]'
                      : 'hover:bg-[#2C3229] text-[#ECE5D2]'
                  }`}
                >
                  <span className="flex items-center gap-2.5">
                    <Wind className="w-4 h-4 text-sky-400" />
                    <span>Ventilation &amp; Exhaust Hoods</span>
                  </span>
                  <ChevronRight className="w-4 h-4 opacity-50" />
                </button>

                {/* Turnkey Projects */}
                <button
                  onClick={() => handleNavClick('projects')}
                  className={`w-full text-left px-3.5 py-2.5 rounded-lg text-sm font-semibold flex items-center justify-between transition-colors ${
                    currentView === 'projects'
                      ? 'bg-[#3E4A2E] text-[#F5F1E5]'
                      : 'hover:bg-[#2C3229] text-[#ECE5D2]'
                  }`}
                >
                  <span className="flex items-center gap-2.5">
                    <Building2 className="w-4 h-4 text-amber-500" />
                    <span>Turnkey Projects &amp; Clients</span>
                  </span>
                  <ChevronRight className="w-4 h-4 opacity-50" />
                </button>

                {/* Services & AMC */}
                <button
                  onClick={() => handleNavClick('services')}
                  className={`w-full text-left px-3.5 py-2.5 rounded-lg text-sm font-semibold flex items-center justify-between transition-colors ${
                    currentView === 'services'
                      ? 'bg-[#3E4A2E] text-[#F5F1E5]'
                      : 'hover:bg-[#2C3229] text-[#ECE5D2]'
                  }`}
                >
                  <span className="flex items-center gap-2.5">
                    <ShieldCheck className="w-4 h-4 text-[#D9642C]" />
                    <span>Engineering Services &amp; 24/7 AMC</span>
                  </span>
                  <ChevronRight className="w-4 h-4 opacity-50" />
                </button>
              </div>

              {/* Admin CMS link */}
              <div className="pt-3">
                <button
                  onClick={() => {
                    setIsMobileDrawerOpen(false);
                    setCurrentView('admin');
                  }}
                  className="w-full text-left px-3.5 py-2.5 rounded-lg text-xs font-mono text-[#8E959B] hover:text-[#F5F1E5] hover:bg-[#2C3229] flex items-center justify-between transition-colors"
                >
                  <span className="flex items-center gap-2">
                    <Sliders className="w-3.5 h-3.5 text-[#3E4A2E]" />
                    <span>Admin CMS (Products &amp; Quotes)</span>
                  </span>
                  <ArrowRight className="w-3.5 h-3.5 opacity-50" />
                </button>
              </div>
            </div>

            {/* Mobile Drawer Footer: Direct Call, Address & Timings */}
            <div className="p-4 bg-[#121511] border-t border-[#3E4A2E] space-y-2.5 text-xs font-mono text-[#8E959B]">
              <div className="flex items-center justify-between">
                <span className="text-[#ECE5D2] font-bold">24/7 Engineering Desk:</span>
                <a 
                  href={`tel:${companyInfo.phone}`} 
                  className="text-[#D9642C] font-bold hover:underline flex items-center gap-1"
                >
                  <PhoneCall className="w-3.5 h-3.5" />
                  <span>{companyInfo.phone}</span>
                </a>
              </div>

              <div className="flex items-start gap-1.5 text-[11px] text-[#8E959B] pt-1 border-t border-[#3E4A2E]/40">
                <MapPin className="w-3.5 h-3.5 text-[#D9642C] shrink-0 mt-0.5" />
                <span>3rd Zamzama Commercial Lane, DHA Phase 5, Karachi</span>
              </div>

              <div className="flex items-center gap-1.5 text-[10.5px] text-[#8E959B]">
                <Clock className="w-3 h-3 text-[#3E4A2E] shrink-0" />
                <span>Mon–Sat: 9:00 AM – 7:00 PM | Nationwide Delivery</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

