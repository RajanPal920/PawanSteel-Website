import React from 'react';
import { Globe2 } from 'lucide-react';

const COUNTRIES = [
  { name: "INDIA", code: "in" },
  { name: "UAE", code: "ae" },
  { name: "SAUDI ARABIA", code: "sa" },
  { name: "OMAN", code: "om" },
  { name: "QATAR", code: "qa" },
  { name: "KUWAIT", code: "kw" },
  { name: "USA", code: "us" },
  { name: "UK", code: "gb" },
  { name: "GERMANY", code: "de" },
  { name: "FRANCE", code: "fr" },
  { name: "ITALY", code: "it" },
  { name: "SPAIN", code: "es" },
  { name: "NETHERLANDS", code: "nl" },
  { name: "BELGIUM", code: "be" },
  { name: "POLAND", code: "pl" },
  { name: "NORWAY", code: "no" },
  { name: "RUSSIA", code: "ru" },
  { name: "TURKEY", code: "tr" },
  { name: "IRAN", code: "ir" },
  { name: "JAPAN", code: "jp" },
  { name: "SOUTH KOREA", code: "kr" },
  { name: "CHINA", code: "cn" },
  { name: "SINGAPORE", code: "sg" },
  { name: "MALAYSIA", code: "my" },
  { name: "THAILAND", code: "th" },
  { name: "VIETNAM", code: "vn" },
  { name: "INDONESIA", code: "id" },
  { name: "PHILIPPINES", code: "ph" },
  { name: "AUSTRALIA", code: "au" },
  { name: "BRAZIL", code: "br" },
  { name: "MEXICO", code: "mx" },
  { name: "CHILE", code: "cl" },
  { name: "COLOMBIA", code: "co" },
  { name: "VENEZUELA", code: "ve" },
  { name: "SOUTH AFRICA", code: "za" },
];

export default function CountryExportNetwork() {
  return (
    <section className="py-16 md:py-20 bg-[#F3F7FB] border-b border-[#DDE5EE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section: Restored original text and color theme */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-[#D71932] bg-red-50 border border-red-100 px-3 py-1 rounded-md inline-flex items-center gap-1.5 mb-3">
            <Globe2 className="w-3.5 h-3.5 text-[#D71932]" />
            <span>Global Inquiries & Export Network</span>
          </span>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#123467] tracking-tight">
            Connecting with Customers Across Global Markets
          </h2>

          <div className="w-16 h-1 bg-[#D71932] mx-auto mt-3 mb-3 rounded-full" />

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Discuss your industrial metal requirements with our team. We maintain active supply corridors across Asia, Middle East, Europe, Americas, and Africa.
          </p>
        </div>

        {/* 35 Country Pills Grid: Enlarged pills with prominent national flags */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 gap-3.5 sm:gap-4 max-w-6xl mx-auto">
          {COUNTRIES.map((c, i) => (
            <div
              key={i}
              className="flex items-center gap-3 px-4 sm:px-5 py-3 sm:py-3.5 rounded-full bg-white hover:bg-red-50/40 border-2 border-slate-200/90 hover:border-[#D71932] shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 cursor-default group"
            >
              {/* Larger Colorful National Flag Image */}
              <img
                src={`https://flagcdn.com/w40/${c.code}.png`}
                srcSet={`https://flagcdn.com/w80/${c.code}.png 2x`}
                width="32"
                height="22"
                alt={`${c.name} flag`}
                className="w-8 h-5 sm:w-9 sm:h-6 object-cover rounded-xs shadow-xs border border-slate-300 flex-shrink-0"
                loading="lazy"
              />

              {/* Country Name in Larger Bold Uppercase */}
              <span className="text-xs sm:text-sm font-black tracking-wide text-[#123467] group-hover:text-[#D71932] uppercase truncate">
                {c.name}
              </span>
            </div>
          ))}
        </div>

        <p className="text-center text-[11px] text-slate-400 mt-8 max-w-2xl mx-auto leading-relaxed">
          Note: Listed destinations represent international target markets and commercial inquiry regions. We cater to project requisitions and export trading requirements per applicable customs documentation.
        </p>

      </div>
    </section>
  );
}
