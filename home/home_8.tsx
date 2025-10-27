"use client";
import React, { useState, useEffect } from "react";

export default function Home() {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      name: "Components",
      title: "Component Library",
      description: "200+ production-ready components designed for consistency, accessibility, and scalability across your entire product ecosystem.",
      features: [
        "Atomic Design Methodology",
        "Full TypeScript Support",
        "WCAG AAA Compliant",
        "Dark Mode Built-in",
      ],
    },
    {
      name: "Tokens",
      title: "Design Token System",
      description: "Centralized design decisions that cascade across all components, ensuring visual consistency and making theme changes effortless.",
      features: [
        "Color, Typography, Spacing",
        "Multi-brand Support",
        "Auto-generated Variables",
        "Platform Agnostic",
      ],
    },
    {
      name: "Patterns",
      title: "UI Pattern Library",
      description: "Proven solutions to common design problems, from navigation structures to data visualization templates.",
      features: [
        "Responsive Templates",
        "Accessibility Patterns",
        "Best Practice Examples",
        "Industry Standards",
      ],
    },
    {
      name: "Guidelines",
      title: "Design Guidelines",
      description: "Comprehensive documentation covering when to use components, writing style, accessibility standards, and brand principles.",
      features: [
        "Component Usage Rules",
        "Content Style Guide",
        "Accessibility Standards",
        "Brand Voice & Tone",
      ],
    },
  ];

  // Auto-rotate tabs every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % tabs.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [tabs.length]);

  return (
    <main className="fade-in" style={{ overflow: "hidden" }}>
      <style>{`
        @media (max-width: 768px) {
          section { padding: 60px 20px !important; }
          h1 { font-size: 2.2rem !important; }
          h2 { font-size: 26px !important; }
          h3 { font-size: 20px !important; }
          [style*="grid-template-columns"] { grid-template-columns: 1fr !important; gap: 32px !important; }
          .stacked-cards { width: 95% !important; }
          .tab-content { padding: 40px 24px !important; }
          [style*="marginLeft"] { margin-left: 0 !important; }
        }
      `}</style>
      {/* ---------------- STACKED HERO WITH LAYERED CARDS ---------------- */}
      <section
        className="bg-surface"
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "60px 24px",
          position: "relative",
        }}
      >
        <div style={{ maxWidth: 1100, width: "100%", position: "relative" }}>
          {/* Background Stacked Cards */}
          <div
            className="bg-surface-alt shadow-accent"
            style={{
              position: "absolute",
              width: "85%",
              height: 380,
              borderRadius: 24,
              top: "10%",
              left: "50%",
              transform: "translateX(-50%) rotate(-4deg)",
              zIndex: 0,
              opacity: 0.4,
            }}
          />
          <div
            className="bg-surface-alt shadow-accent"
            style={{
              position: "absolute",
              width: "90%",
              height: 400,
              borderRadius: 24,
              top: "6%",
              left: "50%",
              transform: "translateX(-50%) rotate(-2deg)",
              zIndex: 1,
              opacity: 0.6,
            }}
          />

          {/* Main Card */}
          <div
            className="bg-gradient-accent shadow-accent-hover"
            style={{
              position: "relative",
              zIndex: 2,
              borderRadius: 28,
              padding: "80px 60px",
              textAlign: "center",
              color: "var(--color-surface)",
            }}
          >
            <h1
              style={{
                fontSize: "3.5rem",
                fontWeight: 900,
                lineHeight: 1.15,
                marginBottom: 20,
              }}
            >
              Design Systems <br /> Built to Scale
            </h1>
            <p
              style={{
                maxWidth: 620,
                margin: "0 auto 36px",
                fontSize: 18,
                lineHeight: 1.7,
                opacity: 0.95,
              }}
            >
              We create comprehensive design frameworks that adapt, grow, and evolve with your product vision.
            </p>
            <div style={{ display: "flex", gap: 16, justifyContent: "center" }}>
              <button
                className="accent hover-lift"
                style={{
                  borderRadius: 10,
                  padding: "14px 28px",
                  fontWeight: 700,
                }}
              >
                View Framework
              </button>
              <button
                className="accent-outline hover-lift"
                style={{
                  borderRadius: 10,
                  padding: "14px 28px",
                  fontWeight: 700,
                  border: "2px solid rgba(255,255,255,0.3)",
                  color: "var(--color-surface)",
                }}
              >
                Documentation
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- TABBED CONTENT SECTION ---------------- */}
      <section
        className="bg-surface-alt fade-up"
        style={{
          padding: "160px 24px",
        }}
      >
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <h2
            className="text-main"
            style={{
              fontWeight: 800,
              fontSize: 36,
              marginBottom: 60,
              textAlign: "center",
            }}
          >
            Complete Design Infrastructure
          </h2>

          {/* Horizontal Tab Pills */}
          <div
            style={{
              display: "flex",
              gap: 12,
              marginBottom: 60,
              justifyContent: "center",
              flexWrap: "wrap",
            }}
            onMouseEnter={() => {
              // Pause auto-rotation on hover
              const timer = setTimeout(() => {}, 0);
              clearTimeout(timer);
            }}
          >
            {tabs.map((tab, i) => (
              <button
                key={tab.name}
                onClick={() => setActiveTab(i)}
                className={i === activeTab ? "btn-gradient hover-lift" : "accent-outline hover-lift"}
                style={{
                  borderRadius: 20,
                  padding: "10px 24px",
                  fontWeight: 600,
                  fontSize: 15,
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                }}
              >
                {tab.name}
              </button>
            ))}
          </div>

          {/* Tab Content Area */}
          <div
            className="bg-surface shadow-accent"
            style={{
              borderRadius: 20,
              padding: "60px 48px",
              transition: "all 0.4s ease",
            }}
          >
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1.3fr",
                gap: 60,
                alignItems: "center",
              }}
            >
              <div className="fade-up">
                <h3
                  className="text-main"
                  style={{
                    fontWeight: 800,
                    fontSize: 28,
                    marginBottom: 16,
                  }}
                >
                  {tabs[activeTab].title}
                </h3>
                <p className="text-muted" style={{ lineHeight: 1.7, marginBottom: 28 }}>
                  {tabs[activeTab].description}
                </p>
                <ul className="text-muted" style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: 12 }}>
                  {tabs[activeTab].features.map((feature) => (
                    <li key={feature}>✓ {feature}</li>
                  ))}
                </ul>
              </div>

              <div
                className="preview-gradient shadow-accent-hover"
                style={{
                  height: 360,
                  borderRadius: 16,
                  transition: "all 0.4s ease",
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- EXPANDABLE CARD DECK ---------------- */}
      <section
        className="bg-surface fade-up"
        style={{
          padding: "160px 24px",
        }}
      >
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <h2
            className="text-main"
            style={{
              fontWeight: 800,
              fontSize: 36,
              marginBottom: 80,
              textAlign: "center",
            }}
          >
            System Capabilities
          </h2>

          {/* Staggered Deck of Cards */}
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            {[
              {
                number: "01",
                title: "Token Architecture",
                desc: "Design tokens that cascade across themes, brands, and platforms seamlessly.",
              },
              {
                number: "02",
                title: "Variant System",
                desc: "Auto-generate component variants from a single source of truth using prop-based theming.",
              },
              {
                number: "03",
                title: "Motion Library",
                desc: "Pre-built transitions and animations that maintain consistency across all interactions.",
              },
              {
                number: "04",
                title: "Documentation Hub",
                desc: "Interactive Storybook with live code examples, usage guidelines, and best practices.",
              },
            ].map((item, i) => (
              <div
                key={item.number}
                className="bg-surface-alt shadow-accent-hover hover-lift"
                style={{
                  borderRadius: 20,
                  padding: "36px 40px",
                  display: "grid",
                  gridTemplateColumns: "80px 1fr",
                  gap: 32,
                  alignItems: "center",
                  marginLeft: `${i * 40}px`,
                  transition: "all 0.3s ease",
                }}
              >
                <div
                  className="text-accent"
                  style={{
                    fontSize: "3rem",
                    fontWeight: 900,
                    opacity: 0.3,
                  }}
                >
                  {item.number}
                </div>
                <div>
                  <h3
                    className="text-main"
                    style={{
                      fontWeight: 800,
                      fontSize: 24,
                      marginBottom: 8,
                    }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-muted" style={{ lineHeight: 1.7, fontSize: 16 }}>
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- METRICS DASHBOARD ---------------- */}
      <section
        className="bg-surface-alt fade-up"
        style={{
          padding: "120px 24px",
        }}
      >
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div
            className="bg-surface shadow-accent"
            style={{
              borderRadius: 24,
              padding: "60px 48px",
            }}
          >
            <h2
              className="text-main"
              style={{
                fontWeight: 800,
                fontSize: 32,
                marginBottom: 60,
                textAlign: "center",
              }}
            >
              System Performance
            </h2>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                gap: 48,
              }}
            >
              {[
                { metric: "99.7%", label: "Consistency Score" },
                { metric: "62ms", label: "Avg Load Time" },
                { metric: "847", label: "Design Tokens" },
                { metric: "23", label: "Product Teams" },
              ].map((stat) => (
                <div key={stat.label} style={{ textAlign: "center" }}>
                  <div
                    className="text-accent"
                    style={{
                      fontSize: "3.2rem",
                      fontWeight: 900,
                      lineHeight: 1,
                      marginBottom: 12,
                    }}
                  >
                    {stat.metric}
                  </div>
                  <div className="text-muted" style={{ fontSize: 15 }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- LARGE CTA CARD ---------------- */}
      <section
        className="bg-surface fade-up"
        style={{
          padding: "160px 24px",
        }}
      >
        <div
          className="bg-gradient-secondary shadow-accent-hover hover-lift"
          style={{
            maxWidth: 1000,
            margin: "0 auto",
            borderRadius: 28,
            padding: "80px 60px",
            textAlign: "center",
            color: "var(--color-surface)",
          }}
        >
          <h2
            style={{
              fontWeight: 900,
              fontSize: 40,
              marginBottom: 20,
              lineHeight: 1.2,
            }}
          >
            Ready to Build Your System?
          </h2>
          <p
            style={{
              fontSize: 18,
              lineHeight: 1.7,
              marginBottom: 40,
              opacity: 0.95,
              maxWidth: 680,
              margin: "0 auto 40px",
            }}
          >
            Start with our battle-tested framework and customize it to match your brand and product needs.
          </p>
          <button
            className="accent hover-lift"
            style={{
              borderRadius: 10,
              padding: "16px 36px",
              fontWeight: 700,
              fontSize: 16,
            }}
          >
            Get Started Free
          </button>
        </div>
      </section>
    </main>
  );
}
