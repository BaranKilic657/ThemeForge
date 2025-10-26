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
          height: 80,
          background: `linear-gradient(135deg,
            var(--color-surface) 50%,
            var(--color-accent-hover) 50%
          )`,
          color: "var(--color-surface)",
        }}
        className="shadow-accent fade-in"
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
          <span
            className="text-main"
            style={{
              fontWeight: 800,
              fontSize: 20,
            }}
          >
            Diagon
          </span>

          {!isMobile ? (
            <nav
              style={{
                display: "flex",
                gap: 28,
                fontSize: 15,
                color: "var(--color-surface)",
              }}
            >
              <a href="#" className="">
                Studio
              </a>
              <a href="#" className="">
                Projects
              </a>
              <a href="#" className="">
                Clients
              </a>
              <a href="#" className="">
                Hire Us
              </a>
            </nav>
          ) : (
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              style={{
                background: "var(--color-surface)",
                border: "1px solid var(--color-border)",
                borderRadius: 8,
                cursor: "pointer",
                fontSize: 20,
                color: "var(--color-text)",
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

      {/* Mobile menu - diagonal accent theme */}
      {isMobile && (
        <div
          style={{
            position: "fixed",
            top: 80,
            left: 0,
            right: 0,
            background: "var(--color-surface)",
            display: isMenuOpen ? "block" : "none",
            zIndex: 1000,
            boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
            animation: isMenuOpen ? "diagonalSlide 0.3s ease" : "none",
            overflow: "hidden",
          }}
        >
          

          {/* Content layer with navigation */}
          <nav
            style={{
              position: "relative",
              display: "flex",
              flexDirection: "column",
              padding: "24px",
              gap: 8,
            }}
          >
            {["Studio", "Projects", "Clients", "Hire Us"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-accent-hover"
                style={{
                  padding: "16px",
                  fontSize: 16,
                  fontWeight: 500,
                  borderRadius: 10,
                  background: "rgba(0,0,0,0.03)",
                  border: "1px solid var(--color-border)",
                  transition: "all 0.2s ease",
                }}
                onClick={() => setIsMenuOpen(false)}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "rgba(0,0,0,0.06)";
                  e.currentTarget.style.transform = "translateX(4px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "rgba(0,0,0,0.03)";
                  e.currentTarget.style.transform = "translateX(0)";
                }}
              >
                {item}
              </a>
            ))}
          </nav>
        </div>
      )}

      <style>{`
        @keyframes diagonalSlide {
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
