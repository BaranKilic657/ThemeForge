"use client";
import React, { useState, useEffect } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);
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
        className="bg-surface-alt shadow-accent-hover fade-in"
        style={{
          position: "sticky",
          top: 0,
          zIndex: 1000,
          overflow: "hidden",
          height: 80,
          transition: "height var(--transition-speed) ease",
          cursor: isMobile ? "default" : "pointer",
        }}
        onMouseEnter={() => !isMobile && setOpen(true)}
        onMouseLeave={() => !isMobile && setOpen(false)}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "0 24px",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
          }}
        >
          {/* Desktop - Left side nav */}
          {!isMobile && (
            <nav
              className={open ? "fade-left" : ""}
              style={{
                display: "flex",
                gap: 28,
                position: "absolute",
                left: "5%",
                opacity: open ? 1 : 0,
                transform: open ? "translateX(0)" : "translateX(-20px)",
                transition: "all var(--transition-speed) ease",
                fontSize: 15,
              }}
            >
              <a href="#" className="text-accent-hover">
                Home
              </a>
              <a href="#" className="text-accent-hover">
                About
              </a>
            </nav>
          )}

          {/* Center logo with subtle glow */}
          <div
            className={`${
              open ? "shadow-accent hover-lift" : "shadow-accent-hover"
            } bg-gradient-accent fade-in`}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 10,
              borderRadius: 14,
              padding: "10px 22px",
              transition:
                "transform var(--transition-speed) ease, box-shadow var(--transition-speed) ease",
            }}
          >
            <div
              className="bg-surface"
              style={{
                width: 26,
                height: 26,
                borderRadius: 8,
                transition: "transform var(--transition-speed) ease",
                transform: open ? "rotate(15deg)" : "rotate(0deg)",
              }}
            />
            <span
              style={{
                color: "var(--color-surface)",
                fontWeight: 800,
                fontSize: 18,
              }}
            >
              RevealX
            </span>
          </div>

          {/* Desktop - Right side nav */}
          {!isMobile ? (
            <nav
              className={open ? "fade-right" : ""}
              style={{
                display: "flex",
                gap: 28,
                position: "absolute",
                right: "5%",
                opacity: open ? 1 : 0,
                transform: open ? "translateX(0)" : "translateX(20px)",
                transition: "all var(--transition-speed) ease",
                fontSize: 15,
              }}
            >
              <a href="#" className="text-accent-hover">
                Services
              </a>
              <a href="#" className="text-accent-hover">
                Contact
              </a>
            </nav>
          ) : (
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              style={{
                position: "absolute",
                right: "5%",
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

        {/* Accent motion bar (subtle visual feedback) */}
        <div
          className="bg-gradient-accent"
          style={{
            height: 3,
            opacity: !isMobile && open ? 1 : 0,
            transform: !isMobile && open ? "scaleX(1)" : "scaleX(0)",
            transformOrigin: "center",
            transition: "all var(--transition-speed) ease",
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

      {/* Mobile menu - center-focused reveal */}
      {isMobile && (
        <div
          className="bg-surface-alt shadow-accent"
          style={{
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: isMenuOpen ? "translate(-50%, -50%) scale(1)" : "translate(-50%, -50%) scale(0.9)",
            width: "85%",
            maxWidth: "320px",
            display: isMenuOpen ? "flex" : "none",
            flexDirection: "column",
            padding: "32px 24px",
            gap: 8,
            borderRadius: 16,
            zIndex: 1000,
            opacity: isMenuOpen ? 1 : 0,
            transition: "all 0.3s ease",
          }}
        >
          {/* Logo at top */}
          <div
            className="bg-gradient-accent shadow-accent"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 10,
              borderRadius: 12,
              padding: "12px 20px",
              marginBottom: 16,
            }}
          >
            <div className="bg-surface" style={{ width: 24, height: 24, borderRadius: 6 }} />
            <span style={{ color: "var(--color-surface)", fontWeight: 800, fontSize: 17 }}>RevealX</span>
          </div>

          {/* Nav links */}
          <nav style={{ display: "flex", flexDirection: "column", gap: 4 }}>
            {["Home", "About", "Services", "Contact"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-accent-hover"
                style={{
                  padding: "14px 12px",
                  borderRadius: 10,
                  fontSize: 15,
                  textAlign: "center",
                }}
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Accent bar at bottom */}
          <div
            className="bg-gradient-accent"
            style={{
              height: 3,
              marginTop: 16,
              borderRadius: 999,
            }}
          />
        </div>
      )}
    </>
  );
}
