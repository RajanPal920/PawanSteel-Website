import React, { useState, useMemo, useEffect, useCallback } from 'react';
import { useParams, Link, useSearchParams, useNavigate, Navigate } from 'react-router-dom';
import { 
  ChevronRight, 
  ArrowLeft, 
  ShieldCheck, 
  CheckCircle2, 
  FileText, 
  Mail, 
  Layers,
  HelpCircle,
  Award,
  Sparkles,
  ArrowRight,
  ExternalLink,
  Flame,
  Info
} from 'lucide-react';
import WhatsAppIcon from '../components/WhatsAppIcon';
import { 
  PRODUCTS, 
  CATEGORIES, 
  MATERIALS, 
  findProduct, 
  findCategory,
  findMaterial,
  parseProductAndGradeSlug,
  makeGradeSlug,
  matchGradeFromSlug
} from '../data/productsData';
import { getGradeDetails } from '../data/gradesData';
import { COMPANY_INFO } from '../data/companyData';
import InquiryForm from '../components/InquiryForm';
import GradeSpecModal from '../components/GradeSpecModal';

export default function ProductDetailPage({ onOpenQuoteModal }) {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const initialGradeParam = searchParams.get('grade');

  // Parse product slug and any attached grade slug (e.g. -grade-316l)
  const { productSlug, gradeSlug: urlGradeSlug } = useMemo(() => {
    return parseProductAndGradeSlug(slug);
  }, [slug]);

  // Intelligent resolution: Check if slug is a product, category, or material
  const product = useMemo(() => {
    return findProduct(slug);
  }, [slug]);

  const category = useMemo(() => {
    if (product) return null;
    return findCategory(slug);
  }, [slug, product]);

  const material = useMemo(() => {
    if (product || category) return null;
    return findMaterial(slug);
  }, [slug, product, category]);

  // If a material slug was entered under /products/, seamlessly redirect to /materials/
  if (material) {
    return <Navigate to={`/materials/${material.slug}${urlGradeSlug ? `-grade-${urlGradeSlug}` : ''}`} replace />;
  }

  // Function to resolve active grade based on URL slug or query param
  const resolveActiveGrade = useCallback(() => {
    if (!product || !product.grades || product.grades.length === 0) return null;

    // 1. Grade specified in URL slug (-grade-316l)
    if (urlGradeSlug) {
      const matched = matchGradeFromSlug(product.grades, urlGradeSlug);
      if (matched) return matched;
    }

    // 2. Grade specified in query parameter (?grade=316L)
    if (initialGradeParam) {
      const matchedParam = matchGradeFromSlug(product.grades, initialGradeParam) || initialGradeParam;
      return matchedParam;
    }

    // 3. Fallback to first available grade
    return product.grades[0];
  }, [product, urlGradeSlug, initialGradeParam]);

  // Selected grade state for technical inspection
  const [selectedGrade, setSelectedGrade] = useState(() => resolveActiveGrade());
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalGrade, setModalGrade] = useState(null);

  // Sync selectedGrade when slug, product, or URL grade changes
  useEffect(() => {
    if (product && product.grades && product.grades.length > 0) {
      const targetGrade = resolveActiveGrade();
      if (targetGrade && targetGrade !== selectedGrade) {
        setSelectedGrade(targetGrade);
      }
    }
  }, [slug, product, urlGradeSlug, initialGradeParam, resolveActiveGrade]);

  // Dynamic SEO Document Title
  useEffect(() => {
    if (product) {
      if (selectedGrade) {
        document.title = `${product.name} (Grade ${selectedGrade}) Manufacturer India | Pawan Steel Alloys`;
      } else {
        document.title = `${product.name} Manufacturer India | Pawan Steel Alloys`;
      }
    } else if (category) {
      document.title = `${category.title} Manufacturer & Stockist in India | Pawan Steel Alloys`;
    }
  }, [product, category, selectedGrade]);

  // Active grade technical details
  const activeGradeData = useMemo(() => {
    if (!selectedGrade) return null;
    return getGradeDetails(selectedGrade);
  }, [selectedGrade]);

  // Handle grade click: Update local state AND update browser URL slug dynamically
  const handleGradeClick = (gradeName) => {
    setSelectedGrade(gradeName);
    if (product) {
      const gSlug = makeGradeSlug(gradeName);
      navigate(`/products/${product.slug}-grade-${gSlug}`, { replace: false });
    }
  };

  const handleOpenGradeModal = (gradeName) => {
    setModalGrade(gradeName);
    setIsModalOpen(true);
  };

  // Products in this category (if slug is a category)
  const categoryProducts = useMemo(() => {
    if (!category) return [];
    return PRODUCTS.filter((p) => 
      p.categorySlug === category.slug || 
      p.categorySlug === category.oldSlug || 
      p.categorySlug === category.id
    );
  }, [category]);

  // Related products (if slug is a product)
  const relatedProducts = useMemo(() => {
    if (!product) return [];
    return PRODUCTS.filter((p) => p.id !== product.id && p.categorySlug === product.categorySlug).slice(0, 3);
  }, [product]);

  // -------------------------------------------------------------
  // CASE 1: SLUG IS A CATEGORY (e.g. /products/rod-bars-manufacturer-india)
  // -------------------------------------------------------------
  if (category) {
    return (
      <div className="w-full bg-[#F3F7FB] pb-16 min-h-screen">
        {/* Category Header Banner with Hero Photographic Image */}
        <section className="relative text-white py-16 md:py-20 overflow-hidden border-b-4 border-[#D71932] bg-[#0A1F3D]">
          {/* Photographic Hero Image with Dark Metallic Gradient Overlay */}
          <div className="absolute inset-0">
            <img
              src={category.image}
              alt={category.title}
              className="w-full h-full object-cover object-center filter brightness-[0.25] contrast-125 transform scale-105 transition-transform duration-1000"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0A1F3D] via-[#123467]/90 to-[#0A1F3D]/80" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/30 via-transparent to-black/60" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl space-y-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#D71932] text-white text-xs font-bold uppercase tracking-wider rounded shadow-sm">
                <Layers className="w-3.5 h-3.5" />
                <span>Product Category Showcase</span>
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight">
                {category.title}
              </h1>
              <p className="text-base sm:text-lg text-slate-200 font-medium">
                Manufacturer, Stockist & Supplier in India
              </p>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-3xl">
                {category.shortDesc}
              </p>
            </div>
          </div>
        </section>

        {/* Breadcrumb Bar */}
        <div className="bg-white border-b border-slate-200 py-3">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-2 text-xs text-slate-500 overflow-x-auto whitespace-nowrap">
            <Link to="/" className="hover:text-[#D71932] transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3 text-slate-400 flex-shrink-0" />
            <Link to="/products" className="hover:text-[#D71932] transition-colors">Products</Link>
            <ChevronRight className="w-3 h-3 text-slate-400 flex-shrink-0" />
            <span className="text-slate-800 font-semibold">{category.title}</span>
          </div>
        </div>

        {/* Category Products Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
          <div className="mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h2 className="text-2xl font-black text-[#123467]">
                Products Available in {category.title}
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                Select any product format below to inspect technical specifications, dimensional schedules, and chemical compositions.
              </p>
            </div>
            <span className="text-xs font-bold px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-slate-700 shadow-xs w-fit">
              {categoryProducts.length} Standard Configurations
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {categoryProducts.map((prod) => (
              <div
                key={prod.id}
                className="bg-white rounded-2xl border border-slate-200 shadow-subtle hover:shadow-hover transition-all duration-300 overflow-hidden flex flex-col justify-between group transform hover:-translate-y-1.5"
              >
                <div>
                  {/* Clean Product Photograph */}
                  <div className="relative h-56 w-full bg-slate-100 overflow-hidden border-b border-slate-100">
                    <img
                      src={prod.image}
                      alt={`${prod.name} manufacturer India`}
                      className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="text-[11px] font-bold bg-[#123467]/90 text-white px-2.5 py-1 rounded backdrop-blur-sm shadow-sm">
                        {prod.categoryName}
                      </span>
                    </div>
                    <div className="absolute bottom-3 right-3">
                      <span className="text-[10px] font-semibold bg-white/95 text-slate-800 px-2 py-0.5 rounded shadow-sm border border-slate-200">
                        {prod.inStockStatus}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-lg font-bold text-[#123467] group-hover:text-[#D71932] transition-colors leading-snug">
                      <Link to={`/products/${prod.slug}`}>
                        {prod.name}
                      </Link>
                    </h3>
                    <p className="text-xs text-slate-600 line-clamp-3 mt-2 leading-relaxed">
                      {prod.shortDesc}
                    </p>

                    {/* Clickable Grade Pills on the Card */}
                    <div className="mt-4 pt-3 border-t border-slate-100">
                      <span className="text-[10px] uppercase font-bold text-slate-400 block mb-1.5">
                        Available Material Grades:
                      </span>
                      <div className="flex flex-wrap gap-1">
                        {prod.grades.slice(0, 4).map((g, idx) => (
                          <Link
                            key={idx}
                            to={`/products/${prod.slug}-grade-${makeGradeSlug(g)}`}
                            className="text-[10px] font-mono px-2 py-0.5 bg-slate-100 hover:bg-[#123467] hover:text-white transition-colors text-slate-700 rounded border border-slate-200"
                            title={`Inspect ${g} grade details`}
                          >
                            {g}
                          </Link>
                        ))}
                        {prod.grades.length > 4 && (
                          <span className="text-[10px] text-slate-400 self-center px-1">
                            +{prod.grades.length - 4} more
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0 flex items-center justify-between border-t border-slate-50 mt-4">
                  <Link
                    to={`/products/${prod.slug}`}
                    className="inline-flex items-center text-xs font-bold text-[#123467] group-hover:text-[#D71932] transition-colors"
                  >
                    <span>View Technical Specs</span>
                    <ChevronRight className="w-3.5 h-3.5 ml-1" />
                  </Link>
                  <button
                    onClick={() => onOpenQuoteModal && onOpenQuoteModal(prod.name, prod.categoryName)}
                    type="button"
                    className="px-3.5 py-1.5 bg-[#D71932] hover:bg-[#B51226] text-white text-xs font-bold rounded shadow-xs transition"
                  >
                    Get Quote
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Inquiry Section for Category */}
          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm mb-12">
            <div className="mb-6 pb-4 border-b border-slate-100">
              <h2 className="text-xl font-bold text-[#123467]">
                Inquire For {category.title} Bulk Requisition
              </h2>
              <p className="text-xs text-slate-500 mt-1">
                Direct mill pricing and ready stock availability from our Mumbai Gulalwadi warehouse.
              </p>
            </div>
            <InquiryForm initialCategory={category.title} />
          </div>
        </div>
      </div>
    );
  }

  // -------------------------------------------------------------
  // CASE 2: NOT FOUND
  // -------------------------------------------------------------
  if (!product) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center bg-[#F3F7FB] px-4 py-16">
        <div className="max-w-md w-full bg-white p-8 rounded-2xl border border-slate-200 shadow-sm text-center space-y-4">
          <HelpCircle className="w-12 h-12 text-[#D71932] mx-auto" />
          <h1 className="text-xl font-bold text-[#123467]">Product or Category Not Found</h1>
          <p className="text-sm text-slate-500">
            The requested industrial metal product or category could not be located. Please browse our comprehensive catalogue.
          </p>
          <div className="pt-2">
            <Link
              to="/products"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#123467] hover:bg-[#1B478A] text-white text-xs font-bold rounded-lg shadow-sm"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Explore Products Catalogue</span>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // -------------------------------------------------------------
  // CASE 3: SLUG IS A PRODUCT (e.g. /products/stainless-steel-round-bars-manufacturer-india)
  // -------------------------------------------------------------
  return (
    <div className="w-full bg-[#F3F7FB] pb-16">
      
      {/* Grade Details Interactive Modal */}
      <GradeSpecModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        gradeInput={modalGrade || selectedGrade}
        currentProduct={product}
        onOpenQuoteModal={onOpenQuoteModal}
      />

      {/* Product Hero Banner with Background Image & Clear Title */}
      <section className="relative text-white py-16 md:py-20 overflow-hidden border-b-4 border-[#D71932] bg-[#0A1F3D]">
        {/* Photographic Hero Image with Dark Metallic Gradient Overlay */}
        <div className="absolute inset-0">
          <img
            src={product.image}
            alt={`${product.name} industrial supply`}
            className="w-full h-full object-cover object-center filter brightness-[0.25] contrast-125 transform scale-105 transition-transform duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A1F3D] via-[#123467]/90 to-[#0A1F3D]/80" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/30 via-transparent to-black/60" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl space-y-4">
            {/* Category & Verified Scope Badge */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#D71932] text-white text-xs font-bold uppercase tracking-wider rounded shadow-sm">
                <Layers className="w-3.5 h-3.5" />
                <span>{product.categoryName}</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/10 text-white/90 border border-white/20 text-xs font-semibold rounded backdrop-blur-sm">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>ISO 9001:2015 Scope • Direct Mill Stock</span>
              </span>
            </div>

            {/* Exact Product Name Title - Prominent, Bold, Beautiful */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight">
              {selectedGrade ? (
                <>
                  <span>{product.name}</span>
                  <span className="block sm:inline text-amber-300 sm:ml-3 text-2xl sm:text-3xl md:text-4xl font-extrabold font-mono">
                    (Grade {selectedGrade})
                  </span>
                </>
              ) : (
                product.name
              )}
            </h1>

            {/* Subtitle / Short Description */}
            <p className="text-sm sm:text-base md:text-lg text-slate-200 leading-relaxed max-w-3xl font-normal">
              {product.shortDesc}
            </p>

            {/* Quick Spec Highlights */}
            <div className="pt-2 flex flex-wrap items-center gap-3 text-xs text-white/80">
              <span className="px-2.5 py-1 bg-white/10 rounded border border-white/15">
                {product.inStockStatus}
              </span>
              {product.specifications?.["Standard Specifications"] && (
                <span className="px-2.5 py-1 bg-white/10 rounded border border-white/15 font-mono">
                  {product.specifications["Standard Specifications"].split(',')[0]}
                </span>
              )}
              {product.specifications?.["Diameter Range"] && (
                <span className="px-2.5 py-1 bg-white/10 rounded border border-white/15">
                  Dia: {product.specifications["Diameter Range"]}
                </span>
              )}
              {product.specifications?.["Nominal Pipe Size (NPS)"] && (
                <span className="px-2.5 py-1 bg-white/10 rounded border border-white/15">
                  Size: {product.specifications["Nominal Pipe Size (NPS)"]}
                </span>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Breadcrumb Bar */}
      <div className="bg-white border-b border-slate-200 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-2 text-xs text-slate-500 overflow-x-auto whitespace-nowrap">
          <Link to="/" className="hover:text-[#D71932] transition-colors">Home</Link>
          <ChevronRight className="w-3 h-3 text-slate-400 flex-shrink-0" />
          <Link to="/products" className="hover:text-[#D71932] transition-colors">Products</Link>
          <ChevronRight className="w-3 h-3 text-slate-400 flex-shrink-0" />
          <Link to={`/products/${product.categorySlug}`} className="hover:text-[#D71932] transition-colors font-medium">
            {product.categoryName}
          </Link>
          <ChevronRight className="w-3 h-3 text-slate-400 flex-shrink-0" />
          <span className="text-slate-800 font-semibold truncate max-w-xs">{product.name}</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        
        {/* Main Product Showcase Card */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden mb-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Image Column - Clean, Distinct Photograph */}
            <div className="lg:col-span-5 bg-slate-100 p-4 sm:p-6 flex items-center justify-center">
              <div className="relative w-full h-80 sm:h-96 rounded-xl overflow-hidden shadow-inner border border-slate-200 bg-white">
                <img
                  src={product.image}
                  alt={`${product.name} manufacturer India`}
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute top-3 left-3">
                  <span className="text-xs font-bold px-3 py-1 bg-[#123467] text-white rounded shadow-sm">
                    {product.categoryName}
                  </span>
                </div>
                <div className="absolute bottom-3 right-3">
                  <span className="text-xs font-semibold px-2.5 py-1 bg-white/95 text-slate-800 rounded shadow-sm border border-slate-200">
                    {product.inStockStatus}
                  </span>
                </div>
              </div>
            </div>

            {/* Information Column */}
            <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between space-y-6">
              <div>
                <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#D71932] uppercase tracking-wider mb-2">
                  <ShieldCheck className="w-4 h-4" />
                  <span>ISO 9001:2015 Verified Scope • Direct Mill Stock</span>
                </div>

                <h1 className="text-2xl sm:text-3xl font-extrabold text-[#123467] leading-tight">
                  {product.name}
                </h1>

                <p className="text-sm text-slate-600 leading-relaxed mt-3">
                  {product.fullDesc}
                </p>

                {/* Interactive Clickable Material Grades */}
                <div className="mt-6 pt-4 border-t border-slate-100">
                  <div className="flex items-center justify-between mb-2.5">
                    <span className="text-xs font-bold text-slate-800 uppercase tracking-wider flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-[#D71932]" />
                      <span>Click Any Grade to View Metallurgy Specs:</span>
                    </span>
                    <span className="text-[11px] text-slate-400">Click to inspect</span>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {product.grades.map((g, idx) => {
                      const isSelected = selectedGrade === g;
                      return (
                        <button
                          key={idx}
                          type="button"
                          onClick={() => handleGradeClick(g)}
                          className={`text-xs font-mono font-bold px-3 py-1.5 rounded-lg border transition-all duration-200 cursor-pointer flex items-center gap-1.5 ${
                            isSelected
                              ? 'bg-[#123467] text-white border-[#123467] shadow-sm transform scale-105 ring-2 ring-[#D71932]/30'
                              : 'bg-slate-50 hover:bg-red-50 text-slate-700 hover:text-[#D71932] border-slate-300 hover:border-red-200'
                          }`}
                          title={`Click to view chemical composition and specs for ${g}`}
                        >
                          <span>{g}</span>
                          <Info className={`w-3 h-3 ${isSelected ? 'text-red-400' : 'text-slate-400'}`} />
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Compatible Material Categories */}
                <div className="mt-4">
                  <span className="text-xs font-bold text-slate-700 uppercase tracking-wider block mb-2">
                    Available Material Families:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {product.materials.map((matSlug) => {
                      const matObj = MATERIALS.find((m) => m.slug === matSlug || m.id === matSlug);
                      return (
                        <Link
                          key={matSlug}
                          to={`/materials/${matSlug}`}
                          className="text-xs px-2.5 py-1 bg-red-50 hover:bg-red-100 text-[#D71932] font-semibold rounded-md transition-colors"
                        >
                          {matObj ? matObj.name : matSlug}
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center gap-3">
                <button
                  onClick={() => onOpenQuoteModal && onOpenQuoteModal(product.name, product.categoryName, selectedGrade || '')}
                  type="button"
                  className="px-6 py-3 bg-[#D71932] hover:bg-[#B51226] text-white font-bold text-sm rounded-xl shadow-md transition transform hover:-translate-y-0.5"
                >
                  Request a Quote {selectedGrade ? `(${selectedGrade})` : ''}
                </button>

                <a
                  href={`https://wa.me/919833416144?text=${encodeURIComponent(`Hi Pawan Steel Alloys, I am inquiring about: ${product.name} in grade ${selectedGrade || 'standard'}. Please confirm current price and availability.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm rounded-xl shadow transition"
                >
                  <WhatsAppIcon className="w-4 h-4 text-white" />
                  <span>WhatsApp Inquiry</span>
                </a>

                {selectedGrade && (
                  <button
                    onClick={() => handleOpenGradeModal(selectedGrade)}
                    type="button"
                    className="inline-flex items-center gap-1.5 px-4 py-3 bg-slate-100 hover:bg-slate-200 text-[#123467] font-bold text-sm rounded-xl border border-slate-300 transition"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>View {selectedGrade} Full Spec</span>
                  </button>
                )}
              </div>

            </div>

          </div>
        </div>

        {/* ------------------------------------------------------------- */}
        {/* INTERACTIVE GRADE METALLURGY SPECIFICATION SHEET              */}
        {/* ------------------------------------------------------------- */}
        {activeGradeData && (
          <div className="bg-white rounded-2xl border-2 border-[#123467]/20 shadow-md p-6 sm:p-8 mb-10">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-4 mb-6 border-b border-slate-200">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold uppercase tracking-wider bg-[#123467] text-white px-2.5 py-0.5 rounded">
                    Active Grade Datasheet
                  </span>
                  <span className="text-xs font-mono font-semibold text-slate-500 bg-slate-100 px-2 py-0.5 rounded">
                    {activeGradeData.uns}
                  </span>
                </div>
                <h2 className="text-xl sm:text-2xl font-black text-[#123467]">
                  {activeGradeData.grade} for {product.name}
                </h2>
                <p className="text-xs sm:text-sm text-slate-600">
                  {activeGradeData.overview}
                </p>
              </div>

              <div className="flex-shrink-0 flex items-center gap-2">
                <button
                  onClick={() => handleOpenGradeModal(selectedGrade)}
                  type="button"
                  className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-[#123467] text-xs font-bold rounded-lg border border-slate-300 transition flex items-center gap-1.5"
                >
                  <FileText className="w-3.5 h-3.5 text-[#D71932]" />
                  <span>Full Datasheet</span>
                </button>
                <button
                  onClick={() => onOpenQuoteModal && onOpenQuoteModal(product.name, product.categoryName, activeGradeData.grade)}
                  type="button"
                  className="px-4 py-2 bg-[#D71932] hover:bg-[#B51226] text-white text-xs font-bold rounded-lg shadow-sm transition"
                >
                  Quote for {selectedGrade}
                </button>
              </div>
            </div>

            {/* Chemical & Mechanical Specification Tables */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              
              {/* Chemical Analysis Table */}
              <div className="border border-slate-200 rounded-xl overflow-hidden shadow-xs">
                <div className="bg-slate-100 px-4 py-2.5 border-b border-slate-200 flex items-center justify-between">
                  <span className="text-xs font-bold text-[#123467] uppercase tracking-wider flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-[#D71932]" />
                    Chemical Composition (% Weight)
                  </span>
                  <span className="text-[10px] text-slate-500 font-semibold">{activeGradeData.grade}</span>
                </div>
                <div className="divide-y divide-slate-100 bg-white">
                  {activeGradeData.chemicalComposition.map((item, idx) => (
                    <div key={idx} className="px-4 py-2 flex items-center justify-between text-xs hover:bg-slate-50">
                      <span className="font-semibold text-slate-700">{item.element}</span>
                      <span className="font-mono font-bold text-[#123467]">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Mechanical Limits Table */}
              <div className="border border-slate-200 rounded-xl overflow-hidden shadow-xs">
                <div className="bg-slate-100 px-4 py-2.5 border-b border-slate-200 flex items-center justify-between">
                  <span className="text-xs font-bold text-[#123467] uppercase tracking-wider flex items-center gap-1.5">
                    <Award className="w-4 h-4 text-[#D71932]" />
                    Mechanical Properties & Limits
                  </span>
                  <span className="text-[10px] text-slate-500 font-semibold">Specified Minimum</span>
                </div>
                <div className="divide-y divide-slate-100 bg-white">
                  {activeGradeData.mechanicalProperties.map((item, idx) => (
                    <div key={idx} className="px-4 py-2.5 flex items-center justify-between text-xs hover:bg-slate-50">
                      <span className="font-semibold text-slate-700">{item.property}</span>
                      <span className="font-mono font-bold text-[#D71932]">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        )}

        {/* Detailed Specifications & Applications Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
          
          {/* Specifications Table */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-6">
            <div className="border-b border-slate-200 pb-3">
              <h2 className="text-lg font-bold text-[#123467] flex items-center gap-2">
                <FileText className="w-5 h-5 text-[#D71932]" />
                <span>Product Specifications & Standard Tolerances</span>
              </h2>
              <p className="text-xs text-slate-500 mt-1">
                ASME, ASTM, DIN, and IS parameters applied to this product line.
              </p>
            </div>

            <div className="divide-y divide-slate-100">
              {Object.entries(product.specifications).map(([key, value]) => (
                <div key={key} className="py-3 grid grid-cols-1 sm:grid-cols-3 gap-2 text-sm">
                  <span className="font-semibold text-slate-600 text-xs uppercase">{key}</span>
                  <span className="sm:col-span-2 text-slate-800 font-medium">{value}</span>
                </div>
              ))}
            </div>

            <div className="p-4 rounded-lg bg-slate-50 border border-slate-200 text-xs text-slate-600 leading-relaxed">
              <strong className="text-slate-800">Inspection & Certification:</strong> Materials supplied with EN 10204 3.1 Mill Test Certificates. Third-party inspections (TUV, DNV, Lloyd's, Bureau Veritas) accommodated upon request.
            </div>
          </div>

          {/* Applications & Quick Inquiry Desk */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Typical Industrial Applications */}
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
              <h2 className="text-lg font-bold text-[#123467] flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                <span>Typical Industrial Applications</span>
              </h2>
              <ul className="space-y-2.5 text-sm text-slate-600">
                {product.applications.map((app, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-[#D71932] font-bold">•</span>
                    <span>{app}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Inline Quick Quotation Box */}
            <div className="bg-[#123467] text-white p-6 sm:p-8 rounded-2xl border border-[#1B478A] shadow-sm space-y-4">
              <h2 className="text-lg font-bold">Fast Turnaround Quotations</h2>
              <p className="text-xs text-slate-300 leading-relaxed">
                Connect with our Gulalwadi sales desk for immediate dimensional confirmation, current mill price, and dispatch timelines.
              </p>
              <div className="space-y-2 text-xs">
                <p className="flex items-center gap-2 text-slate-200">
                  <span className="text-red-400 font-bold">Landline:</span>
                  <a href="tel:02266394854" className="hover:underline">{COMPANY_INFO.phone}</a>
                </p>
                <p className="flex items-center gap-2 text-slate-200">
                  <span className="text-emerald-400 font-bold flex items-center gap-1.5">
                    <WhatsAppIcon className="w-3.5 h-3.5 text-emerald-400" />
                    Mobile:
                  </span>
                  <a href="tel:09850789923" className="hover:underline">{COMPANY_INFO.mobile}</a>
                  <span className="text-slate-400">|</span>
                  <a href="https://wa.me/919833416144" target="_blank" rel="noopener noreferrer" className="hover:underline text-emerald-300">WhatsApp</a>
                </p>
                <p className="flex items-center gap-2 text-slate-200">
                  <span className="text-blue-400 font-bold">Email:</span>
                  <a href={`mailto:${COMPANY_INFO.email}`} className="hover:underline">{COMPANY_INFO.email}</a>
                </p>
              </div>
            </div>

          </div>

        </div>

        {/* Embedded Inquiry Form for this Specific Product */}
        <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm mb-12">
          <div className="mb-6 pb-4 border-b border-slate-100">
            <h2 className="text-xl font-bold text-[#123467]">
              Inquire About {product.name}
            </h2>
            <p className="text-xs text-slate-500 mt-1">
              Your inquiry will automatically include {product.name} {selectedGrade ? `(Grade: ${selectedGrade})` : ''}.
            </p>
          </div>

          <InquiryForm
            initialProduct={product.name}
            initialCategory={product.categoryName}
            initialMaterial={selectedGrade || ''}
          />
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="pt-6">
            <h2 className="text-xl font-bold text-[#123467] mb-6">
              Related Products in {product.categoryName}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {relatedProducts.map((rel) => (
                <Link
                  key={rel.id}
                  to={`/products/${rel.slug}`}
                  className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition group p-4 flex flex-col justify-between"
                >
                  <div>
                    <img
                      src={rel.image}
                      alt={rel.name}
                      className="w-full h-36 object-cover rounded-lg mb-3"
                    />
                    <h3 className="text-sm font-bold text-[#123467] group-hover:text-[#D71932] transition">
                      {rel.name}
                    </h3>
                    <p className="text-xs text-slate-500 line-clamp-2 mt-1">
                      {rel.shortDesc}
                    </p>
                  </div>
                  <span className="text-xs font-bold text-[#D71932] mt-3 flex items-center gap-1">
                    <span>View Specifications</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
