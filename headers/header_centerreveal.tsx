import React, { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header
      className="bg-surface-alt shadow-accent-hover fade-in"
      style={{
        position: "sticky",
        top: 0,
        zIndex: 1000,
        overflow: "hidden",
        height: 80,
        transition: "height var(--transition-speed) ease",
        cursor: "pointer",
      }}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 24px",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
        }}
      >
        {/* Left side nav */}
        <nav
          className={open ? "fade-left" : ""}
          style={{
            display: "flex",
            gap: 28,
            position: "absolute",
            left: "5%",
            opacity: open ? 1 : 0,
            transform: open ? "translateX(0)" : "translateX(-20px)",
            transition: "all var(--transition-speed) ease",
            fontSize: 15,
          }}
        >
          <a href="#" className="text-accent-hover">
            Home
          </a>
          <a href="#" className="text-accent-hover">
            About
          </a>
        </nav>

        {/* Center logo with subtle glow */}
        <div
          className={`${
            open ? "shadow-accent hover-lift" : "shadow-accent-hover"
          } bg-gradient-accent fade-in`}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 10,
            borderRadius: 14,
            padding: "10px 22px",
            transition:
              "transform var(--transition-speed) ease, box-shadow var(--transition-speed) ease",
          }}
        >
          <div
            className="bg-surface"
            style={{
              width: 26,
              height: 26,
              borderRadius: 8,
              transition: "transform var(--transition-speed) ease",
              transform: open ? "rotate(15deg)" : "rotate(0deg)",
            }}
          />
          <span
            style={{
              color: "var(--color-surface)",
              fontWeight: 800,
              fontSize: 18,
            }}
          >
            RevealX
          </span>
        </div>

        {/* Right side nav */}
        <nav
          className={open ? "fade-right" : ""}
          style={{
            display: "flex",
            gap: 28,
            position: "absolute",
            right: "5%",
            opacity: open ? 1 : 0,
            transform: open ? "translateX(0)" : "translateX(20px)",
            transition: "all var(--transition-speed) ease",
            fontSize: 15,
          }}
        >
          <a href="#" className="text-accent-hover">
            Services
          </a>
          <a href="#" className="text-accent-hover">
            Contact
          </a>
        </nav>
      </div>

      {/* Accent motion bar (subtle visual feedback) */}
      <div
        className="bg-gradient-accent"
        style={{
          height: 3,
          opacity: open ? 1 : 0,
          transform: open ? "scaleX(1)" : "scaleX(0)",
          transformOrigin: "center",
          transition: "all var(--transition-speed) ease",
        }}
      />
    </header>
  );
}
