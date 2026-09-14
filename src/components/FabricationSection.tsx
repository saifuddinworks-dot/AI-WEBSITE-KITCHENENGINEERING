import React, { useState } from 'react';
import { useStore } from '../context/StoreContext';
import { 
  Wrench, 
  Ruler, 
  Compass, 
  Flame, 
  Sparkles, 
  UploadCloud, 
  CheckCircle2, 
  FileCheck, 
  ArrowRight,
  Layers
} from 'lucide-react';

export const FabricationSection: React.FC = () => {
  const { openWhatsApp, addQuoteRequest } = useStore();

  // Custom fabrication inquiry form state
  const [equipmentType, setEquipmentType] = useState('Custom Work Table / Chef Counter');
  const [dimensions, setDimensions] = useState('');
  const [steelGrade, setSteelGrade] = useState('AISI 304 (Food-Safe)');
  const [gauge, setGauge] = useState('16 Gauge (1.5mm Heavy Duty)');
  const [clientName, setClientName] = useState('');
  const [clientPhone, setClientPhone] = useState('');
  const [notes, setNotes] = useState('');
  const [fileName, setFileName] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const fabricationCategories = [
    { title: 'Chef Preparation Lines', image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=800&auto=format&fit=crop', desc: 'Seamless 1.5mm AISI 304 tops with marine core substrate' },
    { title: 'Commercial Sinks & Scullery', image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=800&auto=format&fit=crop', desc: 'Pressed deep pot bowls, anti-drip edges & high upstands' },
    { title: 'Exhaust Hoods & Grease Gutters', image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=800&auto=format&fit=crop', desc: 'NFPA-compliant grease-tight welded canopies' },
    { title: 'Bain-Marie & Drop-In Wells', image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=800&auto=format&fit=crop', desc: 'Dry and wet-heat insulated display holding units' },
    { title: 'Wall Shelving & Speed Racks', image: 'https://images.unsplash.com/photo-1584992236310-6edddc08acff?q=80&w=800&auto=format&fit=crop', desc: 'Heavy tubular cantilever frames and bakery pan trolleys' },
    { title: 'Front Bar & Beverage Counters', image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=800&auto=format&fit=crop', desc: 'Sunken speed rails, built-in rinsers & insulated ice wells' }
  ];

  const processSteps = [
    {
      num: '01',
      title: 'Measure',
      desc: 'Our technical team visits your site to verify physical walls, plumbing coordinates, electrical risers and exact millimeter structural clearance.'
    },
    {
      num: '02',
      title: 'Design',
      desc: 'We draft fabrication shop drawings in AutoCAD showing gauge specifications, welded seams, marine substrate, and leg bracing.'
    },
    {
      num: '03',
      title: 'Fabricate',
      desc: 'Precision laser-cutting, CNC hydraulic folding, TIG welding, and Scotch-Brite satin grain finishing in our dedicated Karachi plant.'
    },
    {
      num: '04',
      title: 'Install',
      desc: 'Rigging and on-site leveling with heavy stainless bullet feet, seamless siliconing to HACCP standards, and quality handover.'
    }
  ];

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFileName(e.target.files[0].name);
    }
  };

  const handleSubmitCustomRequest = (e: React.FormEvent) => {
    e.preventDefault();
    if (!clientName || !clientPhone) return;

    addQuoteRequest({
      name: clientName,
      businessName: 'Custom Fabrication Project',
      phone: clientPhone,
      email: 'direct-fab@kitcheneng.pk',
      city: 'Pakistan',
      businessType: 'Custom Stainless Fabrication',
      projectType: 'Bespoke Fabrication',
      requiredEquipment: `${equipmentType} - ${dimensions} (${steelGrade}, ${gauge})`,
      estimatedBudget: 'Quotation Requested',
      projectTimeline: 'Immediate',
      message: notes || 'Custom stainless request via fabrication portal',
      fileName: fileName || undefined
    });

    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setDimensions('');
      setNotes('');
      setFileName('');
    }, 6000);
  };

  return (
    <section id="fabrication-section" className="w-full bg-[#20241E] text-[#ECE5D2] py-20 border-b border-[#3E4A2E] relative overflow-hidden">
      {/* Background architectural grid pattern */}
      <div className="absolute inset-0 bg-arch-grid-dark opacity-35 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 text-xs font-mono text-[#8E959B] uppercase tracking-widest mb-2">
            <span className="text-[#ECE5D2] font-bold">04 / IN-HOUSE METAL CRAFTSMANSHIP</span>
            <span>•</span>
            <span>AISI 304 CERTIFIED</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#F5F1E5] tracking-tight mb-4">
            Built in Stainless. <br />
            <span className="text-[#ECE5D2]">Built Around Your Kitchen.</span>
          </h2>
          <p className="text-base sm:text-lg text-[#ECE5D2]/80 leading-relaxed">
            Standard catalog units rarely fit every architectural pillar and plumbing stack. Our in-house metal fabrication plant engineers bespoke stainless-steel work lines crafted to the exact contours of your venue.
          </p>
        </div>

        {/* 6 Visual Fabrication Specialties Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {fabricationCategories.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#151814] rounded-lg border border-[#3E4A2E] overflow-hidden group hover:border-[#52633C] transition-all shadow-md flex flex-col justify-between"
            >
              <div className="h-44 overflow-hidden relative">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-90 contrast-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#151814] via-transparent to-transparent" />
                <span className="absolute top-3 left-3 text-[10px] font-mono bg-[#20241E]/90 text-[#ECE5D2] px-2 py-0.5 rounded border border-[#3E4A2E]">
                  AISI 304
                </span>
              </div>

              <div className="p-5">
                <h3 className="text-lg font-bold text-[#F5F1E5] mb-1.5 group-hover:text-white transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-[#8E959B] font-mono leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* 4-Step Process Timeline */}
        <div className="bg-[#151814]/80 rounded-xl border border-[#3E4A2E] p-6 sm:p-8 mb-16">
          <div className="text-xs font-mono uppercase tracking-widest text-[#8E959B] mb-6 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#3E4A2E]" />
            <span>THE FABRICATION PROTOCOL (CONCEPT TO SITE)</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step) => (
              <div key={step.num} className="relative space-y-2 border-l border-[#3E4A2E] pl-4 lg:pl-6">
                <span className="font-mono text-2xl font-black text-[#8E959B]">
                  {step.num}
                </span>
                <h4 className="text-base font-bold text-[#F5F1E5]">
                  {step.title}
                </h4>
                <p className="text-xs text-[#ECE5D2]/75 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Custom Request Form with Drawing / Blueprint Upload */}
        <div className="bg-[#151814] rounded-xl border border-[#3E4A2E] p-6 sm:p-10 shadow-2xl">
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-mono uppercase tracking-widest text-[#ECE5D2] font-semibold block mb-1">
              DIRECT FABRICATION ESTIMATOR
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-[#F5F1E5] mb-2">
              Start a Custom Fabrication Project
            </h3>
            <p className="text-xs sm:text-sm text-[#8E959B]">
              Upload your site sketch, architectural CAD drawing, or tell us what dimensions you require. Our engineering desk provides instant feasibility and quotation.
            </p>
          </div>

          {submitted ? (
            <div className="p-8 rounded-lg bg-[#2C3229] border border-[#3E4A2E] text-center space-y-3">
              <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
              <h4 className="text-xl font-bold text-[#F5F1E5]">
                Custom Fabrication Request Received
              </h4>
              <p className="text-sm text-[#ECE5D2]/80 max-w-md mx-auto">
                Our head fabrication estimator in Karachi will review your specifications, calculate material requirements, and contact you shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmitCustomRequest} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div>
                  <label className="text-xs font-mono uppercase text-[#8E959B] block mb-1.5 font-semibold">
                    Equipment Type
                  </label>
                  <select
                    value={equipmentType}
                    onChange={(e) => setEquipmentType(e.target.value)}
                    className="w-full bg-[#20241E] border border-[#3E4A2E] rounded px-3 py-2 text-xs text-[#ECE5D2] focus:outline-none focus:border-[#ECE5D2]"
                  >
                    <option>Custom Work Table / Chef Counter</option>
                    <option>Deep Pot Wash Sink / Scullery</option>
                    <option>Wall Shelf / Mobile Speed Rack</option>
                    <option>Exhaust Canopy Hood</option>
                    <option>Drop-In Hot Bain-Marie</option>
                    <option>Bar Counter & Speed Rail</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-mono uppercase text-[#8E959B] block mb-1.5 font-semibold">
                    Target Dimensions (L × W × H mm)
                  </label>
                  <input
                    type="text"
                    value={dimensions}
                    onChange={(e) => setDimensions(e.target.value)}
                    placeholder="e.g. 2400 × 800 × 850 mm"
                    className="w-full bg-[#20241E] border border-[#3E4A2E] rounded px-3 py-2 text-xs text-[#ECE5D2] focus:outline-none focus:border-[#ECE5D2]"
                    required
                  />
                </div>

                <div>
                  <label className="text-xs font-mono uppercase text-[#8E959B] block mb-1.5 font-semibold">
                    Stainless Grade
                  </label>
                  <select
                    value={steelGrade}
                    onChange={(e) => setSteelGrade(e.target.value)}
                    className="w-full bg-[#20241E] border border-[#3E4A2E] rounded px-3 py-2 text-xs text-[#ECE5D2] focus:outline-none focus:border-[#ECE5D2]"
                  >
                    <option>AISI 304 (Food-Safe & Non-Magnetic)</option>
                    <option>AISI 316 (Marine & Acid Resistant)</option>
                    <option>AISI 201 (Economic Dry Storage)</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-mono uppercase text-[#8E959B] block mb-1.5 font-semibold">
                    Sheet Metal Thickness
                  </label>
                  <select
                    value={gauge}
                    onChange={(e) => setGauge(e.target.value)}
                    className="w-full bg-[#20241E] border border-[#3E4A2E] rounded px-3 py-2 text-xs text-[#ECE5D2] focus:outline-none focus:border-[#ECE5D2]"
                  >
                    <option>16 Gauge (1.5mm - Extra Heavy Duty)</option>
                    <option>18 Gauge (1.2mm - Commercial Standard)</option>
                    <option>14 Gauge (2.0mm - Severe Industrial)</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-mono uppercase text-[#8E959B] block mb-1.5 font-semibold">
                    Your Name & Company
                  </label>
                  <input
                    type="text"
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                    placeholder="e.g. Chef Hammad / Karachi Grill House"
                    className="w-full bg-[#20241E] border border-[#3E4A2E] rounded px-3 py-2 text-xs text-[#ECE5D2] focus:outline-none focus:border-[#ECE5D2]"
                    required
                  />
                </div>

                <div>
                  <label className="text-xs font-mono uppercase text-[#8E959B] block mb-1.5 font-semibold">
                    Phone / WhatsApp Number
                  </label>
                  <input
                    type="text"
                    value={clientPhone}
                    onChange={(e) => setClientPhone(e.target.value)}
                    placeholder="+92 300 0000000"
                    className="w-full bg-[#20241E] border border-[#3E4A2E] rounded px-3 py-2 text-xs text-[#ECE5D2] focus:outline-none focus:border-[#ECE5D2]"
                    required
                  />
                </div>
              </div>

              {/* Upload Drawing Area */}
              <div>
                <label className="text-xs font-mono uppercase text-[#8E959B] block mb-1.5 font-semibold">
                  Attach Drawing / Blueprint / Reference Photo (Optional)
                </label>
                <div className="border-2 border-dashed border-[#3E4A2E] rounded-lg p-5 text-center bg-[#20241E]/60 hover:bg-[#20241E] transition-colors relative cursor-pointer">
                  <input
                    type="file"
                    onChange={handleFileUpload}
                    className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
                    accept=".pdf,.dwg,.dxf,.jpg,.jpeg,.png"
                  />
                  <UploadCloud className="w-8 h-8 text-[#8E959B] mx-auto mb-2" />
                  <div className="text-xs font-mono text-[#ECE5D2]">
                    {fileName ? (
                      <span className="text-emerald-400 font-bold flex items-center justify-center gap-1.5">
                        <FileCheck className="w-4 h-4" /> {fileName}
                      </span>
                    ) : (
                      <span>Drop architectural drawing (PDF, DWG, PNG) or click to browse</span>
                    )}
                  </div>
                  <div className="text-[10px] text-[#8E959B] mt-1 font-mono">
                    Supported: PDF, AutoCAD DWG/DXF, JPG, PNG up to 25MB
                  </div>
                </div>
              </div>

              <div>
                <label className="text-xs font-mono uppercase text-[#8E959B] block mb-1.5 font-semibold">
                  Additional Notes (Rear Splashback, Drawers, Cutouts, etc.)
                </label>
                <textarea
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  rows={3}
                  placeholder="Mention any custom cutouts for pipes, reinforced chopping blocks, or delivery city..."
                  className="w-full bg-[#20241E] border border-[#3E4A2E] rounded px-3 py-2 text-xs text-[#ECE5D2] focus:outline-none focus:border-[#ECE5D2]"
                />
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                <button
                  type="submit"
                  className="w-full sm:w-auto px-8 py-3.5 rounded bg-[#3E4A2E] hover:bg-[#52633C] text-[#F5F1E5] font-bold text-xs uppercase tracking-wider transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Wrench className="w-4 h-4" />
                  <span>SUBMIT CUSTOM FABRICATION REQUEST</span>
                </button>

                <button
                  type="button"
                  onClick={() => openWhatsApp("Hello Kitchen Engineering, I need custom stainless-steel fabrication for my kitchen. Please connect me with a fabrication engineer.")}
                  className="text-xs font-mono text-[#8E959B] hover:text-[#F5F1E5] flex items-center gap-1.5 cursor-pointer"
                >
                  <span>Prefer discussing on WhatsApp? Click here →</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
