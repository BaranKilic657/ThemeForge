"use client";
import React, { useEffect, useRef, useState } from "react";

export default function Footer() {
  const [visible, setVisible] = useState(false);
  const footerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.2 }
    );
    if (footerRef.current) observer.observe(footerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <footer
      ref={footerRef}
      className="bg-surface shadow-accent-hover fade-up"
      style={{
        position: "relative",
        padding: "80px 24px 40px",
        textAlign: "center",
        overflow: "hidden",
      }}
    >
      <div
        className="fade-up"
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          position: "relative",
          zIndex: 2,
        }}
      >
        <h2 className="text-main" style={{ fontWeight: 800, marginBottom: 12 }}>
          DynamicAccent
        </h2>
        <p className="text-muted" style={{ marginBottom: 28 }}>
          A smooth, animated footer accent that reacts as you reach the end.
        </p>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 28,
            fontSize: 15,
          }}
        >
          <a href="#" className="text-accent-hover">About</a>
          <a href="#" className="text-accent-hover">Careers</a>
          <a href="#" className="text-accent-hover">Contact</a>
        </div>
      </div>

      {/* Animated gradient accent bar */}
      <div
        className="bg-gradient-accent"
        style={{
          height: 6,
          width: visible ? "100%" : "0%",
          position: "absolute",
          bottom: 0,
          left: 0,
          transition: "width 1s ease-in-out",
          borderRadius: "0 6px 0 0",
        }}
      />

      <p
        className="text-muted"
        style={{
          marginTop: 40,
          fontSize: 13,
          opacity: 0.75,
        }}
      >
        © {new Date().getFullYear()} DynamicAccent Studio
      </p>
    </footer>
  );
}
