import React, { useEffect, useState } from "react";

export default function Header() {
  const [isMobile, setIsMobile] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className="bg-surface shadow-surface fade-in"
        style={{
          position: "sticky",
          top: 0,
          zIndex: 1000,
          transition:
            "height var(--transition-speed) ease, transform var(--transition-speed) ease",
          height: scrolled ? 56 : 80,
          transform: scrolled ? "scale(0.98)" : "scale(1)",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "0 24px",
            height: "100%",
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
              Scrolla
            </span>
          </div>

          {!isMobile ? (
            <nav style={{ display: "flex", gap: 28 }}>
              <a href="#" className="text-accent-hover">
                Features
              </a>
              <a href="#" className="text-accent-hover">
                Pricing
              </a>
              <a href="#" className="text-accent-hover">
                Docs
              </a>
              <a href="#" className="text-accent-hover">
                Support
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

      {/* Mobile menu - compact shrinking style */}
      {isMobile && (
        <div
          className="bg-surface shadow-surface"
          style={{
            position: "fixed",
            top: scrolled ? 56 : 80,
            right: 0,
            width: "260px",
            display: isMenuOpen ? "flex" : "none",
            flexDirection: "column",
            padding: "16px",
            gap: 2,
            borderBottomLeftRadius: 12,
            zIndex: 1000,
            transition: "top var(--transition-speed) ease",
            animation: isMenuOpen ? "shrinkSlide 0.3s ease" : "none",
          }}
        >
          <a
            href="#"
            className="text-accent-hover"
            style={{
              padding: "12px",
              fontSize: 14,
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
            Features
          </a>
          <a
            href="#"
            className="text-accent-hover"
            style={{
              padding: "12px",
              fontSize: 14,
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
            Pricing
          </a>
          <a
            href="#"
            className="text-accent-hover"
            style={{
              padding: "12px",
              fontSize: 14,
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
            Docs
          </a>
          <a
            href="#"
            className="text-accent-hover"
            style={{
              padding: "12px",
              fontSize: 14,
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
            Support
          </a>
        </div>
      )}

      <style>{`
        @keyframes shrinkSlide {
          from {
            opacity: 0;
            transform: translateX(20px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateX(0) scale(1);
          }
        }
      `}</style>
    </>
  );
}
