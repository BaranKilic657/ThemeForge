import React from "react";

export default function Footer() {
  return (
    <footer
      className="bg-surface-alt shadow-accent-hover fade-up"
      style={{
        position: "relative",
        paddingTop: 48,
      }}
    >
      {/* Accent glow strip */}
      <div
        className="bg-gradient-accent pulse-accent"
        style={{
          height: 6,
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          borderRadius: "0 0 6px 6px",
        }}
      />

      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 24px 40px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 16,
        }}
      >
        <span className="text-main" style={{ fontWeight: 700 }}>
          PulseWorks © {new Date().getFullYear()}
        </span>

        <div style={{ display: "flex", gap: 28 }}>
          <a href="#" className="text-accent-hover">Privacy</a>
          <a href="#" className="text-accent-hover">Terms</a>
          <a href="#" className="text-accent-hover">Contact</a>
        </div>
      </div>
    </footer>
  );
}
