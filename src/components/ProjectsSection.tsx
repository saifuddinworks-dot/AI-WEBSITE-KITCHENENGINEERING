import React, { useState, useMemo } from 'react';
import { useStore } from '../context/StoreContext';
import { ProjectCaseStudy } from '../types';
import { 
  Building2, 
  MapPin, 
  Calendar, 
  ArrowRight, 
  X, 
  CheckCircle2, 
  Wrench, 
  Wind, 
  Compass, 
  Maximize2,
  Share2
} from 'lucide-react';

export const ProjectsSection: React.FC = () => {
  const { projects, selectedProject, setSelectedProject, setIsQuoteModalOpen } = useStore();

  const [activeFilter, setActiveFilter] = useState<'all' | 'restaurant' | 'cafe' | 'hotel' | 'bakery' | 'cloud-kitchen'>('all');

  const filterTabs = [
    { id: 'all', label: 'All Projects' },
    { id: 'restaurant', label: 'Restaurants' },
    { id: 'cafe', label: 'Cafés & Roasteries' },
    { id: 'hotel', label: 'Hotels & Banquets' },
    { id: 'bakery', label: 'Bakeries & Pizza' },
    { id: 'cloud-kitchen', label: 'Cloud Kitchens' }
  ];

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'all') return projects;
    return projects.filter(p => p.category === activeFilter);
  }, [projects, activeFilter]);

  return (
    <section id="projects-section" className="w-full bg-[#ECE5D2] py-20 border-b border-[#DDD4BD]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-mono text-[#3E4A2E] uppercase tracking-widest font-semibold mb-2">
              <span>07 / PORTFOLIO & COMMISSIONED SITES</span>
              <span>•</span>
              <span>PROVEN EXECUTION</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#20241E] tracking-tight mb-4">
              From Empty Space <br />
              <span className="text-[#3E4A2E]">to Working Kitchen.</span>
            </h2>
            <p className="text-base text-[#20241E]/80 leading-relaxed">
              Explore turnkey culinary engineering completed across Karachi, Lahore, Islamabad, and northern hospitality resorts. From initial structural blueprints to the first plate served.
            </p>
          </div>

          <button
            onClick={() => setIsQuoteModalOpen(true)}
            className="px-6 py-3.5 rounded bg-[#20241E] hover:bg-[#2C3229] text-[#ECE5D2] hover:text-white font-mono text-xs uppercase tracking-wider font-bold transition-all border border-[#3E4A2E] flex items-center gap-2 self-start lg:self-auto cursor-pointer"
          >
            <span>COMMISSION YOUR PROJECT</span>
            <ArrowRight className="w-4 h-4 text-emerald-400" />
          </button>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 mb-10 border-b border-[#DDD4BD]">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id as any)}
              className={`px-4 py-2 rounded-md text-xs font-mono uppercase tracking-wider whitespace-nowrap transition-all cursor-pointer ${
                activeFilter === tab.id
                  ? 'bg-[#3E4A2E] text-[#F5F1E5] font-bold shadow-xs'
                  : 'bg-[#F5F1E5] text-[#20241E] hover:bg-[#DDD4BD] border border-[#DDD4BD]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((proj) => (
            <div
              key={proj.id}
              onClick={() => setSelectedProject(proj)}
              className="bg-[#F5F1E5] rounded-xl border border-[#DDD4BD] overflow-hidden group hover:border-[#3E4A2E] transition-all shadow-sm hover:shadow-xl flex flex-col justify-between cursor-pointer"
            >
              {/* Cover Image */}
              <div className="h-60 overflow-hidden relative bg-[#20241E]/10">
                <img
                  src={proj.coverImage}
                  alt={proj.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-95"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#20241E]/70 via-transparent to-transparent" />
                
                {/* Location Badge */}
                <div className="absolute bottom-3 left-3 flex items-center gap-1.5 text-xs font-mono text-[#F5F1E5] bg-[#20241E]/85 px-2.5 py-1 rounded backdrop-blur-xs">
                  <MapPin className="w-3 h-3 text-emerald-400" />
                  <span>{proj.location}</span>
                </div>

                <div className="absolute top-3 right-3 text-[10px] font-mono uppercase tracking-wider bg-[#3E4A2E] text-[#F5F1E5] px-2 py-0.5 rounded font-bold">
                  {proj.category}
                </div>
              </div>

              {/* Body details */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between text-xs font-mono text-[#8E959B] mb-2">
                    <span>CLIENT: {proj.client}</span>
                    <span>{proj.areaSqFt} SQ FT</span>
                  </div>

                  <h3 className="text-xl font-bold text-[#20241E] group-hover:text-[#3E4A2E] transition-colors leading-snug mb-3">
                    {proj.title}
                  </h3>

                  <p className="text-xs text-[#20241E]/75 line-clamp-3 leading-relaxed mb-4">
                    {proj.overview}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#DDD4BD] flex items-center justify-between text-xs font-mono text-[#3E4A2E] font-bold group-hover:text-[#20241E]">
                  <span>Inspect Complete Case Study</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Case Study Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-[#151814]/90 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-fade-in">
          <div 
            className="bg-[#F5F1E5] text-[#20241E] w-full max-w-5xl rounded-xl border border-[#3E4A2E] shadow-2xl overflow-hidden my-6 relative flex flex-col max-h-[92vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="bg-[#20241E] text-[#ECE5D2] px-6 py-4 flex items-center justify-between border-b border-[#3E4A2E] shrink-0">
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono uppercase tracking-widest text-[#8E959B]">
                  PROJECT CASE STUDY
                </span>
                <span className="text-[#3E4A2E]">|</span>
                <span className="text-xs font-mono text-[#ECE5D2]">
                  {selectedProject.location} • {selectedProject.completedYear}
                </span>
              </div>

              <button
                onClick={() => setSelectedProject(null)}
                className="p-1.5 rounded text-[#8E959B] hover:text-white hover:bg-[#2C3229] transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="overflow-y-auto p-6 sm:p-8 space-y-8">
              {/* Title & Metadata Header */}
              <div>
                <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-[#3E4A2E] uppercase font-bold mb-2">
                  <span className="px-2.5 py-0.5 rounded bg-[#3E4A2E] text-[#F5F1E5]">{selectedProject.category}</span>
                  <span>•</span>
                  <span>CLIENT: {selectedProject.client}</span>
                  <span>•</span>
                  <span>FOOTPRINT: {selectedProject.areaSqFt} SQ FT</span>
                </div>
                <h2 className="text-2xl sm:text-4xl font-extrabold text-[#20241E] leading-tight">
                  {selectedProject.title}
                </h2>
              </div>

              {/* Gallery Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="md:col-span-2 h-72 sm:h-96 rounded-lg overflow-hidden border border-[#DDD4BD]">
                  <img src={selectedProject.coverImage} alt="Cover" className="w-full h-full object-cover" />
                </div>
                <div className="space-y-4">
                  {selectedProject.gallery.map((img, idx) => (
                    <div key={idx} className="h-34 sm:h-46 rounded-lg overflow-hidden border border-[#DDD4BD]">
                      <img src={img} alt="Gallery item" className="w-full h-full object-cover" />
                    </div>
                  ))}
                </div>
              </div>

              {/* Case Study Structured Sections (prompt layout) */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs leading-relaxed">
                {/* 1. Project Overview */}
                <div className="p-5 rounded-lg bg-[#ECE5D2] border border-[#DDD4BD] space-y-2">
                  <h4 className="text-sm font-bold text-[#20241E] uppercase font-mono border-b border-[#DDD4BD] pb-1.5 flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-[#3E4A2E]" />
                    <span>01 / Project Overview</span>
                  </h4>
                  <p className="text-[#20241E]/85">{selectedProject.overview}</p>
                </div>

                {/* 2. Client Requirement */}
                <div className="p-5 rounded-lg bg-[#ECE5D2] border border-[#DDD4BD] space-y-2">
                  <h4 className="text-sm font-bold text-[#20241E] uppercase font-mono border-b border-[#DDD4BD] pb-1.5 flex items-center gap-2">
                    <Compass className="w-4 h-4 text-[#3E4A2E]" />
                    <span>02 / Client Requirement</span>
                  </h4>
                  <p className="text-[#20241E]/85">{selectedProject.clientRequirement}</p>
                </div>

                {/* 3. Kitchen Design */}
                <div className="p-5 rounded-lg bg-[#ECE5D2] border border-[#DDD4BD] space-y-2">
                  <h4 className="text-sm font-bold text-[#20241E] uppercase font-mono border-b border-[#DDD4BD] pb-1.5 flex items-center gap-2">
                    <Maximize2 className="w-4 h-4 text-[#3E4A2E]" />
                    <span>03 / Kitchen Design & Workflow</span>
                  </h4>
                  <p className="text-[#20241E]/85">{selectedProject.kitchenDesign}</p>
                </div>

                {/* 4. Equipment Supplied */}
                <div className="p-5 rounded-lg bg-[#ECE5D2] border border-[#DDD4BD] space-y-2">
                  <h4 className="text-sm font-bold text-[#20241E] uppercase font-mono border-b border-[#DDD4BD] pb-1.5 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#3E4A2E]" />
                    <span>04 / Equipment Supplied</span>
                  </h4>
                  <ul className="space-y-1 font-mono text-[11px] list-disc pl-4 text-[#20241E]/90">
                    {selectedProject.equipmentSupplied.map((eq, i) => (
                      <li key={i}>{eq}</li>
                    ))}
                  </ul>
                </div>

                {/* 5. Custom Fabrication */}
                <div className="p-5 rounded-lg bg-[#ECE5D2] border border-[#DDD4BD] space-y-2">
                  <h4 className="text-sm font-bold text-[#20241E] uppercase font-mono border-b border-[#DDD4BD] pb-1.5 flex items-center gap-2">
                    <Wrench className="w-4 h-4 text-[#3E4A2E]" />
                    <span>05 / Custom Stainless Fabrication</span>
                  </h4>
                  <p className="text-[#20241E]/85">{selectedProject.customFabricationDetails}</p>
                </div>

                {/* 6. Ventilation */}
                <div className="p-5 rounded-lg bg-[#ECE5D2] border border-[#DDD4BD] space-y-2">
                  <h4 className="text-sm font-bold text-[#20241E] uppercase font-mono border-b border-[#DDD4BD] pb-1.5 flex items-center gap-2">
                    <Wind className="w-4 h-4 text-[#3E4A2E]" />
                    <span>06 / Ventilation & Extraction</span>
                  </h4>
                  <p className="text-[#20241E]/85">{selectedProject.ventilationSpec}</p>
                </div>
              </div>

              {/* 7 & 8 Installation & Final Result Banner */}
              <div className="p-6 rounded-lg bg-[#20241E] text-[#ECE5D2] space-y-3 border border-[#3E4A2E]">
                <div className="flex flex-wrap items-center justify-between text-xs font-mono text-[#8E959B] border-b border-[#3E4A2E]/60 pb-2">
                  <span>INSTALLATION TIMELINE: <strong className="text-[#F5F1E5]">{selectedProject.installationTimeline}</strong></span>
                  <span>STATUS: <strong className="text-emerald-400">FULLY COMMISSIONED & OPERATIONAL</strong></span>
                </div>
                <div>
                  <div className="text-xs font-mono text-[#ECE5D2] font-semibold mb-1">07 / FINAL OUTCOME:</div>
                  <p className="text-sm text-[#ECE5D2]/90 leading-relaxed font-normal">
                    {selectedProject.finalResult}
                  </p>
                </div>
              </div>

              {/* Call to action within modal */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                <button
                  onClick={() => {
                    setSelectedProject(null);
                    setIsQuoteModalOpen(true);
                  }}
                  className="w-full sm:w-auto px-8 py-3.5 rounded bg-[#3E4A2E] hover:bg-[#52633C] text-[#F5F1E5] font-bold text-xs uppercase tracking-wider transition-all cursor-pointer"
                >
                  REQUEST CONSULTATION FOR A SIMILAR PROJECT
                </button>

                <button
                  onClick={() => setSelectedProject(null)}
                  className="text-xs font-mono text-[#8E959B] hover:text-[#20241E] cursor-pointer"
                >
                  Back to Portfolio Directory
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
