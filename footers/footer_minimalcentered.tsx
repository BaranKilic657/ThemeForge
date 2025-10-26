import React from "react";

export default function Footer() {
  return (
    <footer
      className="bg-surface fade-in"
      style={{
        padding: "60px 24px",
        textAlign: "center",
      }}
    >
      <div
        className="fade-up"
        style={{ display: "inline-flex", alignItems: "center", gap: 10, marginBottom: 16 }}
      >
        <div className="bg-gradient-secondary" style={{ width: 30, height: 30, borderRadius: 8 }} />
        <span className="text-main" style={{ fontWeight: 700, fontSize: 20 }}>
          Lumina
        </span>
      </div>

      <p className="text-muted" style={{ marginBottom: 16 }}>
        Designed with passion and precision.
      </p>

      <div style={{ display: "flex", justifyContent: "center", gap: 24, fontSize: 15 }}>
        <a href="#" className="text-accent-hover">Home</a>
        <a href="#" className="text-accent-hover">Projects</a>
        <a href="#" className="text-accent-hover">Contact</a>
      </div>

      <p className="text-muted" style={{ marginTop: 24, fontSize: 13 }}>
        © {new Date().getFullYear()} Lumina Studio
      </p>
    </footer>
  );
}
