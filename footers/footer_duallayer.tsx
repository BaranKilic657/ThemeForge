import React from "react";

export default function Footer() {
  return (
    <footer className="fade-up" style={{ position: "relative" }}>
      {/* Upper layer */}
      <div
        className="bg-gradient-accent shadow-accent"
        style={{
          padding: "60px 24px",
          color: "var(--color-surface)",
          textAlign: "center",
        }}
      >
        <h2 style={{ fontWeight: 800, fontSize: 24 }}>Let’s build something together</h2>
        <p style={{ opacity: 0.9, marginBottom: 20 }}>
          Partner with us to craft digital products with impact.
        </p>
        <button
          className="accent-outline hover-lift"
          style={{
            borderRadius: 10,
            padding: "10px 18px",
            fontWeight: 500,
            color: "var(--color-surface)",
            borderColor: "var(--color-surface)",
          }}
        >
          Get in Touch
        </button>
      </div>

      {/* Lower layer */}
      <div
        className="bg-surface-alt"
        style={{
          padding: "32px 24px",
          textAlign: "center",
          fontSize: 14,
        }}
      >
        <p className="text-muted">
          © {new Date().getFullYear()} Axis Digital. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
