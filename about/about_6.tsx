import React from "react";

export default function About() {
  return (
    <main
      className="fade-in"
      style={{
        overflow: "hidden",
        background: "var(--color-bg)",
        color: "var(--color-text)",
      }}
    >
      {/* ---------- HERO ---------- */}
      <section
        className="bg-surface-gradient fade-up"
        style={{
          minHeight: "90vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "0 24px",
        }}
      >
        <h1
          className="text-highlight"
          style={{
            fontSize: "4rem",
            fontWeight: 800,
            lineHeight: 1.1,
            marginBottom: 20,
          }}
        >
          Our identity is alive.
        </h1>
        <p
          className="text-muted"
          style={{ maxWidth: 640, margin: "0 auto", lineHeight: 1.7 }}
        >
          We evolve through design, experiment with technology, and craft with emotion.  
          Each project is a reflection of who we are — and what we’re becoming.
        </p>
      </section>

      {/* ---------- SECTION: MANIFEST BLOCKS ---------- */}
      <section
        className="bg-surface fade-up"
        style={{
          padding: "160px 24px",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(360px, 1fr))",
            gap: 60,
          }}
        >
          {[
            {
              title: "Design is language.",
              desc: "We speak in form, rhythm, and motion — our syntax is simplicity.",
              visual: "preview-accent",
            },
            {
              title: "Emotion drives experience.",
              desc: "We build not just for function, but for feeling — the quiet spark that connects users and meaning.",
              visual: "preview-secondary",
            },
            {
              title: "Technology is poetry.",
              desc: "We code like we compose — seeking harmony, pace, and resonance in every interaction.",
              visual: "preview-gradient",
            },
          ].map((item, i) => (
            <div
              key={i}
              className={`hover-lift shadow-accent-hover ${item.visual}`}
              style={{
                borderRadius: 20,
                padding: "60px 40px",
                color: "var(--color-surface)",
                minHeight: 380,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <div>
                <h2 style={{ fontWeight: 800, marginBottom: 12 }}>
                  {item.title}
                </h2>
                <p style={{ opacity: 0.9, lineHeight: 1.7 }}>{item.desc}</p>
              </div>
              <div
                className="float"
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: "50%",
                  background: "rgba(255,255,255,0.2)",
                  alignSelf: "flex-end",
                }}
              />
            </div>
          ))}
        </div>
      </section>

      {/* ---------- SECTION: GALLERY GRID ---------- */}
      <section
        className="bg-surface-alt fade-up"
        style={{
          padding: "160px 24px",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <h2 className="text-main" style={{ fontWeight: 800, marginBottom: 20 }}>
            Our Craft in Motion
          </h2>
          <p className="text-muted" style={{ marginBottom: 80 }}>
            Each piece we create is a moment in time —  
            a fusion of story, texture, and movement.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: 40,
            }}
          >
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="hover-lift shadow-accent-hover bg-surface"
                style={{
                  height: 260,
                  borderRadius: 16,
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <div
                  className={
                    i % 3 === 0
                      ? "bg-gradient-accent"
                      : i % 3 === 1
                      ? "bg-gradient-secondary"
                      : "preview-gradient"
                  }
                  style={{
                    position: "absolute",
                    inset: 0,
                    opacity: 0.8,
                    transition: "opacity var(--transition-speed) ease",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--color-surface)",
                    fontWeight: 700,
                    fontSize: 20,
                  }}
                >
                  Project {i + 1}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- SECTION: CREATIVE STATEMENT ---------- */}
      <section
        className="bg-surface fade-up"
        style={{
          padding: "180px 24px",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <h2
            className="text-highlight"
            style={{
              fontWeight: 800,
              fontSize: "2.4rem",
              lineHeight: 1.3,
              marginBottom: 24,
            }}
          >
            “We’re explorers — not just makers.”
          </h2>
          <p className="text-muted" style={{ lineHeight: 1.8, marginBottom: 60 }}>
            Curiosity is our compass. Every experiment, every collaboration, every misstep brings us
            closer to understanding how technology can amplify creativity and empathy in equal
            measure.
          </p>
          <button
            className="accent-outline hover-lift"
            style={{
              borderRadius: 10,
              padding: "12px 22px",
              fontWeight: 600,
            }}
          >
            Learn More About Us
          </button>
        </div>
      </section>

      {/* ---------- FOOTER / CTA STRIP ---------- */}
      <section
        className="bg-gradient-secondary fade-up"
        style={{
          padding: "120px 24px",
          color: "var(--color-surface)",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: 700, margin: "0 auto" }}>
          <h2 style={{ fontWeight: 800, marginBottom: 12 }}>
            Our design story keeps unfolding.
          </h2>
          <p style={{ opacity: 0.9, marginBottom: 28 }}>
            Join us in creating work that questions, delights, and defines what comes next.
          </p>
          <button
            className="btn-gradient hover-lift"
            style={{
              borderRadius: 10,
              padding: "12px 22px",
              fontWeight: 600,
            }}
          >
            View Open Roles
          </button>
        </div>
      </section>
    </main>
  );
}
