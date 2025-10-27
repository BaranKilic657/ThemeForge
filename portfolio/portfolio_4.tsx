"use client";

import { useState } from "react";

export default function Portfolio4() {
  const [activeProject, setActiveProject] = useState(0);

  const projects = [
    {
      name: "NeoBank",
      tagline: "Banking reimagined for the digital age",
      year: "2024",
      category: "FinTech",
      challenge:
        "Traditional banking interfaces were too complex and intimidating for younger users.",
      solution:
        "We created a clean, intuitive mobile-first experience with gamification elements that make financial management fun and accessible.",
      impact: ["2M+ active users", "4.8★ App Store rating", "Featured by Apple"],
      services: ["Product Strategy", "UX/UI Design", "iOS & Android Development", "Brand Identity"],
    },
    {
      name: "FitLife Pro",
      tagline: "AI-powered personal training",
      year: "2024",
      category: "Health & Fitness",
      challenge:
        "Users struggled to stay motivated and track progress across multiple fitness activities.",
      solution:
        "An intelligent coaching app that adapts to user behavior, provides personalized workouts, and uses social features to boost accountability.",
      impact: ["500K downloads", "85% retention rate", "Top 10 Health Apps"],
      services: ["AI Integration", "Mobile Development", "Wearable Sync", "UX Design"],
    },
    {
      name: "Artisan Market",
      tagline: "Connecting creators with collectors",
      year: "2023",
      category: "E-commerce",
      challenge:
        "Independent artists needed a platform that reflected their unique brand while providing robust e-commerce tools.",
      solution:
        "A customizable marketplace with built-in marketing tools, secure payments, and a storytelling-first approach to product listings.",
      impact: ["$5M GMV first year", "10K+ artists", "45 countries"],
      services: ["Platform Development", "Payment Integration", "SEO Strategy", "Community Tools"],
    },
  ];

  return (
    <div
      style={{
        minHeight: "100vh",
        paddingTop: 80,
      }}
    >
      {/* ---------- HERO ---------- */}
      <section
        className="bg-gradient-accent"
        style={{
          padding: "140px 24px",
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1.2fr 1fr",
              gap: 60,
              alignItems: "center",
            }}
          >
            <div>
              <h1
                style={{
                  fontWeight: 900,
                  fontSize: "clamp(48px, 7vw, 72px)",
                  lineHeight: 1.1,
                  marginBottom: 28,
                }}
              >
                Work That Makes an Impact
              </h1>
              <p
                style={{
                  fontSize: 20,
                  lineHeight: 1.7,
                  opacity: 0.95,
                }}
              >
                We partner with visionary companies to create digital products that solve real
                problems and delight millions of users.
              </p>
            </div>
            <div
              className="bg-surface"
              style={{
                padding: "40px 36px",
                borderRadius: 24,
              }}
            >
              <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
                {[
                  { value: "100+", label: "Projects" },
                  { value: "8yrs", label: "Experience" },
                  { value: "99%", label: "Client Satisfaction" },
                ].map((stat, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "center", gap: 20 }}>
                    <div
                      className="text-accent"
                      style={{
                        fontSize: 40,
                        fontWeight: 900,
                        minWidth: 100,
                      }}
                    >
                      {stat.value}
                    </div>
                    <div
                      className="text-main"
                      style={{
                        fontSize: 16,
                        fontWeight: 600,
                      }}
                    >
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- INTERACTIVE CAROUSEL ---------- */}
      <section
        className="fade-up"
        style={{
          padding: "140px 24px",
        }}
      >
        <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
          <div style={{ marginBottom: 60 }}>
            <h2
              className="text-main"
              style={{
                fontWeight: 800,
                fontSize: 46,
                marginBottom: 16,
              }}
            >
              Featured Case Studies
            </h2>
            <p className="text-muted" style={{ fontSize: 19 }}>
              Deep dives into our most impactful projects
            </p>
          </div>

          {/* Project Navigation */}
          <div
            style={{
              display: "flex",
              gap: 16,
              marginBottom: 48,
              overflowX: "auto",
              paddingBottom: 8,
            }}
          >
            {projects.map((project, i) => (
              <button
                key={i}
                onClick={() => setActiveProject(i)}
                className={activeProject === i ? "bg-gradient-accent" : "bg-surface"}
                style={{
                  padding: "20px 32px",
                  borderRadius: 16,
                  border: activeProject === i ? "none" : "2px solid var(--color-border)",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  minWidth: 200,
                  textAlign: "left",
                }}
              >
                <div
                  style={{
                    fontSize: 13,
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: 1,
                    marginBottom: 8,
                    opacity: 0.8,
                    color: activeProject === i ? "var(--color-surface)" : "var(--color-accent)",
                  }}
                >
                  {project.category}
                </div>
                <div
                  style={{
                    fontSize: 18,
                    fontWeight: 800,
                    color: activeProject === i ? "var(--color-surface)" : "var(--color-text)",
                  }}
                >
                  {project.name}
                </div>
              </button>
            ))}
          </div>

          {/* Active Project Content */}
          <div
            className="bg-surface"
            style={{
              padding: "60px 56px",
              borderRadius: 32,
              border: "2px solid var(--color-border)",
            }}
          >
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 60,
              }}
            >
              {/* Left Column */}
              <div>
                <div
                  className="text-accent"
                  style={{
                    fontSize: 14,
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: 1.5,
                    marginBottom: 16,
                  }}
                >
                  {projects[activeProject].year} · {projects[activeProject].category}
                </div>
                <h3
                  className="text-main"
                  style={{
                    fontWeight: 900,
                    fontSize: 44,
                    marginBottom: 16,
                    lineHeight: 1.1,
                  }}
                >
                  {projects[activeProject].name}
                </h3>
                <p
                  className="text-muted"
                  style={{
                    fontSize: 20,
                    marginBottom: 48,
                    fontStyle: "italic",
                  }}
                >
                  {projects[activeProject].tagline}
                </p>

                <div style={{ marginBottom: 40 }}>
                  <h4
                    className="text-main"
                    style={{
                      fontSize: 16,
                      fontWeight: 700,
                      textTransform: "uppercase",
                      letterSpacing: 1,
                      marginBottom: 16,
                    }}
                  >
                    Challenge
                  </h4>
                  <p
                    className="text-muted"
                    style={{
                      fontSize: 16,
                      lineHeight: 1.8,
                    }}
                  >
                    {projects[activeProject].challenge}
                  </p>
                </div>

                <div style={{ marginBottom: 40 }}>
                  <h4
                    className="text-main"
                    style={{
                      fontSize: 16,
                      fontWeight: 700,
                      textTransform: "uppercase",
                      letterSpacing: 1,
                      marginBottom: 16,
                    }}
                  >
                    Solution
                  </h4>
                  <p
                    className="text-muted"
                    style={{
                      fontSize: 16,
                      lineHeight: 1.8,
                    }}
                  >
                    {projects[activeProject].solution}
                  </p>
                </div>

                <div>
                  <h4
                    className="text-main"
                    style={{
                      fontSize: 16,
                      fontWeight: 700,
                      textTransform: "uppercase",
                      letterSpacing: 1,
                      marginBottom: 16,
                    }}
                  >
                    Services Provided
                  </h4>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
                    {projects[activeProject].services.map((service) => (
                      <div
                        key={service}
                        className="bg-surface-alt"
                        style={{
                          padding: "8px 16px",
                          borderRadius: 8,
                          fontSize: 13,
                          fontWeight: 600,
                          color: "var(--color-text-muted)",
                        }}
                      >
                        {service}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column */}
              <div>
                {/* Image Placeholder */}
                <div
                  className="bg-gradient-secondary"
                  style={{
                    height: 380,
                    borderRadius: 20,
                    marginBottom: 32,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 80,
                  }}
                >
                  {activeProject === 0 ? "💳" : activeProject === 1 ? "💪" : "🎨"}
                </div>

                {/* Impact Metrics */}
                <div
                  className="bg-surface-alt"
                  style={{
                    padding: "32px 28px",
                    borderRadius: 16,
                  }}
                >
                  <h4
                    className="text-main"
                    style={{
                      fontSize: 16,
                      fontWeight: 700,
                      textTransform: "uppercase",
                      letterSpacing: 1,
                      marginBottom: 24,
                    }}
                  >
                    Impact
                  </h4>
                  <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                    {projects[activeProject].impact.map((item, i) => (
                      <div
                        key={i}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: 12,
                        }}
                      >
                        <div
                          className="bg-gradient-accent"
                          style={{
                            width: 28,
                            height: 28,
                            borderRadius: "50%",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontSize: 13,
                            fontWeight: 700,
                            flexShrink: 0,
                          }}
                        >
                          ✓
                        </div>
                        <span
                          className="text-main"
                          style={{
                            fontSize: 16,
                            fontWeight: 600,
                          }}
                        >
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- TESTIMONIAL BANNER ---------- */}
      <section
        className="bg-gradient-accent fade-up"
        style={{
          padding: "80px 24px",
        }}
      >
        <div style={{ maxWidth: "1000px", margin: "0 auto", textAlign: "center" }}>
          <div style={{ fontSize: 56, marginBottom: 28 }}>⭐</div>
          <blockquote
            style={{
              fontSize: 26,
              fontWeight: 700,
              lineHeight: 1.6,
              marginBottom: 28,
              fontStyle: "italic",
            }}
          >
            "They transformed our vision into a product that exceeded every expectation. The attention
            to detail and strategic thinking is unmatched."
          </blockquote>
          <div style={{ fontWeight: 700, fontSize: 17, marginBottom: 6 }}>Rebecca Thompson</div>
          <div style={{ fontSize: 15, opacity: 0.9 }}>VP Product, NeoBank</div>
        </div>
      </section>

      {/* ---------- CTA ---------- */}
      <section
        className="fade-up"
        style={{
          padding: "140px 24px",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <h2
            className="text-main"
            style={{
              fontWeight: 900,
              fontSize: 48,
              marginBottom: 24,
            }}
          >
            Let's Build Something Great Together
          </h2>
          <p
            className="text-muted"
            style={{
              fontSize: 19,
              lineHeight: 1.7,
              marginBottom: 40,
            }}
          >
            Whether you're launching a new product or reimagining an existing one, we're here to help
            you succeed.
          </p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <button
              className="hover-lift"
              style={{
                padding: "18px 48px",
                borderRadius: 12,
                fontSize: 17,
                fontWeight: 700,
                background: "var(--color-accent)",
                color: "var(--color-surface)",
                border: "none",
                cursor: "pointer",
              }}
            >
              Start a Project
            </button>
            <button
              className="hover-lift"
              style={{
                padding: "18px 48px",
                borderRadius: 12,
                fontSize: 17,
                fontWeight: 700,
                background: "transparent",
                color: "var(--color-text)",
                border: "2px solid var(--color-border)",
                cursor: "pointer",
              }}
            >
              View All Work
            </button>
          </div>
        </div>
      </section>

      {/* ---------- MOBILE CSS ---------- */}
      <style jsx>{`
        @media (max-width: 768px) {
          section {
            padding: 80px 20px !important;
          }
          h1 {
            font-size: 36px !important;
          }
          h2 {
            font-size: 28px !important;
          }
          h3 {
            font-size: 28px !important;
          }
          blockquote {
            font-size: 20px !important;
          }
          div[style*="gridTemplateColumns: 1.2fr 1fr"],
          div[style*="gridTemplateColumns: 1fr 1fr"] {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }
          div[style*="padding: 60px 56px"],
          div[style*="padding: 40px 36px"],
          div[style*="padding: 32px 28px"] {
            padding: 32px 24px !important;
          }
          div[style*="height: 380"] {
            height: 280px !important;
          }
          div[style*="overflowX: auto"] button {
            min-width: 160px !important;
          }
        }
      `}</style>
    </div>
  );
}
