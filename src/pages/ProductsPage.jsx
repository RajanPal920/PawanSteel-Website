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
  CheckCircle2
} from 'lucide-react';
import { CATEGORIES, MATERIALS, PRODUCTS } from '../data/productsData';

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

  // Filter products dynamically
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((item) => {
      // 1. Search filter
      const matchesSearch = 
        !searchTerm.trim() ||
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.shortDesc.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.grades.some((g) => g.toLowerCase().includes(searchTerm.toLowerCase()));

      // 2. Category filter
      const matchesCategory = 
        selectedCategory === 'all' || 
        item.categorySlug === selectedCategory;

      // 3. Material filter
      const matchesMaterial = 
        selectedMaterial === 'all' || 
        item.materials.includes(selectedMaterial);

      return matchesSearch && matchesCategory && matchesMaterial;
    });
  }, [searchTerm, selectedCategory, selectedMaterial]);

  return (
    <div className="w-full bg-[#F3F7FB] min-h-screen">
      {/* Header Banner */}
      <section className="bg-[#123467] text-white py-14 relative overflow-hidden border-b-4 border-[#D71932]">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A1F3D] via-[#123467] to-[#1B478A] opacity-90" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-red-600/90 text-white text-xs font-bold uppercase tracking-wider rounded-sm backdrop-blur-sm">
              <Layers className="w-3.5 h-3.5" />
              <span>Complete Product Catalogue</span>
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white">
              Industrial Metals & Fittings Catalogue
            </h1>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Explore our full stock range of stainless steel, carbon steel, and specialty alloy pipes, tubes, sheets, plates, round bars, flanges, fasteners, and precision fittings.
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
                placeholder="Search products by name, grade (e.g., 316L, Inconel, Flange)..."
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

            {/* Reset Filters */}
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
                <span className="text-xs text-slate-400 font-medium">
                  {filteredProducts.length} items
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
                  ? 'bg-[#123467] text-white'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              All
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

        {/* Product Cards Grid */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-xl border border-slate-200 p-8 space-y-4">
            <div className="p-4 w-fit rounded-full bg-slate-100 text-slate-400 mx-auto">
              <Search className="w-8 h-8" />
            </div>
            <h2 className="text-lg font-bold text-[#123467]">No Products Found</h2>
            <p className="text-sm text-slate-500 max-w-md mx-auto">
              We couldn't find any products matching your active filters. Pawan Steel Alloys supplies custom specifications upon request.
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-xl overflow-hidden border border-slate-200 shadow-subtle hover:shadow-hover transition-all duration-300 flex flex-col group transform hover:-translate-y-1"
              >
                {/* Product Image */}
                <div className="relative h-56 w-full bg-slate-100 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                    <span className="text-[11px] font-bold bg-[#123467]/90 text-white px-2.5 py-1 rounded backdrop-blur-sm">
                      {product.categoryName}
                    </span>
                  </div>
                  <div className="absolute bottom-3 right-3">
                    <span className="text-[10px] font-semibold bg-white/90 text-slate-800 px-2 py-0.5 rounded shadow-sm backdrop-blur-sm">
                      {product.inStockStatus}
                    </span>
                  </div>
                </div>

                {/* Card Info */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h2 className="text-lg font-bold text-[#123467] group-hover:text-[#D71932] transition-colors leading-snug">
                      <Link to={`/products/${product.slug}`}>
                        {product.name}
                      </Link>
                    </h2>
                    
                    <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed mt-2">
                      {product.shortDesc}
                    </p>

                    {/* Available Grade Chips */}
                    <div className="mt-4 pt-3 border-t border-slate-100">
                      <span className="text-[11px] font-semibold text-slate-500 block mb-1.5">
                        Key Available Grades:
                      </span>
                      <div className="flex flex-wrap gap-1">
                        {product.grades.slice(0, 4).map((grade, idx) => (
                          <span
                            key={idx}
                            className="text-[10px] font-mono px-2 py-0.5 bg-slate-100 text-slate-700 rounded border border-slate-200"
                          >
                            {grade}
                          </span>
                        ))}
                        {product.grades.length > 4 && (
                          <span className="text-[10px] px-1 text-slate-400 self-center">
                            +{product.grades.length - 4} more
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Action Links */}
                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-2">
                    <Link
                      to={`/products/${product.slug}`}
                      className="inline-flex items-center text-xs font-bold text-[#123467] hover:text-[#D71932] transition-colors"
                    >
                      <span>Full Specifications</span>
                      <ChevronRight className="w-3.5 h-3.5 ml-1" />
                    </Link>

                    <button
                      onClick={onOpenQuoteModal}
                      type="button"
                      className="px-3.5 py-1.5 bg-[#D71932] hover:bg-[#B51226] text-white text-xs font-bold rounded shadow-sm transition"
                    >
                      Enquire Now
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

