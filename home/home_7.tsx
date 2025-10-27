import React from "react";

export default function Home() {
  return (
    <main className="fade-in" style={{ overflow: "hidden" }}>
      {/* ---------------- HERO ---------------- */}
      <section
        className="bg-surface-alt shadow-accent-hover"
        style={{
          minHeight: "90vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "0 24px",
        }}
      >
        <div style={{ maxWidth: 900 }}>
          <h1
            className="text-main text-highlight"
            style={{
              fontSize: "3.8rem",
              fontWeight: 800,
              lineHeight: 1.1,
              marginBottom: 20,
            }}
          >
            Ideas in Motion.
          </h1>
          <p
            className="text-muted fade-up"
            style={{
              maxWidth: 640,
              margin: "0 auto 40px",
              lineHeight: 1.7,
            }}
          >
            Transforming creativity into systems — and systems into emotion-driven digital products.
          </p>
          <button
            className="btn-gradient hover-lift"
            style={{
              borderRadius: 10,
              padding: "14px 26px",
              fontWeight: 600,
            }}
          >
            Explore Our Work
          </button>
        </div>
      </section>

      {/* ---------------- MOSAIC GRID SECTION ---------------- */}
      <section
        className="bg-surface fade-up"
        style={{
          padding: "120px 24px",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gridAutoRows: "260px",
            gap: 24,
          }}
        >
          {/* Mosaic tiles */}
          {[
            { title: "Innovation", color: "preview-accent" },
            { title: "Motion Design", color: "preview-secondary" },
            { title: "Digital Strategy", color: "preview-gradient" },
            { title: "Brand Experience", color: "bg-surface-alt" },
            { title: "AI Integration", color: "bg-surface" },
            { title: "Product Identity", color: "preview-accent" },
          ].map((tile, index) => (
            <div
              key={index}
              className={`${tile.color} hover-lift shadow-accent-hover`}
              style={{
                borderRadius: 14,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <h3
                className="text-main"
                style={{
                  fontWeight: 700,
                  fontSize: 20,
                  zIndex: 2,
                }}
              >
                {tile.title}
              </h3>
              <div
                className="bg-gradient-accent"
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  width: "100%",
                  height: "30%",
                  opacity: 0.2,
                }}
              />
            </div>
          ))}
        </div>
      </section>

      {/* ---------------- MISSION / STORY ---------------- */}
      <section
        className="bg-surface-alt fade-up"
        style={{
          padding: "140px 24px",
        }}
      >
        <div
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(460px, 1fr))",
            gap: 60,
            alignItems: "center",
          }}
        >
          <div>
            <h2 className="text-main" style={{ fontWeight: 800, marginBottom: 14 }}>
              We design momentum.
            </h2>
            <p className="text-muted" style={{ marginBottom: 28, lineHeight: 1.7 }}>
              The world moves fast. We help brands move with it — through meaningful design,
              forward-thinking strategy, and seamless digital systems.
            </p>
            <a href="#" className="text-accent-hover" style={{ fontWeight: 600 }}>
              Learn about our approach →
            </a>
          </div>

          <div
            className="bg-gradient-secondary hover-lift shadow-accent-hover"
            style={{
              height: 360,
              borderRadius: 18,
            }}
          />
        </div>
      </section>

      {/* ---------------- TESTIMONIAL / QUOTE ---------------- */}
      <section
        className="bg-gradient-accent fade-up"
        style={{
          padding: "140px 24px",
          color: "var(--color-surface)",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <h2 style={{ fontWeight: 700, fontSize: "2rem", marginBottom: 16 }}>
            “Their designs don’t just look beautiful — they *feel* alive.”
          </h2>
          <p style={{ opacity: 0.85 }}>— Mira Lopez, CEO of Origin Labs</p>
        </div>
      </section>

      {/* ---------------- CTA SECTION ---------------- */}
      <section
        className="bg-surface fade-up"
        style={{
          textAlign: "center",
          padding: "120px 24px",
        }}
      >
        <div style={{ maxWidth: "700px", margin: "0 auto" }}>
          <h2 className="text-main" style={{ fontWeight: 800, marginBottom: 14 }}>
            Ready to shape what’s next?
          </h2>
          <p className="text-muted" style={{ marginBottom: 28 }}>
            Let’s collaborate to turn bold ideas into immersive, scalable realities.
          </p>
          <button
            className="accent hover-lift"
            style={{
              borderRadius: 10,
              padding: "12px 22px",
              fontWeight: 600,
            }}
          >
            Start Your Project
          </button>
        </div>
      </section>
    </main>
  );
}
