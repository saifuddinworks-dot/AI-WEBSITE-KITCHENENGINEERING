export type ProductCategory = 
  | 'cooking'
  | 'refrigeration'
  | 'bakery'
  | 'preparation'
  | 'coffee'
  | 'fabrication'
  | 'ventilation'
  | 'pos-tech'
  | 'smallware';

export interface ProductSpecification {
  dimensions?: string; // e.g., '1200 × 900 × 850 mm'
  capacity?: string;   // e.g., '28 Liters' or '4 × GN 1/1'
  power?: string;      // e.g., '14.5 kW'
  voltage?: string;    // e.g., '380V / 3-Phase / 50Hz' or '220V Single-Phase'
  material?: string;   // e.g., 'AISI 304 Stainless Steel (1.5mm)'
  fuelType?: 'Electric' | 'Natural Gas / LPG' | 'Dual Fuel' | 'N/A';
  origin?: string;     // e.g., 'Italy', 'Germany', 'KE Engineered (Pakistan)', 'Taiwan'
  warranty?: string;   // e.g., '2 Years Commercial Warranty & Parts'
  weight?: string;     // e.g., '145 kg'
}

export interface Product {
  id: string;
  sku: string;
  name: string;
  category: ProductCategory;
  subcategory: string;
  brand: string;
  shortDesc: string;
  description: string;
  keyFeatures: string[];
  specs: ProductSpecification;
  applications: string[];
  image: string;
  fallbackImage?: string;
  secondaryImages?: string[];
  pdfCatalogue?: string;
  featured?: boolean;
  popular?: boolean;
  leadTime?: string;
}

export interface ProjectCaseStudy {
  id: string;
  title: string;
  category: 'restaurant' | 'cafe' | 'hotel' | 'bakery' | 'cloud-kitchen' | 'corporate';
  client: string;
  location: string;
  completedYear: string;
  coverImage: string;
  gallery: string[];
  overview: string;
  clientRequirement: string;
  kitchenDesign: string;
  equipmentSupplied: string[];
  customFabricationDetails: string;
  ventilationSpec: string;
  installationTimeline: string;
  finalResult: string;
  areaSqFt: number;
}

export interface QuoteRequest {
  id: string;
  createdAt: string;
  name: string;
  businessName: string;
  phone: string;
  email: string;
  city: string;
  businessType: string;
  projectType: string;
  requiredEquipment: string;
  estimatedBudget: string;
  projectTimeline: string;
  message: string;
  fileName?: string;
  status: 'New' | 'In Review' | 'Quoted' | 'Approved';
  targetProduct?: string;
}

export interface BrandPartner {
  id: string;
  name: string;
  country: string;
  category: string;
  tagline: string;
  logoText: string;
  logoUrl?: string;
  description?: string;
}

export interface FilterOptions {
  searchQuery: string;
  category: string;
  subcategory: string;
  brand: string;
  fuelType: string;
  sortBy: 'featured' | 'newest' | 'name-asc' | 'popular';
}
