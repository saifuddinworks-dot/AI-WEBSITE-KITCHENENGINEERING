import React, { useEffect } from 'react';
import { StoreProvider, useStore } from './context/StoreContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { CategoryStrip } from './components/CategoryStrip';
import { EngineeredSolutions } from './components/EngineeredSolutions';
import { ProductCatalog } from './components/ProductCatalog';
import { FabricationSection } from './components/FabricationSection';
import { VentilationSection } from './components/VentilationSection';
import { CoffeeSection } from './components/CoffeeSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ProcessTimeline } from './components/ProcessTimeline';
import { WhyUs } from './components/WhyUs';
import { IndustriesSection } from './components/IndustriesSection';
import { BrandsWall } from './components/BrandsWall';
import { Footer } from './components/Footer';
import { FloatingActions } from './components/FloatingActions';
import { ProductDetailModal } from './components/ProductDetailModal';
import { QuoteModal } from './components/QuoteModal';
import { SearchModal } from './components/SearchModal';
import { ServicesView } from './components/ServicesView';
import { AdminView } from './components/AdminView';
import { TechnicalFaqSection } from './components/TechnicalFaqSection';

const MainContent: React.FC = () => {
  const { currentView } = useStore();

  // Scroll to top whenever view changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentView]);

  return (
    <div className="min-h-screen w-full max-w-full overflow-x-hidden flex flex-col bg-[#ECE5D2] text-[#20241E] selection:bg-[#3E4A2E] selection:text-white">
      {/* Persistent Architectural Navbar */}
      <Navbar />

      {/* Main View Router */}
      <main className="flex-1">
        {currentView === 'home' && (
          <>
            <Hero />
            <EngineeredSolutions />
            <ProductCatalog />
            <FabricationSection />
            <VentilationSection />
            <CoffeeSection />
            <ProjectsSection />
            <ProcessTimeline />
            <WhyUs />
            <IndustriesSection />
            <TechnicalFaqSection />
            <BrandsWall />
          </>
        )}

        {currentView === 'catalog' && (
          <>
            <CategoryStrip />
            <ProductCatalog />
          </>
        )}

        {currentView === 'fabrication' && (
          <>
            <FabricationSection />
          </>
        )}

        {currentView === 'ventilation' && (
          <>
            <VentilationSection />
          </>
        )}

        {currentView === 'coffee' && (
          <>
            <CoffeeSection />
            <ProductCatalog />
          </>
        )}

        {currentView === 'projects' && (
          <>
            <ProjectsSection />
          </>
        )}

        {currentView === 'services' && (
          <>
            <ServicesView />
          </>
        )}

        {currentView === 'admin' && (
          <>
            <AdminView />
          </>
        )}
      </main>

      {/* Persistent Architectural Deep Charcoal Footer */}
      <Footer />

      {/* Floating Action Bar (WhatsApp, Quick Quote, Scroll Top) */}
      <FloatingActions />

      {/* Global Interactive Technical Modals */}
      <ProductDetailModal />
      <QuoteModal />
      <SearchModal />
    </div>
  );
};

export default function App() {
  return (
    <StoreProvider>
      <MainContent />
    </StoreProvider>
  );
}
