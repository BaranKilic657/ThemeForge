"use client";
import React, { useState } from "react";

export default function Home() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <main className="fade-in" style={{ overflow: "hidden" }}>
      <style>{`
        @media (max-width: 768px) {
          section { padding: 60px 20px !important; }
          h1 { font-size: 2.8rem !important; }
          h2 { font-size: 26px !important; }
          .split-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
          .card-grid { grid-template-columns: 1fr !important; }
          .isometric-card { transform: none !important; margin: 0 !important; }
        }
      `}</style>

      {/* ---------------- ISOMETRIC HERO ---------------- */}
      <section
        className="bg-surface"
        style={{
          minHeight: "100vh",
          padding: "120px 24px",
          position: "relative",
          overflow: "visible",
        }}
      >
        <div style={{ maxWidth: 1400, margin: "0 auto", position: "relative", zIndex: 2 }}>
          <div
            className="split-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "1.1fr 1fr",
              gap: 100,
              alignItems: "center",
            }}
          >
            <div>
              <div
                className="text-accent"
                style={{
                  fontSize: 14,
                  fontWeight: 800,
                  letterSpacing: 2,
                  textTransform: "uppercase",
                  marginBottom: 16,
                }}
              >
                Digital Architecture
              </div>
              <h1
                className="text-main text-highlight"
                style={{
                  fontSize: "4.2rem",
                  fontWeight: 900,
                  lineHeight: 1.05,
                  marginBottom: 28,
                  letterSpacing: "-0.03em",
                }}
              >
                Building in
                <br />
                Three Dimensions
              </h1>
              <p
                className="text-muted"
                style={{
                  fontSize: 19,
                  lineHeight: 1.75,
                  marginBottom: 44,
                  maxWidth: 540,
                }}
              >
                We craft spatial experiences where depth, perspective, and layering create immersive digital environments.
              </p>
              <div style={{ display: "flex", gap: 16 }}>
                <button
                  className="btn-gradient hover-lift"
                  style={{
                    borderRadius: 10,
                    padding: "16px 32px",
                    fontWeight: 700,
                  }}
                >
                  Explore Projects
                </button>
                <button
                  className="bg-surface-alt text-main hover-lift"
                  style={{
                    borderRadius: 10,
                    padding: "16px 32px",
                    fontWeight: 700,
                    border: "2px solid var(--color-border)",
                  }}
                >
                  View Process
                </button>
              </div>
            </div>

            {/* Isometric Cards Stack */}
            <div style={{ position: "relative", height: 550 }}>
              {[
                { title: "Design", color: "var(--color-accent)", icon: "🎨", top: 0, left: 0 },
                { title: "Build", color: "var(--color-secondary)", icon: "⚡", top: 80, left: 120 },
                { title: "Launch", color: "var(--color-accent-hover)", icon: "🚀", top: 160, left: 220 },
              ].map((card, i) => (
                <div
                  key={i}
                  className="isometric-card bg-surface-alt shadow-accent-hover hover-lift"
                  style={{
                    position: "absolute",
                    top: card.top,
                    left: card.left,
                    width: 280,
                    height: 200,
                    borderRadius: 20,
                    padding: "32px 28px",
                    border: `3px solid ${card.color}`,
                    transform: "perspective(800px) rotateX(15deg) rotateY(-10deg)",
                    transformStyle: "preserve-3d",
                    transition: "all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)",
                    cursor: "pointer",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "perspective(800px) rotateX(0deg) rotateY(0deg) translateZ(20px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "perspective(800px) rotateX(15deg) rotateY(-10deg)";
                  }}
                >
                  <div style={{ fontSize: 48, marginBottom: 16 }}>{card.icon}</div>
                  <h3
                    className="text-main"
                    style={{
                      fontWeight: 800,
                      fontSize: 28,
                    }}
                  >
                    {card.title}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Background geometric shapes */}
        <div
          style={{
            position: "absolute",
            top: "15%",
            right: "-10%",
            width: 600,
            height: 600,
            background: "var(--color-accent)",
            opacity: 0.03,
            borderRadius: "30%",
            transform: "rotate(25deg)",
            filter: "blur(60px)",
          }}
        />
      </section>

      {/* ---------------- 3D CARD GRID ---------------- */}
      <section className="bg-surface-alt fade-up" style={{ padding: "180px 24px" }}>
        <div style={{ maxWidth: 1300, margin: "0 auto" }}>
          <h2
            className="text-main"
            style={{
              fontWeight: 800,
              fontSize: 40,
              marginBottom: 20,
              textAlign: "center",
            }}
          >
            Our Capabilities
          </h2>
          <p
            className="text-muted"
            style={{
              textAlign: "center",
              fontSize: 18,
              marginBottom: 80,
              maxWidth: 600,
              margin: "0 auto 80px",
            }}
          >
            Multidimensional approach to modern product development
          </p>

          <div
            className="card-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 40,
            }}
          >
            {[
              { title: "Brand Identity", desc: "Visual systems that define uniqueness", emoji: "💎" },
              { title: "User Experience", desc: "Intuitive flows and interactions", emoji: "✨" },
              { title: "Development", desc: "Scalable and performant code", emoji: "🛠️" },
              { title: "Strategy", desc: "Data-informed decision making", emoji: "📊" },
              { title: "Motion Design", desc: "Animations that guide attention", emoji: "🎬" },
              { title: "Consulting", desc: "Expert guidance throughout", emoji: "🎯" },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-surface shadow-accent-hover hover-lift"
                style={{
                  borderRadius: 20,
                  padding: "44px 32px",
                  textAlign: "center",
                  transform:
                    hoveredCard === i
                      ? "perspective(1000px) rotateX(0deg) translateY(-8px)"
                      : "perspective(1000px) rotateX(5deg)",
                  transition: "all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)",
                  cursor: "pointer",
                  border: "2px solid var(--color-border)",
                }}
                onMouseEnter={() => setHoveredCard(i)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div style={{ fontSize: 52, marginBottom: 24 }}>{item.emoji}</div>
                <h3
                  className="text-main"
                  style={{
                    fontWeight: 800,
                    fontSize: 22,
                    marginBottom: 12,
                  }}
                >
                  {item.title}
                </h3>
                <p className="text-muted" style={{ fontSize: 16, lineHeight: 1.6 }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- LAYERED SHOWCASE ---------------- */}
      <section className="bg-surface fade-up" style={{ padding: "180px 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <h2
            className="text-main"
            style={{
              fontWeight: 800,
              fontSize: 36,
              marginBottom: 70,
              textAlign: "center",
            }}
          >
            Featured Work
          </h2>

          <div style={{ position: "relative", height: 500 }}>
            {[
              { name: "Project Alpha", color: "#6366f1", z: 3 },
              { name: "Project Beta", color: "#8b5cf6", z: 2 },
              { name: "Project Gamma", color: "#ec4899", z: 1 },
            ].map((project, i) => (
              <div
                key={i}
                className="bg-surface-alt shadow-accent-hover hover-lift"
                style={{
                  position: "absolute",
                  top: i * 40,
                  left: `${10 + i * 15}%`,
                  width: 450,
                  height: 320,
                  borderRadius: 24,
                  padding: "40px 36px",
                  border: `4px solid ${project.color}`,
                  zIndex: project.z,
                  transform: `perspective(1200px) rotateY(${-10 + i * 5}deg)`,
                  transition: "all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "perspective(1200px) rotateY(0deg) translateZ(30px)";
                  e.currentTarget.style.zIndex = "10";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = `perspective(1200px) rotateY(${-10 + i * 5}deg)`;
                  e.currentTarget.style.zIndex = String(project.z);
                }}
              >
                <div
                  style={{
                    fontSize: 14,
                    fontWeight: 800,
                    color: project.color,
                    textTransform: "uppercase",
                    letterSpacing: 1.5,
                    marginBottom: 16,
                  }}
                >
                  0{i + 1}
                </div>
                <h3
                  className="text-main"
                  style={{
                    fontWeight: 900,
                    fontSize: 32,
                    marginBottom: 16,
                  }}
                >
                  {project.name}
                </h3>
                <p className="text-muted" style={{ lineHeight: 1.7, fontSize: 16 }}>
                  A comprehensive design system built for scale, accessibility, and developer experience.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- CTA ---------------- */}
      <section
        className="bg-gradient-accent fade-up"
        style={{
          padding: "140px 24px",
          textAlign: "center",
          color: "var(--color-surface)",
        }}
      >
        <div style={{ maxWidth: 700, margin: "0 auto" }}>
          <h2
            style={{
              fontWeight: 900,
              fontSize: 42,
              marginBottom: 20,
              lineHeight: 1.2,
            }}
          >
            Step Into the Future
          </h2>
          <p style={{ fontSize: 18, lineHeight: 1.7, marginBottom: 36, opacity: 0.95 }}>
            Let's build something dimensional together.
          </p>
          <button
            className="accent hover-lift"
            style={{
              borderRadius: 10,
              padding: "16px 36px",
              fontWeight: 700,
            }}
          >
            Start a Project
          </button>
        </div>
      </section>
    </main>
  );
}
