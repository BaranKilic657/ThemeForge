import React, { useEffect, useState } from "react";

export default function Header() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      setProgress((scrollTop / docHeight) * 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
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
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <span className="text-main" style={{ fontWeight: 700 }}>
          Timeline
        </span>
        <nav style={{ display: "flex", gap: 28, fontSize: 14 }}>
          <a href="#" className="text-accent-hover">Intro</a>
          <a href="#" className="text-accent-hover">Process</a>
          <a href="#" className="text-accent-hover">Team</a>
          <a href="#" className="text-accent-hover">Contact</a>
        </nav>
      </div>

      {/* Progress bar */}
      <div
        className="bg-gradient-accent"
        style={{
          height: 4,
          width: `${progress}%`,
          transition: "width 0.2s ease-out",
        }}
      />
    </header>
  );
}
