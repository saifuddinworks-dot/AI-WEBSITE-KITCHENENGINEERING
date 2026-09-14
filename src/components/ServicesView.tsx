import React from 'react';
import { useStore } from '../context/StoreContext';
import { 
  Compass, 
  Wrench, 
  ShieldCheck, 
  Clock, 
  FileSpreadsheet, 
  ArrowRight, 
  Flame, 
  CheckCircle2, 
  Layers 
} from 'lucide-react';

export const ServicesView: React.FC = () => {
  const { setIsQuoteModalOpen, openWhatsApp } = useStore();

  const services = [
    {
      title: 'AutoCAD 2D & 3D Kitchen Architecture',
      code: 'SRV-01',
      desc: 'HACCP-compliant workflow zoning, station ergonomics, equipment footprint layout, and precise gas/electric/water MEP drawings for contractors.',
      features: ['2D AutoCAD Equipment Schedule', '3D Photorealistic Renderings', 'Gas BTU & Electrical KW Load Schedules', 'Drainage & Water Line Coordinates']
    },
    {
      title: 'Turnkey Commercial Equipment Sourcing',
      code: 'SRV-02',
      desc: 'Official direct importation and technical supply of commercial cooking ranges, combi ovens, refrigeration, fryers, espresso machines, and dishwashers.',
      features: ['Tropicalized +43°C Rated Units', 'Direct Factory Price Advantage', 'Comprehensive Spare Parts Stored in Pakistan', 'Custom Voltage / Gas Pressure Verification']
    },
    {
      title: 'Bespoke AISI 304 Stainless Steel Fabrication',
      code: 'SRV-03',
      desc: 'In-house metal manufacturing of custom chef worktables, sink units, exhaust canopies, Bain-Marie stations, speed racks, and bar counters.',
      features: ['Food-Grade Non-Magnetic AISI 304', 'Laser Cut & TIG Welded Hygiene Seams', 'Custom Millimeter Dimensions to Fit Site Oddities', 'Marine Dampened Sound-Deadening Substrates']
    },
    {
      title: 'Exhaust & Aerodynamic Ventilation Engineering',
      code: 'SRV-04',
      desc: 'Commercial kitchen canopy hoods, grease baffle filtration, high-static centrifugal blowers, fresh air make-up systems, and VFD energy savings.',
      features: ['NFPA 96 & ASHRAE Compliant CFM Sizing', 'Grease-Tight 1.2mm Welded Duct Runs', 'Inverter VFD Variable Airflow Controls', 'Mall Ecology Electrostatic Scrubbers']
    },
    {
      title: 'Turnkey Commissioning & On-Site Rigging',
      code: 'SRV-05',
      desc: 'Professional crane rigging, physical leveling with stainless bullet feet, gas pressure calibration, electrical phase balancing, and chef crew training.',
      features: ['Certified Gas Leak & Pressure Testing', 'CFM Air Balancing & Capture Rate Checks', 'Kitchen Staff Operating & Maintenance Training', 'Formal Engineering Handover Checklist']
    },
    {
      title: 'Annual Maintenance Contracts (AMC) & Emergency Service',
      code: 'SRV-06',
      desc: 'Scheduled preventative quarterly maintenance checks, ultrasonic gas burner cleaning, refrigeration coil descaling, and 24/7 rapid breakdown response.',
      features: ['4-Hour Emergency Response in Karachi, Lahore, Islamabad', 'Quarterly Preventative Health Audits', 'Discounted Genuine OEM Spare Parts', 'Priority Technician Dispatch']
    }
  ];

  return (
    <div className="w-full bg-[#ECE5D2] py-16 border-b border-[#DDD4BD]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 text-xs font-mono text-[#3E4A2E] uppercase tracking-widest font-semibold mb-2">
            <span>ENGINEERING SERVICES & TURNKEY CONTRACTING</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#20241E] tracking-tight mb-4">
            Commercial Kitchen Engineering Services
          </h1>
          <p className="text-base sm:text-lg text-[#20241E]/80 leading-relaxed">
            From initial concept CAD drafting and MEP utility schedules to certified stainless steel fabrication, site commissioning, and 24/7 preventative maintenance contracts.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {services.map((srv) => (
            <div
              key={srv.code}
              className="bg-[#F5F1E5] rounded-xl border border-[#DDD4BD] p-6 hover:border-[#3E4A2E] transition-all shadow-xs hover:shadow-md flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-[#DDD4BD] mb-4">
                  <span className="font-mono text-xs font-bold text-[#8E959B]">{srv.code}</span>
                  <span className="text-[10px] font-mono text-[#3E4A2E] uppercase tracking-wider font-semibold">TURNKEY</span>
                </div>

                <h3 className="text-lg font-bold text-[#20241E] mb-2">
                  {srv.title}
                </h3>

                <p className="text-xs text-[#20241E]/75 leading-relaxed mb-4">
                  {srv.desc}
                </p>

                <div className="space-y-1.5 bg-[#ECE5D2]/70 p-3 rounded-lg border border-[#DDD4BD] mb-6">
                  {srv.features.map((feat, i) => (
                    <div key={i} className="flex items-center gap-2 text-[11px] font-mono text-[#20241E]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#3E4A2E] shrink-0" />
                      <span className="truncate">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={() => setIsQuoteModalOpen(true)}
                className="w-full py-2.5 rounded bg-[#20241E] hover:bg-[#3E4A2E] text-[#ECE5D2] hover:text-white text-xs font-mono font-medium transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Request Service Proposal</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
        </div>

        {/* AMC Contract Banner */}
        <div className="bg-[#20241E] rounded-xl border border-[#3E4A2E] p-8 text-[#ECE5D2] flex flex-col lg:flex-row items-center justify-between gap-8 shadow-xl">
          <div className="space-y-2 max-w-2xl">
            <span className="text-xs font-mono uppercase tracking-widest text-[#ECE5D2] font-semibold">
              ANNUAL MAINTENANCE CONTRACT (AMC)
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#F5F1E5]">
              Keep Your Kitchen Operational 365 Days a Year
            </h2>
            <p className="text-xs sm:text-sm text-[#8E959B] leading-relaxed">
              Kitchen downtime during dinner rush costs restaurants tens of thousands of rupees per hour. Protect your business with priority breakdown dispatch, routine preventative visits, and genuine replacement parts.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
            <button
              onClick={() => openWhatsApp("Hello Kitchen Engineering, I want to discuss an Annual Maintenance Contract (AMC) for our commercial kitchen.")}
              className="px-6 py-3.5 rounded bg-[#2C3229] hover:bg-[#3E4A2E] text-[#ECE5D2] hover:text-white text-xs font-mono font-bold uppercase tracking-wider transition-colors border border-[#3E4A2E] cursor-pointer"
            >
              Discuss AMC on WhatsApp
            </button>
            <button
              onClick={() => setIsQuoteModalOpen(true)}
              className="px-6 py-3.5 rounded bg-[#3E4A2E] hover:bg-[#52633C] text-[#F5F1E5] text-xs font-mono font-bold uppercase tracking-wider transition-colors shadow-md cursor-pointer"
            >
              Request Maintenance Quote
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
