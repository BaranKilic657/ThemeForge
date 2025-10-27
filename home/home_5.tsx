import React from "react";

export default function Home() {
  return (
    <main style={{ overflow: "hidden" }}>
      <style>{`
        @media (max-width: 768px) {
          section { padding: 60px 20px !important; }
          h1 { font-size: 2.8rem !important; }
          h2 { font-size: 24px !important; }
          [style*="flex: 1 1"] { flex: 1 1 100% !important; }
          [style*="flexWrap"] { flex-direction: column !important; }
        }
      `}</style>
      {/* ---------------- HERO INTRO ---------------- */}
      <section
        className="bg-surface-alt shadow-accent fade-in"
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          textAlign: "center",
          padding: "0 24px",
        }}
      >
        <h1
          className="text-main text-highlight"
          style={{
            fontSize: "4rem",
            fontWeight: 800,
            lineHeight: 1.1,
            marginBottom: 20,
          }}
        >
          Every pixel tells a story.
        </h1>
        <p
          className="text-muted fade-up"
          style={{
            maxWidth: 640,
            margin: "0 auto",
            lineHeight: 1.7,
            fontSize: 18,
          }}
        >
          We craft immersive digital experiences that connect emotion and purpose — blending
          narrative, movement, and identity.
        </p>
      </section>

      {/* ---------------- STORY SECTION 1 ---------------- */}
      <section
        className="bg-surface fade-left"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "120px 24px",
          gap: 60,
          flexWrap: "wrap",
        }}
      >
        <div style={{ flex: "1 1 500px" }}>
          <h2 className="text-main" style={{ fontWeight: 800, marginBottom: 14 }}>
            Step 01 — Discovery
          </h2>
          <p className="text-muted" style={{ lineHeight: 1.7 }}>
            We begin with questions. Understanding people, needs, and context helps us design
            products that matter. Curiosity drives clarity.
          </p>
        </div>
        <div
          className="preview-accent hover-lift shadow-accent-hover"
          style={{
            flex: "1 1 440px",
            height: 280,
            borderRadius: 16,
          }}
        />
      </section>

      {/* ---------------- STORY SECTION 2 ---------------- */}
      <section
        className="bg-surface-alt fade-right"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "120px 24px",
          gap: 60,
          flexWrap: "wrap-reverse",
        }}
      >
        <div
          className="preview-secondary hover-lift shadow-accent-hover"
          style={{
            flex: "1 1 440px",
            height: 280,
            borderRadius: 16,
          }}
        />
        <div style={{ flex: "1 1 500px" }}>
          <h2 className="text-main" style={{ fontWeight: 800, marginBottom: 14 }}>
            Step 02 — Design
          </h2>
          <p className="text-muted" style={{ lineHeight: 1.7 }}>
            We explore composition, color, motion, and rhythm — shaping stories that feel alive.
            Each interface is a dialogue between user and brand.
          </p>
        </div>
      </section>

      {/* ---------------- STORY SECTION 3 ---------------- */}
      <section
        className="bg-surface fade-left"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "120px 24px",
          gap: 60,
          flexWrap: "wrap",
        }}
      >
        <div style={{ flex: "1 1 500px" }}>
          <h2 className="text-main" style={{ fontWeight: 800, marginBottom: 14 }}>
            Step 03 — Launch
          </h2>
          <p className="text-muted" style={{ lineHeight: 1.7 }}>
            With precision and performance, we bring every detail to life. We ship products that
            feel refined, seamless, and unforgettable.
          </p>
        </div>
        <div
          className="preview-accent hover-lift shadow-accent-hover"
          style={{
            flex: "1 1 440px",
            height: 280,
            borderRadius: 16,
          }}
        />
      </section>

      {/* ---------------- VISUAL QUOTE ---------------- */}
      <section
        className="bg-gradient-accent fade-up"
        style={{
          color: "var(--color-surface)",
          padding: "160px 24px",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "2.2rem", fontWeight: 700, marginBottom: 20 }}>
            “Design is not what it looks like — it’s how it feels when everything works in harmony.”
          </h2>
          <p style={{ opacity: 0.85, fontWeight: 500 }}>— The Vision Team</p>
        </div>
      </section>

      {/* ---------------- FINAL CTA / OUTRO ---------------- */}
      <section
        className="bg-surface-alt fade-up"
        style={{
          textAlign: "center",
          padding: "100px 24px 120px",
          position: "relative",
        }}
      >
        <div
          className="bg-gradient-secondary float"
          style={{
            position: "absolute",
            top: "10%",
            left: "10%",
            width: 140,
            height: 140,
            borderRadius: "50%",
            opacity: 0.25,
            filter: "blur(40px)",
          }}
        />
        <div style={{ position: "relative", zIndex: 2, maxWidth: 800, margin: "0 auto" }}>
          <h2 className="text-main" style={{ fontWeight: 800, marginBottom: 16 }}>
            Begin your next chapter with us.
          </h2>
          <p className="text-muted" style={{ marginBottom: 28 }}>
            Let’s design something that moves people — from idea to interface.
          </p>
          <button
            className="accent hover-lift"
            style={{
              borderRadius: 10,
              padding: "12px 22px",
              fontWeight: 600,
            }}
          >
            Start the Story
          </button>
        </div>
      </section>
    </main>
  );
}
