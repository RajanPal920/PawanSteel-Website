import React, { useState } from 'react';
import { Mail, CheckCircle2 } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';
import { CATEGORIES } from '../data/productsData';

// Official WhatsApp vector SVG
function WhatsAppIcon({ className = "w-4 h-4 text-white" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12.031 2C6.496 2 2 6.494 2 12.029c0 1.93.551 3.731 1.508 5.257L2 22l4.872-1.464a9.983 9.983 0 005.159 1.493h.004c5.535 0 10.031-4.495 10.031-10.029C22.066 6.494 17.569 2 12.031 2zm0 18.286h-.003a8.273 8.273 0 01-4.223-1.157l-.303-.18-2.89.868.883-2.818-.198-.314A8.252 8.252 0 013.76 12.03c0-4.561 3.712-8.273 8.274-8.273 4.561 0 8.273 3.712 8.273 8.273 0 4.561-3.712 8.256-8.276 8.256zm4.536-6.19c-.248-.124-1.47-.725-1.698-.808-.228-.083-.394-.124-.56.124-.166.248-.643.808-.788.974-.145.166-.29.186-.539.062-.248-.124-1.047-.386-1.996-1.231-.739-.658-1.238-1.472-1.383-1.72-.145-.248-.016-.383.109-.506.111-.111.248-.29.373-.435.124-.145.166-.248.248-.415.083-.166.041-.31-.02-.435-.062-.124-.56-1.348-.767-1.846-.202-.486-.407-.42-.56-.428l-.477-.008c-.166 0-.435.062-.663.31-.228.248-.871.85-.871 2.073s.892 2.404 1.016 2.57c.124.166 1.755 2.68 4.252 3.757.594.256 1.058.41 1.42.525.597.189 1.141.162 1.57.098.479-.071 1.47-.601 1.678-1.182.207-.58.207-1.077.145-1.182-.062-.104-.228-.166-.477-.29z"/>
    </svg>
  );
}

