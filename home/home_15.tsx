"use client";
import React, { useState, useEffect } from "react";

export default function Home() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalScroll) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="fade-in" style={{ overflow: "hidden", position: "relative" }}>
      <style>{`
        @media (max-width: 768px) {
          section { padding: 60px 20px !important; }
          h1 { font-size: 2.5rem !important; }
          h2 { font-size: 24px !important; }
          .hero-split { grid-template-columns: 1fr !important; gap: 40px !important; }
          .feature-grid { grid-template-columns: 1fr !important; }
          .circle-progress { width: 120px !important; height: 120px !important; }
        }
      `}</style>

      {/* Scroll Progress Indicator */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: `${scrollProgress}%`,
          height: 4,
          background: "linear-gradient(90deg, var(--color-accent), var(--color-secondary))",
          zIndex: 9999,
          transition: "width 0.1s ease",
        }}
      />

      {/* ---------------- CIRCULAR PROGRESS HERO ---------------- */}
      <section
        className="bg-surface"
        style={{
          minHeight: "100vh",
          padding: "120px 24px",
          position: "relative",
        }}
      >
        <div style={{ maxWidth: 1300, margin: "0 auto" }}>
          <div
            className="hero-split"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 100,
              alignItems: "center",
            }}
          >
            <div>
              <h1
                className="text-main text-highlight"
                style={{
                  fontSize: "4.5rem",
                  fontWeight: 900,
                  lineHeight: 1.05,
                  marginBottom: 28,
                  letterSpacing: "-0.04em",
                }}
              >
                Progress
                <br />
                <span className="text-accent">Through Motion</span>
              </h1>
              <p
                className="text-muted"
                style={{
                  fontSize: 19,
                  lineHeight: 1.8,
                  marginBottom: 44,
                  maxWidth: 520,
                }}
              >
                Track your journey with dynamic indicators, circular progress meters, and scroll-responsive animations that bring data to life.
              </p>
              <button
                className="btn-gradient hover-lift"
                style={{
                  borderRadius: 10,
                  padding: "16px 32px",
                  fontWeight: 700,
                }}
              >
                Begin Journey
              </button>
            </div>

            {/* Circular Progress Meters */}
            <div
              style={{
                display: "flex",
                gap: 40,
                justifyContent: "center",
                flexWrap: "wrap",
              }}
            >
              {[
                { label: "Design", value: 85, color: "var(--color-accent)" },
                { label: "Development", value: 72, color: "var(--color-secondary)" },
                { label: "Strategy", value: 93, color: "var(--color-accent-hover)" },
              ].map((item) => {
                const circumference = 2 * Math.PI * 70;
                const offset = circumference - (item.value / 100) * circumference;

                return (
                  <div
                    key={item.label}
                    className="circle-progress"
                    style={{
                      position: "relative",
                      width: 160,
                      height: 160,
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <svg
                      width="160"
                      height="160"
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        transform: "rotate(-90deg)",
                      }}
                    >
                      <circle
                        cx="80"
                        cy="80"
                        r="70"
                        stroke="var(--color-border)"
                        strokeWidth="12"
                        fill="none"
                      />
                      <circle
                        cx="80"
                        cy="80"
                        r="70"
                        stroke={item.color}
                        strokeWidth="12"
                        fill="none"
                        strokeDasharray={circumference}
                        strokeDashoffset={offset}
                        strokeLinecap="round"
                        style={{
                          transition: "stroke-dashoffset 1s ease",
                        }}
                      />
                    </svg>
                    <div
                      className="text-main"
                      style={{
                        fontWeight: 900,
                        fontSize: 28,
                        zIndex: 1,
                      }}
                    >
                      {item.value}%
                    </div>
                    <div
                      className="text-muted"
                      style={{
                        fontSize: 13,
                        fontWeight: 600,
                        textTransform: "uppercase",
                        letterSpacing: 1,
                        marginTop: 4,
                      }}
                    >
                      {item.label}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- PROGRESS BARS SECTION ---------------- */}
      <section className="bg-surface-alt fade-up" style={{ padding: "180px 24px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <h2
            className="text-main"
            style={{
              fontWeight: 800,
              fontSize: 38,
              marginBottom: 20,
              textAlign: "center",
            }}
          >
            Our Expertise
          </h2>
          <p
            className="text-muted"
            style={{
              textAlign: "center",
              fontSize: 17,
              marginBottom: 80,
            }}
          >
            Measurable skills that drive exceptional results
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: 36 }}>
            {[
              { skill: "User Experience Design", level: 95 },
              { skill: "Brand Strategy", level: 88 },
              { skill: "Frontend Development", level: 92 },
              { skill: "Motion & Animation", level: 85 },
              { skill: "Product Management", level: 78 },
            ].map((item, i) => (
              <div key={i}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginBottom: 12,
                  }}
                >
                  <span
                    className="text-main"
                    style={{
                      fontWeight: 700,
                      fontSize: 16,
                    }}
                  >
                    {item.skill}
                  </span>
                  <span
                    className="text-accent"
                    style={{
                      fontWeight: 800,
                      fontSize: 16,
                    }}
                  >
                    {item.level}%
                  </span>
                </div>
                <div
                  style={{
                    width: "100%",
                    height: 10,
                    background: "var(--color-border)",
                    borderRadius: 10,
                    overflow: "hidden",
                  }}
                >
                  <div
                    style={{
                      width: `${item.level}%`,
                      height: "100%",
                      background: "linear-gradient(90deg, var(--color-accent), var(--color-secondary))",
                      borderRadius: 10,
                      transition: "width 1.5s cubic-bezier(0.34, 1.56, 0.64, 1)",
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- MILESTONE TIMELINE ---------------- */}
      <section className="bg-surface fade-up" style={{ padding: "180px 24px" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <h2
            className="text-main"
            style={{
              fontWeight: 800,
              fontSize: 36,
              marginBottom: 80,
              textAlign: "center",
            }}
          >
            Our Journey
          </h2>

          <div style={{ position: "relative" }}>
            {/* Timeline Line */}
            <div
              style={{
                position: "absolute",
                left: 30,
                top: 0,
                width: 4,
                height: "100%",
                background: "var(--color-border)",
              }}
            />
            <div
              style={{
                position: "absolute",
                left: 30,
                top: 0,
                width: 4,
                height: `${scrollProgress}%`,
                background: "linear-gradient(180deg, var(--color-accent), var(--color-secondary))",
                transition: "height 0.2s ease",
              }}
            />

            {/* Milestones */}
            <div style={{ display: "flex", flexDirection: "column", gap: 60 }}>
              {[
                { year: "2020", title: "Founded", desc: "Started with a vision to transform digital experiences" },
                { year: "2021", title: "First Major Client", desc: "Partnered with Fortune 500 company for complete rebrand" },
                { year: "2022", title: "Team Expansion", desc: "Grew to 25+ talented designers and developers" },
                { year: "2023", title: "Award Recognition", desc: "Won 5 international design awards" },
                { year: "2024", title: "Global Reach", desc: "Serving clients across 30+ countries" },
              ].map((milestone, i) => (
                <div
                  key={i}
                  style={{
                    position: "relative",
                    paddingLeft: 80,
                  }}
                >
                  <div
                    className="bg-accent"
                    style={{
                      position: "absolute",
                      left: 22,
                      top: 0,
                      width: 20,
                      height: 20,
                      borderRadius: "50%",
                      border: "4px solid var(--color-surface)",
                    }}
                  />
                  <div
                    className="bg-surface-alt shadow-accent-hover hover-lift"
                    style={{
                      padding: "28px 32px",
                      borderRadius: 16,
                    }}
                  >
                    <div
                      className="text-accent"
                      style={{
                        fontSize: 14,
                        fontWeight: 800,
                        textTransform: "uppercase",
                        letterSpacing: 1.5,
                        marginBottom: 8,
                      }}
                    >
                      {milestone.year}
                    </div>
                    <h3
                      className="text-main"
                      style={{
                        fontWeight: 800,
                        fontSize: 22,
                        marginBottom: 8,
                      }}
                    >
                      {milestone.title}
                    </h3>
                    <p className="text-muted" style={{ lineHeight: 1.7 }}>
                      {milestone.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- CTA ---------------- */}
      <section
        className="bg-gradient-accent fade-up"
        style={{
          padding: "140px 24px",
          textAlign: "center",
          color: "var(--color-surface)",
        }}
      >
        <div style={{ maxWidth: 700, margin: "0 auto" }}>
          <h2
            style={{
              fontWeight: 900,
              fontSize: 42,
              marginBottom: 20,
              lineHeight: 1.2,
            }}
          >
            Track Your Progress
          </h2>
          <p style={{ fontSize: 18, lineHeight: 1.7, marginBottom: 36, opacity: 0.95 }}>
            Let's measure success together.
          </p>
          <button
            className="accent hover-lift"
            style={{
              borderRadius: 10,
              padding: "16px 36px",
              fontWeight: 700,
            }}
          >
            Start Tracking
          </button>
        </div>
      </section>
    </main>
  );
}
