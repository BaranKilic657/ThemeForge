import React from "react";

export default function About() {
  return (
    <main
      className="fade-in"
      style={{
        overflow: "hidden",
        background: "var(--color-bg)",
        color: "var(--color-text)",
        fontFamily: "'Inter', sans-serif",
      }}
    >
      {/* ---------- HEADER / HERO ---------- */}
      <section
        className="bg-gradient-accent fade-up"
        style={{
          minHeight: "80vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          color: "var(--color-surface)",
          padding: "0 24px",
        }}
      >
        <h1
          style={{
            fontSize: "3.8rem",
            fontWeight: 800,
            lineHeight: 1.1,
            marginBottom: 24,
          }}
        >
          A note from the founder.
        </h1>
        <p style={{ maxWidth: 640, opacity: 0.9, lineHeight: 1.7 }}>
          The story of why we build, what drives us, and the people who make it all matter.
        </p>
      </section>

      {/* ---------- LETTER BODY ---------- */}
      <section
        className="bg-surface fade-up"
        style={{
          padding: "160px 24px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div
          className="hover-lift shadow-accent-hover"
          style={{
            background: "var(--color-surface-alt)",
            borderRadius: 20,
            padding: "80px 60px",
            maxWidth: 800,
            textAlign: "left",
            lineHeight: 1.9,
          }}
        >
          <p style={{ marginBottom: 28 }}>
            <span className="text-highlight" style={{ fontWeight: 700 }}>
              Dear Reader,
            </span>
          </p>

          <p className="text-muted" style={{ marginBottom: 24 }}>
            When I started NovaSphere, it wasn’t about building an agency or a company. It was about
            building a place — a place where creativity could feel like conversation. Where design
            wasn’t an output, but a dialogue between people and purpose.
          </p>

          <p className="text-muted" style={{ marginBottom: 24 }}>
            We believe in the small things — the quiet moments in an interface, the way a color
            shifts as you hover, the pause between motion and stillness. It’s in those tiny details
            that the magic lives. That’s where empathy turns into design.
          </p>

          <p className="text-muted" style={{ marginBottom: 24 }}>
            Over the years, we’ve worked with people who inspire us — dreamers, engineers,
            founders, artists. And every project reminds me of one truth: technology is most
            powerful when it feels human.
          </p>

          <p className="text-muted" style={{ marginBottom: 60 }}>
            So, this is our promise — to keep designing with heart, to keep listening, and to keep
            building experiences that mean something.
          </p>

          <p className="text-main" style={{ fontWeight: 700, fontSize: 18 }}>
            With gratitude,
          </p>
          <p
            className="text-accent"
            style={{
              fontSize: 28,
              fontFamily: "'Caveat', cursive",
              marginTop: 12,
            }}
          >
            — Alex Morin
          </p>
          <p className="text-muted" style={{ fontSize: 14 }}>
            Founder & Creative Director, NovaSphere
          </p>
        </div>
      </section>

      {/* ---------- VALUES PANEL ---------- */}
      <section
        className="bg-surface-alt fade-up"
        style={{
          padding: "140px 24px",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <h2 className="text-main" style={{ fontWeight: 800, marginBottom: 16 }}>
            What We Stand For
          </h2>
          <p className="text-muted" style={{ marginBottom: 80 }}>
            Simplicity. Empathy. Meaning. Everything we create starts from these principles.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: 40,
            }}
          >
            {[
              {
                title: "Honest Design",
                desc: "We create work that’s true to its purpose — no gimmicks, no noise.",
              },
              {
                title: "Human Connection",
                desc: "We build digital experiences that make people feel something genuine.",
              },
              {
                title: "Enduring Craft",
                desc: "Our work aims for longevity — designs that age gracefully with time.",
              },
            ].map((value) => (
              <div
                key={value.title}
                className="bg-surface hover-lift shadow-accent-hover"
                style={{
                  padding: "40px 32px",
                  borderRadius: 16,
                  textAlign: "left",
                }}
              >
                <h3 className="text-main" style={{ fontWeight: 700, marginBottom: 8 }}>
                  {value.title}
                </h3>
                <p className="text-muted">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- CLOSING / CTA ---------- */}
      <section
        className="bg-gradient-secondary fade-up"
        style={{
          padding: "120px 24px",
          textAlign: "center",
          color: "var(--color-surface)",
        }}
      >
        <div style={{ maxWidth: 720, margin: "0 auto" }}>
          <h2 style={{ fontWeight: 800, marginBottom: 12 }}>
            Our story continues with yours.
          </h2>
          <p style={{ opacity: 0.9, marginBottom: 28 }}>
            Whether you’re building your first product or reimagining your brand, let’s create
            something meaningful — together.
          </p>
          <button
            className="btn-gradient hover-lift"
            style={{
              borderRadius: 10,
              padding: "12px 22px",
              fontWeight: 600,
            }}
          >
            Get in Touch
          </button>
        </div>
      </section>
    </main>
  );
}
