import React, { useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  ChevronRight, 
  ArrowLeft, 
  ShieldCheck, 
  CheckCircle2, 
  MessageCircle, 
  Phone, 
  Mail, 
  Layers, 
  HelpCircle 
} from 'lucide-react';
import { MATERIALS, PRODUCTS } from '../data/productsData';
import { COMPANY_INFO } from '../data/companyData';
import InquiryForm from '../components/InquiryForm';

export default function MaterialDetailPage({ onOpenQuoteModal }) {
  const { slug } = useParams();

  const material = useMemo(() => {
    return MATERIALS.find((m) => m.slug === slug);
  }, [slug]);

  // Dynamically filter ONLY products that belong to this material!
  const matchingProducts = useMemo(() => {
    if (!material) return [];
    return PRODUCTS.filter((p) => p.materials.includes(material.slug));
  }, [material]);

  if (!material) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center bg-[#F3F7FB] px-4 py-16">
        <div className="max-w-md w-full bg-white p-8 rounded-xl border border-slate-200 shadow-sm text-center space-y-4">
          <HelpCircle className="w-12 h-12 text-[#D71932] mx-auto" />
          <h1 className="text-xl font-bold text-[#123467]">Material Grade Not Found</h1>
          <p className="text-sm text-slate-500">
            The material grade requested is not recognized in our database. Please explore our materials catalogue.
          </p>
          <div className="pt-2">
            <Link
              to="/materials"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#123467] hover:bg-[#1B478A] text-white text-xs font-bold rounded-md"
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
    <div className="w-full bg-[#F3F7FB] pb-16">
      {/* Header Banner */}
      <section className="bg-[#123467] text-white py-14 relative overflow-hidden border-b-4 border-[#D71932]">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A1F3D] via-[#123467] to-[#1B478A] opacity-90" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-red-600/90 text-white text-xs font-bold uppercase tracking-wider rounded-sm backdrop-blur-sm">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Material Specification</span>
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white">
              {material.name} Products & Supply
            </h1>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              {material.shortDesc}
            </p>
          </div>
        </div>
      </section>

      {/* Breadcrumb Bar */}
      <div className="bg-white border-b border-slate-200 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-2 text-xs text-slate-500">
          <Link to="/" className="hover:text-[#D71932] transition-colors">Home</Link>
          <ChevronRight className="w-3 h-3 text-slate-400" />
          <Link to="/materials" className="hover:text-[#D71932] transition-colors">Materials</Link>
          <ChevronRight className="w-3 h-3 text-slate-400" />
          <span className="text-slate-800 font-semibold">{material.name}</span>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        
        {/* Material Characteristics Overview Box */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-8 mb-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-4">
              <h2 className="text-2xl font-bold text-[#123467]">
                About {material.name} Metallurgy
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                {material.shortDesc}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-lg">
                  <span className="text-xs font-bold uppercase text-slate-500 block mb-1">
                    Key Performance Attributes
                  </span>
                  <p className="text-xs font-semibold text-slate-800">
                    {material.characteristics}
                  </p>
                </div>

                <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-lg">
                  <span className="text-xs font-bold uppercase text-slate-500 block mb-1">
                    Common Industrial Uses
                  </span>
                  <p className="text-xs text-slate-700">
                    {material.commonUses}
                  </p>
                </div>
              </div>

              {/* Grades Pills */}
              <div className="pt-2">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-600 block mb-2">
                  Stocked & Sourced Grades in {material.name}:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {material.grades.map((grade, idx) => (
                    <span
                      key={idx}
                      className="text-xs font-mono font-medium px-3 py-1 bg-slate-100 text-[#123467] border border-slate-300 rounded-md"
                    >
                      {grade}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Inquire Card Right */}
            <div className="lg:col-span-4 bg-[#123467] text-white p-6 rounded-xl border border-[#1B478A] shadow-sm space-y-4">
              <h3 className="text-base font-bold">Inquire for {material.name}</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Need urgent stock check, cut pieces, or mill certificates for {material.name}? Contact our Mumbai sales desk.
              </p>
              <button
                onClick={() => onOpenQuoteModal && onOpenQuoteModal('', '', material.name)}
                type="button"
                className="w-full py-2.5 px-4 bg-[#D71932] hover:bg-[#B51226] text-white text-xs font-bold rounded shadow transition"
              >
                Request {material.name} Quote
              </button>
            </div>

          </div>
        </div>

        {/* Section: Products Available in this Material */}
        <div className="mb-12">
          <div className="mb-6 flex items-center justify-between">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-[#123467]">
                Products Supplied in {material.name}
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                Showing all product configurations compatible with {material.name}.
              </p>
            </div>
            <span className="text-xs font-bold px-3 py-1 bg-white border border-slate-200 rounded text-slate-700">
              {matchingProducts.length} Product Formats
            </span>
          </div>

          {matchingProducts.length === 0 ? (
            /* Requirement 8: If a material has no configured products yet, display a professional “Contact us for availability” message rather than unrelated products or a broken empty page. */
            <div className="bg-white rounded-xl border border-slate-200 p-8 sm:p-12 text-center space-y-4">
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
                  className="px-5 py-2.5 bg-[#D71932] hover:bg-[#B51226] text-white text-xs font-bold rounded-md shadow"
                >
                  Contact Us For {material.name} Availability
                </button>
                <Link
                  to="/products"
                  className="px-5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold rounded-md"
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
                  className="bg-white rounded-xl border border-slate-200 shadow-subtle hover:shadow-hover transition-all duration-300 overflow-hidden flex flex-col justify-between group"
                >
                  <div>
                    <div className="relative h-48 w-full bg-slate-100 overflow-hidden">
                      <img
                        src={prod.image}
                        alt={prod.name}
                        className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute top-3 left-3">
                        <span className="text-[11px] font-bold bg-[#123467] text-white px-2.5 py-1 rounded">
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
                          {prod.grades.slice(0, 3).map((g, i) => (
                            <span key={i} className="text-[10px] font-mono bg-slate-100 px-1.5 py-0.5 rounded text-slate-700">
                              {g}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-5 pt-0 flex items-center justify-between border-t border-slate-50">
                    <Link
                      to={`/products/${prod.slug}`}
                      className="text-xs font-bold text-[#123467] hover:text-[#D71932] flex items-center gap-1"
                    >
                      <span>Specifications</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </Link>

                    <button
                      onClick={() => onOpenQuoteModal && onOpenQuoteModal(prod.name, prod.categoryName, material.name)}
                      className="px-3 py-1 bg-[#D71932] hover:bg-[#B51226] text-white text-xs font-bold rounded"
                    >
                      Get Quote
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Dedicated Inquiry Form for this Material */}
        <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm">
          <div className="mb-6 pb-4 border-b border-slate-100">
            <h2 className="text-xl font-bold text-[#123467]">
              Submit Inquiry for {material.name}
            </h2>
            <p className="text-xs text-slate-500 mt-1">
              Specify your required form (pipes, bars, sheets, flanges, fittings), dimensions, and quantity.
            </p>
          </div>

          <InquiryForm
            initialMaterial={material.name}
          />
        </div>

      </div>
    </div>
  );
}

