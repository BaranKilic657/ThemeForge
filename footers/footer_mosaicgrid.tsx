import React from "react";

export default function Footer() {
  const tiles = [
    { title: "Company", links: ["About", "Careers", "Press", "Contact"] },
    { title: "Product", links: ["Overview", "Pricing", "Integrations", "Roadmap"] },
    { title: "Resources", links: ["Docs", "API", "Tutorials", "Guides"] },
    { title: "Community", links: ["Blog", "Forum", "Events", "Support"] },
  ];

  return (
    <footer className="bg-surface-alt fade-up" style={{ padding: "80px 24px 40px" }}>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: 24,
          maxWidth: "1100px",
          margin: "0 auto",
        }}
      >
        {tiles.map((tile, i) => (
          <div
            key={tile.title}
            className={`${
              i % 2 === 0 ? "bg-gradient-accent" : "bg-gradient-secondary"
            } hover-lift`}
            style={{
              borderRadius: 14,
              padding: "24px 20px",
              color: "var(--color-surface)",
              boxShadow: "0 4px 14px rgba(0,0,0,0.1)",
              transition: "transform var(--transition-speed) ease",
            }}
          >
            <h4 style={{ fontWeight: 700, marginBottom: 10 }}>{tile.title}</h4>
            <ul style={{ listStyle: "none", padding: 0, lineHeight: 1.8 }}>
              {tile.links.map((link) => (
                <li key={link}>
                  <a href="#" className="text-accent-hover" style={{ color: "var(--color-surface)" }}>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <p className="text-muted" style={{ textAlign: "center", marginTop: 40 }}>
        © {new Date().getFullYear()} Mosaic Studio
      </p>
    </footer>
  );
}
