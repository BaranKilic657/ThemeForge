"use client";
import React, { useState } from "react";

export default function Home() {
  const [activeAccordion, setActiveAccordion] = useState<number>(0);

  const accordionItems = [
    {
      title: "Brand Strategy",
      content: "We define your brand's unique voice, positioning, and visual identity to stand out in crowded markets.",
      color: "var(--color-accent)",
    },
    {
      title: "Product Design",
      content: "From wireframes to high-fidelity prototypes, we craft intuitive interfaces that users love.",
      color: "var(--color-secondary)",
    },
    {
      title: "Development",
      content: "Clean code, scalable architecture, and seamless integration — bringing designs to life perfectly.",
      color: "var(--color-accent-hover)",
    },
    {
      title: "Growth Marketing",
      content: "Data-driven strategies that amplify reach, engagement, and conversion across all channels.",
      color: "var(--color-accent)",
    },
  ];

  return (
    <main className="fade-in" style={{ overflow: "hidden" }}>
      <style>{`
        @media (max-width: 768px) {
          section { padding: 60px 20px !important; }
          h1 { font-size: 2.5rem !important; }
          h2 { font-size: 24px !important; }
          .accordion-hero { grid-template-columns: 1fr !important; }
          .feature-cols { grid-template-columns: 1fr !important; }
        }
      `}</style>

      {/* ---------------- ACCORDION HERO ---------------- */}
      <section
        className="bg-surface"
        style={{
          minHeight: "100vh",
          padding: "100px 24px",
        }}
      >
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div
            className="accordion-hero"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1.2fr",
              gap: 80,
              alignItems: "center",
            }}
          >
            <div>
              <h1
                className="text-main text-highlight"
                style={{
                  fontSize: "3.8rem",
                  fontWeight: 900,
                  lineHeight: 1.1,
                  marginBottom: 24,
                }}
              >
                Expand Your Vision
              </h1>
              <p
                className="text-muted"
                style={{
                  fontSize: 18,
                  lineHeight: 1.8,
                  marginBottom: 40,
                }}
              >
                Interactive content that reveals depth on demand — elegant information architecture through expandable sections.
              </p>
              <button
                className="btn-gradient hover-lift"
                style={{
                  borderRadius: 10,
                  padding: "16px 32px",
                  fontWeight: 700,
                }}
              >
                Discover More
              </button>
            </div>

            {/* Accordion */}
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {accordionItems.map((item, i) => (
                <div
                  key={i}
                  className="bg-surface-alt shadow-accent-hover"
                  style={{
                    borderRadius: 16,
                    overflow: "hidden",
                    borderLeft: `4px solid ${activeAccordion === i ? item.color : "transparent"}`,
                    transition: "all 0.3s ease",
                  }}
                >
                  <button
                    onClick={() => setActiveAccordion(activeAccordion === i ? -1 : i)}
                    className="hover-lift"
                    style={{
                      width: "100%",
                      padding: "24px 28px",
                      textAlign: "left",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      background: "transparent",
                      border: "none",
                      cursor: "pointer",
                    }}
                  >
                    <h3
                      className="text-main"
                      style={{
                        fontWeight: 700,
                        fontSize: 20,
                      }}
                    >
                      {item.title}
                    </h3>
                    <div
                      style={{
                        fontSize: 24,
                        transform: activeAccordion === i ? "rotate(45deg)" : "rotate(0deg)",
                        transition: "transform 0.3s ease",
                      }}
                    >
                      +
                    </div>
                  </button>
                  <div
                    style={{
                      maxHeight: activeAccordion === i ? "200px" : "0",
                      overflow: "hidden",
                      transition: "max-height 0.3s ease",
                    }}
                  >
                    <p
                      className="text-muted"
                      style={{
                        padding: "0 28px 24px",
                        lineHeight: 1.7,
                        fontSize: 16,
                      }}
                    >
                      {item.content}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- EXPANDABLE PANELS ---------------- */}
      <section className="bg-surface-alt fade-up" style={{ padding: "160px 24px" }}>
        <div style={{ maxWidth: 1300, margin: "0 auto" }}>
          <h2
            className="text-main"
            style={{
              fontWeight: 800,
              fontSize: 36,
              marginBottom: 80,
              textAlign: "center",
            }}
          >
            Our Services
          </h2>

          <div style={{ display: "flex", gap: 24, flexWrap: "wrap" }}>
            {[
              { title: "Design", emoji: "🎨", desc: "Visual systems that scale" },
              { title: "Code", emoji: "⚡", desc: "Performance-first development" },
              { title: "Strategy", emoji: "🎯", desc: "Market positioning excellence" },
            ].map((service) => (
              <div
                key={service.title}
                className="hover-lift"
                style={{
                  flex: "1 1 300px",
                  background: "var(--color-surface)",
                  borderRadius: 20,
                  padding: "48px 36px",
                  textAlign: "center",
                  border: "2px solid var(--color-border)",
                  transition: "all 0.3s ease",
                }}
              >
                <div style={{ fontSize: 56, marginBottom: 20 }}>{service.emoji}</div>
                <h3
                  className="text-main"
                  style={{
                    fontWeight: 800,
                    fontSize: 24,
                    marginBottom: 12,
                  }}
                >
                  {service.title}
                </h3>
                <p className="text-muted" style={{ fontSize: 16, lineHeight: 1.6 }}>
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- FAQ ACCORDION ---------------- */}
      <section className="bg-surface fade-up" style={{ padding: "160px 24px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <h2
            className="text-main"
            style={{
              fontWeight: 800,
              fontSize: 32,
              marginBottom: 60,
              textAlign: "center",
            }}
          >
            Frequently Asked Questions
          </h2>

          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {[
              {
                q: "What's your typical project timeline?",
                a: "Most projects take 6-12 weeks from kickoff to launch, depending on scope and complexity.",
              },
              {
                q: "Do you work with startups?",
                a: "Absolutely! We love helping early-stage companies build strong foundations.",
              },
              {
                q: "What tools do you use?",
                a: "Figma for design, React/Next.js for development, and a range of specialized tools.",
              },
            ].map((faq, i) => (
              <div
                key={i}
                className="bg-surface-alt shadow-accent-hover hover-lift"
                style={{
                  borderRadius: 16,
                  padding: "28px 32px",
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
                <p className="text-muted" style={{ lineHeight: 1.7, fontSize: 16 }}>
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- CTA ---------------- */}
      <section
        className="bg-gradient-accent fade-up"
        style={{
          padding: "140px 24px",
          textAlign: "center",
          color: "var(--color-surface)",
        }}
      >
        <div style={{ maxWidth: 700, margin: "0 auto" }}>
          <h2
            style={{
              fontWeight: 900,
              fontSize: 40,
              marginBottom: 20,
              lineHeight: 1.2,
            }}
          >
            Ready to Expand?
          </h2>
          <p style={{ fontSize: 18, lineHeight: 1.7, marginBottom: 36, opacity: 0.95 }}>
            Let's unfold your brand's potential together.
          </p>
          <button
            className="accent hover-lift"
            style={{
              borderRadius: 10,
              padding: "16px 36px",
              fontWeight: 700,
            }}
          >
            Get Started
          </button>
        </div>
      </section>
    </main>
  );
}
