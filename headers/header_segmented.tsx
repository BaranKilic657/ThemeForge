import React from "react";

export default function Header() {
  return (
    <header style={{ position: "sticky", top: 0, zIndex: 1000 }}>
      {/* Top utility bar */}
      <div
        className="bg-surface-alt border-base"
        style={{
          height: 36,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 24px",
        }}
      >
        <span className="text-muted" style={{ fontSize: 12 }}>
          Beta 2.3 is live
        </span>
        <div style={{ display: "flex", gap: 20, fontSize: 12 }}>
          <a href="#" className="text-accent-hover">Docs</a>
          <a href="#" className="text-accent-hover">Status</a>
          <a href="#" className="text-accent-hover">Community</a>
        </div>
      </div>

      {/* Main navigation bar */}
      <div className="bg-surface shadow-accent-hover" style={{ height: 68 }}>
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "0 24px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: "100%",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div className="bg-gradient-accent" style={{ width: 28, height: 28, borderRadius: 6 }} />
            <span className="text-main" style={{ fontWeight: 700 }}>Segmenta</span>
          </div>

          <nav style={{ display: "flex", gap: 28, fontSize: 14 }}>
            <a href="#" className="text-accent-hover">Overview</a>
            <a href="#" className="text-accent-hover">Components</a>
            <a href="#" className="text-accent-hover">Guides</a>
            <a href="#" className="text-accent-hover">Changelog</a>
          </nav>

          <button
            className="btn-gradient hover-lift"
            style={{ padding: "10px 14px", borderRadius: 10 }}
          >
            Get Started
          </button>
        </div>
      </div>
    </header>
  );
}
