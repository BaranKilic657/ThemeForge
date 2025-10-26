import React from "react";

export default function Header() {
  return (
    <header
      className="bg-surface-alt shadow-accent-hover fade-in"
      style={{
        position: "sticky",
        top: 0,
        zIndex: 1000,
        height: 56,
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 20px",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Left zone */}
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div
            className="bg-gradient-secondary"
            style={{ width: 28, height: 28, borderRadius: 8 }}
          />
          <span className="text-main" style={{ fontWeight: 700 }}>
            FluxBoard
          </span>
        </div>

        {/* Middle nav icons */}
        <nav
          style={{
            display: "flex",
            gap: 24,
            alignItems: "center",
            fontSize: 14,
          }}
        >
          <a href="#" className="text-accent-hover">
            📊 Dashboard
          </a>
          <a href="#" className="text-accent-hover">
            🔔 Alerts
          </a>
          <a href="#" className="text-accent-hover">
            📁 Projects
          </a>
          <a href="#" className="text-accent-hover">
            ⚙️ Settings
          </a>
        </nav>

        {/* Right user action */}
        <button
          className="btn-gradient hover-lift"
          style={{
            padding: "8px 14px",
            borderRadius: 8,
            fontSize: 14,
          }}
        >
          + New
        </button>
      </div>
    </header>
  );
}
