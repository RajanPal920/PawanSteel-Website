import React from 'react';

export default function Marquee() {
  const items = [
    "STAINLESS STEEL",
    "CARBON STEEL",
    "ALLOY STEEL",
    "DUPLEX",
    "SUPER DUPLEX",
    "MONEL",
    "INCONEL",
    "HASTELLOY",
    "TITANIUM",
    "INDUSTRIAL PIPE FITTINGS",
    "FLANGES",
  ];

  // Repeat items to ensure seamless infinite looping without a gap
  const repeated = [...items, ...items, ...items, ...items];

  return (
    <div className="w-full bg-[#123467] text-white py-3.5 border-y border-[#1B478A] overflow-hidden select-none relative shadow-inner">
      <div className="flex animate-marquee-smooth items-center whitespace-nowrap">
        {repeated.map((item, index) => (
          <div key={index} className="flex items-center">
            <span className="text-xs sm:text-sm font-extrabold tracking-widest text-slate-100 hover:text-white transition-colors uppercase px-4 sm:px-6">
              {item}
            </span>
            <span className="text-[#D71932] font-black text-base sm:text-lg">
              •
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
