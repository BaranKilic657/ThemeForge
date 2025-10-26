import React, { useEffect, useState } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="bg-surface shadow-surface fade-in"
      style={{
        position: "sticky",
        top: 0,
        zIndex: 1000,
        transition:
          "height var(--transition-speed) ease, transform var(--transition-speed) ease",
        height: scrolled ? 56 : 80,
        transform: scrolled ? "scale(0.98)" : "scale(1)",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 24px",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div className="bg-gradient-secondary" style={{ width: 28, height: 28, borderRadius: 8 }} />
          <span className="text-main" style={{ fontWeight: 700 }}>
            Scrolla
          </span>
        </div>

        <nav style={{ display: "flex", gap: 28 }}>
          <a href="#" className="text-accent-hover">Features</a>
          <a href="#" className="text-accent-hover">Pricing</a>
          <a href="#" className="text-accent-hover">Docs</a>
          <a href="#" className="text-accent-hover">Support</a>
        </nav>
      </div>
    </header>
  );
}
