import React, { useState } from 'react';
import { useStore } from '../context/StoreContext';
import { 
  X, 
  FileSpreadsheet, 
  CheckCircle2, 
  UploadCloud, 
  MessageSquare, 
  ShieldCheck, 
  ArrowRight,
  Building,
  FileCheck
} from 'lucide-react';

export const QuoteModal: React.FC = () => {
  const { 
    isQuoteModalOpen, 
    setIsQuoteModalOpen, 
    quoteTargetProduct, 
    setQuoteTargetProduct, 
    addQuoteRequest,
    openWhatsApp 
  } = useStore();

  const [fullName, setFullName] = useState('');
  const [businessName, setBusinessName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [city, setCity] = useState('Karachi');
  const [businessType, setBusinessType] = useState('Restaurant');
  const [projectType, setProjectType] = useState(quoteTargetProduct ? 'Commercial Equipment Supply' : 'New Kitchen Setup');
  const [equipmentDetails, setEquipmentDetails] = useState(quoteTargetProduct ? `Selected Product: ${quoteTargetProduct}` : '');
  const [budget, setBudget] = useState('PKR 2M - 5 Million');
  const [timeline, setTimeline] = useState('Within 1 month');
  const [message, setMessage] = useState('');
  const [fileName, setFileName] = useState('');
  const [submittedQuoteId, setSubmittedQuoteId] = useState<string | null>(null);

  if (!isQuoteModalOpen) return null;

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFileName(e.target.files[0].name);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !phone) return;

    const newQuote = addQuoteRequest({
      name: fullName,
      businessName: businessName || 'Commercial Venue',
      phone,
      email: email || 'contact@client.com',
      city,
      businessType,
      projectType,
      requiredEquipment: equipmentDetails || quoteTargetProduct || 'Full line equipment quotation',
      estimatedBudget: budget,
      projectTimeline: timeline,
      message,
      fileName: fileName || undefined
    });

    setSubmittedQuoteId(newQuote.id);
  };

  const handleClose = () => {
    setIsQuoteModalOpen(false);
    setQuoteTargetProduct(null);
    setSubmittedQuoteId(null);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-[#151814]/90 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-fade-in">
      <div 
        className="bg-[#F5F1E5] text-[#20241E] w-full max-w-4xl rounded-xl border border-[#3E4A2E] shadow-2xl overflow-hidden relative my-6 flex flex-col max-h-[94vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Banner */}
        <div className="bg-[#20241E] text-[#ECE5D2] px-6 py-4 flex items-center justify-between border-b border-[#3E4A2E] shrink-0">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono uppercase tracking-widest text-[#8E959B]">
              COMMERCIAL INQUIRY & ENGINEERING QUOTATION
            </span>
            {quoteTargetProduct && (
              <span className="text-xs font-mono text-emerald-400 bg-[#3E4A2E]/50 px-2 py-0.5 rounded">
                Ref: {quoteTargetProduct}
              </span>
            )}
          </div>

          <button
            onClick={handleClose}
            className="p-1.5 rounded text-[#8E959B] hover:text-white hover:bg-[#2C3229] transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="overflow-y-auto p-6 sm:p-8">
          {submittedQuoteId ? (
            /* Confirmation Screen */
            <div className="text-center py-10 space-y-6 max-w-xl mx-auto">
              <div className="w-16 h-16 rounded-full bg-[#3E4A2E]/20 text-[#3E4A2E] flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-[#8E959B]">
                  PROPOSAL REGISTERED IN SYSTEM
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#20241E] mt-1 mb-2">
                  Quote Reference #{submittedQuoteId}
                </h3>
                <p className="text-sm text-[#20241E]/80 leading-relaxed">
                  Thank you, <strong>{fullName}</strong>. Your project specifications for <strong>{businessName || 'your facility'}</strong> have been queued for review by our engineering team in Karachi.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-[#ECE5D2] border border-[#DDD4BD] text-xs font-mono text-left space-y-2">
                <div><span className="text-[#8E959B]">City:</span> {city}, Pakistan</div>
                <div><span className="text-[#8E959B]">Project Type:</span> {projectType}</div>
                <div><span className="text-[#8E959B]">Budget Class:</span> {budget}</div>
                <div><span className="text-[#8E959B]">Engineering Desk:</span> 3rd Zamzama Commercial Lane, DHA Phase 5, Karachi</div>
                <div><span className="text-[#8E959B]">Direct Hotline:</span> +92 315 3000476</div>
                <div><span className="text-[#8E959B]">Estimated Review:</span> Within 2-4 business hours</div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
                <button
                  onClick={() => openWhatsApp(`Hello Kitchen Engineering, I just submitted Quote Request #${submittedQuoteId} for ${businessName || fullName} in ${city}. Please confirm receipt and share the initial proposal.`)}
                  className="w-full sm:w-auto px-6 py-3.5 rounded bg-[#20241E] hover:bg-[#2C3229] text-[#ECE5D2] hover:text-white font-mono text-xs uppercase tracking-wider font-bold transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4 text-emerald-400" />
                  <span>SPEED UP VIA WHATSAPP (INSTANT)</span>
                </button>

                <button
                  onClick={handleClose}
                  className="w-full sm:w-auto px-6 py-3.5 rounded bg-[#3E4A2E] text-[#F5F1E5] font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer"
                >
                  RETURN TO SHOWROOM
                </button>
              </div>
            </div>
          ) : (
            /* Inquiry Form */
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="border-b border-[#DDD4BD] pb-4">
                <h3 className="text-xl sm:text-2xl font-bold text-[#20241E]">
                  Request an Official Technical Quotation
                </h3>
                <p className="text-xs text-[#20241E]/75 mt-1">
                  Fill out your operational parameters below. Our kitchen design and MEP engineers will prepare itemized pricing, utility schedules, and delivery timetables.
                </p>
              </div>

              {/* Grid Form Fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-mono uppercase text-[#8E959B] block mb-1 font-semibold">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="e.g. Tariq Mehmood"
                    className="w-full bg-[#ECE5D2] border border-[#DDD4BD] rounded px-3 py-2 text-xs text-[#20241E] focus:outline-none focus:border-[#3E4A2E]"
                  />
                </div>

                <div>
                  <label className="text-xs font-mono uppercase text-[#8E959B] block mb-1 font-semibold">
                    Business / Restaurant / Hotel Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={businessName}
                    onChange={(e) => setBusinessName(e.target.value)}
                    placeholder="e.g. The Charcoal Kitchen / Artisan Roasters"
                    className="w-full bg-[#ECE5D2] border border-[#DDD4BD] rounded px-3 py-2 text-xs text-[#20241E] focus:outline-none focus:border-[#3E4A2E]"
                  />
                </div>

                <div>
                  <label className="text-xs font-mono uppercase text-[#8E959B] block mb-1 font-semibold">
                    Phone / WhatsApp Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+92 300 1234567"
                    className="w-full bg-[#ECE5D2] border border-[#DDD4BD] rounded px-3 py-2 text-xs text-[#20241E] focus:outline-none focus:border-[#3E4A2E]"
                  />
                </div>

                <div>
                  <label className="text-xs font-mono uppercase text-[#8E959B] block mb-1 font-semibold">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="owner@restaurant.pk"
                    className="w-full bg-[#ECE5D2] border border-[#DDD4BD] rounded px-3 py-2 text-xs text-[#20241E] focus:outline-none focus:border-[#3E4A2E]"
                  />
                </div>

                <div>
                  <label className="text-xs font-mono uppercase text-[#8E959B] block mb-1 font-semibold">
                    City Location
                  </label>
                  <select
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="w-full bg-[#ECE5D2] border border-[#DDD4BD] rounded px-3 py-2 text-xs text-[#20241E] focus:outline-none focus:border-[#3E4A2E]"
                  >
                    <option>Karachi</option>
                    <option>Lahore</option>
                    <option>Islamabad</option>
                    <option>Rawalpindi</option>
                    <option>Faisalabad</option>
                    <option>Peshawar</option>
                    <option>Multan</option>
                    <option>Quetta</option>
                    <option>Sialkot</option>
                    <option>Other / Northern Resort</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-mono uppercase text-[#8E959B] block mb-1 font-semibold">
                    Business Type
                  </label>
                  <select
                    value={businessType}
                    onChange={(e) => setBusinessType(e.target.value)}
                    className="w-full bg-[#ECE5D2] border border-[#DDD4BD] rounded px-3 py-2 text-xs text-[#20241E] focus:outline-none focus:border-[#3E4A2E]"
                  >
                    <option>Restaurant (Fine Dining / Casual)</option>
                    <option>Café / Specialty Coffee Bar</option>
                    <option>Bakery & Pastry Shop</option>
                    <option>Cloud / Ghost Kitchen</option>
                    <option>Hotel / Banquet Hall</option>
                    <option>Fast Food / QSR Chain</option>
                    <option>Industrial Catering / Institutional</option>
                    <option>Hospitality Resort</option>
                    <option>Other Food Facility</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-mono uppercase text-[#8E959B] block mb-1 font-semibold">
                    Project Scope
                  </label>
                  <select
                    value={projectType}
                    onChange={(e) => setProjectType(e.target.value)}
                    className="w-full bg-[#ECE5D2] border border-[#DDD4BD] rounded px-3 py-2 text-xs text-[#20241E] focus:outline-none focus:border-[#3E4A2E]"
                  >
                    <option>New Turnkey Kitchen Setup</option>
                    <option>Commercial Equipment Procurement Only</option>
                    <option>Custom Stainless Steel Fabrication</option>
                    <option>Kitchen Exhaust & Ventilation System</option>
                    <option>Espresso Bar & Beverage Setup</option>
                    <option>Kitchen Upgrade & Retrofitting</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-mono uppercase text-[#8E959B] block mb-1 font-semibold">
                    Estimated Project Budget
                  </label>
                  <select
                    value={budget}
                    onChange={(e) => setBudget(e.target.value)}
                    className="w-full bg-[#ECE5D2] border border-[#DDD4BD] rounded px-3 py-2 text-xs text-[#20241E] focus:outline-none focus:border-[#3E4A2E]"
                  >
                    <option>Under PKR 2 Million</option>
                    <option>PKR 2M - 5 Million</option>
                    <option>PKR 5M - 10 Million</option>
                    <option>PKR 10M - 25 Million</option>
                    <option>PKR 25M+ (Large Institutional / Hotel)</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-mono uppercase text-[#8E959B] block mb-1 font-semibold">
                    Project Target Timeline
                  </label>
                  <select
                    value={timeline}
                    onChange={(e) => setTimeline(e.target.value)}
                    className="w-full bg-[#ECE5D2] border border-[#DDD4BD] rounded px-3 py-2 text-xs text-[#20241E] focus:outline-none focus:border-[#3E4A2E]"
                  >
                    <option>Immediate (1-2 weeks)</option>
                    <option>Within 1 month</option>
                    <option>1-3 months</option>
                    <option>3-6 months</option>
                    <option>Just planning / Feasibility stage</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-mono uppercase text-[#8E959B] block mb-1 font-semibold">
                    Upload Floor Plan / AutoCAD / Sketch
                  </label>
                  <div className="relative border border-dashed border-[#DDD4BD] rounded bg-[#ECE5D2] p-2 text-center">
                    <input
                      type="file"
                      onChange={handleFileChange}
                      className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
                    />
                    <div className="flex items-center justify-center gap-1.5 text-xs font-mono text-[#20241E]">
                      <UploadCloud className="w-4 h-4 text-[#3E4A2E]" />
                      <span className="truncate">{fileName || 'Attach layout file (PDF, DWG, IMG)'}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Equipment details text */}
              <div>
                <label className="text-xs font-mono uppercase text-[#8E959B] block mb-1 font-semibold">
                  Required Equipment List or Specific Sizing
                </label>
                <textarea
                  rows={3}
                  value={equipmentDetails}
                  onChange={(e) => setEquipmentDetails(e.target.value)}
                  placeholder="e.g. 6-burner commercial range, 2 double-deck pizza ovens, 4 work tables with sinks, 12ft exhaust canopy with blower fan..."
                  className="w-full bg-[#ECE5D2] border border-[#DDD4BD] rounded px-3 py-2 text-xs text-[#20241E] focus:outline-none focus:border-[#3E4A2E]"
                />
              </div>

              {/* Submit CTA */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-[#DDD4BD]">
                <button
                  type="submit"
                  className="w-full sm:w-auto px-8 py-3.5 rounded bg-[#D9642C] hover:bg-[#C55722] text-[#20241E] font-extrabold text-xs uppercase tracking-wider transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
                >
                  <FileSpreadsheet className="w-4 h-4 text-[#20241E]" />
                  <span>SUBMIT FOR ENGINEERING REVIEW</span>
                </button>

                <div className="text-[11px] font-mono text-[#8E959B] flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#3E4A2E]" />
                  <span>Guaranteed response within 4 business hours</span>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
