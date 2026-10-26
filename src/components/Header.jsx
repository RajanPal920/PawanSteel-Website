import React, { useState, useEffect, useRef } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import {
  Phone,
  Mail,
  MapPin,
  Menu,
  X,
  ChevronRight,
  ChevronDown,
  ShieldCheck,
  FileCheck,
  ExternalLink,
  ArrowRight
} from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';
import { CATEGORIES, MATERIALS } from '../data/productsData';
import SocialLinksGroup from './SocialIcons';

// Official WhatsApp vector SVG
function WhatsAppIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12.031 2C6.496 2 2 6.494 2 12.029c0 1.93.551 3.731 1.508 5.257L2 22l4.872-1.464a9.983 9.983 0 005.159 1.493h.004c5.535 0 10.031-4.495 10.031-10.029C22.066 6.494 17.569 2 12.031 2zm0 18.286h-.003a8.273 8.273 0 01-4.223-1.157l-.303-.18-2.89.868.883-2.818-.198-.314A8.252 8.252 0 013.76 12.03c0-4.561 3.712-8.273 8.274-8.273 4.561 0 8.273 3.712 8.273 8.273 0 4.561-3.712 8.256-8.276 8.256zm4.536-6.19c-.248-.124-1.47-.725-1.698-.808-.228-.083-.394-.124-.56.124-.166.248-.643.808-.788.974-.145.166-.29.186-.539.062-.248-.124-1.047-.386-1.996-1.231-.739-.658-1.238-1.472-1.383-1.72-.145-.248-.016-.383.109-.506.111-.111.248-.29.373-.435.124-.145.166-.248.248-.415.083-.166.041-.31-.02-.435-.062-.124-.56-1.348-.767-1.846-.202-.486-.407-.42-.56-.428l-.477-.008c-.166 0-.435.062-.663.31-.228.248-.871.85-.871 2.073s.892 2.404 1.016 2.57c.124.166 1.755 2.68 4.252 3.757.594.256 1.058.41 1.42.525.597.189 1.141.162 1.57.098.479-.071 1.47-.601 1.678-1.182.207-.58.207-1.077.145-1.182-.062-.104-.228-.166-.477-.29z" />
    </svg>
  );
}

