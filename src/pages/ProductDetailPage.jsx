import React, { useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  ChevronRight, 
  ArrowLeft, 
  ShieldCheck, 
  CheckCircle2, 
  FileText, 
  Mail, 
  MessageCircle, 
  Layers,
  HelpCircle
} from 'lucide-react';
import { PRODUCTS, CATEGORIES, MATERIALS } from '../data/productsData';
import { COMPANY_INFO } from '../data/companyData';
import InquiryForm from '../components/InquiryForm';

export default function ProductDetailPage({ onOpenQuoteModal }) {
  const { slug } = useParams();

  const product = useMemo(() => {
    return PRODUCTS.find((p) => p.slug === slug);
  }, [slug]);

  // Related products from the same category or material
  const relatedProducts = useMemo(() => {
    if (!product) return [];
    return PRODUCTS.filter((p) => p.id !== product.id && p.categorySlug === product.categorySlug).slice(0, 3);
  }, [product]);

  if (!product) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center bg-[#F3F7FB] px-4 py-16">
        <div className="max-w-md w-full bg-white p-8 rounded-xl border border-slate-200 shadow-sm text-center space-y-4">
          <HelpCircle className="w-12 h-12 text-[#D71932] mx-auto" />
          <h1 className="text-xl font-bold text-[#123467]">Product Not Found</h1>
          <p className="text-sm text-slate-500">
            The product you are looking for may have been updated or moved. Please explore our complete catalogue.
          </p>
          <div className="pt-2">
            <Link
              to="/products"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#123467] hover:bg-[#1B478A] text-white text-xs font-bold rounded-md"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Products Catalogue</span>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full bg-[#F3F7FB] pb-16">
      {/* Breadcrumb Bar */}
      <div className="bg-white border-b border-slate-200 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-2 text-xs text-slate-500 overflow-x-auto whitespace-nowrap">
          <Link to="/" className="hover:text-[#D71932] transition-colors">Home</Link>
          <ChevronRight className="w-3 h-3 text-slate-400 flex-shrink-0" />
          <Link to="/products" className="hover:text-[#D71932] transition-colors">Products</Link>
          <ChevronRight className="w-3 h-3 text-slate-400 flex-shrink-0" />
          <Link to={`/products?category=${product.categorySlug}`} className="hover:text-[#D71932] transition-colors">
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
            
            {/* Image Column */}
            <div className="lg:col-span-5 bg-slate-100 p-4 sm:p-6 flex items-center justify-center">
              <div className="relative w-full h-80 sm:h-96 rounded-xl overflow-hidden shadow-inner border border-slate-200 bg-white">
                <img
                  src={product.image}
                  alt={product.name}
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
                  <span>ISO 9001:2015 Verified Scope</span>
                </div>

                <h1 className="text-2xl sm:text-3xl font-extrabold text-[#123467] leading-tight">
                  {product.name}
                </h1>

                <p className="text-sm text-slate-600 leading-relaxed mt-3">
                  {product.fullDesc}
                </p>

                {/* Material & Grade Badges */}
                <div className="mt-6 pt-4 border-t border-slate-100">
                  <span className="text-xs font-bold text-slate-700 uppercase tracking-wider block mb-2">
                    Available Material Grades:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {product.grades.map((g, idx) => (
                      <span
                        key={idx}
                        className="text-xs font-mono font-medium px-2.5 py-1 bg-slate-100 text-slate-800 rounded border border-slate-200"
                      >
                        {g}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Compatible Material Categories */}
                <div className="mt-4">
                  <span className="text-xs font-bold text-slate-700 uppercase tracking-wider block mb-2">
                    Material Categories:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {product.materials.map((matSlug) => {
                      const matObj = MATERIALS.find((m) => m.slug === matSlug);
                      return (
                        <Link
                          key={matSlug}
                          to={`/materials/${matSlug}`}
                          className="text-xs px-2.5 py-1 bg-red-50 hover:bg-red-100 text-[#D71932] font-semibold rounded transition-colors"
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
                  onClick={() => onOpenQuoteModal && onOpenQuoteModal(product.name)}
                  type="button"
                  className="px-6 py-3 bg-[#D71932] hover:bg-[#B51226] text-white font-bold text-sm rounded-md shadow transition transform hover:-translate-y-0.5"
                >
                  Request a Quote
                </button>

                <a
                  href={`https://wa.me/919833416144?text=${encodeURIComponent(`Hi Pawan Steel Alloys, I am inquiring about: ${product.name}. Please confirm availability and pricing.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm rounded-md shadow transition"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp Inquiry</span>
                </a>
              </div>

            </div>

          </div>
        </div>

        {/* Detailed Specifications & Applications Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
          
          {/* Specifications Table */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-6">
            <div className="border-b border-slate-200 pb-3">
              <h2 className="text-lg font-bold text-[#123467] flex items-center gap-2">
                <FileText className="w-5 h-5 text-[#D71932]" />
                <span>Technical Specifications & Standards</span>
              </h2>
              <p className="text-xs text-slate-500 mt-1">
                Verified dimensional standards and manufacturing parameters.
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
              <strong className="text-slate-800">Notice on Availability:</strong> Ready stock is available for standard schedules and lengths. Custom dimensions, high-nickel alloys, and project quantities are subject to confirmation upon order.
            </div>
          </div>

          {/* Applications & Quick Inquiry Desk */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Typical Industrial Applications */}
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
              <h2 className="text-lg font-bold text-[#123467] flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                <span>Typical Applications</span>
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
              <h2 className="text-lg font-bold">Need Immediate Pricing?</h2>
              <p className="text-xs text-slate-300 leading-relaxed">
                Connect with our Mumbai sales desk directly with your size, wall thickness, and quantity requirements.
              </p>
              <div className="space-y-2 text-xs">
                <p className="flex items-center gap-2 text-slate-200">
                  <span className="text-red-400 font-bold">Tel:</span>
                  <a href="tel:02266324854" className="hover:underline">{COMPANY_INFO.phone}</a>
                </p>
                <p className="flex items-center gap-2 text-slate-200">
                  <span className="text-emerald-400 font-bold">WhatsApp:</span>
                  <a href="https://wa.me/919833416144" target="_blank" rel="noopener noreferrer" className="hover:underline">+91 {COMPANY_INFO.mobile}</a>
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
              Your inquiry will automatically include {product.name}. Provide your size, grade, and required quantity below.
            </p>
          </div>

          <InquiryForm
            initialProduct={product.name}
            initialCategory={product.categoryName}
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

