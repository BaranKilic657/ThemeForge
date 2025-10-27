"use client";

import { useState } from "react";

export default function Portfolio9() {
  const [expandedProject, setExpandedProject] = useState<number | null>(null);

  const projects = [
    {
      title: "Brand Redesign for Eco Startup",
      type: "Branding",
      year: "2024",
      description:
        "Complete visual identity overhaul including logo, color system, and brand guidelines.",
      challenge:
        "The company needed a fresh, modern look that communicated sustainability without being cliché.",
      solution:
        "Created a nature-inspired color palette with organic shapes and clean typography.",
      outcome: "40% increase in brand recognition, featured in Design Magazine.",
      tags: ["Branding", "Logo Design", "Guidelines"],
      color: "#10b981",
    },
    {
      title: "E-Learning Platform UI/UX",
      type: "Product Design",
      year: "2024",
      description:
        "Designed an intuitive learning platform with gamification elements for students.",
      challenge: "Complex course structure needed to be simplified for better student engagement.",
      solution:
        "Implemented a modular design with progress tracking and achievement system.",
      outcome: "User engagement up 75%, completion rate improved by 60%.",
      tags: ["UI/UX", "Web Design", "Education"],
      color: "#3b82f6",
    },
    {
      title: "Personal Finance Mobile App",
      type: "App Design",
      year: "2023",
      description: "Designed a mobile app helping users track expenses and achieve financial goals.",
      challenge: "Making complex financial data accessible and non-intimidating for young adults.",
      solution:
        "Visual data representation with friendly micro-interactions and goal-setting features.",
      outcome: "50K+ downloads in first month, 4.7 rating on App Store.",
      tags: ["Mobile", "FinTech", "iOS/Android"],
      color: "#8b5cf6",
    },
    {
      title: "Restaurant Booking System",
      type: "Web Development",
      year: "2023",
      description: "Built a real-time reservation system for a chain of upscale restaurants.",
      challenge:
        "Needed seamless integration with existing POS and inventory management systems.",
      solution:
        "Developed a full-stack application with React frontend and Node.js backend.",
      outcome: "30% reduction in no-shows, improved table turnover rate.",
      tags: ["Full Stack", "React", "Node.js"],
      color: "#f59e0b",
    },
  ];

  return (
    <div
      style={{
        minHeight: "100vh",
        paddingTop: 80,
      }}
    >
      {/* ---------- BOLD HERO ---------- */}
      <section
        style={{
          padding: "160px 24px 120px",
          background: "linear-gradient(135deg, var(--color-accent) 0%, var(--color-accent-dark) 100%)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div style={{ maxWidth: "1100px", margin: "0 auto", position: "relative", zIndex: 1 }}>
          <div
            style={{
              maxWidth: 800,
            }}
          >
            <div
              style={{
                fontSize: 15,
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: 3,
                marginBottom: 24,
                opacity: 0.9,
              }}
            >
              Independent Designer & Developer
            </div>
            <h1
              style={{
                fontWeight: 900,
                fontSize: "clamp(52px, 8vw, 96px)",
                lineHeight: 1,
                marginBottom: 32,
                letterSpacing: "-0.03em",
              }}
            >
              Sam Taylor
            </h1>
            <p
              style={{
                fontSize: 24,
                lineHeight: 1.6,
                marginBottom: 48,
                opacity: 0.95,
                maxWidth: 650,
              }}
            >
              I help brands and businesses tell their story through thoughtful design and elegant code.
            </p>
            <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
              <button
                className="hover-lift"
                style={{
                  padding: "20px 44px",
                  borderRadius: 12,
                  fontSize: 17,
                  fontWeight: 700,
                  background: "var(--color-surface)",
                  color: "var(--color-accent)",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                See My Work
              </button>
              <button
                className="hover-lift"
                style={{
                  padding: "20px 44px",
                  borderRadius: 12,
                  fontSize: 17,
                  fontWeight: 700,
                  background: "rgba(255, 255, 255, 0.2)",
                  color: "white",
                  border: "2px solid white",
                  cursor: "pointer",
                  backdropFilter: "blur(10px)",
                }}
              >
                Download CV
              </button>
            </div>
          </div>
        </div>

        {/* Decorative circles */}
        <div
          style={{
            position: "absolute",
            top: "-20%",
            right: "-10%",
            width: 600,
            height: 600,
            borderRadius: "50%",
            background: "rgba(255, 255, 255, 0.1)",
            filter: "blur(100px)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-15%",
            left: "-5%",
            width: 400,
            height: 400,
            borderRadius: "50%",
            background: "rgba(0, 0, 0, 0.1)",
            filter: "blur(80px)",
          }}
        />
      </section>

      {/* ---------- PROCESS ---------- */}
      <section
        className="bg-surface-alt fade-up"
        style={{
          padding: "120px 24px",
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
              How I Work
            </h2>
            <p className="text-muted" style={{ fontSize: 19 }}>
              A simple, effective process
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: 32,
            }}
          >
            {[
              {
                number: "01",
                title: "Discover",
                description: "Understanding your goals, audience, and challenges.",
              },
              {
                number: "02",
                title: "Design",
                description: "Creating beautiful, functional solutions that work.",
              },
              {
                number: "03",
                title: "Develop",
                description: "Building with clean code and best practices.",
              },
              {
                number: "04",
                title: "Deliver",
                description: "Launching your project and ensuring success.",
              },
            ].map((step, i) => (
              <div
                key={i}
                className="bg-surface hover-lift shadow-accent-hover"
                style={{
                  padding: "36px 32px",
                  borderRadius: 20,
                  border: "2px solid var(--color-border)",
                  position: "relative",
                }}
              >
                <div
                  className="text-accent"
                  style={{
                    fontSize: 72,
                    fontWeight: 900,
                    opacity: 0.1,
                    position: "absolute",
                    top: 20,
                    right: 20,
                    lineHeight: 1,
                  }}
                >
                  {step.number}
                </div>
                <div
                  className="text-accent"
                  style={{
                    fontSize: 16,
                    fontWeight: 800,
                    marginBottom: 12,
                  }}
                >
                  {step.number}
                </div>
                <h3
                  className="text-main"
                  style={{
                    fontWeight: 800,
                    fontSize: 24,
                    marginBottom: 12,
                  }}
                >
                  {step.title}
                </h3>
                <p
                  className="text-muted"
                  style={{
                    fontSize: 15,
                    lineHeight: 1.7,
                  }}
                >
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- EXPANDABLE PROJECTS ---------- */}
      <section
        className="fade-up"
        style={{
          padding: "140px 24px",
        }}
      >
        <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <div style={{ marginBottom: 80 }}>
            <h2
              className="text-main"
              style={{
                fontWeight: 800,
                fontSize: 46,
                marginBottom: 16,
              }}
            >
              Case Studies
            </h2>
            <p className="text-muted" style={{ fontSize: 19 }}>
              Deep dives into selected projects
            </p>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            {projects.map((project, i) => (
              <div
                key={i}
                className="bg-surface hover-lift shadow-accent-hover"
                style={{
                  borderRadius: 20,
                  border: "2px solid var(--color-border)",
                  overflow: "hidden",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                }}
                onClick={() => setExpandedProject(expandedProject === i ? null : i)}
              >
                {/* Header - Always Visible */}
                <div
                  style={{
                    padding: "32px 40px",
                    display: "grid",
                    gridTemplateColumns: "1fr auto",
                    gap: 32,
                    alignItems: "center",
                    background:
                      expandedProject === i
                        ? `linear-gradient(135deg, ${project.color}15 0%, transparent 100%)`
                        : "transparent",
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
                        style={{
                          width: 8,
                          height: 8,
                          borderRadius: "50%",
                          background: project.color,
                        }}
                      />
                      <div
                        className="text-accent"
                        style={{
                          fontSize: 13,
                          fontWeight: 700,
                          textTransform: "uppercase",
                          letterSpacing: 1.5,
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
                        {project.year}
                      </div>
                    </div>
                    <h3
                      className="text-main"
                      style={{
                        fontWeight: 800,
                        fontSize: 28,
                        marginBottom: 8,
                      }}
                    >
                      {project.title}
                    </h3>
                    <p
                      className="text-muted"
                      style={{
                        fontSize: 16,
                        lineHeight: 1.7,
                      }}
                    >
                      {project.description}
                    </p>
                  </div>

                  <div
                    className="text-accent"
                    style={{
                      fontSize: 32,
                      fontWeight: 700,
                      transform: expandedProject === i ? "rotate(180deg)" : "rotate(0)",
                      transition: "transform 0.3s ease",
                    }}
                  >
                    ↓
                  </div>
                </div>

                {/* Expanded Content */}
                {expandedProject === i && (
                  <div
                    style={{
                      padding: "0 40px 40px",
                      animation: "slideDown 0.3s ease",
                    }}
                  >
                    <div
                      style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(3, 1fr)",
                        gap: 28,
                        marginBottom: 32,
                      }}
                    >
                      {[
                        { label: "Challenge", content: project.challenge },
                        { label: "Solution", content: project.solution },
                        { label: "Outcome", content: project.outcome },
                      ].map((section, idx) => (
                        <div key={idx}>
                          <h4
                            className="text-main"
                            style={{
                              fontSize: 14,
                              fontWeight: 700,
                              textTransform: "uppercase",
                              letterSpacing: 1,
                              marginBottom: 12,
                            }}
                          >
                            {section.label}
                          </h4>
                          <p
                            className="text-muted"
                            style={{
                              fontSize: 14,
                              lineHeight: 1.7,
                            }}
                          >
                            {section.content}
                          </p>
                        </div>
                      ))}
                    </div>

                    <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                      {project.tags.map((tag) => (
                        <div
                          key={tag}
                          className="bg-surface-alt"
                          style={{
                            padding: "8px 16px",
                            borderRadius: 8,
                            fontSize: 13,
                            fontWeight: 600,
                            color: "var(--color-text-muted)",
                          }}
                        >
                          {tag}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- TESTIMONIALS ---------- */}
      <section
        className="bg-surface-alt fade-up"
        style={{
          padding: "120px 24px",
        }}
      >
        <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <h2
            className="text-main"
            style={{
              fontWeight: 800,
              fontSize: 46,
              marginBottom: 60,
              textAlign: "center",
            }}
          >
            Client Feedback
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: 32,
            }}
          >
            {[
              {
                quote:
                  "Sam's attention to detail and ability to understand our vision was incredible. The final product exceeded all expectations.",
                author: "Michelle Rodriguez",
                role: "CEO, Eco Startup",
              },
              {
                quote:
                  "Working with Sam was a pleasure. Professional, creative, and always delivered on time. Highly recommended!",
                author: "David Chen",
                role: "Product Manager, EdTech",
              },
            ].map((testimonial, i) => (
              <div
                key={i}
                className="bg-surface"
                style={{
                  padding: "40px 36px",
                  borderRadius: 20,
                  border: "2px solid var(--color-border)",
                }}
              >
                <div style={{ fontSize: 40, marginBottom: 24, opacity: 0.3 }}>❝</div>
                <p
                  className="text-main"
                  style={{
                    fontSize: 18,
                    lineHeight: 1.7,
                    marginBottom: 28,
                    fontStyle: "italic",
                  }}
                >
                  {testimonial.quote}
                </p>
                <div>
                  <div
                    className="text-main"
                    style={{
                      fontWeight: 700,
                      fontSize: 16,
                      marginBottom: 4,
                    }}
                  >
                    {testimonial.author}
                  </div>
                  <div
                    className="text-muted"
                    style={{
                      fontSize: 14,
                    }}
                  >
                    {testimonial.role}
                  </div>
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
          padding: "120px 24px",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: "700px", margin: "0 auto" }}>
          <h2
            style={{
              fontWeight: 900,
              fontSize: 52,
              marginBottom: 28,
            }}
          >
            Ready to Start Your Project?
          </h2>
          <p
            style={{
              fontSize: 20,
              lineHeight: 1.7,
              marginBottom: 44,
              opacity: 0.95,
            }}
          >
            Let's collaborate and create something amazing together. I'm currently accepting new
            projects for Q1 2024.
          </p>
          <button
            className="hover-lift"
            style={{
              padding: "22px 56px",
              borderRadius: 12,
              fontSize: 18,
              fontWeight: 700,
              background: "var(--color-surface)",
              color: "var(--color-accent)",
              border: "none",
              cursor: "pointer",
            }}
          >
            Let's Talk
          </button>
        </div>
      </section>

      {/* ---------- ANIMATIONS ---------- */}
      <style jsx>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (max-width: 768px) {
          section {
            padding: 80px 20px !important;
          }
          h1 {
            font-size: 48px !important;
          }
          h2 {
            font-size: 32px !important;
          }
          h3 {
            font-size: 22px !important;
          }
          div[style*="gridTemplateColumns: repeat(4, 1fr)"],
          div[style*="gridTemplateColumns: repeat(3, 1fr)"],
          div[style*="gridTemplateColumns: repeat(2, 1fr)"],
          div[style*="gridTemplateColumns: 1fr auto"] {
            grid-template-columns: 1fr !important;
            gap: 24px !important;
          }
          div[style*="padding: 36px 32px"],
          div[style*="padding: 40px 36px"],
          div[style*="padding: 32px 40px"],
          div[style*="padding: 0 40px 40px"] {
            padding: 28px 24px !important;
          }
          div[style*="position: absolute"][style*="width: 600"],
          div[style*="position: absolute"][style*="width: 400"] {
            display: none !important;
          }
        }
      `}</style>
    </div>
  );
}
