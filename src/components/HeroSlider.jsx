import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const HERO_SLIDES = [
  {
    id: 1,
    eyebrow: "WE ARE A PREMIER",
    headlinePart1: "STEEL TRADER",
    headlinePart2: "",
    headline: "STEEL TRADER",
    description: "we have grown to become a leading steel trading organization in Asia, with strong ties with many steel producers in the region.",
    btnText: "LEARN MORE",
    btnLink: "/about",
    image: "/images/hero-1.jpg",
    imageAlt: "Industrial steel pipes and trader warehouse"
  },
  {
    id: 2,
    eyebrow: "WE ARE A PREMIER",
    headlinePart1: "PIPES & TUBES",
    headlinePart2: "STOCKIST",
    headline: "PIPES & TUBES STOCKIST",
    description: "Complete inventory of seamless & welded stainless steel, carbon steel, and alloy steel pipes in ASTM A312, A358, A106, across all standard schedules.",
    btnText: "LEARN MORE",
    btnLink: "/products/pipes-tubes",
    image: "/images/hero-2.jpg",
    imageAlt: "Industrial flanges and machined pipe fittings"
  },
  {
    id: 3,
    eyebrow: "WE ARE A PREMIER",
    headlinePart1: "FLANGES & FITTINGS",
    headlinePart2: "SUPPLIER",
    headline: "FLANGES & FITTINGS SUPPLIER",
    description: "Precision-engineered weld neck, slip-on, blind, socket weld flanges (Class 150# to 2500#), butt weld elbows, and forged fittings compliant with ASME B16.5.",
    btnText: "LEARN MORE",
    btnLink: "/products/flanges",
    image: "/images/hero-3.jpg",
    imageAlt: "Stainless steel sheets, heavy plates and round bars"
  },
  {
    id: 4,
    eyebrow: "WE ARE A PREMIER",
    headlinePart1: "NICKEL ALLOYS",
    headlinePart2: "SPECIALIST",
    headline: "NICKEL ALLOYS SPECIALIST",
    description: "Extensive stock of Inconel, Monel, Hastelloy, Titanium, Duplex & Super Duplex engineered for high pressure, thermal, and severe corrosive environments.",
    btnText: "LEARN MORE",
    btnLink: "/materials",
    image: "/images/hero-4.jpg",
    imageAlt: "Specialty nickel alloys, Inconel, Monel and Hastelloy materials"
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
                  className="animate-hero-headline text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white tracking-tight uppercase leading-[1.08] mb-4 sm:mb-5"
                  style={{
                    WebkitTextStroke: '2.5px #D71932',
                    paintOrder: 'stroke fill',
                    textShadow: '0 4px 16px rgba(215, 25, 50, 0.5)'
                  }}
                >
                  <span className="block sm:whitespace-nowrap">{slide.headlinePart1 || slide.headline}</span>
                  {slide.headlinePart2 && (
                    <span className="block mt-0.5 sm:mt-1">{slide.headlinePart2}</span>
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
