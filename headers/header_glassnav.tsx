import React from "react";

export default function Header() {
  const navStyle: React.CSSProperties = {
    display: "flex",
    gap: 28,
    fontSize: 14,
  };

  return (
    <header
      className="shadow-accent-hover fade-in"
      style={{
        position: "sticky",
        top: 0,
        zIndex: 1000,
        background: "color-mix(in srgb, var(--color-surface) 60%, transparent)",
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "12px 24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <div
            className="bg-gradient-secondary"
            style={{ width: 28, height: 28, borderRadius: 8 }}
          />
          <span className="text-main" style={{ fontWeight: 700 }}>
            Glassify
          </span>
        </div>

        <nav style={navStyle}>
          <a href="#" className="text-accent-hover">
            Dashboard
          </a>
          <a href="#" className="text-accent-hover">
            Templates
          </a>
          <a href="#" className="text-accent-hover">
            Marketplace
          </a>
          <a href="#" className="text-accent-hover">
            Docs
          </a>
        </nav>

        <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
          <button
            className="accent-outline hover-lift"
            style={{ padding: "8px 12px", borderRadius: 8 }}
          >
            Sign In
          </button>
          <button
            className="btn-gradient hover-lift"
            style={{ padding: "10px 14px", borderRadius: 10 }}
          >
            Create
          </button>
        </div>
      </div>
    </header>
  );
}
