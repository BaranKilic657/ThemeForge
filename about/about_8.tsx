"use client";

export default function About8() {
  return (
    <div
      style={{
        minHeight: "100vh",
        paddingTop: 80,
      }}
    >
      {/* ---------- HERO WITH FLOATING CARDS ---------- */}
      <section
        className="fade-up"
        style={{
          padding: "140px 24px 200px",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Background floating shapes */}
        <div
          className="float"
          style={{
            position: "absolute",
            width: 200,
            height: 200,
            background: "var(--color-accent)",
            opacity: 0.05,
            borderRadius: "50%",
            top: "10%",
            left: "10%",
            filter: "blur(40px)",
          }}
        />
        <div
          className="float"
          style={{
            position: "absolute",
            width: 150,
            height: 150,
            background: "var(--color-secondary)",
            opacity: 0.05,
            borderRadius: "50%",
            bottom: "20%",
            right: "15%",
            filter: "blur(40px)",
            animationDelay: "1s",
          }}
        />

        <div style={{ maxWidth: "900px", margin: "0 auto", position: "relative", zIndex: 1 }}>
          <h1
            className="text-highlight"
            style={{
              fontWeight: 900,
              fontSize: "clamp(48px, 7vw, 84px)",
              lineHeight: 1.1,
              marginBottom: 28,
            }}
          >
            Crafting Digital Excellence
          </h1>
          <p
            className="text-muted"
            style={{
              fontSize: 22,
              lineHeight: 1.7,
              maxWidth: 700,
              margin: "0 auto",
            }}
          >
            A design studio obsessed with creating products that don't just work — they inspire.
          </p>
        </div>
      </section>

      {/* ---------- STACKED CARDS SHOWCASE ---------- */}
      <section
        style={{
          padding: "0 24px 140px",
          maxWidth: "1000px",
          margin: "0 auto",
          marginTop: -100,
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 24,
          }}
        >
          {[
            {
              title: "Design-Led Approach",
              desc: "Every pixel, every interaction, every moment is crafted with intention. We don't just make things pretty — we make them purposeful.",
              icon: "✨",
              bg: "bg-gradient-accent",
            },
            {
              title: "Engineering Excellence",
              desc: "Beautiful design deserves beautiful code. Our engineers build scalable, performant systems that stand the test of time.",
              icon: "⚙️",
              bg: "bg-gradient-secondary",
            },
            {
              title: "Strategic Thinking",
              desc: "We don't just execute — we strategize. Every project starts with understanding your goals, audience, and market.",
              icon: "🎯",
              bg: "bg-surface",
              bordered: true,
            },
          ].map((card, i) => (
            <div
              key={i}
              className={`hover-lift shadow-accent-hover ${card.bg}`}
              style={{
                padding: "60px 48px",
                borderRadius: 24,
                border: card.bordered ? "2px solid var(--color-border)" : "none",
                color: card.bordered ? "var(--color-text)" : "var(--color-surface)",
                position: "relative",
                overflow: "hidden",
              }}
            >
              {!card.bordered && (
                <div
                  style={{
                    position: "absolute",
                    top: -50,
                    right: -50,
                    fontSize: 200,
                    opacity: 0.1,
                  }}
                >
                  {card.icon}
                </div>
              )}
              <div style={{ position: "relative", zIndex: 1 }}>
                <div style={{ fontSize: 56, marginBottom: 20 }}>{card.icon}</div>
                <h3
                  style={{
                    fontWeight: 800,
                    fontSize: 32,
                    marginBottom: 16,
                    color: card.bordered ? "var(--color-text)" : "inherit",
                  }}
                >
                  {card.title}
                </h3>
                <p
                  style={{
                    fontSize: 18,
                    lineHeight: 1.7,
                    opacity: card.bordered ? 0.7 : 0.95,
                    color: card.bordered ? "var(--color-text-muted)" : "inherit",
                  }}
                >
                  {card.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ---------- NUMBERS THAT MATTER ---------- */}
      <section
        className="bg-surface-alt fade-up"
        style={{
          padding: "140px 24px",
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2
            className="text-main"
            style={{
              fontWeight: 800,
              fontSize: 36,
              marginBottom: 80,
              textAlign: "center",
            }}
          >
            By The Numbers
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: 40,
            }}
          >
            {[
              { number: "10", suffix: "yrs", label: "In Business", icon: "📅" },
              { number: "200", suffix: "+", label: "Projects Shipped", icon: "🚀" },
              { number: "50", suffix: "+", label: "Happy Clients", icon: "💙" },
              { number: "15", suffix: "", label: "Countries Served", icon: "🌍" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="bg-surface hover-lift shadow-accent-hover"
                style={{
                  padding: "48px 32px",
                  borderRadius: 20,
                  textAlign: "center",
                  border: "2px solid var(--color-border)",
                }}
              >
                <div style={{ fontSize: 48, marginBottom: 16 }}>{stat.icon}</div>
                <div
                  className="text-accent"
                  style={{
                    fontSize: 52,
                    fontWeight: 900,
                    lineHeight: 1,
                    marginBottom: 8,
                  }}
                >
                  {stat.number}
                  <span style={{ fontSize: 32 }}>{stat.suffix}</span>
                </div>
                <div className="text-muted" style={{ fontSize: 15, fontWeight: 600 }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- OUR APPROACH ---------- */}
      <section
        className="fade-up"
        style={{
          padding: "140px 24px",
        }}
      >
        <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
          <h2
            className="text-main"
            style={{
              fontWeight: 800,
              fontSize: 36,
              marginBottom: 20,
              textAlign: "center",
            }}
          >
            How We Work
          </h2>
          <p className="text-muted" style={{ textAlign: "center", marginBottom: 80, fontSize: 17 }}>
            A proven methodology that delivers results
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: 48,
            }}
          >
            {[
              {
                phase: "01",
                title: "Discovery & Research",
                desc: "We start by understanding your business, users, and goals through comprehensive research and stakeholder interviews.",
                highlights: ["User Interviews", "Competitive Analysis", "Market Research"],
              },
              {
                phase: "02",
                title: "Strategy & Planning",
                desc: "Based on our findings, we develop a strategic roadmap that aligns design decisions with business objectives.",
                highlights: ["Information Architecture", "User Flows", "Content Strategy"],
              },
              {
                phase: "03",
                title: "Design & Prototyping",
                desc: "We create high-fidelity designs and interactive prototypes, iterating based on feedback and testing.",
                highlights: ["Visual Design", "Prototyping", "Usability Testing"],
              },
              {
                phase: "04",
                title: "Development & Launch",
                desc: "Our engineers bring designs to life with clean, scalable code, ensuring a smooth launch and ongoing support.",
                highlights: ["Frontend Development", "Backend Systems", "QA Testing"],
              },
            ].map((step) => (
              <div
                key={step.phase}
                className="bg-surface hover-lift shadow-accent-hover"
                style={{
                  padding: "48px 40px",
                  borderRadius: 20,
                  border: "2px solid var(--color-border)",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <div
                  className="text-accent"
                  style={{
                    fontSize: 120,
                    fontWeight: 900,
                    opacity: 0.03,
                    position: "absolute",
                    top: -20,
                    right: 20,
                  }}
                >
                  {step.phase}
                </div>
                <div style={{ position: "relative", zIndex: 1 }}>
                  <div
                    className="text-accent"
                    style={{
                      fontSize: 18,
                      fontWeight: 900,
                      marginBottom: 16,
                    }}
                  >
                    {step.phase}
                  </div>
                  <h3 className="text-main" style={{ fontWeight: 800, fontSize: 26, marginBottom: 16 }}>
                    {step.title}
                  </h3>
                  <p className="text-muted" style={{ fontSize: 16, lineHeight: 1.7, marginBottom: 24 }}>
                    {step.desc}
                  </p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                    {step.highlights.map((item) => (
                      <div
                        key={item}
                        className="bg-surface-alt"
                        style={{
                          padding: "8px 16px",
                          borderRadius: 8,
                          fontSize: 13,
                          fontWeight: 600,
                          color: "var(--color-text-muted)",
                        }}
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- TESTIMONIAL SPOTLIGHT ---------- */}
      <section
        className="bg-surface-alt fade-up"
        style={{
          padding: "140px 24px",
        }}
      >
        <div style={{ maxWidth: "900px", margin: "0 auto", textAlign: "center" }}>
          <div
            className="bg-gradient-accent"
            style={{
              padding: "80px 60px",
              borderRadius: 24,
            }}
          >
            <div style={{ fontSize: 64, marginBottom: 24 }}>⭐</div>
            <p
              style={{
                fontSize: 28,
                lineHeight: 1.6,
                fontWeight: 600,
                marginBottom: 32,
                fontStyle: "italic",
              }}
            >
              "Working with NovaSphere felt less like hiring an agency and more like gaining a
              strategic partner. They elevated our entire product experience."
            </p>
            <div style={{ fontWeight: 700, fontSize: 18 }}>Michael Rodriguez</div>
            <div style={{ opacity: 0.9, fontSize: 15, marginTop: 4 }}>VP of Product, DataCore</div>
          </div>
        </div>
      </section>

      {/* ---------- CTA WITH OFFSET CARDS ---------- */}
      <section
        className="fade-up"
        style={{
          padding: "140px 24px",
        }}
      >
        <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <div
            className="bg-surface"
            style={{
              padding: "80px 60px",
              borderRadius: 24,
              border: "2px solid var(--color-border)",
              textAlign: "center",
            }}
          >
            <h2 className="text-main" style={{ fontWeight: 900, fontSize: 42, marginBottom: 20 }}>
              Ready to Start?
            </h2>
            <p className="text-muted" style={{ fontSize: 19, marginBottom: 40, lineHeight: 1.6 }}>
              Let's discuss your project and explore how we can help you achieve your goals.
            </p>
            <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
              <button
                className="accent hover-lift"
                style={{
                  padding: "18px 48px",
                  borderRadius: 12,
                  fontSize: 17,
                  fontWeight: 700,
                  border: "none",
                  cursor: "pointer",
                }}
              >
                Schedule a Call
              </button>
              <button
                className="accent-outline hover-lift"
                style={{
                  padding: "18px 48px",
                  borderRadius: 12,
                  fontSize: 17,
                  fontWeight: 700,
                  cursor: "pointer",
                }}
              >
                View Our Work
              </button>
            </div>
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
            font-size: 40px !important;
          }
          h2 {
            font-size: 28px !important;
          }
          h3 {
            font-size: 22px !important;
          }
          div[style*="gridTemplateColumns: repeat(4, 1fr)"] {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 24px !important;
          }
          div[style*="gridTemplateColumns: repeat(2, 1fr)"] {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }
          div[style*="padding: 60px 48px"],
          div[style*="padding: 48px 40px"],
          div[style*="padding: 80px 60px"] {
            padding: 40px 28px !important;
          }
          div[style*="fontSize: 200"] {
            display: none !important;
          }
        }
      `}</style>
    </div>
  );
}
