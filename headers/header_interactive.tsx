"use client";
import React, { useState } from "react";

export default function Header() {
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);
  const items = ["Home", "Features", "Pricing", "Resources", "Contact"];

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
              <a href="#" className="text-accent-hover" style={{ padding: "6px 0" }}>
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

        <button
          className="btn-gradient hover-lift"
          style={{ padding: "10px 14px", borderRadius: 10 }}
        >
          Join
        </button>
      </div>
    </header>
    </>
  );
}
