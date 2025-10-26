import React from "react";

export default function Header() {
  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 1000,
        display: "flex",
        alignItems: "stretch",
        height: 72,
      }}
    >
      {/* Left: Accent zone */}
      <div
        className="bg-gradient-accent text-surface"
        style={{
          flex: "0 0 280px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 10,
        }}
      >
        <div
          className="preview-secondary"
          style={{ width: 34, height: 34, borderRadius: 10 }}
        />
        <span style={{ fontWeight: 800, fontSize: 18 }}>Auralink</span>
      </div>

      {/* Right: Light zone */}
      <div
        className="bg-surface shadow-surface"
        style={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 24px",
        }}
      >
        <nav style={{ display: "flex", gap: 28, fontSize: 14 }}>
          <a href="#" className="text-accent-hover">
            Services
          </a>
          <a href="#" className="text-accent-hover">
            Portfolio
          </a>
          <a href="#" className="text-accent-hover">
            Blog
          </a>
          <a href="#" className="text-accent-hover">
            Contact
          </a>
        </nav>

        <button
          className="btn-gradient hover-lift"
          style={{ padding: "10px 16px", borderRadius: 10 }}
        >
          Start Project
        </button>
      </div>
    </header>
  );
}
