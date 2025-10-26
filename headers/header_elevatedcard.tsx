import React from "react";

export default function Header() {
  return (
    <header
      className="shadow-surface fade-up"
      style={{
        position: "sticky",
        top: 12,
        zIndex: 1000,
        width: "90%",
        maxWidth: 1100,
        margin: "0 auto",
        borderRadius: 16,
        overflow: "hidden",
        background: "var(--color-surface)",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "12px 24px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <div className="bg-gradient-secondary" style={{ width: 28, height: 28, borderRadius: 8 }} />
          <span className="text-main" style={{ fontWeight: 700 }}>Elevate</span>
        </div>

        <nav style={{ display: "flex", gap: 24, fontSize: 14 }}>
          <a href="#" className="text-accent-hover">Features</a>
          <a href="#" className="text-accent-hover">Pricing</a>
          <a href="#" className="text-accent-hover">Integrations</a>
          <a href="#" className="text-accent-hover">Support</a>
        </nav>

        <button
          className="btn-gradient hover-lift"
          style={{
            padding: "10px 16px",
            borderRadius: 10,
          }}
        >
          Try Free
        </button>
      </div>
    </header>
  );
}
