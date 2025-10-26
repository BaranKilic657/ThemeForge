import React from "react";

export default function Header() {
  return (
    <header
      className="shadow-accent-hover fade-in"
      style={{
        position: "sticky",
        top: 0,
        zIndex: 1000,
        background: "color-mix(in srgb, var(--color-bg) 60%, transparent)",
        backdropFilter: "blur(8px)",
        WebkitBackdropFilter: "blur(8px)",
        height: 64,
      }}
    >
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
        <span className="text-main" style={{ fontWeight: 700, fontSize: 18 }}>
          Aurora
        </span>

        <nav
          style={{
            display: "flex",
            gap: 32,
            alignItems: "center",
            fontSize: 15,
          }}
        >
          <a href="#" className="text-accent-hover">
            Work
          </a>
          <a href="#" className="text-accent-hover">
            About
          </a>
          <a href="#" className="text-accent-hover">
            Journal
          </a>
          <a href="#" className="text-accent-hover">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
