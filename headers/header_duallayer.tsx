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
      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 1000,
        }}
      >
        {/* Back translucent layer */}
        <div
          className="bg-surface-gradient"
          style={{
            height: 80,
            opacity: 0.8,
            transform: "translateY(-4px)",
            filter: "blur(6px)",
          }}
        />

        {/* Front interactive layer */}
        <div
          className="bg-surface shadow-accent-hover fade-in"
          style={{
            height: 70,
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "0 28px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div
              className="bg-gradient-accent"
              style={{ width: 28, height: 28, borderRadius: 8 }}
            />
            <span className="text-main" style={{ fontWeight: 700 }}>
              Parallax
            </span>
          </div>

          {!isMobile ? (
            <nav style={{ display: "flex", gap: 28, fontSize: 14 }}>
              <a href="#" className="text-accent-hover">
                Overview
              </a>
              <a href="#" className="text-accent-hover">
                Gallery
              </a>
              <a href="#" className="text-accent-hover">
                Team
              </a>
              <a href="#" className="text-accent-hover">
                Careers
              </a>
            </nav>
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
            zIndex: 998,
          }}
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {/* Mobile menu - layered effect */}
      {isMobile && (
        <div
          style={{
            position: "fixed",
            top: 70,
            right: 0,
            zIndex: 999,
          }}
        >

          {/* Front menu layer */}
          <div
            className="bg-surface shadow-accent-hover"
            style={{
              position: "relative",
              width: "280px",
              display: isMenuOpen ? "flex" : "none",
              flexDirection: "column",
              padding: "20px",
              gap: 4,
              borderBottomLeftRadius: 16,
              animation: isMenuOpen ? "layerSlide 0.3s ease" : "none",
            }}
          >
            <a
              href="#"
              className="text-accent-hover"
              style={{
                padding: "14px 12px",
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
                padding: "14px 12px",
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
              Gallery
            </a>
            <a
              href="#"
              className="text-accent-hover"
              style={{
                padding: "14px 12px",
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
              Team
            </a>
            <a
              href="#"
              className="text-accent-hover"
              style={{
                padding: "14px 12px",
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
              Careers
            </a>
          </div>
        </div>
      )}

      <style>{`
        @keyframes layerSlide {
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
