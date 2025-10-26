import React from "react";

export default function Header() {
  const container: React.CSSProperties = {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "0 20px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    height: 64,
  };

  const nav: React.CSSProperties = {
    display: "flex",
    gap: 24,
    fontSize: 14,
  };

  return (
    <>
      {/* Announcement strip */}
      <header
        className="bg-gradient-secondary text-main"
        style={{
          position: "sticky",
          top: 0,
          zIndex: 1001,
          height: 36,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <span style={{ color: "var(--color-surface)", fontSize: 13 }}>
          ✨ New: Realtime API is live —{" "}
          <a href="#" className="text-accent-hover" style={{ fontWeight: 600 }}>
            read the launch post
          </a>
        </span>
      </header>

      {/* Main header */}
      <header
        className="bg-surface shadow-surface"
        style={{ position: "sticky", top: 36, zIndex: 1000 }}
      >
        <div style={container}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div
              className="bg-gradient-accent"
              style={{ width: 32, height: 32, borderRadius: 8 }}
              title="Logo"
            />
            <span className="text-main" style={{ fontSize: 18, fontWeight: 700 }}>
              BrandName
            </span>
          </div>

          <nav style={nav}>
            <a className="text-accent-hover" href="#">Features</a>
            <a className="text-accent-hover" href="#">Pricing</a>
            <a className="text-accent-hover" href="#">Docs</a>
            <a className="text-accent-hover" href="#">Company</a>
          </nav>

          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <a className="text-accent-hover" href="#" style={{ fontSize: 14 }}>
              Sign in
            </a>
            <button className="btn-gradient hover-lift" style={{ padding: "10px 14px", borderRadius: 10 }}>
              Get Started
            </button>
          </div>
        </div>
      </header>
    </>
  );
}
