import React from "react";

export default function Footer() {
  return (
    <footer className="bg-surface-alt fade-in" style={{ marginTop: 40 }}>
      {/* Top info row */}
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "48px 24px",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          gap: 32,
        }}
      >
        <div>
          <h3 className="text-main" style={{ fontWeight: 700 }}>
            Staxa
          </h3>
          <p className="text-muted" style={{ maxWidth: 300, lineHeight: 1.5 }}>
            Scalable design tools for enterprise-grade product teams.
          </p>
        </div>

        <div style={{ display: "flex", gap: 48 }}>
          <ul style={{ listStyle: "none", padding: 0 }}>
            <li className="text-accent" style={{ fontWeight: 600 }}>Product</li>
            <li><a href="#" className="text-accent-hover">Overview</a></li>
            <li><a href="#" className="text-accent-hover">Features</a></li>
            <li><a href="#" className="text-accent-hover">Integrations</a></li>
          </ul>

          <ul style={{ listStyle: "none", padding: 0 }}>
            <li className="text-accent" style={{ fontWeight: 600 }}>Support</li>
            <li><a href="#" className="text-accent-hover">Help Center</a></li>
            <li><a href="#" className="text-accent-hover">Community</a></li>
            <li><a href="#" className="text-accent-hover">Contact</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom legal row */}
      <div
        className="bg-surface shadow-accent-hover"
        style={{
          padding: "16px 24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          fontSize: 14,
        }}
      >
        <span className="text-muted">
          © {new Date().getFullYear()} Staxa Systems
        </span>
        <div style={{ display: "flex", gap: 20 }}>
          <a href="#" className="text-accent-hover">Privacy</a>
          <a href="#" className="text-accent-hover">Terms</a>
        </div>
      </div>
    </footer>
  );
}
