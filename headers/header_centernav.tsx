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
        className="bg-surface shadow-accent-hover fade-in"
        style={{
          position: "sticky",
          top: 0,
          zIndex: 1000,
          height: 76,
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "0 24px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
            height: "100%",
          }}
        >
          {/* Left links */}
          {!isMobile && (
            <nav
              style={{
                position: "absolute",
                left: 24,
                display: "flex",
                gap: 28,
                alignItems: "center",
                fontSize: 15,
              }}
            >
              <a href="#" className="text-accent-hover">
                Shop
              </a>
              <a href="#" className="text-accent-hover">
                Categories
              </a>
            </nav>
          )}

          {/* Center logo with floating plate */}
          <div
            className="bg-gradient-accent shadow-accent-hover hover-lift"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "10px 18px",
              borderRadius: 12,
              gap: 10,
              transform: "translateY(-2px)",
            }}
          >
            <div
              className="bg-surface"
              style={{ width: 24, height: 24, borderRadius: 6 }}
            />
            <span
              style={{
                color: "var(--color-surface)",
                fontWeight: 800,
                fontSize: 18,
              }}
            >
              Mosaic
            </span>
          </div>

          {/* Right links */}
          {!isMobile && (
            <nav
              style={{
                position: "absolute",
                right: 24,
                display: "flex",
                gap: 28,
                alignItems: "center",
                fontSize: 15,
              }}
            >
              <a href="#" className="text-accent-hover">
                Search
              </a>
              <a href="#" className="text-accent-hover">
                Cart
              </a>
            </nav>
          )}

          {/* Mobile hamburger */}
          {isMobile && (
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              style={{
                position: "absolute",
                right: 16,
                background: "none",
                border: "none",
                cursor: "pointer",
                fontSize: 24,
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

      {/* Mobile menu - centered card style */}
      {isMobile && (
        <div
          style={{
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: isMenuOpen
              ? "translate(-50%, -50%) scale(1)"
              : "translate(-50%, -50%) scale(0.9)",
            width: "85%",
            maxWidth: 340,
            background: "var(--color-surface)",
            boxShadow: "0 20px 60px rgba(0,0,0,0.3)",
            display: isMenuOpen ? "flex" : "none",
            flexDirection: "column",
            padding: "32px 24px",
            gap: 6,
            borderRadius: 20,
            zIndex: 1000,
            opacity: isMenuOpen ? 1 : 0,
            transition: "all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",
          }}
        >
          <div
            className="bg-gradient-accent"
            style={{
              width: 48,
              height: 48,
              borderRadius: 12,
              margin: "0 auto 20px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              className="bg-surface"
              style={{ width: 28, height: 28, borderRadius: 8 }}
            />
          </div>

          <a
            href="#"
            className="text-accent-hover"
            style={{
              padding: "16px",
              textAlign: "center",
              fontSize: 16,
              fontWeight: 500,
              borderRadius: 12,
              transition: "background 0.2s ease",
            }}
            onClick={() => setIsMenuOpen(false)}
            onMouseEnter={(e) => {
              e.currentTarget.style.background =
                "var(--color-surface-alt, #f5f5f5)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "transparent";
            }}
          >
            Shop
          </a>
          <a
            href="#"
            className="text-accent-hover"
            style={{
              padding: "16px",
              textAlign: "center",
              fontSize: 16,
              fontWeight: 500,
              borderRadius: 12,
              transition: "background 0.2s ease",
            }}
            onClick={() => setIsMenuOpen(false)}
            onMouseEnter={(e) => {
              e.currentTarget.style.background =
                "var(--color-surface-alt, #f5f5f5)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "transparent";
            }}
          >
            Categories
          </a>
          <a
            href="#"
            className="text-accent-hover"
            style={{
              padding: "16px",
              textAlign: "center",
              fontSize: 16,
              fontWeight: 500,
              borderRadius: 12,
              transition: "background 0.2s ease",
            }}
            onClick={() => setIsMenuOpen(false)}
            onMouseEnter={(e) => {
              e.currentTarget.style.background =
                "var(--color-surface-alt, #f5f5f5)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "transparent";
            }}
          >
            Search
          </a>
          <a
            href="#"
            className="text-accent-hover"
            style={{
              padding: "16px",
              textAlign: "center",
              fontSize: 16,
              fontWeight: 500,
              borderRadius: 12,
              transition: "background 0.2s ease",
            }}
            onClick={() => setIsMenuOpen(false)}
            onMouseEnter={(e) => {
              e.currentTarget.style.background =
                "var(--color-surface-alt, #f5f5f5)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "transparent";
            }}
          >
            Cart
          </a>
        </div>
      )}
    </>
  );
}
