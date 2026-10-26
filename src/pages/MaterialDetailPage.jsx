import React, { useState, useMemo, useEffect, useCallback } from 'react';
import { useParams, Link, useSearchParams, useNavigate, Navigate } from 'react-router-dom';
import { 
  ChevronRight, 
  ArrowLeft, 
  ShieldCheck, 
  CheckCircle2, 
  Phone, 
  Mail, 
  Layers, 
  HelpCircle,
  FileText,
  Award,
  ExternalLink,
  Sparkles,
  Info
} from 'lucide-react';
import { 
  MATERIALS, 
  PRODUCTS, 
  findMaterial, 
  findProduct,
  findCategory,
  makeGradeSlug, 
  parseProductAndGradeSlug, 
  matchGradeFromSlug 
} from '../data/productsData';
import { getGradeDetails } from '../data/gradesData';
import { COMPANY_INFO } from '../data/companyData';
import InquiryForm from '../components/InquiryForm';
import GradeSpecModal from '../components/GradeSpecModal';
import WhatsAppIcon from '../components/WhatsAppIcon';

export default function MaterialDetailPage({ onOpenQuoteModal }) {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const initialGradeParam = searchParams.get('grade');

  // Deconstruct slug if it contains -grade- (e.g. stainless-steel-grade-316-316l)
  const { productSlug: materialSlug, gradeSlug: urlGradeSlug } = useMemo(() => {
    return parseProductAndGradeSlug(slug);
  }, [slug]);

  const material = useMemo(() => {
    return findMaterial(slug);
  }, [slug]);

  const productFallback = useMemo(() => {
    if (material) return null;
    return findProduct(slug);
  }, [slug, material]);

  const categoryFallback = useMemo(() => {
    if (material || productFallback) return null;
    return findCategory(slug);
  }, [slug, material, productFallback]);

  // If a product or category slug was visited under /materials/, redirect to /products/
  if (productFallback) {
    return <Navigate to={`/products/${productFallback.slug}${urlGradeSlug ? `-grade-${urlGradeSlug}` : ''}`} replace />;
  }
  if (categoryFallback) {
    return <Navigate to={`/products/${categoryFallback.slug}`} replace />;
  }

  // Resolve active grade based on URL slug or query param
  const resolveActiveGrade = useCallback(() => {
    if (!material || !material.grades || material.grades.length === 0) return null;

    // 1. Grade specified in URL slug (-grade-316l)
    if (urlGradeSlug) {
      const matched = matchGradeFromSlug(material.grades, urlGradeSlug);
      if (matched) return matched;
    }

    // 2. Grade specified in query parameter (?grade=316L)
    if (initialGradeParam) {
      const matchedParam = matchGradeFromSlug(material.grades, initialGradeParam) || initialGradeParam;
      return matchedParam;
    }

    // 3. Fallback to first available grade
    return material.grades[0];
  }, [material, urlGradeSlug, initialGradeParam]);

  // Selected grade state for technical inspection
  const [selectedGrade, setSelectedGrade] = useState(() => resolveActiveGrade());
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalGrade, setModalGrade] = useState(null);

  // Sync selectedGrade when slug, material, or URL grade changes
  useEffect(() => {
    if (material && material.grades && material.grades.length > 0) {
      const targetGrade = resolveActiveGrade();
      if (targetGrade && targetGrade !== selectedGrade) {
        setSelectedGrade(targetGrade);
      }
    }
  }, [slug, material, urlGradeSlug, initialGradeParam, resolveActiveGrade]);

  // Dynamic SEO Document Title
  useEffect(() => {
    if (material) {
      if (selectedGrade) {
        document.title = `${material.name} (Grade ${selectedGrade}) Supplier & Stockist India | Pawan Steel Alloys`;
      } else {
        document.title = `${material.name} Supplier & Stockist India | Pawan Steel Alloys`;
      }
    }
  }, [material, selectedGrade]);

  // Active grade technical details
  const activeGrade = selectedGrade || (material?.grades?.[0] || null);

  const activeGradeData = useMemo(() => {
    if (!activeGrade) return null;
    return getGradeDetails(activeGrade);
  }, [activeGrade]);

  // Handle grade click: Update local state AND update browser URL slug dynamically
  const handleGradeClick = (gradeName) => {
    setSelectedGrade(gradeName);
    if (material) {
      const gSlug = makeGradeSlug(gradeName);
      navigate(`/materials/${material.slug}-grade-${gSlug}`, { replace: false });
    }
  };

  const handleOpenGradeModal = (gradeName) => {
    setModalGrade(gradeName);
    setIsModalOpen(true);
  };

  // Dynamically filter ONLY products that belong to this material
  const matchingProducts = useMemo(() => {
    if (!material) return [];
    return PRODUCTS.filter((p) => 
      p.materials.includes(material.slug) || 
      (material.oldSlug && p.materials.includes(material.oldSlug)) ||
      p.materials.includes(material.id)
    );
  }, [material]);

  if (!material) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center bg-[#F3F7FB] px-4 py-16">
        <div className="max-w-md w-full bg-white p-8 rounded-2xl border border-slate-200 shadow-sm text-center space-y-4">
          <HelpCircle className="w-12 h-12 text-[#D71932] mx-auto" />
          <h1 className="text-xl font-bold text-[#123467]">Material Grade Not Found</h1>
          <p className="text-sm text-slate-500">
            The material grade requested is not recognized in our database. Please explore our materials catalogue.
          </p>
          <div className="pt-2">
            <Link
              to="/materials"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#123467] hover:bg-[#1B478A] text-white text-xs font-bold rounded-lg shadow-sm"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Materials</span>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full bg-[#F3F7FB] pb-16 min-h-screen">
      
      {/* Grade Details Interactive Modal */}
      <GradeSpecModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        gradeInput={modalGrade || activeGrade}
        onOpenQuoteModal={onOpenQuoteModal}
      />

      {/* Header Banner with Photographic Hero Image */}
      <section className="relative text-white py-16 md:py-20 overflow-hidden border-b-4 border-[#D71932] bg-[#0A1F3D]">
        {/* Photographic Hero Image with Dark Metallic Gradient Overlay */}
        <div className="absolute inset-0">
          <img
            src={matchingProducts[0]?.image || '/images/hero-4.jpg'}
            alt={`${material.name} metal supply`}
            className="w-full h-full object-cover object-center filter brightness-[0.25] contrast-125 transform scale-105 transition-transform duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A1F3D] via-[#123467]/90 to-[#0A1F3D]/80" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/30 via-transparent to-black/60" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl space-y-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#D71932] text-white text-xs font-bold uppercase tracking-wider rounded shadow-sm">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Material Specification</span>
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight">
              {selectedGrade ? (
                <>
                  <span>{material.name}</span>
                  <span className="block sm:inline text-amber-300 sm:ml-3 text-2xl sm:text-3xl md:text-4xl font-extrabold font-mono">
                    (Grade {selectedGrade})
                  </span>
                </>
              ) : (
                material.name
              )}
            </h1>
            <p className="text-base sm:text-lg text-slate-200 font-medium">
              Industrial Metallurgy, Specifications & Stock Supply
            </p>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-3xl">
              {material.shortDesc}
            </p>
          </div>
        </div>
      </section>

      {/* Breadcrumb Bar */}
      <div className="bg-white border-b border-slate-200 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-2 text-xs text-slate-500 overflow-x-auto whitespace-nowrap">
          <Link to="/" className="hover:text-[#D71932] transition-colors">Home</Link>
          <ChevronRight className="w-3 h-3 text-slate-400 flex-shrink-0" />
          <Link to="/materials" className="hover:text-[#D71932] transition-colors">Materials</Link>
          <ChevronRight className="w-3 h-3 text-slate-400 flex-shrink-0" />
          <span className="text-slate-800 font-semibold">{material.name}</span>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        
        {/* Material Characteristics Overview Box */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-8 mb-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            <div className="lg:col-span-8 space-y-5">
              <div>
                <h2 className="text-2xl font-bold text-[#123467]">
                  About {material.name} Metallurgy
                </h2>
                <p className="text-sm text-slate-600 leading-relaxed mt-2">
                  {material.shortDesc}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
                  <span className="text-xs font-bold uppercase text-slate-500 block mb-1">
                    Key Performance Attributes
                  </span>
                  <p className="text-xs font-semibold text-slate-800 leading-relaxed">
                    {material.characteristics}
                  </p>
                </div>

                <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
                  <span className="text-xs font-bold uppercase text-slate-500 block mb-1">
                    Common Industrial Uses
                  </span>
                  <p className="text-xs text-slate-700 leading-relaxed">
                    {material.commonUses}
                  </p>
                </div>
              </div>

              {/* Clickable Grades Pills */}
              <div className="pt-2">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-700 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-[#D71932]" />
                    <span>Stocked & Sourced Grades in {material.name} (Click Any Grade):</span>
                  </span>
                  <span className="text-[11px] text-slate-400">Click to view specs</span>
                </div>

                <div className="flex flex-wrap gap-2">
                  {material.grades.map((grade, idx) => {
                    const isSelected = activeGrade === grade;
                    return (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => handleGradeClick(grade)}
                        className={`text-xs font-mono font-bold px-3 py-1.5 rounded-lg border transition-all duration-200 cursor-pointer flex items-center gap-1.5 ${
                          isSelected
                            ? 'bg-[#123467] text-white border-[#123467] shadow-sm transform scale-105 ring-2 ring-[#D71932]/30'
                            : 'bg-slate-50 hover:bg-red-50 text-slate-700 hover:text-[#D71932] border-slate-300 hover:border-red-200'
                        }`}
                        title={`Click to view chemical composition and specs for ${grade}`}
                      >
                        <span>{grade}</span>
                        <Info className={`w-3 h-3 ${isSelected ? 'text-red-400' : 'text-slate-400'}`} />
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Inquire Card Right */}
            <div className="lg:col-span-4 bg-[#123467] text-white p-6 rounded-2xl border border-[#1B478A] shadow-md space-y-4">
              <h3 className="text-base font-bold">Inquire for {material.name}</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Need urgent stock check, custom cutting, or test certificates for {material.name} {activeGrade ? `(${activeGrade})` : ''}? Contact our sales desk.
              </p>
              <button
                onClick={() => onOpenQuoteModal && onOpenQuoteModal('', '', activeGrade || material.name)}
                type="button"
                className="w-full py-2.5 px-4 bg-[#D71932] hover:bg-[#B51226] text-white text-xs font-bold rounded-lg shadow transition transform hover:-translate-y-0.5"
              >
                Request {activeGrade || material.name} Quote
              </button>

              <a
                href={`https://wa.me/919833416144?text=${encodeURIComponent(`Hi Pawan Steel Alloys, I am inquiring about material: ${material.name}${activeGrade ? ` in grade ${activeGrade}` : ''}. Please confirm current price and availability.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-lg shadow transition flex items-center justify-center gap-2 transform hover:-translate-y-0.5"
              >
                <WhatsAppIcon className="w-4 h-4 text-white" />
                <span>WhatsApp Inquiry</span>
              </a>

              {activeGrade && (
                <button
                  onClick={() => handleOpenGradeModal(activeGrade)}
                  type="button"
                  className="w-full py-2 px-4 bg-white/10 hover:bg-white/20 text-white text-xs font-semibold rounded-lg border border-white/20 transition flex items-center justify-center gap-1.5"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Full Datasheet for {activeGrade}</span>
                </button>
              )}
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
                    Selected Grade Datasheet
                  </span>
                  <span className="text-xs font-mono font-semibold text-slate-500 bg-slate-100 px-2 py-0.5 rounded">
                    {activeGradeData.uns}
                  </span>
                </div>
                <h2 className="text-xl sm:text-2xl font-black text-[#123467]">
                  {activeGradeData.grade} Technical Data
                </h2>
                <p className="text-xs sm:text-sm text-slate-600">
                  {activeGradeData.overview}
                </p>
              </div>

              <div className="flex-shrink-0 flex items-center gap-2">
                <button
                  onClick={() => handleOpenGradeModal(activeGrade)}
                  type="button"
                  className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-[#123467] text-xs font-bold rounded-lg border border-slate-300 transition flex items-center gap-1.5"
                >
                  <FileText className="w-3.5 h-3.5 text-[#D71932]" />
                  <span>Full Datasheet</span>
                </button>
                <button
                  onClick={() => onOpenQuoteModal && onOpenQuoteModal('', '', activeGradeData.grade)}
                  type="button"
                  className="px-4 py-2 bg-[#D71932] hover:bg-[#B51226] text-white text-xs font-bold rounded-lg shadow-sm transition"
                >
                  Inquire {activeGrade}
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

        {/* Section: Products Available in this Material */}
        <div className="mb-12">
          <div className="mb-6 flex items-center justify-between">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-[#123467]">
                Products Supplied in {material.name}
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                Showing all product configurations manufactured and supplied in {material.name}.
              </p>
            </div>
            <span className="text-xs font-bold px-3 py-1 bg-white border border-slate-200 rounded-lg text-slate-700 shadow-xs">
              {matchingProducts.length} Product Formats
            </span>
          </div>

          {matchingProducts.length === 0 ? (
            <div className="bg-white rounded-2xl border border-slate-200 p-8 sm:p-12 text-center space-y-4">
              <div className="p-4 w-fit rounded-full bg-slate-100 text-slate-500 mx-auto">
                <Layers className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-bold text-[#123467]">
                Specialized Sourcing for {material.name}
              </h3>
              <p className="text-sm text-slate-600 max-w-lg mx-auto leading-relaxed">
                While our primary standard online catalogue showcases high-demand items, we regularly supply pipes, round bars, flanges, and sheets in <strong className="text-[#123467]">{material.name}</strong> on a mill-indent and custom project basis.
              </p>
              <div className="pt-3 flex flex-wrap justify-center gap-3">
                <button
                  onClick={() => onOpenQuoteModal && onOpenQuoteModal('', '', material.name)}
                  type="button"
                  className="px-5 py-2.5 bg-[#D71932] hover:bg-[#B51226] text-white text-xs font-bold rounded-lg shadow"
                >
                  Contact Us For {material.name} Availability
                </button>
                <Link
                  to="/products"
                  className="px-5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold rounded-lg"
                >
                  View General Catalogue
                </Link>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {matchingProducts.map((prod) => (
                <div
                  key={prod.id}
                  className="bg-white rounded-2xl border border-slate-200 shadow-subtle hover:shadow-hover transition-all duration-300 overflow-hidden flex flex-col justify-between group transform hover:-translate-y-1.5"
                >
                  <div>
                    <div className="relative h-48 w-full bg-slate-100 overflow-hidden border-b border-slate-100">
                      <img
                        src={prod.image}
                        alt={`${prod.name} in ${material.name}`}
                        className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute top-3 left-3">
                        <span className="text-[11px] font-bold bg-[#123467] text-white px-2.5 py-1 rounded shadow-sm">
                          {prod.categoryName}
                        </span>
                      </div>
                    </div>

                    <div className="p-5">
                      <h3 className="text-base font-bold text-[#123467] group-hover:text-[#D71932] transition-colors">
                        <Link to={`/products/${prod.slug}`}>
                          {prod.name}
                        </Link>
                      </h3>
                      <p className="text-xs text-slate-500 line-clamp-2 mt-2 leading-relaxed">
                        {prod.shortDesc}
                      </p>

                      <div className="mt-3 pt-3 border-t border-slate-100">
                        <span className="text-[10px] uppercase font-bold text-slate-400 block mb-1">
                          Applicable Grades:
                        </span>
                        <div className="flex flex-wrap gap-1">
                          {prod.grades.slice(0, 4).map((g, i) => (
                            <Link 
                              key={i} 
                              to={`/products/${prod.slug}-grade-${makeGradeSlug(g)}`}
                              className="text-[10px] font-mono bg-slate-100 hover:bg-[#123467] hover:text-white transition-colors px-1.5 py-0.5 rounded text-slate-700 border border-slate-200"
                            >
                              {g}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-5 pt-0 flex items-center justify-between border-t border-slate-50 mt-2">
                    <Link
                      to={`/products/${prod.slug}`}
                      className="text-xs font-bold text-[#123467] group-hover:text-[#D71932] transition-colors flex items-center gap-1"
                    >
                      <span>Specifications</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </Link>
                    <button
                      onClick={() => onOpenQuoteModal && onOpenQuoteModal(prod.name, prod.categoryName, material.name)}
                      type="button"
                      className="px-3 py-1.5 bg-[#D71932] hover:bg-[#B51226] text-white text-xs font-bold rounded shadow-xs transition"
                    >
                      Inquire
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Form Requisition Section */}
        <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm mb-12">
          <div className="mb-6 pb-4 border-b border-slate-100">
            <h2 className="text-xl font-bold text-[#123467]">
              Submit Bill of Materials for {material.name}
            </h2>
            <p className="text-xs text-slate-500 mt-1">
              Provide size, schedule, wall thickness, or quantity for immediate quotation response.
            </p>
          </div>
          <InquiryForm initialMaterial={material.name} />
        </div>

      </div>
    </div>
  );
}
