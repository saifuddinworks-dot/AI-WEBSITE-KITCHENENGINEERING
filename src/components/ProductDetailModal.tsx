import React, { useState } from 'react';
import { useStore } from '../context/StoreContext';
import { 
  X, 
  MessageSquare, 
  FileSpreadsheet, 
  CheckCircle2, 
  ShieldCheck, 
  Wrench, 
  HelpCircle, 
  Truck, 
  Cpu, 
  Flame, 
  PhoneCall,
  Download,
  Share2,
  Check
} from 'lucide-react';

export const ProductDetailModal: React.FC = () => {
  const { 
    selectedProduct, 
    setSelectedProduct, 
    products, 
    setIsQuoteModalOpen, 
    setQuoteTargetProduct, 
    openWhatsApp,
    companyInfo 
  } = useStore();

  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [activeTab, setActiveTab] = useState<'features' | 'specs' | 'applications' | 'support'>('specs');
  const [copiedLink, setCopiedLink] = useState(false);

  if (!selectedProduct) return null;

  const allImages = [
    selectedProduct.image,
    ...(selectedProduct.secondaryImages || [])
  ];

  const handleRequestQuote = () => {
    setQuoteTargetProduct(selectedProduct.name);
    setIsQuoteModalOpen(true);
  };

  const handleWhatsAppInquiry = () => {
    openWhatsApp(`Hello Kitchen Engineering, I am interested in ${selectedProduct.name} (SKU: ${selectedProduct.sku}). Please share pricing, technical specs and availability in Pakistan.`);
  };

  const handleShare = () => {
    navigator.clipboard?.writeText?.(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2500);
  };

  // Related products from same category
  const relatedProducts = products
    .filter(p => p.category === selectedProduct.category && p.id !== selectedProduct.id)
    .slice(0, 3);

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-[#151814]/85 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-fade-in">
      <div 
        className="bg-[#F5F1E5] text-[#20241E] w-full max-w-5xl rounded-xl border border-[#3E4A2E] shadow-2xl overflow-hidden my-8 relative flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header bar */}
        <div className="bg-[#20241E] text-[#ECE5D2] px-6 py-4 flex items-center justify-between border-b border-[#3E4A2E] shrink-0">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono uppercase tracking-widest text-[#8E959B]">
              SPECIFICATION SHEET
            </span>
            <span className="text-[#3E4A2E]">|</span>
            <span className="text-xs font-mono text-[#ECE5D2] font-semibold">
              SKU: {selectedProduct.sku}
            </span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handleShare}
              className="p-1.5 rounded text-[#8E959B] hover:text-white hover:bg-[#2C3229] transition-colors flex items-center gap-1 text-xs font-mono cursor-pointer"
              title="Copy Specification Link"
            >
              {copiedLink ? <Check className="w-4 h-4 text-emerald-400" /> : <Share2 className="w-4 h-4" />}
              <span className="hidden sm:inline">{copiedLink ? 'Copied' : 'Share'}</span>
            </button>

            <button
              onClick={() => setSelectedProduct(null)}
              className="p-1.5 rounded text-[#8E959B] hover:text-[#F5F1E5] hover:bg-[#2C3229] transition-colors cursor-pointer"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Content Body */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-8">
          {/* Main Grid: Gallery on Left, Details on Right */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left Column: Image Gallery (5 cols) */}
            <div className="lg:col-span-5 space-y-4">
              {/* Active Image Display */}
              <div className="w-full h-80 sm:h-96 rounded-lg bg-[#ECE5D2] border border-[#DDD4BD] overflow-hidden relative p-4 flex items-center justify-center">
                <img
                  src={allImages[activeImageIndex] || selectedProduct.image}
                  alt={selectedProduct.name}
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    const target = e.currentTarget;
                    if (selectedProduct.fallbackImage && target.src !== selectedProduct.fallbackImage) {
                      target.src = selectedProduct.fallbackImage;
                    }
                  }}
                  className="w-full h-full object-cover object-center rounded filter brightness-95 contrast-105"
                />
                <span className="absolute bottom-3 right-3 text-[10px] font-mono bg-[#20241E]/90 text-[#F5F1E5] px-2 py-0.5 rounded">
                  {selectedProduct.brand}
                </span>
              </div>

              {/* Thumbnails if multiple images */}
              {allImages.length > 1 && (
                <div className="flex items-center gap-3">
                  {allImages.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveImageIndex(idx)}
                      className={`w-18 h-18 rounded border-2 overflow-hidden transition-all ${
                        activeImageIndex === idx ? 'border-[#3E4A2E] ring-2 ring-[#3E4A2E]/30' : 'border-[#DDD4BD] opacity-70 hover:opacity-100'
                      }`}
                    >
                      <img 
                        src={img} 
                        alt="thumbnail" 
                        referrerPolicy="no-referrer"
                        onError={(e) => {
                          const target = e.currentTarget;
                          if (selectedProduct.fallbackImage && target.src !== selectedProduct.fallbackImage) {
                            target.src = selectedProduct.fallbackImage;
                          }
                        }}
                        className="w-full h-full object-cover" 
                      />
                    </button>
                  ))}
                </div>
              )}

              {/* Verified Origin & Engineering Stamp */}
              <div className="p-3.5 rounded-lg bg-[#ECE5D2] border border-[#DDD4BD] text-xs font-mono space-y-1.5">
                <div className="flex items-center justify-between text-[#8E959B]">
                  <span>MANUFACTURING ORIGIN:</span>
                  <strong className="text-[#20241E]">{selectedProduct.specs.origin || 'Certified Import'}</strong>
                </div>
                <div className="flex items-center justify-between text-[#8E959B]">
                  <span>DISPATCH / LEAD TIME:</span>
                  <strong className="text-[#3E4A2E] font-semibold">{selectedProduct.leadTime || 'In Stock (Direct Delivery)'}</strong>
                </div>
                <div className="flex items-center justify-between text-[#8E959B]">
                  <span>WARRANTY:</span>
                  <strong className="text-[#20241E]">{selectedProduct.specs.warranty || 'Commercial 1-Year'}</strong>
                </div>
              </div>
            </div>

            {/* Right Column: Title, Specs Table, CTAs (7 cols) */}
            <div className="lg:col-span-7 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-xs font-mono text-[#3E4A2E] font-semibold uppercase tracking-wider mb-2">
                  <span>{selectedProduct.category}</span>
                  <span>/</span>
                  <span>{selectedProduct.subcategory}</span>
                </div>

                <h1 className="text-2xl sm:text-3xl font-extrabold text-[#20241E] leading-tight mb-3">
                  {selectedProduct.name}
                </h1>

                <p className="text-sm text-[#20241E]/80 leading-relaxed mb-6">
                  {selectedProduct.description}
                </p>

                {/* Primary Quick Spec Table */}
                <div className="rounded-lg border border-[#DDD4BD] bg-[#ECE5D2]/60 overflow-hidden mb-6">
                  <div className="px-4 py-2 bg-[#20241E] text-[#ECE5D2] text-xs font-mono uppercase tracking-wider font-semibold">
                    Core Engineering Parameters
                  </div>
                  <div className="divide-y divide-[#DDD4BD] text-xs font-mono">
                    {selectedProduct.specs.dimensions && (
                      <div className="grid grid-cols-3 px-4 py-2.5">
                        <span className="text-[#8E959B]">DIMENSIONS (L×W×H):</span>
                        <span className="col-span-2 text-[#20241E] font-semibold">{selectedProduct.specs.dimensions}</span>
                      </div>
                    )}
                    {selectedProduct.specs.power && (
                      <div className="grid grid-cols-3 px-4 py-2.5 bg-white/40">
                        <span className="text-[#8E959B]">POWER RATING:</span>
                        <span className="col-span-2 text-[#20241E] font-semibold">{selectedProduct.specs.power}</span>
                      </div>
                    )}
                    {selectedProduct.specs.voltage && (
                      <div className="grid grid-cols-3 px-4 py-2.5">
                        <span className="text-[#8E959B]">VOLTAGE / PHASE:</span>
                        <span className="col-span-2 text-[#20241E] font-semibold">{selectedProduct.specs.voltage}</span>
                      </div>
                    )}
                    {selectedProduct.specs.material && (
                      <div className="grid grid-cols-3 px-4 py-2.5 bg-white/40">
                        <span className="text-[#8E959B]">CONSTRUCTION MATERIAL:</span>
                        <span className="col-span-2 text-[#20241E] font-semibold">{selectedProduct.specs.material}</span>
                      </div>
                    )}
                    {selectedProduct.specs.capacity && (
                      <div className="grid grid-cols-3 px-4 py-2.5">
                        <span className="text-[#8E959B]">CAPACITY / VOLUME:</span>
                        <span className="col-span-2 text-[#20241E] font-semibold">{selectedProduct.specs.capacity}</span>
                      </div>
                    )}
                    {selectedProduct.specs.fuelType && (
                      <div className="grid grid-cols-3 px-4 py-2.5 bg-white/40">
                        <span className="text-[#8E959B]">FUEL / UTILITY TYPE:</span>
                        <span className="col-span-2 text-[#20241E] font-semibold">{selectedProduct.specs.fuelType}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Action Buttons Box */}
              <div className="pt-4 border-t border-[#DDD4BD] space-y-3">
                <div className="flex flex-col sm:flex-row items-stretch gap-3">
                  <button
                    onClick={handleRequestQuote}
                    className="flex-1 py-3.5 px-6 rounded-md bg-[#3E4A2E] hover:bg-[#52633C] text-[#F5F1E5] font-bold text-xs uppercase tracking-wider transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <FileSpreadsheet className="w-4 h-4" />
                    <span>REQUEST OFFICIAL QUOTE / INVOICE</span>
                  </button>

                  <button
                    onClick={handleWhatsAppInquiry}
                    className="py-3.5 px-6 rounded-md bg-[#20241E] hover:bg-[#2C3229] text-[#ECE5D2] hover:text-white font-medium text-xs font-mono uppercase tracking-wider transition-colors flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <MessageSquare className="w-4 h-4 text-emerald-400" />
                    <span>WHATSAPP US</span>
                  </button>
                </div>

                <div className="text-[11px] font-mono text-[#8E959B] text-center sm:text-left flex items-center gap-2">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#3E4A2E]" />
                  <span>Price includes technical delivery, uncrating & initial installation guidance.</span>
                </div>
              </div>
            </div>
          </div>

          {/* Deep Tabs Section: Features, Specs, Applications, Warranty */}
          <div className="border-t border-[#DDD4BD] pt-6">
            <div className="flex items-center gap-2 border-b border-[#DDD4BD] mb-6 overflow-x-auto">
              <button
                onClick={() => setActiveTab('specs')}
                className={`pb-3 px-4 text-xs font-mono uppercase tracking-wider transition-all border-b-2 cursor-pointer whitespace-nowrap ${
                  activeTab === 'specs' 
                    ? 'border-[#3E4A2E] text-[#3E4A2E] font-bold' 
                    : 'border-transparent text-[#8E959B] hover:text-[#20241E]'
                }`}
              >
                Detailed Specifications
              </button>
              <button
                onClick={() => setActiveTab('features')}
                className={`pb-3 px-4 text-xs font-mono uppercase tracking-wider transition-all border-b-2 cursor-pointer whitespace-nowrap ${
                  activeTab === 'features' 
                    ? 'border-[#3E4A2E] text-[#3E4A2E] font-bold' 
                    : 'border-transparent text-[#8E959B] hover:text-[#20241E]'
                }`}
              >
                Engineering Features
              </button>
              <button
                onClick={() => setActiveTab('applications')}
                className={`pb-3 px-4 text-xs font-mono uppercase tracking-wider transition-all border-b-2 cursor-pointer whitespace-nowrap ${
                  activeTab === 'applications' 
                    ? 'border-[#3E4A2E] text-[#3E4A2E] font-bold' 
                    : 'border-transparent text-[#8E959B] hover:text-[#20241E]'
                }`}
              >
                Commercial Applications
              </button>
              <button
                onClick={() => setActiveTab('support')}
                className={`pb-3 px-4 text-xs font-mono uppercase tracking-wider transition-all border-b-2 cursor-pointer whitespace-nowrap ${
                  activeTab === 'support' 
                    ? 'border-[#3E4A2E] text-[#3E4A2E] font-bold' 
                    : 'border-transparent text-[#8E959B] hover:text-[#20241E]'
                }`}
              >
                Warranty & Technical Support
              </button>
            </div>

            {/* Tab 1: Specs */}
            {activeTab === 'specs' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-mono">
                <div className="p-4 rounded bg-[#ECE5D2] border border-[#DDD4BD] space-y-2">
                  <div className="text-[11px] font-bold text-[#20241E] uppercase border-b border-[#DDD4BD] pb-1">
                    Mechanical & Physical
                  </div>
                  <div>Dimensions: <strong className="text-[#20241E]">{selectedProduct.specs.dimensions || 'N/A'}</strong></div>
                  <div>Estimated Net Weight: <strong className="text-[#20241E]">{selectedProduct.specs.weight || 'Standard commercial grade'}</strong></div>
                  <div>Material Grade: <strong className="text-[#20241E]">{selectedProduct.specs.material || 'AISI 304 Stainless Steel'}</strong></div>
                  <div>Chamber/Vessel Capacity: <strong className="text-[#20241E]">{selectedProduct.specs.capacity || 'Standard commercial'}</strong></div>
                </div>

                <div className="p-4 rounded bg-[#ECE5D2] border border-[#DDD4BD] space-y-2">
                  <div className="text-[11px] font-bold text-[#20241E] uppercase border-b border-[#DDD4BD] pb-1">
                    Electrical, Thermal & Gas
                  </div>
                  <div>Nominal Power Rating: <strong className="text-[#20241E]">{selectedProduct.specs.power || 'N/A'}</strong></div>
                  <div>Operating Voltage: <strong className="text-[#20241E]">{selectedProduct.specs.voltage || 'N/A'}</strong></div>
                  <div>Fuel / Energy Class: <strong className="text-[#20241E]">{selectedProduct.specs.fuelType || 'Electric'}</strong></div>
                  <div>Country of Engineering: <strong className="text-[#20241E]">{selectedProduct.specs.origin || 'Pakistan / EU'}</strong></div>
                </div>
              </div>
            )}

            {/* Tab 2: Features */}
            {activeTab === 'features' && (
              <div className="space-y-3">
                {selectedProduct.keyFeatures.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3 rounded bg-[#ECE5D2] border border-[#DDD4BD] text-xs">
                    <CheckCircle2 className="w-4 h-4 text-[#3E4A2E] shrink-0 mt-0.5" />
                    <span className="text-[#20241E] font-medium leading-relaxed">{feat}</span>
                  </div>
                ))}
              </div>
            )}

            {/* Tab 3: Applications */}
            {activeTab === 'applications' && (
              <div className="space-y-4">
                <p className="text-xs text-[#20241E]/80">
                  This unit has been validated by Kitchen Engineering for high-duty continuous operation across the following hospitality sectors:
                </p>
                <div className="flex flex-wrap gap-2">
                  {selectedProduct.applications.map((app, idx) => (
                    <span key={idx} className="px-3 py-1.5 rounded bg-[#ECE5D2] text-[#20241E] border border-[#DDD4BD] text-xs font-mono font-medium">
                      ✓ {app}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Tab 4: Warranty & Support */}
            {activeTab === 'support' && (
              <div className="space-y-4 text-xs text-[#20241E]/85 leading-relaxed bg-[#ECE5D2] p-5 rounded border border-[#DDD4BD]">
                <h4 className="font-bold text-sm text-[#20241E]">
                  Official Kitchen Engineering Assurance Policy
                </h4>
                <p>
                  Every piece of equipment supplied by Kitchen Engineering comes with genuine manufacturer warranty and our in-house technical team commitment:
                </p>
                <ul className="list-disc pl-5 space-y-1.5 font-mono text-[11px]">
                  <li>Warranty Coverage: {selectedProduct.specs.warranty || '2 Years Commercial Guarantee'}</li>
                  <li>Original OEM spare parts available in Karachi, Lahore & Islamabad warehouses.</li>
                  <li>Preventative maintenance checks every quarter under annual AMC agreements.</li>
                  <li>Emergency breakdown response within 4 hours in major urban metropolitan zones.</li>
                </ul>
              </div>
            )}
          </div>

          {/* "Need help selecting the right equipment? Talk to a Kitchen Engineer" Banner */}
          <div className="p-5 rounded-lg bg-[#20241E] text-[#ECE5D2] flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 rounded bg-[#3E4A2E] flex items-center justify-center shrink-0">
                <PhoneCall className="w-5 h-5 text-[#F5F1E5]" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-[#F5F1E5]">
                  Need help selecting the right equipment size or utility load?
                </h4>
                <p className="text-xs text-[#8E959B]">
                  Speak directly with our senior MEP kitchen engineers for sizing and layout compatibility.
                </p>
              </div>
            </div>

            <button
              onClick={() => openWhatsApp(`Hello Kitchen Engineering, I need engineering advice regarding sizing and equipment selection for ${selectedProduct.name}.`)}
              className="px-5 py-2.5 rounded bg-[#3E4A2E] hover:bg-[#52633C] text-[#F5F1E5] font-bold text-xs uppercase tracking-wider transition-colors shrink-0 cursor-pointer"
            >
              TALK TO A KITCHEN ENGINEER
            </button>
          </div>

          {/* Related Products row */}
          {relatedProducts.length > 0 && (
            <div className="pt-4 border-t border-[#DDD4BD]">
              <h3 className="text-xs font-mono uppercase tracking-widest text-[#8E959B] mb-4">
                RELATED EQUIPMENT IN THIS CATEGORY
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {relatedProducts.map((rel) => (
                  <div
                    key={rel.id}
                    onClick={() => {
                      setSelectedProduct(rel);
                      setActiveImageIndex(0);
                    }}
                    className="p-3 rounded-lg bg-[#ECE5D2] border border-[#DDD4BD] hover:border-[#3E4A2E] cursor-pointer transition-all flex items-center gap-3 group"
                  >
                    <img src={rel.image} alt={rel.name} className="w-14 h-14 object-cover rounded" />
                    <div className="min-w-0 flex-1">
                      <div className="text-[10px] font-mono text-[#8E959B] uppercase">{rel.brand}</div>
                      <div className="text-xs font-bold text-[#20241E] group-hover:text-[#3E4A2E] truncate">
                        {rel.name}
                      </div>
                      <div className="text-[10px] font-mono text-[#3E4A2E] font-semibold mt-0.5">
                        Inspect Specs →
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
