import React from "react";

export default function Home() {
  return (
    <main className="fade-in" style={{ overflow: "hidden" }}>
      {/* ---------------- SPLIT HERO - Editorial Magazine Style ---------------- */}
      <section
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(500px, 1fr))",
          minHeight: "100vh",
        }}
      >
        {/* Left - Bold Typography */}
        <div
          className="bg-gradient-accent fade-left"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "80px 60px",
            color: "var(--color-surface)",
          }}
        >
          <div style={{ maxWidth: 480 }}>
            <div style={{ fontSize: "7rem", fontWeight: 900, lineHeight: 0.85, marginBottom: 32 }}>
              BOLD
            </div>
            <div style={{ fontSize: "2rem", fontWeight: 300, opacity: 0.95, marginBottom: 40 }}>
              Typography-First Design
            </div>
            <button
              className="accent hover-lift"
              style={{
                borderRadius: 10,
                padding: "14px 28px",
                fontWeight: 600,
              }}
            >
              View Our Work
            </button>
          </div>
        </div>

        {/* Right - Stacked Content */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            className="bg-surface-alt fade-up"
            style={{
              flex: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: 48,
            }}
          >
            <div style={{ maxWidth: 400 }}>
              <h2 className="text-main" style={{ fontWeight: 800, marginBottom: 12, fontSize: 28 }}>
                Editorial Excellence
              </h2>
              <p className="text-muted" style={{ lineHeight: 1.7, fontSize: 16 }}>
                Every headline tells a story. We craft layouts that demand attention through bold type and visual hierarchy.
              </p>
            </div>
          </div>
          <div className="preview-secondary fade-up" style={{ flex: 1 }} />
        </div>
      </section>

      {/* ---------------- Asymmetric Bento Grid ---------------- */}
      <section className="bg-surface fade-up" style={{ padding: "140px 24px" }}>
        <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gridTemplateRows: "repeat(3, 220px)",
              gap: 20,
            }}
          >
            {/* Hero Card */}
            <div
              className="bg-surface-alt hover-lift shadow-accent-hover"
              style={{
                gridColumn: "1 / 3",
                gridRow: "1 / 3",
                borderRadius: 16,
                padding: 48,
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",
                background: "linear-gradient(135deg, var(--color-accent), var(--color-accent-hover))",
                color: "var(--color-surface)",
              }}
            >
              <h3 style={{ fontWeight: 900, fontSize: 32, marginBottom: 12 }}>
                Strategic Craft
              </h3>
              <p style={{ opacity: 0.9, fontSize: 17 }}>
                Design systems that scale with your ambition.
              </p>
            </div>

            <div className="bg-gradient-secondary hover-lift" style={{ borderRadius: 16 }} />
            
            <div
              className="bg-surface-alt hover-lift shadow-accent-hover"
              style={{
                borderRadius: 16,
                padding: 24,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
              }}
            >
              <h4 className="text-main" style={{ fontWeight: 800, fontSize: 22 }}>
                Vision
              </h4>
            </div>

            <div
              className="bg-surface-alt hover-lift shadow-accent-hover"
              style={{
                gridColumn: "3 / 5",
                borderRadius: 16,
                padding: 32,
              }}
            >
              <h4 className="text-main" style={{ fontWeight: 800, marginBottom: 10, fontSize: 20 }}>
                Identity Systems
              </h4>
              <p className="text-muted" style={{ fontSize: 15 }}>
                Cohesive brands that resonate across every touchpoint.
              </p>
            </div>

            <div className="preview-accent hover-lift" style={{ borderRadius: 16 }} />
            
            <div
              className="bg-surface-alt hover-lift shadow-accent-hover"
              style={{
                gridColumn: "2 / 4",
                borderRadius: 16,
                padding: 32,
              }}
            >
              <h4 className="text-main" style={{ fontWeight: 800, marginBottom: 10, fontSize: 20 }}>
                Motion Language
              </h4>
              <p className="text-muted" style={{ fontSize: 15 }}>
                Animated identities that bring static brands to life.
              </p>
            </div>

            <div
              className="bg-surface-alt hover-lift"
              style={{
                borderRadius: 16,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <h4 className="text-main" style={{ fontWeight: 900, fontSize: 48 }}>+</h4>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- Full-Width Image Hero ---------------- */}
      <section
        className="fade-up"
        style={{
          position: "relative",
          height: "75vh",
          overflow: "hidden",
        }}
      >
        <div className="preview-gradient" style={{ position: "absolute", inset: 0 }} />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(180deg, transparent 40%, rgba(0,0,0,0.5) 100%)",
            display: "flex",
            alignItems: "flex-end",
            padding: "80px",
            color: "white",
          }}
        >
          <div style={{ maxWidth: 700 }}>
            <h2 style={{ fontWeight: 900, fontSize: 48, marginBottom: 16, lineHeight: 1.1 }}>
              Precision in Every Pixel
            </h2>
            <p style={{ fontSize: 19, opacity: 0.95, lineHeight: 1.5 }}>
              From the first concept sketch to the final launch — we obsess over every detail, every interaction, every moment.
            </p>
          </div>
        </div>
      </section>

      {/* ---------------- Statistics Strip ---------------- */}
      <section className="bg-surface-alt fade-up" style={{ padding: "120px 24px" }}>
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: 64,
            textAlign: "center",
          }}
        >
          {[
            { num: "250+", label: "Projects Shipped" },
            { num: "99%", label: "Client Retention" },
            { num: "75+", label: "Global Partners" },
            { num: "15yr", label: "Craft Mastery" },
          ].map((stat) => (
            <div key={stat.label} className="fade-up">
              <div
                className="text-accent"
                style={{ fontSize: "4rem", fontWeight: 900, marginBottom: 10 }}
              >
                {stat.num}
              </div>
              <div className="text-muted" style={{ fontWeight: 600, fontSize: 16, letterSpacing: "0.5px" }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ---------------- Featured Testimonial ---------------- */}
      <section className="bg-surface fade-up" style={{ padding: "140px 24px", textAlign: "center" }}>
        <div style={{ maxWidth: "920px", margin: "0 auto" }}>
          <div
            className="bg-surface-alt shadow-accent-hover hover-lift"
            style={{
              borderRadius: 24,
              padding: "80px 60px",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div
              className="bg-gradient-accent"
              style={{
                position: "absolute",
                top: "-50%",
                right: "-20%",
                width: 400,
                height: 400,
                borderRadius: "50%",
                opacity: 0.08,
                filter: "blur(60px)",
              }}
            />
            <p
              className="text-main"
              style={{
                fontSize: "1.75rem",
                fontWeight: 600,
                lineHeight: 1.5,
                marginBottom: 32,
                position: "relative",
              }}
            >
              "They didn't just redesign our brand — they transformed how we think about storytelling."
            </p>
            <div className="text-accent" style={{ fontWeight: 700, fontSize: 17 }}>
              — Marcus Rivera, Founder of Momentum
            </div>
          </div>

          {/* Carousel Dots */}
          <div style={{ display: "flex", gap: 10, justifyContent: "center", marginTop: 48 }}>
            {[1, 2, 3, 4, 5].map((i) => (
              <div
                key={i}
                style={{
                  width: i === 1 ? 40 : 10,
                  height: 10,
                  borderRadius: 5,
                  background: i === 1 ? "var(--color-accent)" : "var(--color-border)",
                  transition: "all 0.3s ease",
                }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- Split CTA ---------------- */}
      <section
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(500px, 1fr))",
          minHeight: "65vh",
        }}
      >
        <div
          className="bg-surface fade-left"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "80px 60px",
          }}
        >
          <div style={{ maxWidth: 520 }}>
            <h2 className="text-main" style={{ fontWeight: 900, fontSize: 42, marginBottom: 20, lineHeight: 1.1 }}>
              Let's Make Something Unforgettable
            </h2>
            <p className="text-muted" style={{ marginBottom: 32, lineHeight: 1.7, fontSize: 17 }}>
              Bold concepts. Refined execution. A partnership built on craft and ambition.
            </p>
            <button
              className="btn-gradient hover-lift"
              style={{
                borderRadius: 10,
                padding: "16px 32px",
                fontWeight: 700,
                fontSize: 16,
              }}
            >
              Start Your Project
            </button>
          </div>
        </div>

        <div className="bg-gradient-secondary fade-right" />
      </section>
    </main>
  );
}
