import React from "react";

export default function Footer() {
  return (
    <footer
      className="bg-surface fade-in"
      style={{
        padding: "50px 24px 30px",
        textAlign: "center",
        position: "relative",
      }}
    >
      {/* Accent divider line */}
      <div
        className="bg-gradient-accent"
        style={{
          height: 3,
          width: 120,
          borderRadius: 4,
          margin: "0 auto 24px",
        }}
      />

      <h3 className="text-main" style={{ fontWeight: 800, marginBottom: 8 }}>
        Axis
      </h3>
      <p className="text-muted" style={{ marginBottom: 24 }}>
        Structured simplicity, designed for focus.
      </p>

      <div style={{ display: "flex", justifyContent: "center", gap: 28 }}>
        <a href="#" className="text-accent-hover">About</a>
        <a href="#" className="text-accent-hover">Work</a>
        <a href="#" className="text-accent-hover">Contact</a>
      </div>

      <p className="text-muted" style={{ marginTop: 30, fontSize: 13 }}>
        © {new Date().getFullYear()} Axis Studio
      </p>
    </footer>
  );
}
