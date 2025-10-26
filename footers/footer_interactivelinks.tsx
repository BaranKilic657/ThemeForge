"use client";
import React, { useState } from "react";

export default function Footer() {
  const links = ["Overview", "Blog", "Docs", "Careers", "Contact"];
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <footer
      className="bg-surface shadow-accent-hover fade-in"
      style={{
        padding: "70px 24px 50px",
        textAlign: "center",
      }}
    >
      <h2 className="text-main" style={{ fontWeight: 800, marginBottom: 28 }}>
        Interactify
      </h2>

      <nav
        style={{
          display: "flex",
          justifyContent: "center",
          gap: 32,
          flexWrap: "wrap",
        }}
      >
        {links.map((link) => (
          <a
            key={link}
            href="#"
            className="text-accent-hover"
            onMouseEnter={() => setHovered(link)}
            onMouseLeave={() => setHovered(null)}
            style={{
              position: "relative",
              fontSize: 15,
              fontWeight: 500,
              padding: "6px 0",
              transition: "color var(--transition-speed) ease",
            }}
          >
            {link}
            <span
              className="bg-gradient-accent"
              style={{
                position: "absolute",
                left: 0,
                bottom: 0,
                height: 2,
                width: hovered === link ? "100%" : "0%",
                transition: "width 0.3s ease",
                borderRadius: 2,
              }}
            />
          </a>
        ))}
      </nav>

      <p
        className="text-muted"
        style={{
          marginTop: 40,
          fontSize: 13,
          opacity: 0.75,
          transition: "opacity var(--transition-speed)",
        }}
      >
        © {new Date().getFullYear()} Interactify Labs
      </p>
    </footer>
  );
}
