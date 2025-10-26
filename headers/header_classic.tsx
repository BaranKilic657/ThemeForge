import React, { useState, useEffect } from "react";

export default function Header() {
  const [isMobile, setIsMobile] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Responsive breakpoint
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "auto";
  }, [isMenuOpen]);

  const container: React.CSSProperties = {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "0 20px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    height: 64,
    position: "relative",
  };

  const nav: React.CSSProperties = {
    display: isMobile ? "none" : "flex",
    gap: 24,
    fontSize: 14,
  };

  const linkStyle: React.CSSProperties = {
    textDecoration: "none",
    color: "var(--color-text, #333)",
    fontWeight: 500,
  };

  // Mobile overlay background
  const overlay: React.CSSProperties = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0,0,0,0.4)",
    backdropFilter: "blur(3px)",
    opacity: isMenuOpen ? 1 : 0,
    visibility: isMenuOpen ? "visible" : "hidden",
    transition: "opacity 0.3s ease, visibility 0.3s ease",
    zIndex: 1001,
  };

  // Right-aligned mobile dropdown
  const mobileMenu: React.CSSProperties = {
    position: "fixed",
    top: 100, // below both header bars
    right: 0,
    width: "80%",
    maxWidth: 300,
    backgroundColor: "var(--color-surface, #fff)",
    boxShadow: "-2px 4px 16px rgba(0,0,0,0.15)",
    display: isMenuOpen ? "flex" : "none",
    flexDirection: "column",
    alignItems: "flex-start",
    padding: "20px 24px",
    gap: 16,
    borderBottomLeftRadius: 12,
    animation: isMenuOpen ? "slideIn 0.3s ease" : "none",
    zIndex: 1002,
  };

  const mobileLink: React.CSSProperties = {
    ...linkStyle,
    fontSize: 16,
    width: "100%",
    padding: "10px 0",
    borderBottom: "1px solid rgba(0,0,0,0.05)",
  };

  return (
    <>
      {/* Announcement strip */}
      <header
        className="bg-gradient-secondary text-main"
        style={{
          position: "sticky",
          top: 0,
          zIndex: 1003,
          height: 36,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <span style={{ color: "var(--color-surface)", fontSize: 13, alignSelf: "center" }}>
          ✨ New: Realtime API is live
        </span>
      </header>

      {/* Main header */}
      <header
        className="bg-surface shadow-surface"
        style={{ position: "sticky", top: 36, zIndex: 1003 }}
      >
        <div style={container}>
          {/* Logo + Brand */}
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div
              className="bg-gradient-accent"
              style={{ width: 32, height: 32, borderRadius: 8 }}
              title="Logo"
            />
            <span
              className="text-main"
              style={{ fontSize: 18, fontWeight: 700 }}
            >
              BrandName
            </span>
          </div>

          {/* Desktop navigation */}
          <nav style={nav}>
            <a style={linkStyle} href="#">
              Features
            </a>
            <a style={linkStyle} href="#">
              Pricing
            </a>
            <a style={linkStyle} href="#">
              Docs
            </a>
            <a style={linkStyle} href="#">
              Company
            </a>
          </nav>

          {/* Desktop right section */}
          {!isMobile && (
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <a
                className="text-accent-hover"
                href="#"
                style={{ fontSize: 14 }}
              >
                Sign in
              </a>
              <button
                className="btn-gradient hover-lift"
                style={{ padding: "10px 14px", borderRadius: 10 }}
              >
                Get Started
              </button>
            </div>
          )}

          {/* Mobile hamburger */}
          {isMobile && (
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                fontSize: 26,
                color: "var(--color-text, #333)",
                padding: "4px 8px",
              }}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? "✕" : "☰"}
            </button>
          )}
        </div>
      </header>

      {/* Overlay (click anywhere to close) */}
      <div
        style={overlay}
        onClick={() => setIsMenuOpen(false)}
        aria-hidden="true"
      />

      {/* Right-aligned dropdown menu */}
      <div style={mobileMenu}>
        <a style={mobileLink} href="#" onClick={() => setIsMenuOpen(false)}>
          Features
        </a>
        <a style={mobileLink} href="#" onClick={() => setIsMenuOpen(false)}>
          Pricing
        </a>
        <a style={mobileLink} href="#" onClick={() => setIsMenuOpen(false)}>
          Docs
        </a>
        <a style={mobileLink} href="#" onClick={() => setIsMenuOpen(false)}>
          Company
        </a>

        <div style={{ marginTop: 12, width: "100%" }}>
          <a style={mobileLink} href="#" onClick={() => setIsMenuOpen(false)}>
            Sign in
          </a>
          <button
            className="btn-gradient hover-lift"
            style={{
              padding: "10px 14px",
              borderRadius: 10,
              marginTop: 20,
              width: "100%",
            }}
            onClick={() => setIsMenuOpen(false)}
          >
            Get Started
          </button>
        </div>
      </div>

      {/* Keyframes for slide animation */}
      <style>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </>
  );
}
