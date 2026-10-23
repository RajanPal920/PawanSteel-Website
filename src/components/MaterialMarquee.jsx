import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';
import { MATERIALS } from '../data/productsData';

export default function MaterialMarquee({ onOpenQuoteModal }) {
  // Duplicate materials array to achieve infinite smooth looping without seams
  const marqueeItems = [...MATERIALS, ...MATERIALS];

  return (
    <section className="py-16 md:py-24 bg-white border-y border-[#DDE5EE] overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 text-center">
        
        {/* Eyebrow Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-50 text-[#D71932] text-xs font-bold uppercase tracking-wider rounded-md border border-red-100 mb-3">
          <Sparkles className="w-3.5 h-3.5" />
          <span>13 Metallurgical Classifications</span>
        </div>

        {/* Section Heading matching user prompt: "materials for every industries" */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#123467] tracking-tight uppercase">
          Materials for Every Industry
        </h2>

        {/* Golden / Red Accent Divider */}
        <div className="w-20 h-1 bg-[#D71932] mx-auto mt-4 mb-4 rounded-full" />

        <p className="text-slate-600 text-sm sm:text-base max-w-3xl mx-auto leading-relaxed">
          From high-pressure austenitic stainless steels and duplex grades to aerospace-grade Inconel, Monel, Hastelloy, and Titanium. Hover any card to pause and explore grades.
        </p>
      </div>

      {/* Marquee Track Container (Clean Full-Bleed without Edge Shadows) */}
      <div className="relative w-full overflow-hidden select-none py-4">
        {/* Continuous Right-to-Left Scrolling Track */}
        <div className="flex animate-marquee-cards gap-6 items-stretch">
          {marqueeItems.map((mat, index) => (
            <div
              key={`${mat.id}-${index}`}
              className="w-80 sm:w-88 md:w-96 flex-shrink-0 bg-[#D71932] hover:bg-[#B51226] text-white rounded-2xl p-6 sm:p-7 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group transform hover:-translate-y-1.5 border border-red-400/30"
            >
              {/* Card Body: Title & Short Desc Only */}
              <div>
                {/* Material Name / Title */}
                <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight mb-2.5">
                  {mat.name}
                </h3>

                {/* Short Description */}
                <p className="text-xs sm:text-sm text-white/95 leading-relaxed mb-6 font-medium line-clamp-3">
                  {mat.shortDesc}
                </p>
              </div>

              {/* Card Footer: Buttons Only */}
              <div className="pt-4 border-t border-white/20 flex items-center gap-3">
                <Link
                  to={`/materials/${mat.slug}`}
                  className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-4 bg-white hover:bg-slate-100 text-[#D71932] font-black text-xs sm:text-sm rounded-lg transition-all duration-200 shadow-md group-hover:shadow-lg"
                >
                  <span>Explore Material</span>
                  <ChevronRight className="w-4 h-4 ml-0.5" />
                </Link>

                <button
                  onClick={onOpenQuoteModal}
                  type="button"
                  className="py-2.5 px-4 bg-[#123467] hover:bg-[#0A1F3D] text-white font-bold text-xs sm:text-sm rounded-lg transition-all duration-200 shadow-md border border-white/20"
                >
                  Quote
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Link to Full Metallurgy Guide */}
      <div className="mt-8 text-center px-4">
        <Link
          to="/materials"
          className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full bg-[#123467] hover:bg-[#1B478A] text-white text-xs sm:text-sm font-bold shadow-sm transition-all"
        >
          <span>View All 13 Materials & Complete Grade Charts</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  );
}
