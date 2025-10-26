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

  const bar: React.CSSProperties = {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "0 20px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    height: 70,
  };

  const underline: React.CSSProperties = {
    position: "absolute",
    left: 0,
    bottom: -6,
    height: 2,
    width: "100%",
    borderRadius: 999,
  };

  return (
    <>
      <header
        className="bg-surface-alt shadow-accent-hover"
        style={{ position: "sticky", top: 0, zIndex: 1000 }}
      >
        <div style={bar}>
          {/* Logo */}
          <div style={{ display: "flex", alignItems: "center", gap: 10, position: "relative" }}>
            <div className="accent" style={{ width: 24, height: 24, borderRadius: 6 }} />
            <span className="text-main" style={{ fontWeight: 700, fontSize: 18 }}>FlowDesk</span>
          </div>

          {/* Desktop nav */}
          {!isMobile && (
            <nav style={{ display: "flex", gap: 26, alignItems: "center" }}>
              {["Home", "Products", "Docs", "Blog"].map((item) => (
                <a
                  key={item}
                  className="text-accent-hover"
                  href="#"
                  style={{ position: "relative", paddingBottom: 6, fontSize: 14 }}
                  onMouseEnter={(e) => {
                    const u = (e.currentTarget.querySelector(".u") as HTMLDivElement) || null;
                    if (u) u.style.opacity = "1";
                  }}
                  onMouseLeave={(e) => {
                    const u = (e.currentTarget.querySelector(".u") as HTMLDivElement) || null;
                    if (u) u.style.opacity = "0";
                  }}
                >
                  {item}
                  <div
                    className="bg-gradient-accent u fade-in"
                    style={{ ...underline, opacity: 0, transition: "opacity var(--transition-speed) ease" }}
                  />
                </a>
              ))}
            </nav>
          )}

          {/* Actions */}
          {!isMobile ? (
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <button className="accent-outline" style={{ padding: "8px 12px", borderRadius: 8 }}>
                Sign in
              </button>
              <button className="btn-gradient hover-lift" style={{ padding: "10px 14px", borderRadius: 10 }}>
                Launch App
              </button>
            </div>
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

      {/* Mobile menu - with underline accents */}
      {isMobile && (
        <div
          className="bg-surface-alt shadow-surface"
          style={{
            position: "fixed",
            top: 70,
            right: 0,
            width: "280px",
            display: isMenuOpen ? "flex" : "none",
            flexDirection: "column",
            padding: "20px",
            gap: 8,
            borderBottomLeftRadius: 12,
            zIndex: 1000,
            animation: isMenuOpen ? "underlineSlide 0.3s ease" : "none",
          }}
        >
          {["Home", "Products", "Docs", "Blog"].map((item) => (
            <div key={item} style={{ position: "relative", paddingBottom: 8, borderBottom: "2px solid transparent" }}>
              <a
                href="#"
                className="text-accent-hover"
                style={{
                  display: "block",
                  padding: "12px 8px",
                  fontSize: 15,
                  fontWeight: 500,
                }}
                onClick={() => setIsMenuOpen(false)}
                onMouseEnter={(e) => {
                  const border = e.currentTarget.parentElement;
                  if (border) border.style.borderBottom = "2px solid var(--color-accent)";
                }}
                onMouseLeave={(e) => {
                  const border = e.currentTarget.parentElement;
                  if (border) border.style.borderBottom = "2px solid transparent";
                }}
              >
                {item}
              </a>
            </div>
          ))}

          <div style={{ marginTop: 16, display: "flex", flexDirection: "column", gap: 8 }}>
            <button
              className="accent-outline"
              style={{ padding: "10px 12px", borderRadius: 8, width: "100%" }}
              onClick={() => setIsMenuOpen(false)}
            >
              Sign in
            </button>
            <button
              className="btn-gradient hover-lift"
              style={{ padding: "12px 14px", borderRadius: 10, width: "100%" }}
              onClick={() => setIsMenuOpen(false)}
            >
              Launch App
            </button>
          </div>
        </div>
      )}

      <style>{`
        @keyframes underlineSlide {
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
