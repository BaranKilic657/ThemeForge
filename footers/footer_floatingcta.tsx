import React from "react";

export default function Footer() {
  return (
    <footer
      className="bg-surface shadow-accent-hover fade-up"
      style={{
        position: "relative",
        paddingTop: "100px",
        marginTop: "120px",
      }}
    >
      {/* Floating CTA box */}
      <div
        className="bg-gradient-accent shadow-accent hover-lift"
        style={{
          position: "absolute",
          top: "-60px",
          left: "50%",
          transform: "translateX(-50%)",
          borderRadius: 16,
          padding: "32px 48px",
          textAlign: "center",
          maxWidth: 800,
          color: "var(--color-surface)",
        }}
      >
        <h2 style={{ fontWeight: 800, fontSize: 24, marginBottom: 12 }}>
          Ready to elevate your digital presence?
        </h2>
        <p style={{ marginBottom: 20, opacity: 0.9 }}>
          Join thousands of creators using Nova tools to accelerate design workflows.
        </p>
        <button
          className="btn-gradient hover-lift"
          style={{ borderRadius: 10, padding: "10px 18px", fontWeight: 500 }}
        >
          Get Started
        </button>
      </div>

      {/* Main footer content */}
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "100px 24px 40px",
          textAlign: "center",
        }}
      >
        <p className="text-muted">
          © {new Date().getFullYear()} Nova Design Co. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
