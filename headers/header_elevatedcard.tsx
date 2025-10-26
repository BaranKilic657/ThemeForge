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
        className="shadow-surface fade-up"
        style={{
          position: "sticky",
          top: 12,
          zIndex: 1000,
          width: isMobile ? "95%" : "90%",
          maxWidth: 1100,
          margin: "0 auto",
          borderRadius: 16,
          overflow: "hidden",
          background: "var(--color-surface)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "12px 24px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <div
              className="bg-gradient-secondary"
              style={{ width: 28, height: 28, borderRadius: 8 }}
            />
            <span className="text-main" style={{ fontWeight: 700 }}>
              Elevate
            </span>
          </div>

          {!isMobile && (
            <nav style={{ display: "flex", gap: 24, fontSize: 14 }}>
              <a href="#" className="text-accent-hover">
                Features
              </a>
              <a href="#" className="text-accent-hover">
                Pricing
              </a>
              <a href="#" className="text-accent-hover">
                Integrations
              </a>
              <a href="#" className="text-accent-hover">
                Support
              </a>
            </nav>
          )}

          {!isMobile ? (
            <button
              className="btn-gradient hover-lift"
              style={{
                padding: "10px 16px",
                borderRadius: 10,
              }}
            >
              Try Free
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

      {/* Mobile menu - elevated card style */}
      {isMobile && (
        <div
          className="shadow-surface"
          style={{
            position: "fixed",
            top: "calc(40px + 60px)",
            left: "50%",
            transform: "translateX(-50%)",
            width: "90%",
            maxWidth: 340,
            background: "var(--color-surface)",
            display: isMenuOpen ? "flex" : "none",
            flexDirection: "column",
            padding: "20px",
            gap: 6,
            borderRadius: 16,
            zIndex: 1000,
            animation: isMenuOpen ? "elevatedDrop 0.35s cubic-bezier(0.34, 1.56, 0.64, 1)" : "none",
          }}
        >
          <a
            href="#"
            className="text-accent-hover"
            style={{
              padding: "14px 16px",
              fontSize: 15,
              fontWeight: 500,
              borderRadius: 10,
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
            Features
          </a>
          <a
            href="#"
            className="text-accent-hover"
            style={{
              padding: "14px 16px",
              fontSize: 15,
              fontWeight: 500,
              borderRadius: 10,
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
            Pricing
          </a>
          <a
            href="#"
            className="text-accent-hover"
            style={{
              padding: "14px 16px",
              fontSize: 15,
              fontWeight: 500,
              borderRadius: 10,
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
            Integrations
          </a>
          <a
            href="#"
            className="text-accent-hover"
            style={{
              padding: "14px 16px",
              fontSize: 15,
              fontWeight: 500,
              borderRadius: 10,
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
            Support
          </a>

          <button
            className="btn-gradient hover-lift"
            style={{
              padding: "12px 16px",
              borderRadius: 10,
              marginTop: 12,
            }}
            onClick={() => setIsMenuOpen(false)}
          >
            Try Free
          </button>
        </div>
      )}

      <style>{`
        @keyframes elevatedDrop {
          from {
            opacity: 0;
            transform: translateX(-50%) translateY(-15px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateX(-50%) translateY(0) scale(1);
          }
        }
      `}</style>
    </>
  );
}
