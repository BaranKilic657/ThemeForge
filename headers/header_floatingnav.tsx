import React from "react";

export default function Header() {
  const links = ["Overview", "Pricing", "Docs", "Community"];

  return (
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
      }}
    >
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
              background: "color-mix(in srgb, var(--color-surface) 80%, var(--color-accent) 5%)",
              borderRadius: 30,
              padding: "10px 20px",
            }}
          >
            <a href="#" className="text-accent-hover" style={{ fontWeight: 500 }}>
              {item}
            </a>
          </div>
        ))}
      </div>
    </header>
  );
}
