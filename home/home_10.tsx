import React from "react";

export default function Home() {
  const [angle, setAngle] = React.useState(0);
  const [position, setPosition] = React.useState({ x: 50, y: 50 });

  React.useEffect(() => {
    let frame: number;
    let time = 0;
    const animate = () => {
      time += 0.01;
      setAngle((a) => (a + 0.2) % 360);
      setPosition({
        x: 50 + Math.sin(time) * 20,
        y: 50 + Math.cos(time * 0.7) * 15,
      });
      frame = requestAnimationFrame(animate);
    };
    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <main
      className="fade-in"
      style={{
        background: "var(--color-bg)",
        color: "var(--color-surface)",
        overflow: "hidden",
      }}
    >
      <style>{`
        @media (max-width: 768px) {
          section { padding: 60px 20px !important; }
          h1 { font-size: 2rem !important; }
          h2 { font-size: 1.8rem !important; }
          h3 { font-size: 18px !important; }
          [style*="minWidth: 420"] { min-width: 280px !important; }
          [style*="gridTemplateColumns: repeat(2"] { grid-template-columns: 1fr !important; }
          [style*="width: 480"] { width: 320px !important; height: 320px !important; padding: 40px !important; }
        }
      `}</style>
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
          background: `
            radial-gradient(
              circle at ${position.x}% ${position.y}%,
              color-mix(in srgb, var(--color-secondary) 60%, transparent 40%) 0%,
              transparent 50%
            ),
            linear-gradient(
              ${angle}deg,
              color-mix(in srgb, var(--color-accent) 85%, var(--color-secondary) 15%) 0%,
              color-mix(in srgb, var(--color-accent-hover) 70%, var(--color-bg) 30%) 100%
            )
          `,
          color: "var(--color-surface)",
          overflow: "hidden",
        }}
      >

        <h1
          style={{
            fontWeight: 800,
            fontSize: "4rem",
            lineHeight: 1.1,
            marginBottom: 24,
            zIndex: 2,
            position: "relative",
          }}
        >
          <span
            style={{
              background: "linear-gradient(135deg, #fff 0%, rgba(255,255,255,0.85) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              textShadow: "0 0 30px rgba(255,255,255,0.3)",
              fontWeight: 900,
            }}
          >
            Illuminating
          </span>{" "}
          ideas through design.
        </h1>
        <p
          style={{
            maxWidth: 680,
            marginBottom: 40,
            fontSize: 18,
            opacity: 0.9,
            zIndex: 2,
          }}
        >
          Where clarity meets depth — a design experience built for the next generation of digital storytelling.
        </p>

        <button
          className="accent hover-lift"
          style={{
            borderRadius: 10,
            padding: "14px 28px",
            fontWeight: 600,
            zIndex: 2,
          }}
        >
          Begin the Journey
        </button>
      </section>

      {/* ---------------- FEATURE STRIP ---------------- */}
      <section
        className="bg-surface fade-up"
        style={{
          padding: "100px 24px",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <h2 className="text-main" style={{ fontWeight: 800, marginBottom: 12 }}>
            Precision in Motion.
          </h2>
          <p className="text-muted" style={{ marginBottom: 60 }}>
            We design with purpose, shape with light, and build with clarity.
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
                title: "Reactive Systems",
                desc: "Interfaces that evolve dynamically with data and user context.",
              },
              {
                title: "High Fidelity Motion",
                desc: "Subtle transitions that evoke emotion without distraction.",
              },
              {
                title: "Architected Aesthetics",
                desc: "Design systems that balance beauty and function.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-surface-alt hover-lift shadow-accent-hover"
                style={{
                  borderRadius: 16,
                  padding: "40px 28px",
                  textAlign: "left",
                  backgroundColor: "rgba(255, 255, 255, 0.03)",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                <h3 className="text-main" style={{ fontWeight: 700, marginBottom: 8 }}>
                  {item.title}
                </h3>
                <p className="text-muted" style={{ lineHeight: 1.6 }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- VISUAL PREVIEW ---------------- */}
      <section
        className="bg-surface-alt fade-up"
        style={{
          position: "relative",
          padding: "160px 24px",
          textAlign: "center",
        }}
      >
        <div
          className="bg-gradient-accent"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            opacity: 0.05,
            zIndex: 0,
          }}
        />

        <div
          className="bg-surface shadow-accent hover-lift"
          style={{
            maxWidth: "1000px",
            height: 480,
            borderRadius: 24,
            margin: "0 auto 40px",
            overflow: "hidden",
            position: "relative",
            zIndex: 2,
          }}
        >
          <div
            className="preview-secondary"
            style={{
              position: "absolute",
              inset: 0,
              opacity: 0.9,
            }}
          />
        </div>

        <h2 className="text-main" style={{ fontWeight: 800, marginBottom: 12 }}>
          Designed for the dark.
        </h2>
        <p className="text-muted" style={{ maxWidth: 640, margin: "0 auto" }}>
          Built to shine where others fade — a visual system born in contrast and clarity.
        </p>
      </section>

      {/* ---------------- TESTIMONIAL / QUOTE ---------------- */}
      <section
        className="bg-gradient-secondary fade-up"
        style={{
          color: "var(--color-surface)",
          padding: "140px 24px",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <h2 style={{ fontWeight: 700, fontSize: "2rem", marginBottom: 16 }}>
            “Every line of code, every frame of motion — designed with intention.”
          </h2>
          <p style={{ opacity: 0.85 }}>— Visionary Design Collective</p>
        </div>
      </section>

      {/* ---------------- CTA BAND ---------------- */}
      <section
        className="bg-surface fade-up"
        style={{
          padding: "120px 24px",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: "700px", margin: "0 auto" }}>
          <h2 className="text-main" style={{ fontWeight: 800, marginBottom: 12 }}>
            Ready to create light in the dark?
          </h2>
          <p className="text-muted" style={{ marginBottom: 28 }}>
            Join us in shaping a future where design and technology become one visual language.
          </p>
          <button
            className="btn-gradient hover-lift"
            style={{
              borderRadius: 10,
              padding: "14px 26px",
              fontWeight: 600,
            }}
          >
            Start Now
          </button>
        </div>
      </section>
    </main>
  );
}
