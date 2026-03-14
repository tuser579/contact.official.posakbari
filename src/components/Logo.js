"use client";

export default function HyperTouchLogo({ className = "" }) {
  return (
    <svg
      className={className}
      width="80"
      height="80"
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <filter id="red-glow" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <linearGradient id="logo-grad" x1="40" y1="0" x2="40" y2="80" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#ff4444" />
          <stop offset="100%" stopColor="#990000" />
        </linearGradient>
        <linearGradient id="cloth-grad" x1="0" y1="0" x2="80" y2="80" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#cc2200" />
          <stop offset="100%" stopColor="#660000" />
        </linearGradient>
      </defs>

      {/* Hanger hook */}
      <path
        d="M40 4 C40 4 40 10 46 13 C52 16 56 22 52 28 C48 34 40 34 40 34"
        stroke="url(#logo-grad)"
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
        filter="url(#red-glow)"
      />
      <circle cx="40" cy="5" r="2.5" fill="url(#logo-grad)" filter="url(#red-glow)" />

      {/* Left sleeve */}
      <path d="M14 36 L6 44 L14 50 L22 42 L22 36 Z" fill="url(#cloth-grad)" filter="url(#red-glow)" opacity="0.95" />
      {/* Right sleeve */}
      <path d="M66 36 L74 44 L66 50 L58 42 L58 36 Z" fill="url(#cloth-grad)" filter="url(#red-glow)" opacity="0.95" />
      {/* Main body */}
      <path d="M22 34 L22 70 Q40 75 58 70 L58 34 L40 30 Z" fill="url(#cloth-grad)" filter="url(#red-glow)" opacity="0.92" />
      {/* Collar left */}
      <path d="M22 34 L40 30 L32 38 Z" fill="url(#logo-grad)" filter="url(#red-glow)" />
      {/* Collar right */}
      <path d="M58 34 L40 30 L48 38 Z" fill="url(#logo-grad)" filter="url(#red-glow)" />

      {/* Fold lines */}
      <line x1="33" y1="42" x2="31" y2="68" stroke="rgba(255,100,100,0.2)" strokeWidth="1" />
      <line x1="47" y1="42" x2="49" y2="68" stroke="rgba(255,100,100,0.2)" strokeWidth="1" />

      {/* PB monogram */}
      <text x="40" y="58" textAnchor="middle" fontSize="13" fontWeight="800"
        fontFamily="'Rajdhani', sans-serif" fill="rgba(255,200,200,0.85)" letterSpacing="1">
        PB
      </text>
    </svg>
  );
}