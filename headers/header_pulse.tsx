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
        className="bg-surface shadow-surface fade-in"
        style={{
          position: "sticky",
          top: 0,
          zIndex: 1000,
          borderBottom: "3px solid transparent",
          borderImage:
            "linear-gradient(90deg, var(--color-accent), var(--color-accent-hover)) 1",
        }}
      >
        <div
          className="pulse-accent"
          style={{
            height: 3,
            background:
              "linear-gradient(90deg, var(--color-accent), var(--color-accent-hover))",
            opacity: 0.7,
          }}
        />
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "0 24px",
            height: 72,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div
              className="bg-gradient-secondary"
              style={{ width: 28, height: 28, borderRadius: 8 }}
            />
            <span className="text-main" style={{ fontWeight: 700 }}>
              PulseTech
            </span>
          </div>

          {!isMobile ? (
            <nav style={{ display: "flex", gap: 28, fontSize: 15 }}>
              <a href="#" className="text-accent-hover">
                About
              </a>
              <a href="#" className="text-accent-hover">
                Solutions
              </a>
              <a href="#" className="text-accent-hover">
                Insights
              </a>
              <a href="#" className="text-accent-hover">
                Contact
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
            zIndex: 999,
          }}
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {/* Mobile menu - with pulsing accent */}
      {isMobile && (
        <div
          className="bg-surface shadow-surface"
          style={{
            position: "fixed",
            top: 75,
            right: 0,
            width: "280px",
            display: isMenuOpen ? "flex" : "none",
            flexDirection: "column",
            padding: "0",
            borderBottomLeftRadius: 12,
            overflow: "hidden",
            zIndex: 1000,
            animation: isMenuOpen ? "pulseSlide 0.3s ease" : "none",
          }}
        >
          <div
            className="pulse-accent"
            style={{
              height: 3,
              background:
                "linear-gradient(90deg, var(--color-accent), var(--color-accent-hover))",
              opacity: 0.8,
            }}
          />

          <div style={{ padding: "20px", display: "flex", flexDirection: "column", gap: 4 }}>
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
              About
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
              Solutions
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
              Insights
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
        @keyframes pulseSlide {
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
