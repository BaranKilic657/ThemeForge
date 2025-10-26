import React from "react";

export default function Footer() {
  return (
    <footer
      className="bg-gradient-secondary shadow-accent fade-in"
      style={{
        padding: "80px 24px 40px",
        color: "var(--color-surface)",
        position: "relative",
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 40,
        }}
      >
        <div style={{ maxWidth: 300 }}>
          <h3 style={{ fontWeight: 700, fontSize: 22, marginBottom: 10 }}>WaveCore</h3>
          <p style={{ opacity: 0.85 }}>
            Building fluid and futuristic digital experiences that flow with your vision.
          </p>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 10, color: "var(--color-surface)" }}>
          <a href="#" className="">About</a>
          <a href="#" className="">Careers</a>
          <a href="#" className="">Contact</a>
        </div>

        <button
          className="btn-gradient-accent hover-lift"
          style={{
            borderRadius: 10,
            padding: "12px 20px",
            fontWeight: 500,
          }}
        >
          Get Started
        </button>
      </div>

      <p style={{ textAlign: "center", marginTop: 40, opacity: 0.7 }}>
        © {new Date().getFullYear()} WaveCore Labs
      </p>
    </footer>
  );
}
