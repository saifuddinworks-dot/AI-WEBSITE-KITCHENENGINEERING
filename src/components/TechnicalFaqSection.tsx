import React, { useState } from 'react';
import { ChevronDown, HelpCircle, ShieldCheck, CheckCircle2, MessageSquare } from 'lucide-react';
import { useStore } from '../context/StoreContext';

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

const FAQS: FAQItem[] = [
  {
    category: 'Credentials & Manufacturing',
    question: 'Who is Kitchen Engineering and what are your engineering credentials in Pakistan?',
    answer: 'KITCHEN ENGINEERING is the specialized commercial foodservice division of D.A.T Contractor Builders & General Suppliers, officially registered with the Pakistan Engineering Council (PEC License No. 76516, Category C6). Established in 2003, we design, fabricate, and install turnkey commercial kitchens, high-output cooking ranges, commercial cold rooms, and heavy-duty ventilation systems for restaurants, hotels, hospitals, and bakeries nationwide.'
  },
  {
    category: 'Material & Fabrication',
    question: 'What stainless steel specifications do you use for restaurant kitchen fabrication?',
    answer: 'We exclusively engineer our food-contact equipment and work tables using non-magnetic, certified food-grade AISI 304 stainless steel in heavy gauges (14-gauge / 2.0mm for heavy impact decks, 16-gauge / 1.5mm for countertops, and 18-gauge / 1.2mm for cabinets and under-shelving). Every joint is Argon TIG welded, passivated, and finished with a satin Scotch-Brite polish to resist Pakistani spice acids, high salinity, and ensure 100% compliance with Punjab (PFA) and Sindh (SFA) Food Authority standards.'
  },
  {
    category: 'Refrigeration & Climate',
    question: 'How do your commercial chillers and freezers perform during Pakistani summer heat (+43°C)?',
    answer: 'All Kitchen Engineering reach-in chillers, under-counter freezers, and cold rooms are specifically "tropicalized" for extreme South Asian climates. We integrate high-efficiency Embraco / Secop compressors, oversized copper fin condensers, double-glazed anti-fog heated glass doors, and 70mm high-density cyclopentane polyurethane insulation. This guarantees stable temperature pull-down (-18°C to -22°C for freezers; +2°C to +8°C for chillers) even when ambient kitchen temperatures exceed +43°C.'
  },
  {
    category: 'Ventilation & Exhaust',
    question: 'Do you calculate CFM airflow and fabricate custom kitchen exhaust hoods?',
    answer: 'Yes. Our MEP engineering team conducts rigorous heat load and CFM (Cubic Feet per Minute) calculations according to ASHRAE and NFPA 96 guidelines. We fabricate box and tapered AISI 304 exhaust hoods with removable stainless steel grease baffle filters, heavy-gauge galvanized and stainless steel ductwork, and SISW backward-curved centrifugal blowers with optional VFD (Variable Frequency Drive) speed controllers to eliminate kitchen smoke and heat spillover.'
  },
  {
    category: 'Turnkey Delivery & AMC',
    question: 'Do you deliver and install commercial kitchen equipment in Lahore, Islamabad, and other cities?',
    answer: 'Yes. While our headquarters is in Zamzama, DHA Phase 5, Karachi, we execute turnkey commercial kitchen projects across Lahore, Islamabad, Rawalpindi, Faisalabad, Multan, Peshawar, and Quetta. We provide factory testing, insured logistics, on-site MEP connection supervision, and comprehensive Annual Maintenance Contracts (AMC) with guaranteed 24/7 technical breakdown dispatch and genuine spare parts.'
  }
];

export const TechnicalFaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const { openWhatsApp, setIsQuoteModalOpen } = useStore();

  return (
    <section id="faq" className="py-16 sm:py-20 bg-[#F5F1E5] border-t border-[#DDD4BD] relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#3E4A2E]/10 border border-[#3E4A2E]/20 text-[#3E4A2E] text-xs font-mono mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>ENGINEERING KNOWLEDGE BASE &amp; FREQUENTLY ASKED QUESTIONS</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#20241E] tracking-tight">
            Frequently Asked Questions on Commercial Kitchens in Pakistan
          </h2>
          <p className="mt-3 text-sm text-[#4E5448] leading-relaxed">
            Essential engineering guidelines, material specifications, and regulatory standards for commercial foodservice operations.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`rounded-lg border transition-all duration-200 ${
                  isOpen 
                    ? 'bg-white border-[#3E4A2E] shadow-sm' 
                    : 'bg-[#ECE5D2]/70 border-[#DDD4BD] hover:border-[#3E4A2E]/40'
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full text-left px-5 py-4 flex items-center justify-between gap-4 cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <div className="space-y-1">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-[#D9642C] font-semibold block">
                      {faq.category}
                    </span>
                    <span className="text-base font-bold text-[#20241E] block">
                      {faq.question}
                    </span>
                  </div>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                    isOpen ? 'rotate-180 bg-[#3E4A2E] text-[#F5F1E5]' : 'bg-[#DDD4BD] text-[#20241E]'
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-sm text-[#383E34] leading-relaxed border-t border-[#DDD4BD]/40 mt-1">
                    <div className="flex items-start gap-2.5 pt-2">
                      <CheckCircle2 className="w-4 h-4 text-[#3E4A2E] shrink-0 mt-0.5" />
                      <p>{faq.answer}</p>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Action Callout */}
        <div className="mt-12 p-6 rounded-xl bg-[#20241E] text-[#ECE5D2] border border-[#3E4A2E] flex flex-col sm:flex-row items-center justify-between gap-6 shadow-md">
          <div className="space-y-1 text-center sm:text-left">
            <div className="flex items-center justify-center sm:justify-start gap-2 text-xs font-mono text-[#D9642C]">
              <ShieldCheck className="w-4 h-4" />
              <span>PEC C6 LICENSED CONSULTANCY (LIC #76516)</span>
            </div>
            <h4 className="text-base font-bold text-[#F5F1E5]">
              Have a custom MEP layout or equipment query?
            </h4>
            <p className="text-xs text-[#8E959B]">
              Speak directly with our senior commercial kitchen project engineer on WhatsApp or schedule a site inspection.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => openWhatsApp("Hello Kitchen Engineering team, I need technical advice on my restaurant kitchen project.")}
              className="px-4 py-2.5 rounded bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-mono font-semibold flex items-center gap-2 transition-colors cursor-pointer"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Ask on WhatsApp</span>
            </button>
            <button
              onClick={() => setIsQuoteModalOpen(true)}
              className="px-4 py-2.5 rounded bg-[#3E4A2E] hover:bg-[#52633C] text-[#F5F1E5] text-xs font-mono font-semibold transition-colors cursor-pointer"
            >
              Request Quote
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
