import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, 
  ChevronRight, 
  ArrowRight, 
  CheckCircle2, 
  Flame, 
  Layers 
} from 'lucide-react';
import { MATERIALS, PRODUCTS, makeGradeSlug } from '../data/productsData';

export default function MaterialsPage({ onOpenQuoteModal }) {
  useEffect(() => {
    document.title = "Industrial Metal Materials & Specialty Alloys Guide | Pawan Steel Alloys";
  }, []);

  return (
    <div className="w-full bg-[#F3F7FB] min-h-screen pb-16">
      {/* Header Banner with Photographic Hero Image */}
      <section className="relative text-white py-16 md:py-20 overflow-hidden border-b-4 border-[#D71932] bg-[#0A1F3D]">
        {/* Photographic Hero Image with Dark Metallic Gradient Overlay */}
        <div className="absolute inset-0">
          <img
            src="/images/hero-4.jpg"
            alt="Pawan Steel Alloys Specialty Materials"
            className="w-full h-full object-cover object-center filter brightness-[0.25] contrast-125 transform scale-105 transition-transform duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A1F3D] via-[#123467]/90 to-[#0A1F3D]/80" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/30 via-transparent to-black/60" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl space-y-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#D71932] text-white text-xs font-bold uppercase tracking-wider rounded shadow-sm">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Material Metallurgy Guide</span>
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight">
              Materials & Specialty Alloys
            </h1>
            <p className="text-base sm:text-lg text-slate-200 font-medium">
              13 Core Metallurgy Classifications & High Performance Alloys
            </p>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-3xl">
              Explore our 13 core material categories. From standard austenitic stainless steels to high-temperature superalloys, select a material to view matching product forms and technical properties.
            </p>
          </div>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="bg-white border-b border-slate-200 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-2 text-xs text-slate-500">
          <Link to="/" className="hover:text-[#D71932] transition-colors">Home</Link>
          <ChevronRight className="w-3 h-3 text-slate-400" />
          <span className="text-slate-800 font-semibold">Materials</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        
        <div className="mb-8">
          <h2 className="text-xl sm:text-2xl font-bold text-[#123467]">
            All 13 Supplied Material Grades
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Click any material card below to inspect its chemical characteristics, industrial applications, and compatible stocked products.
          </p>
        </div>

        {/* 13 Materials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {MATERIALS.map((material) => {
            // Count matching products
            const matchingCount = PRODUCTS.filter((p) => p.materials.includes(material.slug)).length;

            return (
              <div
                key={material.id}
                className="bg-white rounded-xl border border-slate-200 shadow-subtle hover:shadow-hover hover:border-[#D71932] transition-all duration-300 p-6 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-1 bg-slate-100 text-slate-700 rounded group-hover:bg-red-50 group-hover:text-[#D71932] transition-colors">
                      {matchingCount} Product Types
                    </span>
                    <span className="text-xs text-slate-400 font-mono">
                      #{material.slug}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-[#123467] group-hover:text-[#D71932] transition-colors">
                    <Link to={`/materials/${material.slug}`}>
                      {material.name}
                    </Link>
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed mt-2.5 mb-4">
                    {material.shortDesc}
                  </p>

                  <div className="space-y-2 pt-3 border-t border-slate-100 text-xs">
                    <div>
                      <strong className="text-slate-700">Characteristics: </strong>
                      <span className="text-slate-500">{material.characteristics}</span>
                    </div>

                    <div>
                      <div className="flex items-center justify-between mb-1.5">
                        <strong className="text-slate-700">Available Grades: </strong>
                        <span className="text-[10px] text-slate-400 font-medium">Click to inspect</span>
                      </div>
                      <div className="flex flex-wrap gap-1">
                        {material.grades.map((grade, idx) => (
                          <Link
                            key={idx}
                            to={`/materials/${material.slug}-grade-${makeGradeSlug(grade)}`}
                            className="text-[10px] font-mono px-2 py-0.5 bg-slate-50 hover:bg-[#123467] hover:text-white transition-all text-slate-700 rounded border border-slate-200 hover:border-[#123467] shadow-2xs hover:shadow-xs cursor-pointer inline-block"
                            title={`Inspect ${grade} metallurgy specs for ${material.name}`}
                          >
                            {grade}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <Link
                    to={`/materials/${material.slug}`}
                    className="inline-flex items-center text-xs font-bold text-[#D71932] group-hover:text-[#B51226] transition"
                  >
                    <span>View Matching Products</span>
                    <ChevronRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                  </Link>

                  <button
                    onClick={onOpenQuoteModal}
                    type="button"
                    className="text-xs font-bold text-[#123467] hover:text-[#D71932] transition"
                  >
                    Inquire Grade
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Metallurgical Consultation Banner */}
        <div className="mt-14 bg-gradient-to-r from-[#123467] to-[#0A1F3D] text-white p-8 rounded-2xl shadow-premium border border-slate-700 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2">
            <h3 className="text-xl font-bold text-white">
              Need a Material Grade Not Listed Here?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed">
              We regularly source specialized alloys including Sanicro 28, SMO 254, Alloy 20, Nimonic, and refractory metals for critical client projects through our established mill partner networks.
            </p>
          </div>
          <button
            onClick={onOpenQuoteModal}
            className="px-6 py-3 bg-[#D71932] hover:bg-[#B51226] text-white text-xs font-bold rounded-md whitespace-nowrap shadow-md transition transform hover:-translate-y-0.5"
          >
            Consult With Our Team
          </button>
        </div>

      </div>
    </div>
  );
}

