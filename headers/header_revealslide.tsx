import React, { useState } from "react";

export default function Header() {
  const [expanded, setExpanded] = useState(false);

  return (
    <header
      className="bg-surface-alt shadow-accent-hover fade-in"
      style={{
        position: "sticky",
        top: 0,
        zIndex: 1000,
        overflow: "hidden",
        transition:
          "height var(--transition-speed) ease, background var(--transition-speed) ease",
        height: expanded ? 100 : 56,
        cursor: "pointer",
      }}
      onMouseEnter={() => setExpanded(true)}
      onMouseLeave={() => setExpanded(false)}
    >
      {/* Main Row */}
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: 56,
          transition: "transform var(--transition-speed) ease",
          transform: expanded ? "translateY(-3px)" : "translateY(0)",
        }}
      >
        {/* Logo */}
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div
            className="bg-gradient-accent"
            style={{ width: 28, height: 28, borderRadius: 8 }}
          />
          <span className="text-main" style={{ fontWeight: 700 }}>
            RevealX
          </span>
        </div>

        {/* Accent indicator */}
        <div
          className={`pulse-accent`}
          style={{
            display: "flex",
            alignItems: "center",
            gap: 6,
            transition: "transform var(--transition-speed) ease",
            transform: expanded ? "rotate(180deg)" : "rotate(0deg)",
          }}
        >
          <span
            className="text-accent"
            style={{ fontSize: 18, transition: "opacity var(--transition-speed) ease" }}
          >
            ▾
          </span>
        </div>
      </div>

      {/* Reveal Nav */}
      <nav
        className={`${expanded ? "fade-up" : ""} bg-surface border-base`}
        style={{
          height: expanded ? 44 : 0,
          overflow: "hidden",
          borderTop: expanded ? "1px solid var(--color-border)" : "none",
          transition: "height var(--transition-speed) ease",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 32,
          fontSize: 15,
        }}
      >
        <a href="#" className="text-accent-hover">
          Home
        </a>
        <a href="#" className="text-accent-hover">
          Projects
        </a>
        <a href="#" className="text-accent-hover">
          Services
        </a>
        <a href="#" className="text-accent-hover">
          Contact
        </a>
      </nav>
    </header>
  );
}
