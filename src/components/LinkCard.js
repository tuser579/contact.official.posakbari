"use client";

import { useState, useRef } from "react";
import { getIcon, InfoIcon } from "./Icons";

export default function LinkCard({ link, delay = 0 }) {
  const [hovered, setHovered] = useState(false);
  const [infoOpen, setInfoOpen] = useState(false);
  const timeoutRef = useRef(null);

  const handleMouseEnter = () => {
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => setHovered(true), 120);
  };
  const handleMouseLeave = () => {
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => setHovered(false), 180);
  };

  const showPanel = hovered || infoOpen;
  const info = link.info || {};

  const linkTarget = link.href.startsWith("tel:") ? "_self" : "_blank";
  const accentBg = "linear-gradient(90deg, " + link.color + "88, " + link.color + "22, transparent)";
  const badgeBorderColor = link.color + "44";
  const badgeBgColor = link.color + "11";
  const ctaBgColor = link.color + "22";
  const ctaBorderColor = "1px solid " + link.color + "44";

  return (
    <div
      className="anim-item relative group"
      style={{
        animationDelay: delay * 0.1 + "s",
        zIndex: showPanel ? 100 : 10,
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Main card row */}
      <a
        href={link.href}
        target={linkTarget}
        rel="noopener noreferrer"
        className="flex items-center w-full px-4 py-3.5 rounded-lg border transition-all duration-200 hover:translate-y-[-1px] hover:shadow-lg"
        style={{
          backgroundColor: "#1a1a1a",
          borderColor: showPanel ? link.color + "55" : "#2a2a2a",
          borderRadius: showPanel ? "8px 8px 0 0" : "8px",
          boxShadow: showPanel ? `0 4px 12px ${link.color}22` : "none",
        }}
        aria-label={link.label}
      >
        {/* Icon */}
        <span className="flex-shrink-0 w-9 h-9 flex items-center justify-center rounded-md bg-black/30">
          {getIcon(link.icon, link.color)}
        </span>

        {/* Label */}
        <div className="flex-1 ml-3">
          <span
            className="block text-sm font-medium tracking-wide"
            style={{ fontFamily: "var(--font-exo2)", color: "#d0d0d0" }}
          >
            {link.label}
            {link.sublabel && (
              <span className="text-gray-500 font-normal ml-1">
                {"— " + link.sublabel}
              </span>
            )}
          </span>
        </div>

        {/* Info toggle */}
        {link.showInfo && (
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setInfoOpen((v) => !v);
            }}
            className="flex-shrink-0 w-7 h-7 flex items-center justify-center rounded-full border ml-2 hover:border-red-600 transition-all"
            style={{
              borderColor: "#2a2a2a",
              color: "#a0a0a0",
            }}
            aria-label="More info"
          >
            <InfoIcon size={14} />
          </button>
        )}
      </a>

      {/* Hover info panel */}
      {link.showInfo && (
        <div
          className="absolute left-0 right-0 overflow-hidden transition-all duration-300 ease-out rounded-b-lg"
          style={{
            zIndex: 100,
            border: "1px solid #2a2a2a",
            borderTop: "none",
            backgroundColor: "#161616",
            maxHeight: showPanel ? "240px" : "0px",
            opacity: showPanel ? 1 : 0,
            pointerEvents: showPanel ? "auto" : "none",
            boxShadow: showPanel ? "0 12px 32px rgba(0,0,0,0.7)" : "none",
            borderColor: showPanel ? link.color + "33" : "#2a2a2a",
          }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {/* Top accent bar */}
          <div style={{ height: 2, background: accentBg }} />

          <div className="px-4 py-3 space-y-2.5">
            {/* Badge + title */}
            <div className="flex items-center gap-2">
              <span
                className="text-[10px] font-semibold px-2 py-0.5 rounded-full border"
                style={{
                  color: link.color,
                  borderColor: badgeBorderColor,
                  backgroundColor: badgeBgColor,
                  fontFamily: "var(--font-rajdhani)",
                  letterSpacing: "0.08em",
                }}
              >
                {info.badge}
              </span>
              <span
                className="text-[13px] font-semibold text-white"
                style={{ fontFamily: "var(--font-rajdhani)", letterSpacing: "0.05em" }}
              >
                {info.title}
              </span>
            </div>

            {/* Description */}
            <p
              className="text-xs leading-relaxed text-gray-400"
              style={{ fontFamily: "var(--font-exo2)" }}
            >
              {info.description}
            </p>

            {/* Stats row + CTA */}
            <div className="flex items-center justify-between pt-0.5">
              {/* Stats */}
              <div className="flex gap-4">
                {(info.stats || []).map((stat) => (
                  <div key={stat.label} className="text-center">
                    <div
                      className="text-sm font-bold"
                      style={{ color: link.color, fontFamily: "var(--font-rajdhani)" }}
                    >
                      {stat.value}
                    </div>
                    <div className="text-[10px] text-gray-500 uppercase tracking-wider">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <a
                href={link.href}
                target={linkTarget}
                rel="noopener noreferrer"
                className="text-[11px] font-semibold px-3 py-1.5 rounded-lg transition-all duration-200 hover:brightness-110 active:scale-95"
                style={{
                  backgroundColor: ctaBgColor,
                  color: link.color,
                  border: ctaBorderColor,
                  fontFamily: "var(--font-rajdhani)",
                  letterSpacing: "0.04em",
                  textDecoration: "none",
                }}
                onClick={(e) => e.stopPropagation()}
              >
                {info.cta}
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}