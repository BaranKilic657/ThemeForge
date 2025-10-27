"use client";

export default function Services5() {
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
          padding: "120px 24px",
        }}
      >
        <div
          style={{
            maxWidth: "1400px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1.2fr 1fr",
            gap: 80,
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
              Transforming Ideas Into{" "}
              <span className="text-highlight">Digital Excellence</span>
            </h1>
            <p
              className="text-muted"
              style={{
                fontSize: 19,
                lineHeight: 1.8,
                marginBottom: 40,
              }}
            >
              We partner with ambitious companies to design and build digital products that drive
              growth, delight users, and stand the test of time.
            </p>
            <button
              className="hover-lift"
              style={{
                padding: "18px 44px",
                borderRadius: 12,
                fontSize: 17,
                fontWeight: 700,
                background: "var(--color-accent)",
                color: "var(--color-surface)",
                border: "none",
                cursor: "pointer",
              }}
            >
              Let's Talk
            </button>
          </div>

          <div
            className="bg-gradient-accent"
            style={{
              padding: "48px 40px",
              borderRadius: 24,
            }}
          >
            <div style={{ fontSize: 56, marginBottom: 20 }}>📊</div>
            <h3 style={{ fontWeight: 800, fontSize: 28, marginBottom: 20 }}>
              Proven Track Record
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
              {[
                { value: "250+", label: "Projects Delivered" },
                { value: "98%", label: "Client Satisfaction" },
                { value: "12yrs", label: "Industry Experience" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div style={{ fontSize: 36, fontWeight: 900, marginBottom: 4 }}>{stat.value}</div>
                  <div style={{ fontSize: 15, opacity: 0.9 }}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ---------- SERVICES GRID ---------- */}
      <section
        className="bg-surface-alt fade-up"
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
              What We Offer
            </h2>
            <p className="text-muted" style={{ fontSize: 18 }}>
              Comprehensive services to bring your vision to life
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: 32,
            }}
          >
            {[
              {
                icon: "🎨",
                title: "Product Design",
                description:
                  "Beautiful, intuitive interfaces crafted with precision. We focus on user experience, accessibility, and brand consistency.",
                features: ["UX Research", "Wireframing", "UI Design", "Prototyping", "Design Systems"],
              },
              {
                icon: "💻",
                title: "Web Development",
                description:
                  "Fast, scalable, and secure web applications built with modern frameworks and best practices.",
                features: ["React & Next.js", "Backend APIs", "Database Design", "Performance Optimization", "DevOps"],
              },
              {
                icon: "📱",
                title: "Mobile Applications",
                description:
                  "Native and cross-platform mobile apps that provide seamless experiences on iOS and Android.",
                features: ["React Native", "iOS/Android", "App Store Optimization", "Push Notifications", "Analytics"],
              },
              {
                icon: "🚀",
                title: "Strategy & Consulting",
                description:
                  "Data-driven strategies to help you make informed decisions and achieve your business goals.",
                features: ["Product Strategy", "Market Research", "Tech Consulting", "Growth Planning", "Workshops"],
              },
              {
                icon: "🔧",
                title: "Maintenance & Support",
                description:
                  "Ongoing support to keep your product running smoothly, secure, and up-to-date with the latest technologies.",
                features: ["Bug Fixes", "Security Updates", "Feature Enhancements", "Monitoring", "24/7 Support"],
              },
              {
                icon: "📈",
                title: "Digital Marketing",
                description:
                  "Drive traffic, conversions, and revenue with targeted marketing strategies and data-driven campaigns.",
                features: ["SEO & SEM", "Content Strategy", "Social Media", "Email Marketing", "Analytics & Reporting"],
              },
            ].map((service) => (
              <div
                key={service.title}
                className="bg-surface hover-lift shadow-accent-hover"
                style={{
                  padding: "48px 40px",
                  borderRadius: 24,
                  border: "2px solid var(--color-border)",
                }}
              >
                <div style={{ fontSize: 56, marginBottom: 24 }}>{service.icon}</div>
                <h3
                  className="text-main"
                  style={{
                    fontWeight: 800,
                    fontSize: 26,
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
                    marginBottom: 28,
                  }}
                >
                  {service.description}
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
                  {service.features.map((feature) => (
                    <div
                      key={feature}
                      className="bg-surface-alt"
                      style={{
                        padding: "8px 16px",
                        borderRadius: 8,
                        fontSize: 13,
                        fontWeight: 600,
                        color: "var(--color-text-muted)",
                      }}
                    >
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- TESTIMONIALS ---------- */}
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
              Client Success Stories
            </h2>
            <p className="text-muted" style={{ fontSize: 18 }}>
              Hear from companies we've helped transform
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
                quote:
                  "Working with this team was a game-changer for our business. They delivered a stunning product that exceeded all our expectations.",
                author: "Sarah Chen",
                role: "CEO, TechStart Inc.",
                rating: 5,
              },
              {
                quote:
                  "The level of professionalism and expertise is unmatched. They took our vision and turned it into reality with precision and creativity.",
                author: "Michael Roberts",
                role: "Founder, GrowthLab",
                rating: 5,
              },
              {
                quote:
                  "From strategy to execution, every step was handled with care. Our app has been a massive success thanks to their work.",
                author: "Emily Watson",
                role: "Product Lead, Innovate Co.",
                rating: 5,
              },
              {
                quote:
                  "Exceptional design, clean code, and seamless collaboration. I can't recommend them enough for any digital project.",
                author: "David Kim",
                role: "CTO, DataFlow",
                rating: 5,
              },
              {
                quote:
                  "They delivered on time, on budget, and beyond expectations. The attention to detail and user experience is second to none.",
                author: "Jessica Lee",
                role: "CMO, BrandWave",
                rating: 5,
              },
              {
                quote:
                  "Our revenue increased by 40% after launching the new platform. The results speak for themselves.",
                author: "Alex Martinez",
                role: "VP Sales, MarketEdge",
                rating: 5,
              },
            ].map((testimonial, i) => (
              <div
                key={i}
                className="bg-surface hover-lift shadow-accent-hover"
                style={{
                  padding: "36px 32px",
                  borderRadius: 20,
                  border: "2px solid var(--color-border)",
                }}
              >
                <div style={{ marginBottom: 20 }}>
                  {Array(testimonial.rating)
                    .fill(0)
                    .map((_, idx) => (
                      <span key={idx} style={{ fontSize: 18, color: "var(--color-accent)" }}>
                        ★
                      </span>
                    ))}
                </div>
                <p
                  className="text-main"
                  style={{
                    fontSize: 15,
                    lineHeight: 1.7,
                    marginBottom: 24,
                    fontStyle: "italic",
                  }}
                >
                  "{testimonial.quote}"
                </p>
                <div>
                  <div className="text-main" style={{ fontWeight: 700, fontSize: 15, marginBottom: 4 }}>
                    {testimonial.author}
                  </div>
                  <div className="text-muted" style={{ fontSize: 13 }}>
                    {testimonial.role}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- TECHNOLOGY STACK ---------- */}
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
              Our Tech Stack
            </h2>
            <p className="text-muted" style={{ fontSize: 18 }}>
              We use cutting-edge technologies to build robust solutions
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
              "Python",
              "PostgreSQL",
              "MongoDB",
              "AWS",
              "Docker",
              "Figma",
              "Tailwind",
              "GraphQL",
            ].map((tech) => (
              <div
                key={tech}
                className="bg-surface hover-lift shadow-accent-hover"
                style={{
                  padding: "24px 20px",
                  borderRadius: 16,
                  border: "2px solid var(--color-border)",
                  textAlign: "center",
                }}
              >
                <div className="text-main" style={{ fontWeight: 700, fontSize: 15 }}>
                  {tech}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- PROCESS TIMELINE ---------- */}
      <section
        className="fade-up"
        style={{
          padding: "140px 24px",
        }}
      >
        <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 80 }}>
            <h2
              className="text-main"
              style={{
                fontWeight: 800,
                fontSize: 42,
                marginBottom: 20,
              }}
            >
              How We Work
            </h2>
            <p className="text-muted" style={{ fontSize: 18 }}>
              A transparent, collaborative process from start to finish
            </p>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
            {[
              {
                step: 1,
                title: "Discovery Call",
                description: "We learn about your goals, challenges, and vision for the project.",
              },
              {
                step: 2,
                title: "Proposal & Planning",
                description: "We create a detailed roadmap, timeline, and budget tailored to your needs.",
              },
              {
                step: 3,
                title: "Design & Development",
                description: "Our team brings your vision to life with iterative design and clean code.",
              },
              {
                step: 4,
                title: "Testing & Launch",
                description: "Rigorous QA ensures a smooth launch. We handle deployment and monitoring.",
              },
              {
                step: 5,
                title: "Support & Growth",
                description: "Post-launch, we provide ongoing support and optimization to maximize results.",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="bg-surface hover-lift shadow-accent-hover"
                style={{
                  padding: "32px 36px",
                  borderRadius: 20,
                  border: "2px solid var(--color-border)",
                  display: "grid",
                  gridTemplateColumns: "80px 1fr",
                  gap: 28,
                  alignItems: "center",
                }}
              >
                <div
                  className="bg-gradient-accent"
                  style={{
                    width: 64,
                    height: 64,
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 24,
                    fontWeight: 900,
                  }}
                >
                  {item.step}
                </div>
                <div>
                  <h4
                    className="text-main"
                    style={{
                      fontWeight: 700,
                      fontSize: 20,
                      marginBottom: 8,
                    }}
                  >
                    {item.title}
                  </h4>
                  <p
                    className="text-muted"
                    style={{
                      fontSize: 16,
                      lineHeight: 1.7,
                    }}
                  >
                    {item.description}
                  </p>
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
          <div style={{ fontSize: 72, marginBottom: 28 }}>💬</div>
          <h2 style={{ fontWeight: 900, fontSize: 48, marginBottom: 24 }}>
            Let's Build Together
          </h2>
          <p style={{ fontSize: 19, marginBottom: 40, opacity: 0.95, lineHeight: 1.7 }}>
            Have a project in mind? We'd love to hear about it. Schedule a free consultation and let's
            discuss how we can help you succeed.
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
              View Portfolio
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
            font-size: 28px !important;
          }
          h3 {
            font-size: 24px !important;
          }
          div[style*="gridTemplateColumns: 1.2fr 1fr"],
          div[style*="gridTemplateColumns: repeat(2, 1fr)"],
          div[style*="gridTemplateColumns: repeat(3, 1fr)"],
          div[style*="gridTemplateColumns: repeat(6, 1fr)"],
          div[style*="gridTemplateColumns: 80px 1fr"] {
            grid-template-columns: 1fr !important;
            gap: 24px !important;
          }
          div[style*="padding: 48px 40px"],
          div[style*="padding: 36px 32px"],
          div[style*="padding: 32px 36px"] {
            padding: 32px 24px !important;
          }
        }
      `}</style>
    </div>
  );
}
