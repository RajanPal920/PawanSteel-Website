import React from 'react';
import { Link } from 'react-router-dom';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ShieldCheck,
  ChevronRight,
  ExternalLink,
  Share2,
  User,
  Globe,
  Building2,
  PhoneCall
} from 'lucide-react';
import WhatsAppIcon from '../components/WhatsAppIcon';
import InquiryForm from '../components/InquiryForm';
import SocialLinksGroup from '../components/SocialIcons';
import { COMPANY_INFO } from '../data/companyData';

export default function ContactPage() {
  return (
    <div className="w-full bg-[#F3F7FB] min-h-screen pb-16">
      {/* Header Banner */}
      <section className="bg-[#123467] text-white py-14 relative overflow-hidden border-b-4 border-[#D71932]">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A1F3D] via-[#123467] to-[#1B478A] opacity-90" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-red-600/90 text-white text-xs font-bold uppercase tracking-wider rounded-sm backdrop-blur-sm">
              <Mail className="w-3.5 h-3.5" />
              <span>Direct Commercial Desk</span>
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white">
              Contact Pawan Steel Alloys
            </h1>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Connect directly with our commercial desk in Gulalwadi, Mumbai for instantaneous mill price quotations, custom dimension schedules, availability checks, and order dispatches.
            </p>
          </div>
        </div>
      </section>

      {/* Breadcrumb Bar */}
      <div className="bg-white border-b border-slate-200 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-2 text-xs text-slate-500">
          <Link to="/" className="hover:text-[#D71932] transition-colors">Home</Link>
          <ChevronRight className="w-3 h-3 text-slate-400" />
          <span className="text-slate-800 font-semibold">Contact Us</span>
        </div>
      </div>

      {/* Main Content with Balanced Height Alignment */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 md:pt-10">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">

          {/* Left Column: Contact Cards strictly in requested order */}
          {/* Order: 1. Address -> 2. Contact Person -> 3. Domestic Sales -> 4. International Sales -> 5. Landline -> 6. Email */}
          <div className="lg:col-span-5 space-y-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#D71932] bg-red-50 border border-red-100 px-3 py-1 rounded-md">
                Reach Out Directly
              </span>
              <h2 className="text-2xl font-black text-[#123467] mt-2.5">
                Business Contact Channels
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                Connect directly with our designated metals team for immediate quotation turnaround and order execution.
              </p>
            </div>

            {/* 1. FIRST: Registered Office & Stocking Address */}
            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-xl bg-red-50 text-[#D71932] flex-shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <span className="text-[10px] font-bold text-[#D71932] uppercase tracking-wider block">
                    1. Registered Office & Stocking Hub
                  </span>
                  <h3 className="text-sm font-bold text-[#123467] mt-0.5 leading-snug">
                    PAWAN STEEL ALLOYS
                  </h3>
                  <p className="text-xs text-slate-700 font-medium leading-relaxed mt-1">
                    {COMPANY_INFO.address.full}
                  </p>
                  <div className="mt-2.5 pt-2 border-t border-slate-100 flex flex-wrap items-center justify-between gap-2 text-xs">
                    <span className="text-slate-500 flex items-center gap-1.5 text-[11px]">
                      <Clock className="w-3.5 h-3.5 text-slate-400" />
                      <span>{COMPANY_INFO.workingHours}</span>
                    </span>
                    <div className="flex items-center gap-2.5">
                      <a
                        href="#location-map"
                        onClick={(e) => {
                          e.preventDefault();
                          document.getElementById('location-map')?.scrollIntoView({ behavior: 'smooth' });
                        }}
                        className="inline-flex items-center gap-1 font-bold text-slate-600 hover:text-[#D71932] text-[11px] transition-colors"
                        title="Scroll down to map on page"
                      >
                        <MapPin className="w-3 h-3 text-[#D71932]" />
                        <span>View on Page</span>
                      </a>
                      <span className="text-slate-300">•</span>
                      <a
                        href={COMPANY_INFO.address.googleMapsUrl || "https://maps.google.com/?cid=16131483244783047182"}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 font-bold text-[#D71932] hover:underline text-[11px]"
                        title="Open PAWAN STEEL ALLOYS on Google Maps"
                      >
                        <span>Google Maps</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 2. SECOND: Contact Person (Mr. Babulal Dewasi) */}
            <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3.5">
                <div className="p-2.5 rounded-xl bg-blue-50 text-[#123467] flex-shrink-0">
                  <User className="w-5 h-5 text-[#123467]" />
                </div>
                <div className="flex-1 min-w-0">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                    2. Primary Contact Person
                  </span>
                  <h3 className="text-base sm:text-lg font-black text-[#123467] mt-0.5">
                    {COMPANY_INFO.contactPerson || 'Mr. Babulal Dewasi'}
                  </h3>
                  <p className="text-xs text-slate-600 font-medium mt-0.5">
                    Commercial Metals Head / Proprietor
                  </p>
                </div>
              </div>
            </div>

            {/* 3, 4, 5, 6: Direct Communications 2x2 Grid (Balanced Layout) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">

              {/* 3. THIRD: Domestic Sales (+91 99507 89923) */}
              <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm hover:border-[#D71932] transition-colors flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                      3. Domestic Sales
                    </span>
                    <span className="text-[9px] font-bold bg-emerald-50 text-emerald-700 px-1.5 py-0.5 rounded">
                      Pan-India
                    </span>
                  </div>
                  <a
                    href={`tel:${COMPANY_INFO.domesticSalesRaw || '+919950789923'}`}
                    className="text-sm sm:text-base font-black text-[#123467] hover:text-[#D71932] transition-colors block"
                  >
                    {COMPANY_INFO.domesticSales || '+91 99507 89923'}
                  </a>
                  <p className="text-[11px] text-slate-500 mt-1">Direct pan-India mobile line</p>
                </div>
                <div className="mt-2.5 pt-2 border-t border-slate-100">
                  <a
                    href={`tel:${COMPANY_INFO.domesticSalesRaw || '+919950789923'}`}
                    className="inline-flex items-center gap-1 text-[11px] font-bold text-[#123467] hover:text-[#D71932]"
                  >
                    <Phone className="w-3 h-3 text-[#D71932]" />
                    <span>Call Domestic</span>
                  </a>
                </div>
              </div>

              {/* 4. FOURTH: International Sales (+91 98334 16144) */}
              <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm hover:border-[#D71932] transition-colors flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                      4. Exports & Intl
                    </span>
                    <span className="text-[9px] font-bold bg-blue-50 text-blue-700 px-1.5 py-0.5 rounded">
                      Global
                    </span>
                  </div>
                  <a
                    href={`tel:${COMPANY_INFO.internationalSalesRaw || '+919833416144'}`}
                    className="text-sm sm:text-base font-black text-[#123467] hover:text-[#D71932] transition-colors block"
                  >
                    {COMPANY_INFO.internationalSales || '+91 98334 16144'}
                  </a>
                  <p className="text-[11px] text-slate-500 mt-1">Export supplies & inquiries</p>
                </div>
                <div className="mt-2.5 pt-2 border-t border-slate-100 flex items-center justify-between gap-1 text-[11px]">
                  <a
                    href={`tel:${COMPANY_INFO.internationalSalesRaw || '+919833416144'}`}
                    className="inline-flex items-center gap-1 font-bold text-[#123467] hover:text-[#D71932]"
                  >
                    <Globe className="w-3 h-3 text-blue-500" />
                    <span>Call Intl</span>
                  </a>
                  <a
                    href={COMPANY_INFO.whatsappLink || 'https://wa.me/919833416144'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 font-bold text-emerald-600 hover:text-emerald-700"
                  >
                    <WhatsAppIcon className="w-3 h-3 text-emerald-600" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>

              {/* 5. FIFTH: Landline Office in Indian Format (+91 (022) 6639 4854) */}
              <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm hover:border-[#D71932] transition-colors flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                      5. Office Landline
                    </span>
                    <span className="text-[9px] font-bold bg-slate-100 text-slate-700 px-1.5 py-0.5 rounded">
                      STD 022
                    </span>
                  </div>
                  <a
                    href={`tel:${COMPANY_INFO.phoneRaw || '+912266394854'}`}
                    className="text-sm sm:text-base font-black text-[#123467] hover:text-[#D71932] transition-colors block"
                  >
                    {COMPANY_INFO.phone || '+91 (022) 6639 4854'}
                  </a>
                  <p className="text-[11px] text-slate-500 mt-1">Mumbai billing & logistics desk</p>
                </div>
                <div className="mt-2.5 pt-2 border-t border-slate-100">
                  <a
                    href={`tel:${COMPANY_INFO.phoneRaw || '+912266394854'}`}
                    className="inline-flex items-center gap-1 text-[11px] font-bold text-[#123467] hover:text-[#D71932]"
                  >
                    <PhoneCall className="w-3 h-3 text-[#D71932]" />
                    <span>Call Office</span>
                  </a>
                </div>
              </div>

              {/* 6. SIXTH: Official Email Address */}
              <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm hover:border-[#D71932] transition-colors flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                      6. Official Email
                    </span>
                    <span className="text-[9px] font-bold bg-blue-50 text-blue-700 px-1.5 py-0.5 rounded">
                      24/7 RFQ
                    </span>
                  </div>
                  <a
                    href={`mailto:${COMPANY_INFO.email}`}
                    className="text-xs sm:text-[13px] font-black text-[#123467] hover:text-[#D71932] transition-colors block truncate"
                    title={COMPANY_INFO.email}
                  >
                    {COMPANY_INFO.email}
                  </a>
                  <p className="text-[11px] text-slate-500 mt-1 truncate">Purchase orders & test specs</p>
                </div>
                <div className="mt-2.5 pt-2 border-t border-slate-100">
                  <a
                    href={`mailto:${COMPANY_INFO.email}`}
                    className="inline-flex items-center gap-1 text-[11px] font-bold text-[#123467] hover:text-[#D71932]"
                  >
                    <Mail className="w-3 h-3 text-blue-600" />
                    <span>Send Email</span>
                  </a>
                </div>
              </div>

            </div>

            {/* 7. Official Social Media Channels */}
            <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm flex items-center justify-between gap-3">
              <div>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                  Official Social Handles
                </span>
                <p className="text-xs text-slate-600 font-medium">Follow for stock dispatches & mill reports</p>
              </div>
              <SocialLinksGroup variant="colored" size="md" />
            </div>

          </div>

          {/* Right Column: Clean, Perfectly Sized Material Inquiry Form */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-premium h-fit">
            <div className="mb-6 pb-4 border-b border-slate-100">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-[#D71932]/10 text-[#D71932] text-xs font-bold uppercase tracking-wider rounded">
                <span>Fast Commercial Quotation</span>
              </span>
              <h2 className="text-xl sm:text-2xl font-black text-[#123467] mt-2">
                Request Immediate Price Quotation
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 mt-1 leading-relaxed">
                Enter your required grade, dimensions, and quantity below. Submitting opens Gmail directly addressed to our sales team.
              </p>
            </div>

            {/* Simplified Clean Inquiry Form */}
            <InquiryForm />

            {/* Trust Assurance Strip at bottom of form */}
            <div className="mt-6 pt-4 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-slate-600">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span className="font-semibold text-slate-700">100% Verified Mill TC</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-blue-600 flex-shrink-0" />
                <span className="font-semibold text-slate-700">Same-Day Quote</span>
              </div>
              <div className="flex items-center gap-2">
                <Building2 className="w-4 h-4 text-[#D71932] flex-shrink-0" />
                <span className="font-semibold text-slate-700">Mumbai Ready Stock</span>
              </div>
            </div>
          </div>

        </div>

        {/* Location & Map Overview Card */}
        <div id="location-map" className="mt-10 md:mt-12 bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-8 scroll-mt-24">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
            <div>
              <h3 className="text-lg font-bold text-[#123467] flex items-center gap-2">
                <MapPin className="w-5 h-5 text-[#D71932]" />
                <span>Prime Metal Market Location in Gulal Wadi, Girgaon, Mumbai</span>
              </h3>
              <p className="text-xs text-slate-600 mt-1 font-medium">
                {COMPANY_INFO.address.full}
              </p>
            </div>

            <a
              href={COMPANY_INFO.address.googleMapsUrl || "https://maps.google.com/?cid=16131483244783047182"}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-slate-100 hover:bg-slate-200 text-[#123467] text-xs font-bold rounded-lg transition self-start md:self-auto"
            >
              <span>Open in Google Maps</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Interactive Google Map Embed */}
          <div className="w-full h-80 sm:h-96 rounded-xl overflow-hidden border border-slate-200 bg-slate-100 relative shadow-inner">
            <iframe
              title="Pawan Steel Alloys Location Map"
              src={COMPANY_INFO.address.googleMapsEmbed || "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3414.767905261212!2d72.82811319999999!3d18.956100400000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7cfa4d022189d%3A0xdfde8a8af975920e!2sPAWAN%20STEEL%20ALLOYS!5e1!3m2!1sen!2sin!4v1793083048299!5m2!1sen!2sin"}
              className="w-full h-full border-0"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
            />
          </div>
        </div>

      </div>
    </div>
  );
}
