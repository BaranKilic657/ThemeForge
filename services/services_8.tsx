"use client";

import { useState } from "react";

export default function Services8() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(0);

  const faqs = [
    {
      q: "What is your typical project timeline?",
      a: "Project timelines vary based on scope and complexity. A typical web project takes 8-12 weeks, while larger product development can take 3-6 months. We provide detailed timelines during our discovery phase.",
    },
    {
      q: "How do you handle pricing and contracts?",
      a: "We offer both fixed-price and time & materials engagements. After understanding your requirements, we provide a detailed proposal with transparent pricing. We typically work with milestone-based payments.",
    },
    {
      q: "Do you provide ongoing support after launch?",
      a: "Yes! We offer various support and maintenance packages. From bug fixes to feature enhancements, we're here to ensure your product continues to succeed post-launch.",
    },
    {
      q: "What technologies do you work with?",
      a: "We specialize in modern web technologies including React, Next.js, Node.js, Python, and more. We choose the best tech stack for your specific needs and goals.",
    },
    {
      q: "Can you work with our existing team?",
      a: "Absolutely. We're experienced in staff augmentation and can integrate seamlessly with your in-house team. We adapt to your workflows and communication preferences.",
    },
    {
      q: "How do you ensure project quality?",
      a: "We follow rigorous QA processes including code reviews, automated testing, and user acceptance testing. Quality is built into every phase of our process.",
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
            gridTemplateColumns: "1fr 1fr",
            gap: 80,
            alignItems: "center",
          }}
        >
          <div>
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
              Full-Service Digital Agency
            </div>
            <h1
              className="text-main"
              style={{
                fontWeight: 900,
                fontSize: "clamp(44px, 6vw, 68px)",
                lineHeight: 1.1,
                marginBottom: 28,
              }}
            >
              Everything You Need to Succeed Online
            </h1>
            <p
              className="text-muted"
              style={{
                fontSize: 19,
                lineHeight: 1.8,
                marginBottom: 40,
              }}
            >
              From initial concept to ongoing growth, we provide comprehensive digital services that
              help businesses thrive in the modern marketplace.
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
              Explore Services
            </button>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: 20,
            }}
          >
            {[
              { icon: "⚡", label: "Fast Delivery" },
              { icon: "🎯", label: "Goal-Focused" },
              { icon: "💎", label: "Premium Quality" },
              { icon: "🤝", label: "Dedicated Support" },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-surface hover-lift shadow-accent-hover"
                style={{
                  padding: "32px 28px",
                  borderRadius: 16,
                  border: "2px solid var(--color-border)",
                  textAlign: "center",
                }}
              >
                <div style={{ fontSize: 48, marginBottom: 12 }}>{item.icon}</div>
                <div
                  className="text-main"
                  style={{
                    fontSize: 16,
                    fontWeight: 700,
                  }}
                >
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- SERVICE PACKAGES ---------- */}
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
                fontSize: 46,
                marginBottom: 20,
              }}
            >
              Service Packages
            </h2>
            <p className="text-muted" style={{ fontSize: 19 }}>
              Flexible solutions for every stage of your journey
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
                name: "Launch",
                tagline: "Perfect for startups and MVPs",
                icon: "🚀",
                services: [
                  "Brand Identity",
                  "UI/UX Design",
                  "Web Development",
                  "Basic SEO",
                  "Analytics Setup",
                ],
                ideal: "New businesses",
              },
              {
                name: "Growth",
                tagline: "Scale your digital presence",
                icon: "📈",
                services: [
                  "Everything in Launch",
                  "Mobile App Development",
                  "Advanced Marketing",
                  "CRM Integration",
                  "A/B Testing",
                  "Performance Optimization",
                ],
                ideal: "Growing companies",
              },
              {
                name: "Enterprise",
                tagline: "Full-scale digital transformation",
                icon: "🏢",
                services: [
                  "Everything in Growth",
                  "Custom Software",
                  "API Development",
                  "Cloud Architecture",
                  "Security Audit",
                  "Dedicated Team",
                  "Priority Support",
                ],
                ideal: "Large organizations",
              },
            ].map((pkg, i) => (
              <div
                key={i}
                className="bg-surface hover-lift shadow-accent-hover"
                style={{
                  padding: "48px 40px",
                  borderRadius: 24,
                  border: "2px solid var(--color-border)",
                }}
              >
                <div style={{ fontSize: 56, marginBottom: 20 }}>{pkg.icon}</div>
                <h3
                  className="text-main"
                  style={{
                    fontWeight: 800,
                    fontSize: 28,
                    marginBottom: 8,
                  }}
                >
                  {pkg.name}
                </h3>
                <p
                  className="text-muted"
                  style={{
                    fontSize: 15,
                    marginBottom: 32,
                  }}
                >
                  {pkg.tagline}
                </p>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 12,
                    marginBottom: 32,
                    paddingBottom: 32,
                    borderBottom: "1px solid var(--color-border)",
                  }}
                >
                  {pkg.services.map((service, idx) => (
                    <div
                      key={idx}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 10,
                        fontSize: 15,
                      }}
                    >
                      <div
                        className="bg-gradient-accent"
                        style={{
                          width: 18,
                          height: 18,
                          borderRadius: "50%",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontSize: 11,
                          fontWeight: 700,
                        }}
                      >
                        ✓
                      </div>
                      <span className="text-main" style={{ fontWeight: 500 }}>
                        {service}
                      </span>
                    </div>
                  ))}
                </div>
                <div
                  className="bg-surface-alt"
                  style={{
                    padding: "12px 20px",
                    borderRadius: 10,
                    fontSize: 13,
                    fontWeight: 600,
                    textAlign: "center",
                    marginBottom: 24,
                  }}
                >
                  Ideal for {pkg.ideal}
                </div>
                <button
                  className="hover-lift"
                  style={{
                    width: "100%",
                    padding: "16px 32px",
                    borderRadius: 12,
                    fontSize: 16,
                    fontWeight: 700,
                    background: "var(--color-accent)",
                    color: "var(--color-surface)",
                    border: "none",
                    cursor: "pointer",
                  }}
                >
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- ACCORDION FAQ ---------- */}
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
                fontSize: 46,
                marginBottom: 20,
              }}
            >
              Frequently Asked Questions
            </h2>
            <p className="text-muted" style={{ fontSize: 19 }}>
              Everything you need to know about working with us
            </p>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="bg-surface"
                style={{
                  border: "2px solid var(--color-border)",
                  borderRadius: 16,
                  overflow: "hidden",
                  transition: "all 0.3s ease",
                }}
              >
                <button
                  onClick={() => setExpandedFaq(expandedFaq === i ? null : i)}
                  style={{
                    width: "100%",
                    padding: "24px 28px",
                    background: expandedFaq === i ? "var(--color-surface-alt)" : "transparent",
                    border: "none",
                    textAlign: "left",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: 20,
                    transition: "background 0.3s ease",
                  }}
                >
                  <span
                    className="text-main"
                    style={{
                      fontSize: 17,
                      fontWeight: 700,
                      flex: 1,
                    }}
                  >
                    {faq.q}
                  </span>
                  <div
                    className="text-accent"
                    style={{
                      fontSize: 24,
                      fontWeight: 700,
                      transition: "transform 0.3s ease",
                      transform: expandedFaq === i ? "rotate(45deg)" : "rotate(0deg)",
                    }}
                  >
                    +
                  </div>
                </button>
                {expandedFaq === i && (
                  <div
                    style={{
                      padding: "0 28px 24px",
                    }}
                  >
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
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- CONTACT SECTION ---------- */}
      <section
        className="bg-gradient-secondary fade-up"
        style={{
          padding: "120px 24px",
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 60,
              alignItems: "center",
            }}
          >
            <div>
              <h2
                style={{
                  fontWeight: 900,
                  fontSize: 48,
                  marginBottom: 24,
                }}
              >
                Let's Talk About Your Project
              </h2>
              <p
                style={{
                  fontSize: 19,
                  lineHeight: 1.7,
                  opacity: 0.95,
                  marginBottom: 40,
                }}
              >
                Ready to get started? Schedule a free consultation and let's discuss how we can help
                you achieve your goals.
              </p>
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
                Book a Consultation
              </button>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(2, 1fr)",
                gap: 24,
              }}
            >
              {[
                { icon: "📧", label: "hello@agency.com" },
                { icon: "📞", label: "+1 (555) 123-4567" },
                { icon: "📍", label: "San Francisco, CA" },
                { icon: "⏰", label: "Mon-Fri, 9AM-6PM" },
              ].map((contact, i) => (
                <div
                  key={i}
                  className="bg-surface"
                  style={{
                    padding: "28px 24px",
                    borderRadius: 16,
                    textAlign: "center",
                  }}
                >
                  <div style={{ fontSize: 36, marginBottom: 12 }}>{contact.icon}</div>
                  <div
                    className="text-main"
                    style={{
                      fontSize: 14,
                      fontWeight: 600,
                    }}
                  >
                    {contact.label}
                  </div>
                </div>
              ))}
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
            font-size: 36px !important;
          }
          h2 {
            font-size: 28px !important;
          }
          h3 {
            font-size: 24px !important;
          }
          div[style*="gridTemplateColumns: 1fr 1fr"],
          div[style*="gridTemplateColumns: repeat(2, 1fr)"],
          div[style*="gridTemplateColumns: repeat(3, 1fr)"] {
            grid-template-columns: 1fr !important;
            gap: 24px !important;
          }
          div[style*="padding: 48px 40px"],
          div[style*="padding: 24px 28px"] {
            padding: 24px 20px !important;
          }
        }
      `}</style>
    </div>
  );
}
