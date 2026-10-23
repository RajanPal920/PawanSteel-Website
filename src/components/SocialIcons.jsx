import React from 'react';

// Official LinkedIn SVG Icon
export function LinkedInIcon({ className = "w-4 h-4", ...props }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.45a1.6 1.6 0 0 0-1.6 1.6 1.6 1.6 0 0 0 1.6 1.6 1.6 1.6 0 0 0 1.6-1.6 1.6 1.6 0 0 0-1.6-1.6z" />
    </svg>
  );
}

// Official Facebook SVG Icon
export function FacebookIcon({ className = "w-4 h-4", ...props }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

// Official Instagram SVG Icon
export function InstagramIcon({ className = "w-4 h-4", ...props }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

// Social Links Configuration
export const SOCIAL_LINKS = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/company/pawan-steel-alloys",
    icon: LinkedInIcon,
    bgColor: "bg-[#0A66C2]",
    hoverColor: "hover:bg-[#084e96]",
    textColor: "text-[#0A66C2]",
    borderColor: "border-[#0A66C2]/30",
    gradient: "from-[#0A66C2] to-[#004182]"
  },
  {
    name: "Facebook",
    url: "https://www.facebook.com/pawansteelalloys",
    icon: FacebookIcon,
    bgColor: "bg-[#1877F2]",
    hoverColor: "hover:bg-[#125ec4]",
    textColor: "text-[#1877F2]",
    borderColor: "border-[#1877F2]/30",
    gradient: "from-[#1877F2] to-[#0c51ab]"
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/pawansteelalloys",
    icon: InstagramIcon,
    bgColor: "bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888]",
    hoverColor: "hover:opacity-90",
    textColor: "text-[#E4405F]",
    borderColor: "border-[#E4405F]/30",
    gradient: "from-[#f09433] via-[#dc2743] to-[#bc1888]"
  }
];

// Reusable Social Links Group with multiple display variants
export default function SocialLinksGroup({ variant = "colored", size = "md", className = "" }) {
  const sizeClasses = {
    sm: "w-7 h-7 text-xs",
    md: "w-9 h-9 text-sm",
    lg: "w-11 h-11 text-base"
  };

  const iconSizes = {
    sm: "w-3.5 h-3.5",
    md: "w-4.5 h-4.5",
    lg: "w-5 h-5"
  };

  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      {SOCIAL_LINKS.map((item) => {
        const Icon = item.icon;
        
        if (variant === "topbar") {
          return (
            <a
              key={item.name}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`w-6 h-6 rounded flex items-center justify-center text-white ${item.bgColor} ${item.hoverColor} transition-transform transform hover:scale-110 shadow-sm`}
              title={`Follow Pawan Steel Alloys on ${item.name}`}
              aria-label={`Follow Pawan Steel Alloys on ${item.name}`}
            >
              <Icon className="w-3.5 h-3.5 text-white" />
            </a>
          );
        }

        if (variant === "outline") {
          return (
            <a
              key={item.name}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`${sizeClasses[size]} rounded-lg border ${item.borderColor} bg-white/5 hover:bg-white/10 ${item.textColor} flex items-center justify-center transition-all duration-200 transform hover:-translate-y-0.5 shadow-sm`}
              title={`Follow Pawan Steel Alloys on ${item.name}`}
              aria-label={`Follow Pawan Steel Alloys on ${item.name}`}
            >
              <Icon className={iconSizes[size]} />
            </a>
          );
        }

        // Default 'colored' with authentic brand backgrounds
        return (
          <a
            key={item.name}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`${sizeClasses[size]} rounded-lg ${item.bgColor} ${item.hoverColor} text-white flex items-center justify-center transition-all duration-200 transform hover:-translate-y-0.5 hover:shadow-lg shadow-md`}
            title={`Follow Pawan Steel Alloys on ${item.name}`}
            aria-label={`Follow Pawan Steel Alloys on ${item.name}`}
          >
            <Icon className={iconSizes[size]} />
          </a>
        );
      })}
    </div>
  );
}
