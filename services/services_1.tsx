"use client";

export default function Services1() {
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
          padding: "120px 24px 80px",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <div
            className="text-accent"
            style={{
              fontSize: 15,
              fontWeight: 700,
              letterSpacing: 2,
              textTransform: "uppercase",
              marginBottom: 20,
            }}
          >
            What We Offer
          </div>
          <h1
            className="text-main"
            style={{
              fontWeight: 900,
              fontSize: "clamp(44px, 6vw, 72px)",
              lineHeight: 1.1,
              marginBottom: 28,
            }}
          >
            Services Built for Your Success
          </h1>
          <p
            className="text-muted"
            style={{
              fontSize: 20,
              lineHeight: 1.7,
              maxWidth: 700,
              margin: "0 auto",
            }}
          >
            End-to-end solutions to transform your ideas into exceptional digital products that
            users love and businesses trust.
          </p>
        </div>
      </section>

      {/* ---------- MAIN SERVICES GRID ---------- */}
      <section
        className="fade-up"
        style={{
          padding: "80px 24px 140px",
        }}
      >
        <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 40,
            }}
          >
            {[
              {
                icon: "🎨",
                title: "Product Design",
                desc: "Beautiful, intuitive interfaces that delight users and drive engagement.",
                features: [
                  "UX Research & Strategy",
                  "UI/UX Design",
                  "Design Systems",
                  "Prototyping & Testing",
                  "Mobile & Web Design",
                ],
                accent: "bg-gradient-accent",
              },
              {
                icon: "⚡",
                title: "Development",
                desc: "Scalable, performant applications built with modern frameworks and best practices.",
                features: [
                  "Web Applications",
                  "Mobile Apps (iOS/Android)",
                  "API Development",
                  "Cloud Infrastructure",
                  "Performance Optimization",
                ],
                accent: "bg-gradient-secondary",
              },
              {
                icon: "🎯",
                title: "Brand Strategy",
                desc: "Compelling brand identities that resonate with your audience and stand out.",
                features: [
                  "Brand Identity",
                  "Visual Language",
                  "Market Positioning",
                  "Messaging & Voice",
                  "Brand Guidelines",
                ],
                accent: "bg-gradient-accent",
              },
            ].map((service, i) => (
              <div
                key={i}
                className="bg-surface hover-lift shadow-accent-hover"
                style={{
                  padding: "48px 40px",
                  borderRadius: 24,
                  border: "2px solid var(--color-border)",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <div style={{ fontSize: 64, marginBottom: 24 }}>{service.icon}</div>
                <h3
                  className="text-main"
                  style={{
                    fontWeight: 800,
                    fontSize: 28,
                    marginBottom: 16,
                  }}
                >
                  {service.title}
                </h3>
                <p
                  className="text-muted"
                  style={{
                    fontSize: 16,
                    lineHeight: 1.7,
                    marginBottom: 32,
                    flex: 1,
                  }}
                >
                  {service.desc}
                </p>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 12,
                  }}
                >
                  {service.features.map((feature) => (
                    <div
                      key={feature}
                      className="text-muted"
                      style={{
                        fontSize: 14,
                        display: "flex",
                        alignItems: "center",
                        gap: 10,
                      }}
                    >
                      <div
                        className={service.accent}
                        style={{
                          width: 6,
                          height: 6,
                          borderRadius: "50%",
                          flexShrink: 0,
                        }}
                      />
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- PROCESS SECTION ---------- */}
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
                fontSize: 42,
                marginBottom: 20,
              }}
            >
              Our Process
            </h2>
            <p className="text-muted" style={{ fontSize: 18 }}>
              A proven approach that delivers exceptional results
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
                title: "Discovery",
                desc: "We start by understanding your goals, users, and challenges through research and collaboration.",
              },
              {
                number: "02",
                title: "Strategy",
                desc: "Develop a comprehensive roadmap that aligns design and development with business objectives.",
              },
              {
                number: "03",
                title: "Execution",
                desc: "Bring ideas to life with iterative design, development, and continuous testing and refinement.",
              },
              {
                number: "04",
                title: "Launch & Support",
                desc: "Deploy with confidence and provide ongoing optimization, monitoring, and support.",
              },
            ].map((step) => (
              <div
                key={step.number}
                className="bg-surface hover-lift shadow-accent-hover"
                style={{
                  padding: "40px 32px",
                  borderRadius: 20,
                  border: "2px solid var(--color-border)",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <div
                  className="text-accent"
                  style={{
                    fontSize: 100,
                    fontWeight: 900,
                    opacity: 0.04,
                    position: "absolute",
                    top: -10,
                    right: 10,
                  }}
                >
                  {step.number}
                </div>
                <div style={{ position: "relative", zIndex: 1 }}>
                  <div
                    className="text-accent"
                    style={{
                      fontSize: 16,
                      fontWeight: 900,
                      marginBottom: 16,
                    }}
                  >
                    {step.number}
                  </div>
                  <h3
                    className="text-main"
                    style={{
                      fontWeight: 800,
                      fontSize: 22,
                      marginBottom: 12,
                    }}
                  >
                    {step.title}
                  </h3>
                  <p
                    className="text-muted"
                    style={{
                      fontSize: 15,
                      lineHeight: 1.6,
                    }}
                  >
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- INDUSTRIES WE SERVE ---------- */}
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
                fontSize: 42,
                marginBottom: 20,
              }}
            >
              Industries We Serve
            </h2>
            <p className="text-muted" style={{ fontSize: 18 }}>
              Trusted by companies across diverse sectors
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: 24,
            }}
          >
            {[
              { name: "FinTech", icon: "💳" },
              { name: "Healthcare", icon: "🏥" },
              { name: "E-commerce", icon: "🛍️" },
              { name: "SaaS", icon: "☁️" },
              { name: "Education", icon: "📚" },
              { name: "Real Estate", icon: "🏢" },
              { name: "Entertainment", icon: "🎮" },
              { name: "Travel", icon: "✈️" },
            ].map((industry) => (
              <div
                key={industry.name}
                className="bg-surface hover-lift shadow-accent-hover"
                style={{
                  padding: "32px 24px",
                  borderRadius: 16,
                  border: "2px solid var(--color-border)",
                  textAlign: "center",
                }}
              >
                <div style={{ fontSize: 42, marginBottom: 12 }}>{industry.icon}</div>
                <div
                  className="text-main"
                  style={{
                    fontWeight: 700,
                    fontSize: 16,
                  }}
                >
                  {industry.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- STATS ---------- */}
      <section
        className="bg-gradient-accent fade-up"
        style={{
          padding: "100px 24px",
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: 48,
            }}
          >
            {[
              { value: "500+", label: "Projects Completed" },
              { value: "98%", label: "Client Satisfaction" },
              { value: "10yrs", label: "Industry Experience" },
              { value: "50+", label: "Team Members" },
            ].map((stat) => (
              <div key={stat.label} style={{ textAlign: "center" }}>
                <div
                  style={{
                    fontSize: 56,
                    fontWeight: 900,
                    marginBottom: 12,
                  }}
                >
                  {stat.value}
                </div>
                <div
                  style={{
                    fontSize: 16,
                    fontWeight: 600,
                    opacity: 0.9,
                  }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- CTA ---------- */}
      <section
        className="fade-up"
        style={{
          padding: "140px 24px",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <h2
            className="text-main"
            style={{
              fontWeight: 900,
              fontSize: 48,
              marginBottom: 24,
            }}
          >
            Ready to Get Started?
          </h2>
          <p
            className="text-muted"
            style={{
              fontSize: 19,
              lineHeight: 1.7,
              marginBottom: 40,
            }}
          >
            Let's discuss your project and explore how we can help you achieve your goals with our
            comprehensive services.
          </p>
          <div
            style={{
              display: "flex",
              gap: 16,
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
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
              Schedule a Consultation
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
            font-size: 32px !important;
          }
          h3 {
            font-size: 22px !important;
          }
          div[style*="gridTemplateColumns: repeat(3, 1fr)"],
          div[style*="gridTemplateColumns: repeat(4, 1fr)"] {
            grid-template-columns: 1fr !important;
            gap: 24px !important;
          }
          div[style*="padding: 48px 40px"],
          div[style*="padding: 40px 32px"] {
            padding: 32px 24px !important;
          }
        }
      `}</style>
    </div>
  );
}