export default function Header({ onOpenQuoteModal }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMega, setActiveMega] = useState(null); // 'products' | 'materials' | 'certificates' | null
  const [mobileAccordion, setMobileAccordion] = useState({ products: false, materials: false, certificates: false });
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const megaMenuTimeoutRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveMega(null);
  }, [location.pathname]);

  const handleMouseEnter = (menu) => {
    if (megaMenuTimeoutRef.current) {
      clearTimeout(megaMenuTimeoutRef.current);
    }
    setActiveMega(menu);
  };

  const handleMouseLeave = () => {
    megaMenuTimeoutRef.current = setTimeout(() => {
      setActiveMega(null);
    }, 200);
  };

  const toggleMobileAccordion = (key) => {
    setMobileAccordion((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <header className="w-full z-50 sticky top-0 bg-white/95 backdrop-blur-md transition-all duration-300 font-sans border-b border-[#DDE5EE]">
      {/* Desktop Topbar: Visible on desktop, completely removed on mobile */}
      <div className="hidden lg:block bg-[#0A1F3D] text-slate-200 border-b border-[#123467] text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <a
              href="tel:02266394854"
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#D71932]" />
              <span className="font-semibold">022-66394854</span>
            </a>
            <a
              href="tel:09950789923"
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-400" />
              <span className="font-semibold">09950789923</span>
            </a>
            <a
              href="tel:09833416144"
              className="hidden xl:flex items-center gap-1.5 hover:text-white transition-colors"
              title="Additional Contact"
            >
              <Phone className="w-3.5 h-3.5 text-blue-400" />
              <span className="font-semibold text-slate-300">09833416144</span>
            </a>
            <a
              href="https://wa.me/919833416144?text=Hello%20Pawan%20Steel%20Alloys%2C%20I%20would%20like%20to%20enquire%20about%20your%20industrial%20raw%20materials."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-white text-emerald-400 transition-colors"
            >
              <WhatsAppIcon className="w-3.5 h-3.5 text-emerald-400" />
              <span className="font-semibold">WhatsApp</span>
            </a>
            <span className="flex items-center gap-1.5 text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-[#D71932]" />
              <span>Mumbai, Maharashtra, India</span>
            </span>
          </div>

          <div className="flex items-center space-x-3 xl:space-x-4">
            <span className="text-[11px] text-slate-300 font-medium flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-[#D71932]" />
              <span>ISO 9001:2015 Stockist</span>
            </span>
            <span className="text-slate-600">|</span>
            <a
              href={`mailto:${COMPANY_INFO.email}`}
              className="hover:text-white transition-colors flex items-center gap-1"
            >
              <Mail className="w-3.5 h-3.5 text-blue-400" />
              <span>{COMPANY_INFO.email}</span>
            </a>
            <span className="text-slate-600">|</span>
            {/* Social Media Handles */}
            <SocialLinksGroup variant="topbar" />
          </div>
        </div>
      </div>

      {/* Main Navigation Bar - Balanced compact height */}
      <div className={`transition-all duration-200 ${isScrolled ? 'py-0.5 shadow-md' : 'py-1'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">

          {/* Logo Left - Prominent, Sharp and Elegantly Proportioned */}
          <Link to="/" className="flex items-center focus:outline-none group flex-shrink-0" aria-label="Pawan Steel Alloys Homepage">
            <img
              src="/logo.png"
              alt="PAWAN STEEL ALLOYS - An ISO 9001:2015 Certified Company"
              className="h-16 sm:h-20 md:h-[88px] lg:h-[92px] w-auto object-contain transition-transform duration-200 group-hover:scale-[1.02]"
              style={{ imageRendering: '-webkit-optimize-contrast' }}
            />
          </Link>

          {/* Desktop Navigation Links with Light-Red Background & Pixel-Perfect Alignment */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-1.5 p-1.5 bg-[#FEF2F2] border border-[#FECACA] rounded-2xl shadow-xs">

            {/* 1. Home */}
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                `h-10 px-4 xl:px-4.5 rounded-xl text-[14px] xl:text-[15px] font-bold tracking-tight inline-flex items-center justify-center transition-all duration-200 select-none ${isActive
                  ? 'bg-[#D71932] text-white shadow-sm font-black'
                  : 'text-[#123467] hover:text-[#D71932] hover:bg-white/90'
                }`
              }
            >
              Home
            </NavLink>

            {/* 2. About */}
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `h-10 px-4 xl:px-4.5 rounded-xl text-[14px] xl:text-[15px] font-bold tracking-tight inline-flex items-center justify-center transition-all duration-200 select-none ${isActive
                  ? 'bg-[#D71932] text-white shadow-sm font-black'
                  : 'text-[#123467] hover:text-[#D71932] hover:bg-white/90'
                }`
              }
            >
              About
            </NavLink>

            {/* 3. Products with Mega Menu */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter('products')}
              onMouseLeave={handleMouseLeave}
            >
              <NavLink
                to="/products"
                className={({ isActive }) =>
                  `h-10 px-4 xl:px-4.5 rounded-xl text-[14px] xl:text-[15px] font-bold tracking-tight inline-flex items-center justify-center gap-1.5 transition-all duration-200 select-none ${isActive || activeMega === 'products'
                    ? 'bg-[#D71932] text-white shadow-sm font-black'
                    : 'text-[#123467] hover:text-[#D71932] hover:bg-white/90'
                  }`
                }
              >
                <span>Products</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeMega === 'products' ? 'rotate-180 text-white' : ''}`} />
              </NavLink>

              {/* Mega Menu Dropdown: Products - Original Compact Layout with Red Background */}
              {activeMega === 'products' && (
                <div
                  className="absolute left-1/2 -translate-x-1/2 top-full pt-2 w-[780px] z-50 animate-in fade-in slide-in-from-top-1 duration-150"
                  onMouseEnter={() => handleMouseEnter('products')}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="bg-[#D71932] rounded-2xl shadow-float border border-red-700/50 p-6 text-white">
                    {/* Header Strip */}
                    <div className="flex items-center justify-between pb-3.5 mb-4 border-b border-white/20">
                      <div>
                        <h4 className="text-sm font-extrabold text-white uppercase tracking-wider">
                          All 8 Industrial Product Categories
                        </h4>
                        <p className="text-xs text-white/80">ASME / ASTM / DIN compliant industrial steel supplies</p>
                      </div>
                      <Link
                        to="/products"
                        className="text-xs font-bold text-white hover:underline inline-flex items-center gap-1"
                      >
                        <span>Explore Full Catalogue</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>

                    {/* 8 Product Categories Grid: 2 Columns of 4 */}
                    <div className="grid grid-cols-2 gap-3">
                      {CATEGORIES.map((cat) => (
                        <Link
                          key={cat.id}
                          to={`/products/${cat.slug}`}
                          className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-white/10 transition-all group border border-transparent hover:border-white/15"
                        >
                          <img
                            src={cat.image}
                            alt={cat.title}
                            className="w-12 h-12 object-cover rounded-lg flex-shrink-0 shadow-sm border border-white/20 bg-white"
                          />
                          <div className="flex-1 min-w-0">
                            <p className="text-xs font-bold text-white group-hover:text-amber-200 transition-colors truncate">
                              {cat.title}
                            </p>
                            <p className="text-[11px] text-white/80 truncate mt-0.5">
                              {cat.highlights[0]}
                            </p>
                          </div>
                          <ChevronRight className="w-4 h-4 text-white/60 group-hover:text-white group-hover:translate-x-0.5 transition-all flex-shrink-0" />
                        </Link>
                      ))}
                    </div>

                    {/* Quick Popular Product Direct Links */}
                    <div className="mt-3.5 pt-2.5 border-t border-white/20 flex flex-wrap items-center gap-1.5 text-[11px]">
                      <span className="text-white/80 font-bold mr-1">Direct Stock:</span>
                      <Link to="/products/round-bars" className="px-2 py-0.5 rounded bg-white/10 hover:bg-white/25 text-white transition font-medium">Round Bars</Link>
                      <Link to="/products/pipes-tubes" className="px-2 py-0.5 rounded bg-white/10 hover:bg-white/25 text-white transition font-medium">Seamless Pipes</Link>
                      <Link to="/products/flanges" className="px-2 py-0.5 rounded bg-white/10 hover:bg-white/25 text-white transition font-medium">Flanges</Link>
                      <Link to="/products/sheets-plates" className="px-2 py-0.5 rounded bg-white/10 hover:bg-white/25 text-white transition font-medium">Plates</Link>
                      <Link to="/products/fasteners" className="px-2 py-0.5 rounded bg-white/10 hover:bg-white/25 text-white transition font-medium">Fasteners</Link>
                      <Link to="/products/butt-weld-fittings" className="px-2 py-0.5 rounded bg-white/10 hover:bg-white/25 text-white transition font-medium">Butt Weld</Link>
                      <Link to="/products/forged-pipe-fittings-manufacturer-india" className="px-2 py-0.5 rounded bg-white/10 hover:bg-white/25 text-white transition font-medium">Forged Fittings</Link>
                      <Link to="/products/double-ferrule-tube-fittings-manufacturer-india" className="px-2 py-0.5 rounded bg-white/10 hover:bg-white/25 text-white transition font-medium">Ferrule Fittings</Link>
                    </div>

                    {/* Bottom Strip */}
                    <div className="mt-3 pt-2.5 border-t border-white/20 flex items-center justify-between text-xs text-white/90">
                      <span className="flex items-center gap-1.5 font-medium">
                        <ShieldCheck className="w-4 h-4 text-emerald-300" />
                        <span>Ready Stock & Direct Mill Sourcing Available</span>
                      </span>
                      <button
                        onClick={onOpenQuoteModal}
                        className="font-bold text-white hover:underline"
                      >
                        Quick RFQ & Inquiries →
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* 4. Material with Mega Menu */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter('materials')}
              onMouseLeave={handleMouseLeave}
            >
              <NavLink
                to="/materials"
                className={({ isActive }) =>
                  `h-10 px-4 xl:px-4.5 rounded-xl text-[14px] xl:text-[15px] font-bold tracking-tight inline-flex items-center justify-center gap-1.5 transition-all duration-200 select-none ${isActive || activeMega === 'materials'
                    ? 'bg-[#D71932] text-white shadow-sm font-black'
                    : 'text-[#123467] hover:text-[#D71932] hover:bg-white/90'
                  }`
                }
              >
                <span>Material</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeMega === 'materials' ? 'rotate-180 text-white' : ''}`} />
              </NavLink>

              {/* Mega Menu Dropdown: Materials - Solid Red Background */}
              {activeMega === 'materials' && (
                <div
                  className="absolute left-1/2 -translate-x-1/2 top-full pt-2 w-[760px] z-50 animate-in fade-in slide-in-from-top-1 duration-150"
                  onMouseEnter={() => handleMouseEnter('materials')}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="bg-[#D71932] rounded-2xl shadow-2xl border-2 border-[#B51226] overflow-hidden text-white">
                    {/* Header Strip */}
                    <div className="bg-[#930E1E]/60 px-6 py-4 border-b border-white/20 flex items-center justify-between">
                      <div>
                        <h4 className="text-sm font-black text-white uppercase tracking-wider">
                          Available Material Categories (13 Alloys)
                        </h4>
                        <p className="text-xs text-red-100 mt-0.5 font-medium">Select any material to view matching product formats and grades</p>
                      </div>
                      <Link
                        to="/materials"
                        className="text-xs font-black text-white hover:text-[#D71932] bg-white/20 hover:bg-white px-3.5 py-1.5 rounded-lg transition-all inline-flex items-center gap-1.5 shadow-sm"
                      >
                        <span>Metallurgy Guide</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>

                    <div className="p-6">
                      {/* 13 Materials Grid: 3 Columns of White Cards */}
                      <div className="grid grid-cols-3 gap-3">
                        {MATERIALS.map((mat) => (
                          <Link
                            key={mat.id}
                            to={`/materials/${mat.slug}`}
                            className="p-3 rounded-xl bg-white text-[#123467] hover:bg-slate-50 transition-all duration-200 group shadow-md hover:shadow-xl hover:-translate-y-0.5"
                          >
                            <div className="flex items-center justify-between">
                              <p className="text-xs font-black text-[#123467] group-hover:text-[#D71932] transition-colors">
                                {mat.name}
                              </p>
                              <ChevronRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#D71932] group-hover:translate-x-0.5 transition-transform" />
                            </div>
                            <p className="text-[10px] text-slate-500 truncate mt-1 font-semibold">
                              {mat.grades.slice(0, 2).join(', ')}
                            </p>
                          </Link>
                        ))}
                      </div>

                      <div className="mt-4 pt-3.5 border-t border-white/20 text-xs text-white flex items-center justify-between">
                        <span className="font-medium text-red-100">Includes Austenitic, Martensitic, Duplex, Inconel, Monel & Titanium.</span>
                        <button
                          onClick={onOpenQuoteModal}
                          className="font-black text-white underline hover:text-amber-200 transition-colors"
                        >
                          Inquire Custom Grade →
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* 5. Certificate - Direct instant navigation */}
            <NavLink
              to="/certificate"
              onClick={() => setActiveMega(null)}
              className={({ isActive }) =>
                `h-10 px-4 xl:px-4.5 rounded-xl text-[14px] xl:text-[15px] font-bold tracking-tight inline-flex items-center justify-center transition-all duration-200 select-none ${isActive
                  ? 'bg-[#D71932] text-white shadow-sm font-black'
                  : 'text-[#123467] hover:text-[#D71932] hover:bg-white/90'
                }`
              }
            >
              Certificate
            </NavLink>

            {/* 6. Contact */}
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `h-10 px-4 xl:px-4.5 rounded-xl text-[14px] xl:text-[15px] font-bold tracking-tight inline-flex items-center justify-center transition-all duration-200 select-none ${isActive
                  ? 'bg-[#D71932] text-white shadow-sm font-black'
                  : 'text-[#123467] hover:text-[#D71932] hover:bg-white/90'
                }`
              }
            >
              Contact
            </NavLink>

          </nav>

          {/* Action Button & Mobile Hamburger */}
          <div className="flex items-center gap-3">
            <button
              onClick={onOpenQuoteModal}
              type="button"
              className="hidden md:inline-flex items-center justify-center px-5 h-10 text-sm font-bold text-white bg-[#D71932] hover:bg-[#B51226] active:bg-[#930E1E] rounded-xl shadow-md transition-all duration-200 transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-red-400"
            >
              <span>Get a Quote</span>
              <ChevronRight className="w-4 h-4 ml-1" />
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              className="lg:hidden p-2 rounded-md text-[#123467] hover:text-[#D71932] hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-[#D71932]"
              aria-label="Toggle navigation drawer"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu (Accordion Style) */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-[#DDE5EE] shadow-2xl px-4 pt-3 pb-6 space-y-2 animate-in slide-in-from-top-2 duration-200 max-h-[85vh] overflow-y-auto">
          <nav className="flex flex-col space-y-1">

            {/* Home */}
            <NavLink
              to="/"
              end
              onClick={() => setMobileMenuOpen(false)}
              className={({ isActive }) =>
                `px-4 py-2.5 rounded-xl text-sm font-bold flex items-center justify-between border transition-all ${isActive
                  ? 'bg-[#D71932] text-white border-[#D71932] shadow-sm font-black'
                  : 'bg-red-50/60 text-[#123467] border-red-100/80 hover:bg-red-100/80'
                }`
              }
            >
              <span>Home</span>
              <ChevronRight className="w-4 h-4 opacity-60" />
            </NavLink>

            {/* About */}
            <NavLink
              to="/about"
              onClick={() => setMobileMenuOpen(false)}
              className={({ isActive }) =>
                `px-4 py-2.5 rounded-xl text-sm font-bold flex items-center justify-between border transition-all ${isActive
                  ? 'bg-[#D71932] text-white border-[#D71932] shadow-sm font-black'
                  : 'bg-red-50/60 text-[#123467] border-red-100/80 hover:bg-red-100/80'
                }`
              }
            >
              <span>About Us</span>
              <ChevronRight className="w-4 h-4 opacity-60" />
            </NavLink>

            {/* Products Accordion */}
            <div className="border rounded-xl border-red-100/80 overflow-hidden bg-red-50/30">
              <button
                type="button"
                onClick={() => toggleMobileAccordion('products')}
                className="w-full px-4 py-2.5 text-sm font-bold text-[#123467] flex items-center justify-between bg-red-50/70 hover:bg-red-100/80 transition-colors"
              >
                <span>Products Range (8 Categories)</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${mobileAccordion.products ? 'rotate-180 text-[#D71932]' : ''}`} />
              </button>
              {mobileAccordion.products && (
                <div className="p-3 bg-white space-y-1.5 border-t border-red-100">
                  <Link
                    to="/products"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block text-xs font-extrabold text-[#D71932] px-2 py-1.5 hover:underline"
                  >
                    View All Products Catalogue →
                  </Link>
                  {CATEGORIES.map((cat) => (
                    <Link
                      key={cat.id}
                      to={`/products/${cat.slug}`}
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center justify-between px-2.5 py-1.5 text-xs font-semibold text-slate-700 hover:text-[#D71932] hover:bg-red-50/60 rounded transition-colors"
                    >
                      <span>{cat.title}</span>
                      <ChevronRight className="w-3 h-3 text-slate-400" />
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Materials Accordion */}
            <div className="border rounded-xl border-red-100/80 overflow-hidden bg-red-50/30">
              <button
                type="button"
                onClick={() => toggleMobileAccordion('materials')}
                className="w-full px-4 py-2.5 text-sm font-bold text-[#123467] flex items-center justify-between bg-red-50/70 hover:bg-red-100/80 transition-colors"
              >
                <span>Materials (13 Grades)</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${mobileAccordion.materials ? 'rotate-180 text-[#D71932]' : ''}`} />
              </button>
              {mobileAccordion.materials && (
                <div className="p-3 bg-white grid grid-cols-2 gap-1.5 border-t border-red-100">
                  <Link
                    to="/materials"
                    onClick={() => setMobileMenuOpen(false)}
                    className="col-span-2 block text-xs font-extrabold text-[#D71932] px-2 py-1 hover:underline"
                  >
                    All Materials Metallurgy Guide →
                  </Link>
                  {MATERIALS.map((mat) => (
                    <Link
                      key={mat.id}
                      to={`/materials/${mat.slug}`}
                      onClick={() => setMobileMenuOpen(false)}
                      className="px-2 py-1.5 text-xs text-slate-700 hover:text-[#D71932] hover:bg-red-50/60 rounded truncate transition-colors"
                    >
                      {mat.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* 5. Certificate - Direct Link */}
            <NavLink
              to="/certificate"
              onClick={() => setMobileMenuOpen(false)}
              className={({ isActive }) =>
                `px-4 py-2.5 rounded-xl text-sm font-bold flex items-center justify-between border transition-all ${isActive
                  ? 'bg-[#D71932] text-white border-[#D71932] shadow-sm font-black'
                  : 'bg-red-50/60 text-[#123467] border-red-100/80 hover:bg-red-100/80'
                }`
              }
            >
              <span>Certificate</span>
              <ChevronRight className="w-4 h-4 opacity-60" />
            </NavLink>

            {/* Contact */}
            <NavLink
              to="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className={({ isActive }) =>
                `px-4 py-2.5 rounded-xl text-sm font-bold flex items-center justify-between border transition-all ${isActive
                  ? 'bg-[#D71932] text-white border-[#D71932] shadow-sm font-black'
                  : 'bg-red-50/60 text-[#123467] border-red-100/80 hover:bg-red-100/80'
                }`
              }
            >
              <span>Contact Us</span>
              <ChevronRight className="w-4 h-4 opacity-60" />
            </NavLink>

          </nav>

          {/* Mobile CTA */}
          <div className="pt-4 border-t border-slate-200 space-y-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuoteModal();
              }}
              type="button"
              className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-[#D71932] hover:bg-[#B51226] text-white font-bold rounded-lg shadow-sm"
            >
              <span>Request a Quote</span>
              <ChevronRight className="w-4 h-4" />
            </button>

            {/* Mobile Social Media Icons */}
            <div className="pt-2 flex flex-col items-center gap-1.5">
              <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                Connect With Us
              </span>
              <SocialLinksGroup variant="colored" size="md" />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
