import React from "react";

export default function Footer() {
  return (
    <footer
      className="fade-up"
      style={{
        background: "var(--color-surface)",
        position: "relative",
        overflow: "hidden",
        color: "var(--color-text)",
      }}
    >
      <div
        className="bg-gradient-accent"
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          bottom: 0,
          width: "40%",
          zIndex: 0,
          opacity: 0.9,
        }}
      ></div>

      <div
        style={{
          position: "relative",
          zIndex: 1,
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "64px 24px",
          maxWidth: "1200px",
          margin: "0 auto",
          gap: 40,
        }}
      >
        {/* Left: Accent area */}
        <div style={{ color: "var(--color-surface)", flex: "1 1 40%" }}>
          <h2 style={{ fontWeight: 800, fontSize: 24, marginBottom: 8 }}>
            Vertex Labs
          </h2>
          <p style={{ opacity: 0.9, maxWidth: 280, lineHeight: 1.6 }}>
            Building digital systems that merge technology and creativity into powerful user experiences.
          </p>
        </div>

        {/* Right: Neutral area */}
        <div style={{ flex: "1 1 45%", textAlign: "right" }}>
          <nav
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 12,
              alignItems: "flex-end",
            }}
          >
            <a href="#" className="text-accent-hover">About</a>
            <a href="#" className="text-accent-hover">Solutions</a>
            <a href="#" className="text-accent-hover">Careers</a>
            <a href="#" className="text-accent-hover">Contact</a>
          </nav>
        </div>
      </div>

      <div
        style={{
          textAlign: "center",
          padding: "20px",
          background: "var(--color-surface-alt)",
          fontSize: 14,
        }}
      >
        © {new Date().getFullYear()} Vertex Labs. All rights reserved.
      </div>
    </footer>
  );
}
