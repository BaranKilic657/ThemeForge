"use client";
import { useState, useEffect, useRef } from "react";

type PageInfo = {
  name: string;
  label: string;
  description: string;
};

type CategoryInfo = {
  name: string;
  icon: string;
  pages: PageInfo[];
};

const categories: CategoryInfo[] = [
  {
    name: "Showcase",
    icon: "⭐",
    pages: [{ name: "showcase", label: "Showcase", description: "Theme system demo page" }],
  },
  {
    name: "Home Pages",
    icon: "🏠",
    pages: [
      { name: "home_1", label: "Home 1", description: "Horizontal scroll cards" },
      { name: "home_2", label: "Home 2", description: "Vertical timeline layout" },
      { name: "home_3", label: "Home 3", description: "Diagonal split sections" },
      { name: "home_4", label: "Home 4", description: "Editorial bento grid" },
      { name: "home_5", label: "Home 5", description: "Story sections alternating" },
      { name: "home_6", label: "Home 6", description: "Split-screen rotated cards" },
      { name: "home_7", label: "Home 7", description: "Mosaic grid tiles" },
      { name: "home_8", label: "Home 8", description: "Stacked card deck with tabs" },
      { name: "home_9", label: "Home 9", description: "Full-width alternating splits" },
      { name: "home_10", label: "Home 10", description: "Aurora animated gradient" },
      { name: "home_11", label: "Home 11", description: "Sticky scroll storytelling" },
      { name: "home_12", label: "Home 12", description: "Glassmorphism frosted UI" },
      { name: "home_13", label: "Home 13", description: "Interactive accordions" },
      { name: "home_14", label: "Home 14", description: "Isometric 3D cards" },
      { name: "home_15", label: "Home 15", description: "Progress bars & metrics" },
    ],
  },
  {
    name: "About Pages",
    icon: "👥",
    pages: [
      { name: "about_1", label: "About 1", description: "Team & mission focused" },
      { name: "about_2", label: "About 2", description: "Story-driven layout" },
      { name: "about_3", label: "About 3", description: "Data-driven with tabs" },
      { name: "about_4", label: "About 4", description: "Timeline journey" },
      { name: "about_5", label: "About 5", description: "Founder letter format" },
      { name: "about_6", label: "About 6", description: "Visual manifest blocks" },
      { name: "about_7", label: "About 7", description: "Interactive split panels" },
      { name: "about_8", label: "About 8", description: "Stacked card showcase" },
      { name: "about_9", label: "About 9", description: "Diagonal magazine grid" },
      { name: "about_10", label: "About 10", description: "Masonry timeline layout" },
    ],
  },
  {
    name: "Service Pages",
    icon: "💼",
    pages: [
      { name: "services_1", label: "Services 1", description: "Comprehensive service grid" },
      { name: "services_2", label: "Services 2", description: "Interactive tabbed services" },
      { name: "services_3", label: "Services 3", description: "Pricing tiers & comparison" },
      { name: "services_4", label: "Services 4", description: "Process showcase & table" },
      { name: "services_5", label: "Services 5", description: "Testimonials & tech stack" },
      { name: "services_6", label: "Services 6", description: "Hover cards & case studies" },
      { name: "services_7", label: "Services 7", description: "Large numbered blocks" },
      { name: "services_8", label: "Services 8", description: "FAQ accordion & packages" },
      { name: "services_9", label: "Services 9", description: "Split screen hero & grid" },
      { name: "services_10", label: "Services 10", description: "Tabbed pricing & reviews" },
    ],
  },
];

