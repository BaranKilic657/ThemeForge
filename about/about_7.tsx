"use client";

import { useState } from "react";

export default function About7() {
  const [activePanel, setActivePanel] = useState(0);

  return (
    <div
      style={{
        minHeight: "100vh",
        paddingTop: 80,
      }}
    >
      {/* ---------- HERO WITH SPLIT INTRO ---------- */}
      <section
        className="fade-up"
        style={{
          padding: "100px 24px",
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: 60,
          maxWidth: "1400px",
          margin: "0 auto",
        }}
      >
        <div>
          <div
            className="text-accent"
            style={{
              fontSize: 14,
              fontWeight: 700,
              letterSpacing: 2,
              textTransform: "uppercase",
              marginBottom: 20,
            }}
          >
            About NovaSphere
          </div>
          <h1
            className="text-main"
            style={{
              fontWeight: 900,
              fontSize: "clamp(42px, 5vw, 64px)",
              lineHeight: 1.1,
              marginBottom: 32,
            }}
          >
            Where craft meets curiosity
          </h1>
        </div>
        <div>
          <p
            className="text-muted"
            style={{
              fontSize: 19,
              lineHeight: 1.8,
              marginBottom: 24,
            }}
          >
            We're a team of designers, engineers, and strategists building digital experiences that
            feel intuitive, look memorable, and work flawlessly.
          </p>
          <p className="text-muted" style={{ fontSize: 17, lineHeight: 1.8 }}>
            Founded in 2015, we've partnered with startups and enterprises to define brands, design
            products, and develop platforms that people actually love using.
          </p>
        </div>
      </section>

      {/* ---------- INTERACTIVE SPLIT PANELS ---------- */}
      <section
        className="bg-surface-alt fade-up"
        style={{
          padding: "120px 0",
        }}
      >
        <div style={{ maxWidth: "1400px", margin: "0 auto", padding: "0 24px" }}>
          <h2
            className="text-main"
            style={{
              fontWeight: 800,
              fontSize: 36,
              marginBottom: 60,
              textAlign: "center",
            }}
          >
            What Makes Us Different
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "300px 1fr",
              gap: 48,
            }}
          >
            {/* Navigation */}
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {[
                { title: "Design Philosophy", icon: "🎨" },
                { title: "Our Process", icon: "⚡" },
                { title: "Team Culture", icon: "🌟" },
                { title: "Client Success", icon: "🚀" },
              ].map((item, i) => (
                <button
                  key={i}
                  onClick={() => setActivePanel(i)}
                  className="hover-lift"
                  style={{
                    padding: "24px 28px",
                    borderRadius: 16,
                    textAlign: "left",
                    border: "2px solid",
                    borderColor: activePanel === i ? "var(--color-accent)" : "var(--color-border)",
                    background: activePanel === i ? "var(--color-surface)" : "transparent",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                  }}
                >
                  <div style={{ fontSize: 32, marginBottom: 12 }}>{item.icon}</div>
                  <div
                    className="text-main"
                    style={{
                      fontWeight: 700,
                      fontSize: 18,
                    }}
                  >
                    {item.title}
                  </div>
                </button>
              ))}
            </div>

            {/* Content Panel */}
            <div
              className="bg-surface shadow-accent-hover"
              style={{
                padding: "60px 48px",
                borderRadius: 20,
                minHeight: 500,
              }}
            >
              {activePanel === 0 && (
                <div>
                  <h3 className="text-main" style={{ fontWeight: 800, fontSize: 32, marginBottom: 24 }}>
                    Design Philosophy
                  </h3>
                  <p className="text-muted" style={{ fontSize: 18, lineHeight: 1.8, marginBottom: 32 }}>
                    We believe design should be invisible — until it's noticed. Our work balances
                    aesthetics with usability, creating experiences that feel natural and effortless.
                  </p>
                  <div style={{ display: "grid", gap: 20 }}>
                    {["User-First Thinking", "Attention to Detail", "Timeless Aesthetics"].map((principle) => (
                      <div
                        key={principle}
                        className="bg-surface-alt"
                        style={{
                          padding: "20px 24px",
                          borderRadius: 12,
                          borderLeft: "4px solid var(--color-accent)",
                        }}
                      >
                        <div className="text-main" style={{ fontWeight: 600, fontSize: 16 }}>
                          {principle}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activePanel === 1 && (
                <div>
                  <h3 className="text-main" style={{ fontWeight: 800, fontSize: 32, marginBottom: 24 }}>
                    Our Process
                  </h3>
                  <p className="text-muted" style={{ fontSize: 18, lineHeight: 1.8, marginBottom: 32 }}>
                    From discovery to delivery, we follow a structured yet flexible process that adapts
                    to your needs while maintaining the highest quality standards.
                  </p>
                  <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
                    {[
                      { phase: "Discover", desc: "Research, strategy, and planning" },
                      { phase: "Design", desc: "Wireframes, prototypes, and visual design" },
                      { phase: "Develop", desc: "Clean code, testing, and optimization" },
                      { phase: "Deliver", desc: "Launch, monitoring, and support" },
                    ].map((step, i) => (
                      <div key={i} style={{ display: "flex", gap: 20, alignItems: "flex-start" }}>
                        <div
                          className="bg-gradient-accent"
                          style={{
                            width: 48,
                            height: 48,
                            borderRadius: "50%",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontWeight: 800,
                            flexShrink: 0,
                          }}
                        >
                          {i + 1}
                        </div>
                        <div>
                          <div className="text-main" style={{ fontWeight: 700, fontSize: 18, marginBottom: 4 }}>
                            {step.phase}
                          </div>
                          <div className="text-muted" style={{ fontSize: 15 }}>
                            {step.desc}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activePanel === 2 && (
                <div>
                  <h3 className="text-main" style={{ fontWeight: 800, fontSize: 32, marginBottom: 24 }}>
                    Team Culture
                  </h3>
                  <p className="text-muted" style={{ fontSize: 18, lineHeight: 1.8, marginBottom: 32 }}>
                    We've built a culture of collaboration, continuous learning, and mutual respect.
                    Every voice matters, every idea is valued, and every project is a team effort.
                  </p>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 24 }}>
                    {[
                      { value: "25+", label: "Team Members" },
                      { value: "8", label: "Countries" },
                      { value: "100%", label: "Remote-First" },
                      { value: "∞", label: "Coffee Consumed" },
                    ].map((stat) => (
                      <div
                        key={stat.label}
                        className="bg-surface-alt"
                        style={{
                          padding: "32px 24px",
                          borderRadius: 16,
                          textAlign: "center",
                        }}
                      >
                        <div
                          className="text-accent"
                          style={{
                            fontSize: 42,
                            fontWeight: 900,
                            marginBottom: 8,
                          }}
                        >
                          {stat.value}
                        </div>
                        <div className="text-muted" style={{ fontSize: 14, fontWeight: 600 }}>
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activePanel === 3 && (
                <div>
                  <h3 className="text-main" style={{ fontWeight: 800, fontSize: 32, marginBottom: 24 }}>
                    Client Success
                  </h3>
                  <p className="text-muted" style={{ fontSize: 18, lineHeight: 1.8, marginBottom: 32 }}>
                    Our success is measured by your success. We build long-term partnerships and are
                    invested in helping you achieve your goals.
                  </p>
                  <div
                    className="bg-gradient-accent"
                    style={{
                      padding: "48px 40px",
                      borderRadius: 20,
                      marginBottom: 32,
                    }}
                  >
                    <div style={{ fontSize: 32, marginBottom: 16 }}>💬</div>
                    <p style={{ fontSize: 20, lineHeight: 1.6, fontStyle: "italic", marginBottom: 20 }}>
                      "NovaSphere transformed our vision into a product that exceeded all expectations.
                      Their attention to detail and commitment to excellence is unmatched."
                    </p>
                    <div style={{ fontWeight: 700 }}>— Sarah Chen, CEO at TechFlow</div>
                  </div>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
                    {["98%", "4.9/5", "150+"].map((stat, i) => (
                      <div key={i} className="bg-surface-alt" style={{ padding: "20px", borderRadius: 12, textAlign: "center" }}>
                        <div className="text-accent" style={{ fontSize: 28, fontWeight: 800 }}>
                          {stat}
                        </div>
                        <div className="text-muted" style={{ fontSize: 12, marginTop: 4 }}>
                          {i === 0 ? "Satisfaction" : i === 1 ? "Avg Rating" : "Projects"}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ---------- EXPERTISE GRID ---------- */}
      <section
        className="fade-up"
        style={{
          padding: "140px 24px",
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2
            className="text-main"
            style={{
              fontWeight: 800,
              fontSize: 36,
              marginBottom: 20,
              textAlign: "center",
            }}
          >
            Our Expertise
          </h2>
          <p className="text-muted" style={{ textAlign: "center", marginBottom: 80, fontSize: 17 }}>
            Deep knowledge across the full product lifecycle
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 32,
            }}
          >
            {[
              {
                title: "Brand & Strategy",
                items: ["Brand Identity", "Market Research", "Positioning", "Messaging"],
                color: "bg-gradient-accent",
              },
              {
                title: "Product Design",
                items: ["UI/UX Design", "Design Systems", "Prototyping", "User Testing"],
                color: "bg-gradient-secondary",
              },
              {
                title: "Development",
                items: ["Web Apps", "Mobile Apps", "APIs", "Cloud Infrastructure"],
                color: "bg-gradient-accent",
              },
            ].map((expertise) => (
              <div
                key={expertise.title}
                className="bg-surface hover-lift shadow-accent-hover"
                style={{
                  padding: "40px 32px",
                  borderRadius: 20,
                  border: "2px solid var(--color-border)",
                }}
              >
                <h3 className="text-main" style={{ fontWeight: 800, fontSize: 22, marginBottom: 24 }}>
                  {expertise.title}
                </h3>
                <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                  {expertise.items.map((item) => (
                    <div
                      key={item}
                      className="text-muted"
                      style={{
                        fontSize: 15,
                        padding: "10px 16px",
                        background: "var(--color-surface-alt)",
                        borderRadius: 8,
                      }}
                    >
                      → {item}
                    </div>
                  ))}
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
        <div style={{ maxWidth: 700, margin: "0 auto" }}>
          <h2 style={{ fontWeight: 900, fontSize: 42, marginBottom: 20 }}>
            Let's Build Something Great
          </h2>
          <p style={{ fontSize: 19, marginBottom: 40, opacity: 0.95 }}>
            Whether you're launching a new product or reimagining an existing one, we're here to help.
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
            Start a Project
          </button>
        </div>
      </section>

      {/* ---------- MOBILE CSS ---------- */}
      <style jsx>{`
        @media (max-width: 768px) {
          section[style*="gridTemplateColumns: repeat(2, 1fr)"] {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
          div[style*="gridTemplateColumns: 300px 1fr"] {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }
          div[style*="gridTemplateColumns: repeat(3, 1fr)"] {
            grid-template-columns: 1fr !important;
          }
          div[style*="gridTemplateColumns: repeat(2, 1fr)"] {
            grid-template-columns: 1fr !important;
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
            font-size: 24px !important;
          }
          div[style*="padding: 60px 48px"] {
            padding: 32px 24px !important;
            min-height: auto !important;
          }
        }
      `}</style>
    </div>
  );
}
