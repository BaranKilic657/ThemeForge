"use client";

import { useState } from "react";

export default function Portfolio6() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const personalProjects = [
    {
      title: "Personal Brand Identity",
      year: "2024",
      role: "Designer & Developer",
      description: "Complete visual identity refresh including logo, color palette, and typography system.",
      image: "🎨",
      tags: ["Branding", "Design", "Strategy"],
      link: "View Project",
    },
    {
      title: "Photography Portfolio",
      year: "2024",
      role: "Web Developer",
      description: "Minimalist portfolio showcasing street photography with a focus on visual storytelling.",
      image: "📸",
      tags: ["Photography", "Web Design", "React"],
      link: "View Gallery",
    },
    {
      title: "Open Source Contributions",
      year: "2023-2024",
      role: "Contributor",
      description: "Active contributions to various open source projects including UI libraries and dev tools.",
      image: "💻",
      tags: ["Open Source", "TypeScript", "React"],
      link: "View GitHub",
    },
    {
      title: "Side Project: MindFlow",
      year: "2023",
      role: "Solo Developer",
      description: "Meditation and mindfulness app with guided sessions and progress tracking.",
      image: "🧘",
      tags: ["Mobile App", "Flutter", "Wellness"],
      link: "View App",
    },
    {
      title: "Design System Library",
      year: "2024",
      role: "Creator",
      description: "Comprehensive design system with reusable components and documentation.",
      image: "🎯",
      tags: ["Design System", "React", "Storybook"],
      link: "View Docs",
    },
    {
      title: "Blog: Code & Coffee",
      year: "2022-Present",
      role: "Writer",
      description: "Technical blog sharing insights on web development, design patterns, and productivity.",
      image: "✍️",
      tags: ["Writing", "Tech", "Education"],
      link: "Read Blog",
    },
  ];

  return (
    <div
      style={{
        minHeight: "100vh",
        paddingTop: 80,
      }}
    >
      {/* ---------- PERSONAL HERO ---------- */}
      <section
        className="fade-up"
        style={{
          padding: "120px 24px 80px",
        }}
      >
        <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 40,
              marginBottom: 60,
            }}
          >
            {/* Avatar */}
            <div
              className="bg-gradient-accent"
              style={{
                width: 140,
                height: 140,
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 64,
                flexShrink: 0,
                boxShadow: "0 20px 60px rgba(0, 0, 0, 0.15)",
              }}
            >
              👨‍💻
            </div>

            <div style={{ flex: 1 }}>
              <div
                className="text-accent"
                style={{
                  fontSize: 14,
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: 2,
                  marginBottom: 12,
                }}
              >
                Portfolio
              </div>
              <h1
                className="text-main"
                style={{
                  fontWeight: 900,
                  fontSize: "clamp(40px, 6vw, 64px)",
                  lineHeight: 1.1,
                  marginBottom: 20,
                }}
              >
                Hi, I'm Alex Rivera
              </h1>
              <p
                className="text-muted"
                style={{
                  fontSize: 20,
                  lineHeight: 1.7,
                  marginBottom: 28,
                }}
              >
                Product designer & developer passionate about creating delightful digital experiences
                that make a difference.
              </p>
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                <a
                  href="#contact"
                  className="hover-lift"
                  style={{
                    padding: "16px 36px",
                    borderRadius: 12,
                    fontSize: 16,
                    fontWeight: 700,
                    background: "var(--color-accent)",
                    color: "var(--color-surface)",
                    border: "none",
                    cursor: "pointer",
                    textDecoration: "none",
                    display: "inline-block",
                  }}
                >
                  Get in Touch
                </a>
                <a
                  href="#work"
                  className="hover-lift"
                  style={{
                    padding: "16px 36px",
                    borderRadius: 12,
                    fontSize: 16,
                    fontWeight: 700,
                    background: "transparent",
                    color: "var(--color-text)",
                    border: "2px solid var(--color-border)",
                    cursor: "pointer",
                    textDecoration: "none",
                    display: "inline-block",
                  }}
                >
                  View My Work
                </a>
              </div>
            </div>
          </div>

          {/* Quick Stats */}
          <div
            className="bg-surface"
            style={{
              padding: "32px 40px",
              borderRadius: 20,
              border: "2px solid var(--color-border)",
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: 32,
              textAlign: "center",
            }}
          >
            {[
              { value: "5+", label: "Years Experience" },
              { value: "50+", label: "Projects Completed" },
              { value: "30+", label: "Happy Clients" },
              { value: "10K+", label: "Lines of Code" },
            ].map((stat, i) => (
              <div key={i}>
                <div
                  className="text-accent"
                  style={{
                    fontSize: 36,
                    fontWeight: 900,
                    marginBottom: 8,
                  }}
                >
                  {stat.value}
                </div>
                <div
                  className="text-muted"
                  style={{
                    fontSize: 14,
                    fontWeight: 600,
                  }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- ABOUT ME ---------- */}
      <section
        className="bg-surface-alt fade-up"
        style={{
          padding: "100px 24px",
        }}
      >
        <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1.5fr",
              gap: 60,
              alignItems: "start",
            }}
          >
            <div>
              <h2
                className="text-main"
                style={{
                  fontWeight: 800,
                  fontSize: 38,
                  marginBottom: 20,
                }}
              >
                About Me
              </h2>
              <p
                className="text-muted"
                style={{
                  fontSize: 16,
                  lineHeight: 1.8,
                }}
              >
                I'm a designer who codes and a developer who designs. This unique perspective allows me
                to bridge the gap between aesthetics and functionality.
              </p>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
              {[
                {
                  icon: "🎨",
                  title: "Design Thinking",
                  description:
                    "User-centered approach to problem solving with a focus on empathy and iteration.",
                },
                {
                  icon: "⚡",
                  title: "Modern Development",
                  description:
                    "Building with React, Next.js, TypeScript, and cutting-edge web technologies.",
                },
                {
                  icon: "🚀",
                  title: "Product Mindset",
                  description:
                    "Always thinking about business goals, user needs, and measurable outcomes.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    gap: 20,
                  }}
                >
                  <div
                    style={{
                      fontSize: 40,
                      flexShrink: 0,
                    }}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <h3
                      className="text-main"
                      style={{
                        fontWeight: 700,
                        fontSize: 20,
                        marginBottom: 8,
                      }}
                    >
                      {item.title}
                    </h3>
                    <p
                      className="text-muted"
                      style={{
                        fontSize: 15,
                        lineHeight: 1.7,
                      }}
                    >
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ---------- PERSONAL PROJECTS ---------- */}
      <section
        id="work"
        className="fade-up"
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
              Selected Work
            </h2>
            <p className="text-muted" style={{ fontSize: 19 }}>
              Projects that I'm proud to share
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: 32,
            }}
          >
            {personalProjects.map((project, i) => (
              <div
                key={i}
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="bg-surface hover-lift shadow-accent-hover"
                style={{
                  borderRadius: 24,
                  border: "2px solid var(--color-border)",
                  overflow: "hidden",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                }}
              >
                {/* Image Section */}
                <div
                  className="bg-gradient-accent"
                  style={{
                    height: 240,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 72,
                    position: "relative",
                  }}
                >
                  {project.image}

                  {/* Overlay on hover */}
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background: "rgba(0, 0, 0, 0.7)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      opacity: hoveredIndex === i ? 1 : 0,
                      transition: "opacity 0.3s ease",
                    }}
                  >
                    <span
                      style={{
                        color: "white",
                        fontSize: 18,
                        fontWeight: 700,
                      }}
                    >
                      {project.link} →
                    </span>
                  </div>
                </div>

                {/* Content Section */}
                <div style={{ padding: "32px 28px" }}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      marginBottom: 12,
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
                      {project.year}
                    </div>
                    <div
                      className="text-muted"
                      style={{
                        fontSize: 13,
                        fontWeight: 600,
                        fontStyle: "italic",
                      }}
                    >
                      {project.role}
                    </div>
                  </div>

                  <h3
                    className="text-main"
                    style={{
                      fontWeight: 800,
                      fontSize: 24,
                      marginBottom: 12,
                    }}
                  >
                    {project.title}
                  </h3>

                  <p
                    className="text-muted"
                    style={{
                      fontSize: 15,
                      lineHeight: 1.7,
                      marginBottom: 20,
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
                          padding: "6px 12px",
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
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- SKILLS ---------- */}
      <section
        className="bg-surface-alt fade-up"
        style={{
          padding: "100px 24px",
        }}
      >
        <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <h2
            className="text-main"
            style={{
              fontWeight: 800,
              fontSize: 38,
              marginBottom: 60,
              textAlign: "center",
            }}
          >
            Skills & Tools
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 40,
            }}
          >
            {[
              {
                category: "Design",
                skills: ["Figma", "Adobe XD", "Illustrator", "Photoshop", "Sketch"],
              },
              {
                category: "Development",
                skills: ["React", "Next.js", "TypeScript", "Node.js", "Tailwind CSS"],
              },
              {
                category: "Other",
                skills: ["Git", "Agile", "User Research", "Prototyping", "Testing"],
              },
            ].map((group, i) => (
              <div key={i}>
                <h3
                  className="text-main"
                  style={{
                    fontSize: 18,
                    fontWeight: 700,
                    marginBottom: 20,
                    textTransform: "uppercase",
                    letterSpacing: 1,
                  }}
                >
                  {group.category}
                </h3>
                <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                  {group.skills.map((skill) => (
                    <div
                      key={skill}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 10,
                      }}
                    >
                      <div
                        className="bg-gradient-accent"
                        style={{
                          width: 8,
                          height: 8,
                          borderRadius: "50%",
                          flexShrink: 0,
                        }}
                      />
                      <span
                        className="text-muted"
                        style={{
                          fontSize: 15,
                          fontWeight: 500,
                        }}
                      >
                        {skill}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- CONTACT CTA ---------- */}
      <section
        id="contact"
        className="bg-gradient-secondary fade-up"
        style={{
          padding: "100px 24px",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: "700px", margin: "0 auto" }}>
          <div style={{ fontSize: 64, marginBottom: 28 }}>💌</div>
          <h2
            style={{
              fontWeight: 900,
              fontSize: 46,
              marginBottom: 24,
            }}
          >
            Let's Work Together
          </h2>
          <p
            style={{
              fontSize: 19,
              lineHeight: 1.7,
              marginBottom: 40,
              opacity: 0.95,
            }}
          >
            I'm always interested in hearing about new projects and opportunities. Whether you have a
            question or just want to say hi, feel free to reach out!
          </p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
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
              Send Email
            </button>
            <button
              className="hover-lift"
              style={{
                padding: "18px 48px",
                borderRadius: 12,
                fontSize: 17,
                fontWeight: 700,
                background: "transparent",
                color: "var(--color-surface)",
                border: "2px solid var(--color-surface)",
                cursor: "pointer",
              }}
            >
              Download Resume
            </button>
          </div>

          {/* Social Links */}
          <div
            style={{
              marginTop: 48,
              display: "flex",
              gap: 20,
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            {["LinkedIn", "GitHub", "Twitter", "Dribbble"].map((social) => (
              <a
                key={social}
                href="#"
                className="text-surface hover-lift"
                style={{
                  fontSize: 15,
                  fontWeight: 600,
                  textDecoration: "none",
                  opacity: 0.9,
                  transition: "opacity 0.3s ease",
                }}
              >
                {social}
              </a>
            ))}
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
            font-size: 32px !important;
          }
          h2 {
            font-size: 28px !important;
          }
          h3 {
            font-size: 20px !important;
          }
          div[style*="width: 140"],
          div[style*="height: 140"] {
            width: 100px !important;
            height: 100px !important;
            font-size: 48px !important;
          }
          div[style*="gridTemplateColumns: repeat(4, 1fr)"],
          div[style*="gridTemplateColumns: repeat(3, 1fr)"],
          div[style*="gridTemplateColumns: repeat(2, 1fr)"],
          div[style*="gridTemplateColumns: 1fr 1.5fr"],
          div[style*="gridTemplateColumns: 1fr 1.5fr"] {
            grid-template-columns: 1fr !important;
            gap: 24px !important;
          }
          div[style*="padding: 32px 40px"],
          div[style*="padding: 32px 28px"] {
            padding: 24px 20px !important;
          }
          div[style*="display: flex"][style*="gap: 40"] {
            flex-direction: column !important;
            gap: 28px !important;
          }
        }
      `}</style>
    </div>
  );
}
