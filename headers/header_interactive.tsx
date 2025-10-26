"use client";
import React, { useState, useEffect } from "react";

export default function Header() {
  const [isMobile, setIsMobile] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);
  const items = ["Home", "Features", "Pricing", "Resources", "Contact"];

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
          height: 70,
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
            position: "relative",
          }}
        >
          <span className="text-main" style={{ fontWeight: 700 }}>
            AccentFlow
          </span>

          {!isMobile && (
            <nav
              style={{
                display: "flex",
                gap: 28,
                position: "relative",
              }}
            >
              {items.map((item, i) => (
                <div
                  key={item}
                  onMouseEnter={() => setHoverIndex(i)}
                  onMouseLeave={() => setHoverIndex(null)}
                  style={{ position: "relative" }}
                >
                  <a
                    href="#"
                    className="text-accent-hover"
                    style={{ padding: "6px 0" }}
                  >
                    {item}
                  </a>
                  {hoverIndex === i && (
                    <div
                      className="bg-gradient-accent fade-in"
                      style={{
                        position: "absolute",
                        bottom: -4,
                        left: 0,
                        height: 3,
                        width: "100%",
                        borderRadius: 3,
                      }}
                    />
                  )}
                </div>
              ))}
            </nav>
          )}

          {!isMobile ? (
            <button
              className="btn-gradient hover-lift"
              style={{ padding: "10px 14px", borderRadius: 10 }}
            >
              Join
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

      {/* Mobile menu - interactive with accent bars */}
      {isMobile && (
        <div
          className="bg-surface"
          style={{
            position: "fixed",
            top: 70,
            right: 0,
            width: "280px",
            display: isMenuOpen ? "flex" : "none",
            flexDirection: "column",
            padding: "20px",
            gap: 4,
            boxShadow: "-2px 4px 20px rgba(0,0,0,0.15)",
            zIndex: 1000,
            animation: isMenuOpen ? "interactiveSlide 0.3s ease" : "none",
          }}
        >
          {items.map((item) => (
            <div
              key={item}
              style={{
                position: "relative",
                overflow: "hidden",
                borderRadius: 8,
              }}
            >
              <a
                href="#"
                className="text-accent-hover"
                style={{
                  display: "block",
                  padding: "14px 16px",
                  fontSize: 15,
                  fontWeight: 500,
                  position: "relative",
                  zIndex: 1,
                }}
                onClick={() => setIsMenuOpen(false)}
                onMouseEnter={(e) => {
                  const bar = e.currentTarget.nextElementSibling as HTMLElement;
                  if (bar) bar.style.width = "100%";
                }}
                onMouseLeave={(e) => {
                  const bar = e.currentTarget.nextElementSibling as HTMLElement;
                  if (bar) bar.style.width = "0%";
                }}
              >
                {item}
              </a>
              <div
                className="bg-gradient-accent"
                style={{
                  position: "absolute",
                  left: 0,
                  top: 0,
                  bottom: 0,
                  width: "0%",
                  opacity: 0.1,
                  transition: "width 0.3s ease",
                  zIndex: 0,
                }}
              />
            </div>
          ))}

          <button
            className="btn-gradient hover-lift"
            style={{
              padding: "12px 16px",
              borderRadius: 10,
              marginTop: 12,
            }}
            onClick={() => setIsMenuOpen(false)}
          >
            Join
          </button>
        </div>
      )}

      <style>{`
        @keyframes interactiveSlide {
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
