"use client";

export default function About5() {
  return (
    <div
      style={{
        minHeight: "100vh",
        paddingTop: 80,
      }}
    >
      {/* ---------- HERO / HEADER ---------- */}
      <section
        className="fade-up"
        style={{
          padding: "120px 24px 80px",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <div
            className="text-accent"
            style={{
              fontSize: 16,
              fontWeight: 700,
              letterSpacing: 2,
              textTransform: "uppercase",
              marginBottom: 16,
            }}
          >
            From the Founder
          </div>
          <h1
            className="text-main"
            style={{
              fontWeight: 900,
              fontSize: "clamp(40px, 6vw, 72px)",
              lineHeight: 1.15,
              marginBottom: 24,
            }}
          >
            A Letter to You
          </h1>
          <p className="text-muted" style={{ fontSize: 20, lineHeight: 1.7 }}>
            On design, purpose, and building a studio rooted in empathy.
          </p>
        </div>
      </section>

      {/* ---------- LETTER BODY ---------- */}
      <section
        className="fade-up"
        style={{
          padding: "60px 24px 140px",
        }}
      >
        <div
          className="bg-surface shadow-accent-hover"
          style={{
            maxWidth: "800px",
            margin: "0 auto",
            padding: "80px 60px",
            borderRadius: 20,
            lineHeight: 1.9,
            fontSize: 18,
          }}
        >
          <p className="text-muted" style={{ marginBottom: 24 }}>
            Hi, I'm Alex Morin. I founded NovaSphere in 2015 with a single belief — design should
            serve people, not platforms.
          </p>

          <p className="text-muted" style={{ marginBottom: 24 }}>
            When I started NovaSphere, it wasn't about building an agency or a company. It was about
            building a place — a place where creativity could feel like conversation. Where design
            wasn't an output, but a dialogue between people and purpose.
          </p>

          <p className="text-muted" style={{ marginBottom: 24 }}>
            We believe in the small things — the quiet moments in an interface, the way a color
            shifts as you hover, the pause between motion and stillness. It's in those tiny details
            that the magic lives. That's where empathy turns into design.
          </p>

          <p className="text-muted" style={{ marginBottom: 24 }}>
            Over the years, we've worked with people who inspire us — dreamers, engineers,
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
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2 className="text-main" style={{ fontWeight: 800, marginBottom: 16, textAlign: "center" }}>
            What We Stand For
          </h2>
          <p className="text-muted" style={{ marginBottom: 80, textAlign: "center" }}>
            Simplicity. Empathy. Meaning. Everything we create starts from these principles.
          </p>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
            }}
          >
            {[
              {
                title: "Honest Design",
                desc: "We create work that's true to its purpose — no gimmicks, no noise.",
                gradientClass: "bg-gradient-accent",
              },
              {
                title: "Human Connection",
                desc: "We build digital experiences that make people feel something genuine.",
                gradientClass: "bg-gradient-secondary",
              },
              {
                title: "Enduring Craft",
                desc: "Our work aims for longevity — designs that age gracefully with time.",
                gradientClass: "bg-gradient-accent",
              },
            ].map((value, i) => (
              <div
                key={value.title}
                className="hover-lift"
                style={{
                  background: "var(--color-surface)",
                  padding: "48px 60px",
                  display: "flex",
                  alignItems: "center",
                  gap: 48,
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <div
                  className={value.gradientClass}
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: 6,
                    height: "100%",
                  }}
                />
                <div
                  className="text-accent"
                  style={{
                    fontSize: 80,
                    fontWeight: 900,
                    opacity: 0.05,
                    minWidth: 100,
                  }}
                >
                  0{i + 1}
                </div>
                <div style={{ flex: 1 }}>
                  <h3 className="text-main" style={{ fontWeight: 800, fontSize: 28, marginBottom: 12 }}>
                    {value.title}
                  </h3>
                  <p className="text-muted" style={{ fontSize: 17, lineHeight: 1.7 }}>{value.desc}</p>
                </div>
                <div
                  className={value.gradientClass}
                  style={{
                    width: 80,
                    height: 80,
                    borderRadius: "50%",
                    opacity: 0.15,
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- CLOSING / CTA WITH QUOTE ---------- */}
      <section
        className="bg-surface-alt fade-up"
        style={{
          padding: "140px 24px",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <div
            className="text-accent"
            style={{
              fontSize: 80,
              fontWeight: 900,
              opacity: 0.1,
              marginBottom: -40,
            }}
          >
            "
          </div>
          <p
            className="text-main"
            style={{
              fontSize: 28,
              fontWeight: 600,
              lineHeight: 1.6,
              marginBottom: 40,
            }}
          >
            Great design isn't about making things look good. <br />
            It's about making things feel right.
          </p>
          <button
            className="hover-lift"
            style={{
              padding: "16px 48px",
              borderRadius: 12,
              fontSize: 17,
              fontWeight: 700,
              background: "var(--color-accent)",
              color: "var(--color-surface)",
              border: "none",
              cursor: "pointer",
            }}
          >
            Let's Work Together
          </button>
        </div>
      </section>

      {/* ---------- MOBILE CSS ---------- */}
      <style jsx>{`
        @media (max-width: 768px) {
          section {
            padding: 80px 20px !important;
          }
          h1 {
            font-size: 40px !important;
          }
          h2 {
            font-size: 32px !important;
          }
          div[style*="padding: 80px 60px"] {
            padding: 40px 24px !important;
          }
          div[style*="display: flex"] div[style*="gap: 48"] {
            flex-direction: column !important;
            gap: 24px !important;
          }
          div[style*="minWidth: 100"] {
            font-size: 48px !important;
            min-width: 60px !important;
          }
          div[style*="width: 80"][style*="height: 80"] {
            display: none !important;
          }
        }
      `}</style>
    </div>
  );
}
