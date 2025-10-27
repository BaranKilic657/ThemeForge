"use client";
import { useState, useEffect, useRef } from "react";

type HeaderInfo = {
  name: string;
  label: string;
  description: string;
};

const headers: HeaderInfo[] = [
  { name: "header_classic", label: "Classic", description: "Traditional navigation bar" },
  { name: "header_centernav", label: "Center Nav", description: "Centered navigation links" },
  { name: "header_compacticons", label: "Compact Icons", description: "Icon-based compact header" },
  { name: "header_duallayer", label: "Dual Layer", description: "Parallax layered design" },
  { name: "header_elevatedcard", label: "Elevated Card", description: "Floating card style" },
  { name: "header_floatingnav", label: "Floating Nav", description: "Floating navigation bar" },
  { name: "header_glassnav", label: "Glass Nav", description: "Glassmorphism effect" },
  { name: "header_gradienthero", label: "Gradient Hero", description: "Gradient background hero" },
  { name: "header_interactive", label: "Interactive", description: "Interactive animations" },
  { name: "header_minimalbar", label: "Minimal Bar", description: "Minimalist design" },
  { name: "header_pulse", label: "Pulse", description: "Pulse animation effect" },
  { name: "header_revealslide", label: "Reveal Slide", description: "Slide reveal animation" },
  { name: "header_segmented", label: "Segmented", description: "Segmented controls" },
  { name: "header_splitaccent", label: "Split Accent", description: "Split accent design" },
  { name: "header_underlinenav", label: "Underline Nav", description: "Underlined navigation" },
  { name: "header_timeline", label: "Timeline", description: "Scroll progress timeline" },
  { name: "header_wavebar", label: "Wave Bar", description: "Wavy animated header" },
  { name: "header_diagonalsplit", label: "Diagonal Split", description: "Diagonal split design" },
  { name: "header_scrollshrink", label: "Scroll Shrink", description: "Shrinking header on scroll" },
  { name: "header_centerreveal", label: "Center Reveal", description: "Center reveal effect" },
];

export default function HeaderSwitcher() {
  const [header, setHeader] = useState<string>(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("header") || "header_duallayer";
    }
    return "header_duallayer";
  });
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  // Apply header
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("header", header);
      // Dispatch custom event to notify layout of header change
      window.dispatchEvent(new CustomEvent("headerChange", { detail: header }));
    }
  }, [header]);

  // Close on outside click
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  const handleSelect = (name: string) => {
    setHeader(name);
    setOpen(false);
  };

  const currentLabel = headers.find((h) => h.name === header)?.label || header;

  return (
    <div ref={ref} className="fixed bottom-68 right-4 sm:right-6 z-50">
      {/* Floating toggle button */}
      <button
        onClick={() => setOpen((o) => !o)}
        title={`Header: ${currentLabel}`}
        className="rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-text)] shadow-md px-3 py-2 hover:bg-[var(--color-surface-alt)] transition-colors flex items-center gap-2 text-sm sm:text-base"
      >
        📐 <span className="hidden sm:inline">{currentLabel}</span>
      </button>

      {/* Palette dropdown */}
      {open && (
        <div className="absolute bottom-14 right-0 w-[90vw] max-w-[320px] max-h-[60vh] overflow-y-auto bg-[var(--color-surface)] border border-[var(--color-border)] shadow-2xl rounded-xl p-3 space-y-2">
          <h3 className="text-sm font-medium text-[var(--color-text-muted)] mb-1 px-1">Choose Header Style</h3>
          <div className="space-y-2">
            {headers.map((h) => {
              const isActive = h.name === header;
              return (
                <button
                  key={h.name}
                  onClick={() => handleSelect(h.name)}
                  className={`w-full flex flex-col gap-1 p-3 rounded-lg text-right transition-all ${
                    isActive
                      ? "bg-[var(--color-surface-alt)] border-2 border-[var(--color-accent)]"
                      : "hover:bg-[var(--color-surface-alt)] border-2 border-transparent"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-[var(--color-text)]">{h.label}</span>
                    {isActive && <span className="text-[var(--color-accent)]">✓</span>}
                  </div>
                  <span className="text-xs text-[var(--color-text-muted)]">{h.description}</span>
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
