import React from "react";

export default function Home() {
  return (
    <main className="fade-in" style={{ overflow: "hidden" }}>
      <style>{`
        @media (max-width: 768px) {
          section { padding: 60px 20px !important; }
          h1 { font-size: 2.5rem !important; }
          h2 { font-size: 26px !important; }
          h3 { font-size: 20px !important; }
          [style*="minmax(480px"] { grid-template-columns: 1fr !important; }
          [style*="minmax(300px"] { grid-template-columns: 1fr !important; }
          [style*="rotate"] { transform: none !important; }
        }
      `}</style>
      {/* ---------------- HERO SECTION (Split Layout) ---------------- */}
      <section
        className="bg-surface shadow-accent-hover"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(480px, 1fr))",
          minHeight: "100vh",
        }}
      >
        {/* Left Side — Content */}
        <div
          className="fade-left"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "100px 48px",
          }}
        >
          <h1
            className="text-main text-highlight"
            style={{
              fontSize: "3.6rem",
              fontWeight: 800,
              lineHeight: 1.1,
              marginBottom: 20,
            }}
          >
            Build the <br /> Future of Design.
          </h1>
          <p
            className="text-muted"
            style={{
              lineHeight: 1.7,
              marginBottom: 32,
              maxWidth: 520,
            }}
          >
            Create experiences that connect, inspire, and scale — powered by
            human insight and digital craftsmanship.
          </p>
          <div style={{ display: "flex", gap: 16 }}>
            <button
              className="btn-gradient hover-lift"
              style={{
                borderRadius: 10,
                padding: "12px 22px",
                fontWeight: 600,
              }}
            >
              Get Started
            </button>
            <button
              className="accent-outline hover-lift"
              style={{
                borderRadius: 10,
                padding: "12px 22px",
                fontWeight: 600,
              }}
            >
              Learn More
            </button>
          </div>
        </div>

        {/* Right Side — Visual */}
        <div
          className="bg-gradient-accent fade-right"
          style={{
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            className="bg-surface-alt hover-lift shadow-accent"
            style={{
              width: "70%",
              height: "60%",
              borderRadius: 20,
              transform: "rotate(-3deg)",
              position: "absolute",
              zIndex: 1,
            }}
          />
          <div
            className="bg-surface hover-lift shadow-accent-hover"
            style={{
              width: "70%",
              height: "60%",
              borderRadius: 20,
              transform: "rotate(3deg)",
              position: "absolute",
              zIndex: 2,
            }}
          />
        </div>
      </section>

      {/* ---------------- FEATURED INSIGHT SECTION ---------------- */}
      <section
        className="bg-surface-alt fade-up"
        style={{
          padding: "120px 24px",
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto", textAlign: "center" }}>
          <h2 className="text-main" style={{ fontWeight: 800, marginBottom: 14 }}>
            Design that Drives Emotion.
          </h2>
          <p className="text-muted" style={{ marginBottom: 80 }}>
            We believe great design tells a story — one that resonates, inspires, and moves people to act.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: 48,
            }}
          >
            {[
              {
                title: "Visual Systems",
                desc: "Cohesive, scalable, and timeless. Systems built to evolve.",
              },
              {
                title: "Interactive Strategy",
                desc: "We merge data, design, and movement to engage users deeply.",
              },
              {
                title: "Identity Craft",
                desc: "Design that builds trust and distinct presence across platforms.",
              },
            ].map((feature) => (
              <div
                key={feature.title}
                className="bg-surface shadow-accent-hover hover-lift"
                style={{
                  borderRadius: 16,
                  padding: "36px 28px",
                  textAlign: "left",
                }}
              >
                <div
                  className="bg-gradient-secondary"
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: 10,
                    marginBottom: 20,
                  }}
                />
                <h3 className="text-main" style={{ fontWeight: 700, marginBottom: 10 }}>
                  {feature.title}
                </h3>
                <p className="text-muted" style={{ lineHeight: 1.6 }}>
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- SPLIT SHOWCASE ---------------- */}
      <section
        className="bg-surface fade-up"
        style={{
          padding: "140px 24px",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(480px, 1fr))",
          gap: 60,
          alignItems: "center",
        }}
      >
        <div className="fade-left">
          <div
            className="bg-surface-alt hover-lift shadow-accent-hover"
            style={{
              height: 320,
              borderRadius: 16,
              marginBottom: 20,
            }}
          />
          <div
            className="bg-gradient-accent hover-lift"
            style={{
              height: 320,
              borderRadius: 16,
              transform: "translateY(-100px) translateX(60px)",
              position: "relative",
              zIndex: 1,
            }}
          />
        </div>

        <div className="fade-right" style={{ maxWidth: 480 }}>
          <h2 className="text-main" style={{ fontWeight: 800, marginBottom: 12, marginLeft: 50 }}>
            A Seamless Blend of Art & Logic.
          </h2>
          <p className="text-muted" style={{ marginBottom: 28, marginLeft: 50 }}>
            Our team bridges creative exploration and precise execution, turning vision into tangible experiences that last.
          </p>
          <a href="#" className="text-accent-hover" style={{ fontWeight: 600, marginLeft: 50 }}>
            See Our Process →
          </a>
        </div>
      </section>

      {/* ---------------- CALL TO ACTION ---------------- */}
      <section
        className="bg-gradient-secondary fade-up"
        style={{
          padding: "120px 24px",
          textAlign: "center",
          color: "var(--color-surface)",
        }}
      >
        <div style={{ maxWidth: "700px", margin: "0 auto" }}>
          <h2 style={{ fontWeight: 800, marginBottom: 12 }}>
            Let’s Build Something Timeless.
          </h2>
          <p style={{ opacity: 0.9, marginBottom: 32 }}>
            Design that adapts, grows, and inspires — crafted for those shaping tomorrow.
          </p>
          <button
            className="accent hover-lift"
            style={{
              borderRadius: 10,
              padding: "12px 22px",
              fontWeight: 600,
            }}
          >
            Begin Your Journey
          </button>
        </div>
      </section>
    </main>
  );
}
