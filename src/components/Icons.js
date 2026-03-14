"use client";

// Individual icon components for each social platform

export function GlobeIcon({ color = "#3b9eff", size = 22 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="10" stroke={color} strokeWidth="1.8" />
      <ellipse cx="12" cy="12" rx="4.5" ry="10" stroke={color} strokeWidth="1.8" />
      <line x1="2" y1="9" x2="22" y2="9" stroke={color} strokeWidth="1.8" />
      <line x1="2" y1="15" x2="22" y2="15" stroke={color} strokeWidth="1.8" />
    </svg>
  );
}

export function FacebookIcon({ color = "#1877f2", size = 22 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color} xmlns="http://www.w3.org/2000/svg">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

export function InstagramIcon({ size = 22 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="ig-grad" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#f09433" />
          <stop offset="25%" stopColor="#e6683c" />
          <stop offset="50%" stopColor="#dc2743" />
          <stop offset="75%" stopColor="#cc2366" />
          <stop offset="100%" stopColor="#bc1888" />
        </linearGradient>
      </defs>
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" stroke="url(#ig-grad)" strokeWidth="1.8" fill="none" />
      <circle cx="12" cy="12" r="5" stroke="url(#ig-grad)" strokeWidth="1.8" fill="none" />
      <circle cx="17.5" cy="6.5" r="1.2" fill="url(#ig-grad)" />
    </svg>
  );
}

export function TikTokIcon({ size = 22 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.17 8.17 0 0 0 4.77 1.52V6.75a4.85 4.85 0 0 1-1-.06z"
        fill="#e0e0e0"
      />
    </svg>
  );
}

export function YouTubeIcon({ size = 22 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="2" y="5" width="20" height="14" rx="4" fill="#ff0000" />
      <polygon points="10,9 10,15 16,12" fill="white" />
    </svg>
  );
}

export function TelegramIcon({ color = "#26a5e4", size = 22 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M21.8 2.9L2.4 10.1c-1.3.5-1.3 1.3-.2 1.6l4.9 1.5 1.9 5.7c.2.6.1.8.8.8.5 0 .8-.2 1.1-.5l2.6-2.5 5.1 3.7c.9.5 1.6.2 1.8-.8l3.2-15.1c.3-1.2-.4-1.8-1.8-1.6z"
        fill={color}
      />
      <path d="M9.1 13.2l-.4 4.5c.6 0 .8-.3 1.1-.6l2.7-2.6" fill="#1d8cbf" />
      <path d="M9.1 13.2l7.7-4.8c.4-.2.7 0 .4.3L9.1 13.2z" fill="#1d8cbf" />
    </svg>
  );
}

export function PhoneIcon({ color = "#22c55e", size = 22 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.2 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.11 1.2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 9.09a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.17 16l.75.92z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function InfoIcon({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="10" stroke="#666" strokeWidth="1.8" />
      <line x1="12" y1="11" x2="12" y2="17" stroke="#666" strokeWidth="2" strokeLinecap="round" />
      <circle cx="12" cy="7.5" r="1" fill="#666" />
    </svg>
  );
}

export function getIcon(iconName, color, size = 22) {
  switch (iconName) {
    case "globe":
      return <GlobeIcon color={color} size={size} />;
    case "facebook":
      return <FacebookIcon color={color} size={size} />;
    case "instagram":
      return <InstagramIcon size={size} />;
    case "tiktok":
      return <TikTokIcon size={size} />;
    case "youtube":
      return <YouTubeIcon size={size} />;
    case "telegram":
      return <TelegramIcon color={color} size={size} />;
    case "phone":
      return <PhoneIcon color={color} size={size} />;
    default:
      return null;
  }
}
