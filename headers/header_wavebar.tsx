"use client";
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
          overflow: "hidden",
        }}
      >
        {/* Top Row */}
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "0 24px",
            height: 72,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div className="bg-gradient-accent" style={{ width: 28, height: 28, borderRadius: 8 }} />
            <span className="text-main" style={{ fontWeight: 700 }}>
              WaveLabs
            </span>
          </div>

          {!isMobile ? (
            <nav style={{ display: "flex", gap: 28 }}>
              <a href="#" className="text-accent-hover">Work</a>
              <a href="#" className="text-accent-hover">Process</a>
              <a href="#" className="text-accent-hover">Team</a>
              <a href="#" className="text-accent-hover">Contact</a>
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

        {/* Animated wave line */}
        <div
          className="bg-gradient-accent pulse-accent"
          style={{
            height: 6,
            animation: "float 4s ease-in-out infinite",
            opacity: 0.8,
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

      {/* Mobile menu with wave accent */}
      {isMobile && (
        <div
          className="bg-surface shadow-surface"
          style={{
            position: "fixed",
            top: 0,
            right: 0,
            width: "260px",
            height: "100%",
            display: isMenuOpen ? "flex" : "none",
            flexDirection: "column",
            paddingTop: "80px",
            zIndex: 1000,
            animation: isMenuOpen ? "waveSlide 0.4s ease" : "none",
          }}
        >
          {/* Wave accent at top */}
          <div
            className="bg-gradient-accent pulse-accent"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: 6,
              animation: "float 4s ease-in-out infinite",
              opacity: 0.8,
            }}
          />

          <nav style={{ display: "flex", flexDirection: "column", gap: 4, padding: "0 20px" }}>
            {["Work", "Process", "Team", "Contact"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-accent-hover"
                style={{
                  padding: "14px 12px",
                  borderRadius: 8,
                  fontSize: 15,
                }}
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </nav>
        </div>
      )}

      <style>{`
        @keyframes waveSlide {
          from {
            opacity: 0;
            transform: translateX(100%);
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
