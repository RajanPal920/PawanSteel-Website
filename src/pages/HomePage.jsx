import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  ChevronRight,
  ShieldCheck,
  Layers,
  Headphones,
  FileCheck,
  CheckCircle2,
  Users,
  User,
  Flame,
  Boxes,
  FlaskConical,
  Zap,
  Cog,
  Building2,
  Droplets,
  Ship,
  Phone,
  Mail,
  MapPin,
  FileText,
  Globe2,
  PackageCheck,
  Check,
  Award
} from 'lucide-react';
import HeroSlider from '../components/HeroSlider';
import Marquee from '../components/Marquee';
import MaterialMarquee from '../components/MaterialMarquee';
import CountryExportNetwork from '../components/CountryExportNetwork';
import InquiryForm from '../components/InquiryForm';
import { COMPANY_INFO } from '../data/companyData';
import { CATEGORIES, MATERIALS, INDUSTRIES, WHY_CHOOSE_US, GLOBAL_MARKETS } from '../data/productsData';

// Official WhatsApp vector SVG
function WhatsAppIcon({ className = "w-4 h-4 text-emerald-600" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12.031 2C6.496 2 2 6.494 2 12.029c0 1.93.551 3.731 1.508 5.257L2 22l4.872-1.464a9.983 9.983 0 005.159 1.493h.004c5.535 0 10.031-4.495 10.031-10.029C22.066 6.494 17.569 2 12.031 2zm0 18.286h-.003a8.273 8.273 0 01-4.223-1.157l-.303-.18-2.89.868.883-2.818-.198-.314A8.252 8.252 0 013.76 12.03c0-4.561 3.712-8.273 8.274-8.273 4.561 0 8.273 3.712 8.273 8.273 0 4.561-3.712 8.256-8.276 8.256zm4.536-6.19c-.248-.124-1.47-.725-1.698-.808-.228-.083-.394-.124-.56.124-.166.248-.643.808-.788.974-.145.166-.29.186-.539.062-.248-.124-1.047-.386-1.996-1.231-.739-.658-1.238-1.472-1.383-1.72-.145-.248-.016-.383.109-.506.111-.111.248-.29.373-.435.124-.145.166-.248.248-.415.083-.166.041-.31-.02-.435-.062-.124-.56-1.348-.767-1.846-.202-.486-.407-.42-.56-.428l-.477-.008c-.166 0-.435.062-.663.31-.228.248-.871.85-.871 2.073s.892 2.404 1.016 2.57c.124.166 1.755 2.68 4.252 3.757.594.256 1.058.41 1.42.525.597.189 1.141.162 1.57.098.479-.071 1.47-.601 1.678-1.182.207-.58.207-1.077.145-1.182-.062-.104-.228-.166-.477-.29z" />
    </svg>
  );
}

// Icon helper for Why Choose Us
const getBenefitIcon = (iconName) => {
  switch (iconName) {
    case 'Layers': return <Layers className="w-6 h-6 text-[#D71932]" />;
    case 'ShieldCheck': return <ShieldCheck className="w-6 h-6 text-[#D71932]" />;
    case 'Headphones': return <Headphones className="w-6 h-6 text-[#D71932]" />;
    case 'FileCheck': return <FileCheck className="w-6 h-6 text-[#D71932]" />;
    case 'CheckCircle2': return <CheckCircle2 className="w-6 h-6 text-[#D71932]" />;
    case 'Users': return <Users className="w-6 h-6 text-[#D71932]" />;
    default: return <ShieldCheck className="w-6 h-6 text-[#D71932]" />;
  }
};

// Lucide icon helper for Industries
const getIndustryIcon = (iconName) => {
  switch (iconName) {
    case 'Flame': return <Flame className="w-5 h-5 text-[#D71932]" />;
    case 'Boxes': return <Boxes className="w-5 h-5 text-blue-500" />;
    case 'FlaskConical': return <FlaskConical className="w-5 h-5 text-emerald-500" />;
    case 'Zap': return <Zap className="w-5 h-5 text-amber-500" />;
    case 'Cog': return <Cog className="w-5 h-5 text-indigo-500" />;
    case 'Building2': return <Building2 className="w-5 h-5 text-sky-500" />;
    case 'Droplets': return <Droplets className="w-5 h-5 text-cyan-500" />;
    case 'Ship': return <Ship className="w-5 h-5 text-teal-500" />;
    default: return <Cog className="w-5 h-5 text-[#D71932]" />;
  }
};

