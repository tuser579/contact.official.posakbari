/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "ht-bg": "#0d0d0d",
        "ht-card": "#1a1a1a",
        "ht-card-hover": "#222222",
        "ht-border": "#2a2a2a",
        "ht-red": "#cc0000",
        "ht-red-bright": "#ff1111",
        "ht-text": "#e0e0e0",
        "ht-muted": "#888888",
      },
      fontFamily: {
        display: ["var(--font-rajdhani)", "sans-serif"],
        body: ["var(--font-exo2)", "sans-serif"],
      },
      keyframes: {
        fadeInDown: {
          "0%": { opacity: "0", transform: "translateY(-20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideIn: {
          "0%": { opacity: "0", transform: "translateX(-30px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        underlineDraw: {
          "0%": { width: "0%" },
          "100%": { width: "100%" },
        },
        pulse: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.5" },
        },
        glow: {
          "0%, 100%": { boxShadow: "0 0 5px rgba(204,0,0,0.3)" },
          "50%": { boxShadow: "0 0 20px rgba(204,0,0,0.7)" },
        },
      },
      animation: {
        fadeInDown: "fadeInDown 0.7s ease forwards",
        fadeInUp: "fadeInUp 0.6s ease forwards",
        slideIn: "slideIn 0.5s ease forwards",
        underlineDraw: "underlineDraw 0.8s ease forwards 0.3s",
        glow: "glow 2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
