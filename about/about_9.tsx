"use client";

export default function About9() {
  return (
    <div
      style={{
        minHeight: "100vh",
        paddingTop: 80,
      }}
    >
      {/* ---------- DIAGONAL HERO ---------- */}
      <section
        className="fade-up"
        style={{
          padding: "100px 24px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "var(--color-surface-alt)",
            transform: "skewY(-3deg)",
            transformOrigin: "top left",
            zIndex: 0,
          }}
        />
        <div style={{ maxWidth: "1400px", margin: "0 auto", position: "relative", zIndex: 1 }}>
          <div style={{ maxWidth: "800px" }}>
            <div
              className="text-accent"
              style={{
                fontSize: 15,
                fontWeight: 700,
                letterSpacing: 2,
                textTransform: "uppercase",
                marginBottom: 20,
              }}
            >
              Est. 2015
            </div>
            <h1
              className="text-main"
              style={{
                fontWeight: 900,
                fontSize: "clamp(44px, 6vw, 72px)",
                lineHeight: 1.1,
                marginBottom: 32,
              }}
            >
              Redefining digital experiences through design
            </h1>
            <p
              className="text-muted"
              style={{
                fontSize: 20,
                lineHeight: 1.7,
              }}
            >
              We're a collective of designers, developers, and thinkers building the future of
              digital products.
            </p>
          </div>
        </div>
      </section>

      {/* ---------- MAGAZINE-STYLE GRID ---------- */}
      <section
        className="fade-up"
        style={{
          padding: "140px 24px",
        }}
      >
        <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 32,
            }}
          >
            {/* Large Feature */}
            <div
              className="bg-gradient-accent hover-lift shadow-accent-hover"
              style={{
                gridRow: "span 2",
                padding: "60px 48px",
                borderRadius: 24,
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",
                minHeight: 600,
                position: "relative",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: 40,
                  right: 40,
                  fontSize: 120,
                  opacity: 0.15,
                }}
              >
                🎨
              </div>
              <div style={{ position: "relative", zIndex: 1 }}>
                <div
                  style={{
                    fontSize: 14,
                    fontWeight: 700,
                    letterSpacing: 2,
                    textTransform: "uppercase",
                    marginBottom: 16,
                    opacity: 0.9,
                  }}
                >
                  Our Mission
                </div>
                <h2 style={{ fontWeight: 900, fontSize: 42, marginBottom: 20 }}>
                  Creating meaningful impact through thoughtful design
                </h2>
                <p style={{ fontSize: 18, lineHeight: 1.7, opacity: 0.95 }}>
                  We believe that great design isn't just about aesthetics — it's about solving
                  real problems for real people. Every project we undertake is an opportunity to
                  make someone's life better, easier, or more enjoyable.
                </p>
              </div>
            </div>

            {/* Stat Cards */}
            <div
              className="bg-surface hover-lift shadow-accent-hover"
              style={{
                padding: "40px 36px",
                borderRadius: 24,
                border: "2px solid var(--color-border)",
              }}
            >
              <div
                className="text-accent"
                style={{
                  fontSize: 56,
                  fontWeight: 900,
                  marginBottom: 12,
                }}
              >
                350+
              </div>
              <h3 className="text-main" style={{ fontWeight: 800, fontSize: 22, marginBottom: 8 }}>
                Projects Delivered
              </h3>
              <p className="text-muted" style={{ fontSize: 15, lineHeight: 1.6 }}>
                From startups to Fortune 500s, we've helped bring countless visions to life.
              </p>
            </div>

            <div
              className="bg-surface hover-lift shadow-accent-hover"
              style={{
                padding: "40px 36px",
                borderRadius: 24,
                border: "2px solid var(--color-border)",
              }}
            >
              <div
                className="text-accent"
                style={{
                  fontSize: 56,
                  fontWeight: 900,
                  marginBottom: 12,
                }}
              >
                98%
              </div>
              <h3 className="text-main" style={{ fontWeight: 800, fontSize: 22, marginBottom: 8 }}>
                Client Satisfaction
              </h3>
              <p className="text-muted" style={{ fontSize: 15, lineHeight: 1.6 }}>
                Our clients become our partners, and many return for project after project.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- DIAGONAL SECTION - VALUES ---------- */}
      <section
        style={{
          padding: "140px 24px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "var(--color-surface-alt)",
            transform: "skewY(3deg)",
            transformOrigin: "top right",
            zIndex: 0,
          }}
        />
        <div style={{ maxWidth: "1400px", margin: "0 auto", position: "relative", zIndex: 1 }}>
          <h2
            className="text-main"
            style={{
              fontWeight: 800,
              fontSize: 36,
              marginBottom: 80,
              textAlign: "center",
            }}
          >
            What Drives Us
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 40,
            }}
          >
            {[
              {
                icon: "💡",
                title: "Innovation First",
                desc: "We push boundaries and explore new possibilities in every project we touch.",
              },
              {
                icon: "🤝",
                title: "Collaboration",
                desc: "The best work happens when diverse minds come together with a shared vision.",
              },
              {
                icon: "🎯",
                title: "Results Driven",
                desc: "Beautiful design is meaningless without measurable impact on your business.",
              },
              {
                icon: "🔍",
                title: "Attention to Detail",
                desc: "We obsess over every pixel, every interaction, every moment of the experience.",
              },
              {
                icon: "🚀",
                title: "Continuous Growth",
                desc: "We're always learning, evolving, and adapting to new technologies and methods.",
              },
              {
                icon: "💙",
                title: "Human Centered",
                desc: "People are at the heart of everything we create — their needs, their goals, their joy.",
              },
            ].map((value) => (
              <div
                key={value.title}
                className="bg-surface hover-lift shadow-accent-hover"
                style={{
                  padding: "40px 32px",
                  borderRadius: 20,
                  border: "2px solid var(--color-border)",
                }}
              >
                <div style={{ fontSize: 48, marginBottom: 20 }}>{value.icon}</div>
                <h3 className="text-main" style={{ fontWeight: 800, fontSize: 20, marginBottom: 12 }}>
                  {value.title}
                </h3>
                <p className="text-muted" style={{ fontSize: 15, lineHeight: 1.6 }}>
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- ASYMMETRIC SERVICES ---------- */}
      <section
        className="fade-up"
        style={{
          padding: "140px 24px",
        }}
      >
        <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
          <div style={{ marginBottom: 80 }}>
            <h2 className="text-main" style={{ fontWeight: 800, fontSize: 36, marginBottom: 16 }}>
              What We Offer
            </h2>
            <p className="text-muted" style={{ fontSize: 17 }}>
              End-to-end services to bring your vision to life
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "2fr 1fr",
              gap: 32,
            }}
          >
            {/* Large Service Card */}
            <div
              className="bg-gradient-secondary hover-lift shadow-accent-hover"
              style={{
                padding: "60px 48px",
                borderRadius: 24,
                gridRow: "span 2",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <div>
                <h3 style={{ fontWeight: 900, fontSize: 38, marginBottom: 24 }}>
                  Product Design & Development
                </h3>
                <p style={{ fontSize: 18, lineHeight: 1.8, opacity: 0.95, marginBottom: 32 }}>
                  From concept to launch, we handle the entire product lifecycle. Our integrated
                  approach ensures design and development work in perfect harmony.
                </p>
              </div>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(2, 1fr)",
                  gap: 16,
                }}
              >
                {["UX Research", "UI Design", "Frontend Dev", "Backend Systems", "Mobile Apps", "Design Systems"].map(
                  (item) => (
                    <div
                      key={item}
                      style={{
                        padding: "16px 20px",
                        borderRadius: 12,
                        background: "color-mix(in srgb, var(--color-surface) 20%, transparent)",
                        fontSize: 15,
                        fontWeight: 600,
                      }}
                    >
                      ✓ {item}
                    </div>
                  )
                )}
              </div>
            </div>

            {/* Small Service Cards */}
            <div
              className="bg-surface hover-lift shadow-accent-hover"
              style={{
                padding: "40px 32px",
                borderRadius: 24,
                border: "2px solid var(--color-border)",
              }}
            >
              <div style={{ fontSize: 40, marginBottom: 16 }}>📱</div>
              <h3 className="text-main" style={{ fontWeight: 800, fontSize: 22, marginBottom: 12 }}>
                Mobile First
              </h3>
              <p className="text-muted" style={{ fontSize: 15, lineHeight: 1.6 }}>
                Native iOS & Android apps that feel at home on every device.
              </p>
            </div>

            <div
              className="bg-surface hover-lift shadow-accent-hover"
              style={{
                padding: "40px 32px",
                borderRadius: 24,
                border: "2px solid var(--color-border)",
              }}
            >
              <div style={{ fontSize: 40, marginBottom: 16 }}>🎨</div>
              <h3 className="text-main" style={{ fontWeight: 800, fontSize: 22, marginBottom: 12 }}>
                Brand Identity
              </h3>
              <p className="text-muted" style={{ fontSize: 15, lineHeight: 1.6 }}>
                Visual identities that capture your essence and resonate with your audience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- TEAM HIGHLIGHT ---------- */}
      <section
        className="bg-surface-alt fade-up"
        style={{
          padding: "140px 24px",
        }}
      >
        <div style={{ maxWidth: "1000px", margin: "0 auto", textAlign: "center" }}>
          <h2 className="text-main" style={{ fontWeight: 800, fontSize: 36, marginBottom: 20 }}>
            Meet The Team
          </h2>
          <p className="text-muted" style={{ fontSize: 17, marginBottom: 60 }}>
            Talented individuals united by a passion for great design
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: 32,
            }}
          >
            {[
              { role: "Design Lead", name: "Alex Chen" },
              { role: "Tech Lead", name: "Jordan Smith" },
              { role: "Strategy", name: "Taylor Kim" },
              { role: "Engineering", name: "Morgan Lee" },
            ].map((member) => (
              <div
                key={member.name}
                className="bg-surface hover-lift shadow-accent-hover"
                style={{
                  padding: "32px 24px",
                  borderRadius: 20,
                  border: "2px solid var(--color-border)",
                }}
              >
                <div
                  className="bg-gradient-accent"
                  style={{
                    width: 80,
                    height: 80,
                    borderRadius: "50%",
                    margin: "0 auto 20px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 32,
                  }}
                >
                  👤
                </div>
                <h4 className="text-main" style={{ fontWeight: 700, fontSize: 18, marginBottom: 4 }}>
                  {member.name}
                </h4>
                <div className="text-muted" style={{ fontSize: 14 }}>
                  {member.role}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- ANGULAR CTA ---------- */}
      <section
        className="fade-up"
        style={{
          padding: "140px 24px",
        }}
      >
        <div
          className="bg-gradient-accent"
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "80px 60px",
            borderRadius: 24,
            textAlign: "center",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: -100,
              right: -100,
              width: 300,
              height: 300,
              background: "color-mix(in srgb, var(--color-surface) 10%, transparent)",
              borderRadius: "50%",
              transform: "rotate(-15deg)",
            }}
          />
          <div style={{ position: "relative", zIndex: 1 }}>
            <h2 style={{ fontWeight: 900, fontSize: 48, marginBottom: 20 }}>
              Let's Create Together
            </h2>
            <p style={{ fontSize: 20, marginBottom: 40, opacity: 0.95, maxWidth: 600, margin: "0 auto 40px" }}>
              Have a project in mind? We'd love to hear about it and explore how we can help.
            </p>
            <button
              className="hover-lift"
              style={{
                padding: "20px 56px",
                borderRadius: 12,
                fontSize: 18,
                fontWeight: 700,
                background: "var(--color-surface)",
                color: "var(--color-accent)",
                border: "none",
                cursor: "pointer",
              }}
            >
              Get In Touch
            </button>
          </div>
        </div>
      </section>

      {/* ---------- MOBILE CSS ---------- */}
      <style jsx>{`
        @media (max-width: 768px) {
          section {
            padding: 80px 20px !important;
          }
          div[style*="transform: skewY"] {
            transform: none !important;
          }
          h1 {
            font-size: 36px !important;
          }
          h2 {
            font-size: 28px !important;
          }
          h3 {
            font-size: 22px !important;
          }
          div[style*="gridTemplateColumns: 1fr 1fr"],
          div[style*="gridTemplateColumns: 2fr 1fr"],
          div[style*="gridTemplateColumns: repeat(3, 1fr)"],
          div[style*="gridTemplateColumns: repeat(4, 1fr)"] {
            grid-template-columns: 1fr !important;
          }
          div[style*="gridRow: span"] {
            grid-row: auto !important;
            min-height: auto !important;
          }
          div[style*="padding: 60px 48px"],
          div[style*="padding: 40px 36px"],
          div[style*="padding: 80px 60px"] {
            padding: 40px 28px !important;
          }
          div[style*="gridTemplateColumns: repeat(2, 1fr)"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}
