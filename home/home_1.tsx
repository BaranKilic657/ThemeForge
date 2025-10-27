import React from "react";

export default function Home() {
  return (
    <main className="fade-in" style={{ overflow: "hidden" }}>
      {/* ---------------- HERO WITH ANIMATED CARDS ---------------- */}
      <section
        className="bg-gradient-accent shadow-accent"
        style={{
          padding: "140px 24px",
          textAlign: "center",
          color: "var(--color-surface)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Floating Card Elements */}
        <div
          className="bg-surface float"
          style={{
            position: "absolute",
            top: "15%",
            right: "10%",
            width: 180,
            height: 120,
            borderRadius: 12,
            opacity: 0.15,
            transform: "rotate(8deg)",
          }}
        />
        <div
          className="bg-surface-alt float"
          style={{
            position: "absolute",
            bottom: "20%",
            left: "8%",
            width: 140,
            height: 100,
            borderRadius: 12,
            opacity: 0.12,
            transform: "rotate(-12deg)",
          }}
        />

        <div style={{ maxWidth: "900px", margin: "0 auto", position: "relative", zIndex: 2 }}>
          <h1
            style={{
              fontSize: "3.5rem",
              fontWeight: 800,
              lineHeight: 1.1,
              marginBottom: 20,
            }}
          >
            Building Digital Products That Scale
          </h1>
          <p style={{ opacity: 0.95, marginBottom: 40, fontSize: 18, lineHeight: 1.6 }}>
            From startup MVPs to enterprise platforms — we design and develop products that grow with your vision.
          </p>

          <div style={{ display: "flex", justifyContent: "center", gap: 16, flexWrap: "wrap" }}>
            <button className="btn-gradient hover-lift" style={{ borderRadius: 10, padding: "14px 28px", fontWeight: 600 }}>
              Start Project
            </button>
            <button className="accent hover-lift" style={{ borderRadius: 10, padding: "14px 28px", fontWeight: 600 }}>
              View Portfolio
            </button>
          </div>
        </div>
      </section>

      {/* ---------------- HORIZONTAL SCROLL CARDS ---------------- */}
      <section className="bg-surface fade-up" style={{ padding: "140px 0" }}>
        <div style={{ paddingLeft: "24px", paddingRight: "24px", marginBottom: 60, textAlign: "center" }}>
          <h2 className="text-main" style={{ fontWeight: 800, fontSize: 32, marginBottom: 16 }}>
            Our Expertise
          </h2>
          <p className="text-muted" style={{ fontSize: 17 }}>
            End-to-end solutions for modern digital products
          </p>
        </div>

        <div
          style={{
            display: "flex",
            gap: 24,
            overflowX: "auto",
            paddingLeft: "24px",
            paddingRight: "24px",
            paddingBottom: 20,
            scrollSnapType: "x mandatory",
          }}
        >
          {[
            {
              title: "Product Strategy",
              desc: "Market research, user insights, and roadmap planning to guide your product vision.",
              icon: "🎯",
            },
            {
              title: "UX/UI Design",
              desc: "Beautiful, intuitive interfaces that users love — backed by research and testing.",
              icon: "✨",
            },
            {
              title: "Full-Stack Development",
              desc: "Scalable web and mobile apps built with cutting-edge technologies.",
              icon: "⚡",
            },
            {
              title: "Brand Identity",
              desc: "Logos, design systems, and visual language that tells your story.",
              icon: "🎨",
            },
            {
              title: "Growth Marketing",
              desc: "Data-driven strategies to acquire, engage, and retain your users.",
              icon: "📈",
            },
          ].map((service) => (
            <div
              key={service.title}
              className="bg-surface-alt shadow-accent-hover hover-lift"
              style={{
                minWidth: 340,
                maxWidth: 340,
                borderRadius: 18,
                padding: "40px 32px",
                scrollSnapAlign: "start",
                transition: "transform 0.3s ease",
              }}
            >
              <div style={{ fontSize: "3rem", marginBottom: 20 }}>{service.icon}</div>
              <h3 className="text-main" style={{ fontWeight: 700, fontSize: 20, marginBottom: 12 }}>
                {service.title}
              </h3>
              <p className="text-muted" style={{ lineHeight: 1.6, fontSize: 15 }}>
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ---------------- FEATURED PROJECTS - STACKED CARDS ---------------- */}
      <section className="bg-surface-alt fade-up" style={{ padding: "140px 24px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <h2 className="text-main" style={{ fontWeight: 800, fontSize: 32, textAlign: "center", marginBottom: 80 }}>
            Featured Work
          </h2>

          <div style={{ display: "flex", flexDirection: "column", gap: 120 }}>
            {[
              {
                title: "Quantum Analytics",
                category: "SaaS Platform",
                desc: "A real-time data visualization platform serving 10,000+ businesses worldwide.",
              },
              {
                title: "Bloom Fitness",
                category: "Mobile App",
                desc: "AI-powered workout app with 1M+ downloads and 4.8★ rating.",
              },
            ].map((project, i) => (
              <div
                key={project.title}
                style={{
                  display: "grid",
                  gridTemplateColumns: i % 2 === 0 ? "1.2fr 1fr" : "1fr 1.2fr",
                  gap: 60,
                  alignItems: "center",
                }}
              >
                {i % 2 === 0 && (
                  <div
                    className="preview-accent hover-lift shadow-accent-hover"
                    style={{
                      height: 400,
                      borderRadius: 20,
                      position: "relative",
                    }}
                  >
                    <div
                      className="bg-surface"
                      style={{
                        position: "absolute",
                        bottom: 24,
                        left: 24,
                        right: 24,
                        padding: "20px 24px",
                        borderRadius: 12,
                        backdropFilter: "blur(8px)",
                      }}
                    >
                      <div className="text-accent" style={{ fontSize: 13, fontWeight: 600, marginBottom: 4 }}>
                        {project.category}
                      </div>
                      <div className="text-main" style={{ fontWeight: 700, fontSize: 18 }}>
                        {project.title}
                      </div>
                    </div>
                  </div>
                )}

                <div>
                  <h3 className="text-main" style={{ fontWeight: 800, fontSize: 28, marginBottom: 16 }}>
                    {project.title}
                  </h3>
                  <p className="text-muted" style={{ marginBottom: 24, lineHeight: 1.7, fontSize: 16 }}>
                    {project.desc}
                  </p>
                  <a href="#" className="text-accent-hover" style={{ fontWeight: 600, fontSize: 16 }}>
                    View Case Study →
                  </a>
                </div>

                {i % 2 !== 0 && (
                  <div
                    className="preview-secondary hover-lift shadow-accent-hover"
                    style={{
                      height: 400,
                      borderRadius: 20,
                      position: "relative",
                    }}
                  >
                    <div
                      className="bg-surface"
                      style={{
                        position: "absolute",
                        bottom: 24,
                        left: 24,
                        right: 24,
                        padding: "20px 24px",
                        borderRadius: 12,
                        backdropFilter: "blur(8px)",
                      }}
                    >
                      <div className="text-accent" style={{ fontSize: 13, fontWeight: 600, marginBottom: 4 }}>
                        {project.category}
                      </div>
                      <div className="text-main" style={{ fontWeight: 700, fontSize: 18 }}>
                        {project.title}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- CLIENT LOGOS TICKER ---------------- */}
      <section className="bg-surface fade-up" style={{ padding: "100px 24px", overflow: "hidden" }}>
        <h3 className="text-main" style={{ fontWeight: 800, textAlign: "center", marginBottom: 60, fontSize: 24 }}>
          Trusted by Industry Leaders
        </h3>
        <div
          style={{
            display: "flex",
            gap: 48,
            justifyContent: "center",
            flexWrap: "wrap",
            maxWidth: "1000px",
            margin: "0 auto",
          }}
        >
          {["Shopify", "Slack", "Stripe", "Netflix", "Airbnb", "Discord"].map((brand) => (
            <div
              key={brand}
              className="bg-surface-alt hover-lift"
              style={{
                padding: "16px 28px",
                borderRadius: 10,
                fontWeight: 700,
                color: "var(--color-accent)",
                fontSize: 17,
              }}
            >
              {brand}
            </div>
          ))}
        </div>
      </section>

      {/* ---------------- CTA SECTION ---------------- */}
      <section
        className="bg-gradient-secondary shadow-accent fade-up"
        style={{
          textAlign: "center",
          padding: "120px 24px",
          color: "var(--color-surface)",
        }}
      >
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <h2 style={{ fontWeight: 800, fontSize: 36, marginBottom: 20 }}>
            Ready to Build Something Great?
          </h2>
          <p style={{ opacity: 0.95, marginBottom: 36, fontSize: 18, lineHeight: 1.6 }}>
            Let's turn your vision into a product that users love and investors believe in.
          </p>
          <button
            className="accent hover-lift"
            style={{
              borderRadius: 10,
              padding: "16px 32px",
              fontWeight: 700,
              fontSize: 16,
            }}
          >
            Schedule a Call
          </button>
        </div>
      </section>
    </main>
  );
}
