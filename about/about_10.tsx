"use client";

export default function About10() {
  return (
    <div
      style={{
        minHeight: "100vh",
        paddingTop: 80,
      }}
    >
      {/* ---------- CENTERED HERO ---------- */}
      <section
        className="fade-up"
        style={{
          padding: "140px 24px 100px",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <h1
            className="text-main"
            style={{
              fontWeight: 900,
              fontSize: "clamp(48px, 7vw, 80px)",
              lineHeight: 1.1,
              marginBottom: 28,
            }}
          >
            A decade of{" "}
            <span className="text-highlight">designing the future</span>
          </h1>
          <p
            className="text-muted"
            style={{
              fontSize: 22,
              lineHeight: 1.7,
              maxWidth: 800,
              margin: "0 auto",
            }}
          >
            From humble beginnings to industry leaders — our journey has been fueled by passion,
            dedication, and an unwavering commitment to excellence.
          </p>
        </div>
      </section>

      {/* ---------- MASONRY TIMELINE ---------- */}
      <section
        className="fade-up"
        style={{
          padding: "80px 24px 140px",
        }}
      >
        <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
          <h2
            className="text-main"
            style={{
              fontWeight: 800,
              fontSize: 36,
              marginBottom: 80,
              textAlign: "center",
            }}
          >
            Our Journey
          </h2>

          {/* Timeline with alternating layout */}
          <div style={{ position: "relative" }}>
            {/* Center line */}
            <div
              className="bg-gradient-accent"
              style={{
                position: "absolute",
                left: "50%",
                top: 0,
                bottom: 0,
                width: 4,
                transform: "translateX(-50%)",
                opacity: 0.2,
              }}
            />

            <div style={{ display: "flex", flexDirection: "column", gap: 60 }}>
              {[
                {
                  year: "2015",
                  title: "The Beginning",
                  desc: "Started in a small apartment with just two designers and a dream to create meaningful digital experiences.",
                  align: "left",
                },
                {
                  year: "2017",
                  title: "First Major Client",
                  desc: "Landed our first Fortune 500 client, validating our approach and opening doors to bigger opportunities.",
                  align: "right",
                },
                {
                  year: "2019",
                  title: "Team Expansion",
                  desc: "Grew to a team of 15+ talented individuals across design, development, and strategy disciplines.",
                  align: "left",
                },
                {
                  year: "2021",
                  title: "Global Reach",
                  desc: "Expanded our services internationally, working with clients across 20+ countries on 4 continents.",
                  align: "right",
                },
                {
                  year: "2023",
                  title: "Industry Recognition",
                  desc: "Won multiple awards for our innovative work and became thought leaders in product design.",
                  align: "left",
                },
                {
                  year: "2025",
                  title: "Looking Forward",
                  desc: "Continuing to push boundaries, explore new technologies, and help shape the future of digital products.",
                  align: "right",
                },
              ].map((milestone, i) => (
                <div
                  key={i}
                  style={{
                    display: "grid",
                    gridTemplateColumns: milestone.align === "left" ? "1fr 1fr" : "1fr 1fr",
                    gap: 48,
                    alignItems: "center",
                    position: "relative",
                  }}
                >
                  {milestone.align === "left" ? (
                    <>
                      {/* Content */}
                      <div style={{ textAlign: "right", paddingRight: 40 }}>
                        <div
                          className="text-accent"
                          style={{
                            fontSize: 52,
                            fontWeight: 900,
                            marginBottom: 12,
                          }}
                        >
                          {milestone.year}
                        </div>
                        <h3 className="text-main" style={{ fontWeight: 800, fontSize: 28, marginBottom: 12 }}>
                          {milestone.title}
                        </h3>
                        <p className="text-muted" style={{ fontSize: 16, lineHeight: 1.7 }}>
                          {milestone.desc}
                        </p>
                      </div>
                      {/* Spacer */}
                      <div />
                    </>
                  ) : (
                    <>
                      {/* Spacer */}
                      <div />
                      {/* Content */}
                      <div style={{ paddingLeft: 40 }}>
                        <div
                          className="text-accent"
                          style={{
                            fontSize: 52,
                            fontWeight: 900,
                            marginBottom: 12,
                          }}
                        >
                          {milestone.year}
                        </div>
                        <h3 className="text-main" style={{ fontWeight: 800, fontSize: 28, marginBottom: 12 }}>
                          {milestone.title}
                        </h3>
                        <p className="text-muted" style={{ fontSize: 16, lineHeight: 1.7 }}>
                          {milestone.desc}
                        </p>
                      </div>
                    </>
                  )}

                  {/* Center dot */}
                  <div
                    className="bg-gradient-accent"
                    style={{
                      position: "absolute",
                      left: "50%",
                      top: "50%",
                      transform: "translate(-50%, -50%)",
                      width: 20,
                      height: 20,
                      borderRadius: "50%",
                      boxShadow: "0 0 0 6px var(--color-surface)",
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ---------- CAPABILITIES MASONRY ---------- */}
      <section
        className="bg-surface-alt fade-up"
        style={{
          padding: "140px 24px",
        }}
      >
        <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
          <h2
            className="text-main"
            style={{
              fontWeight: 800,
              fontSize: 36,
              marginBottom: 20,
              textAlign: "center",
            }}
          >
            What We Do Best
          </h2>
          <p className="text-muted" style={{ textAlign: "center", marginBottom: 80, fontSize: 17 }}>
            Comprehensive services for every stage of your digital journey
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 32,
            }}
          >
            {/* Tall card */}
            <div
              className="bg-gradient-accent hover-lift shadow-accent-hover"
              style={{
                padding: "60px 40px",
                borderRadius: 24,
                gridRow: "span 2",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <div>
                <div style={{ fontSize: 64, marginBottom: 24 }}>🎯</div>
                <h3 style={{ fontWeight: 900, fontSize: 32, marginBottom: 20 }}>
                  Strategy & Consulting
                </h3>
                <p style={{ fontSize: 17, lineHeight: 1.7, opacity: 0.95 }}>
                  We help you define your vision, understand your users, and chart a clear path to
                  success with data-driven insights and strategic planning.
                </p>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 12, marginTop: 32 }}>
                {["Market Research", "Product Strategy", "User Research", "Roadmapping"].map((item) => (
                  <div
                    key={item}
                    style={{
                      padding: "12px 16px",
                      borderRadius: 10,
                      background: "color-mix(in srgb, var(--color-surface) 20%, transparent)",
                      fontSize: 14,
                      fontWeight: 600,
                    }}
                  >
                    • {item}
                  </div>
                ))}
              </div>
            </div>

            {/* Regular cards */}
            <div
              className="bg-surface hover-lift shadow-accent-hover"
              style={{
                padding: "40px 32px",
                borderRadius: 24,
                border: "2px solid var(--color-border)",
              }}
            >
              <div style={{ fontSize: 48, marginBottom: 20 }}>✨</div>
              <h3 className="text-main" style={{ fontWeight: 800, fontSize: 24, marginBottom: 12 }}>
                UX/UI Design
              </h3>
              <p className="text-muted" style={{ fontSize: 15, lineHeight: 1.7 }}>
                Beautiful interfaces that are intuitive, accessible, and delightful to use.
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
              <div style={{ fontSize: 48, marginBottom: 20 }}>⚡</div>
              <h3 className="text-main" style={{ fontWeight: 800, fontSize: 24, marginBottom: 12 }}>
                Development
              </h3>
              <p className="text-muted" style={{ fontSize: 15, lineHeight: 1.7 }}>
                Clean, scalable code built with modern frameworks and best practices.
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
              <div style={{ fontSize: 48, marginBottom: 20 }}>📱</div>
              <h3 className="text-main" style={{ fontWeight: 800, fontSize: 24, marginBottom: 12 }}>
                Mobile Apps
              </h3>
              <p className="text-muted" style={{ fontSize: 15, lineHeight: 1.7 }}>
                Native and cross-platform apps that feel at home on any device.
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
              <div style={{ fontSize: 48, marginBottom: 20 }}>🎨</div>
              <h3 className="text-main" style={{ fontWeight: 800, fontSize: 24, marginBottom: 12 }}>
                Brand Identity
              </h3>
              <p className="text-muted" style={{ fontSize: 15, lineHeight: 1.7 }}>
                Visual systems that capture your essence and resonate with your audience.
              </p>
            </div>

            {/* Wide card */}
            <div
              className="bg-gradient-secondary hover-lift shadow-accent-hover"
              style={{
                padding: "40px 36px",
                borderRadius: 24,
                gridColumn: "span 2",
              }}
            >
              <div style={{ fontSize: 48, marginBottom: 20 }}>🚀</div>
              <h3 style={{ fontWeight: 900, fontSize: 28, marginBottom: 16 }}>
                Full-Stack Solutions
              </h3>
              <p style={{ fontSize: 16, lineHeight: 1.7, opacity: 0.95 }}>
                End-to-end product development from concept to launch. We handle design, development,
                deployment, and ongoing optimization — everything you need under one roof.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- SIDE-BY-SIDE CULTURE ---------- */}
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
              gap: 60,
              alignItems: "center",
            }}
          >
            <div>
              <h2 className="text-main" style={{ fontWeight: 800, fontSize: 42, marginBottom: 24 }}>
                Our Culture
              </h2>
              <p className="text-muted" style={{ fontSize: 18, lineHeight: 1.8, marginBottom: 24 }}>
                We've built more than a company — we've built a community. A place where creativity
                thrives, ideas flow freely, and everyone's voice matters.
              </p>
              <p className="text-muted" style={{ fontSize: 18, lineHeight: 1.8, marginBottom: 32 }}>
                Remote-first, globally distributed, and united by a shared passion for creating
                exceptional digital experiences.
              </p>
              <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
                {["Remote First", "Flexible Hours", "Learning Budget", "Health Benefits"].map((perk) => (
                  <div
                    key={perk}
                    className="bg-surface-alt"
                    style={{
                      padding: "12px 20px",
                      borderRadius: 10,
                      fontSize: 14,
                      fontWeight: 600,
                      color: "var(--color-text-muted)",
                    }}
                  >
                    ✓ {perk}
                  </div>
                ))}
              </div>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(2, 1fr)",
                gap: 24,
              }}
            >
              {[
                { stat: "30+", label: "Team Members" },
                { stat: "12", label: "Countries" },
                { stat: "5", label: "Offices Worldwide" },
                { stat: "100%", label: "Remote Friendly" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="bg-surface hover-lift shadow-accent-hover"
                  style={{
                    padding: "40px 28px",
                    borderRadius: 20,
                    border: "2px solid var(--color-border)",
                    textAlign: "center",
                  }}
                >
                  <div
                    className="text-accent"
                    style={{
                      fontSize: 48,
                      fontWeight: 900,
                      marginBottom: 8,
                    }}
                  >
                    {item.stat}
                  </div>
                  <div className="text-muted" style={{ fontSize: 14, fontWeight: 600 }}>
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ---------- FINAL CTA ---------- */}
      <section
        className="bg-surface-alt fade-up"
        style={{
          padding: "140px 24px",
        }}
      >
        <div
          className="bg-gradient-accent"
          style={{
            maxWidth: "1000px",
            margin: "0 auto",
            padding: "100px 60px",
            borderRadius: 32,
            textAlign: "center",
          }}
        >
          <div style={{ fontSize: 72, marginBottom: 24 }}>👋</div>
          <h2 style={{ fontWeight: 900, fontSize: 48, marginBottom: 24 }}>
            We'd Love to Work With You
          </h2>
          <p style={{ fontSize: 20, marginBottom: 48, opacity: 0.95, maxWidth: 700, margin: "0 auto 48px" }}>
            Whether you have a fully formed idea or just the seed of one, we're here to help bring it
            to life. Let's start a conversation.
          </p>
          <div style={{ display: "flex", gap: 20, justifyContent: "center", flexWrap: "wrap" }}>
            <button
              className="hover-lift"
              style={{
                padding: "20px 48px",
                borderRadius: 14,
                fontSize: 18,
                fontWeight: 700,
                background: "var(--color-surface)",
                color: "var(--color-accent)",
                border: "none",
                cursor: "pointer",
              }}
            >
              Start Your Project
            </button>
            <button
              className="hover-lift"
              style={{
                padding: "20px 48px",
                borderRadius: 14,
                fontSize: 18,
                fontWeight: 700,
                background: "transparent",
                color: "var(--color-surface)",
                border: "2px solid var(--color-surface)",
                cursor: "pointer",
              }}
            >
              View Case Studies
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
          div[style*="gridTemplateColumns: repeat(3, 1fr)"],
          div[style*="gridTemplateColumns: repeat(2, 1fr)"] {
            grid-template-columns: 1fr !important;
          }
          div[style*="gridColumn: span"],
          div[style*="gridRow: span"] {
            grid-column: auto !important;
            grid-row: auto !important;
          }
          div[style*="position: absolute"][style*="left: 50%"] {
            display: none !important;
          }
          div[style*="textAlign: right"] {
            text-align: left !important;
            padding-right: 0 !important;
          }
          div[style*="paddingLeft: 40px"],
          div[style*="paddingRight: 40px"] {
            padding-left: 0 !important;
            padding-right: 0 !important;
          }
          div[style*="padding: 60px 40px"],
          div[style*="padding: 40px 32px"],
          div[style*="padding: 100px 60px"] {
            padding: 40px 28px !important;
          }
        }
      `}</style>
    </div>
  );
}
