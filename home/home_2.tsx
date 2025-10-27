import React from "react";

export default function Home() {
  return (
    <main className="fade-in" style={{ overflow: "hidden" }}>
      <style>{`
        @media (max-width: 768px) {
          section { padding: 60px 20px !important; }
          h1 { font-size: 2.8rem !important; }
          h2 { font-size: 26px !important; }
          h3 { font-size: 20px !important; }
          .timeline-grid { grid-template-columns: 1fr !important; gap: 20px !important; }
          .timeline-dot { display: none !important; }
        }
      `}</style>
      {/* ---------------- MINIMAL HERO WITH CENTERED FOCUS ---------------- */}
      <section
        className="bg-surface-alt shadow-accent"
        style={{
          minHeight: "95vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          textAlign: "center",
          padding: "0 24px",
        }}
      >
        <div style={{ maxWidth: 720 }}>
          <div
            className="text-accent"
            style={{
              fontSize: 14,
              fontWeight: 700,
              letterSpacing: "2px",
              textTransform: "uppercase",
              marginBottom: 24,
            }}
          >
            Design Studio
          </div>
          <h1
            className="text-main text-highlight"
            style={{
              fontSize: "4.5rem",
              fontWeight: 800,
              lineHeight: 1.05,
              marginBottom: 24,
              letterSpacing: "-1px",
            }}
          >
            Clarity Through Design
          </h1>
          <p
            className="text-muted fade-up"
            style={{
              maxWidth: 580,
              margin: "0 auto 48px",
              lineHeight: 1.8,
              fontSize: 18,
            }}
          >
            We strip away complexity to reveal what matters — creating digital experiences that feel effortless and human.
          </p>
          <button
            className="btn-gradient hover-lift"
            style={{
              borderRadius: 10,
              padding: "16px 36px",
              fontWeight: 600,
              fontSize: 16,
            }}
          >
            Explore Our Approach
          </button>
        </div>
      </section>

      {/* ---------------- VERTICAL TIMELINE LAYOUT ---------------- */}
      <section
        className="bg-surface fade-up"
        style={{
          padding: "160px 24px",
        }}
      >
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <h2
            className="text-main"
            style={{
              fontWeight: 800,
              fontSize: 32,
              marginBottom: 100,
              textAlign: "center",
            }}
          >
            How We Work
          </h2>

          {/* Timeline Items */}
          <div style={{ position: "relative" }}>
            {/* Vertical Line */}
            <div
              className="bg-border"
              style={{
                position: "absolute",
                left: "50%",
                top: 0,
                bottom: 0,
                width: 2,
                transform: "translateX(-50%)",
              }}
            />

            {[
              {
                step: "01",
                title: "Discover",
                desc: "We listen, research, and understand your users' deepest needs before touching any design tools.",
              },
              {
                step: "02",
                title: "Define",
                desc: "Clarity emerges through constraints. We distill insights into focused design principles and goals.",
              },
              {
                step: "03",
                title: "Design",
                desc: "Every element serves a purpose. We craft interfaces that guide users naturally toward their goals.",
              },
              {
                step: "04",
                title: "Deliver",
                desc: "Pixel-perfect execution meets seamless engineering — bringing refined design to life.",
              },
            ].map((item, i) => (
              <div
                key={item.step}
                style={{
                  display: "grid",
                  gridTemplateColumns: i % 2 === 0 ? "1fr auto 1fr" : "1fr auto 1fr",
                  gap: 40,
                  marginBottom: 100,
                  alignItems: "center",
                }}
              >
                {i % 2 === 0 && (
                  <>
                    <div className="fade-left" style={{ textAlign: "right" }}>
                      <div
                        className="text-accent"
                        style={{
                          fontSize: "4rem",
                          fontWeight: 900,
                          lineHeight: 1,
                          marginBottom: 16,
                          opacity: 0.3,
                        }}
                      >
                        {item.step}
                      </div>
                      <h3 className="text-main" style={{ fontWeight: 800, fontSize: 24, marginBottom: 12 }}>
                        {item.title}
                      </h3>
                      <p className="text-muted" style={{ lineHeight: 1.7, fontSize: 16 }}>
                        {item.desc}
                      </p>
                    </div>

                    {/* Timeline Dot */}
                    <div
                      className="bg-accent shadow-accent"
                      style={{
                        width: 20,
                        height: 20,
                        borderRadius: "50%",
                        zIndex: 2,
                      }}
                    />

                    <div />
                  </>
                )}

                {i % 2 !== 0 && (
                  <>
                    <div />

                    {/* Timeline Dot */}
                    <div
                      className="bg-accent shadow-accent"
                      style={{
                        width: 20,
                        height: 20,
                        borderRadius: "50%",
                        zIndex: 2,
                      }}
                    />

                    <div className="fade-right">
                      <div
                        className="text-accent"
                        style={{
                          fontSize: "4rem",
                          fontWeight: 900,
                          lineHeight: 1,
                          marginBottom: 16,
                          opacity: 0.3,
                        }}
                      >
                        {item.step}
                      </div>
                      <h3 className="text-main" style={{ fontWeight: 800, fontSize: 24, marginBottom: 12 }}>
                        {item.title}
                      </h3>
                      <p className="text-muted" style={{ lineHeight: 1.7, fontSize: 16 }}>
                        {item.desc}
                      </p>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- MINIMALIST PROJECT SHOWCASE ---------------- */}
      <section
        className="bg-surface-alt fade-up"
        style={{
          padding: "160px 24px",
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2
            className="text-main"
            style={{
              fontWeight: 800,
              fontSize: 32,
              textAlign: "center",
              marginBottom: 100,
            }}
          >
            Selected Work
          </h2>

          <div style={{ display: "flex", flexDirection: "column", gap: 160 }}>
            {[
              { title: "Zenith", tag: "Wellness App", color: "preview-accent" },
              { title: "Pulse", tag: "Analytics Dashboard", color: "preview-secondary" },
              { title: "Flow", tag: "Productivity Tool", color: "preview-gradient" },
            ].map((project) => (
              <div key={project.title} className="fade-up" style={{ textAlign: "center" }}>
                <div
                  className={`${project.color} hover-lift shadow-accent-hover`}
                  style={{
                    height: 480,
                    borderRadius: 24,
                    marginBottom: 32,
                    maxWidth: "100%",
                  }}
                />
                <div className="text-accent" style={{ fontSize: 13, fontWeight: 600, marginBottom: 8, letterSpacing: "1px" }}>
                  {project.tag}
                </div>
                <h3 className="text-main" style={{ fontWeight: 700, fontSize: 28 }}>
                  {project.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- PRINCIPLES GRID ---------------- */}
      <section
        className="bg-surface fade-up"
        style={{
          padding: "160px 24px",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <h2 className="text-main" style={{ fontWeight: 800, fontSize: 32, marginBottom: 20 }}>
            Our Principles
          </h2>
          <p className="text-muted" style={{ marginBottom: 80, fontSize: 17 }}>
            Values that guide every decision, design, and detail.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: 48,
            }}
          >
            {[
              { title: "Simplicity", desc: "Remove until nothing is left to remove." },
              { title: "Empathy", desc: "Design for humans, not interfaces." },
              { title: "Precision", desc: "Every pixel, every word, every moment matters." },
              { title: "Honesty", desc: "Build with transparency and purpose." },
            ].map((item) => (
              <div
                key={item.title}
                className="hover-lift"
                style={{
                  padding: "32px 20px",
                  textAlign: "center",
                }}
              >
                <h4 className="text-main" style={{ fontWeight: 800, marginBottom: 12, fontSize: 20 }}>
                  {item.title}
                </h4>
                <p className="text-muted" style={{ fontSize: 15, lineHeight: 1.6 }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- MINIMALIST CTA ---------------- */}
      <section
        className="bg-gradient-accent fade-up"
        style={{
          padding: "140px 24px",
          textAlign: "center",
          color: "var(--color-surface)",
        }}
      >
        <div style={{ maxWidth: "680px", margin: "0 auto" }}>
          <h2 style={{ fontWeight: 800, fontSize: 36, marginBottom: 20, lineHeight: 1.2 }}>
            Start With Clarity
          </h2>
          <p style={{ opacity: 0.95, marginBottom: 36, fontSize: 18, lineHeight: 1.7 }}>
            Let's collaborate to create something beautiful, functional, and deeply human.
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
            Begin the Conversation
          </button>
        </div>
      </section>
    </main>
  );
}
