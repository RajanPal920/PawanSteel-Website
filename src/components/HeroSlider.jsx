import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const HERO_SLIDES = [
  {
    id: 1,
    eyebrow: "WE ARE A PREMIER",
    headlinePart1: "ROUND BARS",
    headlinePart2: "MANUFACTURER & STOCKIST",
    headline: "ROUND BARS MANUFACTURER & STOCKIST",
    description: "Vast inventory of prime stainless steel, carbon steel, and specialty nickel alloy round bars. Cold drawn, centerless ground, and peeled finish adhering to ASTM A276 & A479 standards.",
    btnText: "EXPLORE ROUND BARS",
    btnLink: "/products/stainless-steel-round-bars-manufactures-india",
    image: "/images/hero-round-bars.jpg",
    imageAlt: "Stainless steel and alloy solid round bars inventory"
  },
  {
    id: 2,
    eyebrow: "WE ARE A PREMIER",
    headlinePart1: "HEX BARS",
    headlinePart2: "STOCKIST & SUPPLIER",
    headline: "HEX BARS STOCKIST & SUPPLIER",
    description: "High-precision hexagonal bars in stainless steel, alloy steel, and carbon steel. Engineered for precision machining, hex fasteners, valves, bolts, and turned engineering parts.",
    btnText: "EXPLORE HEX BARS",
    btnLink: "/products/carbon-alloy-steel-round-hex-bars-india",
    image: "/images/hero-hex-bars.jpg",
    imageAlt: "Precision stainless steel hexagonal bars in industrial warehouse"
  },
  {
    id: 3,
    eyebrow: "WE ARE A PREMIER",
    headlinePart1: "FLANGES & FERRULE FITTINGS",
    headlinePart2: "PRECISION SUPPLIER",
    headline: "FLANGES & FERRULE FITTINGS",
    description: "Precision-engineered ASME B16.5 weld neck, slip-on & blind flanges alongside leak-tight double ferrule tube fittings tested for high-pressure chemical and instrumentation lines.",
    btnText: "EXPLORE FLANGES & FITTINGS",
    btnLink: "/products/industrial-flanges-manufacturer-india",
    image: "/images/hero-flanges.jpg",
    imageAlt: "Industrial flanges and double ferrule compression tube fittings"
  },
  {
    id: 4,
    eyebrow: "WE ARE A PREMIER",
    headlinePart1: "PLATES & SHEETS",
    headlinePart2: "STOCKIST & DISTRIBUTOR",
    headline: "PLATES & SHEETS STOCKIST & DISTRIBUTOR",
    description: "Comprehensive stock of hot rolled plates, cold rolled sheets, mirror coils, and chequered plates in stainless steel, alloy steel, and carbon steel with cut-to-size service.",
    btnText: "EXPLORE PLATES & SHEETS",
    btnLink: "/products/sheets-plates-supplier-india",
    image: "/images/hero-sheets-plates.jpg",
    imageAlt: "Stainless steel sheets, heavy plates and cold rolled coils warehouse"
  }
];

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef(null);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    if (!isPaused) {
      timerRef.current = setInterval(() => {
        nextSlide();
      }, 6500);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused, currentSlide]);

  return (
    <section
      className="relative w-full h-[520px] sm:h-[600px] md:h-[660px] lg:h-[700px] bg-slate-950 overflow-hidden select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      aria-label="Pawan Steel Alloys Hero Slider"
    >
      {/* Slides Container */}
      {HERO_SLIDES.map((slide, index) => {
        const isActive = index === currentSlide;
        return (
          <div
            key={slide.id}
            className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${isActive ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
              }`}
          >
            {/* Background Photographic Image - 100% Clear without overlay */}
            <img
              src={slide.image}
              alt={slide.imageAlt}
              className="absolute inset-0 w-full h-full object-cover object-center transform scale-102 transition-transform duration-[7000ms] ease-out"
              loading={index === 0 ? "eager" : "lazy"}
            />

            {/* Centered Dramatic Content Floating Directly on Clear Image with Slide-Up Animation */}
            {isActive && (
              <div
                key={`slide-content-${currentSlide}`}
                className="relative z-20 max-w-5xl mx-auto h-full px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center text-center"
              >
                {/* Eyebrow: Enriched, bigger size, and bold red background badge */}
                <div className="animate-hero-eyebrow mb-3 sm:mb-4">
                  <span className="inline-block px-5 sm:px-7 py-1.5 sm:py-2 bg-[#D71932] text-white text-xs sm:text-sm md:text-base font-black tracking-[0.25em] uppercase rounded-md shadow-lg border border-red-400/40">
                    {slide.eyebrow}
                  </span>
                </div>

                {/* Huge Bold Main Headline: With vibrant red text border */}
                <h1
                  className="animate-hero-headline text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight uppercase leading-[1.12] mb-4 sm:mb-5 max-w-4xl"
                  style={{
                    WebkitTextStroke: '2px #D71932',
                    paintOrder: 'stroke fill',
                    textShadow: '0 4px 16px rgba(215, 25, 50, 0.5)'
                  }}
                >
                  <span className="block">{slide.headlinePart1 || slide.headline}</span>
                  {slide.headlinePart2 && (
                    <span className="block mt-1 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-white/95">{slide.headlinePart2}</span>
                  )}
                </h1>

                {/* Subtitle Paragraph: With rich red background, white bold text */}
                <div className="animate-hero-desc mb-6 sm:mb-8 max-w-3xl mx-auto">
                  <p className="inline-block px-5 sm:px-8 py-2.5 sm:py-3.5 bg-[#D71932]/90 backdrop-blur-sm text-white text-xs sm:text-sm md:text-base font-bold leading-relaxed rounded-lg shadow-xl border border-red-400/30">
                    {slide.description}
                  </p>
                </div>

                {/* Blue Rectangular "LEARN MORE" Button (Bottom-to-Top Animation) */}
                <div className="animate-hero-btn">
                  <Link
                    to={slide.btnLink}
                    className="inline-block px-8 sm:px-10 py-3 sm:py-3.5 bg-[#123467] hover:bg-[#1B478A] active:bg-[#0A1F3D] text-white font-bold text-xs sm:text-sm tracking-wider uppercase rounded-[3px] transition-all duration-300 shadow-xl hover:shadow-blue-900/40 hover:-translate-y-0.5 border border-white/20"
                  >
                    {slide.btnText}
                  </Link>
                </div>

              </div>
            )}
          </div>
        );
      })}

      {/* Left Navigation Arrow (<) */}
      <button
        onClick={prevSlide}
        type="button"
        className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/35 hover:bg-[#123467] text-white transition-all duration-200 flex items-center justify-center backdrop-blur-sm focus:outline-none"
        aria-label="Previous Slide"
      >
        <ChevronLeft className="w-6 h-6 sm:w-7 sm:h-7" />
      </button>

      {/* Right Navigation Arrow (>) */}
      <button
        onClick={nextSlide}
        type="button"
        className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/35 hover:bg-[#123467] text-white transition-all duration-200 flex items-center justify-center backdrop-blur-sm focus:outline-none"
        aria-label="Next Slide"
      >
        <ChevronRight className="w-6 h-6 sm:w-7 sm:h-7" />
      </button>

      {/* Slide Indicators at Bottom */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2.5 px-4 py-2 rounded-full bg-black/40 backdrop-blur-md border border-white/10">
        {HERO_SLIDES.map((_, idx) => (
          <button
            key={idx}
            onClick={() => goToSlide(idx)}
            type="button"
            className={`transition-all duration-300 rounded-full ${idx === currentSlide
              ? 'w-8 h-2.5 bg-[#123467]'
              : 'w-2.5 h-2.5 bg-white/40 hover:bg-white/80'
              }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
