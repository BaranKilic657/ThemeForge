"use client";
import React, { useEffect, useState } from "react";

export default function Footer() {
  const [angle, setAngle] = useState(0);
  const [position, setPosition] = useState({ x: 50, y: 50 });

  useEffect(() => {
    let frame: number;
    let time = 0;
    const animate = () => {
      time += 0.01;
      setAngle((a) => (a + 0.2) % 360);
      // Create smooth circular motion for radial gradient
      setPosition({
        x: 50 + Math.sin(time) * 20,
        y: 50 + Math.cos(time * 0.7) * 15,
      });
      frame = requestAnimationFrame(animate);
    };
    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <footer
      className="fade-in shadow-accent-hover"
      style={{
        position: "relative",
        padding: "80px 24px 50px",
        color: "var(--color-surface)",
        background: `
          radial-gradient(
            circle at ${position.x}% ${position.y}%,
            color-mix(in srgb, var(--color-secondary) 60%, transparent 40%) 0%,
            transparent 50%
          ),
          linear-gradient(
            ${angle}deg,
            color-mix(in srgb, var(--color-accent) 85%, var(--color-secondary) 15%) 0%,
            color-mix(in srgb, var(--color-accent-hover) 70%, var(--color-bg) 30%) 100%
          )
        `,
        overflow: "hidden",
      }}
    >
      <div
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        <h2 style={{ fontWeight: 800, fontSize: 26, marginBottom: 10 }}>
          AuroraMotion
        </h2>
        <p style={{ opacity: 0.9, marginBottom: 28 }}>
          Subtle moving gradient, creating calm visual motion at rest.
        </p>

        <div style={{ display: "flex", justifyContent: "center", gap: 28 }}>
          <a href="#" className="text-accent-hover" style={{ color: "var(--color-surface)" }}>
            About
          </a>
          <a href="#" className="text-accent-hover" style={{ color: "var(--color-surface)" }}>
            Work
          </a>
          <a href="#" className="text-accent-hover" style={{ color: "var(--color-surface)" }}>
            Contact
          </a>
        </div>

        <p style={{ opacity: 0.8, fontSize: 13, marginTop: 40 }}>
          © {new Date().getFullYear()} AuroraMotion Design
        </p>
      </div>
    </footer>
  );
}
