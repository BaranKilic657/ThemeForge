import React from "react";

export default function Footer() {
  return (
    <footer
      className="bg-surface-alt fade-in"
      style={{
        padding: "80px 24px 40px",
        textAlign: "center",
        position: "relative",
      }}
    >

      <div style={{ position: "relative", zIndex: 1 }}>
        <div
          className="hover-lift shadow-accent"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 10,
            borderRadius: 14,
            padding: "10px 20px",
            background: "var(--color-surface)",
            marginBottom: 20,
          }}
        >
          <div
            className="bg-gradient-accent"
            style={{ width: 32, height: 32, borderRadius: 8 }}
          />
          <span className="text-main" style={{ fontWeight: 800, fontSize: 18 }}>
            Orbix
          </span>
        </div>

        <p className="text-muted" style={{ marginBottom: 24 }}>
          Empowering creativity through motion, design, and precision.
        </p>

        <div style={{ display: "flex", justifyContent: "center", gap: 28 }}>
          <a href="#" className="text-accent-hover">Home</a>
          <a href="#" className="text-accent-hover">Work</a>
          <a href="#" className="text-accent-hover">Contact</a>
        </div>

        <p className="text-muted" style={{ marginTop: 40, fontSize: 13 }}>
          © {new Date().getFullYear()} Orbix Media
        </p>
      </div>
    </footer>
  );
}
