"use client";
import { useState, useEffect, useRef } from "react";

type PageInfo = {
  name: string;
  label: string;
  description: string;
};

const pages: PageInfo[] = [
  { name: "showcase", label: "Showcase", description: "Theme system demo page" },
  { name: "home_1", label: "Home 1", description: "Creative agency layout" },
  { name: "home_2", label: "Home 2", description: "Minimal studio design" },
  { name: "home_3", label: "Home 3", description: "Floating accent hero" },
  { name: "home_4", label: "Home 4", description: "Modern portfolio" },
  { name: "home_5", label: "Home 5", description: "Storytelling design" },
  { name: "home_6", label: "Home 6", description: "Bold typography" },
  { name: "home_7", label: "Home 7", description: "Grid showcase" },
  { name: "home_8", label: "Home 8", description: "Clean & professional" },
  { name: "home_9", label: "Home 9", description: "Interactive experience" },
  { name: "home_10", label: "Home 10", description: "Ambient gradient hero" },
  { name: "about_1", label: "About 1", description: "Team & mission focused" },
  { name: "about_2", label: "About 2", description: "Story-driven layout" },
  { name: "about_3", label: "About 3", description: "Values showcase" },
  { name: "about_4", label: "About 4", description: "Timeline journey" },
  { name: "about_5", label: "About 5", description: "Culture & people" },
  { name: "about_6", label: "About 6", description: "Visual impact" },
];

export default function PageSwitcher() {
  const [page, setPage] = useState<string>(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("page") || "showcase";
    }
    return "showcase";
  });
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  // Apply page
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("page", page);
      // Dispatch custom event to notify layout of page change
      window.dispatchEvent(new CustomEvent("pageChange", { detail: page }));
    }
  }, [page]);

  // Close on outside click
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  const handleSelect = (name: string) => {
    setPage(name);
    setOpen(false);
  };

  const currentLabel = pages.find((p) => p.name === page)?.label || page;

  return (
    <div ref={ref} className="fixed bottom-52 right-4 sm:right-6 z-50">
      {/* Floating toggle button */}
      <button
        onClick={() => setOpen((o) => !o)}
        title={`Page: ${currentLabel}`}
        className="rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-text)] shadow-md px-3 py-2 hover:bg-[var(--color-surface-alt)] transition-colors flex items-center gap-2 text-sm sm:text-base"
      >
        📄 <span className="hidden sm:inline">{currentLabel}</span>
      </button>

      {/* Palette dropdown */}
      {open && (
        <div className="absolute bottom-14 right-0 w-[90vw] max-w-[320px] max-h-[60vh] overflow-y-auto bg-[var(--color-surface)] border border-[var(--color-border)] shadow-2xl rounded-xl p-3 space-y-2">
          <h3 className="text-sm font-medium text-[var(--color-text-muted)] mb-1 px-1">Choose Page</h3>
          <div className="space-y-2">
            {pages.map((p) => {
              const isActive = p.name === page;
              return (
                <button
                  key={p.name}
                  onClick={() => handleSelect(p.name)}
                  className={`w-full flex flex-col gap-1 p-3 rounded-lg text-right transition-all ${
                    isActive
                      ? "bg-[var(--color-surface-alt)] border-2 border-[var(--color-accent)]"
                      : "hover:bg-[var(--color-surface-alt)] border-2 border-transparent"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-[var(--color-text)]">{p.label}</span>
                    {isActive && <span className="text-[var(--color-accent)]">✓</span>}
                  </div>
                  <span className="text-xs text-[var(--color-text-muted)]">{p.description}</span>
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
