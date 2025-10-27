import React from "react";

export default function Home() {
  return (
    <main className="fade-in" style={{ overflow: "hidden" }}>
      {/* ---------------- FULL-WIDTH HERO WITH INLINE IMAGE ---------------- */}
      <section
        className="bg-surface"
        style={{
          padding: "140px 60px",
        }}
      >
        <div style={{ maxWidth: 1400, margin: "0 auto" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 0.9fr",
              gap: 80,
              alignItems: "center",
            }}
          >
            <div>
              <div
                className="text-accent"
                style={{
                  fontSize: 13,
                  fontWeight: 700,
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                  marginBottom: 20,
                }}
              >
                Digital Craftsmanship
              </div>
              <h1
                className="text-main text-highlight"
                style={{
                  fontSize: "4.2rem",
                  fontWeight: 900,
                  lineHeight: 1.05,
                  marginBottom: 28,
                  letterSpacing: "-2px",
                }}
              >
                Simplicity is the Ultimate Form
              </h1>
              <p
                className="text-muted"
                style={{
                  fontSize: 19,
                  lineHeight: 1.8,
                  marginBottom: 40,
                }}
              >
                We believe in stripping away complexity to reveal pure function — design that speaks through clarity, not decoration.
              </p>
              <button
                className="btn-gradient hover-lift"
                style={{
                  borderRadius: 10,
                  padding: "16px 32px",
                  fontWeight: 700,
                  fontSize: 16,
                }}
              >
                Explore Philosophy
              </button>
            </div>

            <div
              className="preview-accent shadow-accent-hover hover-lift"
              style={{
                height: 520,
                borderRadius: 20,
              }}
            />
          </div>
        </div>
      </section>

      {/* ---------------- FULL-WIDTH ALTERNATING SPLIT (Dark) ---------------- */}
      <section
        className="bg-surface-alt fade-up"
        style={{
          padding: "160px 60px",
        }}
      >
        <div style={{ maxWidth: 1400, margin: "0 auto" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "0.9fr 1fr",
              gap: 80,
              alignItems: "center",
            }}
          >
            <div
              className="preview-secondary shadow-accent-hover hover-lift"
              style={{
                height: 480,
                borderRadius: 20,
              }}
            />

            <div>
              <h2
                className="text-main"
                style={{
                  fontSize: "3rem",
                  fontWeight: 800,
                  lineHeight: 1.15,
                  marginBottom: 24,
                }}
              >
                Every Element <br /> Serves Purpose
              </h2>
              <p
                className="text-muted"
                style={{
                  fontSize: 18,
                  lineHeight: 1.8,
                  marginBottom: 32,
                }}
              >
                Our design process eliminates the unnecessary. What remains is intentional, functional, and beautiful — nothing more, nothing less.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                {[
                  "Ruthless prioritization of user needs",
                  "Systems built for long-term scalability",
                  "Consistent visual language across platforms",
                ].map((point) => (
                  <div
                    key={point}
                    className="text-muted"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 12,
                      fontSize: 16,
                    }}
                  >
                    <div
                      className="bg-accent"
                      style={{
                        width: 6,
                        height: 6,
                        borderRadius: "50%",
                      }}
                    />
                    {point}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- FULL-WIDTH TEXT BLOCK WITH BG ---------------- */}
      <section
        className="bg-gradient-accent fade-up"
        style={{
          padding: "140px 60px",
          color: "var(--color-surface)",
        }}
      >
        <div style={{ maxWidth: 900, margin: "0 auto", textAlign: "center" }}>
          <h2
            style={{
              fontSize: "2.8rem",
              fontWeight: 800,
              lineHeight: 1.3,
              marginBottom: 24,
            }}
          >
            "Design is not just what it looks like and feels like. Design is how it works."
          </h2>
          <p style={{ fontSize: 17, opacity: 0.9 }}>— Steve Jobs</p>
        </div>
      </section>

      {/* ---------------- FULL-WIDTH SPLIT (Light) ---------------- */}
      <section
        className="bg-surface fade-up"
        style={{
          padding: "160px 60px",
        }}
      >
        <div style={{ maxWidth: 1400, margin: "0 auto" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 0.9fr",
              gap: 80,
              alignItems: "center",
            }}
          >
            <div>
              <h2
                className="text-main"
                style={{
                  fontSize: "3rem",
                  fontWeight: 800,
                  lineHeight: 1.15,
                  marginBottom: 24,
                }}
              >
                Function Over <br /> Decoration
              </h2>
              <p
                className="text-muted"
                style={{
                  fontSize: 18,
                  lineHeight: 1.8,
                  marginBottom: 36,
                }}
              >
                We don't add elements to fill space. Every component, every interaction, every pixel exists because it makes the experience better.
              </p>

              {/* Mini Stats */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(2, 1fr)",
                  gap: 32,
                }}
              >
                {[
                  { value: "47%", label: "Faster Load Times" },
                  { value: "89%", label: "User Satisfaction" },
                ].map((stat) => (
                  <div key={stat.label}>
                    <div
                      className="text-accent"
                      style={{
                        fontSize: "2.5rem",
                        fontWeight: 900,
                        lineHeight: 1,
                        marginBottom: 8,
                      }}
                    >
                      {stat.value}
                    </div>
                    <div className="text-muted" style={{ fontSize: 14 }}>
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div
              className="preview-gradient shadow-accent-hover hover-lift"
              style={{
                height: 480,
                borderRadius: 20,
              }}
            />
          </div>
        </div>
      </section>

      {/* ---------------- FULL-WIDTH PROCESS SPLIT ---------------- */}
      <section
        className="bg-surface-alt fade-up"
        style={{
          padding: "160px 60px",
        }}
      >
        <div style={{ maxWidth: 1400, margin: "0 auto" }}>
          <h2
            className="text-main"
            style={{
              fontSize: 36,
              fontWeight: 800,
              marginBottom: 80,
              textAlign: "center",
            }}
          >
            Our Approach
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 60,
            }}
          >
            {[
              {
                num: "1",
                title: "Research",
                desc: "Deep user understanding before any design decisions.",
              },
              {
                num: "2",
                title: "Refine",
                desc: "Remove complexity until only the essential remains.",
              },
              {
                num: "3",
                title: "Repeat",
                desc: "Continuous iteration based on real user feedback.",
              },
            ].map((step) => (
              <div key={step.num}>
                <div
                  className="text-accent"
                  style={{
                    fontSize: "5rem",
                    fontWeight: 900,
                    opacity: 0.15,
                    lineHeight: 1,
                    marginBottom: 20,
                  }}
                >
                  {step.num}
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
                <p className="text-muted" style={{ lineHeight: 1.7, fontSize: 16 }}>
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- FEATURED METRICS STRIP ---------------- */}
      <section
        className="bg-gradient-accent fade-up"
        style={{
          padding: "100px 60px",
        }}
      >
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: 60,
              textAlign: "center",
              color: "var(--color-surface)",
            }}
          >
            {[
              { value: "500K+", label: "Users Impacted", icon: "👥" },
              { value: "47%", label: "Performance Boost", icon: "⚡" },
              { value: "12+", label: "Years Experience", icon: "🏆" },
              { value: "98%", label: "Client Retention", icon: "💎" },
            ].map((metric) => (
              <div key={metric.label} className="fade-up">
                <div style={{ fontSize: 48, marginBottom: 12 }}>{metric.icon}</div>
                <div
                  style={{
                    fontSize: "3rem",
                    fontWeight: 900,
                    lineHeight: 1,
                    marginBottom: 8,
                  }}
                >
                  {metric.value}
                </div>
                <div style={{ fontSize: 15, opacity: 0.95 }}>{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- MINIMALIST CTA ---------------- */}
      <section
        className="bg-surface fade-up"
        style={{
          padding: "160px 60px",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: 700, margin: "0 auto" }}>
          <h2
            className="text-main"
            style={{
              fontSize: 40,
              fontWeight: 800,
              marginBottom: 20,
              lineHeight: 1.2,
            }}
          >
            Less is More
          </h2>
          <p
            className="text-muted"
            style={{
              fontSize: 18,
              lineHeight: 1.7,
              marginBottom: 36,
            }}
          >
            Let's collaborate to create experiences that are beautifully simple and powerfully effective.
          </p>
          <button
            className="btn-gradient hover-lift"
            style={{
              borderRadius: 10,
              padding: "16px 36px",
              fontWeight: 700,
              fontSize: 16,
            }}
          >
            Start Conversation
          </button>
        </div>
      </section>
    </main>
  );
}
