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
        className="shadow-accent-hover fade-in"
        style={{
          position: "sticky",
          top: 0,
          zIndex: 1000,
          background: "color-mix(in srgb, var(--color-bg) 60%, transparent)",
          backdropFilter: "blur(8px)",
          WebkitBackdropFilter: "blur(8px)",
          height: 64,
        }}
      >
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
          <span className="text-main" style={{ fontWeight: 700, fontSize: 18 }}>
            Aurora
          </span>

          {!isMobile ? (
            <nav
              style={{
                display: "flex",
                gap: 32,
                alignItems: "center",
                fontSize: 15,
              }}
            >
              <a href="#" className="text-accent-hover">
                Work
              </a>
              <a href="#" className="text-accent-hover">
                About
              </a>
              <a href="#" className="text-accent-hover">
                Journal
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
            backgroundColor: "rgba(0,0,0,0.3)",
            opacity: isMenuOpen ? 1 : 0,
            visibility: isMenuOpen ? "visible" : "hidden",
            transition: "opacity 0.3s ease, visibility 0.3s ease",
            zIndex: 999,
          }}
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {/* Mobile menu - minimal clean list */}
      {isMobile && (
        <div
          style={{
            position: "fixed",
            top: 64,
            right: 0,
            width: "240px",
            background: "color-mix(in srgb, var(--color-bg) 95%, transparent)",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
            display: isMenuOpen ? "flex" : "none",
            flexDirection: "column",
            padding: "16px",
            gap: 4,
            zIndex: 1000,
            boxShadow: "-2px 2px 20px rgba(0,0,0,0.1)",
            animation: isMenuOpen ? "minimalSlide 0.25s ease" : "none",
            textAlign: "center",
          }}
        >
          <a
            href="#"
            className="text-accent-hover"
            style={{
              padding: "14px 12px",
              fontSize: 15,
              fontWeight: 500,
            }}
            onClick={() => setIsMenuOpen(false)}
          >
            Work
          </a>
          <a
            href="#"
            className="text-accent-hover"
            style={{
              padding: "14px 12px",
              fontSize: 15,
              fontWeight: 500,
            }}
            onClick={() => setIsMenuOpen(false)}
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
            }}
            onClick={() => setIsMenuOpen(false)}
          >
            Journal
          </a>
          <a
            href="#"
            className="text-accent-hover"
            style={{
              padding: "14px 12px",
              fontSize: 15,
              fontWeight: 500,
            }}
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </a>
        </div>
      )}

      <style>{`
        @keyframes minimalSlide {
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
