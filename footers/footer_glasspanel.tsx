import React from "react";

export default function Footer() {
  return (
    <footer
      className="shadow-accent-hover fade-up"
      style={{
        position: "relative",
        background: "rgba(255, 255, 255, 0.05)",
        backdropFilter: "blur(14px)",
        WebkitBackdropFilter: "blur(14px)",
        borderTop: "1px solid color-mix(in srgb, var(--color-border) 80%, transparent)",
        padding: "60px 24px 40px",
        overflow: "hidden",
      }}
    >
      {/* Subtle glowing top border */}
      <div
        className="bg-gradient-accent"
        style={{
          height: 3,
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          opacity: 0.9,
        }}
      />

      <div
        style={{
          maxWidth: "1000px",
          margin: "0 auto",
          textAlign: "center",
          position: "relative",
          zIndex: 1,
        }}
      >
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 10,
            marginBottom: 16,
          }}
        >
          <div
            className="bg-gradient-secondary"
            style={{
              width: 32,
              height: 32,
              borderRadius: 10,
              boxShadow: "0 0 12px var(--color-accent-hover)",
            }}
          />
          <span className="text-main" style={{ fontWeight: 700, fontSize: 20 }}>
            Glasmind
          </span>
        </div>

        <p className="text-muted" style={{ maxWidth: 500, margin: "0 auto 24px" }}>
          Designing clarity and depth into every digital surface.
        </p>

        <div style={{ display: "flex", justifyContent: "center", gap: 28, fontSize: 15 }}>
          <a href="#" className="text-accent-hover">Privacy</a>
          <a href="#" className="text-accent-hover">Terms</a>
          <a href="#" className="text-accent-hover">Support</a>
        </div>
      </div>

      <p
        className="text-muted"
        style={{
          marginTop: 40,
          textAlign: "center",
          fontSize: 13,
          opacity: 0.8,
        }}
      >
        © {new Date().getFullYear()} Glasmind Studios
      </p>
    </footer>
  );
}
