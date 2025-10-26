import React, { useEffect, useState } from "react";

export default function Header() {
  const [isMobile, setIsMobile] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [progress, setProgress] = useState(0);

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
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      setProgress((scrollTop / docHeight) * 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className="bg-surface shadow-accent-hover fade-in"
        style={{
          position: "sticky",
          top: 0,
          zIndex: 1000,
          height: 70,
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
          <span className="text-main" style={{ fontWeight: 700 }}>
            Timeline
          </span>
          {!isMobile ? (
            <nav style={{ display: "flex", gap: 28, fontSize: 14 }}>
              <a href="#" className="text-accent-hover">
                Intro
              </a>
              <a href="#" className="text-accent-hover">
                Process
              </a>
              <a href="#" className="text-accent-hover">
                Team
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

        {/* Progress bar */}
        <div
          className="bg-gradient-accent"
          style={{
            height: 4,
            width: `${progress}%`,
            transition: "width 0.2s ease-out",
          }}
        />
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

      {/* Mobile menu - with progress indicator */}
      {isMobile && (
        <div
          className="bg-surface shadow-surface"
          style={{
            position: "fixed",
            top: 70,
            right: 0,
            width: "280px",
            display: isMenuOpen ? "flex" : "none",
            flexDirection: "column",
            padding: "0",
            borderBottomLeftRadius: 12,
            overflow: "hidden",
            zIndex: 1000,
            animation: isMenuOpen ? "timelineSlide 0.3s ease" : "none",
          }}
        >
          {/* Progress indicator at top */}
          <div style={{ padding: "16px 20px", background: "var(--color-surface-alt, #f5f5f5)" }}>
            <div style={{ fontSize: 11, fontWeight: 600, color: "var(--color-muted)", marginBottom: 8 }}>
              READING PROGRESS
            </div>
            <div style={{ width: "100%", height: 6, background: "rgba(0,0,0,0.1)", borderRadius: 3, overflow: "hidden" }}>
              <div
                className="bg-gradient-accent"
                style={{
                  height: "100%",
                  width: `${progress}%`,
                  transition: "width 0.2s ease-out",
                }}
              />
            </div>
          </div>

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
              Intro
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
              Process
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
              Contact
            </a>
          </div>
        </div>
      )}

      <style>{`
        @keyframes timelineSlide {
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
