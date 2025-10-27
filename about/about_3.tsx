"use client";
import React, { useState, useEffect } from "react";

export default function About() {
  const [activeTab, setActiveTab] = useState(0);
  const [countedStats, setCountedStats] = useState({ clients: 0, industries: 0, retention: 0 });

  useEffect(() => {
    const interval = setInterval(() => {
      setCountedStats((prev) => ({
        clients: prev.clients < 150 ? prev.clients + 3 : 150,
        industries: prev.industries < 35 ? prev.industries + 1 : 35,
        retention: prev.retention < 98 ? prev.retention + 2 : 98,
      }));
    }, 30);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="fade-in" style={{ overflow: "hidden" }}>
      <style>{`
        @media (max-width: 768px) {
          section { padding: 60px 20px !important; }
          h1 { font-size: 2.5rem !important; }
          h2 { font-size: 26px !important; }
          .split-layout { grid-template-columns: 1fr !important; gap: 40px !important; }
          .tabs { flex-direction: column !important; }
          .stat-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>

      {/* ---------------- DATA-DRIVEN HERO ---------------- */}
      <section
        className="bg-surface"
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "100px 24px",
        }}
      >
        <div
          className="text-accent"
          style={{
            fontSize: 14,
            fontWeight: 800,
            letterSpacing: 2,
            textTransform: "uppercase",
            marginBottom: 20,
          }}
        >
          Data-Driven Excellence
        </div>
        <h1
          className="text-main text-highlight"
          style={{
            fontSize: "4rem",
            fontWeight: 900,
            lineHeight: 1.05,
            marginBottom: 24,
            maxWidth: 900,
          }}
        >
          Empowering innovation through measurable clarity.
        </h1>
        <p
          className="text-muted"
          style={{
            maxWidth: 640,
            margin: "0 auto 60px",
            lineHeight: 1.8,
            fontSize: 18,
          }}
        >
          We help modern businesses evolve through design systems, user experience, and scalable digital transformation.
        </p>

        {/* Animated Stats */}
        <div
          className="stat-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 60,
            maxWidth: 1000,
            margin: "0 auto",
          }}
        >
          {[
            { value: `${countedStats.clients}+`, label: "Happy Clients" },
            { value: `${countedStats.industries}+`, label: "Industries" },
            { value: `${countedStats.retention}%`, label: "Retention" },
            { value: "10yrs", label: "Experience" },
          ].map((stat) => (
            <div key={stat.label}>
              <h3
                className="text-accent"
                style={{
                  fontWeight: 900,
                  fontSize: 48,
                  marginBottom: 8,
                }}
              >
                {stat.value}
              </h3>
              <p className="text-muted" style={{ fontSize: 14, textTransform: "uppercase", letterSpacing: 1 }}>
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ---------------- CAPABILITIES SHOWCASE ---------------- */}
      <section
        className="bg-surface-alt fade-up"
        style={{
          padding: "160px 24px",
        }}
      >
        <div style={{ maxWidth: "1300px", margin: "0 auto" }}>
          <h2
            className="text-main"
            style={{
              fontWeight: 800,
              fontSize: 36,
              marginBottom: 20,
              textAlign: "center",
            }}
          >
            What We Do
          </h2>
          <p className="text-muted" style={{ textAlign: "center", fontSize: 17, marginBottom: 80 }}>
            End-to-end expertise across the entire product lifecycle
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: 48,
            }}
          >
            {[
              {
                icon: "🎨",
                title: "Design Systems",
                desc: "Comprehensive component libraries, design tokens, and documentation that scale with your product.",
                items: ["UI Components", "Design Tokens", "Documentation", "Accessibility"],
              },
              {
                icon: "✨",
                title: "User Experience",
                desc: "Research-driven design that puts your users first, from wireframes to high-fidelity prototypes.",
                items: ["User Research", "Wireframing", "Prototyping", "Usability Testing"],
              },
              {
                icon: "🎯",
                title: "Brand Strategy",
                desc: "Define your market position and visual identity to stand out in crowded markets.",
                items: ["Brand Identity", "Market Analysis", "Visual Language", "Messaging"],
              },
              {
                icon: "⚡",
                title: "Development",
                desc: "Production-ready code with modern frameworks, scalable architecture, and best practices.",
                items: ["React/Next.js", "TypeScript", "Performance", "Testing"],
              },
            ].map((capability, i) => (
              <div
                key={capability.title}
                className="bg-surface hover-lift shadow-accent-hover"
                style={{
                  borderRadius: 20,
                  padding: "48px 40px",
                  border: "2px solid var(--color-border)",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <div
                  className="text-accent"
                  style={{
                    fontSize: 120,
                    opacity: 0.04,
                    position: "absolute",
                    top: -20,
                    right: 20,
                  }}
                >
                  {capability.icon}
                </div>
                <div style={{ fontSize: 48, marginBottom: 20, position: "relative", zIndex: 1 }}>
                  {capability.icon}
                </div>
                <h3
                  className="text-main"
                  style={{
                    fontWeight: 800,
                    fontSize: 24,
                    marginBottom: 12,
                    position: "relative",
                    zIndex: 1,
                  }}
                >
                  {capability.title}
                </h3>
                <p
                  className="text-muted"
                  style={{
                    lineHeight: 1.7,
                    fontSize: 16,
                    marginBottom: 24,
                    position: "relative",
                    zIndex: 1,
                  }}
                >
                  {capability.desc}
                </p>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(2, 1fr)",
                    gap: 12,
                    position: "relative",
                    zIndex: 1,
                  }}
                >
                  {capability.items.map((item) => (
                    <div
                      key={item}
                      className="text-muted"
                      style={{
                        fontSize: 14,
                        padding: "8px 12px",
                        background: "var(--color-surface-alt)",
                        borderRadius: 6,
                        textAlign: "center",
                      }}
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- PRINCIPLES ---------------- */}
      <section
        className="bg-surface fade-up"
        style={{
          padding: "160px 24px",
        }}
      >
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 80 }}>
            <h2 className="text-main" style={{ fontWeight: 800, fontSize: 36, marginBottom: 14 }}>
              Our Principles
            </h2>
            <p className="text-muted" style={{ fontSize: 17 }}>
              The foundations that guide every decision and design.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: 48,
            }}
          >
            {[
              {
                num: "01",
                title: "Integrity",
                desc: "We hold ourselves to the highest ethical and creative standards in everything we do.",
              },
              {
                num: "02",
                title: "Partnership",
                desc: "We believe in collaboration, transparency, and mutual growth with our clients.",
              },
              {
                num: "03",
                title: "Excellence",
                desc: "Our work blends rigorous execution with visionary design.",
              },
            ].map((pillar) => (
              <div
                key={pillar.num}
                className="bg-surface-alt hover-lift shadow-accent-hover"
                style={{
                  borderRadius: 16,
                  padding: "48px 40px",
                  textAlign: "left",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <div
                  className="text-accent"
                  style={{
                    fontSize: 100,
                    fontWeight: 900,
                    opacity: 0.05,
                    position: "absolute",
                    top: -20,
                    right: 20,
                  }}
                >
                  {pillar.num}
                </div>
                <h3
                  className="text-main"
                  style={{
                    fontWeight: 800,
                    fontSize: 24,
                    marginBottom: 12,
                    position: "relative",
                    zIndex: 1,
                  }}
                >
                  {pillar.title}
                </h3>
                <p
                  className="text-muted"
                  style={{
                    lineHeight: 1.7,
                    fontSize: 16,
                    position: "relative",
                    zIndex: 1,
                  }}
                >
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- LEADERSHIP CAROUSEL ---------------- */}
      <section
        className="bg-surface-alt fade-up"
        style={{
          padding: "160px 24px",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <h2 className="text-main" style={{ fontWeight: 800, fontSize: 36, marginBottom: 16 }}>
            Leadership Team
          </h2>
          <p className="text-muted" style={{ marginBottom: 80, fontSize: 17 }}>
            Decades of combined expertise in design, technology, and strategy.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: 40,
              justifyItems: "center",
            }}
          >
            {[
              { name: "Liam Foster", role: "CEO & Founder", color: "linear-gradient(135deg, var(--color-accent), var(--color-secondary))" },
              { name: "Sofia Grant", role: "Head of Design", color: "linear-gradient(135deg, var(--color-secondary), var(--color-accent-hover))" },
              { name: "Ethan Wu", role: "Lead Engineer", color: "linear-gradient(135deg, var(--color-accent-hover), var(--color-accent))" },
              { name: "Iris Kim", role: "Strategy Director", color: "linear-gradient(135deg, var(--color-accent), var(--color-secondary))" },
            ].map((person) => (
              <div
                key={person.name}
                className="bg-surface hover-lift shadow-accent-hover"
                style={{
                  borderRadius: 16,
                  padding: 32,
                  width: "100%",
                  maxWidth: 280,
                }}
              >
                <div
                  style={{
                    width: 120,
                    height: 120,
                    borderRadius: "50%",
                    background: person.color,
                    margin: "0 auto 24px",
                  }}
                />
                <h4 className="text-main" style={{ fontWeight: 800, fontSize: 20, marginBottom: 6 }}>
                  {person.name}
                </h4>
                <p className="text-muted" style={{ fontSize: 14 }}>
                  {person.role}
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
        <div style={{ maxWidth: "700px", margin: "0 auto" }}>
          <h2 style={{ fontWeight: 900, fontSize: 40, marginBottom: 16 }}>
            Let's build with purpose.
          </h2>
          <p style={{ opacity: 0.95, fontSize: 18, marginBottom: 36, lineHeight: 1.7 }}>
            Discover how clarity in design can drive transformation at every level of your business.
          </p>
          <button
            className="accent hover-lift"
            style={{
              borderRadius: 10,
              padding: "16px 32px",
              fontWeight: 700,
            }}
          >
            Partner with Us
          </button>
        </div>
      </section>
    </main>
  );
}
