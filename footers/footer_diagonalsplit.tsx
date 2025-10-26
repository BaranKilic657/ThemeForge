import React from "react";

export default function Footer() {
  return (
    <footer
      className="fade-up shadow-accent-hover"
      style={{
        position: "relative",
        overflow: "hidden",
        color: "var(--color-surface)",
      }}
    >
      {/* Diagonal Accent Panel */}
      <div
        className="bg-gradient-accent"
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          bottom: 0,
          width: "60%",
          clipPath: "polygon(0 0, 100% 0, 80% 100%, 0% 100%)",
          zIndex: 0,
        }}
      />

      {/* Content Layer */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "80px 24px 50px",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <div>
          <h2 style={{ fontWeight: 800, fontSize: 24 }}>Apex Studio</h2>
          <p style={{ opacity: 0.9, maxWidth: 320, lineHeight: 1.6 }}>
            Merging technology and emotion into next-gen brand experiences.
          </p>
        </div>

        <nav style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          <a href="#" className="text-accent-hover">Work</a>
          <a href="#" className="text-accent-hover">About</a>
          <a href="#" className="text-accent-hover">Careers</a>
          <a href="#" className="text-accent-hover">Contact</a>
        </nav>
      </div>

    </footer>
  );
}
