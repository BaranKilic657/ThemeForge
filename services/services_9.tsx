"use client";

export default function Services9() {
  return (
    <div
      style={{
        minHeight: "100vh",
        paddingTop: 80,
      }}
    >
      {/* ---------- SPLIT SCREEN HERO ---------- */}
      <section
        style={{
          height: "90vh",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
        }}
      >
        {/* Left side */}
        <div
          className="bg-gradient-accent"
          style={{
            padding: "80px 60px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <h1
            style={{
              fontWeight: 900,
              fontSize: "clamp(42px, 5vw, 64px)",
              lineHeight: 1.1,
              marginBottom: 32,
            }}
          >
            Digital Services for Modern Businesses
          </h1>
          <p
            style={{
              fontSize: 19,
              lineHeight: 1.8,
              marginBottom: 40,
              opacity: 0.95,
            }}
          >
            We combine strategic thinking, beautiful design, and robust technology to create digital
            experiences that drive growth and delight users.
          </p>
          <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
            <button
              className="hover-lift"
              style={{
                padding: "16px 40px",
                borderRadius: 12,
                fontSize: 16,
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
                padding: "16px 40px",
                borderRadius: 12,
                fontSize: 16,
                fontWeight: 700,
                background: "transparent",
                color: "var(--color-surface)",
                border: "2px solid var(--color-surface)",
                cursor: "pointer",
              }}
            >
              View Work
            </button>
          </div>
        </div>

        {/* Right side */}
        <div
          className="bg-surface-alt"
          style={{
            padding: "80px 60px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: 32,
          }}
        >
          {[
            { number: "300+", label: "Projects Delivered" },
            { number: "15+", label: "Years Experience" },
            { number: "97%", label: "Client Satisfaction" },
            { number: "24/7", label: "Support Available" },
          ].map((stat, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: 24 }}>
              <div
                className="bg-gradient-accent"
                style={{
                  width: 70,
                  height: 70,
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 24,
                  fontWeight: 900,
                  flexShrink: 0,
                }}
              >
                {stat.number}
              </div>
              <div
                className="text-main"
                style={{
                  fontSize: 20,
                  fontWeight: 700,
                }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ---------- SERVICES GRID ---------- */}
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
                fontSize: 46,
                marginBottom: 20,
              }}
            >
              Core Services
            </h2>
            <p className="text-muted" style={{ fontSize: 19 }}>
              Everything you need under one roof
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
              {
                icon: "🎨",
                title: "Design",
                items: ["Brand Identity", "UI/UX", "Design Systems", "Illustrations"],
              },
              {
                icon: "💻",
                title: "Development",
                items: ["Web Apps", "Mobile Apps", "APIs", "E-commerce"],
              },
              {
                icon: "📈",
                title: "Marketing",
                items: ["SEO/SEM", "Content", "Social Media", "Email"],
              },
              {
                icon: "🎯",
                title: "Strategy",
                items: ["Consulting", "Research", "Roadmapping", "Analytics"],
              },
              {
                icon: "☁️",
                title: "Cloud",
                items: ["Infrastructure", "DevOps", "Hosting", "Security"],
              },
              {
                icon: "🔧",
                title: "Support",
                items: ["Maintenance", "Updates", "Monitoring", "Training"],
              },
              {
                icon: "📊",
                title: "Data",
                items: ["Analytics", "BI Tools", "Reporting", "Insights"],
              },
              {
                icon: "🚀",
                title: "Growth",
                items: ["CRO", "A/B Testing", "Automation", "Scaling"],
              },
            ].map((service, i) => (
              <div
                key={i}
                className="bg-surface hover-lift shadow-accent-hover"
                style={{
                  padding: "36px 32px",
                  borderRadius: 20,
                  border: "2px solid var(--color-border)",
                }}
              >
                <div style={{ fontSize: 52, marginBottom: 20 }}>{service.icon}</div>
                <h3
                  className="text-main"
                  style={{
                    fontWeight: 800,
                    fontSize: 20,
                    marginBottom: 20,
                  }}
                >
                  {service.title}
                </h3>
                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  {service.items.map((item, idx) => (
                    <div
                      key={idx}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 8,
                        fontSize: 14,
                      }}
                    >
                      <div
                        className="bg-gradient-accent"
                        style={{
                          width: 4,
                          height: 4,
                          borderRadius: "50%",
                        }}
                      />
                      <span className="text-main" style={{ fontWeight: 500 }}>
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

      {/* ---------- TWO-COLUMN BENEFITS ---------- */}
      <section
        className="bg-surface-alt fade-up"
        style={{
          padding: "140px 24px",
        }}
      >
        <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 80,
              alignItems: "center",
            }}
          >
            <div>
              <h2
                className="text-main"
                style={{
                  fontWeight: 800,
                  fontSize: 46,
                  marginBottom: 28,
                }}
              >
                Why Choose Us
              </h2>
              <p
                className="text-muted"
                style={{
                  fontSize: 18,
                  lineHeight: 1.8,
                }}
              >
                We're not just another agency. We're a team of passionate experts who care about your
                success as much as you do. Our track record speaks for itself—hundreds of successful
                projects and happy clients.
              </p>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
              {[
                {
                  title: "Expert Team",
                  description: "Top-tier designers, developers, and strategists with years of experience.",
                },
                {
                  title: "Proven Process",
                  description: "Battle-tested methodologies that consistently deliver results.",
                },
                {
                  title: "Transparent Communication",
                  description: "Regular updates, clear timelines, and honest conversations.",
                },
                {
                  title: "Long-Term Partnership",
                  description: "We're invested in your success beyond the initial launch.",
                },
              ].map((benefit, i) => (
                <div
                  key={i}
                  className="bg-surface"
                  style={{
                    padding: "28px 32px",
                    borderRadius: 16,
                    border: "2px solid var(--color-border)",
                  }}
                >
                  <h4
                    className="text-main"
                    style={{
                      fontWeight: 700,
                      fontSize: 18,
                      marginBottom: 8,
                    }}
                  >
                    {benefit.title}
                  </h4>
                  <p
                    className="text-muted"
                    style={{
                      fontSize: 15,
                      lineHeight: 1.6,
                    }}
                  >
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ---------- CLIENT LOGOS ---------- */}
      <section
        className="fade-up"
        style={{
          padding: "100px 24px",
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto", textAlign: "center" }}>
          <p
            className="text-muted"
            style={{
              fontSize: 15,
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: 1.5,
              marginBottom: 48,
            }}
          >
            Trusted by Leading Companies
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(6, 1fr)",
              gap: 40,
              alignItems: "center",
            }}
          >
            {["Company A", "Company B", "Company C", "Company D", "Company E", "Company F"].map(
              (company, i) => (
                <div
                  key={i}
                  className="bg-surface"
                  style={{
                    padding: "24px 20px",
                    borderRadius: 12,
                    border: "2px solid var(--color-border)",
                    fontSize: 14,
                    fontWeight: 700,
                    color: "var(--color-text-muted)",
                  }}
                >
                  {company}
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* ---------- CTA BANNER ---------- */}
      <section
        className="bg-gradient-secondary fade-up"
        style={{
          padding: "100px 24px",
        }}
      >
        <div
          style={{
            maxWidth: "900px",
            margin: "0 auto",
            textAlign: "center",
          }}
        >
          <div style={{ fontSize: 64, marginBottom: 28 }}>✨</div>
          <h2
            style={{
              fontWeight: 900,
              fontSize: 48,
              marginBottom: 24,
            }}
          >
            Ready to Get Started?
          </h2>
          <p
            style={{
              fontSize: 19,
              lineHeight: 1.7,
              marginBottom: 40,
              opacity: 0.95,
            }}
          >
            Let's bring your vision to life. Schedule a free consultation to discuss your project and
            see how we can help you succeed.
          </p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <button
              className="hover-lift"
              style={{
                padding: "18px 44px",
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
            <button
              className="hover-lift"
              style={{
                padding: "18px 44px",
                borderRadius: 12,
                fontSize: 17,
                fontWeight: 700,
                background: "transparent",
                color: "var(--color-surface)",
                border: "2px solid var(--color-surface)",
                cursor: "pointer",
              }}
            >
              View Pricing
            </button>
          </div>
        </div>
      </section>

      {/* ---------- MOBILE CSS ---------- */}
      <style jsx>{`
        @media (max-width: 768px) {
          section[style*="height: 90vh"] {
            height: auto !important;
            grid-template-columns: 1fr !important;
          }
          div[style*="padding: 80px 60px"] {
            padding: 60px 24px !important;
          }
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
            font-size: 20px !important;
          }
          div[style*="gridTemplateColumns: repeat(4, 1fr)"],
          div[style*="gridTemplateColumns: repeat(6, 1fr)"],
          div[style*="gridTemplateColumns: 1fr 1fr"] {
            grid-template-columns: 1fr !important;
            gap: 24px !important;
          }
          div[style*="padding: 36px 32px"],
          div[style*="padding: 28px 32px"] {
            padding: 24px 20px !important;
          }
        }
      `}</style>
    </div>
  );
}
