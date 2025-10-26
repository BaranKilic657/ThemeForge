import React from "react";

export default function Header() {
  return (
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
      </div>
    </header>
  );
}
