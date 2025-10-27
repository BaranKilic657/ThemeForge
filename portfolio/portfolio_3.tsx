"use client";

export default function Portfolio3() {
  return (
    <div
      style={{
        minHeight: "100vh",
        paddingTop: 80,
      }}
    >
      {/* ---------- MINIMAL HERO ---------- */}
      <section
        className="fade-up"
        style={{
          padding: "180px 24px 140px",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <h1
            className="text-main"
            style={{
              fontWeight: 900,
              fontSize: "clamp(56px, 9vw, 96px)",
              lineHeight: 1.05,
              marginBottom: 40,
              letterSpacing: "-0.03em",
            }}
          >
            Selected Work
          </h1>
          <p
            className="text-muted"
            style={{
              fontSize: 18,
              lineHeight: 1.7,
            }}
          >
            A curated collection of projects we're proud of
          </p>
        </div>
      </section>

      {/* ---------- CASE STUDIES FULL WIDTH ---------- */}
      <section
        className="fade-up"
        style={{
          padding: "0 24px 140px",
        }}
      >
        <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 120 }}>
            {[
              {
                number: "01",
                title: "FinTech Revolution",
                client: "PayFlow",
                industry: "Financial Services",
                description:
                  "Complete redesign of a digital banking platform serving 2M+ users. We focused on simplifying complex financial operations while maintaining security and compliance.",
                results: [
                  { metric: "40%", label: "Faster transactions" },
                  { metric: "3.2x", label: "User engagement" },
                  { metric: "95%", label: "Satisfaction score" },
                ],
                tags: ["Product Design", "Web App", "Mobile", "Design System"],
              },
              {
                number: "02",
                title: "Healthcare Connect",
                client: "MediLink",
                industry: "Healthcare",
                description:
                  "A comprehensive telemedicine platform connecting patients with healthcare providers. Built with accessibility and privacy as top priorities.",
                results: [
                  { metric: "500K+", label: "Consultations" },
                  { metric: "15min", label: "Avg. wait time" },
                  { metric: "4.9/5", label: "Doctor rating" },
                ],
                tags: ["UX Research", "HIPAA Compliant", "Video Integration", "iOS & Android"],
              },
              {
                number: "03",
                title: "Sustainable Fashion",
                client: "EcoWear",
                industry: "E-commerce",
                description:
                  "An eco-friendly fashion marketplace with carbon footprint tracking. Every purchase contributes to environmental sustainability initiatives.",
                results: [
                  { metric: "250%", label: "Revenue growth" },
                  { metric: "85%", label: "Return customers" },
                  { metric: "50K", label: "Trees planted" },
                ],
                tags: ["E-commerce", "Brand Identity", "Sustainability", "AR Try-On"],
              },
            ].map((project) => (
              <div
                key={project.number}
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1.5fr",
                  gap: 80,
                  alignItems: "start",
                }}
              >
                {/* Left Column */}
                <div style={{ position: "sticky", top: 120 }}>
                  <div
                    className="text-accent"
                    style={{
                      fontSize: 120,
                      fontWeight: 900,
                      lineHeight: 1,
                      opacity: 0.15,
                      marginBottom: -40,
                    }}
                  >
                    {project.number}
                  </div>
                  <div
                    className="text-muted"
                    style={{
                      fontSize: 13,
                      fontWeight: 700,
                      textTransform: "uppercase",
                      letterSpacing: 2,
                      marginBottom: 12,
                    }}
                  >
                    {project.industry}
                  </div>
                  <h2
                    className="text-main"
                    style={{
                      fontWeight: 900,
                      fontSize: 48,
                      marginBottom: 12,
                      lineHeight: 1.1,
                    }}
                  >
                    {project.title}
                  </h2>
                  <div
                    className="text-accent"
                    style={{
                      fontSize: 20,
                      fontWeight: 700,
                      marginBottom: 32,
                    }}
                  >
                    {project.client}
                  </div>
                  <p
                    className="text-muted"
                    style={{
                      fontSize: 17,
                      lineHeight: 1.8,
                      marginBottom: 40,
                    }}
                  >
                    {project.description}
                  </p>
                  <button
                    className="hover-lift"
                    style={{
                      padding: "16px 40px",
                      borderRadius: 12,
                      fontSize: 16,
                      fontWeight: 700,
                      background: "var(--color-accent)",
                      color: "var(--color-surface)",
                      border: "none",
                      cursor: "pointer",
                    }}
                  >
                    View Case Study
                  </button>
                </div>

                {/* Right Column */}
                <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
                  {/* Image Placeholder */}
                  <div
                    className="bg-gradient-accent"
                    style={{
                      height: 400,
                      borderRadius: 24,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 64,
                    }}
                  >
                    {project.number === "01" ? "💳" : project.number === "02" ? "🏥" : "👕"}
                  </div>

                  {/* Results Grid */}
                  <div
                    className="bg-surface"
                    style={{
                      padding: "40px 36px",
                      borderRadius: 20,
                      border: "2px solid var(--color-border)",
                    }}
                  >
                    <div
                      className="text-main"
                      style={{
                        fontSize: 15,
                        fontWeight: 700,
                        textTransform: "uppercase",
                        letterSpacing: 1.5,
                        marginBottom: 28,
                      }}
                    >
                      Results
                    </div>
                    <div
                      style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(3, 1fr)",
                        gap: 32,
                      }}
                    >
                      {project.results.map((result, i) => (
                        <div key={i}>
                          <div
                            className="text-accent"
                            style={{
                              fontSize: 36,
                              fontWeight: 900,
                              marginBottom: 8,
                            }}
                          >
                            {result.metric}
                          </div>
                          <div
                            className="text-muted"
                            style={{
                              fontSize: 14,
                              fontWeight: 600,
                            }}
                          >
                            {result.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tags */}
                  <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                    {project.tags.map((tag) => (
                      <div
                        key={tag}
                        className="bg-surface-alt"
                        style={{
                          padding: "10px 20px",
                          borderRadius: 8,
                          fontSize: 14,
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

      {/* ---------- CAPABILITIES ---------- */}
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
              What We Deliver
            </h2>
            <p className="text-muted" style={{ fontSize: 19 }}>
              End-to-end digital solutions
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 32,
            }}
          >
            {[
              {
                icon: "🎯",
                title: "Strategy",
                items: ["User Research", "Product Strategy", "Market Analysis"],
              },
              {
                icon: "✨",
                title: "Design",
                items: ["UX/UI Design", "Prototyping", "Design Systems"],
              },
              {
                icon: "⚡",
                title: "Development",
                items: ["Web & Mobile", "APIs", "Cloud Infrastructure"],
              },
            ].map((capability, i) => (
              <div
                key={i}
                className="bg-surface"
                style={{
                  padding: "40px 36px",
                  borderRadius: 20,
                  border: "2px solid var(--color-border)",
                }}
              >
                <div style={{ fontSize: 56, marginBottom: 24 }}>{capability.icon}</div>
                <h3
                  className="text-main"
                  style={{
                    fontWeight: 800,
                    fontSize: 24,
                    marginBottom: 20,
                  }}
                >
                  {capability.title}
                </h3>
                <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                  {capability.items.map((item) => (
                    <div
                      key={item}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 10,
                      }}
                    >
                      <div
                        className="bg-gradient-accent"
                        style={{
                          width: 6,
                          height: 6,
                          borderRadius: "50%",
                        }}
                      />
                      <span className="text-muted" style={{ fontSize: 15, fontWeight: 500 }}>
                        {item}
                      </span>
                    </div>
                  ))}
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
              lineHeight: 1.2,
            }}
          >
            Have a Project in Mind?
          </h2>
          <p
            style={{
              fontSize: 19,
              lineHeight: 1.7,
              marginBottom: 40,
              opacity: 0.95,
            }}
          >
            Let's discuss how we can bring your vision to life with design and technology.
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
            Start a Conversation
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
            font-size: 40px !important;
          }
          h2 {
            font-size: 32px !important;
          }
          h3 {
            font-size: 22px !important;
          }
          div[style*="gridTemplateColumns: 1fr 1.5fr"],
          div[style*="gridTemplateColumns: repeat(3, 1fr)"] {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }
          div[style*="position: sticky"] {
            position: static !important;
          }
          div[style*="fontSize: 120"] {
            font-size: 72px !important;
            margin-bottom: -20px !important;
          }
          div[style*="height: 400"] {
            height: 280px !important;
          }
          div[style*="padding: 40px 36px"] {
            padding: 32px 24px !important;
          }
          div[style*="gap: 120"] {
            gap: 80px !important;
          }
        }
      `}</style>
    </div>
  );
}
