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

  const navStyle: React.CSSProperties = {
    display: isMobile ? "none" : "flex",
    gap: 28,
    fontSize: 14,
  };

  return (
    <>
      <header
        className="shadow-accent-hover fade-in"
        style={{
          position: "sticky",
          top: 0,
          zIndex: 1000,
          background: "color-mix(in srgb, var(--color-surface) 60%, transparent)",
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
        }}
      >
        <div
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
            padding: "12px 24px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <div
              className="bg-gradient-secondary"
              style={{ width: 28, height: 28, borderRadius: 8 }}
            />
            <span className="text-main" style={{ fontWeight: 700 }}>
              Glassify
            </span>
          </div>

          <nav style={navStyle}>
            <a href="#" className="text-accent-hover">
              Dashboard
            </a>
            <a href="#" className="text-accent-hover">
              Templates
            </a>
            <a href="#" className="text-accent-hover">
              Marketplace
            </a>
            <a href="#" className="text-accent-hover">
              Docs
            </a>
          </nav>

          {!isMobile && (
            <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
              <button
                className="accent-outline hover-lift"
                style={{ padding: "8px 12px", borderRadius: 8 }}
              >
                Sign In
              </button>
              <button
                className="btn-gradient hover-lift"
                style={{ padding: "10px 14px", borderRadius: 10 }}
              >
                Create
              </button>
            </div>
          )}

          {/* Mobile hamburger */}
          {isMobile && (
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              style={{
                background: "color-mix(in srgb, var(--color-surface) 40%, transparent)",
                backdropFilter: "blur(8px)",
                WebkitBackdropFilter: "blur(8px)",
                border: "1px solid rgba(255,255,255,0.2)",
                borderRadius: 8,
                cursor: "pointer",
                fontSize: 20,
                color: "var(--color-text, #333)",
                padding: "6px 10px",
              }}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? "✕" : "☰"}
            </button>
          )}
        </div>
      </header>

      {/* Glass mobile overlay */}
      {isMobile && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0,0,0,0.3)",
            backdropFilter: "blur(4px)",
            WebkitBackdropFilter: "blur(4px)",
            opacity: isMenuOpen ? 1 : 0,
            visibility: isMenuOpen ? "visible" : "hidden",
            transition: "opacity 0.3s ease, visibility 0.3s ease",
            zIndex: 999,
          }}
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {/* Glass mobile menu */}
      {isMobile && (
        <div
          style={{
            position: "fixed",
            top: 60,
            right: 12,
            width: "calc(100% - 24px)",
            maxWidth: 320,
            background: "color-mix(in srgb, var(--color-surface) 75%, transparent)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            border: "1px solid rgba(255,255,255,0.3)",
            boxShadow: "0 8px 32px rgba(0,0,0,0.1)",
            display: isMenuOpen ? "flex" : "none",
            flexDirection: "column",
            padding: "20px",
            gap: 4,
            borderRadius: 16,
            zIndex: 1000,
            animation: isMenuOpen ? "glassSlide 0.3s ease" : "none",
          }}
        >
          <a
            href="#"
            className="text-accent-hover"
            style={{
              padding: "14px 16px",
              borderRadius: 10,
              fontSize: 15,
              fontWeight: 500,
              background: "color-mix(in srgb, var(--color-surface) 30%, transparent)",
              transition: "background 0.2s ease",
            }}
            onClick={() => setIsMenuOpen(false)}
          >
            Dashboard
          </a>
          <a
            href="#"
            className="text-accent-hover"
            style={{
              padding: "14px 16px",
              borderRadius: 10,
              fontSize: 15,
              fontWeight: 500,
              background: "color-mix(in srgb, var(--color-surface) 30%, transparent)",
              transition: "background 0.2s ease",
            }}
            onClick={() => setIsMenuOpen(false)}
          >
            Templates
          </a>
          <a
            href="#"
            className="text-accent-hover"
            style={{
              padding: "14px 16px",
              borderRadius: 10,
              fontSize: 15,
              fontWeight: 500,
              background: "color-mix(in srgb, var(--color-surface) 30%, transparent)",
              transition: "background 0.2s ease",
            }}
            onClick={() => setIsMenuOpen(false)}
          >
            Marketplace
          </a>
          <a
            href="#"
            className="text-accent-hover"
            style={{
              padding: "14px 16px",
              borderRadius: 10,
              fontSize: 15,
              fontWeight: 500,
              background: "color-mix(in srgb, var(--color-surface) 30%, transparent)",
              transition: "background 0.2s ease",
            }}
            onClick={() => setIsMenuOpen(false)}
          >
            Docs
          </a>

          <div
            style={{
              height: 1,
              background: "rgba(255,255,255,0.2)",
              margin: "12px 0",
            }}
          />

          <button
            className="accent-outline"
            style={{
              padding: "12px 16px",
              borderRadius: 10,
              marginBottom: 8,
              background: "color-mix(in srgb, var(--color-surface) 30%, transparent)",
            }}
            onClick={() => setIsMenuOpen(false)}
          >
            Sign In
          </button>
          <button
            className="btn-gradient hover-lift"
            style={{ padding: "12px 16px", borderRadius: 10 }}
            onClick={() => setIsMenuOpen(false)}
          >
            Create
          </button>
        </div>
      )}

      <style>{`
        @keyframes glassSlide {
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
