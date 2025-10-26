import React from "react";

export default function Header() {
  return (
    <header
      className="bg-surface shadow-accent-hover fade-in"
      style={{
        position: "sticky",
        top: 0,
        zIndex: 1000,
        overflow: "hidden",
      }}
    >
      {/* Top Row */}
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 24px",
          height: 72,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div className="bg-gradient-accent" style={{ width: 28, height: 28, borderRadius: 8 }} />
          <span className="text-main" style={{ fontWeight: 700 }}>
            WaveLabs
          </span>
        </div>

        <nav style={{ display: "flex", gap: 28 }}>
          <a href="#" className="text-accent-hover">Work</a>
          <a href="#" className="text-accent-hover">Process</a>
          <a href="#" className="text-accent-hover">Team</a>
          <a href="#" className="text-accent-hover">Contact</a>
        </nav>
      </div>

      {/* Animated wave line */}
      <div
        className="bg-gradient-accent pulse-accent"
        style={{
          height: 6,
          animation: "float 4s ease-in-out infinite",
          opacity: 0.8,
        }}
      />
    </header>
  );
}
