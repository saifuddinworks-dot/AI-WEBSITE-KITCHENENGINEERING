import React, { createContext, useContext, useState, useEffect } from 'react';
import { Product, ProjectCaseStudy, QuoteRequest, BrandPartner, ProductCategory } from '../types';
import { INITIAL_PRODUCTS } from '../data/products';
import { CATEGORIES_DATA, CategoryInfo } from '../data/categories';
import { BRANDS_DATA } from '../data/brands';
import { PROJECTS_DATA } from '../data/projects';

export interface CompanyInfo {
  name: string;
  phone: string;
  phoneSecondary: string;
  whatsapp: string;
  whatsappDisplay: string;
  whatsappLink: string;
  email: string;
  emailSecondary: string;
  website: string;
  addressKarachi: string;
  addressLahore: string;
  addressIslamabad: string;
  companyEntity: string;
  pecLicense: string;
  srbRegistration: string;
  experience: string;
  workingHours: string;
  logoUrl?: string;
}

interface StoreContextType {
  products: Product[];
  categories: CategoryInfo[];
  brands: BrandPartner[];
  projects: ProjectCaseStudy[];
  quotes: QuoteRequest[];
  companyInfo: CompanyInfo;
  
  // Navigation & Modals
  currentView: string;
  setCurrentView: (view: string) => void;
  selectedCategorySlug: string | null;
  setSelectedCategorySlug: (slug: string | null) => void;
  
  // Selected Item Modals
  selectedProduct: Product | null;
  setSelectedProduct: (product: Product | null) => void;
  selectedProject: ProjectCaseStudy | null;
  setSelectedProject: (project: ProjectCaseStudy | null) => void;
  
  // Modals visibility
  isQuoteModalOpen: boolean;
  setIsQuoteModalOpen: (open: boolean) => void;
  quoteTargetProduct: string | null;
  setQuoteTargetProduct: (productName: string | null) => void;
  isSearchModalOpen: boolean;
  setIsSearchModalOpen: (open: boolean) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  openSearchWithQuery: (query?: string) => void;
  isAdminModalOpen: boolean;
  setIsAdminModalOpen: (open: boolean) => void;
  
  isAdminAuthenticated: boolean;
  loginAdmin: (pass: string) => boolean;
  logoutAdmin: () => void;
  
  // Actions
  addProduct: (product: Product) => void;
  updateProduct: (product: Product) => void;
  deleteProduct: (id: string) => void;
  bulkImportProducts: (imported: Product[]) => void;
  addCategory: (cat: CategoryInfo) => void;
  updateCategory: (cat: CategoryInfo) => void;
  deleteCategory: (id: ProductCategory) => void;
  updateBrand: (brand: BrandPartner) => void;
  deleteBrand: (id: string) => void;
  addQuoteRequest: (quote: Omit<QuoteRequest, 'id' | 'createdAt' | 'status'>) => QuoteRequest;
  updateQuoteStatus: (id: string, status: QuoteRequest['status']) => void;
  updateCompanyInfo: (info: Partial<CompanyInfo>) => void;
  addProject: (project: ProjectCaseStudy) => void;
  addBrand: (brand: BrandPartner) => void;
  
  // WhatsApp helper
  openWhatsApp: (customMessage?: string) => void;
}

const DEFAULT_COMPANY_INFO: CompanyInfo = {
  name: 'KITCHEN ENGINEERING',
  phone: '+92 315 3000476',
  phoneSecondary: '+92 315 3000478',
  whatsapp: '+92 315 3000476',
  whatsappDisplay: '+92 315 3000476',
  whatsappLink: 'https://wa.me/message/3TIAO6XE5UUYO1',
  email: 'info@kitchenengineering.com.pk',
  emailSecondary: 'info@kitchenengineering.org',
  website: 'https://kitchenengineering.org/',
  addressKarachi: '3rd Zamzama Commercial Lane, DHA Phase 5 Defence V Karachi, 75600, Pakistan',
  addressLahore: 'Industrial Estate, Gulberg III, Lahore (Display Showroom)',
  addressIslamabad: 'Sector I-9/2, Industrial Area, Islamabad (Regional Support)',
  companyEntity: 'D.A.T CONTRACTOR BUILDERS & GENERAL SUPPLIERS',
  pecLicense: 'PEC License No: 76516 (Category C6)',
  srbRegistration: 'SRB & GST (FBR) Registered',
  experience: '21 Years of Engineering Excellence',
  workingHours: 'Monday – Saturday: 9:00 AM – 8:00 PM PKT (24/7 Breakdown Hotline)',
  logoUrl: '/logo.png'
};

