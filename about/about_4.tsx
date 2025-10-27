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
      {/* ---------- HERO / INTRO ---------- */}
      <section
        className="bg-gradient-accent fade-up"
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          color: "var(--color-surface)",
          padding: "0 24px",
        }}
      >
        <h1 style={{ fontSize: "4rem", fontWeight: 800, lineHeight: 1.1, marginBottom: 24 }}>
          Design is how we tell our story.
        </h1>
        <p style={{ maxWidth: 640, margin: "0 auto", opacity: 0.9, lineHeight: 1.7 }}>
          It’s more than visuals. It’s a language — one that connects humans and technology through
          feeling and clarity.
        </p>
      </section>

      {/* ---------- SECTION 1: ORIGIN STORY ---------- */}
      <section
        className="bg-surface fade-up"
        style={{
          padding: "140px 24px",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <h2 className="text-main" style={{ fontWeight: 800, marginBottom: 24 }}>
            Every idea starts small.
          </h2>
          <p className="text-muted" style={{ lineHeight: 1.8, marginBottom: 80 }}>
            In 2017, a few designers sat around a table, sketching what would become the foundation
            of NovaSphere. We believed the web could be more emotional — not just functional.
          </p>

          <div
            className="bg-gradient-secondary hover-lift shadow-accent"
            style={{
              height: 360,
              borderRadius: 20,
              margin: "0 auto",
              maxWidth: 720,
            }}
          />
        </div>
      </section>

      {/* ---------- SECTION 2: PHILOSOPHY + IMMERSION ---------- */}
      <section
        className="bg-surface-alt fade-up"
        style={{
          padding: "160px 24px",
          position: "relative",
        }}
      >
        <div
          className="bg-gradient-accent float"
          style={{
            position: "absolute",
            top: "15%",
            left: "10%",
            width: 200,
            height: 200,
            opacity: 0.1,
            borderRadius: "50%",
            filter: "blur(100px)",
            zIndex: 0,
          }}
        />
        <div
          className="bg-gradient-secondary float"
          style={{
            position: "absolute",
            bottom: "10%",
            right: "8%",
            width: 260,
            height: 260,
            opacity: 0.1,
            borderRadius: "50%",
            filter: "blur(100px)",
            zIndex: 0,
          }}
        />

        <div
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
            position: "relative",
            zIndex: 1,
          }}
        >
          <h2
            className="text-main"
            style={{
              fontWeight: 800,
              textAlign: "center",
              marginBottom: 20,
            }}
          >
            A Philosophy of Movement
          </h2>
          <p
            className="text-muted"
            style={{
              maxWidth: 720,
              margin: "0 auto 100px",
              textAlign: "center",
              lineHeight: 1.8,
            }}
          >
            We believe design should feel alive. Every hover, transition, and scroll interaction
            should breathe — creating emotion, not just action.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: 48,
            }}
          >
            {[
              {
                title: "Depth & Motion",
                desc: "We use light, shadow, and animation to make digital design tangible and dynamic.",
              },
              {
                title: "Precision in Form",
                desc: "Every pixel, margin, and transition aligns with our principles of balance and grace.",
              },
              {
                title: "Empathy in Function",
                desc: "We design for real people — interactions that feel natural, not forced.",
              },
            ].map((philo) => (
              <div
                key={philo.title}
                className="bg-surface hover-lift shadow-accent-hover"
                style={{
                  padding: "36px 28px",
                  borderRadius: 16,
                }}
              >
                <h3 className="text-main" style={{ fontWeight: 700, marginBottom: 8 }}>
                  {philo.title}
                </h3>
                <p className="text-muted" style={{ lineHeight: 1.6 }}>
                  {philo.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- SECTION 3: TIMELINE VISUAL STRIP ---------- */}
      <section
        className="bg-surface fade-up"
        style={{
          padding: "160px 24px",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <h2 className="text-main" style={{ fontWeight: 800, marginBottom: 16 }}>
            Our Journey in Motion
          </h2>
          <p className="text-muted" style={{ marginBottom: 100 }}>
            From our beginnings to the experiences we craft today — a decade of creative evolution.
          </p>

          <div
            style={{
              display: "grid",
              gap: 60,
              textAlign: "left",
            }}
          >
            {[
              {
                year: "2018",
                title: "Founded as a Design Collective",
                desc: "We started by crafting micro-interactions and product identities for early startups.",
              },
              {
                year: "2020",
                title: "Built Our Own Motion System",
                desc: "We created an internal animation language now used in over 20 global products.",
              },
              {
                year: "2024",
                title: "Expanded into Spatial Design",
                desc: "We now explore AR and immersive experiences where interaction meets story.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-surface-alt hover-lift shadow-accent-hover"
                style={{
                  borderLeft: "3px solid var(--color-accent)",
                  padding: "36px 32px",
                  borderRadius: 16,
                }}
              >
                <h4 className="text-accent" style={{ fontWeight: 700, marginBottom: 4 }}>
                  {item.year}
                </h4>
                <h3 className="text-main" style={{ fontWeight: 700, marginBottom: 8 }}>
                  {item.title}
                </h3>
                <p className="text-muted">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- SECTION 4: VISION ---------- */}
      <section
        className="bg-gradient-secondary fade-up"
        style={{
          padding: "160px 24px",
          textAlign: "center",
          color: "var(--color-surface)",
        }}
      >
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <h2 style={{ fontWeight: 800, marginBottom: 16 }}>
            Our vision for the next chapter.
          </h2>
          <p style={{ opacity: 0.9, lineHeight: 1.7, marginBottom: 40 }}>
            The future of design isn’t just visual — it’s experiential. We aim to craft digital
            ecosystems that adapt, respond, and evolve in real time.
          </p>
          <button
            className="accent hover-lift"
            style={{
              borderRadius: 10,
              padding: "12px 22px",
              fontWeight: 600,
            }}
          >
            Explore Our Work
          </button>
        </div>
      </section>
    </main>
  );
}
