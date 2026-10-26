import React from 'react';
import { Phone } from 'lucide-react';

// Official WhatsApp vector SVG
function WhatsAppVector({ className = "w-6 h-6 text-white" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12.031 2C6.496 2 2 6.494 2 12.029c0 1.93.551 3.731 1.508 5.257L2 22l4.872-1.464a9.983 9.983 0 005.159 1.493h.004c5.535 0 10.031-4.495 10.031-10.029C22.066 6.494 17.569 2 12.031 2zm0 18.286h-.003a8.273 8.273 0 01-4.223-1.157l-.303-.18-2.89.868.883-2.818-.198-.314A8.252 8.252 0 013.76 12.03c0-4.561 3.712-8.273 8.274-8.273 4.561 0 8.273 3.712 8.273 8.273 0 4.561-3.712 8.256-8.276 8.256zm4.536-6.19c-.248-.124-1.47-.725-1.698-.808-.228-.083-.394-.124-.56.124-.166.248-.643.808-.788.974-.145.166-.29.186-.539.062-.248-.124-1.047-.386-1.996-1.231-.739-.658-1.238-1.472-1.383-1.72-.145-.248-.016-.383.109-.506.111-.111.248-.29.373-.435.124-.145.166-.248.248-.415.083-.166.041-.31-.02-.435-.062-.124-.56-1.348-.767-1.846-.202-.486-.407-.42-.56-.428l-.477-.008c-.166 0-.435.062-.663.31-.228.248-.871.85-.871 2.073s.892 2.404 1.016 2.57c.124.166 1.755 2.68 4.252 3.757.594.256 1.058.41 1.42.525.597.189 1.141.162 1.57.098.479-.071 1.47-.601 1.678-1.182.207-.58.207-1.077.145-1.182-.062-.104-.228-.166-.477-.29z" />
    </svg>
  );
}

export default function FloatingActions() {
  const whatsappUrl = "https://wa.me/919833416144?text=" + encodeURIComponent("Hello Pawan Steel Alloys, I would like to enquire about your industrial metal products.");

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-3 select-none">

      {/* 1. Floating WhatsApp Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#25D366] hover:bg-[#20BD5A] text-white shadow-float transition-all duration-300 transform hover:scale-110 active:scale-95 focus:outline-none focus:ring-4 focus:ring-emerald-300"
        aria-label="Chat with Pawan Steel Alloys on WhatsApp"
      >
        <WhatsAppVector className="w-6 h-6 sm:w-7 sm:h-7 text-white" />

        {/* Tooltip on hover */}
        <span className="absolute right-16 top-1/2 -translate-y-1/2 px-3 py-1.5 bg-slate-900 text-white text-xs font-bold rounded-lg shadow-md whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-200">
          WhatsApp Instant Quote
        </span>
      </a>

      {/* 2. Floating Call Button */}
      <a
        href="tel:+919950789923"
        className="group relative flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#123467] hover:bg-[#1B478A] text-white shadow-float transition-all duration-300 transform hover:scale-110 active:scale-95 border-2 border-white focus:outline-none focus:ring-4 focus:ring-blue-300"
        aria-label="Call Pawan Steel Alloys on +91 99507 89923"
      >
        <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-white" />

        {/* Tooltip on hover */}
        <span className="absolute right-16 top-1/2 -translate-y-1/2 px-3 py-1.5 bg-slate-900 text-white text-xs font-bold rounded-lg shadow-md whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-200">
          Call +91 99507 89923
        </span>
      </a>

    </div>
  );
}
