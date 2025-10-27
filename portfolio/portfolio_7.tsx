"use client";

import { useState } from "react";

export default function Portfolio7() {
  const [selectedYear, setSelectedYear] = useState("All");

  const timeline = [
    {
      year: "2024",
      projects: [
        {
          title: "E-Commerce Redesign",
          client: "Fashion Brand XYZ",
          description: "Led the complete UI/UX overhaul resulting in 45% increase in conversions.",
          type: "Freelance",
          duration: "3 months",
        },
        {
          title: "Mobile Banking App",
          client: "FinStart",
          description: "Designed and developed iOS app from scratch with focus on accessibility.",
          type: "Contract",
          duration: "6 months",
        },
      ],
    },
    {
      year: "2023",
      projects: [
        {
          title: "SaaS Dashboard",
          client: "DataSync Pro",
          description: "Created comprehensive analytics dashboard with real-time data visualization.",
          type: "Freelance",
          duration: "4 months",
        },
        {
          title: "Portfolio Website",
          client: "Creative Agency",
          description: "Built custom portfolio site with animations and interactive galleries.",
          type: "Project",
          duration: "2 months",
        },
        {
          title: "Fitness Tracking App",
          client: "Personal Project",
          description: "Developed cross-platform app with AI-powered workout recommendations.",
          type: "Side Project",
          duration: "Ongoing",
        },
      ],
    },
    {
      year: "2022",
      projects: [
        {
          title: "Restaurant Management System",
          client: "LocalEats",
          description: "Full-stack application for managing reservations, orders, and inventory.",
          type: "Freelance",
          duration: "5 months",
        },
        {
          title: "Brand Identity Package",
          client: "Tech Startup",
          description: "Complete brand identity including logo, guidelines, and marketing materials.",
          type: "Contract",
          duration: "2 months",
        },
      ],
    },
  ];

  const filteredTimeline =
    selectedYear === "All"
      ? timeline
      : timeline.filter((item) => item.year === selectedYear);

  return (
    <div
      style={{
        minHeight: "100vh",
        paddingTop: 80,
      }}
    >
      {/* ---------- MINIMAL HERO ---------- */}
      <section
        className="fade-up"
        style={{
          padding: "160px 24px 100px",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <div
            style={{
              display: "inline-block",
              padding: "10px 24px",
              borderRadius: 30,
              background: "var(--color-accent)",
              color: "var(--color-surface)",
              fontSize: 13,
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: 2,
              marginBottom: 32,
            }}
          >
            Available for Work
          </div>

          <h1
            className="text-main"
            style={{
              fontWeight: 900,
              fontSize: "clamp(48px, 8vw, 80px)",
              lineHeight: 1.1,
              marginBottom: 32,
              letterSpacing: "-0.02em",
            }}
          >
            Jordan Blake
          </h1>

          <p
            className="text-muted"
            style={{
              fontSize: 22,
              lineHeight: 1.7,
              marginBottom: 48,
              maxWidth: 700,
              margin: "0 auto 48px",
            }}
          >
            Freelance designer & developer specializing in creating beautiful, functional digital
            products for startups and established brands.
          </p>

          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <button
              className="hover-lift"
              style={{
                padding: "18px 40px",
                borderRadius: 12,
                fontSize: 16,
                fontWeight: 700,
                background: "var(--color-accent)",
                color: "var(--color-surface)",
                border: "none",
                cursor: "pointer",
              }}
            >
              View Resume
            </button>
            <button
              className="hover-lift"
              style={{
                padding: "18px 40px",
                borderRadius: 12,
                fontSize: 16,
                fontWeight: 700,
                background: "transparent",
                color: "var(--color-text)",
                border: "2px solid var(--color-border)",
                cursor: "pointer",
              }}
            >
              Contact Me
            </button>
          </div>
        </div>
      </section>

      {/* ---------- EXPERTISE ---------- */}
      <section
        className="bg-surface-alt fade-up"
        style={{
          padding: "100px 24px",
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2
            className="text-main"
            style={{
              fontWeight: 800,
              fontSize: 38,
              marginBottom: 60,
              textAlign: "center",
            }}
          >
            What I Do Best
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 32,
            }}
          >
            {[
              {
                icon: "✨",
                title: "UI/UX Design",
                description:
                  "Creating intuitive interfaces with a focus on user experience and visual hierarchy.",
                tools: ["Figma", "Adobe XD", "Sketch"],
              },
              {
                icon: "💻",
                title: "Frontend Development",
                description:
                  "Building responsive, performant web applications with modern frameworks and tools.",
                tools: ["React", "Next.js", "TypeScript"],
              },
              {
                icon: "🎯",
                title: "Brand Design",
                description:
                  "Crafting cohesive brand identities that resonate with target audiences.",
                tools: ["Illustrator", "InDesign", "AfterEffects"],
              },
            ].map((service, i) => (
              <div
                key={i}
                className="bg-surface hover-lift shadow-accent-hover"
                style={{
                  padding: "40px 36px",
                  borderRadius: 20,
                  border: "2px solid var(--color-border)",
                }}
              >
                <div
                  style={{
                    fontSize: 56,
                    marginBottom: 24,
                  }}
                >
                  {service.icon}
                </div>
                <h3
                  className="text-main"
                  style={{
                    fontWeight: 800,
                    fontSize: 24,
                    marginBottom: 16,
                  }}
                >
                  {service.title}
                </h3>
                <p
                  className="text-muted"
                  style={{
                    fontSize: 15,
                    lineHeight: 1.7,
                    marginBottom: 24,
                  }}
                >
                  {service.description}
                </p>
                <div
                  style={{
                    paddingTop: 20,
                    borderTop: "1px solid var(--color-border)",
                  }}
                >
                  <div
                    className="text-muted"
                    style={{
                      fontSize: 12,
                      fontWeight: 700,
                      textTransform: "uppercase",
                      letterSpacing: 1,
                      marginBottom: 12,
                    }}
                  >
                    Tools
                  </div>
                  <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                    {service.tools.map((tool) => (
                      <span
                        key={tool}
                        className="text-accent"
                        style={{
                          fontSize: 13,
                          fontWeight: 600,
                        }}
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- TIMELINE PORTFOLIO ---------- */}
      <section
        className="fade-up"
        style={{
          padding: "140px 24px",
        }}
      >
        <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: 60,
              flexWrap: "wrap",
              gap: 24,
            }}
          >
            <div>
              <h2
                className="text-main"
                style={{
                  fontWeight: 800,
                  fontSize: 42,
                  marginBottom: 12,
                }}
              >
                Work Timeline
              </h2>
              <p className="text-muted" style={{ fontSize: 17 }}>
                A chronological view of my projects
              </p>
            </div>

            {/* Year Filter */}
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              {["All", "2024", "2023", "2022"].map((year) => (
                <button
                  key={year}
                  onClick={() => setSelectedYear(year)}
                  className={selectedYear === year ? "bg-gradient-accent" : "bg-surface"}
                  style={{
                    padding: "12px 28px",
                    borderRadius: 10,
                    fontSize: 14,
                    fontWeight: 700,
                    border: selectedYear === year ? "none" : "2px solid var(--color-border)",
                    cursor: "pointer",
                    color: selectedYear === year ? "var(--color-surface)" : "var(--color-text)",
                    transition: "all 0.3s ease",
                  }}
                >
                  {year}
                </button>
              ))}
            </div>
          </div>

          {/* Timeline */}
          <div style={{ position: "relative" }}>
            {/* Vertical Line */}
            <div
              className="bg-border"
              style={{
                position: "absolute",
                left: 24,
                top: 0,
                bottom: 0,
                width: 2,
              }}
            />

            {filteredTimeline.map((yearData, yearIndex) => (
              <div key={yearData.year} style={{ marginBottom: 60 }}>
                {/* Year Badge */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 24,
                    marginBottom: 40,
                  }}
                >
                  <div
                    className="bg-gradient-accent"
                    style={{
                      width: 50,
                      height: 50,
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 18,
                      fontWeight: 900,
                      flexShrink: 0,
                      zIndex: 1,
                    }}
                  >
                    {yearData.year.slice(2)}
                  </div>
                  <h3
                    className="text-main"
                    style={{
                      fontSize: 32,
                      fontWeight: 800,
                    }}
                  >
                    {yearData.year}
                  </h3>
                </div>

                {/* Projects */}
                <div
                  style={{
                    marginLeft: 74,
                    display: "flex",
                    flexDirection: "column",
                    gap: 24,
                  }}
                >
                  {yearData.projects.map((project, projectIndex) => (
                    <div
                      key={projectIndex}
                      className="bg-surface hover-lift shadow-accent-hover"
                      style={{
                        padding: "32px 36px",
                        borderRadius: 16,
                        border: "2px solid var(--color-border)",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "start",
                          marginBottom: 16,
                          gap: 20,
                        }}
                      >
                        <div style={{ flex: 1 }}>
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              gap: 12,
                              marginBottom: 8,
                            }}
                          >
                            <div
                              className="bg-surface-alt"
                              style={{
                                padding: "6px 14px",
                                borderRadius: 6,
                                fontSize: 12,
                                fontWeight: 700,
                                textTransform: "uppercase",
                                letterSpacing: 1,
                                color: "var(--color-accent)",
                              }}
                            >
                              {project.type}
                            </div>
                            <div
                              className="text-muted"
                              style={{
                                fontSize: 13,
                                fontWeight: 600,
                              }}
                            >
                              {project.duration}
                            </div>
                          </div>
                          <h4
                            className="text-main"
                            style={{
                              fontWeight: 800,
                              fontSize: 22,
                              marginBottom: 6,
                            }}
                          >
                            {project.title}
                          </h4>
                          <div
                            className="text-accent"
                            style={{
                              fontSize: 15,
                              fontWeight: 600,
                              marginBottom: 12,
                            }}
                          >
                            {project.client}
                          </div>
                        </div>
                        <button
                          className="hover-lift"
                          style={{
                            padding: "10px 24px",
                            borderRadius: 8,
                            fontSize: 14,
                            fontWeight: 700,
                            background: "transparent",
                            color: "var(--color-accent)",
                            border: "2px solid var(--color-accent)",
                            cursor: "pointer",
                            whiteSpace: "nowrap",
                          }}
                        >
                          Details →
                        </button>
                      </div>
                      <p
                        className="text-muted"
                        style={{
                          fontSize: 15,
                          lineHeight: 1.7,
                        }}
                      >
                        {project.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- TESTIMONIAL ---------- */}
      <section
        className="bg-gradient-accent fade-up"
        style={{
          padding: "100px 24px",
        }}
      >
        <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
          <div style={{ fontSize: 64, marginBottom: 32 }}>⭐</div>
          <blockquote
            style={{
              fontSize: 26,
              fontWeight: 600,
              lineHeight: 1.6,
              marginBottom: 32,
              fontStyle: "italic",
            }}
          >
            "Jordan's ability to translate our vision into a stunning digital product was remarkable.
            The attention to detail and communication throughout the project was exceptional."
          </blockquote>
          <div style={{ fontWeight: 700, fontSize: 18, marginBottom: 6 }}>Sarah Chen</div>
          <div style={{ fontSize: 15, opacity: 0.9 }}>Founder, Fashion Brand XYZ</div>
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
        <div style={{ maxWidth: "700px", margin: "0 auto" }}>
          <h2
            className="text-main"
            style={{
              fontWeight: 900,
              fontSize: 46,
              marginBottom: 24,
            }}
          >
            Let's Create Something Amazing
          </h2>
          <p
            className="text-muted"
            style={{
              fontSize: 19,
              lineHeight: 1.7,
              marginBottom: 40,
            }}
          >
            I'm currently available for freelance projects. If you have an exciting project in mind,
            let's talk!
          </p>
          <button
            className="hover-lift"
            style={{
              padding: "20px 52px",
              borderRadius: 12,
              fontSize: 18,
              fontWeight: 700,
              background: "var(--color-accent)",
              color: "var(--color-surface)",
              border: "none",
              cursor: "pointer",
            }}
          >
            Get in Touch
          </button>
        </div>
      </section>

      {/* ---------- MOBILE CSS ---------- */}
      <style jsx>{`
        @media (max-width: 768px) {
          section {
            padding: 80px 20px !important;
          }
          h1 {
            font-size: 40px !important;
          }
          h2 {
            font-size: 28px !important;
          }
          h3 {
            font-size: 24px !important;
          }
          h4 {
            font-size: 18px !important;
          }
          blockquote {
            font-size: 20px !important;
          }
          div[style*="gridTemplateColumns: repeat(3, 1fr)"] {
            grid-template-columns: 1fr !important;
            gap: 24px !important;
          }
          div[style*="padding: 40px 36px"],
          div[style*="padding: 32px 36px"] {
            padding: 28px 24px !important;
          }
          div[style*="marginLeft: 74"] {
            margin-left: 0 !important;
          }
          div[style*="position: absolute"][style*="left: 24"] {
            display: none !important;
          }
          div[style*="width: 50"],
          div[style*="height: 50"] {
            width: 40px !important;
            height: 40px !important;
            font-size: 16px !important;
          }
        }
      `}</style>
    </div>
  );
}
