import React, { useState, useMemo, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { 
  Search, 
  Filter, 
  ChevronRight, 
  ArrowRight, 
  ShieldCheck, 
  Layers, 
  X,
  FileCheck,
  CheckCircle2,
  Sparkles,
  ExternalLink
} from 'lucide-react';
import { CATEGORIES, MATERIALS, PRODUCTS, findCategory, findMaterial, makeGradeSlug } from '../data/productsData';
import WhatsAppIcon from '../components/WhatsAppIcon';

export default function ProductsPage({ onOpenQuoteModal }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryParam = searchParams.get('category') || 'all';
  const materialParam = searchParams.get('material') || 'all';
  
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(categoryParam);
  const [selectedMaterial, setSelectedMaterial] = useState(materialParam);

  // Sync state if URL query param changes
  useEffect(() => {
    setSelectedCategory(categoryParam);
  }, [categoryParam]);

  useEffect(() => {
    setSelectedMaterial(materialParam);
  }, [materialParam]);

  const activeCategoryObj = useMemo(() => {
    if (selectedCategory === 'all') return null;
    return findCategory(selectedCategory);
  }, [selectedCategory]);

  const activeMaterialObj = useMemo(() => {
    if (selectedMaterial === 'all') return null;
    return findMaterial(selectedMaterial);
  }, [selectedMaterial]);

  // Dynamic SEO Document Title
  useEffect(() => {
    if (activeCategoryObj) {
      document.title = `${activeCategoryObj.title} Manufacturer & Stockist in India | Pawan Steel Alloys`;
    } else if (activeMaterialObj) {
      document.title = `${activeMaterialObj.name} Products Supplier & Stockist | Pawan Steel Alloys`;
    } else {
      document.title = "Industrial Steel Products & Piping Materials Catalogue | Pawan Steel Alloys";
    }
  }, [activeCategoryObj, activeMaterialObj]);

  const handleCategorySelect = (slug) => {
    setSelectedCategory(slug);
    const newParams = new URLSearchParams(searchParams);
    if (slug === 'all') {
      newParams.delete('category');
    } else {
      newParams.set('category', slug);
    }
    setSearchParams(newParams);
  };

  const handleMaterialSelect = (slug) => {
    setSelectedMaterial(slug);
    const newParams = new URLSearchParams(searchParams);
    if (slug === 'all') {
      newParams.delete('material');
    } else {
      newParams.set('material', slug);
    }
    setSearchParams(newParams);
  };

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedCategory('all');
    setSelectedMaterial('all');
    setSearchParams({});
  };

  // Filter the 8 categories and their nested related products dynamically
  const filteredCategories = useMemo(() => {
    const term = searchTerm.trim().toLowerCase();

    return CATEGORIES.map((category) => {
      // Find all products that belong to this category
      const allCategoryProducts = PRODUCTS.filter((p) => 
        p.categorySlug === category.slug || 
        p.categorySlug === category.oldSlug || 
        p.categorySlug === category.id
      );

      // Filter products by material if selected
      const materialFilteredProducts = allCategoryProducts.filter((p) => {
        if (selectedMaterial === 'all') return true;
        return p.materials.includes(selectedMaterial);
      });

      // Filter products by search term if typed
      const searchMatchedProducts = materialFilteredProducts.filter((p) => {
        if (!term) return true;
        return (
          p.name.toLowerCase().includes(term) ||
          p.shortDesc.toLowerCase().includes(term) ||
          p.grades.some((g) => g.toLowerCase().includes(term))
        );
      });

      // Category matches if:
      // 1. Search term matches category title, description, or highlights
      const catMatchesSearch = !term ||
        category.title.toLowerCase().includes(term) ||
        category.shortDesc.toLowerCase().includes(term) ||
        category.highlights.some((h) => h.toLowerCase().includes(term));

      // 2. Category matches selectedCategory filter
      const catObj = selectedCategory !== 'all' ? findCategory(selectedCategory) : null;
      const catMatchesFilter = selectedCategory === 'all' ||
        category.slug === selectedCategory ||
        category.id === selectedCategory ||
        (catObj && (category.slug === catObj.slug || category.id === catObj.id));

      // 3. Material filter match: Category has products matching the material
      const hasProductsForMaterial = selectedMaterial === 'all' || materialFilteredProducts.length > 0;

      // Products to display:
      // If there are search-matched products, show them.
      // Otherwise if the category itself matched the search (or no search), show all material-filtered products.
      const productsToDisplay = searchMatchedProducts.length > 0
        ? searchMatchedProducts
        : (catMatchesSearch ? materialFilteredProducts : []);

      const isCategoryVisible = catMatchesFilter && hasProductsForMaterial && (catMatchesSearch || searchMatchedProducts.length > 0);

      return {
        ...category,
        relatedProducts: productsToDisplay,
        totalProductCount: allCategoryProducts.length,
        isVisible: isCategoryVisible,
      };
    }).filter((c) => c.isVisible);
  }, [searchTerm, selectedCategory, selectedMaterial]);

  // Total matching products count across visible categories
  const totalMatchingProducts = useMemo(() => {
    return filteredCategories.reduce((acc, cat) => acc + cat.relatedProducts.length, 0);
  }, [filteredCategories]);

  return (
    <div className="w-full bg-[#F3F7FB] min-h-screen">
      {/* Header Banner with Photographic Hero Image */}
      <section className="relative text-white py-16 md:py-20 overflow-hidden border-b-4 border-[#D71932] bg-[#0A1F3D]">
        {/* Photographic Hero Image with Dark Metallic Gradient Overlay */}
        <div className="absolute inset-0">
          <img
            src={activeCategoryObj ? activeCategoryObj.image : (activeMaterialObj ? '/images/hero-4.jpg' : '/images/hero-3.jpg')}
            alt="Pawan Steel Alloys Industrial Products"
            className="w-full h-full object-cover object-center filter brightness-[0.25] contrast-125 transform scale-105 transition-transform duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A1F3D] via-[#123467]/90 to-[#0A1F3D]/80" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/30 via-transparent to-black/60" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl space-y-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#D71932] text-white text-xs font-bold uppercase tracking-wider rounded shadow-sm">
              <Layers className="w-3.5 h-3.5" />
              <span>
                {activeCategoryObj 
                  ? activeCategoryObj.title 
                  : (activeMaterialObj ? activeMaterialObj.name : "All 8 Product Categories")}
              </span>
            </span>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight">
              {activeCategoryObj 
                ? activeCategoryObj.title 
                : (activeMaterialObj ? `${activeMaterialObj.name} Products` : "Industrial Metals & Fittings Catalogue")}
            </h1>

            <p className="text-base sm:text-lg text-slate-200 font-medium">
              {activeCategoryObj 
                ? "Manufacturer, Stockist & Supplier in India" 
                : (activeMaterialObj ? "Precision Metallurgy & Ready Stock Supply" : "Complete Stockist Portfolio & Ready Mill Specifications")}
            </p>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-3xl">
              {activeCategoryObj 
                ? activeCategoryObj.shortDesc 
                : (activeMaterialObj ? activeMaterialObj.shortDesc : "Explore our 8 primary industrial product categories. Each category contains precision-manufactured sub-products, ready stock specifications, and metallurgical grades.")}
            </p>
          </div>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="bg-white border-b border-slate-200 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-2 text-xs text-slate-500">
          <Link to="/" className="hover:text-[#D71932] transition-colors">Home</Link>
          <ChevronRight className="w-3 h-3 text-slate-400" />
          <span className="text-slate-800 font-semibold">Products</span>
        </div>
      </div>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        
        {/* Search & Filter Bar */}
        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm mb-8 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
            
            {/* Search Input */}
            <div className="md:col-span-5 relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search by category, product name, or grade (e.g., 316L, Flange)..."
                className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#D71932] focus:bg-white transition"
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Category Dropdown (Mobile / Compact) */}
            <div className="md:col-span-3">
              <select
                value={selectedCategory}
                onChange={(e) => handleCategorySelect(e.target.value)}
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#D71932] focus:bg-white"
              >
                <option value="all">All Product Categories (8)</option>
                {CATEGORIES.map((c) => (
                  <option key={c.id} value={c.slug}>
                    {c.title}
                  </option>
                ))}
              </select>
            </div>

            {/* Material Dropdown */}
            <div className="md:col-span-3">
              <select
                value={selectedMaterial}
                onChange={(e) => handleMaterialSelect(e.target.value)}
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#D71932] focus:bg-white"
              >
                <option value="all">All Materials (13)</option>
                {MATERIALS.map((m) => (
                  <option key={m.id} value={m.slug}>
                    {m.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Reset Filters / Count Info */}
            <div className="md:col-span-1 text-center md:text-right">
              {(searchTerm || selectedCategory !== 'all' || selectedMaterial !== 'all') ? (
                <button
                  onClick={clearFilters}
                  type="button"
                  className="inline-flex items-center text-xs font-bold text-red-600 hover:text-red-700 py-2 px-3 bg-red-50 hover:bg-red-100 rounded-lg transition"
                >
                  <span>Reset</span>
                </button>
              ) : (
                <span className="text-xs text-slate-500 font-bold whitespace-nowrap">
                  {filteredCategories.length} Categories
                </span>
              )}
            </div>

          </div>

          {/* Category Quick Pills (Desktop) */}
          <div className="hidden lg:flex flex-wrap items-center gap-2 pt-3 border-t border-slate-100">
            <span className="text-xs font-semibold text-slate-500 mr-1">Categories:</span>
            <button
              onClick={() => handleCategorySelect('all')}
              className={`text-xs px-3 py-1.5 rounded-md font-semibold transition ${
                selectedCategory === 'all'
                  ? 'bg-[#123467] text-white shadow-xs'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              All (8)
            </button>
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => handleCategorySelect(cat.slug)}
                className={`text-xs px-3 py-1.5 rounded-md font-semibold transition ${
                  selectedCategory === cat.slug
                    ? 'bg-[#D71932] text-white shadow-sm'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {cat.title}
              </button>
            ))}
          </div>
        </div>

        {/* ------------------------------------------------------------- */}
        {/* 8 PRODUCT CATEGORY CARDS WITH NESTED RELATED PRODUCTS         */}
        {/* ------------------------------------------------------------- */}
        {filteredCategories.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-xl border border-slate-200 p-8 space-y-4">
            <div className="p-4 w-fit rounded-full bg-slate-100 text-slate-400 mx-auto">
              <Search className="w-8 h-8" />
            </div>
            <h2 className="text-lg font-bold text-[#123467]">No Product Categories Found</h2>
            <p className="text-sm text-slate-500 max-w-md mx-auto">
              We couldn't find any products or categories matching your active filters. Pawan Steel Alloys supplies custom specifications upon request.
            </p>
            <div className="pt-2 flex flex-wrap justify-center gap-3">
              <button
                onClick={clearFilters}
                className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold rounded-md"
              >
                Clear Filters
              </button>
              <button
                onClick={onOpenQuoteModal}
                className="px-4 py-2 bg-[#D71932] hover:bg-[#B51226] text-white text-xs font-bold rounded-md"
              >
                Inquire For Custom Grade
              </button>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredCategories.map((cat, catIndex) => (
              <div
                key={cat.id}
                className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-subtle hover:shadow-hover transition-all duration-300 flex flex-col justify-between group transform hover:-translate-y-1"
              >
                <div>
                  {/* Category Clean Image Banner */}
                  <div className="relative h-60 w-full bg-slate-100 overflow-hidden border-b border-slate-100">
                    <img
                      src={cat.image}
                      alt={`${cat.title} manufacturer India`}
                      className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute top-3 left-3 flex items-center gap-2">
                      <span className="text-xs font-bold bg-[#123467]/95 text-white px-3 py-1 rounded-md shadow-sm backdrop-blur-sm">
                        Category {catIndex + 1} of 8
                      </span>
                    </div>
                    <div className="absolute bottom-3 right-3">
                      <span className="text-xs font-semibold bg-white/95 text-slate-800 px-2.5 py-1 rounded-md shadow-sm border border-slate-200">
                        {cat.relatedProducts.length} Standard Configurations
                      </span>
                    </div>
                  </div>

                  {/* Category Info Header */}
                  <div className="p-6 pb-4">
                    <h2 className="text-2xl font-black text-[#123467] group-hover:text-[#D71932] transition-colors leading-tight">
                      <Link to={`/products/${cat.slug}`}>
                        {cat.title}
                      </Link>
                    </h2>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-2.5">
                      {cat.shortDesc}
                    </p>

                    {/* Category Highlights */}
                    {cat.highlights && (
                      <div className="flex flex-wrap gap-1.5 mt-3 pt-3 border-t border-slate-100">
                        {cat.highlights.map((h, i) => (
                          <span
                            key={i}
                            className="text-[11px] font-medium bg-slate-100 text-slate-700 px-2.5 py-0.5 rounded-full border border-slate-200"
                          >
                            {h}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* ------------------------------------------------------------- */}
                    {/* RELATED PRODUCTS SECTION UNDER THIS CATEGORY CARD             */}
                    {/* ------------------------------------------------------------- */}
                    <div className="mt-5 pt-4 border-t border-slate-100 bg-slate-50/80 p-4 rounded-xl space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold uppercase tracking-wider text-slate-800 flex items-center gap-1.5">
                          <Sparkles className="w-3.5 h-3.5 text-[#D71932]" />
                          <span>Related Products ({cat.relatedProducts.length}):</span>
                        </span>
                        <Link
                          to={`/products/${cat.slug}`}
                          className="text-xs font-bold text-[#D71932] hover:underline flex items-center gap-1"
                        >
                          <span>Category Showcase</span>
                          <ChevronRight className="w-3 h-3" />
                        </Link>
                      </div>

                      <div className="space-y-2.5">
                        {cat.relatedProducts.map((subProd) => (
                          <div
                            key={subProd.id}
                            className="bg-white p-3.5 rounded-xl border border-slate-200 shadow-2xs hover:border-[#123467] transition-all flex flex-col sm:flex-row gap-3 items-start sm:items-center justify-between group/sub"
                          >
                            <div className="flex items-start sm:items-center gap-3 flex-1 min-w-0">
                              <img
                                src={subProd.image}
                                alt={subProd.name}
                                className="w-14 h-14 rounded-lg object-cover object-center border border-slate-200 flex-shrink-0 bg-slate-100"
                                loading="lazy"
                              />
                              <div className="min-w-0 flex-1">
                                <Link
                                  to={`/products/${subProd.slug}`}
                                  className="text-sm font-bold text-[#123467] group-hover/sub:text-[#D71932] transition leading-snug block truncate"
                                >
                                  {subProd.name}
                                </Link>
                                <p className="text-[11px] text-slate-500 line-clamp-1 mt-0.5">
                                  {subProd.shortDesc}
                                </p>
                                
                                {/* Clickable Grade Pills */}
                                <div className="flex flex-wrap gap-1 mt-1.5">
                                  {subProd.grades.slice(0, 4).map((g, idx) => (
                                    <Link
                                      key={idx}
                                      to={`/products/${subProd.slug}-grade-${makeGradeSlug(g)}`}
                                      className="text-[10px] font-mono px-2 py-0.5 bg-slate-100 hover:bg-[#123467] hover:text-white text-slate-700 rounded transition border border-slate-200"
                                      title={`Inspect ${g} grade specifications`}
                                    >
                                      {g}
                                    </Link>
                                  ))}
                                  {subProd.grades.length > 4 && (
                                    <Link
                                      to={`/products/${subProd.slug}`}
                                      className="text-[10px] text-[#D71932] hover:underline font-semibold self-center px-1"
                                    >
                                      +{subProd.grades.length - 4} more
                                    </Link>
                                  )}
                                </div>
                              </div>
                            </div>

                            <Link
                              to={`/products/${subProd.slug}`}
                              className="inline-flex items-center text-xs font-bold text-[#123467] group-hover/sub:text-[#D71932] transition whitespace-nowrap px-3 py-1.5 bg-slate-50 group-hover/sub:bg-red-50 rounded-lg border border-slate-200 group-hover/sub:border-red-200 flex-shrink-0 self-end sm:self-center"
                            >
                              <span>Specs</span>
                              <ChevronRight className="w-3.5 h-3.5 ml-0.5" />
                            </Link>
                          </div>
                        ))}
                      </div>
                    </div>

                  </div>
                </div>

                {/* Card Footer Actions */}
                <div className="p-6 pt-0 mt-4 flex flex-wrap items-center justify-between gap-3 border-t border-slate-100">
                  <Link
                    to={`/products/${cat.slug}`}
                    className="inline-flex items-center gap-1.5 px-4 py-2.5 bg-[#123467] hover:bg-[#1B478A] text-white text-xs font-bold rounded-lg shadow-xs transition"
                  >
                    <span>Explore All {cat.title}</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </Link>

                  <div className="flex items-center gap-2">
                    <a
                      href={`https://wa.me/919833416144?text=${encodeURIComponent(`Hi Pawan Steel Alloys, I am inquiring about products in category: ${cat.title}. Please provide current stock and pricing.`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-lg shadow-xs transition"
                    >
                      <WhatsAppIcon className="w-3.5 h-3.5 text-white" />
                      <span>WhatsApp</span>
                    </a>

                    <button
                      onClick={() => onOpenQuoteModal && onOpenQuoteModal('', cat.title)}
                      type="button"
                      className="px-4 py-2 bg-[#D71932] hover:bg-[#B51226] text-white text-xs font-bold rounded-lg shadow-xs transition"
                    >
                      Get Quote
                    </button>
                  </div>
                </div>

              </div>
            ))}
          </div>
        )}

        {/* Informational Callout */}
        <div className="mt-14 p-6 bg-slate-900 text-white rounded-xl border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-[#D71932]" />
              <span>Need Non-Standard Dimensions or Mill Test Reports?</span>
            </h2>
            <p className="text-xs text-slate-300 max-w-2xl">
              We provide cut-to-length pipes, custom machined flanges, and EN 10204 3.1 inspection certification upon order confirmation.
            </p>
          </div>
          <button
            onClick={onOpenQuoteModal}
            className="px-6 py-2.5 bg-[#D71932] hover:bg-[#B51226] text-white text-xs font-bold rounded-md whitespace-nowrap shadow"
          >
            Request Custom Quotation
          </button>
        </div>

      </div>
    </div>
  );
}
