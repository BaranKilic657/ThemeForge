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
    padding: "0 24px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    height: 72,
  };

  return (
    <>
      <header
        className="bg-gradient-accent fade-in"
        style={{
          position: "sticky",
          top: 0,
          zIndex: 1000,
        }}
      >
        <div style={container}>
          {!isMobile && (
            <a
              href="#"
              className="text-surface text-accent-hover"
              style={{ fontWeight: 500, color: "var(--color-surface)" }}
            >
              Overview
            </a>
          )}

          <div style={{ textAlign: "center" }}>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
              }}
            >
              <div
                className="preview-secondary"
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 12,
                }}
              />
              <span
                style={{
                  color: "var(--color-surface)",
                  fontWeight: 800,
                  fontSize: 20,
                }}
              >
                NovaSphere
              </span>
            </div>
          </div>

          {!isMobile ? (
            <button
              className="accent-outline hover-lift"
              style={{
                padding: "10px 16px",
                borderRadius: 10,
                fontWeight: 500,
                color: "var(--color-surface)",
                borderColor: "var(--color-surface)",
              }}
            >
              Login
            </button>
          ) : (
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              style={{
                background: "rgba(255,255,255,0.2)",
                border: "1px solid rgba(255,255,255,0.3)",
                borderRadius: 8,
                cursor: "pointer",
                fontSize: 22,
                color: "var(--color-surface)",
                padding: "6px 10px",
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
            backgroundColor: "rgba(0,0,0,0.5)",
            opacity: isMenuOpen ? 1 : 0,
            visibility: isMenuOpen ? "visible" : "hidden",
            transition: "opacity 0.3s ease, visibility 0.3s ease",
            zIndex: 999,
          }}
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {/* Mobile menu - gradient themed */}
      {isMobile && (
        <div
          className="bg-gradient-accent"
          style={{
            position: "fixed",
            top: 72,
            left: 0,
            right: 0,
            display: isMenuOpen ? "flex" : "none",
            flexDirection: "column",
            padding: "24px",
            gap: 8,
            zIndex: 1000,
            boxShadow: "0 10px 40px rgba(0,0,0,0.3)",
            animation: isMenuOpen ? "slideDown 0.3s ease" : "none",
          }}
        >
          <a
            href="#"
            style={{
              padding: "16px",
              textAlign: "center",
              fontSize: 16,
              fontWeight: 500,
              color: "var(--color-surface)",
              borderRadius: 10,
              background: "rgba(255,255,255,0.1)",
              border: "1px solid rgba(255,255,255,0.2)",
              transition: "background 0.2s ease",
            }}
            onClick={() => setIsMenuOpen(false)}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "rgba(255,255,255,0.2)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "rgba(255,255,255,0.1)";
            }}
          >
            Overview
          </a>
          <button
            className="hover-lift"
            style={{
              padding: "16px",
              borderRadius: 10,
              fontWeight: 500,
              color: "var(--color-accent)",
              background: "var(--color-surface)",
              border: "1px solid rgba(255,255,255,0.3)",
              marginTop: 8,
            }}
            onClick={() => setIsMenuOpen(false)}
          >
            Login
          </button>
        </div>
      )}

      <style>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  );
}
