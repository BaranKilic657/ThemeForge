"use client";
import { useState, useEffect, useRef } from "react";

type ThemeInfo = {
  name: string;
  label: string;
  accent: string;
  bg: string;
  darkBg: string;
};

const themes: ThemeInfo[] = [
  { name: "modern-light", label: "Modern Light", accent: "#2563eb", bg: "#f9fafb", darkBg: "#0f1115" },
  { name: "modern-dark", label: "Modern Dark", accent: "#2563eb", bg: "#0f1115", darkBg: "#f9fafb" },
  { name: "pastel-light", label: "Pastel Light", accent: "#ec4899", bg: "#ffffff", darkBg: "#1a171c" },
  { name: "pastel-dark", label: "Pastel Dark", accent: "#ec4899", bg: "#1a171c", darkBg: "#ffffff" },
  { name: "tech-light", label: "Tech Light", accent: "#0ea5e9", bg: "#f9fafb", darkBg: "#0b0f14" },
  { name: "tech-dark", label: "Tech Dark", accent: "#0ea5e9", bg: "#0b0f14", darkBg: "#f9fafb" },
  { name: "organic-light", label: "Organic Light", accent: "#22c55e", bg: "#fafaf9", darkBg: "#0f1210" },
  { name: "organic-dark", label: "Organic Dark", accent: "#22c55e", bg: "#0f1210", darkBg: "#fafaf9" },
  { name: "editorial-light", label: "Editorial Light", accent: "#e11d48", bg: "#fcfcfc", darkBg: "#111010" },
  { name: "editorial-dark", label: "Editorial Dark", accent: "#e11d48", bg: "#111010", darkBg: "#fcfcfc" },
  { name: "cosmic-light", label: "Cosmic Light", accent: "#8b5cf6", bg: "#f8f9ff", darkBg: "#0a0b17" },
  { name: "cosmic-dark", label: "Cosmic Dark", accent: "#8b5cf6", bg: "#0a0b17", darkBg: "#f8f9ff" },
  { name: "aqua-light", label: "Aqua Light", accent: "#06b6d4", bg: "#f7fdfc", darkBg: "#081211" },
  { name: "aqua-dark", label: "Aqua Dark", accent: "#06b6d4", bg: "#081211", darkBg: "#f7fdfc" },
  { name: "velvet-light", label: "Velvet Light", accent: "#7e22ce", bg: "#f9f8fb", darkBg: "#0e0a12" },
  { name: "velvet-dark", label: "Velvet Dark", accent: "#7e22ce", bg: "#0e0a12", darkBg: "#f9f8fb" },
  { name: "dawn-light", label: "Dawn Light", accent: "#f59e0b", bg: "#fffdfa", darkBg: "#12100e" },
  { name: "dawn-dark", label: "Dawn Dark", accent: "#f59e0b", bg: "#12100e", darkBg: "#fffdfa" },
  { name: "prism-light", label: "Prism Light", accent: "#8b5cf6", bg: "#f8fbff", darkBg: "#070912" },
  { name: "prism-dark", label: "Prism Dark", accent: "#8b5cf6", bg: "#070912", darkBg: "#f8fbff" },
  { name: "cobalt-light",   label: "Cobalt Light",   accent: "#2563eb", bg: "#f7f9fe", darkBg: "#0a1020" },
  { name: "cobalt-dark",    label: "Cobalt Dark",    accent: "#60a5fa", bg: "#0a1020", darkBg: "#f7f9fe" },
  { name: "patina-light",   label: "Patina Light",   accent: "#10b981", bg: "#fafcfb", darkBg: "#0b1311" },
  { name: "patina-dark",    label: "Patina Dark",    accent: "#34d399", bg: "#0b1311", darkBg: "#fafcfb" },
  { name: "terminal-light", label: "Terminal Light", accent: "#16a34a", bg: "#f6f7f6", darkBg: "#0b0f0c" },
  { name: "terminal-dark",  label: "Terminal Dark",  accent: "#22c55e", bg: "#0b0f0c", darkBg: "#f6f7f6" },
  { name: "sakura-light",   label: "Sakura Light",   accent: "#ef849f", bg: "#fffdfd", darkBg: "#131013" },
  { name: "sakura-dark",    label: "Sakura Dark",    accent: "#fda4af", bg: "#131013", darkBg: "#fffdfd" },
  { name: "magma-light",    label: "Magma Light",    accent: "#e11d48", bg: "#fff8f8", darkBg: "#100b0d" },
  { name: "magma-dark",     label: "Magma Dark",     accent: "#fb7185", bg: "#100b0d", darkBg: "#fff8f8" },
  { name: "graphpaper-light", label: "Graphpaper Light", accent: "#111827", bg: "#fbfbfb", darkBg: "#0d0d0d" },
  { name: "graphpaper-dark",  label: "Graphpaper Dark",  accent: "#e5e5e5", bg: "#0d0d0d", darkBg: "#fbfbfb" },
  { name: "miami-light",    label: "Miami Light",    accent: "#ec4899", bg: "#fffdfb", darkBg: "#120f16" },
  { name: "miami-dark",     label: "Miami Dark",     accent: "#fb7185", bg: "#120f16", darkBg: "#fffdfb" },
  { name: "hologram-light", label: "Hologram Light", accent: "#a855f7", bg: "#f9f9fa", darkBg: "#0f0f11" },
  { name: "hologram-dark",  label: "Hologram Dark",  accent: "#c084fc", bg: "#0f0f11", darkBg: "#f9f9fa" },
  { name: "cafe-light",     label: "Cafe Light",     accent: "#b45309", bg: "#fefcfb", darkBg: "#110d0b" },
  { name: "cafe-dark",      label: "Cafe Dark",      accent: "#f59e0b", bg: "#110d0b", darkBg: "#fefcfb" },
  { name: "solarink-light", label: "Solarink Light", accent: "#b58900", bg: "#fdf6e3", darkBg: "#002b36" },
  { name: "solarink-dark",  label: "Solarink Dark",  accent: "#b58900", bg: "#002b36", darkBg: "#fdf6e3" },

];

