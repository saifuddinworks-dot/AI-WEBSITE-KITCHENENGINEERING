import React, { useState } from 'react';
import { useStore } from '../context/StoreContext';
import { 
  Wind, 
  ArrowRight, 
  Flame, 
  Fan, 
  Activity, 
  ShieldCheck, 
  CheckCircle2, 
  Gauge, 
  Sparkles,
  Sliders
} from 'lucide-react';

export const VentilationSection: React.FC = () => {
  const { setIsQuoteModalOpen, openWhatsApp } = useStore();

  // Interactive CFM / Exhaust Estimator
  const [hoodLengthFt, setHoodLengthFt] = useState(10);
  const [applianceType, setApplianceType] = useState<'heavy' | 'medium' | 'light'>('heavy');

  // Rule of thumb CFM calculations (NFPA 96 / ASHRAE guidelines)
  // Heavy cooking (fryers, charbroilers, woks): ~400 CFM per linear foot of hood
  // Medium cooking (ranges, griddles, ovens): ~300 CFM per linear foot
  // Light cooking (steamers, soup kettles): ~200 CFM per linear foot
  const cfmMultiplier = applianceType === 'heavy' ? 400 : applianceType === 'medium' ? 300 : 200;
  const estimatedExhaustCFM = hoodLengthFt * cfmMultiplier;
  const recommendedFreshAirCFM = Math.round(estimatedExhaustCFM * 0.85); // 80-85% make-up air to prevent negative building pressure
  const estimatedMotorHP = (estimatedExhaustCFM / 1100).toFixed(1);

  return (
    <section id="ventilation-section" className="w-full bg-[#151814] text-[#ECE5D2] py-20 border-b border-[#3E4A2E] relative overflow-hidden">
      {/* Dynamic technical airflow grid background */}
      <div className="absolute inset-0 bg-arch-grid-dark opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 text-xs font-mono text-[#8E959B] uppercase tracking-widest mb-2">
            <span className="text-[#ECE5D2] font-bold">05 / THERMAL & AIR ENGINEERING</span>
            <span>•</span>
            <span>NFPA 96 COMPLIANT</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#F5F1E5] tracking-tight mb-4">
            Airflow Designed <br />
            <span className="text-[#ECE5D2]">for Performance.</span>
          </h2>
          <p className="text-base sm:text-lg text-[#ECE5D2]/80 leading-relaxed">
            In Pakistani summers reaching 45°C ambient temperatures, improper ventilation creates unbearable kitchens and burns motors. We engineer balanced aerodynamic exhaust, certified grease extraction, and conditioned fresh air make-up.
          </p>
        </div>

        {/* Technical Flow Diagram (Kitchen Hood → Ducting → Exhaust Fan → Fresh Air Balance) */}
        <div className="bg-[#20241E] rounded-xl border border-[#3E4A2E] p-6 sm:p-8 mb-14 shadow-xl">
          <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#3E4A2E]/50">
            <div className="text-xs font-mono uppercase tracking-wider text-[#8E959B] flex items-center gap-2">
              <Activity className="w-4 h-4 text-[#3E4A2E]" />
              <span>AERODYNAMIC PRESSURE & EXTRACTION LIFECYCLE</span>
            </div>
            <span className="text-[11px] font-mono text-[#ECE5D2]">Hygienic Capture Ratio: 98.4%</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative">
            {/* Step 1: Hood */}
            <div className="p-5 rounded-lg bg-[#151814] border border-[#3E4A2E] flex flex-col justify-between relative group">
              <div>
                <div className="text-xs font-mono text-[#8E959B] mb-2">STAGE 01</div>
                <h4 className="text-base font-bold text-[#F5F1E5] flex items-center gap-2 mb-2">
                  <Flame className="w-4 h-4 text-amber-500" />
                  <span>Kitchen Hood</span>
                </h4>
                <p className="text-xs text-[#ECE5D2]/75 leading-relaxed">
                  UL-standard stainless baffle filters extract 95% of airborne grease vapors directly at cooking level.
                </p>
              </div>
              <div className="mt-4 pt-2 border-t border-[#3E4A2E]/40 font-mono text-[10px] text-[#8E959B]">
                VELOCITY: 50–75 FPM CAPTURE
              </div>
            </div>

            {/* Step 2: Ducting */}
            <div className="p-5 rounded-lg bg-[#151814] border border-[#3E4A2E] flex flex-col justify-between relative group">
              <div>
                <div className="text-xs font-mono text-[#8E959B] mb-2">STAGE 02</div>
                <h4 className="text-base font-bold text-[#F5F1E5] flex items-center gap-2 mb-2">
                  <Wind className="w-4 h-4 text-sky-400" />
                  <span>Sealed Ducting</span>
                </h4>
                <p className="text-xs text-[#ECE5D2]/75 leading-relaxed">
                  Fire-rated 1.2mm galvanized or black-iron welded grease-tight duct runs with access cleanout doors.
                </p>
              </div>
              <div className="mt-4 pt-2 border-t border-[#3E4A2E]/40 font-mono text-[10px] text-[#8E959B]">
                DUCT SPEED: 1500–1800 FPM
              </div>
            </div>

            {/* Step 3: Exhaust Fan */}
            <div className="p-5 rounded-lg bg-[#151814] border border-[#3E4A2E] flex flex-col justify-between relative group">
              <div>
                <div className="text-xs font-mono text-[#8E959B] mb-2">STAGE 03</div>
                <h4 className="text-base font-bold text-[#F5F1E5] flex items-center gap-2 mb-2">
                  <Fan className="w-4 h-4 text-emerald-400" />
                  <span>Exhaust Blower</span>
                </h4>
                <p className="text-xs text-[#ECE5D2]/75 leading-relaxed">
                  High-static backward-curved centrifugal impeller powered by inverter VFD to handle vertical rise.
                </p>
              </div>
              <div className="mt-4 pt-2 border-t border-[#3E4A2E]/40 font-mono text-[10px] text-[#8E959B]">
                STATIC: 400–750 PASCALS
              </div>
            </div>

            {/* Step 4: Fresh Air Balance */}
            <div className="p-5 rounded-lg bg-[#151814] border border-[#3E4A2E] flex flex-col justify-between relative group">
              <div>
                <div className="text-xs font-mono text-[#8E959B] mb-2">STAGE 04</div>
                <h4 className="text-base font-bold text-[#F5F1E5] flex items-center gap-2 mb-2">
                  <Gauge className="w-4 h-4 text-[#ECE5D2]" />
                  <span>Fresh Air Balance</span>
                </h4>
                <p className="text-xs text-[#ECE5D2]/75 leading-relaxed">
                  85% filtered replacement make-up air prevents vacuum slam doors and cools chef prep zones.
                </p>
              </div>
              <div className="mt-4 pt-2 border-t border-[#3E4A2E]/40 font-mono text-[10px] text-[#8E959B]">
                PRESSURE: -0.02 INCH WG (NEUTRAL)
              </div>
            </div>
          </div>
        </div>

        {/* 2-Column: Technical Ventilation Capabilities + Interactive CFM Estimator */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-14">
          {/* Left Capabilities Column (7 cols) */}
          <div className="lg:col-span-7 space-y-4">
            <h3 className="text-xl font-bold text-[#F5F1E5] mb-2">
              Turnkey Commercial Air Handling Architecture
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-lg bg-[#20241E] border border-[#3E4A2E] space-y-1.5">
                <div className="text-xs font-mono text-[#ECE5D2] font-semibold">VFD AUTOMATION</div>
                <h5 className="text-sm font-bold text-[#F5F1E5]">Energy-Saving Inverters</h5>
                <p className="text-xs text-[#ECE5D2]/70 leading-relaxed">
                  Modulates fan RPM based on cooking heat sensors, slashing commercial kitchen electricity bills by up to 40%.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-[#20241E] border border-[#3E4A2E] space-y-1.5">
                <div className="text-xs font-mono text-[#ECE5D2] font-semibold">ODOR SCRUBBERS</div>
                <h5 className="text-sm font-bold text-[#F5F1E5]">Ecology & Carbon Units</h5>
                <p className="text-xs text-[#ECE5D2]/70 leading-relaxed">
                  Electrostatic precipitators (ESP) and activated carbon banks for mall food courts with strict emission rules.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-[#20241E] border border-[#3E4A2E] space-y-1.5">
                <div className="text-xs font-mono text-[#ECE5D2] font-semibold">GREASE BAFFLE CANOPIES</div>
                <h5 className="text-sm font-bold text-[#F5F1E5]">Fire-Safe Construction</h5>
                <p className="text-xs text-[#ECE5D2]/70 leading-relaxed">
                  Interlocking stainless baffles act as an engineered flame barrier to prevent duct flash fires.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-[#20241E] border border-[#3E4A2E] space-y-1.5">
                <div className="text-xs font-mono text-[#ECE5D2] font-semibold">MAKE-UP AIR CONDITIONING</div>
                <h5 className="text-sm font-bold text-[#F5F1E5]">Chef Climate Comfort</h5>
                <p className="text-xs text-[#ECE5D2]/70 leading-relaxed">
                  Pre-cooled or evaporative treated fresh air manifolds directed onto cook stations for human comfort.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive CFM & Static Load Quick Estimator (5 cols) */}
          <div className="lg:col-span-5 bg-[#20241E] rounded-xl border border-[#3E4A2E] p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-[#3E4A2E]/50 mb-4">
                <span className="text-xs font-mono uppercase tracking-wider text-[#8E959B] font-semibold">
                  QUICK VENTILATION ESTIMATOR
                </span>
                <Sliders className="w-4 h-4 text-[#3E4A2E]" />
              </div>

              {/* Slider for Hood Length */}
              <div className="space-y-2 mb-4">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-[#8E959B]">Cooking Hood Length:</span>
                  <strong className="text-[#F5F1E5] text-sm">{hoodLengthFt} Feet ({Math.round(hoodLengthFt * 0.3048 * 10) / 10} m)</strong>
                </div>
                <input
                  type="range"
                  min="4"
                  max="30"
                  step="1"
                  value={hoodLengthFt}
                  onChange={(e) => setHoodLengthFt(Number(e.target.value))}
                  className="w-full accent-[#3E4A2E] cursor-pointer"
                />
              </div>

              {/* Cooking intensity type */}
              <div className="space-y-1.5 mb-6">
                <label className="text-xs font-mono text-[#8E959B]">Appliance Heat Load:</label>
                <div className="grid grid-cols-3 gap-2 text-xs font-mono">
                  <button
                    type="button"
                    onClick={() => setApplianceType('heavy')}
                    className={`py-1.5 rounded border text-center transition-all ${
                      applianceType === 'heavy' ? 'bg-[#3E4A2E] text-white border-[#3E4A2E] font-bold' : 'bg-[#151814] text-[#8E959B] border-[#3E4A2E]/50'
                    }`}
                  >
                    Heavy (Fryer/Char)
                  </button>
                  <button
                    type="button"
                    onClick={() => setApplianceType('medium')}
                    className={`py-1.5 rounded border text-center transition-all ${
                      applianceType === 'medium' ? 'bg-[#3E4A2E] text-white border-[#3E4A2E] font-bold' : 'bg-[#151814] text-[#8E959B] border-[#3E4A2E]/50'
                    }`}
                  >
                    Medium (Ranges)
                  </button>
                  <button
                    type="button"
                    onClick={() => setApplianceType('light')}
                    className={`py-1.5 rounded border text-center transition-all ${
                      applianceType === 'light' ? 'bg-[#3E4A2E] text-white border-[#3E4A2E] font-bold' : 'bg-[#151814] text-[#8E959B] border-[#3E4A2E]/50'
                    }`}
                  >
                    Light (Ovens/Soup)
                  </button>
                </div>
              </div>

              {/* Calculated Outputs */}
              <div className="p-4 rounded bg-[#151814] border border-[#3E4A2E] space-y-2 font-mono text-xs mb-6">
                <div className="flex items-center justify-between">
                  <span className="text-[#8E959B]">Estimated Exhaust CFM:</span>
                  <strong className="text-[#ECE5D2] text-sm font-bold">{estimatedExhaustCFM.toLocaleString()} CFM</strong>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[#8E959B]">Required Fresh Air Make-Up:</span>
                  <strong className="text-sky-400 text-sm font-bold">{recommendedFreshAirCFM.toLocaleString()} CFM</strong>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[#8E959B]">Estimated Blower Motor:</span>
                  <strong className="text-[#ECE5D2] text-sm font-bold">~{estimatedMotorHP} HP Centrifugal</strong>
                </div>
              </div>
            </div>

            <button
              onClick={() => openWhatsApp(`Hello Kitchen Engineering, I need a ventilation survey for a ${hoodLengthFt}-foot commercial kitchen hood line (~${estimatedExhaustCFM} CFM).`)}
              className="w-full py-3 rounded bg-[#3E4A2E] hover:bg-[#52633C] text-[#F5F1E5] font-bold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2 cursor-pointer"
            >
              <Wind className="w-4 h-4" />
              <span>REQUEST ON-SITE VENTILATION SURVEY</span>
            </button>
          </div>
        </div>

        {/* Bottom CTA Callout */}
        <div className="text-center">
          <button
            onClick={() => setIsQuoteModalOpen(true)}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-md bg-[#3E4A2E] hover:bg-[#52633C] text-[#F5F1E5] font-bold text-xs uppercase tracking-wider transition-all shadow-lg cursor-pointer"
          >
            <span>REQUEST A VENTILATION SURVEY & DUCT DESIGN</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
