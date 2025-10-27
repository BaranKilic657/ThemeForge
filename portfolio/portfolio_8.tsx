"use client";

import { useState } from "react";

export default function Portfolio8() {
  const [activeTab, setActiveTab] = useState("Work");

  const workItems = [
    {
      title: "Minimalist Blog Theme",
      category: "Web Design",
      description: "Clean, typography-focused WordPress theme for writers and bloggers.",
      image: "📝",
      stats: { downloads: "5K+", rating: "4.8" },
    },
    {
      title: "Icon Pack Collection",
      category: "Design Assets",
      description: "600+ minimalist icons for web and mobile applications.",
      image: "🎨",
      stats: { downloads: "12K+", rating: "4.9" },
    },
    {
      title: "Task Management App",
      category: "Mobile App",
      description: "Simple and beautiful productivity app for iOS and Android.",
      image: "✅",
      stats: { downloads: "25K+", rating: "4.7" },
    },
    {
      title: "Photography Portfolio",
      category: "Web Development",
      description: "Responsive portfolio template for photographers and creatives.",
      image: "📷",
      stats: { downloads: "8K+", rating: "4.8" },
    },
    {
      title: "UI Component Library",
      category: "Development",
      description: "React component library with 100+ customizable components.",
      image: "🧩",
      stats: { downloads: "15K+", rating: "4.9" },
    },
    {
      title: "Meditation App Concept",
      category: "UI/UX Design",
      description: "Calming interface design for mindfulness and meditation.",
      image: "🧘‍♀️",
      stats: { downloads: "3K+", rating: "4.6" },
    },
  ];

  const aboutContent = {
    intro:
      "Hi! I'm Casey Morgan, a multidisciplinary designer and developer with a passion for creating elegant, user-friendly digital experiences.",
    journey:
      "My journey started 7 years ago when I built my first website. Since then, I've worked with startups, agencies, and individual clients to bring their ideas to life.",
    approach:
      "I believe in the power of simplicity and attention to detail. Every project is an opportunity to solve problems creatively and make people's lives a little bit easier.",
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        paddingTop: 80,
      }}
    >
      {/* ---------- CREATIVE HERO ---------- */}
      <section
        className="bg-gradient-accent"
        style={{
          padding: "100px 24px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div style={{ maxWidth: "1100px", margin: "0 auto", position: "relative", zIndex: 1 }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 60,
              alignItems: "center",
            }}
          >
            <div>
              <div
                style={{
                  fontSize: 14,
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: 2,
                  marginBottom: 20,
                  opacity: 0.9,
                }}
              >
                Designer × Developer
              </div>
              <h1
                style={{
                  fontWeight: 900,
                  fontSize: "clamp(44px, 7vw, 72px)",
                  lineHeight: 1.1,
                  marginBottom: 28,
                }}
              >
                Casey Morgan
              </h1>
              <p
                style={{
                  fontSize: 20,
                  lineHeight: 1.7,
                  marginBottom: 36,
                  opacity: 0.95,
                }}
              >
                Crafting delightful digital products with a focus on aesthetics, usability, and
                performance.
              </p>

              {/* Navigation Tabs */}
              <div
                className="bg-surface"
                style={{
                  display: "inline-flex",
                  gap: 8,
                  padding: 6,
                  borderRadius: 12,
                }}
              >
                {["Work", "About", "Contact"].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={activeTab === tab ? "bg-gradient-accent" : ""}
                    style={{
                      padding: "12px 28px",
                      borderRadius: 8,
                      border: "none",
                      fontSize: 15,
                      fontWeight: 700,
                      cursor: "pointer",
                      color:
                        activeTab === tab
                          ? "var(--color-surface)"
                          : "var(--color-text)",
                      transition: "all 0.3s ease",
                    }}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>

            {/* Profile Card */}
            <div
              className="bg-surface"
              style={{
                padding: "48px 40px",
                borderRadius: 24,
                textAlign: "center",
              }}
            >
              <div
                className="bg-gradient-secondary"
                style={{
                  width: 140,
                  height: 140,
                  borderRadius: "50%",
                  margin: "0 auto 28px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 64,
                }}
              >
                👩‍💻
              </div>
              <h3
                className="text-main"
                style={{
                  fontSize: 24,
                  fontWeight: 800,
                  marginBottom: 12,
                }}
              >
                Based in Portland, OR
              </h3>
              <p
                className="text-muted"
                style={{
                  fontSize: 15,
                  lineHeight: 1.7,
                  marginBottom: 28,
                }}
              >
                Open for freelance projects and collaborations
              </p>
              <div
                style={{
                  display: "flex",
                  gap: 12,
                  justifyContent: "center",
                  flexWrap: "wrap",
                }}
              >
                {["✉️ Email", "💼 LinkedIn", "🐙 GitHub"].map((link) => (
                  <a
                    key={link}
                    href="#"
                    className="hover-lift"
                    style={{
                      padding: "10px 20px",
                      borderRadius: 8,
                      fontSize: 14,
                      fontWeight: 600,
                      background: "var(--color-surface-alt)",
                      color: "var(--color-text)",
                      textDecoration: "none",
                      display: "inline-block",
                    }}
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div
          style={{
            position: "absolute",
            top: "-10%",
            right: "-5%",
            width: 400,
            height: 400,
            borderRadius: "50%",
            background: "rgba(255, 255, 255, 0.1)",
            filter: "blur(80px)",
          }}
        />
      </section>

      {/* ---------- TAB CONTENT ---------- */}
      {activeTab === "Work" && (
        <section
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
                Featured Projects
              </h2>
              <p className="text-muted" style={{ fontSize: 19 }}>
                A selection of my recent work
              </p>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: 32,
              }}
            >
              {workItems.map((item, i) => (
                <div
                  key={i}
                  className="bg-surface hover-lift shadow-accent-hover"
                  style={{
                    borderRadius: 24,
                    border: "2px solid var(--color-border)",
                    overflow: "hidden",
                  }}
                >
                  {/* Image */}
                  <div
                    className="bg-gradient-secondary"
                    style={{
                      height: 220,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 72,
                    }}
                  >
                    {item.image}
                  </div>

                  {/* Content */}
                  <div style={{ padding: "28px 24px" }}>
                    <div
                      className="text-accent"
                      style={{
                        fontSize: 12,
                        fontWeight: 700,
                        textTransform: "uppercase",
                        letterSpacing: 1.5,
                        marginBottom: 12,
                      }}
                    >
                      {item.category}
                    </div>
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
                    <p
                      className="text-muted"
                      style={{
                        fontSize: 14,
                        lineHeight: 1.7,
                        marginBottom: 24,
                      }}
                    >
                      {item.description}
                    </p>

                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        paddingTop: 20,
                        borderTop: "1px solid var(--color-border)",
                      }}
                    >
                      <div>
                        <div
                          className="text-accent"
                          style={{
                            fontSize: 18,
                            fontWeight: 800,
                          }}
                        >
                          {item.stats.downloads}
                        </div>
                        <div
                          className="text-muted"
                          style={{
                            fontSize: 11,
                            fontWeight: 600,
                          }}
                        >
                          Downloads
                        </div>
                      </div>
                      <div>
                        <div
                          className="text-accent"
                          style={{
                            fontSize: 18,
                            fontWeight: 800,
                          }}
                        >
                          {item.stats.rating}⭐
                        </div>
                        <div
                          className="text-muted"
                          style={{
                            fontSize: 11,
                            fontWeight: 600,
                          }}
                        >
                          Rating
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {activeTab === "About" && (
        <section
          className="fade-up"
          style={{
            padding: "140px 24px",
          }}
        >
          <div style={{ maxWidth: "900px", margin: "0 auto" }}>
            <h2
              className="text-main"
              style={{
                fontWeight: 800,
                fontSize: 46,
                marginBottom: 60,
                textAlign: "center",
              }}
            >
              About Me
            </h2>

            <div style={{ display: "flex", flexDirection: "column", gap: 48 }}>
              {[
                { title: "Introduction", content: aboutContent.intro },
                { title: "My Journey", content: aboutContent.journey },
                { title: "Approach", content: aboutContent.approach },
              ].map((section, i) => (
                <div
                  key={i}
                  className="bg-surface"
                  style={{
                    padding: "40px 44px",
                    borderRadius: 20,
                    border: "2px solid var(--color-border)",
                  }}
                >
                  <h3
                    className="text-accent"
                    style={{
                      fontSize: 16,
                      fontWeight: 700,
                      textTransform: "uppercase",
                      letterSpacing: 2,
                      marginBottom: 20,
                    }}
                  >
                    {section.title}
                  </h3>
                  <p
                    className="text-main"
                    style={{
                      fontSize: 20,
                      lineHeight: 1.8,
                    }}
                  >
                    {section.content}
                  </p>
                </div>
              ))}
            </div>

            {/* Skills Grid */}
            <div style={{ marginTop: 80 }}>
              <h3
                className="text-main"
                style={{
                  fontSize: 32,
                  fontWeight: 800,
                  marginBottom: 40,
                  textAlign: "center",
                }}
              >
                Core Skills
              </h3>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(2, 1fr)",
                  gap: 24,
                }}
              >
                {[
                  {
                    skill: "UI/UX Design",
                    tools: "Figma, Adobe Creative Suite, Sketch",
                  },
                  {
                    skill: "Frontend Development",
                    tools: "React, Next.js, TypeScript, Tailwind",
                  },
                  {
                    skill: "Mobile Development",
                    tools: "React Native, Flutter, Swift",
                  },
                  {
                    skill: "Prototyping & Animation",
                    tools: "Framer, Principle, After Effects",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="bg-surface-alt"
                    style={{
                      padding: "28px 32px",
                      borderRadius: 16,
                    }}
                  >
                    <div
                      className="text-main"
                      style={{
                        fontSize: 18,
                        fontWeight: 800,
                        marginBottom: 8,
                      }}
                    >
                      {item.skill}
                    </div>
                    <div
                      className="text-muted"
                      style={{
                        fontSize: 14,
                      }}
                    >
                      {item.tools}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {activeTab === "Contact" && (
        <section
          className="fade-up"
          style={{
            padding: "140px 24px",
          }}
        >
          <div style={{ maxWidth: "700px", margin: "0 auto", textAlign: "center" }}>
            <div style={{ fontSize: 80, marginBottom: 32 }}>📬</div>
            <h2
              className="text-main"
              style={{
                fontWeight: 800,
                fontSize: 46,
                marginBottom: 24,
              }}
            >
              Let's Connect
            </h2>
            <p
              className="text-muted"
              style={{
                fontSize: 19,
                lineHeight: 1.7,
                marginBottom: 60,
              }}
            >
              I'm always excited to collaborate on interesting projects or just chat about design and
              tech. Drop me a line!
            </p>

            {/* Contact Options */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(2, 1fr)",
                gap: 24,
                marginBottom: 48,
              }}
            >
              {[
                { icon: "✉️", label: "Email", value: "casey@example.com" },
                { icon: "💼", label: "LinkedIn", value: "/in/caseymorgan" },
                { icon: "🐙", label: "GitHub", value: "@caseymorgan" },
                { icon: "🐦", label: "Twitter", value: "@caseymorgan" },
              ].map((contact, i) => (
                <div
                  key={i}
                  className="bg-surface hover-lift shadow-accent-hover"
                  style={{
                    padding: "32px 28px",
                    borderRadius: 16,
                    border: "2px solid var(--color-border)",
                    cursor: "pointer",
                  }}
                >
                  <div style={{ fontSize: 40, marginBottom: 16 }}>{contact.icon}</div>
                  <div
                    className="text-muted"
                    style={{
                      fontSize: 13,
                      fontWeight: 600,
                      marginBottom: 8,
                    }}
                  >
                    {contact.label}
                  </div>
                  <div
                    className="text-accent"
                    style={{
                      fontSize: 16,
                      fontWeight: 700,
                    }}
                  >
                    {contact.value}
                  </div>
                </div>
              ))}
            </div>

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
              Send Message
            </button>
          </div>
        </section>
      )}

      {/* ---------- FOOTER ---------- */}
      <section
        className="bg-surface-alt"
        style={{
          padding: "60px 24px",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: "600px", margin: "0 auto" }}>
          <p
            className="text-muted"
            style={{
              fontSize: 15,
              marginBottom: 20,
            }}
          >
            © 2024 Casey Morgan. All rights reserved.
          </p>
          <div style={{ display: "flex", gap: 24, justifyContent: "center", flexWrap: "wrap" }}>
            {["Privacy Policy", "Terms of Service", "RSS Feed"].map((link) => (
              <a
                key={link}
                href="#"
                className="text-muted"
                style={{
                  fontSize: 14,
                  fontWeight: 600,
                  textDecoration: "none",
                }}
              >
                {link}
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
            font-size: 36px !important;
          }
          h2 {
            font-size: 28px !important;
          }
          h3 {
            font-size: 20px !important;
          }
          div[style*="gridTemplateColumns: 1fr 1fr"],
          div[style*="gridTemplateColumns: repeat(2, 1fr)"],
          div[style*="gridTemplateColumns: repeat(3, 1fr)"] {
            grid-template-columns: 1fr !important;
            gap: 24px !important;
          }
          div[style*="padding: 48px 40px"],
          div[style*="padding: 40px 44px"],
          div[style*="padding: 32px 28px"],
          div[style*="padding: 28px 32px"],
          div[style*="padding: 28px 24px"] {
            padding: 28px 24px !important;
          }
          div[style*="width: 140"],
          div[style*="height: 140"] {
            width: 100px !important;
            height: 100px !important;
            font-size: 48px !important;
          }
          div[style*="position: absolute"][style*="width: 400"] {
            display: none !important;
          }
        }
      `}</style>
    </div>
  );
}
