import React from "react";

export default function Footer() {
  return (
    <footer
      className="bg-surface shadow-accent-hover fade-in"
      style={{
        height: 60,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 24px",
      }}
    >
      <span className="text-main" style={{ fontWeight: 600 }}>
        Flowbyte © {new Date().getFullYear()}
      </span>
      <div style={{ display: "flex", gap: 24, fontSize: 14 }}>
        <a href="#" className="text-accent-hover">Docs</a>
        <a href="#" className="text-accent-hover">Changelog</a>
        <a href="#" className="text-accent-hover">Status</a>
      </div>
    </footer>
  );
}
