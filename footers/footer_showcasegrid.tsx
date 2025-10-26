import React from "react";

export default function Footer() {
  const brands = ["Dribbble", "Notion", "Figma", "Stripe", "Vercel", "Airbnb"];

  return (
    <footer
      className="bg-surface-alt fade-up"
      style={{
        padding: "80px 24px 50px",
        textAlign: "center",
      }}
    >
      <h3 className="text-main" style={{ fontWeight: 800, marginBottom: 20 }}>
        Trusted by leading brands
      </h3>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))",
          gap: 32,
          alignItems: "center",
          justifyItems: "center",
          maxWidth: "900px",
          margin: "0 auto",
          marginBottom: 40,
        }}
      >
        {brands.map((brand) => (
          <div
            key={brand}
            className="hover-lift shadow-accent-hover"
            style={{
              borderRadius: 10,
              padding: "16px 12px",
              minWidth: 100,
              textAlign: "center",
              transition: "transform var(--transition-speed)",
            }}
          >
            <span className="text-accent">{brand}</span>
          </div>
        ))}
      </div>

      <p className="text-muted" style={{ fontSize: 13 }}>
        © {new Date().getFullYear()} ShowcaseWorks. All rights reserved.
      </p>
    </footer>
  );
}
