"use client";

import { useState } from "react";

export default function Services4() {
  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
    {
      title: "Discovery & Strategy",
      description:
        "We begin by understanding your business goals, target audience, and competitive landscape. Our research-driven approach ensures every decision is backed by data.",
      deliverables: ["Market research report", "User personas", "Product roadmap", "Technical specs"],
      timeline: "2-3 weeks",
    },
    {
      title: "Design & Prototyping",
      description:
        "Our design team creates stunning, user-centric interfaces that bring your vision to life. We iterate quickly and validate designs with real users.",
      deliverables: ["Wireframes", "High-fidelity mockups", "Interactive prototype", "Design system"],
      timeline: "3-4 weeks",
    },
    {
      title: "Development & Testing",
      description:
        "Using modern frameworks and best practices, we build scalable, performant applications. Rigorous testing ensures a bug-free launch.",
      deliverables: ["Clean codebase", "API integration", "QA testing", "Documentation"],
      timeline: "6-8 weeks",
    },
    {
      title: "Launch & Growth",
      description:
        "We don't just ship and disappear. Our team supports you through launch and beyond, optimizing for performance and user feedback.",
      deliverables: ["Deployment", "Performance monitoring", "Analytics setup", "Ongoing support"],
      timeline: "Ongoing",
    },
  ];

  return (
    <div
      style={{
        minHeight: "100vh",
        paddingTop: 80,
      }}
    >
      {/* ---------- HERO ---------- */}
      <section
        className="bg-gradient-accent"
        style={{
          padding: "120px 24px",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <div style={{ fontSize: 80, marginBottom: 32 }}>💼</div>
          <h1
            style={{
              fontWeight: 900,
              fontSize: "clamp(42px, 7vw, 72px)",
              lineHeight: 1.1,
              marginBottom: 28,
            }}
          >
            Built for Scale, Designed for Impact
          </h1>
          <p
            style={{
              fontSize: 20,
              lineHeight: 1.7,
              marginBottom: 48,
              opacity: 0.95,
            }}
          >
            We create digital products that don't just meet expectations—they exceed them. From concept to
            execution, we're with you every step of the way.
          </p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <button
              className="hover-lift"
              style={{
                padding: "18px 40px",
                borderRadius: 12,
                fontSize: 17,
                fontWeight: 700,
                background: "var(--color-surface)",
                color: "var(--color-accent)",
                border: "none",
                cursor: "pointer",
              }}
            >
              Start a Project
            </button>
            <button
              className="hover-lift"
              style={{
                padding: "18px 40px",
                borderRadius: 12,
                fontSize: 17,
                fontWeight: 700,
                background: "transparent",
                color: "var(--color-surface)",
                border: "2px solid var(--color-surface)",
                cursor: "pointer",
              }}
            >
              View Our Work
            </button>
          </div>
        </div>
      </section>

      {/* ---------- INTERACTIVE FEATURE SHOWCASE ---------- */}
      <section
        className="fade-up"
        style={{
          padding: "140px 24px",
        }}
      >
        <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
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
              A proven methodology that delivers results
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "320px 1fr",
              gap: 48,
            }}
          >
            {/* Left Navigation */}
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {features.map((feature, index) => (
                <button
                  key={index}
                  onClick={() => setActiveFeature(index)}
                  className={activeFeature === index ? "bg-gradient-accent" : "bg-surface"}
                  style={{
                    padding: "24px 28px",
                    borderRadius: 16,
                    border: activeFeature === index ? "none" : "2px solid var(--color-border)",
                    textAlign: "left",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                  }}
                >
                  <div
                    style={{
                      fontSize: 14,
                      fontWeight: 700,
                      textTransform: "uppercase",
                      letterSpacing: 1,
                      marginBottom: 8,
                      opacity: 0.8,
                      color: activeFeature === index ? "var(--color-surface)" : "var(--color-accent)",
                    }}
                  >
                    Step {index + 1}
                  </div>
                  <div
                    style={{
                      fontSize: 18,
                      fontWeight: 700,
                      color: activeFeature === index ? "var(--color-surface)" : "var(--color-text)",
                    }}
                  >
                    {feature.title}
                  </div>
                </button>
              ))}
            </div>

            {/* Right Content */}
            <div
              className="bg-surface shadow-accent-hover"
              style={{
                padding: "60px 56px",
                borderRadius: 24,
                border: "2px solid var(--color-border)",
              }}
            >
              <div
                className="text-accent"
                style={{
                  fontSize: 14,
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: 1.5,
                  marginBottom: 20,
                }}
              >
                Step {activeFeature + 1} of {features.length}
              </div>
              <h3
                className="text-main"
                style={{
                  fontWeight: 800,
                  fontSize: 36,
                  marginBottom: 24,
                }}
              >
                {features[activeFeature].title}
              </h3>
              <p
                className="text-muted"
                style={{
                  fontSize: 18,
                  lineHeight: 1.8,
                  marginBottom: 40,
                }}
              >
                {features[activeFeature].description}
              </p>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: 40,
                  marginBottom: 40,
                }}
              >
                <div>
                  <div
                    className="text-accent"
                    style={{
                      fontSize: 13,
                      fontWeight: 700,
                      textTransform: "uppercase",
                      letterSpacing: 1,
                      marginBottom: 16,
                    }}
                  >
                    Key Deliverables
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                    {features[activeFeature].deliverables.map((deliverable, i) => (
                      <div
                        key={i}
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
                          }}
                        />
                        <div className="text-main" style={{ fontSize: 15, fontWeight: 600 }}>
                          {deliverable}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <div
                    className="text-accent"
                    style={{
                      fontSize: 13,
                      fontWeight: 700,
                      textTransform: "uppercase",
                      letterSpacing: 1,
                      marginBottom: 16,
                    }}
                  >
                    Timeline
                  </div>
                  <div
                    className="bg-gradient-secondary"
                    style={{
                      padding: "16px 24px",
                      borderRadius: 12,
                      fontSize: 20,
                      fontWeight: 700,
                    }}
                  >
                    {features[activeFeature].timeline}
                  </div>
                </div>
              </div>

              <div style={{ display: "flex", gap: 12 }}>
                {features.map((_, i) => (
                  <div
                    key={i}
                    onClick={() => setActiveFeature(i)}
                    className={activeFeature === i ? "bg-gradient-accent" : "bg-surface-alt"}
                    style={{
                      flex: 1,
                      height: 6,
                      borderRadius: 3,
                      cursor: "pointer",
                      transition: "all 0.3s ease",
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- SERVICE COMPARISON TABLE ---------- */}
      <section
        className="bg-surface-alt fade-up"
        style={{
          padding: "140px 24px",
        }}
      >
        <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 80 }}>
            <h2
              className="text-main"
              style={{
                fontWeight: 800,
                fontSize: 42,
                marginBottom: 20,
              }}
            >
              Service Comparison
            </h2>
            <p className="text-muted" style={{ fontSize: 18 }}>
              Find the right fit for your project
            </p>
          </div>

          <div
            className="bg-surface"
            style={{
              borderRadius: 24,
              border: "2px solid var(--color-border)",
              overflow: "hidden",
            }}
          >
            {/* Table Header */}
            <div
              className="bg-gradient-accent"
              style={{
                display: "grid",
                gridTemplateColumns: "280px repeat(3, 1fr)",
                padding: "24px 32px",
                fontWeight: 700,
                fontSize: 15,
              }}
            >
              <div>Features</div>
              <div style={{ textAlign: "center" }}>Starter</div>
              <div style={{ textAlign: "center" }}>Professional</div>
              <div style={{ textAlign: "center" }}>Enterprise</div>
            </div>

            {/* Table Rows */}
            {[
              { feature: "Custom Design", starter: true, pro: true, enterprise: true },
              { feature: "Responsive Development", starter: true, pro: true, enterprise: true },
              { feature: "Design System", starter: false, pro: true, enterprise: true },
              { feature: "CMS Integration", starter: false, pro: true, enterprise: true },
              { feature: "Advanced Animations", starter: false, pro: true, enterprise: true },
              { feature: "API Development", starter: false, pro: false, enterprise: true },
              { feature: "Custom Backend", starter: false, pro: false, enterprise: true },
              { feature: "Dedicated Team", starter: false, pro: false, enterprise: true },
              { feature: "Ongoing Maintenance", starter: false, pro: "Optional", enterprise: true },
              { feature: "Priority Support", starter: false, pro: false, enterprise: true },
            ].map((row, i) => (
              <div
                key={i}
                style={{
                  display: "grid",
                  gridTemplateColumns: "280px repeat(3, 1fr)",
                  padding: "20px 32px",
                  borderTop: "1px solid var(--color-border)",
                  alignItems: "center",
                }}
              >
                <div className="text-main" style={{ fontWeight: 600, fontSize: 15 }}>
                  {row.feature}
                </div>
                <div style={{ textAlign: "center", fontSize: 18 }}>
                  {row.starter === true ? "✓" : row.starter === false ? "—" : row.starter}
                </div>
                <div style={{ textAlign: "center", fontSize: 18 }}>
                  {row.pro === true ? "✓" : row.pro === false ? "—" : row.pro}
                </div>
                <div style={{ textAlign: "center", fontSize: 18 }}>
                  {row.enterprise === true ? "✓" : row.enterprise === false ? "—" : row.enterprise}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- SPECIALIZATIONS ---------- */}
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
              Industry Expertise
            </h2>
            <p className="text-muted" style={{ fontSize: 18 }}>
              We've built solutions for diverse industries
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: 28,
            }}
          >
            {[
              { icon: "🏥", name: "Healthcare" },
              { icon: "🏦", name: "FinTech" },
              { icon: "🛍️", name: "E-Commerce" },
              { icon: "📚", name: "Education" },
              { icon: "🎮", name: "Gaming" },
              { icon: "🏡", name: "Real Estate" },
              { icon: "🚗", name: "Automotive" },
              { icon: "✈️", name: "Travel" },
            ].map((industry) => (
              <div
                key={industry.name}
                className="bg-surface hover-lift shadow-accent-hover"
                style={{
                  padding: "32px 24px",
                  borderRadius: 20,
                  border: "2px solid var(--color-border)",
                  textAlign: "center",
                }}
              >
                <div style={{ fontSize: 48, marginBottom: 16 }}>{industry.icon}</div>
                <div className="text-main" style={{ fontWeight: 700, fontSize: 16 }}>
                  {industry.name}
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
          padding: "100px 24px",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <h2 style={{ fontWeight: 900, fontSize: 48, marginBottom: 24 }}>
            Ready to Build Something Great?
          </h2>
          <p style={{ fontSize: 19, marginBottom: 40, opacity: 0.95, lineHeight: 1.7 }}>
            Let's discuss your project and explore how we can help you achieve your goals.
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
            Schedule a Consultation
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
            font-size: 36px !important;
          }
          h2 {
            font-size: 28px !important;
          }
          h3 {
            font-size: 24px !important;
          }
          div[style*="gridTemplateColumns: 320px 1fr"],
          div[style*="gridTemplateColumns: 280px repeat(3, 1fr)"],
          div[style*="gridTemplateColumns: repeat(4, 1fr)"],
          div[style*="gridTemplateColumns: 1fr 1fr"] {
            grid-template-columns: 1fr !important;
            gap: 20px !important;
          }
          div[style*="padding: 60px 56px"],
          div[style*="padding: 24px 32px"],
          div[style*="padding: 20px 32px"] {
            padding: 32px 24px !important;
          }
          button[style*="padding: 24px 28px"] {
            padding: 20px 24px !important;
          }
        }
      `}</style>
    </div>
  );
}
