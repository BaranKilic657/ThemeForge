"use client";
import React, { useState } from "react";

export default function Home() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <main className="fade-in" style={{ overflow: "hidden" }}>
      <style>{`
        @media (max-width: 768px) {
          section { padding: 60px 20px !important; }
          h1 { font-size: 2.5rem !important; }
          h2 { font-size: 24px !important; }
          .stack-item { margin-bottom: 20px !important; }
          [style*="position: sticky"] { position: relative !important; }
        }
      `}</style>

      {/* ---------------- STICKY SCROLL HERO ---------------- */}
      <section
        className="bg-surface"
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "100px 24px",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: 800 }}>
          <h1
            className="text-main text-highlight"
            style={{
              fontSize: "4.5rem",
              fontWeight: 900,
              lineHeight: 1,
              marginBottom: 28,
              letterSpacing: "-2px",
            }}
          >
            Scroll-Driven <br /> Experiences
          </h1>
          <p
            className="text-muted"
            style={{
              fontSize: 19,
              lineHeight: 1.8,
              marginBottom: 40,
            }}
          >
            Interactive narratives that unfold as you explore — where every scroll reveals a new layer of story.
          </p>
          <button
            className="btn-gradient hover-lift"
            style={{
              borderRadius: 10,
              padding: "16px 36px",
              fontWeight: 700,
            }}
          >
            Begin Journey
          </button>
        </div>
      </section>

      {/* ---------------- STICKY STACKED CARDS ---------------- */}
      <section className="bg-surface-alt" style={{ padding: "200px 24px" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <h2
            className="text-main"
            style={{
              fontWeight: 800,
              fontSize: 36,
              marginBottom: 100,
              textAlign: "center",
            }}
          >
            Layered Storytelling
          </h2>

          {/* Stack of sticky cards */}
          <div style={{ display: "flex", flexDirection: "column", gap: 80 }}>
            {[
              {
                num: "01",
                title: "Narrative Structure",
                desc: "Stories unfold through carefully choreographed scroll interactions that guide attention and build anticipation.",
                color: "var(--color-accent)",
              },
              {
                num: "02",
                title: "Visual Hierarchy",
                desc: "Each element appears at precisely the right moment, creating rhythm and flow that feels natural and engaging.",
                color: "var(--color-secondary)",
              },
              {
                num: "03",
                title: "Immersive Depth",
                desc: "Parallax motion and layered elements create dimensional experiences that pull users deeper into the content.",
                color: "var(--color-accent-hover)",
              },
            ].map((item, i) => (
              <div
                key={item.num}
                className="stack-item"
                style={{
                  position: "sticky",
                  top: 100 + i * 40,
                  marginBottom: 60,
                }}
              >
                <div
                  className="bg-surface shadow-accent-hover hover-lift"
                  style={{
                    borderRadius: 24,
                    padding: "60px 48px",
                    borderLeft: `6px solid ${item.color}`,
                  }}
                >
                  <div
                    style={{
                      fontSize: "5rem",
                      fontWeight: 900,
                      opacity: 0.1,
                      lineHeight: 1,
                      marginBottom: 20,
                    }}
                  >
                    {item.num}
                  </div>
                  <h3
                    className="text-main"
                    style={{
                      fontWeight: 800,
                      fontSize: 28,
                      marginBottom: 16,
                    }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-muted" style={{ fontSize: 17, lineHeight: 1.8 }}>
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- PARALLAX SHOWCASE ---------------- */}
      <section className="bg-surface fade-up" style={{ padding: "160px 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <h2
            className="text-main"
            style={{
              fontWeight: 800,
              fontSize: 36,
              marginBottom: 80,
              textAlign: "center",
            }}
          >
            Featured Work
          </h2>

          <div style={{ display: "flex", flexDirection: "column", gap: 120 }}>
            {[
              { name: "Motion Studio", tag: "Portfolio Site" },
              { name: "Scroll Lab", tag: "Interactive Experience" },
              { name: "Layer System", tag: "Design Framework" },
            ].map((project, i) => (
              <div
                key={project.name}
                style={{
                  display: "grid",
                  gridTemplateColumns: i % 2 === 0 ? "1.3fr 1fr" : "1fr 1.3fr",
                  gap: 60,
                  alignItems: "center",
                }}
              >
                {i % 2 === 0 ? (
                  <>
                    <div
                      className="preview-accent shadow-accent-hover hover-lift"
                      style={{
                        height: 420,
                        borderRadius: 20,
                      }}
                    />
                    <div>
                      <div
                        className="text-accent"
                        style={{
                          fontSize: 13,
                          fontWeight: 700,
                          letterSpacing: "1.5px",
                          marginBottom: 12,
                        }}
                      >
                        {project.tag}
                      </div>
                      <h3
                        className="text-main"
                        style={{
                          fontWeight: 800,
                          fontSize: 32,
                          marginBottom: 16,
                        }}
                      >
                        {project.name}
                      </h3>
                      <p className="text-muted" style={{ lineHeight: 1.7, fontSize: 16 }}>
                        Scroll-based storytelling that captivates and converts.
                      </p>
                    </div>
                  </>
                ) : (
                  <>
                    <div>
                      <div
                        className="text-accent"
                        style={{
                          fontSize: 13,
                          fontWeight: 700,
                          letterSpacing: "1.5px",
                          marginBottom: 12,
                        }}
                      >
                        {project.tag}
                      </div>
                      <h3
                        className="text-main"
                        style={{
                          fontWeight: 800,
                          fontSize: 32,
                          marginBottom: 16,
                        }}
                      >
                        {project.name}
                      </h3>
                      <p className="text-muted" style={{ lineHeight: 1.7, fontSize: 16 }}>
                        Scroll-based storytelling that captivates and converts.
                      </p>
                    </div>
                    <div
                      className="preview-secondary shadow-accent-hover hover-lift"
                      style={{
                        height: 420,
                        borderRadius: 20,
                      }}
                    />
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- FULL-WIDTH CTA ---------------- */}
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
            Ready to Tell Your Story?
          </h2>
          <p style={{ fontSize: 18, lineHeight: 1.7, marginBottom: 36, opacity: 0.95 }}>
            Let's create scroll experiences that leave lasting impressions.
          </p>
          <button
            className="accent hover-lift"
            style={{
              borderRadius: 10,
              padding: "16px 36px",
              fontWeight: 700,
            }}
          >
            Start Project
          </button>
        </div>
      </section>
    </main>
  );
}
