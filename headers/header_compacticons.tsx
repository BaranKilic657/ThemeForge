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
        className="bg-surface-alt shadow-accent-hover fade-in"
        style={{
          position: "sticky",
          top: 0,
          zIndex: 1000,
          height: 56,
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "0 20px",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* Left zone */}
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div
              className="bg-gradient-secondary"
              style={{ width: 28, height: 28, borderRadius: 8 }}
            />
            <span className="text-main" style={{ fontWeight: 700 }}>
              FluxBoard
            </span>
          </div>

          {/* Desktop - Middle nav icons */}
          {!isMobile && (
            <nav
              style={{
                display: "flex",
                gap: 24,
                alignItems: "center",
                fontSize: 14,
              }}
            >
              <a href="#" className="text-accent-hover">
                📊 Dashboard
              </a>
              <a href="#" className="text-accent-hover">
                🔔 Alerts
              </a>
              <a href="#" className="text-accent-hover">
                📁 Projects
              </a>
              <a href="#" className="text-accent-hover">
                ⚙️ Settings
              </a>
            </nav>
          )}

          {/* Right user action / hamburger */}
          {!isMobile ? (
            <button
              className="btn-gradient hover-lift"
              style={{
                padding: "8px 14px",
                borderRadius: 8,
                fontSize: 14,
              }}
            >
              + New
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

      {/* Mobile menu - icon grid layout */}
      {isMobile && (
        <div
          className="bg-surface-alt shadow-surface"
          style={{
            position: "fixed",
            top: 56,
            right: 0,
            width: "280px",
            display: isMenuOpen ? "flex" : "none",
            flexDirection: "column",
            padding: "24px 20px",
            gap: 12,
            borderBottomLeftRadius: 12,
            zIndex: 1000,
            animation: isMenuOpen ? "compactSlide 0.3s ease" : "none",
          }}
        >
          {/* Icon-based navigation */}
          <nav style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
            {[
              { icon: "📊", label: "Dashboard" },
              { icon: "🔔", label: "Alerts" },
              { icon: "📁", label: "Projects" },
              { icon: "⚙️", label: "Settings" },
            ].map((item) => (
              <a
                key={item.label}
                href="#"
                className="text-accent-hover hover-lift"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "20px 12px",
                  borderRadius: 10,
                  fontSize: 13,
                  gap: 8,
                  border: "1px solid var(--color-border)",
                }}
                onClick={() => setIsMenuOpen(false)}
              >
                <span style={{ fontSize: 24 }}>{item.icon}</span>
                <span>{item.label}</span>
              </a>
            ))}
          </nav>

          {/* New button */}
          <button
            className="btn-gradient hover-lift"
            style={{
              padding: "12px 16px",
              borderRadius: 10,
              fontSize: 14,
              marginTop: 8,
            }}
            onClick={() => setIsMenuOpen(false)}
          >
            + New
          </button>
        </div>
      )}

      <style>{`
        @keyframes compactSlide {
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