export default function HomePage({ onOpenQuoteModal }) {
  return (
    <div className="w-full bg-[#F3F7FB]">

      {/* SECTION 4: Hero Slider (Split-Composition Matching Logistics Reference) */}
      <HeroSlider onOpenQuoteModal={onOpenQuoteModal} />

      {/* SECTION 5: Continuous Scrolling Marquee */}
      <Marquee />

      {/* SECTION 9: About and Company Benefits Sections */}
      <section className="py-16 md:py-24 bg-white border-b border-[#DDE5EE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            {/* Content Left */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-50 text-[#D71932] text-xs font-bold uppercase tracking-wider rounded-md border border-red-100">
                <ShieldCheck className="w-4 h-4" />
                <span>Certified Stockist & Supplier</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#123467] leading-tight tracking-tight">
                Your Trusted Partner in Industrial Metals
              </h2>

              <p className="text-base text-slate-600 leading-relaxed font-normal">
                <strong className="text-[#123467] font-bold">PAWAN STEEL ALLOYS</strong> is an established industrial raw material stockist and supplier based in the historic metals trading district of Gulalwadi, Mumbai. We specialize in the distribution of high-grade stainless steel, carbon steel, mild steel, alloy steel, duplex, and specialty nickel alloys to engineering, refinery, and manufacturing sectors.
              </p>

              <p className="text-base text-slate-600 leading-relaxed font-normal">
                Our inventory encompasses seamless and welded pipes & tubes, cut-to-size sheets & heavy plates, precision centerless ground round bars, forged flanges (ASME B16.5), butt weld fittings, forged socket-weld & threaded fittings, and twin-ferrule compression fittings.
              </p>

              {/* Factual Credential Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 bg-[#F3F7FB] border border-[#DDE5EE] rounded-xl">
                  <div className="flex items-center gap-2.5 font-bold text-sm text-[#123467]">
                    <ShieldCheck className="w-4 h-4 text-[#D71932]" />
                    <span>ISO 9001:2015 Certified Company</span>
                  </div>
                  <p className="text-xs text-slate-500 mt-1">
                    Audited by Audittech Certification (IAF / EGAC accredited) for industrial metal trading.
                  </p>
                </div>

                <div className="p-4 bg-[#F3F7FB] border border-[#DDE5EE] rounded-xl">
                  <div className="flex items-center gap-2.5 font-bold text-sm text-[#123467]">
                    <FileCheck className="w-4 h-4 text-blue-600" />
                    <span>MSME Udyam Registered</span>
                  </div>
                  <p className="text-xs text-slate-500 mt-1">
                    Govt. of India Enterprise (UDYAM-MH-19-0449426) for wholesale of metals and ores.
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <Link
                  to="/about"
                  className="inline-flex items-center justify-center px-6 py-3 text-sm font-bold text-white bg-[#123467] hover:bg-[#1B478A] rounded-md shadow-sm transition-colors"
                >
                  <span>Learn More About Us</span>
                  <ChevronRight className="w-4 h-4 ml-1.5" />
                </Link>

                <Link
                  to="/certificate"
                  className="inline-flex items-center justify-center px-5 py-3 text-sm font-bold text-[#123467] hover:text-[#D71932] border border-slate-300 hover:border-[#123467] rounded-md transition-colors"
                >
                  <FileText className="w-4 h-4 mr-2 text-[#D71932]" />
                  <span>View Verified Certificates</span>
                </Link>
              </div>
            </div>

            {/* Industrial Product Photography Right */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-premium border-4 border-white bg-slate-100 group">
                <img
                  src="/images/about-intro.jpg"
                  alt="Pawan Steel Alloys stock warehouse inspection in Mumbai"
                  className="w-full h-[430px] object-cover transition-transform duration-500 group-hover:scale-103"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1F3D]/80 via-transparent to-transparent" />

                {/* Floating Information Overlay on Image */}
                <div className="absolute bottom-5 left-5 right-5 p-4 rounded-xl bg-white/95 backdrop-blur-md border border-slate-200/90 shadow-float">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-[11px] font-extrabold text-[#D71932] uppercase tracking-wider">Trading & Distribution Hub</p>
                      <p className="text-sm font-extrabold text-[#123467]">Gulalwadi, Girgaon, Mumbai</p>
                    </div>
                    <span className="text-xs px-2.5 py-1 bg-slate-100 font-bold text-slate-700 rounded border border-slate-200">
                      Pin: 400004
                    </span>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Section 9 Part 2: Why Choose Pawan Steel Alloys? */}
          <div className="mt-20 pt-16 border-t border-slate-200">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-xs font-bold uppercase tracking-wider text-[#D71932] bg-red-50 border border-red-100 px-3 py-1 rounded-md">
                Service Commitments
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#123467] mt-3 mb-3">
                Why Choose Pawan Steel Alloys?
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Direct communication, verified dimensional accuracy, and transparent material documentation.
              </p>
            </div>

            {/* 6 Benefit Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {WHY_CHOOSE_US.map((item) => (
                <div
                  key={item.id}
                  className="p-6 bg-[#F3F7FB] rounded-xl border border-[#DDE5EE] shadow-subtle hover:shadow-hover hover:border-[#123467] transition-all duration-300 flex items-start gap-4"
                >
                  <div className="p-3 rounded-lg bg-white border border-slate-200 flex-shrink-0 shadow-sm">
                    {getBenefitIcon(item.iconName)}
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-[#123467] mb-1.5">
                      {item.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 6: Our Products Section */}
      <section className="py-16 md:py-24 bg-[#F3F7FB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-[#D71932] bg-red-50 border border-red-100 px-3 py-1 rounded-md">
              Complete Stock Range
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#123467] mt-3 mb-4 tracking-tight">
              Explore Our Industrial Product Range
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Precision engineered and standard stock industrial products compliant with ASME, ASTM, DIN, and IS specifications.
            </p>
          </div>

          {/* 8 Product Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {CATEGORIES.map((category) => (
              <div
                key={category.id}
                className="bg-white rounded-2xl overflow-hidden border border-[#DDE5EE] shadow-subtle hover:shadow-hover hover:border-[#D71932] transition-all duration-300 flex flex-col group transform hover:-translate-y-1.5"
              >
                {/* Product Image with Zoom on Hover - Clickable */}
                <Link to={`/products/${category.slug}`} className="block relative h-48 w-full bg-slate-100 overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="text-[11px] font-bold bg-[#123467]/90 text-white px-2.5 py-1 rounded backdrop-blur-sm">
                      {category.title}
                    </span>
                  </div>
                </Link>

                {/* Card Content */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-base font-bold text-[#123467] group-hover:text-[#D71932] transition-colors mb-2">
                      <Link to={`/products/${category.slug}`}>
                        {category.title}
                      </Link>
                    </h3>
                    <p className="text-xs text-slate-500 line-clamp-3 leading-relaxed mb-4">
                      {category.shortDesc}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                    <Link
                      to={`/products/${category.slug}`}
                      className="inline-flex items-center text-xs font-bold text-[#D71932] group-hover:text-[#B51226] transition-colors"
                    >
                      <span>Explore {category.title}</span>
                      <ChevronRight className="w-3.5 h-3.5 ml-1 transition-transform group-hover:translate-x-1" />
                    </Link>

                    <button
                      onClick={onOpenQuoteModal}
                      className="text-[11px] font-bold text-slate-500 hover:text-[#123467]"
                    >
                      Quote
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View All Products CTA */}
          <div className="mt-12 text-center">
            <Link
              to="/products"
              className="inline-flex items-center justify-center px-8 py-3.5 text-sm font-bold text-white bg-[#D71932] hover:bg-[#B51226] rounded-md shadow-md transition-all duration-200 transform hover:-translate-y-0.5"
            >
              <span>View All Products & Schedules</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>

        </div>
      </section>

      {/* SECTION 7: Materials for Every Industry — Continuous Right-to-Left Marquee */}
      <MaterialMarquee onOpenQuoteModal={onOpenQuoteModal} />

      {/* SECTION 8: Industries We Serve — Image-Led Section with 8 Real Photos */}
      <section className="py-16 md:py-24 bg-[#F3F7FB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-[#D71932] bg-red-50 border border-red-100 px-3 py-1 rounded-md">
              Application Environments
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#123467] mt-3 mb-4 tracking-tight">
              Industries We Serve
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Our supplied steel and alloy materials withstand demanding mechanical pressure, high operational temperatures, and aggressive chemical media across essential global sectors.
            </p>
          </div>

          {/* 8 Industries Image Grid: Clean Image and Industry Name */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {INDUSTRIES.map((ind) => (
              <div
                key={ind.id}
                className="group bg-white rounded-2xl overflow-hidden border border-[#DDE5EE] shadow-subtle hover:shadow-hover transition-all duration-300 transform hover:-translate-y-1.5 cursor-default flex flex-col"
              >
                {/* 100% Clean Industry Photograph Without Any Overlay */}
                <div className="h-48 sm:h-52 overflow-hidden bg-slate-100 border-b border-slate-100">
                  <img
                    src={ind.image}
                    alt={`${ind.name} industrial applications for steel`}
                    className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                    loading="lazy"
                  />
                </div>

                {/* Industry Name and Icon */}
                <div className="p-4 bg-white flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-slate-50 text-[#123467] group-hover:bg-red-50 group-hover:text-[#D71932] transition-colors flex-shrink-0">
                    {getIndustryIcon(ind.iconName)}
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-[#123467] group-hover:text-[#D71932] transition-colors tracking-tight">
                    {ind.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-xs text-slate-400 mt-8">
            Note: Sectors presented represent typical industrial metal application sectors and engineering service capabilities.
          </p>

        </div>
      </section>

      {/* SECTION 10: Quality and Product Information */}
      <section className="py-16 md:py-20 bg-slate-900 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">

            <div className="lg:col-span-8 space-y-4">
              <span className="text-xs font-bold text-red-400 uppercase tracking-widest bg-red-950/70 border border-red-800/60 px-3 py-1 rounded">
                Product Specification Guide
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
                How to Submit Your Material Requirements
              </h2>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                To help our sales desk provide you with an exact quotation and confirmed delivery schedule, please include the following parameters in your inquiry:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700/80">
                  <p className="text-xs text-red-400 font-bold uppercase tracking-wider">1. Material & Grade</p>
                  <p className="text-sm font-semibold text-white mt-1">Exact Alloy Identification</p>
                  <p className="text-xs text-slate-400 mt-1">Specify ASTM/UNS grade (e.g. SS 316L, Inconel 625, Hastelloy C-276, A105).</p>
                </div>

                <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700/80">
                  <p className="text-xs text-red-400 font-bold uppercase tracking-wider">2. Product Form & Category</p>
                  <p className="text-sm font-semibold text-white mt-1">Component Classification</p>
                  <p className="text-xs text-slate-400 mt-1">Pipes, Tubes, Sheets, Plates, Round Bars, Flanges, or Pipe Fittings.</p>
                </div>

                <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700/80">
                  <p className="text-xs text-red-400 font-bold uppercase tracking-wider">3. Dimensions & Schedule</p>
                  <p className="text-sm font-semibold text-white mt-1">Tolerances & Pressure Ratings</p>
                  <p className="text-xs text-slate-400 mt-1">Nominal pipe size (NB), schedule (SCH 10 to XXS), plate thickness, or flange class (150# to 2500#).</p>
                </div>

                <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700/80">
                  <p className="text-xs text-red-400 font-bold uppercase tracking-wider">4. Documentation & Quantity</p>
                  <p className="text-sm font-semibold text-white mt-1">Testing & Certification Needs</p>
                  <p className="text-xs text-slate-400 mt-1">Mill Test Certificate (EN 10204 3.1), third-party inspection, or specific quantity required.</p>
                </div>
              </div>
            </div>

            {/* Quick Inquire Action Box Right */}
            <div className="lg:col-span-4 p-6 sm:p-8 rounded-2xl bg-[#123467] border border-[#1B478A] text-center space-y-4 shadow-xl">
              <ShieldCheck className="w-12 h-12 text-[#D71932] mx-auto" />
              <h3 className="text-xl font-bold text-white">Have a Bill of Materials?</h3>
              <p className="text-xs text-slate-200 leading-relaxed">
                Submit your technical drawing, BOM, or required material schedule directly to our sales desk.
              </p>
              <button
                onClick={onOpenQuoteModal}
                type="button"
                className="w-full py-3.5 px-4 bg-[#D71932] hover:bg-[#B51226] text-white font-bold text-sm rounded-lg transition shadow-md"
              >
                Request Itemized Quote
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 11: Prominent Homepage Inquiry Form */}
      <section className="py-16 md:py-24 bg-white border-b border-[#DDE5EE]" id="inquiry-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

            {/* Left Column Information */}
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-[#D71932] bg-red-50 border border-red-100 px-3 py-1 rounded-md">
                Direct Commercial Desk
              </span>
              <h2 className="text-3xl font-extrabold text-[#123467] tracking-tight leading-tight">
                Submit Your Material Inquiry
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed font-normal">
                Share your product, material, size, and quantity requirements with our sales desk in Mumbai. We provide detailed pricing, availability, and delivery lead time.
              </p>

              {/* Fast Direct Contacts */}
              <div className="space-y-3.5 pt-2">
                <div className="flex items-center gap-3 p-3.5 bg-[#F3F7FB] rounded-xl border border-slate-200">
                  <div className="p-2.5 rounded-lg bg-blue-50 text-[#123467]">
                    <User className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[11px] font-bold text-slate-400 uppercase">Contact Person</p>
                    <p className="text-sm font-bold text-[#123467]">
                      {COMPANY_INFO.contactPerson || 'Mr. Babulal Dewasi'}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3.5 bg-[#F3F7FB] rounded-xl border border-slate-200">
                  <div className="p-2.5 rounded-lg bg-red-50 text-[#D71932]">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[11px] font-bold text-slate-400 uppercase">Office Landline (Mumbai STD)</p>
                    <a href="tel:+912266394854" className="text-sm font-bold text-[#123467] hover:text-[#D71932]">
                      +91 22 6639 4854
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3.5 bg-[#F3F7FB] rounded-xl border border-slate-200">
                  <div className="p-2.5 rounded-lg bg-emerald-50 text-emerald-600">
                    <WhatsAppIcon className="w-4 h-4 text-emerald-600" />
                  </div>
                  <div>
                    <p className="text-[11px] font-bold text-slate-400 uppercase">Mobile & WhatsApp</p>
                    <a href="tel:+919950789923" className="text-sm font-bold text-[#123467] hover:text-emerald-600 block">
                      +91 99507 89923
                    </a>
                    <a href="tel:+919833416144" className="text-xs font-medium text-slate-500 hover:text-emerald-600 block mt-0.5">
                      Intl / Alt: +91 98334 16144
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3.5 bg-[#F3F7FB] rounded-xl border border-slate-200">
                  <div className="p-2.5 rounded-lg bg-blue-50 text-blue-600">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[11px] font-bold text-slate-400 uppercase">Email Address</p>
                    <a href={`mailto:${COMPANY_INFO.email}`} className="text-xs sm:text-sm font-bold text-[#123467] hover:text-[#D71932] break-all">
                      {COMPANY_INFO.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3.5 bg-[#F3F7FB] rounded-xl border border-slate-200">
                  <div className="p-2.5 rounded-lg bg-slate-200 text-[#123467]">
                    <MapPin className="w-4 h-4 text-[#D71932]" />
                  </div>
                  <div>
                    <p className="text-[11px] font-bold text-slate-400 uppercase">Location</p>
                    <p className="text-xs font-semibold text-slate-700 leading-snug">
                      {COMPANY_INFO.address.full}
                    </p>
                  </div>
                </div>
              </div>

            </div>

            {/* Right Column: Full Interactive Form */}
            <div className="lg:col-span-7 bg-[#F3F7FB] p-6 sm:p-8 rounded-2xl border border-[#DDE5EE] shadow-premium">
              <div className="mb-6 pb-4 border-b border-slate-200">
                <h3 className="text-xl font-bold text-[#123467]">
                  Commercial Quotation Form
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Fill in your required material specifications. Submitting will prepare your structured email or WhatsApp message directly to our team.
                </p>
              </div>

              <InquiryForm />
            </div>

          </div>

        </div>
      </section>

      {/* SECTION 12: International Export Network — Screenshot 3 Design */}
      <CountryExportNetwork />

      {/* Inquiry CTA Strip */}
      <section className="bg-gradient-to-r from-[#123467] via-[#1B478A] to-[#D71932] text-white py-12 md:py-14 shadow-inner">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="max-w-2xl space-y-1.5">
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              Looking for the Right Industrial Metal Product?
            </h2>
            <p className="text-slate-200 text-sm">
              Share your material, grade, size, and quantity requirements with our sales desk today.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={onOpenQuoteModal}
              type="button"
              className="px-7 py-3 bg-white text-[#123467] hover:bg-slate-100 font-extrabold text-sm rounded-md shadow-lg transition-transform transform hover:-translate-y-0.5"
            >
              Request a Quote
            </button>
            <Link
              to="/contact"
              className="px-7 py-3 bg-[#0A1F3D] text-white hover:bg-black font-extrabold text-sm rounded-md shadow-lg transition-transform transform hover:-translate-y-0.5 border border-white/20"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
