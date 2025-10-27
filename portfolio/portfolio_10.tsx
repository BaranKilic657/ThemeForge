"use client";

import { useState } from "react";

export default function Portfolio10() {
  const [filter, setFilter] = useState("All");

  const categories = ["All", "Design", "Development", "Writing", "Speaking"];

  const achievements = [
    {
      type: "Design",
      title: "Award-Winning App Interface",
      year: "2024",
      description: "Received 'Best Mobile Design' at the UX Awards for innovative gesture controls.",
      image: "🏆",
      link: "View Award",
    },
    {
      type: "Development",
      title: "Open Source Contribution",
      year: "2024",
      description: "Core contributor to React UI library with 10K+ GitHub stars.",
      image: "⭐",
      link: "View on GitHub",
    },
    {
      type: "Writing",
      title: "Published Book: Design Systems",
      year: "2023",
      description: "Authored comprehensive guide on building scalable design systems.",
      image: "📚",
      link: "Read More",
    },
    {
      type: "Speaking",
      title: "Keynote at Design Conference",
      year: "2023",
      description: "Presented 'The Future of Design Tools' to 2000+ attendees.",
      image: "🎤",
      link: "Watch Talk",
    },
    {
      type: "Design",
      title: "Featured on Behance",
      year: "2024",
      description: "Portfolio featured as 'Editor's Pick' with 50K+ views.",
      image: "🎨",
      link: "View Portfolio",
    },
    {
      type: "Development",
      title: "Launched SaaS Product",
      year: "2023",
      description: "Built and launched design collaboration tool reaching 5K users.",
      image: "🚀",
      link: "Visit Site",
    },
    {
      type: "Writing",
      title: "Tech Blog with 100K Readers",
      year: "2022-Present",
      description: "Regular articles on design, development, and productivity.",
      image: "✍️",
      link: "Read Articles",
    },
    {
      type: "Speaking",
      title: "Workshop Series",
      year: "2024",
      description: "Conducted 20+ workshops on Figma, React, and design thinking.",
      image: "👨‍🏫",
      link: "Learn More",
    },
  ];

  const filteredAchievements =
    filter === "All"
      ? achievements
      : achievements.filter((item) => item.type === filter);

  return (
    <div
      style={{
        minHeight: "100vh",
        paddingTop: 80,
      }}
    >
      {/* ---------- MAGAZINE-STYLE HERO ---------- */}
      <section
        className="fade-up"
        style={{
          padding: "140px 24px 100px",
        }}
      >
        <div style={{ maxWidth: "1300px", margin: "0 auto" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1.2fr 1fr",
              gap: 80,
              alignItems: "center",
            }}
          >
            {/* Left Column */}
            <div>
              <div
                className="text-accent"
                style={{
                  fontSize: 15,
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: 3,
                  marginBottom: 20,
                }}
              >
                Portfolio 2024
              </div>
              <h1
                className="text-main"
                style={{
                  fontWeight: 900,
                  fontSize: "clamp(56px, 8vw, 88px)",
                  lineHeight: 1.05,
                  marginBottom: 32,
                  letterSpacing: "-0.03em",
                }}
              >
                Riley Chen
              </h1>
              <div
                className="text-main"
                style={{
                  fontSize: 28,
                  fontWeight: 700,
                  marginBottom: 28,
                  lineHeight: 1.4,
                }}
              >
                Creative Technologist & Design Educator
              </div>
              <p
                className="text-muted"
                style={{
                  fontSize: 18,
                  lineHeight: 1.8,
                  marginBottom: 40,
                }}
              >
                I bridge the gap between design and technology through innovative products, educational
                content, and community building. With a background in both disciplines, I help teams and
                individuals unlock their creative potential.
              </p>

              {/* Stats Row */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(3, 1fr)",
                  gap: 24,
                  marginBottom: 40,
                }}
              >
                {[
                  { value: "8+", label: "Years" },
                  { value: "100+", label: "Projects" },
                  { value: "50K+", label: "Followers" },
                ].map((stat, i) => (
                  <div
                    key={i}
                    className="bg-surface"
                    style={{
                      padding: "20px 24px",
                      borderRadius: 12,
                      border: "2px solid var(--color-border)",
                      textAlign: "center",
                    }}
                  >
                    <div
                      className="text-accent"
                      style={{
                        fontSize: 32,
                        fontWeight: 900,
                        marginBottom: 4,
                      }}
                    >
                      {stat.value}
                    </div>
                    <div
                      className="text-muted"
                      style={{
                        fontSize: 13,
                        fontWeight: 600,
                      }}
                    >
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

              <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
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
                  Explore Work
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
                  Schedule Call
                </button>
              </div>
            </div>

            {/* Right Column - Profile Card */}
            <div
              className="bg-gradient-accent"
              style={{
                padding: "60px 48px",
                borderRadius: 32,
                textAlign: "center",
                position: "relative",
              }}
            >
              <div
                style={{
                  width: 160,
                  height: 160,
                  borderRadius: "50%",
                  background: "var(--color-surface)",
                  margin: "0 auto 32px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 80,
                  border: "4px solid rgba(255, 255, 255, 0.3)",
                }}
              >
                👨‍🎨
              </div>

              <div style={{ marginBottom: 32 }}>
                <h3
                  style={{
                    fontSize: 20,
                    fontWeight: 800,
                    marginBottom: 16,
                  }}
                >
                  Currently
                </h3>
                <p
                  style={{
                    fontSize: 16,
                    lineHeight: 1.7,
                    opacity: 0.95,
                  }}
                >
                  Leading design at TechCorp, teaching at Design Academy, and building a community
                  platform for creatives.
                </p>
              </div>

              <div
                style={{
                  paddingTop: 28,
                  borderTop: "2px solid rgba(255, 255, 255, 0.2)",
                }}
              >
                <div
                  style={{
                    fontSize: 14,
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: 1.5,
                    marginBottom: 16,
                    opacity: 0.9,
                  }}
                >
                  Connect With Me
                </div>
                <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
                  {["Twitter", "LinkedIn", "Dribbble", "Medium"].map((social) => (
                    <a
                      key={social}
                      href="#"
                      className="hover-lift"
                      style={{
                        padding: "10px 20px",
                        borderRadius: 8,
                        fontSize: 14,
                        fontWeight: 600,
                        background: "rgba(255, 255, 255, 0.2)",
                        color: "white",
                        textDecoration: "none",
                        backdropFilter: "blur(10px)",
                      }}
                    >
                      {social}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- ACHIEVEMENTS SECTION ---------- */}
      <section
        className="bg-surface-alt fade-up"
        style={{
          padding: "140px 24px",
        }}
      >
        <div style={{ maxWidth: "1300px", margin: "0 auto" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: 60,
              flexWrap: "wrap",
              gap: 32,
            }}
          >
            <div>
              <h2
                className="text-main"
                style={{
                  fontWeight: 800,
                  fontSize: 46,
                  marginBottom: 12,
                }}
              >
                Highlights & Achievements
              </h2>
              <p className="text-muted" style={{ fontSize: 18 }}>
                A collection of milestones and contributions
              </p>
            </div>

            {/* Filter Buttons */}
            <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setFilter(category)}
                  className={filter === category ? "bg-gradient-accent" : "bg-surface"}
                  style={{
                    padding: "12px 24px",
                    borderRadius: 10,
                    fontSize: 14,
                    fontWeight: 700,
                    border: filter === category ? "none" : "2px solid var(--color-border)",
                    cursor: "pointer",
                    color: filter === category ? "var(--color-surface)" : "var(--color-text)",
                    transition: "all 0.3s ease",
                  }}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Achievements Grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: 28,
            }}
          >
            {filteredAchievements.map((achievement, i) => (
              <div
                key={i}
                className="bg-surface hover-lift shadow-accent-hover"
                style={{
                  borderRadius: 20,
                  border: "2px solid var(--color-border)",
                  overflow: "hidden",
                  display: "grid",
                  gridTemplateColumns: "auto 1fr",
                  gap: 28,
                  padding: "32px",
                }}
              >
                {/* Icon */}
                <div
                  className="bg-gradient-secondary"
                  style={{
                    width: 80,
                    height: 80,
                    borderRadius: 16,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 40,
                    flexShrink: 0,
                  }}
                >
                  {achievement.image}
                </div>

                {/* Content */}
                <div>
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
                        padding: "6px 12px",
                        borderRadius: 6,
                        fontSize: 11,
                        fontWeight: 700,
                        textTransform: "uppercase",
                        letterSpacing: 1,
                        color: "var(--color-accent)",
                      }}
                    >
                      {achievement.type}
                    </div>
                    <div
                      className="text-muted"
                      style={{
                        fontSize: 13,
                        fontWeight: 600,
                      }}
                    >
                      {achievement.year}
                    </div>
                  </div>

                  <h3
                    className="text-main"
                    style={{
                      fontWeight: 800,
                      fontSize: 20,
                      marginBottom: 10,
                      lineHeight: 1.3,
                    }}
                  >
                    {achievement.title}
                  </h3>

                  <p
                    className="text-muted"
                    style={{
                      fontSize: 14,
                      lineHeight: 1.7,
                      marginBottom: 16,
                    }}
                  >
                    {achievement.description}
                  </p>

                  <a
                    href="#"
                    className="text-accent"
                    style={{
                      fontSize: 14,
                      fontWeight: 700,
                      textDecoration: "none",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 6,
                    }}
                  >
                    {achievement.link} →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- EXPERTISE ---------- */}
      <section
        className="fade-up"
        style={{
          padding: "140px 24px",
        }}
      >
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 80 }}>
            <h2
              className="text-main"
              style={{
                fontWeight: 800,
                fontSize: 46,
                marginBottom: 20,
              }}
            >
              What I Bring to the Table
            </h2>
            <p className="text-muted" style={{ fontSize: 18 }}>
              Skills and expertise developed over years of practice
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: 32,
            }}
          >
            {[
              {
                icon: "🎨",
                title: "Product Design",
                skills: [
                  "User Research & Testing",
                  "UI/UX Design",
                  "Design Systems",
                  "Prototyping & Animation",
                ],
              },
              {
                icon: "💻",
                title: "Frontend Development",
                skills: [
                  "React & Next.js",
                  "TypeScript",
                  "Responsive Design",
                  "Performance Optimization",
                ],
              },
              {
                icon: "📚",
                title: "Education & Mentoring",
                skills: [
                  "Workshop Facilitation",
                  "Curriculum Development",
                  "Technical Writing",
                  "1-on-1 Coaching",
                ],
              },
              {
                icon: "🚀",
                title: "Strategy & Leadership",
                skills: [
                  "Product Strategy",
                  "Team Management",
                  "Stakeholder Communication",
                  "Process Improvement",
                ],
              },
            ].map((area, i) => (
              <div
                key={i}
                className="bg-surface hover-lift shadow-accent-hover"
                style={{
                  padding: "40px 36px",
                  borderRadius: 20,
                  border: "2px solid var(--color-border)",
                }}
              >
                <div style={{ fontSize: 56, marginBottom: 24 }}>{area.icon}</div>
                <h3
                  className="text-main"
                  style={{
                    fontWeight: 800,
                    fontSize: 26,
                    marginBottom: 24,
                  }}
                >
                  {area.title}
                </h3>
                <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                  {area.skills.map((skill) => (
                    <div
                      key={skill}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 12,
                      }}
                    >
                      <div
                        className="bg-gradient-accent"
                        style={{
                          width: 6,
                          height: 6,
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

      {/* ---------- NEWSLETTER CTA ---------- */}
      <section
        className="bg-gradient-accent fade-up"
        style={{
          padding: "100px 24px",
        }}
      >
        <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
          <div style={{ fontSize: 64, marginBottom: 28 }}>💌</div>
          <h2
            style={{
              fontWeight: 900,
              fontSize: 46,
              marginBottom: 24,
            }}
          >
            Join My Newsletter
          </h2>
          <p
            style={{
              fontSize: 19,
              lineHeight: 1.7,
              marginBottom: 40,
              opacity: 0.95,
            }}
          >
            Get weekly insights on design, development, and creativity. No spam, just valuable content
            delivered to your inbox every Thursday.
          </p>
          <div
            style={{
              display: "flex",
              gap: 12,
              maxWidth: 500,
              margin: "0 auto",
              flexWrap: "wrap",
            }}
          >
            <input
              type="email"
              placeholder="your@email.com"
              style={{
                flex: 1,
                padding: "18px 24px",
                borderRadius: 12,
                fontSize: 16,
                border: "none",
                minWidth: 240,
              }}
            />
            <button
              className="hover-lift"
              style={{
                padding: "18px 40px",
                borderRadius: 12,
                fontSize: 16,
                fontWeight: 700,
                background: "var(--color-surface)",
                color: "var(--color-accent)",
                border: "none",
                cursor: "pointer",
                whiteSpace: "nowrap",
              }}
            >
              Subscribe
            </button>
          </div>
          <p
            style={{
              fontSize: 14,
              marginTop: 16,
              opacity: 0.8,
            }}
          >
            Join 15,000+ subscribers. Unsubscribe anytime.
          </p>
        </div>
      </section>

      {/* ---------- CONTACT ---------- */}
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
            Let's Work Together
          </h2>
          <p
            className="text-muted"
            style={{
              fontSize: 19,
              lineHeight: 1.7,
              marginBottom: 40,
            }}
          >
            Whether you need help with a project, want to collaborate, or just want to chat about
            design and tech, I'd love to hear from you.
          </p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <button
              className="hover-lift"
              style={{
                padding: "20px 48px",
                borderRadius: 12,
                fontSize: 17,
                fontWeight: 700,
                background: "var(--color-accent)",
                color: "var(--color-surface)",
                border: "none",
                cursor: "pointer",
              }}
            >
              Send Email
            </button>
            <button
              className="hover-lift"
              style={{
                padding: "20px 48px",
                borderRadius: 12,
                fontSize: 17,
                fontWeight: 700,
                background: "transparent",
                color: "var(--color-text)",
                border: "2px solid var(--color-border)",
                cursor: "pointer",
              }}
            >
              Book Meeting
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
            font-size: 44px !important;
          }
          h2 {
            font-size: 32px !important;
          }
          h3 {
            font-size: 20px !important;
          }
          div[style*="gridTemplateColumns: 1.2fr 1fr"],
          div[style*="gridTemplateColumns: repeat(3, 1fr)"],
          div[style*="gridTemplateColumns: repeat(2, 1fr)"],
          div[style*="gridTemplateColumns: auto 1fr"] {
            grid-template-columns: 1fr !important;
            gap: 24px !important;
          }
          div[style*="padding: 60px 48px"],
          div[style*="padding: 40px 36px"],
          div[style*="padding: 32px"] {
            padding: 28px 24px !important;
          }
          div[style*="width: 160"],
          div[style*="height: 160"] {
            width: 120px !important;
            height: 120px !important;
            font-size: 60px !important;
          }
          div[style*="width: 80"],
          div[style*="height: 80"] {
            width: 64px !important;
            height: 64px !important;
            font-size: 32px !important;
          }
          div[style*="display: flex"][style*="maxWidth: 500"] {
            flex-direction: column !important;
          }
          input[style*="flex: 1"] {
            width: 100% !important;
          }
        }
      `}</style>
    </div>
  );
}
