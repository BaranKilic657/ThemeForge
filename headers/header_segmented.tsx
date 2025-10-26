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

  return (
    <>
      <header style={{ position: "sticky", top: 0, zIndex: 1000 }}>
        {/* Top utility bar */}
        <div
          className="bg-surface-alt border-base"
          style={{
            height: 36,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "0 24px",
          }}
        >
          <span className="text-muted" style={{ fontSize: 12 }}>
            Beta 2.3 is live
          </span>
          {!isMobile && (
            <div style={{ display: "flex", gap: 20, fontSize: 12 }}>
              <a href="#" className="text-accent-hover">
                Docs
              </a>
              <a href="#" className="text-accent-hover">
                Status
              </a>
              <a href="#" className="text-accent-hover">
                Community
              </a>
            </div>
          )}
        </div>

        {/* Main navigation bar */}
        <div className="bg-surface shadow-accent-hover" style={{ height: 68 }}>
          <div
            style={{
              maxWidth: "1200px",
              margin: "0 auto",
              padding: "0 24px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              height: "100%",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <div
                className="bg-gradient-accent"
                style={{ width: 28, height: 28, borderRadius: 6 }}
              />
              <span className="text-main" style={{ fontWeight: 700 }}>
                Segmenta
              </span>
            </div>

            {!isMobile && (
              <nav style={{ display: "flex", gap: 28, fontSize: 14 }}>
                <a href="#" className="text-accent-hover">
                  Overview
                </a>
                <a href="#" className="text-accent-hover">
                  Components
                </a>
                <a href="#" className="text-accent-hover">
                  Guides
                </a>
                <a href="#" className="text-accent-hover">
                  Changelog
                </a>
              </nav>
            )}

            {!isMobile ? (
              <button
                className="btn-gradient hover-lift"
                style={{ padding: "10px 14px", borderRadius: 10 }}
              >
                Get Started
              </button>
            ) : (
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  fontSize: 22,
                  color: "var(--color-text, #333)",
                  padding: "6px",
                }}
                aria-label="Toggle menu"
              >
                {isMenuOpen ? "✕" : "☰"}
              </button>
            )}
          </div>
        </div>
      </header>

      {/* Mobile overlay */}
      {isMobile && (
        <div
          style={{
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
            zIndex: 999,
          }}
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {/* Mobile menu - two-section segmented design */}
      {isMobile && (
        <div
          style={{
            position: "fixed",
            top: 104,
            right: 0,
            width: "280px",
            display: isMenuOpen ? "flex" : "none",
            flexDirection: "column",
            zIndex: 1000,
            boxShadow: "-2px 4px 20px rgba(0,0,0,0.15)",
            borderBottomLeftRadius: 12,
            overflow: "hidden",
            animation: isMenuOpen ? "segmentSlide 0.3s ease" : "none",
          }}
        >
          {/* Top section - utility links */}
          <div
            className="bg-surface-alt"
            style={{
              padding: "16px 20px",
              borderBottom: "1px solid var(--color-border)",
            }}
          >
            <div style={{ fontSize: 11, fontWeight: 600, color: "var(--color-muted)", marginBottom: 8 }}>
              RESOURCES
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              <a
                href="#"
                className="text-accent-hover"
                style={{ fontSize: 13, padding: "6px 0" }}
                onClick={() => setIsMenuOpen(false)}
              >
                Docs
              </a>
              <a
                href="#"
                className="text-accent-hover"
                style={{ fontSize: 13, padding: "6px 0" }}
                onClick={() => setIsMenuOpen(false)}
              >
                Status
              </a>
              <a
                href="#"
                className="text-accent-hover"
                style={{ fontSize: 13, padding: "6px 0" }}
                onClick={() => setIsMenuOpen(false)}
              >
                Community
              </a>
            </div>
          </div>

          {/* Bottom section - main nav */}
          <div className="bg-surface" style={{ padding: "20px" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
              <a
                href="#"
                className="text-accent-hover"
                style={{
                  padding: "12px",
                  fontSize: 15,
                  fontWeight: 500,
                  borderRadius: 8,
                  transition: "background 0.2s ease",
                }}
                onClick={() => setIsMenuOpen(false)}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "var(--color-surface-alt, #f5f5f5)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "transparent";
                }}
              >
                Overview
              </a>
              <a
                href="#"
                className="text-accent-hover"
                style={{
                  padding: "12px",
                  fontSize: 15,
                  fontWeight: 500,
                  borderRadius: 8,
                  transition: "background 0.2s ease",
                }}
                onClick={() => setIsMenuOpen(false)}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "var(--color-surface-alt, #f5f5f5)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "transparent";
                }}
              >
                Components
              </a>
              <a
                href="#"
                className="text-accent-hover"
                style={{
                  padding: "12px",
                  fontSize: 15,
                  fontWeight: 500,
                  borderRadius: 8,
                  transition: "background 0.2s ease",
                }}
                onClick={() => setIsMenuOpen(false)}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "var(--color-surface-alt, #f5f5f5)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "transparent";
                }}
              >
                Guides
              </a>
              <a
                href="#"
                className="text-accent-hover"
                style={{
                  padding: "12px",
                  fontSize: 15,
                  fontWeight: 500,
                  borderRadius: 8,
                  transition: "background 0.2s ease",
                }}
                onClick={() => setIsMenuOpen(false)}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "var(--color-surface-alt, #f5f5f5)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "transparent";
                }}
              >
                Changelog
              </a>
              <button
                className="btn-gradient hover-lift"
                style={{
                  padding: "12px 14px",
                  borderRadius: 10,
                  marginTop: 12,
                }}
                onClick={() => setIsMenuOpen(false)}
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes segmentSlide {
          from {
            opacity: 0;
            transform: translateX(20px);
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
