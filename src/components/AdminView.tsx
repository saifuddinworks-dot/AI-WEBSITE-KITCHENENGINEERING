import React, { useState } from 'react';
import { useStore } from '../context/StoreContext';
import { 
  FileSpreadsheet, 
  Package, 
  Settings, 
  Trash2, 
  CheckCircle2, 
  Clock, 
  Search, 
  Download, 
  ArrowLeft,
  Plus,
  Edit2,
  ExternalLink,
  MessageSquare,
  UploadCloud,
  RotateCcw,
  Image as ImageIcon,
  Lock,
  Unlock,
  ShieldAlert,
  User,
  Key,
  FolderTree,
  Tag,
  Layers,
  Check,
  X,
  Copy,
  AlertCircle
} from 'lucide-react';
import { Product, BrandPartner, ProductCategory } from '../types';
import { CategoryInfo } from '../data/categories';
import { Logo } from './Logo';

export const AdminView: React.FC = () => {
  const { 
    quotes, 
    updateQuoteStatus, 
    products, 
    addProduct, 
    updateProduct,
    deleteProduct,
    bulkImportProducts,
    categories,
    addCategory,
    updateCategory,
    deleteCategory,
    brands,
    addBrand,
    updateBrand,
    deleteBrand,
    companyInfo, 
    updateCompanyInfo,
    setCurrentView,
    isAdminAuthenticated,
    loginAdmin,
    logoutAdmin,
    openWhatsApp 
  } = useStore();

  // Login form state
  const [username, setUsername] = useState('admin');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');

  // Active CMS Tab
  const [activeTab, setActiveTab] = useState<'products' | 'categories' | 'brands' | 'images' | 'quotes' | 'settings'>('products');

  // Products Tab State
  const [productSearch, setProductSearch] = useState('');
  const [selectedCategoryFilter, setSelectedCategoryFilter] = useState<string>('all');
  const [selectedBrandFilter, setSelectedBrandFilter] = useState<string>('all');
  
  const [isProductModalOpen, setIsProductModalOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [productForm, setProductForm] = useState({
    name: '',
    category: 'cooking' as ProductCategory,
    subcategory: 'Cooking Ranges',
    brand: 'Kitchen Engineering',
    sku: `KE-${Math.floor(1000 + Math.random() * 9000)}`,
    shortDesc: '',
    description: '',
    image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=800&auto=format&fit=crop',
    featured: true,
    dimensions: '900 x 800 x 850 mm',
    power: '24 kW / Gas',
    material: 'AISI 304 Stainless Steel',
    origin: 'Karachi, Pakistan',
    warranty: '1 Year Commercial'
  });

  // Bulk Import State
  const [isBulkModalOpen, setIsBulkModalOpen] = useState(false);
  const [bulkCsvText, setBulkCsvText] = useState('');
  const [bulkImportMessage, setBulkImportMessage] = useState<string | null>(null);

  // Categories Tab State
  const [isCategoryModalOpen, setIsCategoryModalOpen] = useState(false);
  const [editingCategory, setEditingCategory] = useState<CategoryInfo | null>(null);
  const [categoryForm, setCategoryForm] = useState({
    title: '',
    slug: '',
    shortDesc: '',
    subcategoriesStr: '',
    featuredImage: '',
    itemCount: 25
  });

  // Brands Tab State
  const [isBrandModalOpen, setIsBrandModalOpen] = useState(false);
  const [editingBrand, setEditingBrand] = useState<BrandPartner | null>(null);
  const [brandForm, setBrandForm] = useState({
    name: '',
    logoUrl: '',
    country: 'Pakistan',
    description: ''
  });

  // Quotes Tab State
  const [quoteSearch, setQuoteSearch] = useState('');
  const [quoteStatusFilter, setQuoteStatusFilter] = useState<string>('all');

  // Settings / Logo State
  const [logoFileSuccess, setLogoFileSuccess] = useState<string | null>(null);

  // Media Library state / copy notification
  const [copiedUrl, setCopiedUrl] = useState<string | null>(null);

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoginError('');
    const success = loginAdmin(password);
    if (!success) {
      setLoginError('Invalid password. Default password is: kitchen2026');
    }
  };

  // If not authenticated, show secure login screen
  if (!isAdminAuthenticated) {
    return (
      <div className="min-h-[85vh] flex items-center justify-center px-4 py-12 bg-[#20241E] text-[#ECE5D2]">
        <div className="max-w-md w-full bg-[#1A1F18] border border-[#3E4A2E] rounded-xl p-8 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#D9642C] via-amber-500 to-[#3E4A2E]" />
          
          <div className="text-center mb-8">
            <div className="mx-auto w-12 h-12 rounded-full bg-[#3E4A2E]/50 border border-[#3E4A2E] flex items-center justify-center text-[#F5F1E5] mb-3">
              <Lock className="w-6 h-6 text-[#D9642C]" />
            </div>
            <h1 className="text-xl font-bold tracking-tight text-[#F5F1E5]">Admin CMS Portal</h1>
            <p className="text-xs text-[#8E959B] mt-1 font-mono">
              Restricted access for Kitchen Engineering B2B administrators.
            </p>
          </div>

          <form onSubmit={handleLoginSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-[#8E959B] mb-1.5">
                Admin Username
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-[#8E959B]">
                  <User className="w-4 h-4" />
                </span>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 bg-[#252C22] border border-[#3E4A2E] rounded-lg text-sm text-[#ECE5D2] focus:outline-none focus:border-[#D9642C]"
                  placeholder="admin"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-[#8E959B] mb-1.5">
                Master Password
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-[#8E959B]">
                  <Key className="w-4 h-4" />
                </span>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 bg-[#252C22] border border-[#3E4A2E] rounded-lg text-sm text-[#ECE5D2] focus:outline-none focus:border-[#D9642C]"
                  placeholder="Enter password"
                  required
                />
              </div>
              <p className="text-[11px] font-mono text-[#8E959B] mt-1.5 flex items-center gap-1">
                <span className="text-amber-400 font-bold">Hint:</span> password is <code className="bg-[#2C3229] px-1 py-0.5 rounded text-[#F5F1E5]">kitchen2026</code>
              </p>
            </div>

            {loginError && (
              <div className="p-3 rounded bg-red-950/60 border border-red-800 text-red-300 text-xs font-mono flex items-center gap-2">
                <ShieldAlert className="w-4 h-4 text-red-400 shrink-0" />
                <span>{loginError}</span>
              </div>
            )}

            <button
              type="submit"
              className="w-full py-3 bg-[#D9642C] hover:bg-[#C25522] text-white font-mono text-xs uppercase tracking-wider font-bold rounded-lg transition-colors shadow-md flex items-center justify-center gap-2 cursor-pointer mt-2"
            >
              <Unlock className="w-4 h-4" />
              <span>Authenticate &amp; Enter CMS</span>
            </button>
          </form>

          <div className="mt-8 pt-6 border-t border-[#3E4A2E]/60 text-center">
            <button
              onClick={() => setCurrentView('home')}
              className="text-xs font-mono text-[#8E959B] hover:text-[#ECE5D2] transition-colors inline-flex items-center gap-1.5 cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Return to Public Website</span>
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Filtered Products
  const filteredProducts = products.filter(p => {
    const matchesSearch = productSearch === '' || 
      p.name.toLowerCase().includes(productSearch.toLowerCase()) ||
      p.sku.toLowerCase().includes(productSearch.toLowerCase()) ||
      p.brand.toLowerCase().includes(productSearch.toLowerCase());
    
    const matchesCat = selectedCategoryFilter === 'all' || p.category === selectedCategoryFilter;
    const matchesBrand = selectedBrandFilter === 'all' || p.brand.toLowerCase() === selectedBrandFilter.toLowerCase();
    
    return matchesSearch && matchesCat && matchesBrand;
  });

  // Filtered Quotes
  const filteredQuotes = quotes.filter(q => {
    const matchesSearch = quoteSearch === '' ||
      q.id.toLowerCase().includes(quoteSearch.toLowerCase()) ||
      q.name.toLowerCase().includes(quoteSearch.toLowerCase()) ||
      q.businessName.toLowerCase().includes(quoteSearch.toLowerCase()) ||
      q.city.toLowerCase().includes(quoteSearch.toLowerCase()) ||
      q.phone.includes(quoteSearch);
    
    const matchesStatus = quoteStatusFilter === 'all' || q.status.toLowerCase() === quoteStatusFilter.toLowerCase();

    return matchesSearch && matchesStatus;
  });

  // Save Product Handler
  const handleSaveProduct = (e: React.FormEvent) => {
    e.preventDefault();
    if (!productForm.name || !productForm.sku) return;

    const productPayload: Product = {
      id: editingProduct ? editingProduct.id : `prod-${Date.now()}`,
      name: productForm.name,
      category: productForm.category,
      subcategory: productForm.subcategory,
      brand: productForm.brand,
      sku: productForm.sku,
      shortDesc: productForm.shortDesc,
      description: productForm.description || productForm.shortDesc,
      image: productForm.image,
      featured: productForm.featured,
      specs: {
        dimensions: productForm.dimensions,
        power: productForm.power,
        material: productForm.material,
        origin: productForm.origin,
        warranty: productForm.warranty
      },
      keyFeatures: ['Heavy-duty stainless steel build', 'Engineered for continuous commercial usage'],
      applications: ['Commercial Kitchens', 'Restaurants', 'Hotels']
    };

    if (editingProduct) {
      updateProduct(productPayload);
    } else {
      addProduct(productPayload);
    }

    setIsProductModalOpen(false);
    setEditingProduct(null);
  };

  const handleOpenEditProduct = (p: Product) => {
    setEditingProduct(p);
    setProductForm({
      name: p.name,
      category: p.category,
      subcategory: p.subcategory || 'General',
      brand: p.brand || 'Kitchen Engineering',
      sku: p.sku,
      shortDesc: p.shortDesc || '',
      description: p.description || '',
      image: p.image,
      featured: !!p.featured,
      dimensions: p.specs.dimensions || '900 x 800 x 850 mm',
      power: p.specs.power || '24 kW',
      material: p.specs.material || 'AISI 304 Stainless Steel',
      origin: p.specs.origin || 'Karachi, Pakistan',
      warranty: p.specs.warranty || '1 Year Commercial'
    });
    setIsProductModalOpen(true);
  };

  // Bulk CSV Import Handler
  const handleBulkImportSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const lines = bulkCsvText.trim().split('\n');
      if (lines.length < 2) {
        setBulkImportMessage('Error: CSV must contain a header row and at least one data row.');
        return;
      }

      const importedProducts: Product[] = [];
      // Expected CSV format: name, category, subcategory, brand, sku, shortDesc, image
      for (let i = 1; i < lines.length; i++) {
        const line = lines[i].trim();
        if (!line) continue;
        const parts = line.split(',').map(s => s.trim().replace(/^"|"$/g, ''));
        if (parts.length >= 6) {
          importedProducts.push({
            id: `imported-${Date.now()}-${i}`,
            name: parts[0] || 'Imported Equipment',
            category: (parts[1] as ProductCategory) || 'cooking',
            subcategory: parts[2] || 'General',
            brand: parts[3] || 'Kitchen Engineering',
            sku: parts[4] || `KE-IMP-${Math.floor(1000 + Math.random() * 9000)}`,
            shortDesc: parts[5] || 'Heavy duty commercial equipment.',
            description: parts[5] || 'Engineered commercial grade kitchen equipment.',
            image: parts[6] || 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=800&auto=format&fit=crop',
            featured: true,
            specs: {
              dimensions: 'Standard Commercial Size',
              power: 'Standard Spec',
              material: 'AISI 304 Stainless Steel',
              origin: 'Karachi, Pakistan',
              warranty: '1 Year Commercial'
            },
            keyFeatures: ['Commercial grade construction', 'Reliable performance'],
            applications: ['Restaurants', 'Hotels']
          });
        }
      }

      if (importedProducts.length > 0) {
        bulkImportProducts(importedProducts);
        setBulkImportMessage(`Successfully imported ${importedProducts.length} products into database!`);
        setTimeout(() => {
          setIsBulkModalOpen(false);
          setBulkCsvText('');
          setBulkImportMessage(null);
        }, 2000);
      } else {
        setBulkImportMessage('Could not parse any valid products. Check CSV format.');
      }
    } catch (err) {
      console.error(err);
      setBulkImportMessage('Failed to parse CSV data.');
    }
  };

  const downloadCsvTemplate = () => {
    const template = `name,category,subcategory,brand,sku,shortDesc,image\n"Heavy Duty 6 Burner Range","cooking","Cooking Ranges","Kitchen Engineering","KE-R6-01","Heavy duty gas range with cast iron burners","https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=800&auto=format&fit=crop"\n"Upright Glass Chiller 1000L","refrigeration","Upright Refrigerators","Kitchen Engineering","KE-CH-1000","Digital tropicalized refrigerator","https://images.unsplash.com/photo-1584992236310-6edddc08acff?q=80&w=800&auto=format&fit=crop"`;
    const blob = new Blob([template], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', 'kitchen_engineering_products_template.csv');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const exportQuotesToCSV = () => {
    const headers = ['ID', 'Date', 'Name', 'Business', 'Phone', 'City', 'Type', 'Budget', 'Equipment', 'Status'];
    const rows = quotes.map(q => [
      q.id,
      new Date(q.createdAt).toLocaleDateString(),
      `"${q.name}"`,
      `"${q.businessName}"`,
      q.phone,
      q.city,
      `"${q.projectType}"`,
      `"${q.estimatedBudget}"`,
      `"${q.requiredEquipment.replace(/"/g, '""')}"`,
      q.status
    ]);

    const csvContent = "data:text/csv;charset=utf-8," + [headers.join(','), ...rows.map(e => e.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `kitchen_engineering_rfqs_${new Date().toISOString().slice(0,10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleLogoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const base64 = event.target?.result as string;
      if (base64) {
        try {
          localStorage.setItem('ke_custom_logo', base64);
          updateCompanyInfo({ logoUrl: base64 });
          window.dispatchEvent(new Event('ke-logo-updated'));
          setLogoFileSuccess(`Successfully updated logo from "${file.name}"!`);
          setTimeout(() => setLogoFileSuccess(null), 5000);
        } catch (err) {
          console.error(err);
        }
      }
    };
    reader.readAsDataURL(file);
  };

  const handleResetLogo = () => {
    try {
      localStorage.removeItem('ke_custom_logo');
      updateCompanyInfo({ logoUrl: '' });
      window.dispatchEvent(new Event('ke-logo-updated'));
      setLogoFileSuccess('Reset website logo to default engineered seal.');
      setTimeout(() => setLogoFileSuccess(null), 4000);
    } catch (err) {
      console.error(err);
    }
  };

  // Collect all unique image URLs from products for Media Library
  const allMediaImages = Array.from(new Set(products.map(p => p.image).filter(Boolean)));

  const copyToClipboard = (url: string) => {
    navigator.clipboard.writeText(url);
    setCopiedUrl(url);
    setTimeout(() => setCopiedUrl(null), 2500);
  };

  return (
    <div className="min-h-screen bg-[#ECE5D2] text-[#20241E] pb-24">
      {/* Admin Header Banner */}
      <div className="bg-[#20241E] text-[#ECE5D2] border-b border-[#3E4A2E] py-6 px-4 sm:px-8 shadow-md">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <Logo variant="light" size="sm" />
            <div>
              <div className="text-xs font-mono uppercase tracking-widest text-emerald-400 font-bold flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Admin CMS &amp; Database Hub</span>
              </div>
              <h1 className="text-lg sm:text-xl font-bold text-[#F5F1E5]">
                Kitchen Engineering Management Dashboard
              </h1>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setCurrentView('home')}
              className="px-3.5 py-2 rounded bg-[#2C3229] hover:bg-[#3E4A2E] text-[#ECE5D2] text-xs font-mono transition-colors border border-[#3E4A2E] flex items-center gap-1.5 cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Website</span>
            </button>
            <button
              onClick={() => {
                logoutAdmin();
              }}
              className="px-3.5 py-2 rounded bg-red-900/40 hover:bg-red-900/60 text-red-200 text-xs font-mono transition-colors border border-red-700/50 flex items-center gap-1.5 cursor-pointer"
            >
              <Lock className="w-3.5 h-3.5" />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </div>

      {/* Navigation Tabs Bar */}
      <div className="bg-[#1A1F18] border-b border-[#3E4A2E] sticky top-16 sm:top-20 z-30 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center gap-1 sm:gap-2 overflow-x-auto no-scrollbar py-2">
          <button
            onClick={() => setActiveTab('products')}
            className={`px-4 py-2.5 rounded-lg text-xs font-mono uppercase tracking-wider font-bold transition-all flex items-center gap-2 whitespace-nowrap cursor-pointer ${
              activeTab === 'products'
                ? 'bg-[#3E4A2E] text-[#F5F1E5] shadow'
                : 'text-[#8E959B] hover:text-[#ECE5D2] hover:bg-[#252C22]'
            }`}
          >
            <Package className="w-4 h-4 text-amber-400" />
            <span>Products DB ({products.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('categories')}
            className={`px-4 py-2.5 rounded-lg text-xs font-mono uppercase tracking-wider font-bold transition-all flex items-center gap-2 whitespace-nowrap cursor-pointer ${
              activeTab === 'categories'
                ? 'bg-[#3E4A2E] text-[#F5F1E5] shadow'
                : 'text-[#8E959B] hover:text-[#ECE5D2] hover:bg-[#252C22]'
            }`}
          >
            <FolderTree className="w-4 h-4 text-sky-400" />
            <span>Categories ({categories.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('brands')}
            className={`px-4 py-2.5 rounded-lg text-xs font-mono uppercase tracking-wider font-bold transition-all flex items-center gap-2 whitespace-nowrap cursor-pointer ${
              activeTab === 'brands'
                ? 'bg-[#3E4A2E] text-[#F5F1E5] shadow'
                : 'text-[#8E959B] hover:text-[#ECE5D2] hover:bg-[#252C22]'
            }`}
          >
            <Tag className="w-4 h-4 text-emerald-400" />
            <span>Brands ({brands.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('images')}
            className={`px-4 py-2.5 rounded-lg text-xs font-mono uppercase tracking-wider font-bold transition-all flex items-center gap-2 whitespace-nowrap cursor-pointer ${
              activeTab === 'images'
                ? 'bg-[#3E4A2E] text-[#F5F1E5] shadow'
                : 'text-[#8E959B] hover:text-[#ECE5D2] hover:bg-[#252C22]'
            }`}
          >
            <ImageIcon className="w-4 h-4 text-purple-400" />
            <span>Product Images ({allMediaImages.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('quotes')}
            className={`px-4 py-2.5 rounded-lg text-xs font-mono uppercase tracking-wider font-bold transition-all flex items-center gap-2 whitespace-nowrap cursor-pointer ${
              activeTab === 'quotes'
                ? 'bg-[#3E4A2E] text-[#F5F1E5] shadow'
                : 'text-[#8E959B] hover:text-[#ECE5D2] hover:bg-[#252C22]'
            }`}
          >
            <MessageSquare className="w-4 h-4 text-[#D9642C]" />
            <span>Quote Requests ({quotes.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('settings')}
            className={`px-4 py-2.5 rounded-lg text-xs font-mono uppercase tracking-wider font-bold transition-all flex items-center gap-2 whitespace-nowrap cursor-pointer ${
              activeTab === 'settings'
                ? 'bg-[#3E4A2E] text-[#F5F1E5] shadow'
                : 'text-[#8E959B] hover:text-[#ECE5D2] hover:bg-[#252C22]'
            }`}
          >
            <Settings className="w-4 h-4 text-zinc-400" />
            <span>Company &amp; Logo Settings</span>
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-8">
        
        {/* ================= TAB 1: PRODUCTS ================= */}
        {activeTab === 'products' && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-[#F5F1E5] p-6 rounded-xl border border-[#DDD4BD] shadow-sm">
              <div>
                <h2 className="text-lg font-bold text-[#20241E]">Persistent Products Database</h2>
                <p className="text-xs text-[#8E959B] mt-1 font-mono">
                  Manage all commercial kitchen equipment items stored persistently in browser database storage.
                </p>
              </div>

              <div className="flex items-center gap-2 flex-wrap">
                <button
                  onClick={() => {
                    setEditingProduct(null);
                    setProductForm({
                      name: '',
                      category: 'cooking',
                      subcategory: 'Cooking Ranges',
                      brand: 'Kitchen Engineering',
                      sku: `KE-${Math.floor(1000 + Math.random() * 9000)}`,
                      shortDesc: '',
                      description: '',
                      image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=800&auto=format&fit=crop',
                      featured: true,
                      dimensions: '900 x 800 x 850 mm',
                      power: '24 kW / Gas',
                      material: 'AISI 304 Stainless Steel',
                      origin: 'Karachi, Pakistan',
                      warranty: '1 Year Commercial'
                    });
                    setIsProductModalOpen(true);
                  }}
                  className="px-4 py-2.5 rounded bg-[#3E4A2E] hover:bg-[#52633C] text-[#F5F1E5] text-xs font-mono uppercase tracking-wider font-bold transition-colors flex items-center gap-2 cursor-pointer shadow-sm"
                >
                  <Plus className="w-4 h-4" />
                  <span>Add New Product</span>
                </button>

                <button
                  onClick={() => setIsBulkModalOpen(true)}
                  className="px-4 py-2.5 rounded bg-[#252C22] hover:bg-[#3E4A2E] text-[#ECE5D2] text-xs font-mono uppercase tracking-wider font-bold transition-colors flex items-center gap-2 cursor-pointer border border-[#3E4A2E]"
                >
                  <FileSpreadsheet className="w-4 h-4 text-emerald-400" />
                  <span>Bulk Import CSV</span>
                </button>
              </div>
            </div>

            {/* Filters & Search Toolbar */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 bg-[#EFEAD8] p-4 rounded-xl border border-[#DDD4BD]">
              <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-[#8E959B]">
                  <Search className="w-4 h-4" />
                </span>
                <input
                  type="text"
                  placeholder="Search by product name, SKU, or brand..."
                  value={productSearch}
                  onChange={(e) => setProductSearch(e.target.value)}
                  className="w-full pl-9 pr-4 py-2 bg-[#F5F1E5] border border-[#DDD4BD] rounded-lg text-xs font-mono text-[#20241E] focus:outline-none focus:border-[#3E4A2E]"
                />
              </div>

              <div>
                <select
                  value={selectedCategoryFilter}
                  onChange={(e) => setSelectedCategoryFilter(e.target.value)}
                  className="w-full px-3 py-2 bg-[#F5F1E5] border border-[#DDD4BD] rounded-lg text-xs font-mono text-[#20241E] focus:outline-none focus:border-[#3E4A2E]"
                >
                  <option value="all">All Equipment Categories ({categories.length})</option>
                  {categories.map(c => (
                    <option key={c.id} value={c.id}>{c.title}</option>
                  ))}
                </select>
              </div>

              <div>
                <select
                  value={selectedBrandFilter}
                  onChange={(e) => setSelectedBrandFilter(e.target.value)}
                  className="w-full px-3 py-2 bg-[#F5F1E5] border border-[#DDD4BD] rounded-lg text-xs font-mono text-[#20241E] focus:outline-none focus:border-[#3E4A2E]"
                >
                  <option value="all">All Brands ({brands.length})</option>
                  {brands.map(b => (
                    <option key={b.id} value={b.name}>{b.name}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Products Table */}
            <div className="bg-[#F5F1E5] rounded-xl border border-[#DDD4BD] overflow-hidden shadow-sm">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-[#EAE4D0] border-b border-[#DDD4BD] text-[11px] font-mono uppercase text-[#6B7280]">
                      <th className="py-3 px-4">Image</th>
                      <th className="py-3 px-4">Product Name &amp; SKU</th>
                      <th className="py-3 px-4">Category</th>
                      <th className="py-3 px-4">Brand</th>
                      <th className="py-3 px-4">Specs Summary</th>
                      <th className="py-3 px-4 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#DDD4BD] text-xs font-mono">
                    {filteredProducts.length === 0 ? (
                      <tr>
                        <td colSpan={6} className="py-8 text-center text-[#8E959B]">
                          No products found matching your search or filters.
                        </td>
                      </tr>
                    ) : (
                      filteredProducts.map(p => (
                        <tr key={p.id} className="hover:bg-[#EFEAD8] transition-colors">
                          <td className="py-3 px-4">
                            <div className="w-12 h-12 rounded bg-[#E2DAC3] overflow-hidden border border-[#DDD4BD] shrink-0">
                              <img src={p.image} alt={p.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                            </div>
                          </td>
                          <td className="py-3 px-4">
                            <div className="font-bold text-[#20241E] font-sans text-sm">{p.name}</div>
                            <div className="text-[11px] text-[#8E959B]">SKU: {p.sku}</div>
                          </td>
                          <td className="py-3 px-4 capitalize text-[#3E4A2E] font-bold">
                            {p.category}
                          </td>
                          <td className="py-3 px-4 text-[#20241E]">
                            {p.brand}
                          </td>
                          <td className="py-3 px-4 text-[11px] text-[#6B7280]">
                            {p.specs.dimensions || 'Standard size'} • {p.specs.material || 'AISI 304'}
                          </td>
                          <td className="py-3 px-4 text-right">
                            <div className="flex items-center justify-end gap-2">
                              <button
                                onClick={() => handleOpenEditProduct(p)}
                                className="p-1.5 rounded bg-[#3E4A2E] text-[#F5F1E5] hover:bg-[#52633C] transition-colors cursor-pointer"
                                title="Edit Product"
                              >
                                <Edit2 className="w-3.5 h-3.5" />
                              </button>
                              <button
                                onClick={() => {
                                  if (confirm(`Are you sure you want to delete "${p.name}"?`)) {
                                    deleteProduct(p.id);
                                  }
                                }}
                                className="p-1.5 rounded bg-red-800 text-white hover:bg-red-900 transition-colors cursor-pointer"
                                title="Delete Product"
                              >
                                <Trash2 className="w-3.5 h-3.5" />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* ================= TAB 2: CATEGORIES ================= */}
        {activeTab === 'categories' && (
          <div className="space-y-6">
            <div className="bg-[#F5F1E5] p-6 rounded-xl border border-[#DDD4BD] flex items-center justify-between">
              <div>
                <h2 className="text-lg font-bold text-[#20241E]">Equipment Categories Management</h2>
                <p className="text-xs text-[#8E959B] mt-1 font-mono">
                  Organize categories, subcategories, and sector descriptions.
                </p>
              </div>
              <button
                onClick={() => {
                  setEditingCategory(null);
                  setCategoryForm({
                    title: '',
                    slug: '',
                    shortDesc: '',
                    subcategoriesStr: 'Range, Fryer, Griddle',
                    featuredImage: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=800&auto=format&fit=crop',
                    itemCount: 20
                  });
                  setIsCategoryModalOpen(true);
                }}
                className="px-4 py-2.5 rounded bg-[#3E4A2E] hover:bg-[#52633C] text-[#F5F1E5] text-xs font-mono uppercase tracking-wider font-bold transition-colors flex items-center gap-2 cursor-pointer shadow-sm"
              >
                <Plus className="w-4 h-4" />
                <span>Add Category</span>
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {categories.map((cat) => (
                <div key={cat.id} className="bg-[#F5F1E5] border border-[#DDD4BD] rounded-xl overflow-hidden shadow-sm flex flex-col justify-between">
                  <div>
                    <div className="h-36 relative overflow-hidden bg-zinc-800">
                      <img src={cat.featuredImage} alt={cat.title} className="w-full h-full object-cover opacity-90" referrerPolicy="no-referrer" />
                      <div className="absolute top-3 left-3 bg-[#20241E]/80 backdrop-blur text-[#ECE5D2] px-2.5 py-1 rounded text-[10px] font-mono uppercase">
                        {cat.itemCount}+ Units
                      </div>
                    </div>
                    <div className="p-5 space-y-2">
                      <h3 className="text-base font-bold text-[#20241E]">{cat.title}</h3>
                      <p className="text-xs text-[#6B7280] leading-relaxed">{cat.shortDesc}</p>
                      <div className="flex flex-wrap gap-1 pt-2">
                        {cat.subcategories.slice(0, 5).map((sub, idx) => (
                          <span key={idx} className="px-2 py-0.5 rounded bg-[#EAE4D0] text-[#3E4A2E] text-[10px] font-mono">
                            {sub}
                          </span>
                        ))}
                        {cat.subcategories.length > 5 && (
                          <span className="px-1.5 py-0.5 rounded bg-[#EAE4D0] text-[#8E959B] text-[10px] font-mono">
                            +{cat.subcategories.length - 5} more
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="p-4 bg-[#EFEAD8] border-t border-[#DDD4BD] flex items-center justify-between">
                    <span className="text-[11px] font-mono text-[#8E959B]">Slug: {cat.slug}</span>
                    <button
                      onClick={() => {
                        if (confirm(`Delete category "${cat.title}"?`)) {
                          deleteCategory(cat.id);
                        }
                      }}
                      className="text-xs font-mono text-red-700 hover:text-red-900 flex items-center gap-1 cursor-pointer"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                      <span>Delete</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ================= TAB 3: BRANDS ================= */}
        {activeTab === 'brands' && (
          <div className="space-y-6">
            <div className="bg-[#F5F1E5] p-6 rounded-xl border border-[#DDD4BD] flex items-center justify-between">
              <div>
                <h2 className="text-lg font-bold text-[#20241E]">Brand Partners &amp; Manufacturers</h2>
                <p className="text-xs text-[#8E959B] mt-1 font-mono">
                  Manage global and local engineering brands represented in the catalog.
                </p>
              </div>
              <button
                onClick={() => {
                  setEditingBrand(null);
                  setBrandForm({
                    name: '',
                    logoUrl: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?q=80&w=400&auto=format&fit=crop',
                    country: 'Italy',
                    description: 'Global manufacturer of professional commercial equipment.'
                  });
                  setIsBrandModalOpen(true);
                }}
                className="px-4 py-2.5 rounded bg-[#3E4A2E] hover:bg-[#52633C] text-[#F5F1E5] text-xs font-mono uppercase tracking-wider font-bold transition-colors flex items-center gap-2 cursor-pointer shadow-sm"
              >
                <Plus className="w-4 h-4" />
                <span>Add Brand</span>
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {brands.map((brand) => (
                <div key={brand.id} className="bg-[#F5F1E5] border border-[#DDD4BD] rounded-xl p-5 shadow-sm space-y-4 flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="h-20 bg-white rounded-lg border border-[#DDD4BD] p-3 flex items-center justify-center">
                      <img src={brand.logoUrl} alt={brand.name} className="max-h-full max-w-full object-contain" referrerPolicy="no-referrer" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-[#20241E]">{brand.name}</div>
                      <div className="text-[11px] font-mono text-[#D9642C] font-semibold">Origin: {brand.country}</div>
                      <p className="text-xs text-[#6B7280] mt-1">{brand.description}</p>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-[#DDD4BD] flex items-center justify-between">
                    <span className="text-[10px] font-mono text-[#8E959B]">ID: {brand.id}</span>
                    <button
                      onClick={() => {
                        if (confirm(`Delete brand "${brand.name}"?`)) {
                          deleteBrand(brand.id);
                        }
                      }}
                      className="text-xs font-mono text-red-700 hover:text-red-900 flex items-center gap-1 cursor-pointer"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                      <span>Remove</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ================= TAB 4: PRODUCT IMAGES / MEDIA LIBRARY ================= */}
        {activeTab === 'images' && (
          <div className="space-y-6">
            <div className="bg-[#F5F1E5] p-6 rounded-xl border border-[#DDD4BD] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <h2 className="text-lg font-bold text-[#20241E]">Product Images &amp; Media Library</h2>
                <p className="text-xs text-[#8E959B] mt-1 font-mono">
                  Inspect all active media URLs used across commercial catalog items and project case studies.
                </p>
              </div>

              <label className="px-4 py-2.5 rounded bg-[#3E4A2E] hover:bg-[#52633C] text-[#F5F1E5] text-xs font-mono uppercase tracking-wider font-bold transition-colors flex items-center gap-2 cursor-pointer shadow-sm">
                <UploadCloud className="w-4 h-4" />
                <span>Upload Media File</span>
                <input 
                  type="file" 
                  accept="image/*" 
                  className="hidden" 
                  onChange={(e) => {
                    const file = e.target.files?.[0];
                    if (!file) return;
                    const reader = new FileReader();
                    reader.onload = (event) => {
                      const base64 = event.target?.result as string;
                      if (base64) {
                        // Add product with this image or copy URL
                        copyToClipboard(base64);
                        alert(`Successfully loaded media from "${file.name}"! Base64 URL copied to clipboard.`);
                      }
                    };
                    reader.readAsDataURL(file);
                  }} 
                />
              </label>
            </div>

            {copiedUrl && (
              <div className="p-3 bg-emerald-100 border border-emerald-300 text-emerald-800 text-xs font-mono rounded-lg flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-600" />
                <span>Image URL copied to clipboard successfully!</span>
              </div>
            )}

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {allMediaImages.map((imgUrl, idx) => (
                <div key={idx} className="bg-[#F5F1E5] border border-[#DDD4BD] rounded-xl overflow-hidden shadow-sm group">
                  <div className="h-32 bg-zinc-900 relative">
                    <img src={imgUrl} alt={`Media ${idx}`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" referrerPolicy="no-referrer" />
                  </div>
                  <div className="p-3 space-y-2">
                    <div className="text-[10px] font-mono text-[#8E959B] truncate" title={imgUrl}>
                      {imgUrl}
                    </div>
                    <button
                      onClick={() => copyToClipboard(imgUrl as string)}
                      className="w-full py-1.5 rounded bg-[#EAE4D0] hover:bg-[#DDD4BD] text-[#20241E] text-xs font-mono transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      <Copy className="w-3 h-3 text-[#3E4A2E]" />
                      <span>Copy URL</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ================= TAB 5: QUOTE REQUESTS ================= */}
        {activeTab === 'quotes' && (
          <div className="space-y-6">
            <div className="bg-[#F5F1E5] p-6 rounded-xl border border-[#DDD4BD] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <h2 className="text-lg font-bold text-[#20241E]">Customer Quotation Requests (RFQs)</h2>
                <p className="text-xs text-[#8E959B] mt-1 font-mono">
                  Track client inquiries, review requirements, and update project processing status.
                </p>
              </div>

              <button
                onClick={exportQuotesToCSV}
                className="px-4 py-2.5 rounded bg-[#3E4A2E] hover:bg-[#52633C] text-[#F5F1E5] text-xs font-mono uppercase tracking-wider font-bold transition-colors flex items-center gap-2 cursor-pointer shadow-sm"
              >
                <Download className="w-4 h-4" />
                <span>Export RFQs to CSV</span>
              </button>
            </div>

            {/* Quote Filters */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-[#EFEAD8] p-4 rounded-xl border border-[#DDD4BD]">
              <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-[#8E959B]">
                  <Search className="w-4 h-4" />
                </span>
                <input
                  type="text"
                  placeholder="Search by client name, business, phone, or RFQ ID..."
                  value={quoteSearch}
                  onChange={(e) => setQuoteSearch(e.target.value)}
                  className="w-full pl-9 pr-4 py-2 bg-[#F5F1E5] border border-[#DDD4BD] rounded-lg text-xs font-mono text-[#20241E] focus:outline-none focus:border-[#3E4A2E]"
                />
              </div>

              <div>
                <select
                  value={quoteStatusFilter}
                  onChange={(e) => setQuoteStatusFilter(e.target.value)}
                  className="w-full px-3 py-2 bg-[#F5F1E5] border border-[#DDD4BD] rounded-lg text-xs font-mono text-[#20241E] focus:outline-none focus:border-[#3E4A2E]"
                >
                  <option value="all">Filter by Status (All)</option>
                  <option value="New">New</option>
                  <option value="In Review">In Review</option>
                  <option value="Confirmed">Confirmed</option>
                  <option value="Processing">Processing</option>
                  <option value="Completed">Completed</option>
                </select>
              </div>
            </div>

            {/* Quotes Table */}
            <div className="bg-[#F5F1E5] rounded-xl border border-[#DDD4BD] overflow-hidden shadow-sm">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-[#EAE4D0] border-b border-[#DDD4BD] text-[11px] font-mono uppercase text-[#6B7280]">
                      <th className="py-3 px-4">RFQ ID &amp; Date</th>
                      <th className="py-3 px-4">Client &amp; Business</th>
                      <th className="py-3 px-4">Contact &amp; City</th>
                      <th className="py-3 px-4">Project &amp; Equipment</th>
                      <th className="py-3 px-4">Status</th>
                      <th className="py-3 px-4 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#DDD4BD] text-xs font-mono">
                    {filteredQuotes.length === 0 ? (
                      <tr>
                        <td colSpan={6} className="py-8 text-center text-[#8E959B]">
                          No quotation requests found.
                        </td>
                      </tr>
                    ) : (
                      filteredQuotes.map(q => (
                        <tr key={q.id} className="hover:bg-[#EFEAD8] transition-colors align-top">
                          <td className="py-3 px-4">
                            <div className="font-bold text-[#D9642C]">{q.id}</div>
                            <div className="text-[10px] text-[#8E959B] flex items-center gap-1 mt-0.5">
                              <Clock className="w-3 h-3" />
                              <span>{new Date(q.createdAt).toLocaleDateString()}</span>
                            </div>
                          </td>
                          <td className="py-3 px-4">
                            <div className="font-bold text-[#20241E] font-sans text-sm">{q.name}</div>
                            <div className="text-[11px] text-[#3E4A2E]">{q.businessName} ({q.businessType})</div>
                          </td>
                          <td className="py-3 px-4">
                            <div>{q.phone}</div>
                            <div className="text-[11px] text-[#8E959B]">📍 {q.city}</div>
                          </td>
                          <td className="py-3 px-4">
                            <div className="font-semibold text-[#20241E]">{q.projectType}</div>
                            <div className="text-[11px] text-[#6B7280] max-w-xs mt-0.5">{q.requiredEquipment}</div>
                            <div className="text-[10px] text-emerald-700 font-bold mt-1">Budget: {q.estimatedBudget}</div>
                          </td>
                          <td className="py-3 px-4">
                            <select
                              value={q.status}
                              onChange={(e) => updateQuoteStatus(q.id, e.target.value as any)}
                              className={`px-2.5 py-1 rounded text-xs font-mono font-bold border cursor-pointer ${
                                q.status === 'New' ? 'bg-amber-100 text-amber-800 border-amber-300' :
                                q.status === 'In Review' ? 'bg-sky-100 text-sky-800 border-sky-300' :
                                q.status === 'Confirmed' ? 'bg-indigo-100 text-indigo-800 border-indigo-300' :
                                q.status === 'Processing' ? 'bg-purple-100 text-purple-800 border-purple-300' :
                                'bg-emerald-100 text-emerald-800 border-emerald-300'
                              }`}
                            >
                              <option value="New">New</option>
                              <option value="In Review">In Review</option>
                              <option value="Confirmed">Confirmed</option>
                              <option value="Processing">Processing</option>
                              <option value="Completed">Completed</option>
                            </select>
                          </td>
                          <td className="py-3 px-4 text-right">
                            <button
                              onClick={() => {
                                const msg = `Hello ${q.name}, regarding your Kitchen Engineering RFQ #${q.id} for ${q.businessName} (${q.projectType}), we are reviewing your requirements.`;
                                openWhatsApp(msg);
                              }}
                              className="px-2.5 py-1.5 rounded bg-emerald-700 text-white hover:bg-emerald-800 transition-colors inline-flex items-center gap-1 cursor-pointer"
                              title="Chat on WhatsApp"
                            >
                              <MessageSquare className="w-3.5 h-3.5" />
                              <span>WhatsApp</span>
                            </button>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* ================= TAB 6: SETTINGS ================= */}
        {activeTab === 'settings' && (
          <div className="bg-[#F5F1E5] p-6 sm:p-8 rounded-xl border border-[#DDD4BD] max-w-2xl space-y-6 shadow-sm">
            {/* Website Logo & Branding Manager */}
            <div className="border-b border-[#DDD4BD] pb-6">
              <h2 className="text-lg font-bold text-[#20241E] flex items-center gap-2">
                <ImageIcon className="w-5 h-5 text-[#D9642C]" />
                Website Logo &amp; Master Brand
              </h2>
              <p className="text-xs text-[#8E959B] mt-1 font-mono">
                Upload your official logo file here to replace the website logo across the header navbar, mobile menu, footer, and admin screens.
              </p>

              <div className="mt-4 p-4 rounded-lg bg-[#ECE5D2] border border-[#DDD4BD] flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded bg-[#1A1F18] border border-[#3E4A2E] flex items-center justify-center">
                    <Logo variant="light" size="sm" showTagline={false} />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-[#20241E]">Current Active Logo</div>
                    <div className="text-[11px] text-[#8E959B] font-mono">
                      {localStorage.getItem('ke_custom_logo') ? 'Custom Uploaded Logo (Active)' : 'Engineered Vector Seal (Active)'}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <label className="px-3.5 py-2 rounded bg-[#3E4A2E] hover:bg-[#52633C] text-[#F5F1E5] text-xs font-mono uppercase tracking-wider font-bold cursor-pointer transition-colors flex items-center gap-1.5 shadow-sm">
                    <UploadCloud className="w-3.5 h-3.5" />
                    <span>Upload Logo File</span>
                    <input 
                      type="file" 
                      accept="image/*" 
                      className="hidden" 
                      onChange={handleLogoUpload} 
                    />
                  </label>

                  {localStorage.getItem('ke_custom_logo') && (
                    <button
                      type="button"
                      onClick={handleResetLogo}
                      className="px-2.5 py-2 rounded border border-[#DDD4BD] bg-[#F5F1E5] hover:bg-[#E2DAC3] text-[#20241E] text-xs font-mono transition-colors cursor-pointer"
                      title="Reset to default seal"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>
              </div>

              {logoFileSuccess && (
                <div className="mt-3 p-2.5 rounded bg-emerald-100 border border-emerald-300 text-emerald-800 text-xs font-mono flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>{logoFileSuccess}</span>
                </div>
              )}
            </div>

            <h2 className="text-lg font-bold text-[#20241E]">
              Company Information &amp; Regional Dispatch Contacts
            </h2>
            <p className="text-xs text-[#8E959B] font-mono">
              Update company entity name, primary phones, WhatsApp hotlines, and addresses.
            </p>

            <form 
              onSubmit={(e) => {
                e.preventDefault();
                alert('Company details successfully updated across the web app!');
              }}
              className="space-y-4 font-mono text-xs"
            >
              <div>
                <label className="block text-[#6B7280] mb-1">Company Name</label>
                <input
                  type="text"
                  value={companyInfo.name}
                  onChange={(e) => updateCompanyInfo({ name: e.target.value })}
                  className="w-full px-3 py-2 bg-[#ECE5D2] border border-[#DDD4BD] rounded text-[#20241E]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[#6B7280] mb-1">Primary Phone</label>
                  <input
                    type="text"
                    value={companyInfo.phone}
                    onChange={(e) => updateCompanyInfo({ phone: e.target.value })}
                    className="w-full px-3 py-2 bg-[#ECE5D2] border border-[#DDD4BD] rounded text-[#20241E]"
                  />
                </div>
                <div>
                  <label className="block text-[#6B7280] mb-1">WhatsApp Hotline</label>
                  <input
                    type="text"
                    value={companyInfo.whatsapp}
                    onChange={(e) => updateCompanyInfo({ whatsapp: e.target.value })}
                    className="w-full px-3 py-2 bg-[#ECE5D2] border border-[#DDD4BD] rounded text-[#20241E]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[#6B7280] mb-1">Karachi Head Office Address</label>
                <input
                  type="text"
                  value={companyInfo.addressKarachi}
                  onChange={(e) => updateCompanyInfo({ addressKarachi: e.target.value })}
                  className="w-full px-3 py-2 bg-[#ECE5D2] border border-[#DDD4BD] rounded text-[#20241E]"
                />
              </div>

              <div>
                <label className="block text-[#6B7280] mb-1">PEC License &amp; Entity</label>
                <input
                  type="text"
                  value={companyInfo.pecLicense}
                  onChange={(e) => updateCompanyInfo({ pecLicense: e.target.value })}
                  className="w-full px-3 py-2 bg-[#ECE5D2] border border-[#DDD4BD] rounded text-[#20241E]"
                />
              </div>

              <button
                type="submit"
                className="px-5 py-2.5 rounded bg-[#3E4A2E] hover:bg-[#52633C] text-[#F5F1E5] uppercase tracking-wider font-bold transition-colors cursor-pointer"
              >
                Save Settings
              </button>
            </form>
          </div>
        )}

      </div>

      {/* ================= MODAL: ADD / EDIT PRODUCT ================= */}
      {isProductModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#F5F1E5] border border-[#DDD4BD] rounded-xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between pb-4 border-b border-[#DDD4BD] mb-6">
              <h3 className="text-base font-bold text-[#20241E] font-sans">
                {editingProduct ? 'Edit Product Item' : 'Add New Product to Database'}
              </h3>
              <button
                onClick={() => setIsProductModalOpen(false)}
                className="p-1 rounded hover:bg-[#EAE4D0] text-[#6B7280]"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSaveProduct} className="space-y-4 text-xs font-mono">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[#6B7280] mb-1">Product Name *</label>
                  <input
                    type="text"
                    required
                    value={productForm.name}
                    onChange={(e) => setProductForm({ ...productForm, name: e.target.value })}
                    className="w-full px-3 py-2 bg-[#ECE5D2] border border-[#DDD4BD] rounded text-[#20241E]"
                    placeholder="e.g. 6-Burner Heavy Duty Range"
                  />
                </div>
                <div>
                  <label className="block text-[#6B7280] mb-1">SKU / Code *</label>
                  <input
                    type="text"
                    required
                    value={productForm.sku}
                    onChange={(e) => setProductForm({ ...productForm, sku: e.target.value })}
                    className="w-full px-3 py-2 bg-[#ECE5D2] border border-[#DDD4BD] rounded text-[#20241E]"
                    placeholder="e.g. KE-R6-01"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-[#6B7280] mb-1">Category</label>
                  <select
                    value={productForm.category}
                    onChange={(e) => setProductForm({ ...productForm, category: e.target.value as ProductCategory })}
                    className="w-full px-3 py-2 bg-[#ECE5D2] border border-[#DDD4BD] rounded text-[#20241E]"
                  >
                    {categories.map(c => (
                      <option key={c.id} value={c.id}>{c.title}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-[#6B7280] mb-1">Subcategory</label>
                  <input
                    type="text"
                    value={productForm.subcategory}
                    onChange={(e) => setProductForm({ ...productForm, subcategory: e.target.value })}
                    className="w-full px-3 py-2 bg-[#ECE5D2] border border-[#DDD4BD] rounded text-[#20241E]"
                    placeholder="e.g. Cooking Ranges"
                  />
                </div>
                <div>
                  <label className="block text-[#6B7280] mb-1">Brand</label>
                  <input
                    type="text"
                    value={productForm.brand}
                    onChange={(e) => setProductForm({ ...productForm, brand: e.target.value })}
                    className="w-full px-3 py-2 bg-[#ECE5D2] border border-[#DDD4BD] rounded text-[#20241E]"
                    placeholder="Kitchen Engineering"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[#6B7280] mb-1">Image URL</label>
                <input
                  type="url"
                  value={productForm.image}
                  onChange={(e) => setProductForm({ ...productForm, image: e.target.value })}
                  className="w-full px-3 py-2 bg-[#ECE5D2] border border-[#DDD4BD] rounded text-[#20241E]"
                  placeholder="https://images.unsplash.com/..."
                />
              </div>

              <div>
                <label className="block text-[#6B7280] mb-1">Short Description</label>
                <input
                  type="text"
                  value={productForm.shortDesc}
                  onChange={(e) => setProductForm({ ...productForm, shortDesc: e.target.value })}
                  className="w-full px-3 py-2 bg-[#ECE5D2] border border-[#DDD4BD] rounded text-[#20241E]"
                  placeholder="Brief equipment overview"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[#6B7280] mb-1">Dimensions</label>
                  <input
                    type="text"
                    value={productForm.dimensions}
                    onChange={(e) => setProductForm({ ...productForm, dimensions: e.target.value })}
                    className="w-full px-3 py-2 bg-[#ECE5D2] border border-[#DDD4BD] rounded text-[#20241E]"
                  />
                </div>
                <div>
                  <label className="block text-[#6B7280] mb-1">Power / Fuel</label>
                  <input
                    type="text"
                    value={productForm.power}
                    onChange={(e) => setProductForm({ ...productForm, power: e.target.value })}
                    className="w-full px-3 py-2 bg-[#ECE5D2] border border-[#DDD4BD] rounded text-[#20241E]"
                  />
                </div>
              </div>

              <div className="flex items-center justify-end gap-3 pt-4 border-t border-[#DDD4BD]">
                <button
                  type="button"
                  onClick={() => setIsProductModalOpen(false)}
                  className="px-4 py-2 rounded bg-[#EAE4D0] text-[#20241E] hover:bg-[#DDD4BD] cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded bg-[#3E4A2E] text-[#F5F1E5] font-bold hover:bg-[#52633C] cursor-pointer"
                >
                  {editingProduct ? 'Save Changes' : 'Create Product'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ================= MODAL: BULK CSV IMPORT ================= */}
      {isBulkModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#F5F1E5] border border-[#DDD4BD] rounded-xl max-w-xl w-full p-6 sm:p-8 shadow-2xl">
            <div className="flex items-center justify-between pb-4 border-b border-[#DDD4BD] mb-4">
              <h3 className="text-base font-bold text-[#20241E] font-sans">
                Bulk Import Products from CSV
              </h3>
              <button
                onClick={() => setIsBulkModalOpen(false)}
                className="p-1 rounded hover:bg-[#EAE4D0] text-[#6B7280]"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-4 text-xs font-mono">
              <p className="text-[#6B7280]">
                Paste comma-separated values (CSV) with header row: <code className="bg-[#EAE4D0] px-1 py-0.5 rounded">name, category, subcategory, brand, sku, shortDesc, image</code>
              </p>

              <div className="flex items-center justify-between">
                <button
                  type="button"
                  onClick={downloadCsvTemplate}
                  className="text-emerald-700 hover:underline flex items-center gap-1 font-bold cursor-pointer"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download CSV Template File</span>
                </button>

                <label className="text-[#3E4A2E] hover:underline flex items-center gap-1 font-bold cursor-pointer">
                  <UploadCloud className="w-3.5 h-3.5" />
                  <span>Upload .CSV File</span>
                  <input
                    type="file"
                    accept=".csv,text/csv"
                    className="hidden"
                    onChange={(e) => {
                      const file = e.target.files?.[0];
                      if (!file) return;
                      const reader = new FileReader();
                      reader.onload = (event) => {
                        const content = event.target?.result as string;
                        if (content) setBulkCsvText(content);
                      };
                      reader.readAsText(file);
                    }}
                  />
                </label>
              </div>

              <form onSubmit={handleBulkImportSubmit} className="space-y-4">
                <textarea
                  rows={8}
                  value={bulkCsvText}
                  onChange={(e) => setBulkCsvText(e.target.value)}
                  placeholder="Paste CSV content here..."
                  className="w-full p-3 bg-[#ECE5D2] border border-[#DDD4BD] rounded text-[#20241E] font-mono text-xs focus:outline-none focus:border-[#3E4A2E]"
                  required
                />

                {bulkImportMessage && (
                  <div className="p-3 bg-emerald-100 border border-emerald-300 text-emerald-800 rounded flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>{bulkImportMessage}</span>
                  </div>
                )}

                <div className="flex items-center justify-end gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => setIsBulkModalOpen(false)}
                    className="px-4 py-2 rounded bg-[#EAE4D0] text-[#20241E] hover:bg-[#DDD4BD] cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2 rounded bg-[#3E4A2E] text-[#F5F1E5] font-bold hover:bg-[#52633C] cursor-pointer"
                  >
                    Import Products Now
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* ================= MODAL: ADD CATEGORY ================= */}
      {isCategoryModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#F5F1E5] border border-[#DDD4BD] rounded-xl max-w-md w-full p-6 shadow-2xl">
            <div className="flex items-center justify-between pb-4 border-b border-[#DDD4BD] mb-4">
              <h3 className="text-base font-bold text-[#20241E]">Add Equipment Category</h3>
              <button onClick={() => setIsCategoryModalOpen(false)} className="text-[#6B7280]">
                <X className="w-5 h-5" />
              </button>
            </div>

            <form 
              onSubmit={(e) => {
                e.preventDefault();
                if (!categoryForm.title) return;
                const newCat: CategoryInfo = {
                  id: categoryForm.slug.toLowerCase().replace(/\s+/g, '-') as ProductCategory,
                  title: categoryForm.title,
                  slug: categoryForm.slug.toLowerCase().replace(/\s+/g, '-'),
                  shortDesc: categoryForm.shortDesc,
                  subcategories: categoryForm.subcategoriesStr.split(',').map(s => s.trim()).filter(Boolean),
                  featuredImage: categoryForm.featuredImage,
                  itemCount: categoryForm.itemCount
                };
                addCategory(newCat);
                setIsCategoryModalOpen(false);
              }}
              className="space-y-3 text-xs font-mono"
            >
              <div>
                <label className="block text-[#6B7280] mb-1">Category Title</label>
                <input
                  type="text"
                  required
                  value={categoryForm.title}
                  onChange={(e) => setCategoryForm({ ...categoryForm, title: e.target.value, slug: e.target.value.toLowerCase().replace(/\s+/g, '-') })}
                  className="w-full px-3 py-2 bg-[#ECE5D2] border border-[#DDD4BD] rounded text-[#20241E]"
                  placeholder="e.g. Dishwashing Systems"
                />
              </div>
              <div>
                <label className="block text-[#6B7280] mb-1">Short Description</label>
                <input
                  type="text"
                  value={categoryForm.shortDesc}
                  onChange={(e) => setCategoryForm({ ...categoryForm, shortDesc: e.target.value })}
                  className="w-full px-3 py-2 bg-[#ECE5D2] border border-[#DDD4BD] rounded text-[#20241E]"
                  placeholder="Brief sector overview"
                />
              </div>
              <div>
                <label className="block text-[#6B7280] mb-1">Subcategories (comma separated)</label>
                <input
                  type="text"
                  value={categoryForm.subcategoriesStr}
                  onChange={(e) => setCategoryForm({ ...categoryForm, subcategoriesStr: e.target.value })}
                  className="w-full px-3 py-2 bg-[#ECE5D2] border border-[#DDD4BD] rounded text-[#20241E]"
                  placeholder="Conveyor Dishwasher, Undercounter, Pot Washer"
                />
              </div>
              <div>
                <label className="block text-[#6B7280] mb-1">Featured Image URL</label>
                <input
                  type="url"
                  value={categoryForm.featuredImage}
                  onChange={(e) => setCategoryForm({ ...categoryForm, featuredImage: e.target.value })}
                  className="w-full px-3 py-2 bg-[#ECE5D2] border border-[#DDD4BD] rounded text-[#20241E]"
                />
              </div>

              <div className="flex items-center justify-end gap-2 pt-3">
                <button type="button" onClick={() => setIsCategoryModalOpen(false)} className="px-3 py-1.5 rounded bg-[#EAE4D0]">Cancel</button>
                <button type="submit" className="px-4 py-1.5 rounded bg-[#3E4A2E] text-[#F5F1E5] font-bold">Add Category</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ================= MODAL: ADD BRAND ================= */}
      {isBrandModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#F5F1E5] border border-[#DDD4BD] rounded-xl max-w-md w-full p-6 shadow-2xl">
            <div className="flex items-center justify-between pb-4 border-b border-[#DDD4BD] mb-4">
              <h3 className="text-base font-bold text-[#20241E]">Add Brand Partner</h3>
              <button onClick={() => setIsBrandModalOpen(false)} className="text-[#6B7280]">
                <X className="w-5 h-5" />
              </button>
            </div>

            <form 
              onSubmit={(e) => {
                e.preventDefault();
                if (!brandForm.name) return;
                const newBrand: BrandPartner = {
                  id: `brand-${Date.now()}`,
                  name: brandForm.name,
                  country: brandForm.country,
                  category: 'Commercial Equipment',
                  tagline: brandForm.description || 'Professional Commercial Equipment',
                  logoText: brandForm.name,
                  logoUrl: brandForm.logoUrl,
                  description: brandForm.description
                };
                addBrand(newBrand);
                setIsBrandModalOpen(false);
              }}
              className="space-y-3 text-xs font-mono"
            >
              <div>
                <label className="block text-[#6B7280] mb-1">Brand Name</label>
                <input
                  type="text"
                  required
                  value={brandForm.name}
                  onChange={(e) => setBrandForm({ ...brandForm, name: e.target.value })}
                  className="w-full px-3 py-2 bg-[#ECE5D2] border border-[#DDD4BD] rounded text-[#20241E]"
                  placeholder="e.g. Rational / Hobart"
                />
              </div>
              <div>
                <label className="block text-[#6B7280] mb-1">Country of Origin</label>
                <input
                  type="text"
                  value={brandForm.country}
                  onChange={(e) => setBrandForm({ ...brandForm, country: e.target.value })}
                  className="w-full px-3 py-2 bg-[#ECE5D2] border border-[#DDD4BD] rounded text-[#20241E]"
                  placeholder="Germany / USA"
                />
              </div>
              <div>
                <label className="block text-[#6B7280] mb-1">Logo URL</label>
                <input
                  type="url"
                  value={brandForm.logoUrl}
                  onChange={(e) => setBrandForm({ ...brandForm, logoUrl: e.target.value })}
                  className="w-full px-3 py-2 bg-[#ECE5D2] border border-[#DDD4BD] rounded text-[#20241E]"
                />
              </div>
              <div>
                <label className="block text-[#6B7280] mb-1">Description</label>
                <input
                  type="text"
                  value={brandForm.description}
                  onChange={(e) => setBrandForm({ ...brandForm, description: e.target.value })}
                  className="w-full px-3 py-2 bg-[#ECE5D2] border border-[#DDD4BD] rounded text-[#20241E]"
                />
              </div>

              <div className="flex items-center justify-end gap-2 pt-3">
                <button type="button" onClick={() => setIsBrandModalOpen(false)} className="px-3 py-1.5 rounded bg-[#EAE4D0]">Cancel</button>
                <button type="submit" className="px-4 py-1.5 rounded bg-[#3E4A2E] text-[#F5F1E5] font-bold">Add Brand</button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
};
