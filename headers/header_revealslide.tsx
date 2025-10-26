import React, { useState, useEffect } from "react";

export default function Header() {
  const [isMobile, setIsMobile] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [expanded, setExpanded] = useState(false);

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
        className="bg-surface-alt shadow-accent-hover fade-in"
        style={{
          position: "sticky",
          top: 0,
          zIndex: 1000,
          overflow: "hidden",
          transition:
            "height var(--transition-speed) ease, background var(--transition-speed) ease",
          height: !isMobile && expanded ? 100 : 56,
          cursor: isMobile ? "default" : "pointer",
        }}
        onMouseEnter={() => !isMobile && setExpanded(true)}
        onMouseLeave={() => !isMobile && setExpanded(false)}
      >
        {/* Main Row */}
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "0 24px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: 56,
            transition: "transform var(--transition-speed) ease",
            transform: !isMobile && expanded ? "translateY(-3px)" : "translateY(0)",
          }}
        >
          {/* Logo */}
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div
              className="bg-gradient-accent"
              style={{ width: 28, height: 28, borderRadius: 8 }}
            />
            <span className="text-main" style={{ fontWeight: 700 }}>
              RevealX
            </span>
          </div>

          {/* Accent indicator */}
          {!isMobile && (
            <div
              className={`pulse-accent`}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 6,
                transition: "transform var(--transition-speed) ease",
                transform: expanded ? "rotate(180deg)" : "rotate(0deg)",
              }}
            >
              <span
                className="text-accent"
                style={{
                  fontSize: 18,
                  transition: "opacity var(--transition-speed) ease",
                }}
              >
                ▾
              </span>
            </div>
          )}

          {isMobile && (
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

        {/* Reveal Nav - Desktop */}
        {!isMobile && (
          <nav
            className={`${expanded ? "fade-up" : ""} bg-surface border-base`}
            style={{
              height: expanded ? 44 : 0,
              overflow: "hidden",
              borderTop: expanded ? "1px solid var(--color-border)" : "none",
              transition: "height var(--transition-speed) ease",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 32,
              fontSize: 15,
            }}
          >
            <a href="#" className="text-accent-hover">
              Home
            </a>
            <a href="#" className="text-accent-hover">
              Projects
            </a>
            <a href="#" className="text-accent-hover">
              Services
            </a>
            <a href="#" className="text-accent-hover">
              Contact
            </a>
          </nav>
        )}
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

      {/* Mobile menu - reveal slide style */}
      {isMobile && (
        <div
          className="bg-surface"
          style={{
            position: "fixed",
            top: 56,
            left: 0,
            right: 0,
            display: isMenuOpen ? "flex" : "none",
            flexDirection: "column",
            padding: "0",
            borderBottom: "1px solid var(--color-border)",
            zIndex: 1000,
            maxHeight: isMenuOpen ? "400px" : "0",
            overflow: "hidden",
            transition: "max-height 0.3s ease",
            animation: isMenuOpen ? "revealDown 0.3s ease" : "none",
          }}
        >
          <div style={{ padding: "16px 24px", display: "flex", flexDirection: "column", gap: 4 }}>
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
              Home
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
              Projects
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
              Services
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
              Contact
            </a>
          </div>
        </div>
      )}

      <style>{`
        @keyframes revealDown {
          from {
            opacity: 0;
            max-height: 0;
          }
          to {
            opacity: 1;
            max-height: 400px;
          }
        }
      `}</style>
    </>
  );
}
