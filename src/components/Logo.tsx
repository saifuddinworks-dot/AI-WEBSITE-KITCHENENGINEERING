import React, { useState, useEffect } from 'react';
import { useStore } from '../context/StoreContext';

interface LogoProps {
  variant?: 'light' | 'dark' | 'seal' | 'horizontal';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  showTagline?: boolean;
  className?: string;
  onClick?: () => void;
}

export const Logo: React.FC<LogoProps> = ({ 
  variant = 'light', 
  size = 'md', 
  showTagline = true,
  className = '',
  onClick
}) => {
  const { companyInfo } = useStore();
  const isLight = variant === 'light'; // true on dark background (cream text/rings)
  const strokeColor = isLight ? '#ECE5D2' : '#20241E';
  const innerColor = isLight ? '#F5F1E5' : '#20241E';

  // Active custom logo image with cascading fallbacks
  const [activeLogoSrc, setActiveLogoSrc] = useState<string | null>(() => {
    try {
      const stored = localStorage.getItem('ke_custom_logo');
      if (stored) return stored;
    } catch (e) {
      console.error(e);
    }
    return companyInfo?.logoUrl || '/logo.png';
  });

  const [hasImageError, setHasImageError] = useState(false);

  useEffect(() => {
    const handleUpdate = () => {
      try {
        const stored = localStorage.getItem('ke_custom_logo');
        if (stored) {
          setActiveLogoSrc(stored);
          setHasImageError(false);
        }
      } catch (e) {
        console.error(e);
      }
    };

    window.addEventListener('storage', handleUpdate);
    window.addEventListener('ke-logo-updated', handleUpdate);
    return () => {
      window.removeEventListener('storage', handleUpdate);
      window.removeEventListener('ke-logo-updated', handleUpdate);
    };
  }, []);

  useEffect(() => {
    if (companyInfo?.logoUrl && companyInfo.logoUrl !== activeLogoSrc) {
      setActiveLogoSrc(companyInfo.logoUrl);
      setHasImageError(false);
    }
  }, [companyInfo?.logoUrl]);

  // Sizing for the circular seal icon
  const sealPixelSize = {
    xs: 32,
    sm: 40,
    md: 52,
    lg: 64,
    xl: 96
  }[size];

  // The circular seal SVG component matching the official seal
  const responsiveSealClass = {
    xs: 'w-7 h-7 sm:w-8 sm:h-8',
    sm: 'w-8 h-8 sm:w-10 sm:h-10',
    md: 'w-9 h-9 xs:w-10 xs:h-10 sm:w-12 sm:h-12 md:w-[52px] md:h-[52px]',
    lg: 'w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16',
    xl: 'w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24'
  }[size];

  const SealSVG = (
    <svg 
      viewBox="0 0 400 400" 
      width={sealPixelSize} 
      height={sealPixelSize} 
      className={`shrink-0 transition-transform duration-500 group-hover:rotate-6 drop-shadow-xs ${responsiveSealClass}`}
    >
      <defs>
        {/* Top curved text path */}
        <path id={`topArc-${size}-${variant}`} d="M 52,200 A 148,148 0 1,1 348,200" fill="none" />
        {/* Bottom curved text path */}
        <path id={`bottomArc-${size}-${variant}`} d="M 348,200 A 148,148 0 0,1 52,200" fill="none" />
        
        {/* Radial highlight for emblem */}
        <radialGradient id={`sealGlow-${size}-${variant}`} cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor={isLight ? '#3E4A2E' : '#ECE5D2'} stopOpacity="0.18" />
          <stop offset="100%" stopColor={isLight ? '#3E4A2E' : '#ECE5D2'} stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Background glow disc */}
      <circle cx="200" cy="200" r="190" fill={`url(#sealGlow-${size}-${variant})`} />

      {/* Outer Industrial Calibration Bezel / Notches (24 engineering divisions) */}
      {Array.from({ length: 24 }).map((_, i) => {
        const angle = (i * 360) / 24;
        const isCardinal = i % 6 === 0;
        return (
          <line
            key={i}
            x1="200"
            y1={isCardinal ? '2' : '6'}
            x2="200"
            y2={isCardinal ? '14' : '10'}
            stroke={isCardinal ? '#D9642C' : strokeColor}
            strokeWidth={isCardinal ? '3' : '1.5'}
            strokeLinecap="round"
            transform={`rotate(${angle} 200 200)`}
          />
        );
      })}

      {/* Outer concentric rings */}
      <circle cx="200" cy="200" r="186" fill="none" stroke={strokeColor} strokeWidth="6" />
      <circle cx="200" cy="200" r="177" fill="none" stroke={strokeColor} strokeWidth="1.75" strokeDasharray="4 2" opacity="0.6" />
      <circle cx="200" cy="200" r="122" fill="none" stroke={strokeColor} strokeWidth="4.5" />
      <circle cx="200" cy="200" r="115" fill="none" stroke={strokeColor} strokeWidth="1.2" opacity="0.5" />

      {/* Cardinal Axis Markers */}
      <circle cx="200" cy="18" r="2.5" fill="#D9642C" />
      <circle cx="382" cy="200" r="2.5" fill="#D9642C" />
      <circle cx="200" cy="382" r="2.5" fill="#D9642C" />
      <circle cx="18" cy="200" r="2.5" fill="#D9642C" />

      {/* Precision Industrial Stars with Orange Diamond Center */}
      {/* Left Star Anchor */}
      <g transform="translate(44, 200)">
        <polygon 
          points="0,-8 2.2,-2.6 8,-2.6 3.4,0.8 5,6.5 0,3.2 -5,6.5 -3.4,0.8 -8,-2.6 -2.2,-2.6" 
          fill="#D9642C" 
        />
        <circle cx="0" cy="0" r="1.5" fill={isLight ? '#20241E' : '#F5F1E5'} />
      </g>
      {/* Right Star Anchor */}
      <g transform="translate(356, 200)">
        <polygon 
          points="0,-8 2.2,-2.6 8,-2.6 3.4,0.8 5,6.5 0,3.2 -5,6.5 -3.4,0.8 -8,-2.6 -2.2,-2.6" 
          fill="#D9642C" 
        />
        <circle cx="0" cy="0" r="1.5" fill={isLight ? '#20241E' : '#F5F1E5'} />
      </g>

      {/* Top Arc Text: Authoritative Brand */}
      <text 
        fill={strokeColor} 
        fontFamily="'Manrope', 'Arial Black', sans-serif" 
        fontWeight="900" 
        fontSize="26.5" 
        letterSpacing="4.5"
      >
        <textPath href={`#topArc-${size}-${variant}`} startOffset="50%" textAnchor="middle">
          KITCHEN ENGINEERING
        </textPath>
      </text>

      {/* Bottom Arc Text: Legal & Industrial Verification */}
      <text 
        fill={strokeColor} 
        fontFamily="'Manrope', 'Arial', sans-serif" 
        fontWeight="800" 
        fontSize="15.5" 
        letterSpacing="2.8"
      >
        <textPath href={`#bottomArc-${size}-${variant}`} startOffset="50%" textAnchor="middle">
          D.A.T CONTRACTOR BUILDERS &amp; SUPPLIERS
        </textPath>
      </text>

      {/* Central Engineered KE Monogram with Architectural Chamfers & Precision Orange Focal Diamond */}
      <g transform="translate(126, 126)">
        {/* Subtle background technical grid line */}
        <line x1="0" y1="74" x2="148" y2="74" stroke={strokeColor} strokeWidth="0.8" strokeDasharray="3 3" opacity="0.3" />
        <line x1="74" y1="0" x2="74" y2="148" stroke={strokeColor} strokeWidth="0.8" strokeDasharray="3 3" opacity="0.3" />

        {/* K Vertical Twin Columns */}
        <rect x="10" y="10" width="13" height="128" rx="1.5" fill={innerColor} />
        <rect x="29" y="10" width="13" height="128" rx="1.5" fill={innerColor} />

        {/* K Upper Architectural Limbs */}
        <path d="M 48,72 L 88,24 L 112,24 L 68,79 Z" fill={innerColor} />
        <path d="M 68,89 L 99,50 L 112,50 L 81,89 Z" fill={innerColor} />

        {/* K Lower Architectural Limbs */}
        <path d="M 48,72 L 68,64 L 112,124 L 88,124 Z" fill={innerColor} />
        <path d="M 60,84 L 97,138 L 112,138 L 74,84 Z" fill={innerColor} />

        {/* E Triple Double-Bars */}
        {/* Top bar pair */}
        <rect x="68" y="10" width="76" height="12" rx="1.5" fill={innerColor} />
        <rect x="68" y="27" width="76" height="11" rx="1.5" fill={innerColor} />

        {/* Middle bar pair */}
        <rect x="68" y="66" width="64" height="11" rx="1.5" fill={innerColor} />
        <rect x="68" y="81" width="64" height="11" rx="1.5" fill={innerColor} />

        {/* Bottom bar pair */}
        <rect x="68" y="114" width="76" height="11" rx="1.5" fill={innerColor} />
        <rect x="68" y="129" width="76" height="12" rx="1.5" fill={innerColor} />

        {/* Central Signal Orange Engineering Spark Diamond */}
        <polygon 
          points="58,74 65,67 72,74 65,81" 
          fill="#D9642C" 
          stroke={isLight ? '#20241E' : '#F5F1E5'}
          strokeWidth="1.5"
        />
      </g>
    </svg>
  );

  return (
    <div 
      onClick={onClick}
      className={`flex items-center gap-2 xs:gap-2.5 sm:gap-3.5 select-none group cursor-pointer ${className}`}
    >
      {/* Official Circular Seal Badge or Custom Uploaded Logo */}
      <div className="relative shrink-0 flex items-center justify-center">
        {activeLogoSrc && !hasImageError ? (
          <img 
            src={activeLogoSrc} 
            alt="Kitchen Engineering Logo" 
            className={`shrink-0 object-contain drop-shadow-sm rounded transition-transform duration-300 group-hover:scale-105 ${responsiveSealClass}`}
            onError={() => {
              if (activeLogoSrc === '/logo.png') {
                // If standard /logo.png fails, try the uploaded image file name
                setActiveLogoSrc('/Untitled (10 x 10 in).png');
              } else {
                setHasImageError(true);
              }
            }}
          />
        ) : (
          SealSVG
        )}
      </div>

      {/* Typography Hierarchy */}
      <div className="flex flex-col min-w-0">
        <span 
          className={`font-black tracking-tight uppercase leading-tight whitespace-nowrap ${
            size === 'xs' 
              ? 'text-xs sm:text-sm' 
              : size === 'sm' 
                ? 'text-sm sm:text-base' 
                : size === 'lg' 
                  ? 'text-lg sm:text-xl md:text-2xl' 
                  : 'text-sm xs:text-base sm:text-lg md:text-xl'
          } ${isLight ? 'text-[#F5F1E5]' : 'text-[#20241E]'}`}
        >
          KITCHEN ENGINEERING
        </span>

        {showTagline && (
          <span className="text-[9px] xs:text-[9.5px] sm:text-[10px] uppercase font-mono tracking-wider font-semibold whitespace-nowrap text-[#D9642C]">
            ONE-WINDOW SOLUTION
          </span>
        )}
      </div>
    </div>
  );
};
