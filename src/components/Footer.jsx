import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Phone, 
  Mail, 
  MapPin, 
  ArrowUp, 
  ChevronRight, 
  FileCheck, 
  ShieldCheck,
  Send,
  Sparkles,
  ExternalLink
} from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';
import { CATEGORIES, MATERIALS } from '../data/productsData';
import SocialLinksGroup from './SocialIcons';

// Official WhatsApp vector SVG
function WhatsAppIcon({ className = "w-4 h-4 text-white" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12.031 2C6.496 2 2 6.494 2 12.029c0 1.93.551 3.731 1.508 5.257L2 22l4.872-1.464a9.983 9.983 0 005.159 1.493h.004c5.535 0 10.031-4.495 10.031-10.029C22.066 6.494 17.569 2 12.031 2zm0 18.286h-.003a8.273 8.273 0 01-4.223-1.157l-.303-.18-2.89.868.883-2.818-.198-.314A8.252 8.252 0 013.76 12.03c0-4.561 3.712-8.273 8.274-8.273 4.561 0 8.273 3.712 8.273 8.273 0 4.561-3.712 8.256-8.276 8.256zm4.536-6.19c-.248-.124-1.47-.725-1.698-.808-.228-.083-.394-.124-.56.124-.166.248-.643.808-.788.974-.145.166-.29.186-.539.062-.248-.124-1.047-.386-1.996-1.231-.739-.658-1.238-1.472-1.383-1.72-.145-.248-.016-.383.109-.506.111-.111.248-.29.373-.435.124-.145.166-.248.248-.415.083-.166.041-.31-.02-.435-.062-.124-.56-1.348-.767-1.846-.202-.486-.407-.42-.56-.428l-.477-.008c-.166 0-.435.062-.663.31-.228.248-.871.85-.871 2.073s.892 2.404 1.016 2.57c.124.166 1.755 2.68 4.252 3.757.594.256 1.058.41 1.42.525.597.189 1.141.162 1.57.098.479-.071 1.47-.601 1.678-1.182.207-.58.207-1.077.145-1.182-.062-.104-.228-.166-.477-.29z"/>
    </svg>
  );
}

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#071529] text-slate-300 pt-16 pb-8 border-t-4 border-[#D71932] relative overflow-hidden">
      {/* Background Subtle Geometric Pattern */}
      <div 
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
          backgroundSize: '48px 48px'
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Pre-Footer Action Banner */}
        <div className="mb-14 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#0C2344] via-[#123467] to-[#1A4280] border border-[#1E4C8C] shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1.5 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded bg-[#D71932]/20 border border-[#D71932]/40 text-[#FF4D63] text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3 h-3" />
              <span>Prompt Technical Quotations</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight">
              Looking for Immediate Material Pricing or Stock Availability?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-2xl font-normal">
              Connect directly with our metals trading desk in Gulalwadi, Mumbai. Fast response on custom schedules, mill test reports & export dispatches.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 flex-shrink-0">
            <a
              href="https://wa.me/919833416144?text=Hello%20Pawan%20Steel%20Alloys%2C%20I%20would%20like%20to%20inquire%20about%20your%20industrial%20raw%20materials."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-[#25D366] hover:bg-[#20BD5A] text-white text-xs sm:text-sm font-bold shadow-lg transition-transform transform hover:-translate-y-0.5"
            >
              <WhatsAppIcon className="w-4 h-4 text-white" />
              <span>WhatsApp Inquiry</span>
            </a>

            <a
              href="tel:02266394854"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-[#D71932] hover:bg-[#B51226] text-white text-xs sm:text-sm font-bold shadow-lg transition-transform transform hover:-translate-y-0.5"
            >
              <Phone className="w-4 h-4" />
              <span>022-66394854</span>
            </a>
          </div>
        </div>

        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800/80">
          
          {/* Column 1: Company Profile & Larger Logo */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="inline-block bg-white p-3.5 sm:p-4 rounded-xl shadow-lg border border-slate-200 group">
              <img 
                src="/logo.png" 
                alt="PAWAN STEEL ALLOYS - Official Company Logo" 
                className="h-14 sm:h-16 md:h-18 w-auto object-contain transition-transform group-hover:scale-[1.02]"
                style={{ imageRendering: '-webkit-optimize-contrast' }}
              />
            </Link>

            <p className="text-sm text-slate-300 leading-relaxed max-w-sm font-normal">
              <strong className="text-white font-semibold">{COMPANY_INFO.name}</strong> is an established industrial stockist and supplier of stainless steel, carbon steel, alloy steel, duplex, and specialty nickel alloys headquartered in Mumbai, India.
            </p>

            {/* Verified Certifications Badges */}
            <div className="flex flex-wrap gap-2 pt-1">
              <Link 
                to="/certificate" 
                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#122A4E] border border-slate-700 hover:border-[#D71932] rounded-lg text-xs text-slate-200 transition-colors shadow-sm"
              >
                <ShieldCheck className="w-4 h-4 text-[#D71932]" />
                <span className="font-semibold">ISO 9001:2015 Certified</span>
              </Link>
              <Link 
                to="/certificate" 
                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#122A4E] border border-slate-700 hover:border-blue-400 rounded-lg text-xs text-slate-200 transition-colors shadow-sm"
              >
                <FileCheck className="w-4 h-4 text-blue-400" />
                <span className="font-semibold">MSME Udyam: UDYAM-MH-19-0449426</span>
              </Link>
            </div>

            {/* Direct Connect Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a 
                href="https://wa.me/919833416144?text=Hello%20Pawan%20Steel%20Alloys%2C%20I%20would%20like%20to%20enquire%20about%20your%20industrial%20metal%20products." 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center gap-2 px-3.5 py-2 bg-[#25D366] hover:bg-[#20BD5A] text-white text-xs font-bold rounded-md shadow transition-colors"
              >
                <WhatsAppIcon className="w-3.5 h-3.5" />
                <span>WhatsApp Instant</span>
              </a>
              <a 
                href="tel:09850789923" 
                className="inline-flex items-center gap-2 px-3.5 py-2 bg-[#D71932] hover:bg-[#B51226] text-white text-xs font-bold rounded-md shadow transition-colors"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call Us Now</span>
              </a>
            </div>

            {/* Official Social Media Handles (LinkedIn, Facebook, Instagram) */}
            <div className="pt-3 border-t border-slate-800/80">
              <span className="text-[11px] uppercase font-bold text-slate-400 block mb-2 tracking-wider">
                Official Social Media
              </span>
              <SocialLinksGroup variant="colored" size="md" />
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-white font-extrabold text-sm tracking-wider uppercase mb-4 border-l-2 border-[#D71932] pl-2.5">
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/" className="text-slate-400 hover:text-white flex items-center gap-1.5 transition-colors group">
                  <ChevronRight className="w-3.5 h-3.5 text-[#D71932] group-hover:translate-x-1 transition-transform" />
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-slate-400 hover:text-white flex items-center gap-1.5 transition-colors group">
                  <ChevronRight className="w-3.5 h-3.5 text-[#D71932] group-hover:translate-x-1 transition-transform" />
                  <span>About Us</span>
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-slate-400 hover:text-white flex items-center gap-1.5 transition-colors group">
                  <ChevronRight className="w-3.5 h-3.5 text-[#D71932] group-hover:translate-x-1 transition-transform" />
                  <span>All Products</span>
                </Link>
              </li>
              <li>
                <Link to="/materials" className="text-slate-400 hover:text-white flex items-center gap-1.5 transition-colors group">
                  <ChevronRight className="w-3.5 h-3.5 text-[#D71932] group-hover:translate-x-1 transition-transform" />
                  <span>Materials Range</span>
                </Link>
              </li>
              <li>
                <Link to="/certificate" className="text-slate-400 hover:text-white flex items-center gap-1.5 transition-colors group">
                  <ChevronRight className="w-3.5 h-3.5 text-[#D71932] group-hover:translate-x-1 transition-transform" />
                  <span>Certificates & Verification</span>
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-slate-400 hover:text-white flex items-center gap-1.5 transition-colors group">
                  <ChevronRight className="w-3.5 h-3.5 text-[#D71932] group-hover:translate-x-1 transition-transform" />
                  <span>Contact Us</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Product Range */}
          <div>
            <h3 className="text-white font-extrabold text-sm tracking-wider uppercase mb-4 border-l-2 border-[#D71932] pl-2.5">
              Products
            </h3>
            <ul className="space-y-2 text-sm">
              {CATEGORIES.map((cat) => (
                <li key={cat.id}>
                  <Link 
                    to={`/products/${cat.slug}`} 
                    className="text-slate-400 hover:text-white transition-colors block truncate"
                    title={cat.title}
                  >
                    {cat.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Office */}
          <div>
            <h3 className="text-white font-extrabold text-sm tracking-wider uppercase mb-4 border-l-2 border-[#D71932] pl-2.5">
              Registered Office
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#D71932] flex-shrink-0 mt-1" />
                <span className="text-slate-300 text-xs leading-relaxed font-normal">
                  {COMPANY_INFO.address.full}
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#D71932] flex-shrink-0" />
                <a href="tel:02266394854" className="text-slate-300 hover:text-white text-xs font-semibold">
                  {COMPANY_INFO.phone} (Office)
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <a href="tel:09850789923" className="text-slate-300 hover:text-white text-xs font-semibold">
                  {COMPANY_INFO.mobile} (Mobile)
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <a href="tel:09833416144" className="text-slate-300 hover:text-white text-xs font-semibold">
                  {COMPANY_INFO.additionalMobile} (Alt. Contact)
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#D71932] flex-shrink-0" />
                <a href={`mailto:${COMPANY_INFO.email}`} className="text-slate-300 hover:text-white text-xs truncate max-w-[200px]">
                  {COMPANY_INFO.email}
                </a>
              </li>
            </ul>

            {/* Quick Material Grade Pills */}
            <div className="pt-3 border-t border-slate-800 mt-3">
              <span className="text-[11px] uppercase font-bold text-slate-400 block mb-1.5 tracking-wider">Key Materials</span>
              <div className="flex flex-wrap gap-1 text-[11px]">
                {MATERIALS.slice(0, 6).map((m) => (
                  <Link 
                    key={m.id} 
                    to={`/materials/${m.slug}`}
                    className="px-2 py-0.5 bg-[#122A4E] hover:bg-[#D71932] text-slate-300 hover:text-white rounded text-[10px] font-semibold transition-colors"
                  >
                    {m.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright, Back to Top, and Exact Sunmarg India Credit */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          
          <div className="text-center sm:text-left space-y-1">
            <p className="text-slate-300 font-medium">© {currentYear} {COMPANY_INFO.legalName}. All rights reserved.</p>
            <p className="text-slate-500 text-[11px]">
              Stockist & Supplier of Stainless Steel, Alloy Steel & Industrial Metal Products • Mumbai, India
            </p>
          </div>

          {/* Exact Sunmarg India Credit */}
          <div className="text-center sm:text-right flex flex-col sm:items-end gap-1">
            <p className="text-xs text-slate-300 font-medium">
              Designed & SEO by{' '}
              <a 
                href="https://sunmargindia.com/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-[#D71932] hover:text-red-400 font-black hover:underline transition-colors tracking-wide"
              >
                Sunmarg India
              </a>
            </p>
            
            <button
              onClick={scrollToTop}
              type="button"
              className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-white transition-colors mt-1"
              title="Scroll back to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

      </div>
    </footer>
  );
}
