import React from "react";

export default function Header() {
  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 1000,
        height: 80,
        background: `
          linear-gradient(135deg,
            var(--color-surface) 50%,
            var(--color-accent-hover) 50%
          )
        `,
        color: "var(--color-surface)",
      }}
      className="shadow-accent fade-in"
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 24px",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <span className="text-main" style={{ fontWeight: 800, fontSize: 20 }}>
          Diagon
        </span>

        <nav style={{ display: "flex", gap: 28, fontSize: 15, color: "var(--color-surface)" }}>
          <a href="#" className="">Studio</a>
          <a href="#" className="">Projects</a>
          <a href="#" className="">Clients</a>
          <a href="#" className="">Hire Us</a>
        </nav>
      </div>
    </header>
  );
}
