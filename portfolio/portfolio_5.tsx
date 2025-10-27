"use client";

import { useState } from "react";

export default function Portfolio5() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  const projects = [
    {
      title: "SmartHome Hub",
      category: "IoT Platform",
      year: "2024",
      description: "Unified control system for smart home devices with AI automation",
      tech: ["React Native", "IoT", "Machine Learning"],
      metrics: { users: "1.2M", rating: "4.7", growth: "+180%" },
    },
    {
      title: "LegalTech Pro",
      category: "SaaS",
      year: "2024",
      description: "Document automation and case management for law firms",
      tech: ["Next.js", "AI", "Cloud Security"],
      metrics: { users: "50K", rating: "4.9", growth: "+220%" },
    },
    {
      title: "EventFlow",
      category: "Event Management",
      year: "2023",
      description: "End-to-end platform for virtual and hybrid events",
      tech: ["WebRTC", "Streaming", "Analytics"],
      metrics: { users: "800K", rating: "4.6", growth: "+150%" },
    },
    {
      title: "CryptoWallet",
      category: "FinTech",
      year: "2023",
      description: "Secure multi-currency wallet with DeFi integration",
      tech: ["Blockchain", "Solidity", "React"],
      metrics: { users: "2.5M", rating: "4.8", growth: "+300%" },
    },
    {
      title: "TeachConnect",
      category: "EdTech",
      year: "2024",
      description: "Interactive learning platform with live classes and AI tutors",
      tech: ["Video SDK", "AI", "Gamification"],
      metrics: { users: "600K", rating: "4.7", growth: "+195%" },
    },
    {
      title: "FoodTracker",
      category: "Health & Wellness",
      year: "2023",
      description: "Nutrition tracking with barcode scanning and meal planning",
      tech: ["Computer Vision", "APIs", "Flutter"],
      metrics: { users: "900K", rating: "4.5", growth: "+140%" },
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
        className="fade-up"
        style={{
          padding: "140px 24px 100px",
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
              gap: 48,
              marginBottom: 60,
            }}
          >
            <div style={{ flex: 1 }}>
              <h1
                className="text-main"
                style={{
                  fontWeight: 900,
                  fontSize: "clamp(44px, 6vw, 68px)",
                  lineHeight: 1.1,
                  marginBottom: 28,
                }}
              >
                Digital Products That Scale
              </h1>
              <p
                className="text-muted"
                style={{
                  fontSize: 19,
                  lineHeight: 1.8,
                }}
              >
                From MVP to millions of users, we build products that grow with your business. Explore
                our portfolio of successful launches.
              </p>
            </div>

            {/* View Toggle */}
            <div
              className="bg-surface"
              style={{
                display: "flex",
                gap: 8,
                padding: 8,
                borderRadius: 12,
                border: "2px solid var(--color-border)",
              }}
            >
              <button
                onClick={() => setViewMode("grid")}
                className={viewMode === "grid" ? "bg-gradient-accent" : ""}
                style={{
                  padding: "12px 24px",
                  borderRadius: 8,
                  border: "none",
                  fontSize: 14,
                  fontWeight: 700,
                  cursor: "pointer",
                  color: viewMode === "grid" ? "var(--color-surface)" : "var(--color-text)",
                  transition: "all 0.3s ease",
                }}
              >
                Grid
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={viewMode === "list" ? "bg-gradient-accent" : ""}
                style={{
                  padding: "12px 24px",
                  borderRadius: 8,
                  border: "none",
                  fontSize: 14,
                  fontWeight: 700,
                  cursor: "pointer",
                  color: viewMode === "list" ? "var(--color-surface)" : "var(--color-text)",
                  transition: "all 0.3s ease",
                }}
              >
                List
              </button>
            </div>
          </div>

          {/* Grid View */}
          {viewMode === "grid" && (
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(2, 1fr)",
                gap: 32,
              }}
            >
              {projects.map((project, i) => (
                <div
                  key={i}
                  className="bg-surface hover-lift shadow-accent-hover"
                  style={{
                    borderRadius: 24,
                    border: "2px solid var(--color-border)",
                    overflow: "hidden",
                  }}
                >
                  {/* Header */}
                  <div
                    className="bg-gradient-accent"
                    style={{
                      padding: "48px 40px",
                    }}
                  >
                    <div
                      style={{
                        fontSize: 13,
                        fontWeight: 700,
                        textTransform: "uppercase",
                        letterSpacing: 1.5,
                        marginBottom: 12,
                        opacity: 0.9,
                      }}
                    >
                      {project.category} · {project.year}
                    </div>
                    <h3
                      style={{
                        fontWeight: 900,
                        fontSize: 32,
                        marginBottom: 16,
                      }}
                    >
                      {project.title}
                    </h3>
                    <p
                      style={{
                        fontSize: 16,
                        lineHeight: 1.7,
                        opacity: 0.95,
                      }}
                    >
                      {project.description}
                    </p>
                  </div>

                  {/* Content */}
                  <div style={{ padding: "32px 40px" }}>
                    <div style={{ marginBottom: 28 }}>
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
                        Technology
                      </div>
                      <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                        {project.tech.map((tech) => (
                          <div
                            key={tech}
                            className="bg-surface-alt"
                            style={{
                              padding: "6px 14px",
                              borderRadius: 6,
                              fontSize: 13,
                              fontWeight: 600,
                              color: "var(--color-text-muted)",
                            }}
                          >
                            {tech}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div
                      style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(3, 1fr)",
                        gap: 20,
                        paddingTop: 28,
                        borderTop: "1px solid var(--color-border)",
                      }}
                    >
                      <div>
                        <div
                          className="text-accent"
                          style={{
                            fontSize: 24,
                            fontWeight: 900,
                            marginBottom: 4,
                          }}
                        >
                          {project.metrics.users}
                        </div>
                        <div className="text-muted" style={{ fontSize: 12, fontWeight: 600 }}>
                          Users
                        </div>
                      </div>
                      <div>
                        <div
                          className="text-accent"
                          style={{
                            fontSize: 24,
                            fontWeight: 900,
                            marginBottom: 4,
                          }}
                        >
                          {project.metrics.rating}★
                        </div>
                        <div className="text-muted" style={{ fontSize: 12, fontWeight: 600 }}>
                          Rating
                        </div>
                      </div>
                      <div>
                        <div
                          className="text-accent"
                          style={{
                            fontSize: 24,
                            fontWeight: 900,
                            marginBottom: 4,
                          }}
                        >
                          {project.metrics.growth}
                        </div>
                        <div className="text-muted" style={{ fontSize: 12, fontWeight: 600 }}>
                          Growth
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* List View */}
          {viewMode === "list" && (
            <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
              {projects.map((project, i) => (
                <div
                  key={i}
                  className="bg-surface hover-lift shadow-accent-hover"
                  style={{
                    padding: "40px 44px",
                    borderRadius: 20,
                    border: "2px solid var(--color-border)",
                    display: "grid",
                    gridTemplateColumns: "1fr auto",
                    gap: 48,
                    alignItems: "center",
                  }}
                >
                  <div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 16,
                        marginBottom: 12,
                      }}
                    >
                      <div
                        className="text-accent"
                        style={{
                          fontSize: 13,
                          fontWeight: 700,
                          textTransform: "uppercase",
                          letterSpacing: 1.5,
                        }}
                      >
                        {project.category}
                      </div>
                      <div
                        className="text-muted"
                        style={{
                          fontSize: 13,
                          fontWeight: 600,
                        }}
                      >
                        {project.year}
                      </div>
                    </div>

                    <h3
                      className="text-main"
                      style={{
                        fontWeight: 800,
                        fontSize: 28,
                        marginBottom: 12,
                      }}
                    >
                      {project.title}
                    </h3>

                    <p
                      className="text-muted"
                      style={{
                        fontSize: 16,
                        lineHeight: 1.7,
                        marginBottom: 20,
                      }}
                    >
                      {project.description}
                    </p>

                    <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                      {project.tech.map((tech) => (
                        <div
                          key={tech}
                          className="bg-surface-alt"
                          style={{
                            padding: "6px 14px",
                            borderRadius: 6,
                            fontSize: 12,
                            fontWeight: 600,
                            color: "var(--color-text-muted)",
                          }}
                        >
                          {tech}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      gap: 32,
                      alignItems: "center",
                    }}
                  >
                    <div style={{ textAlign: "center" }}>
                      <div
                        className="text-accent"
                        style={{
                          fontSize: 32,
                          fontWeight: 900,
                          marginBottom: 6,
                        }}
                      >
                        {project.metrics.users}
                      </div>
                      <div className="text-muted" style={{ fontSize: 12, fontWeight: 600 }}>
                        Users
                      </div>
                    </div>
                    <div style={{ textAlign: "center" }}>
                      <div
                        className="text-accent"
                        style={{
                          fontSize: 32,
                          fontWeight: 900,
                          marginBottom: 6,
                        }}
                      >
                        {project.metrics.rating}★
                      </div>
                      <div className="text-muted" style={{ fontSize: 12, fontWeight: 600 }}>
                        Rating
                      </div>
                    </div>
                    <button
                      className="hover-lift"
                      style={{
                        padding: "14px 32px",
                        borderRadius: 10,
                        fontSize: 14,
                        fontWeight: 700,
                        background: "var(--color-accent)",
                        color: "var(--color-surface)",
                        border: "none",
                        cursor: "pointer",
                        whiteSpace: "nowrap",
                      }}
                    >
                      View Details
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ---------- INDUSTRIES ---------- */}
      <section
        className="bg-surface-alt fade-up"
        style={{
          padding: "140px 24px",
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 80 }}>
            <h2
              className="text-main"
              style={{
                fontWeight: 800,
                fontSize: 46,
                marginBottom: 20,
              }}
            >
              Industries We Serve
            </h2>
            <p className="text-muted" style={{ fontSize: 19 }}>
              Diverse experience across multiple sectors
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: 24,
            }}
          >
            {[
              "FinTech",
              "Healthcare",
              "E-commerce",
              "Education",
              "Real Estate",
              "Entertainment",
              "IoT",
              "SaaS",
            ].map((industry, i) => (
              <div
                key={i}
                className="bg-surface hover-lift shadow-accent-hover"
                style={{
                  padding: "28px 24px",
                  borderRadius: 16,
                  border: "2px solid var(--color-border)",
                  textAlign: "center",
                }}
              >
                <div
                  className="text-main"
                  style={{
                    fontSize: 17,
                    fontWeight: 700,
                  }}
                >
                  {industry}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- CTA ---------- */}
      <section
        className="bg-gradient-secondary fade-up"
        style={{
          padding: "100px 24px",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <div style={{ fontSize: 68, marginBottom: 28 }}>🚀</div>
          <h2
            style={{
              fontWeight: 900,
              fontSize: 48,
              marginBottom: 24,
            }}
          >
            Ready to Launch Your Product?
          </h2>
          <p
            style={{
              fontSize: 19,
              lineHeight: 1.7,
              marginBottom: 40,
              opacity: 0.95,
            }}
          >
            From idea to launch, we'll be with you every step of the way. Let's turn your vision into
            reality.
          </p>
          <button
            className="hover-lift"
            style={{
              padding: "20px 52px",
              borderRadius: 12,
              fontSize: 18,
              fontWeight: 700,
              background: "var(--color-surface)",
              color: "var(--color-accent)",
              border: "none",
              cursor: "pointer",
            }}
          >
            Get Started
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
            font-size: 36px !important;
          }
          h2 {
            font-size: 28px !important;
          }
          h3 {
            font-size: 24px !important;
          }
          div[style*="display: flex"][style*="justifyContent: space-between"] {
            flex-direction: column !important;
            align-items: flex-start !important;
          }
          div[style*="gridTemplateColumns: repeat(2, 1fr)"],
          div[style*="gridTemplateColumns: repeat(3, 1fr)"],
          div[style*="gridTemplateColumns: repeat(4, 1fr)"],
          div[style*="gridTemplateColumns: 1fr auto"] {
            grid-template-columns: 1fr !important;
            gap: 24px !important;
          }
          div[style*="padding: 48px 40px"],
          div[style*="padding: 40px 44px"],
          div[style*="padding: 32px 40px"] {
            padding: 28px 24px !important;
          }
          div[style*="gap: 48"] {
            gap: 32px !important;
          }
        }
      `}</style>
    </div>
  );
}
