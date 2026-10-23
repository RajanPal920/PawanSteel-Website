import React from 'react';
import { 
  X, 
  ShieldCheck, 
  FileText, 
  ExternalLink, 
  CheckCircle2, 
  Layers, 
  ArrowRight,
  Flame,
  Award
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { getGradeDetails } from '../data/gradesData';

export default function GradeSpecModal({ 
  isOpen, 
  onClose, 
  gradeInput, 
  currentProduct = null,
  onOpenQuoteModal 
}) {
  if (!isOpen || !gradeInput) return null;

  const grade = typeof gradeInput === 'object' && gradeInput.chemicalComposition 
    ? gradeInput 
    : getGradeDetails(gradeInput);

  if (!grade) return null;

  const handleRequestQuote = () => {
    onClose();
    if (onOpenQuoteModal) {
      onOpenQuoteModal(currentProduct?.name || '', currentProduct?.categoryName || '', grade.grade);
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-3 sm:p-5 animate-in fade-in duration-200">
      <div 
        className="relative bg-white rounded-2xl shadow-2xl border border-slate-200 w-full max-w-4xl max-h-[90vh] flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="bg-[#123467] text-white p-5 sm:p-6 flex items-start justify-between border-b-4 border-[#D71932]">
          <div className="space-y-1.5 pr-6">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-[11px] font-bold uppercase tracking-wider bg-red-600 px-2.5 py-0.5 rounded text-white shadow-sm">
                {grade.materialName} Grade Spec
              </span>
              {grade.uns && (
                <span className="text-[11px] font-mono font-semibold bg-white/15 px-2 py-0.5 rounded text-slate-200">
                  {grade.uns}
                </span>
              )}
              {grade.din && (
                <span className="text-[11px] font-mono font-semibold bg-white/15 px-2 py-0.5 rounded text-slate-200">
                  DIN {grade.din}
                </span>
              )}
            </div>
            <h2 className="text-xl sm:text-2xl font-black tracking-tight text-white mt-1">
              {grade.grade} Technical Data Sheet
            </h2>
            <p className="text-xs text-slate-300">
              Verified chemical composition, mechanical limits, and ASME/ASTM manufacturing specifications.
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Close specification dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body - Scrollable */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-6 flex-1 text-slate-800">
          
          {/* Overview Callout */}
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-700 leading-relaxed">
            <div className="flex items-center gap-1.5 font-bold text-[#123467] mb-1">
              <FileText className="w-4 h-4 text-[#D71932]" />
              <span>Metallurgical Overview</span>
            </div>
            <p>{grade.overview}</p>
          </div>

          {/* Chemical & Mechanical Grids */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            
            {/* 1. Chemical Composition */}
            <div className="border border-slate-200 rounded-xl overflow-hidden shadow-xs">
              <div className="bg-slate-100 px-4 py-2.5 border-b border-slate-200 flex items-center justify-between">
                <span className="text-xs font-bold text-[#123467] uppercase tracking-wider flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-[#D71932]" />
                  Chemical Composition (% Weight)
                </span>
                <span className="text-[10px] text-slate-500 font-semibold">Standard Spec</span>
              </div>
              <div className="divide-y divide-slate-100 bg-white">
                {grade.chemicalComposition.map((item, idx) => (
                  <div key={idx} className="px-4 py-2 flex items-center justify-between text-xs hover:bg-slate-50">
                    <span className="font-semibold text-slate-700">{item.element}</span>
                    <span className="font-mono font-bold text-[#123467]">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 2. Mechanical Properties */}
            <div className="border border-slate-200 rounded-xl overflow-hidden shadow-xs">
              <div className="bg-slate-100 px-4 py-2.5 border-b border-slate-200 flex items-center justify-between">
                <span className="text-xs font-bold text-[#123467] uppercase tracking-wider flex items-center gap-1.5">
                  <Award className="w-4 h-4 text-[#D71932]" />
                  Mechanical Properties (At Room Temp)
                </span>
                <span className="text-[10px] text-slate-500 font-semibold">Min Specified</span>
              </div>
              <div className="divide-y divide-slate-100 bg-white">
                {grade.mechanicalProperties.map((item, idx) => (
                  <div key={idx} className="px-4 py-2.5 flex items-center justify-between text-xs hover:bg-slate-50">
                    <span className="font-semibold text-slate-700">{item.property}</span>
                    <span className="font-mono font-bold text-[#D71932]">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* ASTM Specifications by Product Form */}
          {grade.astmSpecs && (
            <div className="border border-slate-200 rounded-xl overflow-hidden shadow-xs">
              <div className="bg-slate-100 px-4 py-2.5 border-b border-slate-200">
                <span className="text-xs font-bold text-[#123467] uppercase tracking-wider flex items-center gap-1.5">
                  <Layers className="w-4 h-4 text-[#D71932]" />
                  Applicable ASTM / ASME Specifications for {grade.grade}
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-slate-100 bg-white">
                {Object.entries(grade.astmSpecs).map(([form, spec], idx) => (
                  <div key={idx} className="px-4 py-2.5 flex items-center justify-between text-xs hover:bg-slate-50 border-b border-slate-100">
                    <span className="font-medium text-slate-600">{form}:</span>
                    <span className="font-mono font-bold text-[#123467] bg-slate-100 px-2 py-0.5 rounded border border-slate-200">
                      {spec}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Key Attributes & Applications */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#123467] flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                Key Material Highlights
              </h4>
              <ul className="text-xs text-slate-600 space-y-1.5">
                {grade.keyFeatures.map((feat, i) => (
                  <li key={i} className="flex items-start gap-1.5">
                    <span className="text-emerald-500 font-bold">•</span>
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#123467] flex items-center gap-1.5">
                <Flame className="w-4 h-4 text-[#D71932]" />
                Primary Industrial Applications
              </h4>
              <ul className="text-xs text-slate-600 space-y-1.5">
                {grade.applications.map((app, i) => (
                  <li key={i} className="flex items-start gap-1.5">
                    <span className="text-[#D71932] font-bold">•</span>
                    <span>{app}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>

        {/* Modal Footer with Actions */}
        <div className="p-4 sm:p-5 bg-slate-50 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3">
          <div className="text-xs text-slate-500">
            Supplied with EN 10204 3.1 Mill Test Certificates (MTC) & Third-Party Inspection.
          </div>
          <div className="flex items-center gap-2.5">
            <button
              onClick={onClose}
              type="button"
              className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-700 bg-white border border-slate-300 hover:bg-slate-100 transition"
            >
              Close
            </button>
            <button
              onClick={handleRequestQuote}
              type="button"
              className="px-5 py-2 rounded-xl text-xs font-bold text-white bg-[#D71932] hover:bg-[#B51226] shadow-md transition flex items-center gap-1.5"
            >
              <span>Inquire for {grade.grade}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
