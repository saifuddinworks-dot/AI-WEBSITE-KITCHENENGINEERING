import React from 'react';
import { Logo } from './Logo';
import { useStore } from '../context/StoreContext';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  MessageSquare, 
  ArrowRight, 
  ShieldCheck, 
  Compass, 
  Settings,
  Flame
} from 'lucide-react';

export const Footer: React.FC = () => {
  const { companyInfo, setCurrentView, setSelectedCategorySlug, setIsQuoteModalOpen, openWhatsApp } = useStore();

  return (
    <footer className="w-full bg-[#20241E] text-[#ECE5D2] border-t border-[#3E4A2E] relative overflow-hidden">
      {/* Background CAD grid */}
      <div className="absolute inset-0 bg-arch-grid-dark opacity-20 pointer-events-none" />

      {/* Top Pre-Footer Technical Bar */}
      <div className="border-b border-[#3E4A2E] py-8 bg-[#151814]/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded bg-[#3E4A2E] flex items-center justify-center text-[#F5F1E5]">
              <Compass className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-mono uppercase tracking-wider text-[#F5F1E5] font-bold">
                KITCHEN ENGINEERING CONSULTANCY DESK
              </div>
              <div className="text-xs text-[#8E959B]">
                Direct architectural CAD reviews, MEP coordination, and site equipment surveys across Pakistan.
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => openWhatsApp("Hello Kitchen Engineering, I want to schedule a kitchen site survey.")}
              className="px-4 py-2.5 rounded bg-[#2C3229] hover:bg-[#3E4A2E] text-[#ECE5D2] hover:text-white text-xs font-mono font-medium transition-colors border border-[#3E4A2E] flex items-center gap-2 cursor-pointer"
            >
              <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
              <span>WhatsApp Engineering Desk</span>
            </button>
            <button
              onClick={() => setIsQuoteModalOpen(true)}
              className="px-4 py-2.5 rounded bg-[#3E4A2E] hover:bg-[#52633C] text-[#F5F1E5] text-xs font-mono uppercase tracking-wider font-bold transition-colors cursor-pointer"
            >
              Request Quote
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Col 1: Brand & Positioning (2 cols on lg) */}
          <div className="lg:col-span-2 space-y-5">
            <Logo variant="light" size="md" />
            
            <p className="text-xs text-[#ECE5D2]/80 leading-relaxed max-w-sm">
              Pakistan's premier commercial kitchen engineering firm and industrial equipment provider. Bridging architectural ergonomics, heavy-duty culinary equipment, and certified AISI 304 stainless-steel fabrication.
            </p>

            <div className="space-y-2.5 text-xs font-mono text-[#8E959B]">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#D9642C] shrink-0 mt-0.5" />
                <span className="text-[#ECE5D2] leading-snug">
                  <strong className="text-white">Head Office:</strong> 3rd Zamzama Commercial Lane, DHA Phase 5 Defence V Karachi, 75600, Pakistan
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                <span>Regional Showroom: Industrial Estate, Gulberg III, Lahore</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                <span>Islamabad Desk: Sector I-9/2 Industrial Area</span>
              </div>
              <div className="flex items-center gap-2 text-emerald-400">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>PEC License: 76516 (Category C6) • SRB &amp; FBR Registered</span>
              </div>
            </div>

            <div className="pt-2 flex items-center gap-3">
              <button
                onClick={() => setCurrentView('admin')}
                className="inline-flex items-center gap-1.5 text-[11px] font-mono text-[#8E959B] hover:text-[#ECE5D2] px-2.5 py-1 rounded bg-[#151814] border border-[#3E4A2E] cursor-pointer"
              >
                <Settings className="w-3 h-3 text-[#3E4A2E]" />
                <span>B2B Portal & CMS</span>
              </button>
            </div>
          </div>

          {/* Col 2: Solutions */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#F5F1E5] font-bold pb-2 border-b border-[#3E4A2E]">
              Turnkey Solutions
            </h4>
            <ul className="space-y-2 text-xs text-[#ECE5D2]/75 font-mono">
              <li>
                <button onClick={() => { setCurrentView('home'); }} className="hover:text-white transition-colors cursor-pointer text-left">
                  Architectural Kitchen Planning
                </button>
              </li>
              <li>
                <button onClick={() => { setCurrentView('fabrication'); }} className="hover:text-white transition-colors cursor-pointer text-left">
                  Custom Stainless Fabrication
                </button>
              </li>
              <li>
                <button onClick={() => { setCurrentView('ventilation'); }} className="hover:text-white transition-colors cursor-pointer text-left">
                  Exhaust & Fresh Air Systems
                </button>
              </li>
              <li>
                <button onClick={() => { setCurrentView('coffee'); }} className="hover:text-white transition-colors cursor-pointer text-left">
                  Café & Espresso Engineering
                </button>
              </li>
              <li>
                <button onClick={() => { setCurrentView('projects'); }} className="hover:text-white transition-colors cursor-pointer text-left">
                  Commercial Case Studies
                </button>
              </li>
              <li>
                <button onClick={() => { setCurrentView('services'); }} className="hover:text-white transition-colors cursor-pointer text-left">
                  Annual Maintenance (AMC)
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Categories */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#F5F1E5] font-bold pb-2 border-b border-[#3E4A2E]">
              Equipment Sectors
            </h4>
            <ul className="space-y-2 text-xs text-[#ECE5D2]/75 font-mono">
              <li>
                <button 
                  onClick={() => { setSelectedCategorySlug('commercial-cooking-equipment'); setCurrentView('catalog'); }}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Heavy Cooking Suites
                </button>
              </li>
              <li>
                <button 
                  onClick={() => { setSelectedCategorySlug('commercial-refrigeration'); setCurrentView('catalog'); }}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Tropicalized Refrigeration
                </button>
              </li>
              <li>
                <button 
                  onClick={() => { setSelectedCategorySlug('bakery-pizza-equipment'); setCurrentView('catalog'); }}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Bakery & Pizza Deck Ovens
                </button>
              </li>
              <li>
                <button 
                  onClick={() => { setSelectedCategorySlug('commercial-coffee-equipment'); setCurrentView('catalog'); }}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Espresso & Beverage Lines
                </button>
              </li>
              <li>
                <button 
                  onClick={() => { setSelectedCategorySlug('food-preparation-equipment'); setCurrentView('catalog'); }}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Mechanical Food Prep
                </button>
              </li>
              <li>
                <button 
                  onClick={() => { setSelectedCategorySlug('commercial-dishwashing'); setCurrentView('catalog'); }}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Warewashing & Sanitization
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Hotline */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#F5F1E5] font-bold pb-2 border-b border-[#3E4A2E]">
              Direct Contact & Hotline
            </h4>
            <div className="space-y-3 text-xs">
              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-[#D9642C] shrink-0 mt-0.5" />
                <div>
                  <a href="tel:+923153000476" className="font-mono text-[#F5F1E5] font-bold hover:text-emerald-400 transition-colors block">
                    +92 315 3000476
                  </a>
                  <div className="text-[10px] text-[#8E959B]">Direct Engineering & Sales Desk</div>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <MessageSquare className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <button 
                    onClick={() => openWhatsApp()} 
                    className="font-mono text-emerald-400 font-bold hover:text-emerald-300 transition-colors text-left cursor-pointer flex items-center gap-1"
                  >
                    <span>wa.me/message/3TIAO6XE5UUYO1</span>
                  </button>
                  <div className="text-[10px] text-[#8E959B]">Direct WhatsApp Quick Chat</div>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-[#D9642C] shrink-0 mt-0.5" />
                <div>
                  <a href="mailto:info@kitchenengineering.com.pk" className="font-mono text-[#ECE5D2] hover:text-white transition-colors block">
                    info@kitchenengineering.com.pk
                  </a>
                  <div className="text-[10px] text-[#8E959B]">Official Inquiries & Tender Documents</div>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-[#8E959B] shrink-0 mt-0.5" />
                <div>
                  <div className="font-mono text-[#ECE5D2]">Mon - Sat: 9:00 AM - 8:00 PM PKT</div>
                  <div className="text-[10px] text-emerald-400 font-semibold">24/7 Breakdown Technical Support</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Legal & Engineering Stamp */}
        <div className="mt-14 pt-8 border-t border-[#3E4A2E] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#8E959B]">
          <div className="space-y-1 text-center sm:text-left">
            <div>
              © {new Date().getFullYear()} KITCHEN ENGINEERING • D.A.T CONTRACTOR BUILDERS &amp; SUPPLIERS. All rights reserved.
            </div>
            <div className="text-[11px] text-[#ECE5D2]/70">
              3rd Zamzama Commercial Lane, DHA Phase 5 Defence V Karachi, 75600, Pakistan
            </div>
          </div>
          <div className="flex flex-wrap items-center justify-center sm:justify-end gap-3 text-[11px]">
            <span className="text-[#ECE5D2] font-semibold">PEC C6 Certified (Lic: 76516)</span>
            <span>•</span>
            <span>AISI 304 Stainless Fab</span>
            <span>•</span>
            <span>SRB Registered</span>
            <span>•</span>
            <span>GST / FBR Registered</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
