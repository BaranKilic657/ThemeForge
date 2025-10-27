import React from "react";

export default function Home() {
  return (
    <main className="fade-in" style={{ overflow: "hidden" }}>
      <style>{`
        @media (max-width: 768px) {
          section { padding: 60px 20px !important; }
          h1 { font-size: 2.8rem !important; }
          h2 { font-size: 24px !important; }
          .overlapping-card { margin-top: -40px !important; }
          [style*="gridTemplateColumns"] { grid-template-columns: 1fr !important; gap: 32px !important; }
        }
      `}</style>

      {/* ---------------- GLASSMORPHISM HERO ---------------- */}
      <section
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "100px 24px",
          background: "linear-gradient(135deg, var(--color-accent) 0%, var(--color-secondary) 100%)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Floating Shapes */}
        <div
          className="float"
          style={{
            position: "absolute",
            width: 300,
            height: 300,
            borderRadius: "50%",
            background: "rgba(255,255,255,0.1)",
            top: "10%",
            left: "5%",
            filter: "blur(40px)",
          }}
        />
        <div
          className="float"
          style={{
            position: "absolute",
            width: 400,
            height: 400,
            borderRadius: "50%",
            background: "rgba(255,255,255,0.08)",
            bottom: "15%",
            right: "10%",
            filter: "blur(50px)",
          }}
        />

        {/* Glass Card */}
        <div
          className="hover-lift"
          style={{
            maxWidth: 720,
            background: "rgba(255, 255, 255, 0.15)",
            backdropFilter: "blur(20px)",
            borderRadius: 32,
            padding: "80px 60px",
            border: "1px solid rgba(255, 255, 255, 0.25)",
            boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
            textAlign: "center",
            color: "var(--color-surface)",
            position: "relative",
            zIndex: 2,
          }}
        >
          <h1
            style={{
              fontSize: "4rem",
              fontWeight: 900,
              lineHeight: 1.1,
              marginBottom: 24,
            }}
          >
            Glass & Blur
          </h1>
          <p
            style={{
              fontSize: 19,
              lineHeight: 1.7,
              marginBottom: 40,
              opacity: 0.95,
            }}
          >
            Translucent interfaces that create depth through transparency and sophisticated blur effects.
          </p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <button
              className="accent hover-lift"
              style={{
                borderRadius: 12,
                padding: "14px 32px",
                fontWeight: 700,
                background: "rgba(255, 255, 255, 0.9)",
                color: "var(--color-accent)",
              }}
            >
              Explore Design
            </button>
            <button
              className="hover-lift"
              style={{
                borderRadius: 12,
                padding: "14px 32px",
                fontWeight: 700,
                background: "rgba(255, 255, 255, 0.2)",
                border: "2px solid rgba(255, 255, 255, 0.5)",
                color: "white",
              }}
            >
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* ---------------- OVERLAPPING GLASS CARDS ---------------- */}
      <section className="bg-surface fade-up" style={{ padding: "160px 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <h2
            className="text-main"
            style={{
              fontWeight: 800,
              fontSize: 36,
              marginBottom: 100,
              textAlign: "center",
            }}
          >
            Layered Transparency
          </h2>

          <div style={{ display: "flex", flexDirection: "column", gap: 0, alignItems: "center" }}>
            {[
              {
                title: "Depth Through Glass",
                desc: "Multiple layers of translucent elements create visual depth without overwhelming the content.",
                gradient: "linear-gradient(135deg, var(--color-accent) 0%, var(--color-accent-hover) 100%)",
              },
              {
                title: "Frosted Surfaces",
                desc: "Backdrop blur effects separate content while maintaining visual connection to underlying layers.",
                gradient: "linear-gradient(135deg, var(--color-secondary) 0%, var(--color-accent) 100%)",
              },
              {
                title: "Light Reflection",
                desc: "Subtle highlights and borders mimic real glass properties for authentic material design.",
                gradient: "linear-gradient(135deg, var(--color-accent-hover) 0%, var(--color-secondary) 100%)",
              },
            ].map((item, i) => (
              <div
                key={item.title}
                className="overlapping-card hover-lift"
                style={{
                  marginTop: i === 0 ? 0 : -40,
                  marginLeft: i * 60,
                  marginRight: (2 - i) * 60,
                  position: "relative",
                  zIndex: 3 - i,
                  width: "100%",
                  maxWidth: 800,
                }}
              >
                <div
                  style={{
                    background: item.gradient,
                    borderRadius: 24,
                    padding: "60px 48px",
                    color: "var(--color-surface)",
                    backdropFilter: "blur(10px)",
                    border: "1px solid rgba(255, 255, 255, 0.2)",
                    boxShadow: "0 8px 32px rgba(0, 0, 0, 0.2)",
                  }}
                >
                  <h3
                    style={{
                      fontWeight: 800,
                      fontSize: 28,
                      marginBottom: 16,
                    }}
                  >
                    {item.title}
                  </h3>
                  <p style={{ fontSize: 17, lineHeight: 1.7, opacity: 0.95 }}>
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- GLASS GRID ---------------- */}
      <section className="bg-surface-alt fade-up" style={{ padding: "160px 24px" }}>
        <div style={{ maxWidth: 1300, margin: "0 auto" }}>
          <h2
            className="text-main"
            style={{
              fontWeight: 800,
              fontSize: 32,
              marginBottom: 80,
              textAlign: "center",
            }}
          >
            Features
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: 32,
              maxWidth: 900,
              margin: "0 auto",
            }}
          >
            {[
              { icon: "🌟", title: "Luminous UI", desc: "Interfaces that glow with subtle light" },
              { icon: "💎", title: "Crystal Clear", desc: "Clarity through transparency layers" },
              { icon: "✨", title: "Ethereal Feel", desc: "Lightweight and floating aesthetics" },
              { icon: "🎨", title: "Color Depth", desc: "Rich gradients behind frosted glass" },
            ].map((feature) => (
              <div
                key={feature.title}
                className="hover-lift"
                style={{
                  background: "rgba(255, 255, 255, 0.05)",
                  backdropFilter: "blur(10px)",
                  borderRadius: 20,
                  padding: "40px 32px",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  textAlign: "center",
                }}
              >
                <div style={{ fontSize: 48, marginBottom: 20 }}>{feature.icon}</div>
                <h3
                  className="text-main"
                  style={{
                    fontWeight: 800,
                    fontSize: 22,
                    marginBottom: 12,
                  }}
                >
                  {feature.title}
                </h3>
                <p className="text-muted" style={{ fontSize: 15, lineHeight: 1.6 }}>
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- FROSTED CTA ---------------- */}
      <section
        className="fade-up"
        style={{
          padding: "160px 24px",
          background: "linear-gradient(135deg, var(--color-secondary) 0%, var(--color-accent) 100%)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          className="float"
          style={{
            position: "absolute",
            width: 500,
            height: 500,
            borderRadius: "50%",
            background: "rgba(255, 255, 255, 0.1)",
            top: "-10%",
            right: "-10%",
            filter: "blur(60px)",
          }}
        />

        <div
          className="hover-lift"
          style={{
            maxWidth: 800,
            margin: "0 auto",
            background: "rgba(255, 255, 255, 0.15)",
            backdropFilter: "blur(20px)",
            borderRadius: 28,
            padding: "80px 60px",
            border: "1px solid rgba(255, 255, 255, 0.3)",
            textAlign: "center",
            color: "var(--color-surface)",
            position: "relative",
            zIndex: 2,
          }}
        >
          <h2
            style={{
              fontWeight: 900,
              fontSize: 40,
              marginBottom: 20,
              lineHeight: 1.2,
            }}
          >
            See Through to Possibilities
          </h2>
          <p style={{ fontSize: 18, lineHeight: 1.7, marginBottom: 36, opacity: 0.95 }}>
            Let's create interfaces that feel modern, light, and impossibly refined.
          </p>
          <button
            className="hover-lift"
            style={{
              borderRadius: 12,
              padding: "16px 36px",
              fontWeight: 700,
              background: "rgba(255, 255, 255, 0.9)",
              color: "var(--color-accent)",
              border: "none",
            }}
          >
            Start Creating
          </button>
        </div>
      </section>
    </main>
  );
}
