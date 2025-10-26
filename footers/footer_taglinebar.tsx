import React from "react";

export default function Footer() {
  return (
    <footer className="fade-up" style={{ textAlign: "center" }}>
      {/* Tagline Bar */}
      <div
        className="bg-gradient-accent"
        style={{
          padding: "28px 24px",
          color: "var(--color-surface)",
          fontWeight: 700,
          fontSize: 20,
          letterSpacing: "0.5px",
        }}
      >
        Creating clarity in a connected world.
      </div>

      {/* Content */}
      <div
        className="bg-surface-alt"
        style={{
          padding: "60px 24px 40px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 32,
            flexWrap: "wrap",
            marginBottom: 24,
          }}
        >
          <a href="#" className="text-accent-hover">About</a>
          <a href="#" className="text-accent-hover">Work</a>
          <a href="#" className="text-accent-hover">Team</a>
          <a href="#" className="text-accent-hover">Contact</a>
        </div>

        <p className="text-muted" style={{ fontSize: 13 }}>
          © {new Date().getFullYear()} Clarity Works. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
