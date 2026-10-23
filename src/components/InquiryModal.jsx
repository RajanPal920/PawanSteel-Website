import React, { useEffect } from 'react';
import { X, ShieldCheck } from 'lucide-react';
import InquiryForm from './InquiryForm';
import { COMPANY_INFO } from '../data/companyData';

export default function InquiryModal({ isOpen, onClose, initialProduct = '', initialCategory = '', initialMaterial = '' }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-slate-900/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-2xl bg-white rounded-xl shadow-2xl border border-slate-200 overflow-hidden my-8 max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="bg-[#123467] text-white px-6 py-4 flex items-center justify-between border-b-2 border-[#D71932]">
          <div className="flex items-center gap-2.5">
            <ShieldCheck className="w-5 h-5 text-[#D71932]" />
            <div>
              <h2 className="text-base sm:text-lg font-bold">Request a Formal Material Quote</h2>
              <p className="text-xs text-slate-300">Pawan Steel Alloys • Stockist & Supplier Mumbai</p>
            </div>
          </div>
          <button
            onClick={onClose}
            type="button"
            className="p-1.5 rounded-md text-slate-300 hover:text-white hover:bg-white/10 transition"
            aria-label="Close quote modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content Form */}
        <div className="p-6 overflow-y-auto">
          <InquiryForm
            initialProduct={initialProduct}
            initialCategory={initialCategory}
            initialMaterial={initialMaterial}
            onSuccess={onClose}
          />
        </div>
      </div>
    </div>
  );
}

