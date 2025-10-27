import React from "react";

export default function About() {
  return (
    <main
      className="fade-in"
      style={{
        position: "relative",
        overflow: "hidden",
        background: "var(--color-bg)",
        color: "var(--color-text)",
      }}
    >
      {/* Floating Ambient Elements */}
      <div
        className="bg-gradient-accent float"
        style={{
          position: "absolute",
          top: "15%",
          left: "10%",
          width: 200,
          height: 200,
          borderRadius: "50%",
          opacity: 0.15,
          filter: "blur(80px)",
          zIndex: 0,
        }}
      />
      <div
        className="bg-gradient-secondary float"
        style={{
          position: "absolute",
          bottom: "15%",
          right: "10%",
          width: 260,
          height: 260,
          borderRadius: "50%",
          opacity: 0.12,
          filter: "blur(100px)",
          zIndex: 0,
        }}
      />

      {/* ---------------- HERO ---------------- */}
      <section
        className="fade-up"
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          textAlign: "center",
          padding: "0 24px",
          position: "relative",
          zIndex: 1,
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
          We craft meaning<br />through motion and form.
        </h1>
        <p
          className="text-muted"
          style={{
            maxWidth: 640,
            margin: "0 auto",
            lineHeight: 1.7,
            fontSize: 18,
          }}
        >
          Every brand tells a story. We transform that story into immersive design systems that
          move, react, and inspire.
        </p>
      </section>

      {/* ---------------- OUR PHILOSOPHY ---------------- */}
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
            gridTemplateColumns: "repeat(auto-fit, minmax(480px, 1fr))",
            alignItems: "center",
            gap: 80,
          }}
        >
          <div className="fade-left">
            <h2 className="text-main" style={{ fontWeight: 800, marginBottom: 16 }}>
              Philosophy
            </h2>
            <p className="text-muted" style={{ lineHeight: 1.8, marginBottom: 16 }}>
              Design isn’t decoration — it’s communication. Every pixel, shadow, and motion carries
              intention. We use depth, rhythm, and clarity to make ideas tangible.
            </p>
            <p className="text-muted" style={{ lineHeight: 1.8 }}>
              Our philosophy: design should *feel alive*, but never demand attention. It should
              guide, inspire, and invite exploration.
            </p>
          </div>

          <div
            className="bg-gradient-accent hover-lift shadow-accent"
            style={{
              height: 420,
              borderRadius: 20,
            }}
          />
        </div>
      </section>

      {/* ---------------- STUDIO ETHOS ---------------- */}
      <section
        className="bg-surface fade-up"
        style={{
          padding: "140px 24px",
        }}
      >
        <div
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
            textAlign: "center",
          }}
        >
          <h2 className="text-main" style={{ fontWeight: 800, marginBottom: 16 }}>
            The Studio Ethos
          </h2>
          <p className="text-muted" style={{ marginBottom: 80 }}>
            A philosophy grounded in the intersection of technology, design, and human perception.
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
                title: "Human Technology",
                desc: "We design with empathy — interfaces that feel human, not mechanical.",
              },
              {
                title: "Design as Dialogue",
                desc: "Good design listens before it speaks. We craft spaces that respond to users’ needs.",
              },
              {
                title: "Perpetual Exploration",
                desc: "We thrive in the unknown — testing, learning, and refining to create timeless results.",
              },
            ].map((ethos) => (
              <div
                key={ethos.title}
                className="bg-surface-alt hover-lift shadow-accent-hover"
                style={{
                  padding: "40px 30px",
                  borderRadius: 16,
                  textAlign: "left",
                }}
              >
                <h3 className="text-main" style={{ fontWeight: 700, marginBottom: 8 }}>
                  {ethos.title}
                </h3>
                <p className="text-muted" style={{ lineHeight: 1.6 }}>
                  {ethos.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- EXPERIENCE STRIP ---------------- */}
      <section
        className="bg-gradient-secondary fade-up"
        style={{
          padding: "160px 24px",
          color: "var(--color-surface)",
          textAlign: "center",
          position: "relative",
        }}
      >
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <h2 style={{ fontWeight: 800, fontSize: "2.2rem", marginBottom: 16 }}>
            A decade of exploration.
          </h2>
          <p style={{ opacity: 0.9, marginBottom: 60 }}>
            We’ve collaborated with global brands, startups, and thinkers — creating experiences
            that span industries and cultures.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: 40,
            }}
          >
            {[
              { stat: "120+", label: "Projects Delivered" },
              { stat: "20+", label: "Countries Reached" },
              { stat: "10yrs", label: "Design Evolution" },
              { stat: "∞", label: "Ideas Explored" },
            ].map((item) => (
              <div key={item.label} className="fade-up">
                <h3 style={{ fontWeight: 800, fontSize: 36, marginBottom: 4 }}>{item.stat}</h3>
                <p style={{ opacity: 0.8 }}>{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- CTA ---------------- */}
      <section
        className="bg-surface fade-up"
        style={{
          padding: "120px 24px",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: "700px", margin: "0 auto" }}>
          <h2 className="text-main" style={{ fontWeight: 800, marginBottom: 12 }}>
            Let’s create what’s next.
          </h2>
          <p className="text-muted" style={{ marginBottom: 28 }}>
            Explore the intersection of innovation and design with a team that lives to imagine.
          </p>
          <button
            className="btn-gradient hover-lift"
            style={{
              borderRadius: 10,
              padding: "12px 22px",
              fontWeight: 600,
            }}
          >
            Contact Studio
          </button>
        </div>
      </section>
    </main>
  );
}
