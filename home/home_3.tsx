import React from "react";

export default function Home() {
  return (
    <main className="fade-in" style={{ overflow: "hidden" }}>
      <style>{`
        @media (max-width: 768px) {
          section { padding: 60px 20px !important; }
          h1 { font-size: 2.5rem !important; }
          h2 { font-size: 28px !important; }
          h3 { font-size: 20px !important; }
          [style*="grid-template-columns"] { grid-template-columns: 1fr !important; gap: 40px !important; }
          [style*="clipPath"] { clip-path: none !important; }
        }
      `}</style>
      {/* ---------------- DIAGONAL SPLIT HERO ---------------- */}
      <section
        style={{
          minHeight: "100vh",
          display: "grid",
          gridTemplateColumns: "1.3fr 1fr",
          position: "relative",
        }}
      >
        {/* Left Side - Content */}
        <div
          className="bg-surface-alt shadow-accent"
          style={{
            display: "flex",
            alignItems: "center",
            padding: "80px 60px",
            clipPath: "polygon(0 0, 100% 0, 85% 100%, 0 100%)",
          }}
        >
          <div style={{ maxWidth: 520 }}>
            <div
              className="text-accent"
              style={{
                fontSize: 13,
                fontWeight: 700,
                letterSpacing: "2.5px",
                textTransform: "uppercase",
                marginBottom: 20,
              }}
            >
              🎯 Strategic Design
            </div>
            <h1
              className="text-main text-highlight"
              style={{
                fontSize: "3.8rem",
                fontWeight: 900,
                lineHeight: 1.1,
                marginBottom: 28,
                letterSpacing: "-1.5px",
              }}
            >
              Design That Drives Business
            </h1>
            <p
              className="text-muted"
              style={{
                fontSize: 18,
                lineHeight: 1.8,
                marginBottom: 40,
              }}
            >
              We merge creative excellence with strategic thinking to build digital products that convert visitors into customers.
            </p>
            <div style={{ display: "flex", gap: 16 }}>
              <button className="btn-gradient hover-lift" style={{ borderRadius: 10, padding: "14px 28px", fontWeight: 600 }}>
                Start Project
              </button>
              <button className="btn-outline hover-lift" style={{ borderRadius: 10, padding: "14px 28px", fontWeight: 600 }}>
                View Case Studies
              </button>
            </div>
          </div>
        </div>

        {/* Right Side - Visual */}
        <div className="bg-gradient-accent" style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
          <div
            className="preview-gradient shadow-accent-hover"
            style={{
              width: "80%",
              height: "70%",
              borderRadius: 20,
            }}
          />
        </div>
      </section>

      {/* ---------------- ASYMMETRIC SERVICES GRID ---------------- */}
      <section
        className="bg-surface fade-up"
        style={{
          padding: "180px 60px",
        }}
      >
        <div style={{ maxWidth: "1300px", margin: "0 auto" }}>
          <h2 className="text-main" style={{ fontWeight: 800, fontSize: 36, marginBottom: 80 }}>
            What We Offer
          </h2>

          {/* Asymmetric Grid Layout */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1.5fr 1fr",
              gap: 32,
            }}
          >
            {/* Large Feature Card */}
            <div
              className="bg-surface-alt shadow-accent hover-lift"
              style={{
                padding: 48,
                borderRadius: 20,
                gridRow: "span 2",
              }}
            >
              <div style={{ fontSize: 56, marginBottom: 24 }}>🚀</div>
              <h3 className="text-main" style={{ fontWeight: 800, fontSize: 28, marginBottom: 16 }}>
                Product Strategy
              </h3>
              <p className="text-muted" style={{ fontSize: 17, lineHeight: 1.7, marginBottom: 32 }}>
                From concept to launch, we help you define your product vision, validate assumptions, and create a roadmap that aligns with business goals.
              </p>
              <ul className="text-muted" style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: 12 }}>
                <li>✓ Market Research & Analysis</li>
                <li>✓ User Journey Mapping</li>
                <li>✓ Feature Prioritization</li>
                <li>✓ Go-to-Market Strategy</li>
              </ul>
            </div>

            {/* Smaller Cards */}
            <div className="bg-surface-alt shadow-accent hover-lift" style={{ padding: 36, borderRadius: 20 }}>
              <div style={{ fontSize: 44, marginBottom: 20 }}>🎨</div>
              <h3 className="text-main" style={{ fontWeight: 700, fontSize: 22, marginBottom: 12 }}>
                UX/UI Design
              </h3>
              <p className="text-muted" style={{ fontSize: 15, lineHeight: 1.6 }}>
                Interfaces that users love — combining beauty with usability.
              </p>
            </div>

            <div className="bg-surface-alt shadow-accent hover-lift" style={{ padding: 36, borderRadius: 20 }}>
              <div style={{ fontSize: 44, marginBottom: 20 }}>⚡</div>
              <h3 className="text-main" style={{ fontWeight: 700, fontSize: 22, marginBottom: 12 }}>
                Development
              </h3>
              <p className="text-muted" style={{ fontSize: 15, lineHeight: 1.6 }}>
                Fast, scalable code that brings designs to life perfectly.
              </p>
            </div>
          </div>

          {/* Bottom Two Cards */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 32, marginTop: 32 }}>
            <div className="bg-surface-alt shadow-accent hover-lift" style={{ padding: 36, borderRadius: 20 }}>
              <div style={{ fontSize: 44, marginBottom: 20 }}>📊</div>
              <h3 className="text-main" style={{ fontWeight: 700, fontSize: 22, marginBottom: 12 }}>
                Analytics & Insights
              </h3>
              <p className="text-muted" style={{ fontSize: 15, lineHeight: 1.6 }}>
                Data-driven decisions that optimize performance and ROI.
              </p>
            </div>

            <div className="bg-surface-alt shadow-accent hover-lift" style={{ padding: 36, borderRadius: 20 }}>
              <div style={{ fontSize: 44, marginBottom: 20 }}>🔄</div>
              <h3 className="text-main" style={{ fontWeight: 700, fontSize: 22, marginBottom: 12 }}>
                Continuous Optimization
              </h3>
              <p className="text-muted" style={{ fontSize: 15, lineHeight: 1.6 }}>
                Iterative improvements based on user feedback and metrics.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- DIAGONAL SPLIT SHOWCASE ---------------- */}
      <section
        className="bg-surface-alt fade-up"
        style={{
          padding: "180px 0",
        }}
      >
        <div style={{ maxWidth: "1400px", margin: "0 auto", padding: "0 60px" }}>
          <h2 className="text-main" style={{ fontWeight: 800, fontSize: 36, marginBottom: 100 }}>
            Featured Projects
          </h2>

          <div style={{ display: "flex", flexDirection: "column", gap: 120 }}>
            {/* Project 1 - Diagonal Right */}
            <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: 48, alignItems: "center" }}>
              <div
                className="preview-accent shadow-accent-hover hover-lift"
                style={{
                  height: 420,
                  borderRadius: 20,
                  clipPath: "polygon(0 0, 100% 0, 95% 100%, 0 100%)",
                }}
              />
              <div>
                <div className="text-accent" style={{ fontSize: 13, fontWeight: 700, letterSpacing: "1.5px", marginBottom: 12 }}>
                  E-COMMERCE
                </div>
                <h3 className="text-main" style={{ fontWeight: 800, fontSize: 32, marginBottom: 16 }}>
                  Luxe Marketplace
                </h3>
                <p className="text-muted" style={{ lineHeight: 1.8, fontSize: 17, marginBottom: 24 }}>
                  A premium shopping experience with 300% increase in conversion rates through strategic UX improvements.
                </p>
                <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                  <span className="badge-accent" style={{ padding: "6px 14px", borderRadius: 6, fontSize: 13 }}>
                    UX Research
                  </span>
                  <span className="badge-accent" style={{ padding: "6px 14px", borderRadius: 6, fontSize: 13 }}>
                    Interface Design
                  </span>
                  <span className="badge-accent" style={{ padding: "6px 14px", borderRadius: 6, fontSize: 13 }}>
                    React
                  </span>
                </div>
              </div>
            </div>

            {/* Project 2 - Diagonal Left */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1.2fr", gap: 48, alignItems: "center" }}>
              <div>
                <div className="text-accent" style={{ fontSize: 13, fontWeight: 700, letterSpacing: "1.5px", marginBottom: 12 }}>
                  FINTECH
                </div>
                <h3 className="text-main" style={{ fontWeight: 800, fontSize: 32, marginBottom: 16 }}>
                  PayFlow Dashboard
                </h3>
                <p className="text-muted" style={{ lineHeight: 1.8, fontSize: 17, marginBottom: 24 }}>
                  Simplifying complex financial data into actionable insights for 50,000+ users daily.
                </p>
                <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                  <span className="badge-accent" style={{ padding: "6px 14px", borderRadius: 6, fontSize: 13 }}>
                    Data Viz
                  </span>
                  <span className="badge-accent" style={{ padding: "6px 14px", borderRadius: 6, fontSize: 13 }}>
                    Dashboard
                  </span>
                  <span className="badge-accent" style={{ padding: "6px 14px", borderRadius: 6, fontSize: 13 }}>
                    Next.js
                  </span>
                </div>
              </div>
              <div
                className="preview-secondary shadow-accent-hover hover-lift"
                style={{
                  height: 420,
                  borderRadius: 20,
                  clipPath: "polygon(5% 0, 100% 0, 100% 100%, 0 100%)",
                }}
              />
            </div>

            {/* Project 3 - Diagonal Right */}
            <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: 48, alignItems: "center" }}>
              <div
                className="preview-gradient shadow-accent-hover hover-lift"
                style={{
                  height: 420,
                  borderRadius: 20,
                  clipPath: "polygon(0 0, 100% 0, 95% 100%, 0 100%)",
                }}
              />
              <div>
                <div className="text-accent" style={{ fontSize: 13, fontWeight: 700, letterSpacing: "1.5px", marginBottom: 12 }}>
                  SAAS PLATFORM
                </div>
                <h3 className="text-main" style={{ fontWeight: 800, fontSize: 32, marginBottom: 16 }}>
                  TeamSync Workspace
                </h3>
                <p className="text-muted" style={{ lineHeight: 1.8, fontSize: 17, marginBottom: 24 }}>
                  Collaborative workspace that helped reduce team communication overhead by 45%.
                </p>
                <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                  <span className="badge-accent" style={{ padding: "6px 14px", borderRadius: 6, fontSize: 13 }}>
                    Collaboration
                  </span>
                  <span className="badge-accent" style={{ padding: "6px 14px", borderRadius: 6, fontSize: 13 }}>
                    Real-time
                  </span>
                  <span className="badge-accent" style={{ padding: "6px 14px", borderRadius: 6, fontSize: 13 }}>
                    WebSockets
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- STATS BAR ---------------- */}
      <section className="bg-gradient-accent fade-up" style={{ padding: "80px 60px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 48, textAlign: "center" }}>
          {[
            { number: "127+", label: "Projects Delivered" },
            { number: "94%", label: "Client Satisfaction" },
            { number: "2.3M", label: "Users Reached" },
            { number: "8yrs", label: "Industry Experience" },
          ].map((stat) => (
            <div key={stat.label}>
              <div style={{ fontSize: "3.5rem", fontWeight: 900, color: "var(--color-surface)", marginBottom: 8, lineHeight: 1 }}>
                {stat.number}
              </div>
              <div style={{ fontSize: 15, color: "var(--color-surface)", opacity: 0.9 }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ---------------- ANGLED CTA ---------------- */}
      <section
        className="bg-surface fade-up"
        style={{
          padding: "160px 60px",
        }}
      >
        <div
          className="bg-surface-alt shadow-accent hover-lift"
          style={{
            maxWidth: "1000px",
            margin: "0 auto",
            padding: "80px 60px",
            borderRadius: 24,
            textAlign: "center",
            clipPath: "polygon(0 5%, 100% 0, 100% 95%, 0 100%)",
          }}
        >
          <h2 className="text-main" style={{ fontWeight: 800, fontSize: 40, marginBottom: 20, lineHeight: 1.2 }}>
            Ready to Build Something Great?
          </h2>
          <p className="text-muted" style={{ fontSize: 18, lineHeight: 1.7, marginBottom: 40, maxWidth: 620, margin: "0 auto 40px" }}>
            Let's discuss your vision and create a digital product that exceeds expectations.
          </p>
          <button className="btn-gradient hover-lift" style={{ borderRadius: 10, padding: "18px 40px", fontWeight: 700, fontSize: 17 }}>
            Schedule a Call
          </button>
        </div>
      </section>
    </main>
  );
}
