import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Phone, 
  Mail, 
  MapPin, 
  MessageCircle, 
  Clock, 
  ShieldCheck, 
  ChevronRight,
  ExternalLink,
  Send,
  Share2
} from 'lucide-react';
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
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white">
              Contact Pawan Steel Alloys
            </h1>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Connect directly with our sales desk in Mumbai for price quotations, material schedules, availability inquiries, and order placements.
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

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Contact Cards & Office Details */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#D71932] bg-red-50 border border-red-100 px-3 py-1 rounded-md">
                Reach Out Directly
              </span>
              <h2 className="text-2xl font-extrabold text-[#123467] mt-3">
                Business Contact Channels
              </h2>
              <p className="text-sm text-slate-600 mt-1 leading-relaxed">
                Whether requesting a bulk contract quote or an urgent cut-piece delivery, our team is at your disposal.
              </p>
            </div>

            {/* Telephone Office Card */}
            <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex items-start gap-4">
              <div className="p-3 rounded-lg bg-red-50 text-[#D71932] flex-shrink-0">
                <Phone className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <p className="text-xs font-semibold text-slate-400 uppercase">Office Telephone</p>
                <a
                  href="tel:02266324854"
                  className="text-lg font-bold text-[#123467] hover:text-[#D71932] transition-colors block mt-0.5"
                >
                  {COMPANY_INFO.phone}
                </a>
                <p className="text-xs text-slate-500 mt-1">Direct line for sales and billing inquiries.</p>
              </div>
            </div>

            {/* Mobile & WhatsApp Card */}
            <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex items-start gap-4">
              <div className="p-3 rounded-lg bg-emerald-50 text-emerald-600 flex-shrink-0">
                <MessageCircle className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <p className="text-xs font-semibold text-slate-400 uppercase">Mobile & WhatsApp</p>
                <a
                  href="tel:9833416144"
                  className="text-lg font-bold text-[#123467] hover:text-emerald-600 transition-colors block mt-0.5"
                >
                  +91 {COMPANY_INFO.mobile}
                </a>
                <div className="mt-2">
                  <a
                    href="https://wa.me/919833416144"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded shadow-sm transition"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>Instant WhatsApp Chat</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Official Email Card */}
            <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex items-start gap-4">
              <div className="p-3 rounded-lg bg-blue-50 text-blue-600 flex-shrink-0">
                <Mail className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <p className="text-xs font-semibold text-slate-400 uppercase">Official Email Address</p>
                <a
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="text-sm sm:text-base font-bold text-[#123467] hover:text-[#D71932] transition-colors block mt-0.5 break-all"
                >
                  {COMPANY_INFO.email}
                </a>
                <p className="text-xs text-slate-500 mt-1">Send purchase orders, RFQs, and material test requirements.</p>
              </div>
            </div>

            {/* Registered Address */}
            <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex items-start gap-4">
              <div className="p-3 rounded-lg bg-slate-100 text-[#123467] flex-shrink-0">
                <MapPin className="w-6 h-6 text-[#D71932]" />
              </div>
              <div className="flex-1">
                <p className="text-xs font-semibold text-slate-400 uppercase">Business & Stocking Address</p>
                <p className="text-sm text-slate-700 font-medium leading-relaxed mt-1">
                  {COMPANY_INFO.address.full}
                </p>
                <p className="text-xs text-slate-400 mt-2 flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5" />
                  <span>{COMPANY_INFO.workingHours}</span>
                </p>
              </div>
            </div>

            {/* Official Social Media Channels Card */}
            <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex items-start gap-4">
              <div className="p-3 rounded-lg bg-blue-50 text-blue-600 flex-shrink-0">
                <Share2 className="w-6 h-6 text-[#123467]" />
              </div>
              <div className="flex-1">
                <p className="text-xs font-semibold text-slate-400 uppercase">Connect On Social Media</p>
                <p className="text-xs text-slate-500 mt-0.5 mb-3">Follow our official channels for real-time stock updates, mill test dispatches, and metal industry insights.</p>
                <SocialLinksGroup variant="colored" size="md" />
              </div>
            </div>

          </div>

          {/* Right Column: Working Material Inquiry Form */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-premium">
            <div className="mb-6 pb-4 border-b border-slate-100">
              <span className="text-xs font-bold uppercase tracking-wider text-[#D71932]">
                Fast Commercial Quotation
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-[#123467] mt-1">
                Request a Detailed Quotation
              </h2>
              <p className="text-xs text-slate-500 mt-1">
                Enter your required product type, grade, schedules, and dimensions. Submitting will prepare your structured email directly to our sales inbox.
              </p>
            </div>

            <InquiryForm />
          </div>

        </div>

        {/* Location & Map Overview Card */}
        <div className="mt-12 bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
            <div>
              <h3 className="text-lg font-bold text-[#123467] flex items-center gap-2">
                <MapPin className="w-5 h-5 text-[#D71932]" />
                <span>Strategic Location in Mumbai Metal Market</span>
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Situated in Gulalwadi, Girgaon — India's premier trading zone for industrial raw materials and ferrous alloys.
              </p>
            </div>

            <a
              href="https://maps.google.com/?q=Gulalwadi+Girgaon+Mumbai+400004"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-slate-100 hover:bg-slate-200 text-[#123467] text-xs font-bold rounded-md transition"
            >
              <span>Open in Google Maps</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Interactive Styled Map Embed or Visual Card */}
          <div className="w-full h-72 sm:h-80 rounded-xl overflow-hidden border border-slate-200 bg-slate-100 relative">
            <iframe
              title="Pawan Steel Alloys Location Map"
              src="https://maps.google.com/maps?q=Gulalwadi,Girgaon,Mumbai,Maharashtra+400004&t=&z=15&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full border-0"
              loading="lazy"
            />
          </div>
        </div>

      </div>
    </div>
  );
}

