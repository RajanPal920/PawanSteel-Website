import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, 
  FileCheck, 
  CheckCircle2, 
  MapPin, 
  Phone, 
  Mail, 
  ArrowRight, 
  ChevronRight,
  Layers,
  Award,
  Clock,
  Compass,
  Flame,
  Boxes,
  FlaskConical,
  Zap,
  Cog,
  Building2,
  Droplets,
  Ship
} from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';
import { CATEGORIES, MATERIALS, INDUSTRIES } from '../data/productsData';

// Lucide icon helper for Industry Applications
const getIndustryIcon = (iconName) => {
  switch (iconName) {
    case 'Flame': return <Flame className="w-4 h-4" />;
    case 'Boxes': return <Boxes className="w-4 h-4" />;
    case 'FlaskConical': return <FlaskConical className="w-4 h-4" />;
    case 'Zap': return <Zap className="w-4 h-4" />;
    case 'Cog': return <Cog className="w-4 h-4" />;
    case 'Building2': return <Building2 className="w-4 h-4" />;
    case 'Droplets': return <Droplets className="w-4 h-4" />;
    case 'Ship': return <Ship className="w-4 h-4" />;
    default: return <Cog className="w-4 h-4" />;
  }
};

export default function AboutPage({ onOpenQuoteModal }) {
  return (
    <div className="w-full bg-[#F3F7FB]">
      {/* Hero Header */}
      <section className="bg-[#123467] text-white py-16 md:py-20 relative overflow-hidden border-b-4 border-[#D71932]">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A1F3D] via-[#123467] to-[#1B478A] opacity-90" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-600/90 text-white text-xs font-bold uppercase tracking-wider rounded-sm backdrop-blur-sm">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>About Pawan Steel Alloys</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Industrial Metal Stockist & Supplier in Mumbai
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Supplying stainless steel, carbon steel, alloy steel, and specialty nickel alloys with verified specifications, prompt communication, and dependable service.
            </p>
          </div>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="bg-white border-b border-slate-200 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-2 text-xs text-slate-500">
          <Link to="/" className="hover:text-[#D71932] transition-colors">Home</Link>
          <ChevronRight className="w-3 h-3 text-slate-400" />
          <span className="text-slate-800 font-semibold">About Us</span>
        </div>
      </div>

      {/* Main Company Introduction & Business Overview */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-5">
              <span className="text-xs font-bold uppercase tracking-wider text-[#D71932] bg-red-50 border border-red-100 px-3 py-1 rounded-md">
                Business Overview
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#123467] leading-tight">
                Dedicated Stockist & Supplier for Industrial Metals
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                <strong className="text-[#123467] font-semibold">{COMPANY_INFO.name}</strong> operates as a dedicated metal trading and stocking enterprise located in the heart of Mumbai's historic industrial metals marketplace at Gulalwadi, Girgaon.
              </p>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                We cater to engineering contractors, chemical processing facilities, refineries, thermal power plants, and original equipment manufacturers (OEMs). By maintaining close relationships with premier domestic and international steel mills, we supply industrial raw materials that strictly adhere to client datasheets, ASME/ASTM standards, and project schedules.
              </p>

              <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="flex items-center gap-2 text-[#D71932] font-bold text-sm mb-1">
                    <ShieldCheck className="w-4 h-4" />
                    <span>ISO 9001:2015 Audited</span>
                  </div>
                  <p className="text-xs text-slate-500">
                    Quality management system audited by Audittech Certification Pvt. Ltd., IAF & EGAC accredited.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="flex items-center gap-2 text-blue-600 font-bold text-sm mb-1">
                    <FileCheck className="w-4 h-4" />
                    <span>MSME Registered (Udyam)</span>
                  </div>
                  <p className="text-xs text-slate-500">
                    Officially registered under Govt. of India Ministry of MSME (UDYAM-MH-19-0449426).
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden shadow-xl border-4 border-slate-100">
                <img 
                  src="/images/about-intro.jpg" 
                  alt="Pawan Steel Alloys stock inspection" 
                  className="w-full h-96 object-cover"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Product Portfolio Overview */}
      <section className="py-16 bg-[#F3F7FB] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#123467] bg-slate-100 border border-slate-200 px-3 py-1 rounded-md">
              Portfolio
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#123467] mt-3 mb-2">
              Our Supplied Product Scope
            </h2>
            <p className="text-sm text-slate-600">
              An all-inclusive inventory covering major piping, flanging, structural, and instrumentation components.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {CATEGORIES.map((cat) => (
              <div key={cat.id} className="p-5 bg-white rounded-xl border border-slate-200 shadow-sm flex flex-col justify-between">
                <div>
                  <h3 className="text-base font-bold text-[#123467] mb-2">{cat.title}</h3>
                  <p className="text-xs text-slate-500 leading-relaxed mb-4">{cat.shortDesc}</p>
                </div>
                <Link
                  to={`/products?category=${cat.slug}`}
                  className="text-xs font-bold text-[#D71932] hover:text-[#B51226] flex items-center gap-1"
                >
                  <span>View Specifications</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Material Range Section */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-[#D71932] bg-red-50 border border-red-100 px-3 py-1 rounded-md">
              Material Spectrum
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#123467] mt-3 mb-3">
              Comprehensive Metallurgy
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              We stock and supply standard stainless steels alongside specialty alloys engineered for extreme thermal, mechanical, and acid resistance.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3">
            {MATERIALS.map((m) => (
              <Link
                key={m.id}
                to={`/materials/${m.slug}`}
                className="p-3 text-center rounded-lg border border-slate-200 hover:border-[#D71932] hover:bg-red-50/20 transition-all group"
              >
                <p className="text-xs font-bold text-[#123467] group-hover:text-[#D71932] transition-colors">
                  {m.name}
                </p>
                <span className="text-[10px] text-slate-400 mt-0.5 block">View Products</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Service & Operating Philosophy */}
      <section className="py-16 bg-[#F3F7FB] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#123467] bg-slate-100 border border-slate-200 px-3 py-1 rounded-md">
              Operational Focus
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#123467] mt-3 mb-2">
              Our Customer Service Approach
            </h2>
            <p className="text-sm text-slate-600">
              Clear principles guiding every quotation, material dispatch, and client interaction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-white rounded-xl border border-slate-200 shadow-sm space-y-3">
              <div className="p-3 w-fit rounded-lg bg-red-50 text-[#D71932]">
                <Clock className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-[#123467]">Rapid Quotations & Communication</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                We understand project deadlines. Our sales desk responds to inquiries with detailed breakdowns of item pricing, lead time, and specification compliance.
              </p>
            </div>

            <div className="p-6 bg-white rounded-xl border border-slate-200 shadow-sm space-y-3">
              <div className="p-3 w-fit rounded-lg bg-blue-50 text-blue-600">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-[#123467]">Accurate Specification Match</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Whether you need a specific schedule (SCH 10S to XXS), raised face flange serration, or specific MTC documentation, we verify details prior to dispatch.
              </p>
            </div>

            <div className="p-6 bg-white rounded-xl border border-slate-200 shadow-sm space-y-3">
              <div className="p-3 w-fit rounded-lg bg-emerald-50 text-emerald-600">
                <Compass className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-[#123467]">Logistics & Packaging Integrity</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Materials are packed with protective end caps, wooden crates, or bundle strappings to ensure pipes, precision bevels, and polished bars reach your worksite undamaged.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Relevant Industrial Applications */}
      <section className="py-16 md:py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#123467] bg-slate-100 border border-slate-200 px-3 py-1 rounded-md">
              Industry Experience
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#123467] mt-3 mb-3 tracking-tight">
              Relevant Industrial Applications
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Our supplied raw materials and engineered metal products serve essential processing, mechanical, and structural applications across major sectors:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {INDUSTRIES.map((ind) => (
              <div 
                key={ind.id} 
                className="group bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl hover:border-slate-300 transition-all duration-300 flex flex-col transform hover:-translate-y-1.5"
              >
                {/* 100% Clean Image Without Any Overlay */}
                <div className="h-48 overflow-hidden bg-slate-100 border-b border-slate-100">
                  <img
                    src={ind.image}
                    alt={`${ind.name} industrial applications for steel and alloys`}
                    className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                    loading="lazy"
                  />
                </div>

                {/* Card Content & Description */}
                <div className="p-5 flex flex-col flex-1 justify-between bg-white">
                  <div>
                    <div className="flex items-center gap-2.5 mb-2.5">
                      <div className="p-1.5 rounded-lg bg-slate-100 text-[#123467] group-hover:bg-red-50 group-hover:text-[#D71932] transition-colors">
                        {getIndustryIcon(ind.iconName)}
                      </div>
                      <h3 className="text-base sm:text-lg font-bold text-[#123467] group-hover:text-[#D71932] transition-colors">
                        {ind.name}
                      </h3>
                    </div>
                    <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed">
                      {ind.description}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-[#123467] group-hover:text-[#D71932] transition-colors">
                    <Link to="/products" className="inline-flex items-center gap-1.5 hover:underline">
                      <span>Suitable Products</span>
                      <ChevronRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <section className="py-14 bg-gradient-to-r from-[#0A1F3D] to-[#123467] text-white text-center">
        <div className="max-w-4xl mx-auto px-4 space-y-4">
          <h2 className="text-2xl sm:text-3xl font-extrabold">Ready to Discuss Your Material Needs?</h2>
          <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto">
            Contact our sales desk for current material availability, dimension sizing, or submit your bill of materials.
          </p>
          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={onOpenQuoteModal}
              type="button"
              className="px-7 py-3 bg-[#D71932] hover:bg-[#B51226] text-white font-bold text-sm rounded-md shadow-lg transition"
            >
              Request a Quote
            </button>
            <Link
              to="/products"
              className="px-7 py-3 bg-white/10 hover:bg-white/20 text-white font-bold text-sm rounded-md border border-white/30 transition"
            >
              Explore Products
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