export default function ThemeSwitcher() {
  const [theme, setTheme] = useState<string>(() => "modern-light");
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  // Apply theme
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Close on outside click
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  const handleSelect = (name: string) => {
    setTheme(name);
    setOpen(false);
  };

  const currentLabel = themes.find((t) => t.name === theme)?.label || theme;

  return (
    <div ref={ref} className="fixed bottom-6 right-6 z-50">
      {/* Floating toggle button */}
      <button
        onClick={() => setOpen((o) => !o)}
        title={`Theme: ${currentLabel}`}
        className="rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-text)] shadow-md px-3 py-2 hover:bg-[var(--color-surface-alt)] transition-colors flex items-center gap-2"
      >
        🎨 <span className="hidden sm:inline">{currentLabel}</span>
      </button>

      {/* Palette dropdown */}
      {open && (
        <div className="absolute bottom-14 right-0 w-72 max-h-[60vh] overflow-y-auto bg-[var(--color-surface)] border border-[var(--color-border)] shadow-2xl rounded-xl p-3 space-y-2">
          <h3 className="text-sm font-medium text-[var(--color-text-muted)] mb-1 px-1">Choose Theme</h3>
          <div className="grid grid-cols-2 gap-2">
            {themes.map((t) => {
              const isActive = t.name === theme;
              return (
                <button
                  key={t.name}
                  onClick={() => handleSelect(t.name)}
                  className={`flex items-center gap-2 p-2 rounded-lg text-left transition-all ${
                    isActive
                      ? "bg-[var(--color-surface-alt)] scale-[1.02]"
                      : "hover:bg-[var(--color-surface-alt)]"
                  }`}
                >
                  <div
                    className="flex-none w-8 h-8 rounded-full border border-[var(--color-border)] shadow-sm"
                    style={{
                      background: `linear-gradient(135deg, ${t.bg} 50%, ${t.accent} 50%)`,
                    }}
                  />
                  <div className="flex flex-col text-xs leading-tight text-[var(--color-text)]">
                    <span className="font-medium">{t.label}</span>
                    <span className="opacity-70">{t.name.includes("dark") ? "Dark" : "Light"}</span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
