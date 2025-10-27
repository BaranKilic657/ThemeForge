"use client";

import { useState } from "react";

export default function Portfolio1() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects = [
    {
      title: "FinanceFlow",
      category: "Web Application",
      description: "A modern banking dashboard with real-time analytics and seamless UX.",
      tags: ["React", "Node.js", "PostgreSQL"],
      year: "2024",
    },
    {
      title: "HealthHub",
      category: "Mobile App",
      description: "Patient management system connecting doctors and patients efficiently.",
      tags: ["React Native", "Firebase", "AI"],
      year: "2024",
    },
    {
      title: "ShopSmart",
      category: "E-commerce",
      description: "Next-gen e-commerce platform with personalized recommendations.",
      tags: ["Next.js", "Stripe", "GraphQL"],
      year: "2023",
    },
    {
      title: "TravelMate",
      category: "Mobile App",
      description: "Travel planning app with itinerary management and local guides.",
      tags: ["Flutter", "Maps API", "AWS"],
      year: "2023",
    },
    {
      title: "EduLearn",
      category: "Web Platform",
      description: "Interactive learning platform with video courses and assessments.",
      tags: ["Vue.js", "Python", "MongoDB"],
      year: "2024",
    },
    {
      title: "FoodieHub",
      category: "Mobile App",
      description: "Food delivery app with real-time tracking and multiple vendors.",
      tags: ["React Native", "Node.js", "Redis"],
      year: "2023",
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
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <div
            className="text-accent"
            style={{
              fontSize: 14,
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: 2,
              marginBottom: 24,
            }}
          >
            Our Work
          </div>
          <h1
            className="text-main"
            style={{
              fontWeight: 900,
              fontSize: "clamp(48px, 7vw, 76px)",
              lineHeight: 1.1,
              marginBottom: 32,
            }}
          >
            Crafting Digital Excellence
          </h1>
          <p
            className="text-muted"
            style={{
              fontSize: 20,
              lineHeight: 1.8,
              maxWidth: 720,
              margin: "0 auto",
            }}
          >
            Explore our portfolio of successful projects across web, mobile, and digital platforms.
            Each project tells a story of innovation and excellence.
          </p>
        </div>
      </section>

      {/* ---------- FEATURED PROJECT ---------- */}
      <section
        className="fade-up"
        style={{
          padding: "60px 24px",
        }}
      >
        <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
          <div
            className="bg-gradient-accent hover-lift shadow-accent-hover"
            style={{
              padding: "80px 70px",
              borderRadius: 32,
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 80,
              alignItems: "center",
            }}
          >
            <div>
              <div
                style={{
                  display: "inline-block",
                  padding: "8px 18px",
                  borderRadius: 20,
                  background: "color-mix(in srgb, var(--color-surface) 25%, transparent)",
                  fontSize: 12,
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: 1.5,
                  marginBottom: 24,
                }}
              >
                Featured Project
              </div>
              <h2
                style={{
                  fontWeight: 900,
                  fontSize: 52,
                  marginBottom: 24,
                  lineHeight: 1.1,
                }}
              >
                RetailPro
              </h2>
              <p
                style={{
                  fontSize: 19,
                  lineHeight: 1.8,
                  marginBottom: 32,
                  opacity: 0.95,
                }}
              >
                Complete digital transformation for a leading retail chain. We redesigned their entire
                online presence, resulting in 250% increase in conversions and 4x improvement in user
                engagement.
              </p>
              <div style={{ display: "flex", gap: 12, marginBottom: 40, flexWrap: "wrap" }}>
                {["Next.js", "TypeScript", "Tailwind", "Stripe", "AWS"].map((tech) => (
                  <div
                    key={tech}
                    style={{
                      padding: "10px 18px",
                      borderRadius: 8,
                      background: "color-mix(in srgb, var(--color-surface) 20%, transparent)",
                      fontSize: 13,
                      fontWeight: 600,
                    }}
                  >
                    {tech}
                  </div>
                ))}
              </div>
              <button
                className="hover-lift"
                style={{
                  padding: "16px 40px",
                  borderRadius: 12,
                  fontSize: 16,
                  fontWeight: 700,
                  background: "var(--color-surface)",
                  color: "var(--color-accent)",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                View Case Study
              </button>
            </div>

            <div
              className="bg-surface"
              style={{
                padding: "48px 44px",
                borderRadius: 24,
              }}
            >
              <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
                {[
                  { label: "Conversion Rate", value: "+250%" },
                  { label: "Page Load Time", value: "0.8s" },
                  { label: "User Engagement", value: "4x" },
                  { label: "Customer Satisfaction", value: "98%" },
                ].map((stat) => (
                  <div key={stat.label}>
                    <div
                      className="text-accent"
                      style={{
                        fontSize: 42,
                        fontWeight: 900,
                        marginBottom: 8,
                      }}
                    >
                      {stat.value}
                    </div>
                    <div
                      className="text-main"
                      style={{
                        fontSize: 16,
                        fontWeight: 600,
                        opacity: 0.8,
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

      {/* ---------- PROJECT GRID ---------- */}
      <section
        className="fade-up"
        style={{
          padding: "100px 24px",
        }}
      >
        <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
          <div style={{ marginBottom: 60 }}>
            <h2
              className="text-main"
              style={{
                fontWeight: 800,
                fontSize: 42,
                marginBottom: 16,
              }}
            >
              Recent Projects
            </h2>
            <p className="text-muted" style={{ fontSize: 18 }}>
              A selection of our latest work
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 32,
            }}
          >
            {projects.map((project, index) => (
              <div
                key={index}
                onMouseEnter={() => setHoveredProject(index)}
                onMouseLeave={() => setHoveredProject(null)}
                className="bg-surface hover-lift shadow-accent-hover"
                style={{
                  padding: "40px 36px",
                  borderRadius: 24,
                  border: "2px solid var(--color-border)",
                  transition: "all 0.3s ease",
                  cursor: "pointer",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginBottom: 20,
                  }}
                >
                  <div
                    className="text-accent"
                    style={{
                      fontSize: 13,
                      fontWeight: 700,
                      textTransform: "uppercase",
                      letterSpacing: 1,
                    }}
                  >
                    {project.category}
                  </div>
                  <div
                    className="text-muted"
                    style={{
                      fontSize: 14,
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
                    marginBottom: 16,
                  }}
                >
                  {project.title}
                </h3>

                <p
                  className="text-muted"
                  style={{
                    fontSize: 15,
                    lineHeight: 1.7,
                    marginBottom: 28,
                  }}
                >
                  {project.description}
                </p>

                <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                  {project.tags.map((tag) => (
                    <div
                      key={tag}
                      className="bg-surface-alt"
                      style={{
                        padding: "6px 14px",
                        borderRadius: 6,
                        fontSize: 12,
                        fontWeight: 600,
                        color: "var(--color-text-muted)",
                      }}
                    >
                      {tag}
                    </div>
                  ))}
                </div>

                <div
                  style={{
                    marginTop: 28,
                    fontSize: 14,
                    fontWeight: 700,
                    color: "var(--color-accent)",
                    opacity: hoveredProject === index ? 1 : 0,
                    transition: "opacity 0.3s ease",
                  }}
                >
                  View Project →
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
          <div style={{ fontSize: 68, marginBottom: 28 }}>✨</div>
          <h2
            style={{
              fontWeight: 900,
              fontSize: 48,
              marginBottom: 24,
            }}
          >
            Ready to Start Your Project?
          </h2>
          <p
            style={{
              fontSize: 19,
              lineHeight: 1.7,
              marginBottom: 40,
              opacity: 0.95,
            }}
          >
            Let's collaborate to bring your vision to life. Get in touch and let's create something
            amazing together.
          </p>
          <button
            className="hover-lift"
            style={{
              padding: "18px 48px",
              borderRadius: 12,
              fontSize: 17,
              fontWeight: 700,
              background: "var(--color-surface)",
              color: "var(--color-accent)",
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
            font-size: 36px !important;
          }
          h2 {
            font-size: 28px !important;
          }
          h3 {
            font-size: 22px !important;
          }
          div[style*="gridTemplateColumns: 1fr 1fr"],
          div[style*="gridTemplateColumns: repeat(3, 1fr)"] {
            grid-template-columns: 1fr !important;
            gap: 24px !important;
          }
          div[style*="padding: 80px 70px"],
          div[style*="padding: 48px 44px"],
          div[style*="padding: 40px 36px"] {
            padding: 32px 24px !important;
          }
        }
      `}</style>
    </div>
  );
}
