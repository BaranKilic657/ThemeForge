"use client";
import { useState, useEffect, useRef } from "react";

type FooterInfo = {
  name: string;
  label: string;
  description: string;
};

const footers: FooterInfo[] = [
  { name: "footer_accentbar", label: "Accent Bar", description: "Pulsing accent strip" },
  { name: "footer_aurora", label: "Aurora", description: "Moving gradient background" },
  { name: "footer_centerlogo", label: "Center Logo", description: "Centered brand focus" },
  { name: "footer_classicgrid", label: "Classic Grid", description: "Traditional column layout" },
  { name: "footer_compactbar", label: "Compact Bar", description: "Minimalist single line" },
  { name: "footer_diagonalsplit", label: "Diagonal Split", description: "Angular split design" },
  { name: "footer_divideraccent", label: "Divider Accent", description: "Accent line separator" },
  { name: "footer_duallayer", label: "Dual Layer", description: "Layered depth effect" },
  { name: "footer_floatingcta", label: "Floating CTA", description: "Elevated call-to-action" },
  { name: "footer_glasspanel", label: "Glass Panel", description: "Glassmorphism effect" },
  { name: "footer_gradientwave", label: "Gradient Wave", description: "Wavy gradient overlay" },
  { name: "footer_interactivelinks", label: "Interactive Links", description: "Animated hover links" },
  { name: "footer_minimalcentered", label: "Minimal Centered", description: "Simple centered layout" },
  { name: "footer_mosaicgrid", label: "Mosaic Grid", description: "Creative grid pattern" },
  { name: "footer_newslettercta", label: "Newsletter CTA", description: "Email signup focus" },
  { name: "footer_scrollprogress", label: "Scroll Progress", description: "Progress indicator bar" },
  { name: "footer_showcasegrid", label: "Showcase Grid", description: "Rich content grid" },
  { name: "footer_splitaccent", label: "Split Accent", description: "Split color sections" },
  { name: "footer_stackedinfo", label: "Stacked Info", description: "Vertically stacked layout" },
  { name: "footer_taglinebar", label: "Tagline Bar", description: "Tagline with gradient" },
];

export default function FooterSwitcher() {
  const [footer, setFooter] = useState<string>(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("footer") || "footer_taglinebar";
    }
    return "footer_taglinebar";
  });
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  // Apply footer
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("footer", footer);
      // Dispatch custom event to notify layout of footer change
      window.dispatchEvent(new CustomEvent("footerChange", { detail: footer }));
    }
  }, [footer]);

  // Close on outside click
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  const handleSelect = (name: string) => {
    setFooter(name);
    setOpen(false);
  };

  const currentLabel = footers.find((f) => f.name === footer)?.label || footer;

  return (
    <div ref={ref} className="fixed bottom-20 right-4 sm:right-6 z-50">
      {/* Floating toggle button */}
      <button
        onClick={() => setOpen((o) => !o)}
        title={`Footer: ${currentLabel}`}
        className="rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-text)] shadow-md px-3 py-2 hover:bg-[var(--color-surface-alt)] transition-colors flex items-center gap-2 text-sm sm:text-base"
      >
        🦶 <span className="hidden sm:inline">{currentLabel}</span>
      </button>

      {/* Palette dropdown */}
      {open && (
        <div className="absolute bottom-14 right-0 w-[90vw] max-w-[320px] max-h-[60vh] overflow-y-auto bg-[var(--color-surface)] border border-[var(--color-border)] shadow-2xl rounded-xl p-3 space-y-2">
          <h3 className="text-sm font-medium text-[var(--color-text-muted)] mb-1 px-1">Choose Footer Style</h3>
          <div className="space-y-2">
            {footers.map((f) => {
              const isActive = f.name === footer;
              return (
                <button
                  key={f.name}
                  onClick={() => handleSelect(f.name)}
                  className={`w-full flex flex-col gap-1 p-3 rounded-lg text-right transition-all ${
                    isActive
                      ? "bg-[var(--color-surface-alt)] border-2 border-[var(--color-accent)]"
                      : "hover:bg-[var(--color-surface-alt)] border-2 border-transparent"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-[var(--color-text)]">{f.label}</span>
                    {isActive && <span className="text-[var(--color-accent)]">✓</span>}
                  </div>
                  <span className="text-xs text-[var(--color-text-muted)]">{f.description}</span>
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
