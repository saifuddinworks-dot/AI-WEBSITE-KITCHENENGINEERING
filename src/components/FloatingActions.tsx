import React, { useState, useEffect } from 'react';
import { MessageSquare, FileSpreadsheet, Phone, ArrowUp, X } from 'lucide-react';
import { useStore } from '../context/StoreContext';

export const FloatingActions: React.FC = () => {
  const { openWhatsApp, setIsQuoteModalOpen, companyInfo } = useStore();
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [showNotificationBadge, setShowNotificationBadge] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 pointer-events-none">
      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="pointer-events-auto w-10 h-10 rounded-full bg-[#20241E] text-[#ECE5D2] hover:text-white border border-[#3E4A2E] shadow-md flex items-center justify-center transition-all hover:scale-105 cursor-pointer"
          title="Scroll to Top"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      )}

      {/* Quick Quote Request Trigger */}
      <button
        onClick={() => setIsQuoteModalOpen(true)}
        className="pointer-events-auto hidden sm:flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#D9642C] hover:bg-[#C55722] text-[#20241E] text-xs font-mono font-bold uppercase tracking-wider shadow-xl transition-all hover:scale-105 border border-[#D9642C] cursor-pointer"
      >
        <FileSpreadsheet className="w-4 h-4 text-[#20241E]" />
        <span>Request Fast Quote</span>
      </button>

      {/* Floating WhatsApp Action with live ping */}
      <div className="pointer-events-auto relative group">
        {showNotificationBadge && (
          <div className="absolute -top-1 -right-1 z-10 w-3.5 h-3.5 bg-emerald-500 rounded-full border-2 border-white animate-pulse" />
        )}

        <button
          onClick={() => {
            setShowNotificationBadge(false);
            openWhatsApp("Hello Kitchen Engineering, I want to discuss commercial kitchen equipment for my venue.");
          }}
          className="w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 cursor-pointer"
          title="Chat with Kitchen Engineering on WhatsApp: +92 315 3000476"
        >
          <MessageSquare className="w-7 h-7 fill-current" />
        </button>

        {/* Hover Tooltip */}
        <div className="absolute right-16 top-2.5 bg-[#20241E] text-[#ECE5D2] text-xs font-mono py-2 px-3.5 rounded shadow-xl whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none border border-[#3E4A2E]">
          <div className="font-bold text-white flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            <span>WhatsApp Direct Desk</span>
          </div>
          <div className="text-[10px] text-emerald-400 font-mono">+92 315 3000476</div>
        </div>
      </div>
    </div>
  );
};
