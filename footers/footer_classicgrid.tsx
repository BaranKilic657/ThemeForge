import React from "react";

export default function Footer() {
  return (
    <footer
      className="bg-surface shadow-surface fade-up"
      style={{
        padding: "64px 24px 32px",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: 48,
        }}
      >
        {/* Column 1 */}
        <div>
          <div
            style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}
          >
            <div className="bg-gradient-accent" style={{ width: 32, height: 32, borderRadius: 10 }} />
            <span className="text-main" style={{ fontWeight: 800, fontSize: 20 }}>
              NovaSphere
            </span>
          </div>
          <p className="text-muted" style={{ lineHeight: 1.6 }}>
            Elevating digital experiences through design, innovation, and collaboration.
          </p>
        </div>

        {/* Column 2 */}
        <div>
          <h4 className="text-accent" style={{ fontWeight: 600, marginBottom: 12 }}>
            Company
          </h4>
          <ul style={{ listStyle: "none", padding: 0, lineHeight: 1.8 }}>
            <li><a href="#" className="text-accent-hover">About</a></li>
            <li><a href="#" className="text-accent-hover">Careers</a></li>
            <li><a href="#" className="text-accent-hover">Blog</a></li>
            <li><a href="#" className="text-accent-hover">Press</a></li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h4 className="text-accent" style={{ fontWeight: 600, marginBottom: 12 }}>
            Connect
          </h4>
          <ul style={{ listStyle: "none", padding: 0, lineHeight: 1.8 }}>
            <li><a href="#" className="text-accent-hover">Twitter</a></li>
            <li><a href="#" className="text-accent-hover">LinkedIn</a></li>
            <li><a href="#" className="text-accent-hover">GitHub</a></li>
            <li><a href="#" className="text-accent-hover">Dribbble</a></li>
          </ul>
        </div>
      </div>

      <hr
        className="border-base"
        style={{ margin: "48px 0 24px", opacity: 0.3 }}
      />
      <p className="text-muted" style={{ textAlign: "center", fontSize: 14 }}>
        © {new Date().getFullYear()} NovaSphere. All rights reserved.
      </p>
    </footer>
  );
}
