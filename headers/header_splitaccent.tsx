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
          display: "flex",
          alignItems: "stretch",
          height: 72,
          flexDirection: isMobile ? "column" : "row",
        }}
      >
        {/* Left: Accent zone */}
        <div
          className="bg-gradient-accent text-surface"
          style={{
            flex: isMobile ? "none" : "0 0 280px",
            display: "flex",
            alignItems: "center",
            justifyContent: isMobile ? "space-between" : "center",
            gap: 10,
            padding: isMobile ? "0 24px" : "0",
            height: isMobile ? 60 : "auto",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div
              className="preview-secondary"
              style={{ width: 34, height: 34, borderRadius: 10 }}
            />
            <span style={{ fontWeight: 800, fontSize: 18 }}>Auralink</span>
          </div>

          {isMobile && (
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              style={{
                background: "rgba(255,255,255,0.2)",
                border: "1px solid rgba(255,255,255,0.3)",
                borderRadius: 8,
                cursor: "pointer",
                fontSize: 20,
                color: "var(--color-surface)",
                padding: "6px 10px",
              }}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? "✕" : "☰"}
            </button>
          )}
        </div>

        {/* Right: Light zone */}
        {!isMobile && (
          <div
            className="bg-surface shadow-surface"
            style={{
              flex: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "0 24px",
            }}
          >
            <nav style={{ display: "flex", gap: 28, fontSize: 14 }}>
              <a href="#" className="text-accent-hover">
                Services
              </a>
              <a href="#" className="text-accent-hover">
                Portfolio
              </a>
              <a href="#" className="text-accent-hover">
                Blog
              </a>
              <a href="#" className="text-accent-hover">
                Contact
              </a>
            </nav>

            <button
              className="btn-gradient hover-lift"
              style={{ padding: "10px 16px", borderRadius: 10 }}
            >
              Start Project
            </button>
          </div>
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
            backgroundColor: "rgba(0,0,0,0.5)",
            opacity: isMenuOpen ? 1 : 0,
            visibility: isMenuOpen ? "visible" : "hidden",
            transition: "opacity 0.3s ease, visibility 0.3s ease",
            zIndex: 999,
          }}
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {/* Mobile menu - accent split style */}
      {isMobile && (
        <div
          style={{
            position: "fixed",
            top: 60,
            left: 0,
            right: 0,
            display: isMenuOpen ? "flex" : "none",
            flexDirection: "column",
            zIndex: 1000,
            animation: isMenuOpen ? "splitSlide 0.3s ease" : "none",
          }}
        >
          {/* Accent section */}
          <div
            className="bg-gradient-accent"
            style={{
              padding: "20px 24px",
              borderBottom: "2px solid rgba(255,255,255,0.2)",
            }}
          >
            <div style={{ fontSize: 11, fontWeight: 700, color: "rgba(255,255,255,0.7)", marginBottom: 12 }}>
              NAVIGATION
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              <a
                href="#"
                style={{
                  padding: "12px 16px",
                  fontSize: 15,
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
                Services
              </a>
              <a
                href="#"
                style={{
                  padding: "12px 16px",
                  fontSize: 15,
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
                Portfolio
              </a>
              <a
                href="#"
                style={{
                  padding: "12px 16px",
                  fontSize: 15,
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
                Blog
              </a>
              <a
                href="#"
                style={{
                  padding: "12px 16px",
                  fontSize: 15,
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
                Contact
              </a>
            </div>
          </div>

          {/* Light section */}
          <div
            className="bg-surface shadow-surface"
            style={{
              padding: "20px 24px",
            }}
          >
            <button
              className="btn-gradient hover-lift"
              style={{
                padding: "14px 16px",
                borderRadius: 10,
                width: "100%",
              }}
              onClick={() => setIsMenuOpen(false)}
            >
              Start Project
            </button>
          </div>
        </div>
      )}

      <style>{`
        @keyframes splitSlide {
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
