import React from "react";

export default function Footer() {
  return (
    <footer
      className="bg-surface-gradient shadow-accent-hover fade-in"
      style={{
        padding: "72px 24px 48px",
        color: "var(--color-surface)",
      }}
    >
      <div
        style={{
          maxWidth: "800px",
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 12 }}>
          Join Our Newsletter
        </h2>
        <p className="text-muted" style={{ marginBottom: 32 }}>
          Stay up to date with our latest news and product updates.
        </p>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 12,
            flexWrap: "wrap",
          }}
        >
          <input
            type="email"
            placeholder="Your email"
            style={{
              padding: "10px 16px",
              borderRadius: 8,
              border: "1px solid var(--color-border)",
              minWidth: 240,
              outline: "none",
              color: "var(--color-text)",
              background: "var(--color-surface)",

            }}
          />
          <button className="btn-gradient hover-lift" style={{ borderRadius: 8, padding: "10px 18px" }}>
            Subscribe
          </button>
        </div>

        <p className="text-muted" style={{ marginTop: 40, fontSize: 14 }}>
          © {new Date().getFullYear()} FluxTech. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
