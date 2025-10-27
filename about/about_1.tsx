"use client";
import React, { useState } from "react";

export default function About() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <main className="fade-in" style={{ overflow: "hidden" }}>
      <style>{`
        @media (max-width: 768px) {
          section { padding: 60px 20px !important; }
          h1 { font-size: 2.5rem !important; }
          h2 { font-size: 28px !important; }
          .split-layout { grid-template-columns: 1fr !important; gap: 40px !important; }
          .card-grid { grid-template-columns: 1fr !important; }
          .circle-avatars { flex-wrap: wrap !important; justify-content: center !important; }
        }
      `}</style>

      {/* ---------------- SPLIT HERO ---------------- */}
      <section
        className="bg-surface"
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          padding: "100px 24px",
        }}
      >
        <div style={{ maxWidth: 1300, margin: "0 auto", width: "100%" }}>
          <div
            className="split-layout"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 80,
              alignItems: "center",
            }}
          >
            <div>
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
                About Studio
              </div>
              <h1
                className="text-main text-highlight"
                style={{ fontWeight: 900, fontSize: "4rem", lineHeight: 1.05, marginBottom: 24 }}
              >
                We design with intention, build with vision.
              </h1>
              <p className="text-muted" style={{ lineHeight: 1.8, fontSize: 18, marginBottom: 40 }}>
                From bold startups to established leaders, we help brands express who they are —
                through strategy, craft, and clarity.
              </p>
              <button
                className="btn-gradient hover-lift"
                style={{
                  borderRadius: 10,
                  padding: "16px 32px",
                  fontWeight: 700,
                }}
              >
                Our Approach
              </button>
            </div>

            {/* Circular Team Avatars */}
            <div
              className="circle-avatars"
              style={{
                display: "flex",
                gap: 20,
                position: "relative",
                justifyContent: "flex-end",
              }}
            >
              {[
                { name: "Alex", color: "var(--color-accent)", top: 0, left: 0 },
                { name: "Mira", color: "var(--color-secondary)", top: 60, left: -40 },
                { name: "Noah", color: "var(--color-accent-hover)", top: 120, left: -80 },
                { name: "Rin", color: "var(--color-accent)", top: 180, left: -120 },
              ].map((person, i) => (
                <div
                  key={i}
                  className="hover-lift"
                  style={{
                    position: "relative",
                    marginTop: person.top,
                    marginLeft: person.left,
                  }}
                >
                  <div
                    style={{
                      width: 120,
                      height: 120,
                      borderRadius: "50%",
                      background: person.color,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "var(--color-surface)",
                      fontWeight: 800,
                      fontSize: 24,
                      border: "4px solid var(--color-surface)",
                      cursor: "pointer",
                      transition: "all 0.3s ease",
                    }}
                    onMouseEnter={() => setHoveredIndex(i)}
                    onMouseLeave={() => setHoveredIndex(null)}
                  >
                    {person.name}
                  </div>
                  {hoveredIndex === i && (
                    <div
                      className="text-main"
                      style={{
                        position: "absolute",
                        top: "100%",
                        left: "50%",
                        transform: "translateX(-50%)",
                        marginTop: 12,
                        fontSize: 14,
                        fontWeight: 600,
                        whiteSpace: "nowrap",
                      }}
                    >
                      Team Member
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- MISSION / STORY ---------------- */}
      <section
        className="bg-surface-alt fade-up"
        style={{
          padding: "160px 24px",
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2
            className="text-main"
            style={{
              fontWeight: 800,
              fontSize: 36,
              marginBottom: 100,
              textAlign: "center",
            }}
          >
            What Drives Us
          </h2>

          <div
            className="card-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: 60,
            }}
          >
            {[
              {
                icon: "🎯",
                title: "Our Mission",
                desc: "We believe digital design has the power to shape human emotion. Every detail — motion, color, type, rhythm — matters.",
              },
              {
                icon: "✨",
                title: "Our Vision",
                desc: "To create experiences that connect people through beauty, empathy, and simplicity. Making interfaces that feel natural and timeless.",
              },
              {
                icon: "💡",
                title: "Our Process",
                desc: "We listen before we design. We iterate before we finalize. We test with real people and refine with purpose.",
              },
              {
                icon: "🚀",
                title: "Our Impact",
                desc: "From startups to enterprises, we've helped shape digital products that reach millions and create lasting impressions.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-surface hover-lift shadow-accent-hover"
                style={{
                  borderRadius: 20,
                  padding: "48px 40px",
                  border: "2px solid var(--color-border)",
                  transition: "all 0.3s ease",
                }}
              >
                <div style={{ fontSize: 48, marginBottom: 20 }}>{item.icon}</div>
                <h3
                  className="text-main"
                  style={{
                    fontWeight: 800,
                    fontSize: 24,
                    marginBottom: 12,
                  }}
                >
                  {item.title}
                </h3>
                <p className="text-muted" style={{ lineHeight: 1.7, fontSize: 16 }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>      {/* ---------------- VALUES GRID ---------------- */}
      <section
        className="bg-surface fade-up"
        style={{
          padding: "160px 24px",
        }}
      >
        <div style={{ maxWidth: "1100px", margin: "0 auto", textAlign: "center" }}>
          <h2 className="text-main" style={{ fontWeight: 800, fontSize: 36, marginBottom: 16 }}>
            Core Values
          </h2>
          <p className="text-muted" style={{ marginBottom: 80, fontSize: 17 }}>
            What drives us every day — design principles rooted in people, process, and purpose.
          </p>

          <div
            className="card-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 40,
            }}
          >
            {[
              {
                num: "01",
                title: "Empathy First",
                desc: "Design begins by understanding the people who will experience it.",
              },
              {
                num: "02",
                title: "Evolve Constantly",
                desc: "We learn, adapt, and grow — because innovation never stands still.",
              },
              {
                num: "03",
                title: "Clarity Over Complexity",
                desc: "Simplicity creates strength. We strip away noise to reveal essence.",
              },
            ].map((val) => (
              <div
                key={val.num}
                className="bg-surface-alt hover-lift shadow-accent-hover"
                style={{
                  padding: "40px 32px",
                  borderRadius: 16,
                  textAlign: "center",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <div
                  className="text-accent"
                  style={{
                    fontSize: 80,
                    fontWeight: 900,
                    opacity: 0.08,
                    position: "absolute",
                    top: -10,
                    right: 20,
                  }}
                >
                  {val.num}
                </div>
                <h3
                  className="text-main"
                  style={{
                    fontWeight: 800,
                    fontSize: 22,
                    marginBottom: 12,
                    position: "relative",
                    zIndex: 1,
                  }}
                >
                  {val.title}
                </h3>
                <p
                  className="text-muted"
                  style={{
                    lineHeight: 1.7,
                    fontSize: 15,
                    position: "relative",
                    zIndex: 1,
                  }}
                >
                  {val.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- TIMELINE / MILESTONES ---------------- */}
      <section
        className="bg-surface-alt fade-up"
        style={{
          padding: "160px 24px",
        }}
      >
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <h2
            className="text-main"
            style={{
              fontWeight: 800,
              fontSize: 36,
              textAlign: "center",
              marginBottom: 80,
            }}
          >
            Our Journey
          </h2>

          <div style={{ position: "relative" }}>
            {/* Central vertical line */}
            <div
              style={{
                position: "absolute",
                left: "50%",
                top: 0,
                bottom: 0,
                width: 3,
                background: "var(--color-border)",
                transform: "translateX(-50%)",
              }}
            />

            <div style={{ display: "flex", flexDirection: "column", gap: 80 }}>
              {[
                {
                  year: "2018",
                  title: "Founded with a mission",
                  desc: "Two designers and one developer joined forces to create a studio dedicated to emotional digital design.",
                  side: "left",
                },
                {
                  year: "2020",
                  title: "Grew into a team of creators",
                  desc: "Our vision expanded — adding strategists, writers, and motion artists who share our passion for clarity and depth.",
                  side: "right",
                },
                {
                  year: "2023",
                  title: "Recognized for innovation",
                  desc: "Our projects have been featured in global design awards, showcasing our pursuit of purpose-driven creativity.",
                  side: "left",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: 60,
                    position: "relative",
                  }}
                >
                  {/* Dot on timeline */}
                  <div
                    className="bg-accent"
                    style={{
                      position: "absolute",
                      left: "50%",
                      top: 20,
                      width: 16,
                      height: 16,
                      borderRadius: "50%",
                      border: "4px solid var(--color-surface-alt)",
                      transform: "translateX(-50%)",
                      zIndex: 2,
                    }}
                  />

                  {item.side === "left" ? (
                    <>
                      <div
                        className="bg-surface hover-lift shadow-accent-hover"
                        style={{
                          padding: "32px 28px",
                          borderRadius: 16,
                          textAlign: "right",
                        }}
                      >
                        <h4
                          className="text-accent"
                          style={{
                            fontWeight: 700,
                            marginBottom: 8,
                            fontSize: 18,
                          }}
                        >
                          {item.year}
                        </h4>
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
                        <p className="text-muted" style={{ fontSize: 15, lineHeight: 1.6 }}>
                          {item.desc}
                        </p>
                      </div>
                      <div />
                    </>
                  ) : (
                    <>
                      <div />
                      <div
                        className="bg-surface hover-lift shadow-accent-hover"
                        style={{
                          padding: "32px 28px",
                          borderRadius: 16,
                          textAlign: "left",
                        }}
                      >
                        <h4
                          className="text-accent"
                          style={{
                            fontWeight: 700,
                            marginBottom: 8,
                            fontSize: 18,
                          }}
                        >
                          {item.year}
                        </h4>
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
                        <p className="text-muted" style={{ fontSize: 15, lineHeight: 1.6 }}>
                          {item.desc}
                        </p>
                      </div>
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- TEAM SHOWCASE ---------------- */}
      <section
        className="bg-surface fade-up"
        style={{
          padding: "160px 24px",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <h2 className="text-main" style={{ fontWeight: 800, fontSize: 36, marginBottom: 16 }}>
            Meet Our Team
          </h2>
          <p className="text-muted" style={{ marginBottom: 80, fontSize: 17 }}>
            Designers, engineers, and dreamers — united by curiosity and craft.
          </p>

          <div
            className="card-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: 40,
              justifyItems: "center",
            }}
          >
            {[
              { name: "Alex", role: "Creative Director", color: "var(--color-accent)" },
              { name: "Mira", role: "Lead Designer", color: "var(--color-secondary)" },
              { name: "Noah", role: "Engineering Lead", color: "var(--color-accent-hover)" },
              { name: "Rin", role: "UX Strategist", color: "var(--color-accent)" },
            ].map((person) => (
              <div
                key={person.name}
                className="bg-surface-alt hover-lift shadow-accent-hover"
                style={{
                  borderRadius: 16,
                  padding: 32,
                  width: "100%",
                  maxWidth: 260,
                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    width: 100,
                    height: 100,
                    borderRadius: "50%",
                    background: person.color,
                    margin: "0 auto 20px",
                  }}
                />
                <h4 className="text-main" style={{ fontWeight: 700, fontSize: 18, marginBottom: 6 }}>
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

      {/* ---------------- CONTACT CARDS CTA ---------------- */}
      <section
        className="bg-surface fade-up"
        style={{
          padding: "140px 24px",
        }}
      >
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <h2
            className="text-main"
            style={{
              fontWeight: 900,
              fontSize: 36,
              marginBottom: 80,
              textAlign: "center",
            }}
          >
            Ready to Start?
          </h2>

          <div
            className="card-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: 40,
            }}
          >
            <div
              className="bg-gradient-accent hover-lift shadow-accent-hover"
              style={{
                borderRadius: 20,
                padding: "60px 48px",
                color: "var(--color-surface)",
                cursor: "pointer",
              }}
            >
              <div style={{ fontSize: 48, marginBottom: 20 }}>💼</div>
              <h3 style={{ fontWeight: 800, fontSize: 26, marginBottom: 12 }}>
                New Project
              </h3>
              <p style={{ opacity: 0.95, lineHeight: 1.7, marginBottom: 28 }}>
                Let's discuss your vision and create something remarkable together.
              </p>
              <div
                style={{
                  display: "inline-block",
                  padding: "12px 28px",
                  background: "rgba(255,255,255,0.2)",
                  borderRadius: 8,
                  fontWeight: 700,
                }}
              >
                Get in Touch →
              </div>
            </div>

            <div
              className="bg-gradient-secondary hover-lift shadow-accent-hover"
              style={{
                borderRadius: 20,
                padding: "60px 48px",
                color: "var(--color-surface)",
                cursor: "pointer",
              }}
            >
              <div style={{ fontSize: 48, marginBottom: 20 }}>👋</div>
              <h3 style={{ fontWeight: 800, fontSize: 26, marginBottom: 12 }}>
                Just Say Hi
              </h3>
              <p style={{ opacity: 0.95, lineHeight: 1.7, marginBottom: 28 }}>
                Have questions? Want to chat? We're always open to new connections.
              </p>
              <div
                style={{
                  display: "inline-block",
                  padding: "12px 28px",
                  background: "rgba(255,255,255,0.2)",
                  borderRadius: 8,
                  fontWeight: 700,
                }}
              >
                Say Hello →
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
