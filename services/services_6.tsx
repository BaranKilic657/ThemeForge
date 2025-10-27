"use client";

import { useState } from "react";

export default function Services6() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <div
      style={{
        minHeight: "100vh",
        paddingTop: 80,
      }}
    >
      {/* ---------- HERO WITH VIDEO PLACEHOLDER ---------- */}
      <section
        className="bg-gradient-accent"
        style={{
          padding: "140px 24px",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div style={{ maxWidth: "1000px", margin: "0 auto", position: "relative", zIndex: 1 }}>
          <div
            style={{
              display: "inline-block",
              padding: "8px 20px",
              borderRadius: 20,
              background: "color-mix(in srgb, var(--color-surface) 20%, transparent)",
              fontSize: 13,
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: 1.5,
              marginBottom: 32,
            }}
          >
            Award-Winning Agency
          </div>
          <h1
            style={{
              fontWeight: 900,
              fontSize: "clamp(48px, 8vw, 82px)",
              lineHeight: 1.1,
              marginBottom: 32,
            }}
          >
            We Build Digital Experiences That Matter
          </h1>
          <p
            style={{
              fontSize: 21,
              lineHeight: 1.7,
              marginBottom: 48,
              opacity: 0.95,
              maxWidth: 700,
              margin: "0 auto 48px",
            }}
          >
            From Fortune 500 companies to innovative startups, we create solutions that drive
            measurable results and lasting impact.
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
            Start Your Project
          </button>
        </div>
        {/* Decorative circles */}
        <div
          style={{
            position: "absolute",
            top: "10%",
            right: "5%",
            width: 200,
            height: 200,
            borderRadius: "50%",
            background: "color-mix(in srgb, var(--color-surface) 10%, transparent)",
            filter: "blur(60px)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "5%",
            left: "8%",
            width: 300,
            height: 300,
            borderRadius: "50%",
            background: "color-mix(in srgb, var(--color-surface) 15%, transparent)",
            filter: "blur(80px)",
          }}
        />
      </section>

      {/* ---------- INTERACTIVE HOVER CARDS ---------- */}
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
                fontSize: 46,
                marginBottom: 20,
              }}
            >
              Our Service Spectrum
            </h2>
            <p className="text-muted" style={{ fontSize: 19 }}>
              End-to-end solutions tailored to your business needs
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 28,
            }}
          >
            {[
              {
                icon: "🎯",
                title: "Strategic Planning",
                description: "Data-driven roadmaps that align technology with business objectives.",
                features: ["Market Analysis", "Competitive Research", "Growth Strategy", "KPI Definition"],
              },
              {
                icon: "✨",
                title: "Brand & Identity",
                description: "Memorable brands that resonate with your audience and stand out.",
                features: ["Logo Design", "Brand Guidelines", "Visual Language", "Marketing Collateral"],
              },
              {
                icon: "🎨",
                title: "UX/UI Design",
                description: "Intuitive interfaces that delight users and drive conversions.",
                features: ["User Research", "Wireframing", "Prototyping", "Usability Testing"],
              },
              {
                icon: "💻",
                title: "Web Development",
                description: "High-performance websites built with cutting-edge technologies.",
                features: ["Custom Development", "E-commerce", "CMS Integration", "API Development"],
              },
              {
                icon: "📱",
                title: "Mobile Apps",
                description: "Native and cross-platform apps that users love.",
                features: ["iOS & Android", "React Native", "App Store Optimization", "Push Notifications"],
              },
              {
                icon: "🔧",
                title: "Product Development",
                description: "Full-cycle product engineering from concept to launch.",
                features: ["MVP Development", "Feature Expansion", "Technical Architecture", "Code Review"],
              },
              {
                icon: "☁️",
                title: "Cloud & Infrastructure",
                description: "Scalable, secure cloud solutions for modern businesses.",
                features: ["AWS/Azure/GCP", "DevOps", "CI/CD Pipelines", "Monitoring"],
              },
              {
                icon: "📊",
                title: "Data & Analytics",
                description: "Turn data into actionable insights that drive growth.",
                features: ["Business Intelligence", "Data Visualization", "Custom Dashboards", "Predictive Analytics"],
              },
              {
                icon: "🚀",
                title: "Digital Marketing",
                description: "Comprehensive marketing strategies that generate ROI.",
                features: ["SEO/SEM", "Content Marketing", "Social Media", "Email Campaigns"],
              },
            ].map((service, index) => (
              <div
                key={index}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
                className="bg-surface hover-lift shadow-accent-hover"
                style={{
                  padding: "40px 32px",
                  borderRadius: 20,
                  border: "2px solid var(--color-border)",
                  transition: "all 0.3s ease",
                  transform: hoveredCard === index ? "translateY(-8px)" : "translateY(0)",
                }}
              >
                <div
                  style={{
                    fontSize: 52,
                    marginBottom: 20,
                    transition: "transform 0.3s ease",
                    transform: hoveredCard === index ? "scale(1.1)" : "scale(1)",
                  }}
                >
                  {service.icon}
                </div>
                <h3
                  className="text-main"
                  style={{
                    fontWeight: 800,
                    fontSize: 22,
                    marginBottom: 12,
                  }}
                >
                  {service.title}
                </h3>
                <p
                  className="text-muted"
                  style={{
                    fontSize: 15,
                    lineHeight: 1.7,
                    marginBottom: 24,
                  }}
                >
                  {service.description}
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  {service.features.map((feature, i) => (
                    <div
                      key={i}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 10,
                        fontSize: 14,
                      }}
                    >
                      <div
                        className="bg-gradient-accent"
                        style={{
                          width: 5,
                          height: 5,
                          borderRadius: "50%",
                        }}
                      />
                      <span className="text-main" style={{ fontWeight: 500 }}>
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- STATS BANNER ---------- */}
      <section
        className="bg-gradient-secondary fade-up"
        style={{
          padding: "80px 24px",
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: 48,
              textAlign: "center",
            }}
          >
            {[
              { value: "500+", label: "Projects Completed" },
              { value: "98%", label: "Client Retention" },
              { value: "50+", label: "Team Members" },
              { value: "15yrs", label: "Industry Experience" },
            ].map((stat, i) => (
              <div key={i}>
                <div
                  style={{
                    fontSize: 52,
                    fontWeight: 900,
                    marginBottom: 8,
                  }}
                >
                  {stat.value}
                </div>
                <div
                  style={{
                    fontSize: 16,
                    opacity: 0.9,
                    fontWeight: 600,
                  }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- CASE STUDY CAROUSEL ---------- */}
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
                fontSize: 46,
                marginBottom: 20,
              }}
            >
              Featured Work
            </h2>
            <p className="text-muted" style={{ fontSize: 19 }}>
              Real projects, real results
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
                client: "TechCorp",
                project: "Enterprise SaaS Platform",
                result: "300% increase in user engagement",
                industry: "Technology",
              },
              {
                client: "RetailMax",
                project: "E-commerce Redesign",
                result: "2.5x conversion rate improvement",
                industry: "Retail",
              },
              {
                client: "HealthPro",
                project: "Patient Portal App",
                result: "95% user satisfaction score",
                industry: "Healthcare",
              },
              {
                client: "FinanceHub",
                project: "Banking Mobile App",
                result: "$5M in transactions within 3 months",
                industry: "Finance",
              },
            ].map((study, i) => (
              <div
                key={i}
                className="bg-surface hover-lift shadow-accent-hover"
                style={{
                  padding: "48px 40px",
                  borderRadius: 24,
                  border: "2px solid var(--color-border)",
                }}
              >
                <div
                  className="text-accent"
                  style={{
                    fontSize: 12,
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: 1.5,
                    marginBottom: 16,
                  }}
                >
                  {study.industry}
                </div>
                <h3
                  className="text-main"
                  style={{
                    fontWeight: 800,
                    fontSize: 28,
                    marginBottom: 12,
                  }}
                >
                  {study.client}
                </h3>
                <p
                  className="text-muted"
                  style={{
                    fontSize: 17,
                    marginBottom: 24,
                  }}
                >
                  {study.project}
                </p>
                <div
                  className="bg-gradient-accent"
                  style={{
                    padding: "20px 24px",
                    borderRadius: 12,
                    fontSize: 18,
                    fontWeight: 700,
                  }}
                >
                  {study.result}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- CTA ---------- */}
      <section
        className="bg-surface-alt fade-up"
        style={{
          padding: "120px 24px",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <div style={{ fontSize: 68, marginBottom: 28 }}>🤝</div>
          <h2
            className="text-main"
            style={{
              fontWeight: 900,
              fontSize: 48,
              marginBottom: 24,
            }}
          >
            Ready to Transform Your Business?
          </h2>
          <p
            className="text-muted"
            style={{
              fontSize: 19,
              lineHeight: 1.7,
              marginBottom: 40,
            }}
          >
            Let's discuss your project and create a custom solution that drives results. Book a free
            consultation with our team today.
          </p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
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
              Get Started
            </button>
            <button
              className="hover-lift"
              style={{
                padding: "18px 44px",
                borderRadius: 12,
                fontSize: 17,
                fontWeight: 700,
                background: "transparent",
                color: "var(--color-text)",
                border: "2px solid var(--color-border)",
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
            font-size: 22px !important;
          }
          div[style*="gridTemplateColumns: repeat(3, 1fr)"],
          div[style*="gridTemplateColumns: repeat(4, 1fr)"],
          div[style*="gridTemplateColumns: repeat(2, 1fr)"] {
            grid-template-columns: 1fr !important;
            gap: 24px !important;
          }
          div[style*="padding: 140px 24px"] {
            padding: 80px 20px !important;
          }
          div[style*="padding: 40px 32px"],
          div[style*="padding: 48px 40px"] {
            padding: 32px 24px !important;
          }
        }
      `}</style>
    </div>
  );
}