export default function PageSwitcher() {
  const [page, setPage] = useState<string>(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("page") || "showcase";
    }
    return "showcase";
  });
  const [open, setOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
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
    setActiveCategory(null);
  };

  // Find current page label
  const allPages = categories.flatMap((c) => c.pages);
  const currentLabel = allPages.find((p) => p.name === page)?.label || page;

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
        <div className="absolute bottom-14 right-0 w-[90vw] max-w-[480px] max-h-[70vh] overflow-y-auto bg-[var(--color-surface)] border border-[var(--color-border)] shadow-2xl rounded-xl p-4">
          <h3 className="text-sm font-medium text-[var(--color-text-muted)] mb-3 px-1">
            Choose Page
          </h3>

          {/* Quick Filter Buttons */}
          <div className="mb-4 pb-3 border-b border-[var(--color-border)] flex gap-2">
            <button
              onClick={() => setActiveCategory(null)}
              className={`flex-1 px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                activeCategory === null
                  ? "bg-[var(--color-accent)] text-[var(--color-surface)]"
                  : "bg-[var(--color-surface-alt)] hover:bg-[var(--color-accent)] hover:text-[var(--color-surface)]"
              }`}
            >
              Show All
            </button>
            <button
              onClick={() =>
                setActiveCategory(activeCategory === "Home Pages" ? null : "Home Pages")
              }
              className={`flex-1 px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                activeCategory === "Home Pages"
                  ? "bg-[var(--color-accent)] text-[var(--color-surface)]"
                  : "bg-[var(--color-surface-alt)] hover:bg-[var(--color-accent)] hover:text-[var(--color-surface)]"
              }`}
            >
              🏠 Home
            </button>
            <button
              onClick={() =>
                setActiveCategory(activeCategory === "About Pages" ? null : "About Pages")
              }
              className={`flex-1 px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                activeCategory === "About Pages"
                  ? "bg-[var(--color-accent)] text-[var(--color-surface)]"
                  : "bg-[var(--color-surface-alt)] hover:bg-[var(--color-accent)] hover:text-[var(--color-surface)]"
              }`}
            >
              👥 About
            </button>
            <button
              onClick={() =>
                setActiveCategory(activeCategory === "Service Pages" ? null : "Service Pages")
              }
              className={`flex-1 px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                activeCategory === "Service Pages"
                  ? "bg-[var(--color-accent)] text-[var(--color-surface)]"
                  : "bg-[var(--color-surface-alt)] hover:bg-[var(--color-accent)] hover:text-[var(--color-surface)]"
              }`}
            >
              💼 Services
            </button>
          </div>

          {/* Category Grid */}
          <div className="grid grid-cols-2 gap-3">
            {categories.map((category) => (
              <div key={category.name} className="space-y-2">
                {/* Category Header */}
                <button
                  onClick={() =>
                    setActiveCategory(activeCategory === category.name ? null : category.name)
                  }
                  className="w-full bg-[var(--color-surface-alt)] hover:bg-[var(--color-accent)] hover:text-[var(--color-surface)] transition-colors rounded-lg px-3 py-2 flex items-center gap-2 text-sm font-semibold"
                >
                  <span>{category.icon}</span>
                  <span>{category.name}</span>
                  <span className="ml-auto text-xs opacity-70">
                    {category.pages.length}
                  </span>
                </button>

                {/* Pages in category - 2 column grid */}
                {(activeCategory === category.name || activeCategory === null) && (
                  <div className="grid grid-cols-2 gap-1">
                    {category.pages.map((p) => {
                      const isActive = p.name === page;
                      return (
                        <button
                          key={p.name}
                          onClick={() => handleSelect(p.name)}
                          className={`w-full flex flex-col gap-0.5 px-2 py-1.5 rounded-lg text-left transition-all ${
                            isActive
                              ? "bg-[var(--color-accent)] text-[var(--color-surface)]"
                              : "hover:bg-[var(--color-surface-alt)] border border-transparent"
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <span className="font-medium text-xs">{p.label}</span>
                            {isActive && <span className="text-[10px]">✓</span>}
                          </div>
                          <span
                            className={`text-[9px] leading-tight ${
                              isActive ? "opacity-90" : "text-[var(--color-text-muted)]"
                            }`}
                          >
                            {p.description}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
