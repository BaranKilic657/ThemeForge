import React from "react";

export default function Header() {
  return (
    <header
      className="bg-surface shadow-surface fade-in"
      style={{
        position: "sticky",
        top: 0,
        zIndex: 1000,
        borderBottom: "3px solid transparent",
        borderImage: "linear-gradient(90deg, var(--color-accent), var(--color-accent-hover)) 1",
      }}
    >
      <div
        className="pulse-accent"
        style={{
          height: 3,
          background: "linear-gradient(90deg, var(--color-accent), var(--color-accent-hover))",
          opacity: 0.7,
        }}
      />
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
          <div className="bg-gradient-secondary" style={{ width: 28, height: 28, borderRadius: 8 }} />
          <span className="text-main" style={{ fontWeight: 700 }}>PulseTech</span>
        </div>

        <nav style={{ display: "flex", gap: 28, fontSize: 15 }}>
          <a href="#" className="text-accent-hover">About</a>
          <a href="#" className="text-accent-hover">Solutions</a>
          <a href="#" className="text-accent-hover">Insights</a>
          <a href="#" className="text-accent-hover">Contact</a>
        </nav>
      </div>
    </header>
  );
}
