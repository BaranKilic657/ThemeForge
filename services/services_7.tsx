"use client";

export default function Services7() {
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
          padding: "160px 24px 120px",
        }}
      >
        <div style={{ maxWidth: "1000px", margin: "0 auto", textAlign: "center" }}>
          <h1
            className="text-main"
            style={{
              fontWeight: 900,
              fontSize: "clamp(52px, 8vw, 88px)",
              lineHeight: 1.1,
              marginBottom: 32,
              letterSpacing: "-0.02em",
            }}
          >
            Services That Scale
          </h1>
          <p
            className="text-muted"
            style={{
              fontSize: 22,
              lineHeight: 1.8,
              maxWidth: 720,
              margin: "0 auto",
            }}
          >
            We partner with ambitious companies to design, build, and scale digital products that
            create lasting value.
          </p>
        </div>
      </section>

      {/* ---------- LARGE FEATURE BLOCKS ---------- */}
      <section
        className="fade-up"
        style={{
          padding: "80px 24px",
        }}
      >
        <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 40 }}>
            {[
              {
                number: "01",
                title: "Product Strategy",
                description:
                  "We start by understanding your business goals, target market, and competitive landscape. Our strategic approach ensures every decision is backed by research and aligned with your vision.",
                offerings: [
                  "Market & Competitor Analysis",
                  "User Research & Personas",
                  "Product Roadmapping",
                  "Feature Prioritization",
                  "Business Model Validation",
                  "Go-to-Market Strategy",
                ],
              },
              {
                number: "02",
                title: "Design & Experience",
                description:
                  "Beautiful interfaces that prioritize user needs. We create cohesive design systems that scale with your product and ensure consistency across all touchpoints.",
                offerings: [
                  "UX Research & Testing",
                  "Information Architecture",
                  "Wireframing & Prototyping",
                  "Visual Design",
                  "Design Systems",
                  "Accessibility Standards",
                ],
              },
              {
                number: "03",
                title: "Engineering & Development",
                description:
                  "Robust, scalable solutions built with modern technologies. Our engineering team follows best practices to deliver clean, maintainable code that stands the test of time.",
                offerings: [
                  "Full-Stack Development",
                  "Mobile App Development",
                  "API & Backend Systems",
                  "Database Architecture",
                  "Cloud Infrastructure",
                  "Performance Optimization",
                ],
              },
              {
                number: "04",
                title: "Growth & Optimization",
                description:
                  "Launch is just the beginning. We help you grow through data-driven optimization, marketing strategies, and continuous improvement based on user feedback.",
                offerings: [
                  "SEO & Performance",
                  "Conversion Optimization",
                  "Analytics & Tracking",
                  "A/B Testing",
                  "Content Strategy",
                  "Marketing Automation",
                ],
              },
            ].map((service) => (
              <div
                key={service.number}
                className="bg-surface hover-lift shadow-accent-hover"
                style={{
                  padding: "64px 56px",
                  borderRadius: 24,
                  border: "2px solid var(--color-border)",
                  display: "grid",
                  gridTemplateColumns: "140px 1fr 1fr",
                  gap: 56,
                  alignItems: "start",
                }}
              >
                {/* Number */}
                <div>
                  <div
                    className="text-accent"
                    style={{
                      fontSize: 72,
                      fontWeight: 900,
                      lineHeight: 1,
                      opacity: 0.3,
                    }}
                  >
                    {service.number}
                  </div>
                </div>

                {/* Content */}
                <div>
                  <h3
                    className="text-main"
                    style={{
                      fontWeight: 800,
                      fontSize: 36,
                      marginBottom: 20,
                    }}
                  >
                    {service.title}
                  </h3>
                  <p
                    className="text-muted"
                    style={{
                      fontSize: 17,
                      lineHeight: 1.8,
                    }}
                  >
                    {service.description}
                  </p>
                </div>

                {/* Offerings */}
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(2, 1fr)",
                    gap: 16,
                  }}
                >
                  {service.offerings.map((offering, i) => (
                    <div
                      key={i}
                      className="bg-surface-alt"
                      style={{
                        padding: "16px 20px",
                        borderRadius: 10,
                        fontSize: 14,
                        fontWeight: 600,
                        color: "var(--color-text-muted)",
                      }}
                    >
                      {offering}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- APPROACH SECTION ---------- */}
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
              Our Approach
            </h2>
            <p className="text-muted" style={{ fontSize: 19 }}>
              How we work with clients to deliver exceptional results
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 40,
            }}
          >
            {[
              {
                icon: "🎯",
                title: "Goal-Oriented",
                description:
                  "Every project starts with clear, measurable objectives. We align our work with your business goals to ensure meaningful impact.",
              },
              {
                icon: "🔄",
                title: "Iterative Process",
                description:
                  "We work in sprints, delivering value early and often. Regular feedback loops ensure we stay aligned with your vision.",
              },
              {
                icon: "🤝",
                title: "Collaborative",
                description:
                  "Your team becomes our team. We believe the best results come from close collaboration and open communication.",
              },
              {
                icon: "📊",
                title: "Data-Driven",
                description:
                  "Decisions backed by data, not assumptions. We use analytics and user research to inform every choice.",
              },
              {
                icon: "⚡",
                title: "Quality First",
                description:
                  "We don't cut corners. Every line of code, every design decision is crafted with attention to detail.",
              },
              {
                icon: "🚀",
                title: "Long-Term Partnership",
                description:
                  "We're invested in your success beyond launch. Our support ensures your product continues to grow.",
              },
            ].map((approach, i) => (
              <div
                key={i}
                className="bg-surface"
                style={{
                  padding: "40px 36px",
                  borderRadius: 20,
                  border: "2px solid var(--color-border)",
                }}
              >
                <div style={{ fontSize: 52, marginBottom: 20 }}>{approach.icon}</div>
                <h4
                  className="text-main"
                  style={{
                    fontWeight: 700,
                    fontSize: 22,
                    marginBottom: 12,
                  }}
                >
                  {approach.title}
                </h4>
                <p
                  className="text-muted"
                  style={{
                    fontSize: 15,
                    lineHeight: 1.7,
                  }}
                >
                  {approach.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- INDUSTRIES ---------- */}
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
              Industries We Serve
            </h2>
            <p className="text-muted" style={{ fontSize: 19 }}>
              Deep expertise across diverse sectors
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(5, 1fr)",
              gap: 24,
            }}
          >
            {[
              { icon: "🏥", name: "Healthcare" },
              { icon: "💰", name: "FinTech" },
              { icon: "🛒", name: "E-Commerce" },
              { icon: "🎓", name: "EdTech" },
              { icon: "🏠", name: "Real Estate" },
              { icon: "🚗", name: "Automotive" },
              { icon: "✈️", name: "Travel" },
              { icon: "🍔", name: "Food & Beverage" },
              { icon: "🎮", name: "Entertainment" },
              { icon: "⚡", name: "Energy" },
            ].map((industry, i) => (
              <div
                key={i}
                className="bg-surface hover-lift shadow-accent-hover"
                style={{
                  padding: "32px 24px",
                  borderRadius: 16,
                  border: "2px solid var(--color-border)",
                  textAlign: "center",
                }}
              >
                <div style={{ fontSize: 44, marginBottom: 12 }}>{industry.icon}</div>
                <div
                  className="text-main"
                  style={{
                    fontSize: 14,
                    fontWeight: 700,
                  }}
                >
                  {industry.name}
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
          padding: "100px 24px",
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
              fontSize: 19,
              marginBottom: 40,
              opacity: 0.95,
              lineHeight: 1.7,
            }}
          >
            Schedule a free consultation to discuss your project and explore how we can help you
            achieve your goals.
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
            Book a Call
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
          div[style*="gridTemplateColumns: 140px 1fr 1fr"],
          div[style*="gridTemplateColumns: repeat(3, 1fr)"],
          div[style*="gridTemplateColumns: repeat(5, 1fr)"] {
            grid-template-columns: 1fr !important;
            gap: 24px !important;
          }
          div[style*="gridTemplateColumns: repeat(2, 1fr)"] {
            grid-template-columns: 1fr !important;
          }
          div[style*="padding: 64px 56px"],
          div[style*="padding: 40px 36px"] {
            padding: 32px 24px !important;
          }
        }
      `}</style>
    </div>
  );
}
