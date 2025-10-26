import React from "react";

export default function Header() {
  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 1000,
      }}
    >
      {/* Back translucent layer */}
      <div
        className="bg-surface-gradient"
        style={{
          height: 80,
          opacity: 0.8,
          transform: "translateY(-4px)",
          filter: "blur(6px)",
        }}
      />

      {/* Front interactive layer */}
      <div
        className="bg-surface shadow-accent-hover fade-in"
        style={{
          height: 70,
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 28px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div className="bg-gradient-accent" style={{ width: 28, height: 28, borderRadius: 8 }} />
          <span className="text-main" style={{ fontWeight: 700 }}>Parallax</span>
        </div>

        <nav style={{ display: "flex", gap: 28, fontSize: 14 }}>
          <a href="#" className="text-accent-hover">Overview</a>
          <a href="#" className="text-accent-hover">Gallery</a>
          <a href="#" className="text-accent-hover">Team</a>
          <a href="#" className="text-accent-hover">Careers</a>
        </nav>
      </div>
    </header>
  );
}
