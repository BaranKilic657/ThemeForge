import React from "react";

export default function Header() {
  const container: React.CSSProperties = {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "0 24px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    height: 72,
  };

  return (
    <header
      className="bg-gradient-accent fade-in"
      style={{
        position: "sticky",
        top: 0,
        zIndex: 1000,
      }}
    >
      <div style={container}>
        <a
          href="#"
          className="text-surface text-accent-hover"
          style={{ fontWeight: 500, color: "var(--color-surface)" }}
        >
          Overview
        </a>

        <div style={{ textAlign: "center" }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
            }}
          >
            <div
              className="preview-secondary"
              style={{
                width: 40,
                height: 40,
                borderRadius: 12,
              }}
            />
            <span
              style={{
                color: "var(--color-surface)",
                fontWeight: 800,
                fontSize: 20,
              }}
            >
              NovaSphere
            </span>
          </div>
        </div>

        <button
          className="accent-outline hover-lift"
          style={{
            padding: "10px 16px",
            borderRadius: 10,
            fontWeight: 500,
            color: "var(--color-surface)",
            borderColor: "var(--color-surface)",
          }}
        >
          Login
        </button>
      </div>
    </header>
  );
}