const StoreContext = createContext<StoreContextType | undefined>(undefined);

export const StoreProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Load products from localStorage or defaults
  const [products, setProducts] = useState<Product[]>(() => {
    try {
      const saved = localStorage.getItem('ke_products');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) return parsed;
      }
    } catch (e) {
      console.error(e);
    }
    return INITIAL_PRODUCTS;
  });

  // Categories
  const [categories, setCategories] = useState<CategoryInfo[]>(() => {
    try {
      const saved = localStorage.getItem('ke_categories');
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.error(e);
    }
    return CATEGORIES_DATA;
  });

  // Brands
  const [brands, setBrands] = useState<BrandPartner[]>(() => {
    try {
      const saved = localStorage.getItem('ke_brands');
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.error(e);
    }
    return BRANDS_DATA;
  });

  // Admin Auth
  const [isAdminAuthenticated, setIsAdminAuthenticated] = useState<boolean>(() => {
    try {
      return localStorage.getItem('ke_admin_auth') === 'true';
    } catch (e) {
      return false;
    }
  });

  const loginAdmin = (pass: string) => {
    if (pass === 'kitchen2026' || pass === 'admin123' || pass === 'admin') {
      setIsAdminAuthenticated(true);
      localStorage.setItem('ke_admin_auth', 'true');
      return true;
    }
    return false;
  };

  const logoutAdmin = () => {
    setIsAdminAuthenticated(false);
    localStorage.removeItem('ke_admin_auth');
  };

  // Projects
  const [projects, setProjects] = useState<ProjectCaseStudy[]>(() => {
    try {
      const saved = localStorage.getItem('ke_projects');
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.error(e);
    }
    return PROJECTS_DATA;
  });

  // Quotes
  const [quotes, setQuotes] = useState<QuoteRequest[]>(() => {
    try {
      const saved = localStorage.getItem('ke_quotes');
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.error(e);
    }
    return [
      {
        id: 'KE-RFQ-2026-9102',
        createdAt: '2026-09-12T14:30:00Z',
        name: 'Tariq Mehmood',
        businessName: 'Lahore Smokehouse Bistro',
        phone: '+92 321 4455889',
        email: 'tariq@lahoresmokehouse.pk',
        city: 'Lahore',
        businessType: 'Restaurant',
        projectType: 'Complete Turnkey Kitchen',
        requiredEquipment: '6-Burner Range, Double Fryers, 1400L Upright Chiller, Custom 304 Tables',
        estimatedBudget: 'PKR 4.5M – 6.0M',
        projectTimeline: '1 Month',
        message: 'Looking for turnkey commercial kitchen setup for a 120-seat steakhouse in Gulberg.',
        status: 'In Review'
      }
    ];
  });

  // Company Info
  const [companyInfo, setCompanyInfo] = useState<CompanyInfo>(() => {
    try {
      const saved = localStorage.getItem('ke_company_info');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (!parsed.addressKarachi?.includes('Zamzama') || parsed.phone !== '+92 315 3000476') {
          const updated = { ...DEFAULT_COMPANY_INFO, ...parsed, ...DEFAULT_COMPANY_INFO };
          localStorage.setItem('ke_company_info', JSON.stringify(updated));
          return updated;
        }
        return { ...DEFAULT_COMPANY_INFO, ...parsed };
      }
    } catch (e) {
      console.error(e);
    }
    return DEFAULT_COMPANY_INFO;
  });

  // UI state
  const [currentView, setCurrentView] = useState<string>('home');
  const [selectedCategorySlug, setSelectedCategorySlug] = useState<string | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [selectedProject, setSelectedProject] = useState<ProjectCaseStudy | null>(null);
  
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState<boolean>(false);
  const [quoteTargetProduct, setQuoteTargetProduct] = useState<string | null>(null);
  const [isSearchModalOpen, setIsSearchModalOpen] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [isAdminModalOpen, setIsAdminModalOpen] = useState<boolean>(false);

  const openSearchWithQuery = (query?: string) => {
    if (query !== undefined) {
      setSearchQuery(query);
    }
    setIsSearchModalOpen(true);
  };

  // Sync state to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('ke_products', JSON.stringify(products));
    } catch (e) {
      console.error(e);
    }
  }, [products]);

  useEffect(() => {
    try {
      localStorage.setItem('ke_quotes', JSON.stringify(quotes));
    } catch (e) {
      console.error(e);
    }
  }, [quotes]);

  useEffect(() => {
    try {
      localStorage.setItem('ke_company_info', JSON.stringify(companyInfo));
    } catch (e) {
      console.error(e);
    }
  }, [companyInfo]);

  useEffect(() => {
    try {
      localStorage.setItem('ke_categories', JSON.stringify(categories));
    } catch (e) {
      console.error(e);
    }
  }, [categories]);

  useEffect(() => {
    try {
      localStorage.setItem('ke_brands', JSON.stringify(brands));
    } catch (e) {
      console.error(e);
    }
  }, [brands]);

  useEffect(() => {
    try {
      localStorage.setItem('ke_projects', JSON.stringify(projects));
    } catch (e) {
      console.error(e);
    }
  }, [projects]);

  const addProduct = (product: Product) => {
    setProducts(prev => [product, ...prev]);
  };

  const updateProduct = (updated: Product) => {
    setProducts(prev => prev.map(p => p.id === updated.id ? updated : p));
  };

  const deleteProduct = (id: string) => {
    setProducts(prev => prev.filter(p => p.id !== id));
  };

  const bulkImportProducts = (newProducts: Product[]) => {
    setProducts(prev => [...newProducts, ...prev]);
  };

  const addCategory = (cat: CategoryInfo) => {
    setCategories(prev => [...prev, cat]);
  };

  const updateCategory = (cat: CategoryInfo) => {
    setCategories(prev => prev.map(c => c.id === cat.id ? cat : c));
  };

  const deleteCategory = (id: ProductCategory) => {
    setCategories(prev => prev.filter(c => c.id !== id));
  };

  const updateBrand = (brand: BrandPartner) => {
    setBrands(prev => prev.map(b => b.id === brand.id ? brand : b));
  };

  const deleteBrand = (id: string) => {
    setBrands(prev => prev.filter(b => b.id !== id));
  };

  const addQuoteRequest = (quoteData: Omit<QuoteRequest, 'id' | 'createdAt' | 'status'>): QuoteRequest => {
    const randomCode = Math.floor(1000 + Math.random() * 9000);
    const newQuote: QuoteRequest = {
      ...quoteData,
      id: `KE-RFQ-2026-${randomCode}`,
      createdAt: new Date().toISOString(),
      status: 'New'
    };
    setQuotes(prev => [newQuote, ...prev]);
    return newQuote;
  };

  const updateQuoteStatus = (id: string, status: QuoteRequest['status']) => {
    setQuotes(prev => prev.map(q => q.id === id ? { ...q, status } : q));
  };

  const updateCompanyInfo = (info: Partial<CompanyInfo>) => {
    setCompanyInfo(prev => ({ ...prev, ...info }));
  };

  const addProject = (project: ProjectCaseStudy) => {
    setProjects(prev => [project, ...prev]);
  };

  const addBrand = (brand: BrandPartner) => {
    setBrands(prev => [...prev, brand]);
  };

  const openWhatsApp = (customMessage?: string) => {
    const baseUrl = companyInfo.whatsappLink || 'https://wa.me/message/3TIAO6XE5UUYO1';
    const text = customMessage 
      ? encodeURIComponent(customMessage)
      : encodeURIComponent("Hello Kitchen Engineering, I am looking for commercial kitchen equipment and turnkey solutions. Please assist me.");
    const url = customMessage ? `${baseUrl}?text=${text}` : baseUrl;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <StoreContext.Provider
      value={{
        products,
        categories,
        brands,
        projects,
        quotes,
        companyInfo,
        currentView,
        setCurrentView,
        selectedCategorySlug,
        setSelectedCategorySlug,
        selectedProduct,
        setSelectedProduct,
        selectedProject,
        setSelectedProject,
        isQuoteModalOpen,
        setIsQuoteModalOpen,
        quoteTargetProduct,
        setQuoteTargetProduct,
        isSearchModalOpen,
        setIsSearchModalOpen,
        searchQuery,
        setSearchQuery,
        openSearchWithQuery,
        isAdminModalOpen,
        setIsAdminModalOpen,
        isAdminAuthenticated,
        loginAdmin,
        logoutAdmin,
        addProduct,
        updateProduct,
        deleteProduct,
        bulkImportProducts,
        addCategory,
        updateCategory,
        deleteCategory,
        updateBrand,
        deleteBrand,
        addQuoteRequest,
        updateQuoteStatus,
        updateCompanyInfo,
        addProject,
        addBrand,
        openWhatsApp
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export const useStore = () => {
  const context = useContext(StoreContext);
  if (!context) {
    throw new Error('useStore must be used within a StoreProvider');
  }
  return context;
};
