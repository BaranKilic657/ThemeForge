"use client";

export default function Services3() {
  return (
    <div
      style={{
        minHeight: "100vh",
        paddingTop: 80,
      }}
    >
      {/* ---------- SPLIT HERO ---------- */}
      <section
        className="fade-up"
        style={{
          padding: "100px 24px",
        }}
      >
        <div
          style={{
            maxWidth: "1400px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 60,
            alignItems: "center",
          }}
        >
          <div>
            <h1
              className="text-main"
              style={{
                fontWeight: 900,
                fontSize: "clamp(44px, 6vw, 68px)",
                lineHeight: 1.1,
                marginBottom: 28,
              }}
            >
              Expertise Across{" "}
              <span className="text-highlight">Every Stage</span>
            </h1>
            <p
              className="text-muted"
              style={{
                fontSize: 19,
                lineHeight: 1.8,
              }}
            >
              From initial strategy to final deployment, we provide end-to-end services that ensure
              your digital product succeeds in the market.
            </p>
          </div>
          <div
            className="bg-gradient-accent"
            style={{
              padding: "60px 48px",
              borderRadius: 24,
              textAlign: "center",
            }}
          >
            <div style={{ fontSize: 64, marginBottom: 20 }}>🚀</div>
            <h3 style={{ fontWeight: 800, fontSize: 28, marginBottom: 16 }}>
              Full-Service Solutions
            </h3>
            <p style={{ fontSize: 17, opacity: 0.95, lineHeight: 1.6 }}>
              We handle everything so you can focus on growing your business while we build your
              digital presence.
            </p>
          </div>
        </div>
      </section>

      {/* ---------- PRICING TIERS ---------- */}
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
              Service Packages
            </h2>
            <p className="text-muted" style={{ fontSize: 18 }}>
              Choose the level of support that fits your needs
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
                name: "Starter",
                tagline: "Perfect for MVPs and small projects",
                price: "Starting at $15K",
                features: [
                  "Up to 5 key pages",
                  "Responsive design",
                  "Basic SEO setup",
                  "2 rounds of revisions",
                  "30 days support",
                ],
                highlighted: false,
              },
              {
                name: "Professional",
                tagline: "Ideal for growing businesses",
                price: "Starting at $35K",
                features: [
                  "Up to 15 pages",
                  "Advanced animations",
                  "CMS integration",
                  "Design system",
                  "Unlimited revisions",
                  "90 days support",
                  "Performance optimization",
                ],
                highlighted: true,
              },
              {
                name: "Enterprise",
                tagline: "For complex, large-scale projects",
                price: "Custom Pricing",
                features: [
                  "Unlimited pages",
                  "Custom development",
                  "API integrations",
                  "Dedicated team",
                  "Ongoing maintenance",
                  "Priority support",
                  "Training included",
                ],
                highlighted: false,
              },
            ].map((tier) => (
              <div
                key={tier.name}
                className={`${tier.highlighted ? "bg-gradient-accent" : "bg-surface"} hover-lift shadow-accent-hover`}
                style={{
                  padding: tier.highlighted ? "48px 40px" : "40px 32px",
                  borderRadius: 24,
                  border: tier.highlighted ? "none" : "2px solid var(--color-border)",
                  position: "relative",
                  transform: tier.highlighted ? "scale(1.05)" : "scale(1)",
                }}
              >
                {tier.highlighted && (
                  <div
                    style={{
                      position: "absolute",
                      top: -12,
                      right: 24,
                      background: "var(--color-surface)",
                      color: "var(--color-accent)",
                      padding: "6px 16px",
                      borderRadius: 20,
                      fontSize: 12,
                      fontWeight: 700,
                      textTransform: "uppercase",
                      letterSpacing: 1,
                    }}
                  >
                    Most Popular
                  </div>
                )}
                <h3
                  style={{
                    fontWeight: 800,
                    fontSize: 28,
                    marginBottom: 8,
                    color: tier.highlighted ? "var(--color-surface)" : "var(--color-text)",
                  }}
                >
                  {tier.name}
                </h3>
                <p
                  style={{
                    fontSize: 14,
                    marginBottom: 24,
                    opacity: 0.9,
                    color: tier.highlighted ? "var(--color-surface)" : "var(--color-text-muted)",
                  }}
                >
                  {tier.tagline}
                </p>
                <div
                  style={{
                    fontSize: 40,
                    fontWeight: 900,
                    marginBottom: 32,
                    color: tier.highlighted ? "var(--color-surface)" : "var(--color-accent)",
                  }}
                >
                  {tier.price}
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 16, marginBottom: 32 }}>
                  {tier.features.map((feature, i) => (
                    <div
                      key={i}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 12,
                        color: tier.highlighted ? "var(--color-surface)" : "var(--color-text)",
                      }}
                    >
                      <div
                        style={{
                          fontSize: 16,
                          opacity: 0.9,
                        }}
                      >
                        ✓
                      </div>
                      <div style={{ fontSize: 15, fontWeight: 500 }}>{feature}</div>
                    </div>
                  ))}
                </div>
                <button
                  className="hover-lift"
                  style={{
                    width: "100%",
                    padding: "16px 32px",
                    borderRadius: 12,
                    fontSize: 16,
                    fontWeight: 700,
                    background: tier.highlighted ? "var(--color-surface)" : "var(--color-accent)",
                    color: tier.highlighted ? "var(--color-accent)" : "var(--color-surface)",
                    border: "none",
                    cursor: "pointer",
                  }}
                >
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- SERVICE CATEGORIES ---------- */}
      <section
        className="fade-up"
        style={{
          padding: "140px 24px",
        }}
      >
        <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
          <div style={{ marginBottom: 80 }}>
            <h2
              className="text-main"
              style={{
                fontWeight: 800,
                fontSize: 42,
                marginBottom: 20,
              }}
            >
              Our Capabilities
            </h2>
            <p className="text-muted" style={{ fontSize: 18 }}>
              Comprehensive solutions across all digital touchpoints
            </p>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 40 }}>
            {[
              {
                category: "Strategy & Research",
                icon: "🎯",
                services: [
                  "Market Analysis",
                  "Competitor Research",
                  "User Personas",
                  "Customer Journey Mapping",
                  "Product Roadmapping",
                  "Content Strategy",
                ],
              },
              {
                category: "Design & Creative",
                icon: "🎨",
                services: [
                  "UI/UX Design",
                  "Brand Identity",
                  "Design Systems",
                  "Motion Graphics",
                  "Illustration",
                  "3D Design",
                ],
              },
              {
                category: "Development & Engineering",
                icon: "⚙️",
                services: [
                  "Web Development",
                  "Mobile Apps",
                  "Backend Systems",
                  "API Development",
                  "Database Design",
                  "DevOps",
                ],
              },
              {
                category: "Growth & Marketing",
                icon: "📈",
                services: [
                  "SEO Optimization",
                  "Content Marketing",
                  "Email Campaigns",
                  "Social Media",
                  "Conversion Optimization",
                  "Analytics Setup",
                ],
              },
            ].map((item) => (
              <div
                key={item.category}
                className="bg-surface hover-lift shadow-accent-hover"
                style={{
                  padding: "48px 40px",
                  borderRadius: 24,
                  border: "2px solid var(--color-border)",
                  display: "grid",
                  gridTemplateColumns: "300px 1fr",
                  gap: 48,
                  alignItems: "center",
                }}
              >
                <div>
                  <div style={{ fontSize: 56, marginBottom: 20 }}>{item.icon}</div>
                  <h3
                    className="text-main"
                    style={{
                      fontWeight: 800,
                      fontSize: 28,
                    }}
                  >
                    {item.category}
                  </h3>
                </div>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(3, 1fr)",
                    gap: 16,
                  }}
                >
                  {item.services.map((service) => (
                    <div
                      key={service}
                      className="bg-surface-alt"
                      style={{
                        padding: "16px 20px",
                        borderRadius: 10,
                        fontSize: 15,
                        fontWeight: 600,
                        color: "var(--color-text-muted)",
                        textAlign: "center",
                      }}
                    >
                      {service}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- CASE STUDY TEASER ---------- */}
      <section
        className="bg-surface-alt fade-up"
        style={{
          padding: "140px 24px",
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div
            className="bg-gradient-secondary"
            style={{
              padding: "80px 60px",
              borderRadius: 32,
              textAlign: "center",
            }}
          >
            <div style={{ fontSize: 72, marginBottom: 24 }}>🏆</div>
            <h2 style={{ fontWeight: 900, fontSize: 42, marginBottom: 20 }}>
              See Our Work in Action
            </h2>
            <p style={{ fontSize: 19, opacity: 0.95, marginBottom: 40, lineHeight: 1.6 }}>
              We've helped over 100+ companies transform their digital presence. Explore our case
              studies to see the results we deliver.
            </p>
            <button
              className="hover-lift"
              style={{
                padding: "18px 48px",
                borderRadius: 12,
                fontSize: 17,
                fontWeight: 700,
                background: "var(--color-surface)",
                color: "var(--color-accent)",
                border: "none",
                cursor: "pointer",
              }}
            >
              View Case Studies
            </button>
          </div>
        </div>
      </section>

      {/* ---------- FAQ ---------- */}
      <section
        className="fade-up"
        style={{
          padding: "140px 24px",
        }}
      >
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 80 }}>
            <h2
              className="text-main"
              style={{
                fontWeight: 800,
                fontSize: 42,
                marginBottom: 20,
              }}
            >
              Common Questions
            </h2>
            <p className="text-muted" style={{ fontSize: 18 }}>
              Everything you need to know about working with us
            </p>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            {[
              {
                q: "How long does a typical project take?",
                a: "Project timelines vary based on scope, but most projects take 8-16 weeks from kickoff to launch.",
              },
              {
                q: "Do you offer ongoing support after launch?",
                a: "Yes! We provide maintenance packages and can continue to iterate and improve your product post-launch.",
              },
              {
                q: "Can you work with our existing design or development team?",
                a: "Absolutely. We're experienced in collaborating with in-house teams and can integrate seamlessly into your workflow.",
              },
              {
                q: "What is your payment structure?",
                a: "We typically work with milestone-based payments: 50% upfront, 25% at mid-project, and 25% upon completion.",
              },
            ].map((faq, i) => (
              <div
                key={i}
                className="bg-surface hover-lift shadow-accent-hover"
                style={{
                  padding: "32px 36px",
                  borderRadius: 20,
                  border: "2px solid var(--color-border)",
                }}
              >
                <h4
                  className="text-main"
                  style={{
                    fontWeight: 700,
                    fontSize: 18,
                    marginBottom: 12,
                  }}
                >
                  {faq.q}
                </h4>
                <p
                  className="text-muted"
                  style={{
                    fontSize: 16,
                    lineHeight: 1.7,
                  }}
                >
                  {faq.a}
                </p>
              </div>
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
          div[style*="gridTemplateColumns: 1fr 1fr"],
          div[style*="gridTemplateColumns: repeat(3, 1fr)"],
          div[style*="gridTemplateColumns: 300px 1fr"] {
            grid-template-columns: 1fr !important;
            gap: 24px !important;
          }
          div[style*="transform: scale(1.05)"] {
            transform: scale(1) !important;
          }
          div[style*="padding: 60px 48px"],
          div[style*="padding: 80px 60px"],
          div[style*="padding: 48px 40px"] {
            padding: 40px 28px !important;
          }
        }
      `}</style>
    </div>
  );
}
