"use client";
import React from "react";

export default function Header() {
  const bar: React.CSSProperties = {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "0 20px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    height: 70,
  };

  const linkWrap: React.CSSProperties = { display: "flex", gap: 26, alignItems: "center" };

  const underline: React.CSSProperties = {
    position: "absolute",
    left: 0,
    bottom: -6,
    height: 2,
    width: "100%",
    borderRadius: 999,
  };

  const menuGrid: React.CSSProperties = {
    display: "grid",
    gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
    gap: 16,
    padding: 16,
  };

  return (
    <header
      className="bg-surface-alt shadow-accent-hover"
      style={{ position: "sticky", top: 0, zIndex: 1000 }}
    >
      <div style={bar}>
        {/* Logo */}
        <div style={{ display: "flex", alignItems: "center", gap: 10, position: "relative" }}>
          <div className="accent" style={{ width: 24, height: 24, borderRadius: 6 }} />
          <span className="text-main" style={{ fontWeight: 700, fontSize: 18 }}>FlowDesk</span>
        </div>

        {/* Primary nav with animated underline (via absolutely-positioned gradient) */}
        <nav style={linkWrap}>
          {["Home", "Products", "Docs", "Blog"].map((item) => (
            <a
              key={item}
              className="text-accent-hover"
              href="#"
              style={{ position: "relative", paddingBottom: 6, fontSize: 14 }}
              onMouseEnter={(e) => {
                const u = (e.currentTarget.querySelector(".u") as HTMLDivElement) || null;
                if (u) u.style.opacity = "1";
              }}
              onMouseLeave={(e) => {
                const u = (e.currentTarget.querySelector(".u") as HTMLDivElement) || null;
                if (u) u.style.opacity = "0";
              }}
            >
              {item}
              <div
                className="bg-gradient-accent u fade-in"
                style={{ ...underline, opacity: 0, transition: "opacity var(--transition-speed) ease" }}
              />
            </a>
          ))}

          {/* Native details-based mega menu */}
          <details style={{ position: "relative" }}>
            <summary className="text-accent-hover" style={{ listStyle: "none", cursor: "pointer", fontSize: 14 }}>
              Solutions
            </summary>
            <div
              className="bg-surface shadow-surface slide-up"
              style={{
                position: "absolute",
                right: 0,
                top: 32,
                minWidth: 520,
                borderRadius: 12,
                border: "1px solid var(--color-border)",
              }}
            >
              <div style={menuGrid}>
                {[
                  { t: "Automation", d: "Triggers, jobs, queues" },
                  { t: "Analytics", d: "Dashboards & events" },
                  { t: "Integrations", d: "200+ connectors" },
                  { t: "Security", d: "SSO, SCIM, audit" },
                  { t: "Mobile", d: "SDKs for iOS/Android" },
                  { t: "AI Suite", d: "Embeddings & agents" },
                ].map((x) => (
                  <a key={x.t} className="text-accent-hover hover-lift" href="#" style={{ padding: 12, borderRadius: 10 }}>
                    <div className="text-main" style={{ fontWeight: 700 }}>{x.t}</div>
                    <div className="text-muted" style={{ fontSize: 12 }}>{x.d}</div>
                  </a>
                ))}
              </div>
            </div>
          </details>
        </nav>

        {/* Actions */}
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <button className="accent-outline" style={{ padding: "8px 12px", borderRadius: 8 }}>
            Sign in
          </button>
          <button className="btn-gradient hover-lift" style={{ padding: "10px 14px", borderRadius: 10 }}>
            Launch App
          </button>
        </div>
      </div>
    </header>
  );
}
