"use client";
import Image from "next/image";

export default function ThemeShowcase() {
  return (
    <div className="flex min-h-screen flex-col bg-surface font-sans text-main transition-colors overflow-x-hidden">
      {/* Header */}
      <header className="bg-surface-alt shadow-surface py-12 sm:py-16 text-center fade-in px-4">
        <Image
          src="/next.svg"
          alt="Next.js logo"
          width={100}
          height={20}
          priority
          className="mx-auto mb-4 invert-[var(--invert-logo,0)]"
        />
        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-highlight mb-3">
          Theme System Showcase
        </h1>
        <p className="text-base sm:text-lg text-muted max-w-xl mx-auto px-4">
          Explore how each color, layer, and effect behaves under different themes.
          Click the 🎨 button to switch between themes.
        </p>
      </header>

      {/* Main Content */}
      <main className="flex flex-col gap-12 sm:gap-20 py-12 sm:py-20 px-4 sm:px-8 md:px-16 lg:px-32 bg-surface-gradient transition-colors">
        {/* Section 1: Base Surfaces */}
        <section className="fade-in">
          <h2 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6">1. Surfaces & Layers</h2>
          <div className="grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-2xl p-8 bg-surface shadow-surface hover-lift">
              <h3 className="text-lg font-medium mb-2">Surface</h3>
              <p className="text-muted text-sm">
                .bg-surface — the primary layer behind most content.
              </p>
            </div>
            <div className="rounded-2xl p-8 bg-surface-alt shadow-surface hover-lift">
              <h3 className="text-lg font-medium mb-2">Surface Alt</h3>
              <p className="text-muted text-sm">
                .bg-surface-alt — a contrast layer for cards and side panels.
              </p>
            </div>
            <div className="rounded-2xl p-8 bg-surface-gradient shadow-surface hover-lift">
              <h3 className="text-lg font-medium mb-2">Surface Gradient</h3>
              <p className="text-muted text-sm">
                .bg-surface-gradient — subtle depth gradient from surface → alt.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Text Hierarchy */}
        <section className="fade-in">
          <h2 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6">2. Text Colors</h2>
          <div className="space-y-3 sm:space-y-4 bg-surface-alt rounded-2xl p-6 sm:p-8">
            <p className="text-main text-lg">.text-main → Main text</p>
            <p className="text-muted text-lg">.text-muted → Muted / Secondary</p>
            <p className="text-accent text-lg">.text-accent → Accent color</p>
            <p className="text-highlight text-lg font-semibold">
              .text-highlight → Gradient highlight text
            </p>
            <p className="text-accent-hover">Hover over this text</p>
          </div>
        </section>

        {/* Section 3: Buttons & Accents */}
        <section className="fade-in">
          <h2 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6">3. Buttons & Accents</h2>
          <div className="flex flex-wrap gap-3 sm:gap-6 bg-surface-alt rounded-2xl p-6 sm:p-8 shadow-surface justify-center">
            <button className="accent px-6 py-3 rounded-full font-medium hover-lift">
              Primary Action
            </button>
            <button className="accent-outline px-6 py-3 rounded-full font-medium hover-lift">
              Accent Outline
            </button>
            <button className="btn-gradient px-6 py-3 rounded-full font-medium hover-lift">
              Gradient Accent
            </button>
            <button className="btn-gradient-secondary px-6 py-3 rounded-full font-medium hover-lift">
              Gradient Secondary
            </button>
          </div>
        </section>

        {/* Section 4: Borders & Shadows */}
        <section className="fade-in">
          <h2 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6">4. Borders & Depth</h2>
          <div className="grid gap-4 sm:gap-6 md:grid-cols-2">
            <div className="border border-base rounded-2xl p-8 bg-surface hover-lift">
              <h3 className="text-lg font-medium mb-2">.border-base</h3>
              <p className="text-muted">Subtle neutral border.</p>
            </div>
            <div className="border border-accent rounded-2xl p-8 bg-surface hover-lift">
              <h3 className="text-lg font-medium mb-2">.border-accent</h3>
              <p className="text-muted">Highlight border using accent color.</p>
            </div>
          </div>

          <div className="grid gap-4 sm:gap-6 md:grid-cols-2 mt-4 sm:mt-6">
            <div className="shadow-surface rounded-2xl p-8 bg-surface-alt hover-lift">
              <h3 className="text-lg font-medium mb-2">.shadow-surface</h3>
              <p className="text-muted">Soft natural elevation for surfaces.</p>
            </div>
            <div className="shadow-accent rounded-2xl p-8 bg-surface-alt hover-lift">
              <h3 className="text-lg font-medium mb-2">.shadow-accent</h3>
              <p className="text-muted">Elevated accent-colored shadow glow.</p>
            </div>
            <div className="bg-surface-alt rounded-2xl p-8 shadow-accent-hover hover-lift transition-all">
  <h3 className="text-lg font-medium mb-2">.shadow-accent-hover</h3>
  <p className="text-muted text-sm">Reveals an accent glow on hover.</p>
</div>
          </div>
        </section>

        {/* Section 5: Accent Gradients */}
        <section className="fade-in">
          <h2 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6">5. Accent Gradients</h2>
          <div className="grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="preview-accent rounded-2xl p-8 hover-lift">
              <h3 className="text-lg font-medium mb-2">.preview-accent</h3>
              <p className="text-surface">Accent → Hover gradient.</p>
            </div>
            <div className="preview-secondary rounded-2xl p-8 hover-lift">
              <h3 className="text-lg font-medium mb-2">.preview-secondary</h3>
              <p className="text-surface">Secondary → Accent gradient.</p>
            </div>
            <div className="preview-gradient rounded-2xl p-8 hover-lift">
              <h3 className="text-lg font-medium mb-2">.preview-gradient</h3>
              <p className="text-main">Background → Surface Alt gradient.</p>
            </div>
            <div className="bg-gradient-accent rounded-2xl p-8 text-surface hover-lift">
              .bg-gradient-accent
            </div>
            <div className="bg-gradient-secondary rounded-2xl p-8 text-surface hover-lift">
              .bg-gradient-secondary
            </div>
          </div>
        </section>

        {/* Section 6: Info / Variables */}
        <section className="fade-in">
          <h2 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6">6. Theme Variables</h2>
          <div className="bg-surface-alt rounded-2xl p-6 sm:p-8 text-sm text-muted shadow-surface">
            <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
              <div>Background: <span className="text-main">var(--color-bg)</span></div>
              <div>Surface: <span className="text-main">var(--color-surface)</span></div>
              <div>Accent: <span className="text-main">var(--color-accent)</span></div>
              <div>Text: <span className="text-main">var(--color-text)</span></div>
              <div>Border: <span className="text-main">var(--color-border)</span></div>
              <div>Transition: <span className="text-main">var(--transition-speed)</span></div>
            </div>
          </div>
        </section>
      </main>

    </div>
  );
}
