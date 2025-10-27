"use client";

import { useState } from "react";

export default function Services2() {
  const [activeService, setActiveService] = useState(0);

  const services = [
    {
      title: "Digital Product Design",
      tagline: "Crafting experiences that users love",
      description:
        "From concept to launch, we design digital products that are beautiful, intuitive, and built to scale. Our human-centered approach ensures every interaction delights your users.",
      offerings: [
        "User Research & Personas",
        "Information Architecture",
        "Wireframing & Prototyping",
        "Visual Design & Branding",
        "Design Systems & Components",
        "Usability Testing & Iteration",
      ],
      deliverables: ["Figma Design Files", "Interactive Prototypes", "Design System", "Developer Handoff"],
      timeline: "6-12 weeks",
      color: "bg-gradient-accent",
    },
    {
      title: "Web & Mobile Development",
      tagline: "Building fast, scalable applications",
      description:
        "We transform designs into powerful, performant applications using modern frameworks and best practices. From responsive websites to native mobile apps, we've got you covered.",
      offerings: [
        "React & Next.js Development",
        "Native iOS & Android Apps",
        "Progressive Web Apps (PWA)",
        "RESTful & GraphQL APIs",
        "Database Design & Integration",
        "Performance Optimization",
      ],
      deliverables: ["Production-Ready Code", "Deployment & CI/CD", "Documentation", "Training & Support"],
      timeline: "8-16 weeks",
      color: "bg-gradient-secondary",
    },
    {
      title: "Brand & Strategy",
      tagline: "Building memorable brand identities",
      description:
        "Stand out in crowded markets with a compelling brand identity. We help you define your position, craft your message, and create visual systems that resonate with your audience.",
      offerings: [
        "Brand Strategy & Positioning",
        "Logo & Visual Identity",
        "Brand Guidelines & Standards",
        "Marketing Collateral",
        "Content Strategy & Messaging",
        "Social Media Assets",
      ],
      deliverables: ["Brand Guidelines", "Logo Package", "Marketing Templates", "Asset Library"],
      timeline: "4-8 weeks",
      color: "bg-gradient-accent",
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
        className="bg-surface-gradient fade-up"
        style={{
          padding: "140px 24px 100px",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <h1
            className="text-highlight"
            style={{
              fontWeight: 900,
              fontSize: "clamp(48px, 7vw, 84px)",
              lineHeight: 1.1,
              marginBottom: 28,
            }}
          >
            Services That Scale
          </h1>
          <p
            className="text-muted"
            style={{
              fontSize: 22,
              lineHeight: 1.7,
              maxWidth: 800,
              margin: "0 auto 48px",
            }}
          >
            Full-service design and development solutions tailored to your unique needs. We partner
            with you from concept to launch and beyond.
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
              Start a Project
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
              See Pricing
            </button>
          </div>
        </div>
      </section>

      {/* ---------- INTERACTIVE SERVICE TABS ---------- */}
      <section
        className="fade-up"
        style={{
          padding: "100px 24px 140px",
        }}
      >
        <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
          {/* Service Navigation */}
          <div
            style={{
              display: "flex",
              gap: 16,
              marginBottom: 60,
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            {services.map((service, i) => (
              <button
                key={i}
                onClick={() => setActiveService(i)}
                className="hover-lift"
                style={{
                  padding: "16px 36px",
                  borderRadius: 12,
                  fontSize: 16,
                  fontWeight: 700,
                  border: "2px solid",
                  borderColor: activeService === i ? "var(--color-accent)" : "var(--color-border)",
                  background: activeService === i ? "var(--color-accent)" : "var(--color-surface)",
                  color: activeService === i ? "var(--color-surface)" : "var(--color-text)",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                }}
              >
                {service.title}
              </button>
            ))}
          </div>

          {/* Service Content */}
          <div
            className="bg-surface shadow-accent-hover"
            style={{
              borderRadius: 24,
              padding: "80px 60px",
              border: "2px solid var(--color-border)",
            }}
          >
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 60,
                alignItems: "start",
              }}
            >
              {/* Left Column */}
              <div>
                <div
                  className="text-accent"
                  style={{
                    fontSize: 14,
                    fontWeight: 700,
                    letterSpacing: 2,
                    textTransform: "uppercase",
                    marginBottom: 16,
                  }}
                >
                  Service {String(activeService + 1).padStart(2, "0")}
                </div>
                <h2
                  className="text-main"
                  style={{
                    fontWeight: 900,
                    fontSize: 48,
                    marginBottom: 16,
                    lineHeight: 1.1,
                  }}
                >
                  {services[activeService].title}
                </h2>
                <p
                  className="text-accent"
                  style={{
                    fontSize: 20,
                    fontWeight: 600,
                    marginBottom: 28,
                  }}
                >
                  {services[activeService].tagline}
                </p>
                <p
                  className="text-muted"
                  style={{
                    fontSize: 18,
                    lineHeight: 1.8,
                    marginBottom: 40,
                  }}
                >
                  {services[activeService].description}
                </p>

                {/* Timeline Badge */}
                <div
                  className="bg-surface-alt"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 12,
                    padding: "12px 24px",
                    borderRadius: 10,
                  }}
                >
                  <div style={{ fontSize: 20 }}>⏱️</div>
                  <div>
                    <div className="text-muted" style={{ fontSize: 12, fontWeight: 600 }}>
                      Typical Timeline
                    </div>
                    <div className="text-main" style={{ fontSize: 16, fontWeight: 700 }}>
                      {services[activeService].timeline}
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column */}
              <div>
                {/* What's Included */}
                <div style={{ marginBottom: 48 }}>
                  <h3
                    className="text-main"
                    style={{
                      fontWeight: 800,
                      fontSize: 22,
                      marginBottom: 24,
                    }}
                  >
                    What's Included
                  </h3>
                  <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                    {services[activeService].offerings.map((offering, i) => (
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
                            width: 24,
                            height: 24,
                            borderRadius: "50%",
                            flexShrink: 0,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontSize: 12,
                            fontWeight: 700,
                          }}
                        >
                          ✓
                        </div>
                        <div className="text-main" style={{ fontSize: 16, fontWeight: 500 }}>
                          {offering}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Deliverables */}
                <div>
                  <h3
                    className="text-main"
                    style={{
                      fontWeight: 800,
                      fontSize: 22,
                      marginBottom: 24,
                    }}
                  >
                    Deliverables
                  </h3>
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "repeat(2, 1fr)",
                      gap: 12,
                    }}
                  >
                    {services[activeService].deliverables.map((item, i) => (
                      <div
                        key={i}
                        className="bg-surface-alt"
                        style={{
                          padding: "12px 16px",
                          borderRadius: 8,
                          fontSize: 14,
                          fontWeight: 600,
                          color: "var(--color-text-muted)",
                          textAlign: "center",
                        }}
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- ADD-ON SERVICES ---------- */}
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
              Add-On Services
            </h2>
            <p className="text-muted" style={{ fontSize: 18 }}>
              Enhance your project with these specialized offerings
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
                icon: "🔍",
                title: "SEO & Analytics",
                desc: "Optimize for search engines and track user behavior with comprehensive analytics setup.",
              },
              {
                icon: "🎯",
                title: "Marketing Integration",
                desc: "Connect with email platforms, CRMs, and marketing automation tools.",
              },
              {
                icon: "🛡️",
                title: "Security Audit",
                desc: "Comprehensive security review and implementation of best practices.",
              },
              {
                icon: "⚡",
                title: "Performance Tuning",
                desc: "Advanced optimization for lightning-fast load times and smooth interactions.",
              },
              {
                icon: "📊",
                title: "A/B Testing Setup",
                desc: "Implement testing frameworks to optimize conversion and user engagement.",
              },
              {
                icon: "🎓",
                title: "Team Training",
                desc: "Onboarding sessions to help your team manage and maintain the product.",
              },
            ].map((addon) => (
              <div
                key={addon.title}
                className="bg-surface hover-lift shadow-accent-hover"
                style={{
                  padding: "32px 28px",
                  borderRadius: 20,
                  border: "2px solid var(--color-border)",
                }}
              >
                <div style={{ fontSize: 40, marginBottom: 16 }}>{addon.icon}</div>
                <h3
                  className="text-main"
                  style={{
                    fontWeight: 700,
                    fontSize: 18,
                    marginBottom: 12,
                  }}
                >
                  {addon.title}
                </h3>
                <p
                  className="text-muted"
                  style={{
                    fontSize: 14,
                    lineHeight: 1.6,
                  }}
                >
                  {addon.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- TECHNOLOGY STACK ---------- */}
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
              Technologies We Use
            </h2>
            <p className="text-muted" style={{ fontSize: 18 }}>
              Modern tools and frameworks for exceptional results
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(6, 1fr)",
              gap: 24,
            }}
          >
            {[
              "React",
              "Next.js",
              "TypeScript",
              "Node.js",
              "Tailwind",
              "Figma",
              "Swift",
              "Kotlin",
              "PostgreSQL",
              "MongoDB",
              "AWS",
              "Vercel",
            ].map((tech) => (
              <div
                key={tech}
                className="bg-surface hover-lift shadow-accent-hover"
                style={{
                  padding: "24px 16px",
                  borderRadius: 12,
                  border: "2px solid var(--color-border)",
                  textAlign: "center",
                }}
              >
                <div
                  className="text-main"
                  style={{
                    fontWeight: 700,
                    fontSize: 14,
                  }}
                >
                  {tech}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- CTA ---------- */}
      <section
        className="bg-gradient-accent fade-up"
        style={{
          padding: "120px 24px",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <h2
            style={{
              fontWeight: 900,
              fontSize: 48,
              marginBottom: 24,
            }}
          >
            Let's Build Something Amazing
          </h2>
          <p
            style={{
              fontSize: 20,
              lineHeight: 1.7,
              marginBottom: 40,
              opacity: 0.95,
            }}
          >
            Ready to transform your vision into reality? Schedule a free consultation to discuss
            your project.
          </p>
          <button
            className="hover-lift"
            style={{
              padding: "20px 56px",
              borderRadius: 12,
              fontSize: 18,
              fontWeight: 700,
              background: "var(--color-surface)",
              color: "var(--color-accent)",
              border: "none",
              cursor: "pointer",
            }}
          >
            Schedule Consultation
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
          div[style*="gridTemplateColumns: 1fr 1fr"],
          div[style*="gridTemplateColumns: repeat(3, 1fr)"],
          div[style*="gridTemplateColumns: repeat(6, 1fr)"] {
            grid-template-columns: 1fr !important;
            gap: 24px !important;
          }
          div[style*="gridTemplateColumns: repeat(2, 1fr)"] {
            grid-template-columns: 1fr !important;
          }
          div[style*="padding: 80px 60px"] {
            padding: 40px 28px !important;
          }
        }
      `}</style>
    </div>
  );
}
