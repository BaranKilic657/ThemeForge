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

  const links = ["Overview", "Pricing", "Docs", "Community"];

  return (
    <>
      <header
        className="bg-surface-alt fade-in"
        style={{
          position: "sticky",
          top: 0,
          zIndex: 1000,
          height: 90,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: isMobile ? "0 20px" : "0",
        }}
      >
        {!isMobile ? (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 20,
            }}
          >
            {links.map((item, i) => (
              <div
                key={item}
                className={`shadow-accent-hover hover-lift float`}
                style={{
                  animationDelay: `${i * 0.5}s`,
                  background:
                    "color-mix(in srgb, var(--color-surface) 80%, var(--color-accent) 5%)",
                  borderRadius: 30,
                  padding: "10px 20px",
                }}
              >
                <a
                  href="#"
                  className="text-accent-hover"
                  style={{ fontWeight: 500 }}
                >
                  {item}
                </a>
              </div>
            ))}
          </div>
        ) : (
          <div
            style={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <span className="text-main" style={{ fontWeight: 700, fontSize: 17 }}>
              FloatNav
            </span>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              style={{
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

      {/* Mobile menu - floating pills stacked */}
      {isMobile && (
        <div
          style={{
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: isMenuOpen
              ? "translate(-50%, -50%)"
              : "translate(-50%, -45%)",
            width: "80%",
            maxWidth: 280,
            display: isMenuOpen ? "flex" : "none",
            flexDirection: "column",
            gap: 16,
            zIndex: 1000,
            opacity: isMenuOpen ? 1 : 0,
            transition: "all 0.3s ease",
          }}
        >
          {links.map((item, i) => (
            <div
              key={item}
              className="shadow-accent-hover hover-lift"
              style={{
                background:
                  "color-mix(in srgb, var(--color-surface) 85%, var(--color-accent) 5%)",
                borderRadius: 30,
                padding: "16px 24px",
                textAlign: "center",
                animation: isMenuOpen
                  ? `floatIn 0.4s ease ${i * 0.1}s both`
                  : "none",
              }}
            >
              <a
                href="#"
                className="text-accent-hover"
                style={{ fontWeight: 500, fontSize: 16 }}
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            </div>
          ))}
        </div>
      )}

      <style>{`
        @keyframes floatIn {
          from {
            opacity: 0;
            transform: translateY(20px) scale(0.9);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
      `}</style>
    </>
  );
}