export default function InquiryForm({ initialProduct = '', initialCategory = '', initialMaterial = '', onSuccess = null }) {
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    productCategory: initialCategory || '',
    productName: initialProduct || '',
    materialGrade: initialMaterial || '',
    sizeDimensions: '',
    quantity: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [submittedStatus, setSubmittedStatus] = useState(null);

  const validate = () => {
    const errs = {};
    if (!formData.fullName.trim()) errs.fullName = 'Full Name is required.';
    if (!formData.email.trim()) {
      errs.email = 'Email address is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please provide a valid email address.';
    }
    if (!formData.phone.trim()) {
      errs.phone = 'Phone number is required.';
    } else if (!/^\+?[0-9\s\-]{8,15}$/.test(formData.phone.trim())) {
      errs.phone = 'Please provide a valid 10-digit contact number.';
    }
    if (!formData.productCategory) errs.productCategory = 'Please select a product category.';
    if (!formData.materialGrade.trim()) errs.materialGrade = 'Please specify material or grade.';
    return errs;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const buildEmailBody = () => {
    return `PAWAN STEEL ALLOYS - FORMAL MATERIAL INQUIRY
--------------------------------------------------
Customer Name: ${formData.fullName}
Company Name: ${formData.companyName || 'Not Specified'}
Email: ${formData.email}
Phone / Mobile: ${formData.phone}

INQUIRY DETAILS:
Product Category: ${formData.productCategory}
Product Name / Item: ${formData.productName || 'General Category Inquiry'}
Material / Grade Required: ${formData.materialGrade}
Required Size / Dimensions: ${formData.sizeDimensions || 'To be discussed'}
Quantity / Weight: ${formData.quantity || 'To be confirmed'}

Additional Message:
${formData.message || 'Please provide quotation with current availability, delivery lead time and test certificates.'}

--------------------------------------------------
Inquiry sent via Pawan Steel Alloys Web Portal.`;
  };

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const subject = encodeURIComponent(`Material Quotation Request: ${formData.productCategory} - ${formData.materialGrade} [${formData.companyName || formData.fullName}]`);
    const body = encodeURIComponent(buildEmailBody());
    const mailtoUrl = `mailto:${COMPANY_INFO.email}?subject=${subject}&body=${body}`;

    setSubmittedStatus('email_opened');
    
    // Open default mail client
    window.location.href = mailtoUrl;

    if (onSuccess) {
      setTimeout(() => onSuccess(), 2000);
    }
  };

  const handleWhatsAppSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const waText = `*PAWAN STEEL ALLOYS - MATERIAL INQUIRY*
• *Name:* ${formData.fullName}
• *Company:* ${formData.companyName || 'N/A'}
• *Phone:* ${formData.phone}
• *Email:* ${formData.email}
• *Product:* ${formData.productCategory} ${formData.productName ? `(${formData.productName})` : ''}
• *Material / Grade:* ${formData.materialGrade}
• *Size / Dimensions:* ${formData.sizeDimensions || 'To discuss'}
• *Quantity:* ${formData.quantity || 'To discuss'}
• *Note:* ${formData.message || 'Please quote price and availability.'}`;

    const waUrl = `https://wa.me/919833416144?text=${encodeURIComponent(waText)}`;
    
    setSubmittedStatus('whatsapp_opened');
    window.open(waUrl, '_blank');

    if (onSuccess) {
      setTimeout(() => onSuccess(), 2000);
    }
  };

  return (
    <div className="w-full">
      {submittedStatus && (
        <div className="mb-6 p-4 rounded-lg bg-blue-50 border border-blue-200 text-blue-900 text-sm">
          <div className="flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold">
                {submittedStatus === 'email_opened' 
                  ? 'Email Client Triggered!' 
                  : 'WhatsApp Chat Initiated!'}
              </p>
              <p className="text-xs text-blue-700 mt-1">
                Your inquiry has been compiled with all required specifications. Please verify and hit send in your email client or WhatsApp application. Our sales team replies promptly.
              </p>
            </div>
          </div>
        </div>
      )}

      <form onSubmit={handleEmailSubmit} className="space-y-4">
        {/* Name & Company */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
              Full Name <span className="text-[#D71932]">*</span>
            </label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="e.g. Ramesh Patel"
              className={`w-full px-3.5 py-2.5 bg-white border rounded-lg text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#D71932] transition ${
                errors.fullName ? 'border-red-500 bg-red-50/30' : 'border-slate-300'
              }`}
            />
            {errors.fullName && <p className="text-xs text-red-600 mt-1">{errors.fullName}</p>}
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
              Company Name
            </label>
            <input
              type="text"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              placeholder="e.g. Reliance / L&T / Fabricators Ltd"
              className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded-lg text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#D71932] transition"
            />
          </div>
        </div>

        {/* Email & Phone */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
              Email Address <span className="text-[#D71932]">*</span>
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="e.g. ramesh@company.com"
              className={`w-full px-3.5 py-2.5 bg-white border rounded-lg text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#D71932] transition ${
                errors.email ? 'border-red-500 bg-red-50/30' : 'border-slate-300'
              }`}
            />
            {errors.email && <p className="text-xs text-red-600 mt-1">{errors.email}</p>}
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
              Phone / Mobile <span className="text-[#D71932]">*</span>
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="e.g. 9833416144"
              className={`w-full px-3.5 py-2.5 bg-white border rounded-lg text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#D71932] transition ${
                errors.phone ? 'border-red-500 bg-red-50/30' : 'border-slate-300'
              }`}
            />
            {errors.phone && <p className="text-xs text-red-600 mt-1">{errors.phone}</p>}
          </div>
        </div>

        {/* Product Category & Material/Grade */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
              Product Category <span className="text-[#D71932]">*</span>
            </label>
            <select
              name="productCategory"
              value={formData.productCategory}
              onChange={handleChange}
              className={`w-full px-3.5 py-2.5 bg-white border rounded-lg text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#D71932] transition ${
                errors.productCategory ? 'border-red-500 bg-red-50/30' : 'border-slate-300'
              }`}
            >
              <option value="">-- Select Product Category --</option>
              {CATEGORIES.map((cat) => (
                <option key={cat.id} value={cat.title}>
                  {cat.title}
                </option>
              ))}
              <option value="Other Metal Requirement">Other Metal Requirement</option>
            </select>
            {errors.productCategory && <p className="text-xs text-red-600 mt-1">{errors.productCategory}</p>}
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
              Material / Grade <span className="text-[#D71932]">*</span>
            </label>
            <input
              type="text"
              name="materialGrade"
              value={formData.materialGrade}
              onChange={handleChange}
              placeholder="e.g. SS 316L, Inconel 625, Monel 400"
              className={`w-full px-3.5 py-2.5 bg-white border rounded-lg text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#D71932] transition ${
                errors.materialGrade ? 'border-red-500 bg-red-50/30' : 'border-slate-300'
              }`}
            />
            {errors.materialGrade && <p className="text-xs text-red-600 mt-1">{errors.materialGrade}</p>}
          </div>
        </div>

        {/* Size / Dimensions & Quantity */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
              Required Size / Dimensions / Schedule
            </label>
            <input
              type="text"
              name="sizeDimensions"
              value={formData.sizeDimensions}
              onChange={handleChange}
              placeholder="e.g. 2 inch NB SCH 40, or 25mm Dia Bar"
              className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded-lg text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#D71932] transition"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
              Quantity / Weight / Pieces
            </label>
            <input
              type="text"
              name="quantity"
              value={formData.quantity}
              onChange={handleChange}
              placeholder="e.g. 500 Meters, 250 Pcs, or 2.5 Tons"
              className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded-lg text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#D71932] transition"
            />
          </div>
        </div>

        {/* Message */}
        <div>
          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
            Specific Requirements / Notes
          </label>
          <textarea
            name="message"
            rows={3}
            value={formData.message}
            onChange={handleChange}
            placeholder="Specify test certificates (e.g., MTR / EN 10204 3.1), third-party inspection, cut lengths, or delivery timelines needed."
            className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded-lg text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#D71932] transition"
          />
        </div>

        {/* Submission Actions: Dual Options */}
        <div className="pt-2 flex flex-col sm:flex-row gap-3">
          <button
            type="submit"
            className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#D71932] hover:bg-[#B51226] active:bg-[#930E1E] text-white font-bold text-sm rounded-lg shadow-md transition-all duration-200 transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-red-400"
          >
            <Mail className="w-4 h-4" />
            <span>Send Email Inquiry</span>
          </button>

          <button
            type="button"
            onClick={handleWhatsAppSubmit}
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#25D366] hover:bg-[#20BD5A] text-white font-bold text-sm rounded-lg shadow-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-emerald-400"
          >
            <WhatsAppIcon className="w-4 h-4" />
            <span>WhatsApp Fast Quote</span>
          </button>
        </div>

        <p className="text-[11px] text-slate-500 text-center pt-1">
          Inquiries are sent directly to <strong className="text-slate-700">{COMPANY_INFO.email}</strong> and WhatsApp <strong className="text-slate-700">{COMPANY_INFO.whatsapp}</strong>. Please confirm sending in your email/messaging app.
        </p>
      </form>
    </div>
  );
}
