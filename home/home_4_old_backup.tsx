import React from "react";

export default function Home() {
  return (
    <main className="fade-in" style={{ overflow: "hidden" }}>
      {/* ---------------- HERO MAGAZINE STYLE ---------------- */}
      <section
        className="bg-surface"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(500px, 1fr))",
          minHeight: "100vh",
          gap: 0,
        }}
      >
        {/* Left Column - Large Typography */}
        <div
          className="bg-gradient-accent"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "80px 60px",
            color: "var(--color-surface)",
            textAlign: "left",
          }}
        >
          <div>
            <div style={{ fontSize: "6rem", fontWeight: 900, lineHeight: 0.9, marginBottom: 20 }}>
              BOLD.
            </div>
            <div style={{ fontSize: "2.2rem", fontWeight: 300, opacity: 0.9 }}>
              Ideas that demand attention.
            </div>
          </div>
        </div>

        {/* Right Column - Split Grid */}
        <div style={{ display: "grid", gridTemplateRows: "1fr 1fr" }}>
          <div
            className="bg-surface-alt fade-up"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: 40,
            }}
          >
            <div style={{ maxWidth: 400 }}>
              <h2 className="text-main" style={{ fontWeight: 700, marginBottom: 12 }}>
                Editorial Design
              </h2>
              <p className="text-muted" style={{ lineHeight: 1.7 }}>
                Typography-first layouts that command attention and inspire action.
              </p>
            </div>
          </div>
          <div
            className="preview-secondary fade-up"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          />
        </div>
      </section>

      {/* ---------------- BENTO GRID LAYOUT ---------------- */}
      <section
        className="bg-surface-alt fade-up"
        style={{
          padding: "140px 24px",
        }}
      >
        <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gridAutoRows: "200px",
              gap: 16,
            }}
          >
            {/* Large Featured Item */}
            <div
              className="bg-surface hover-lift shadow-accent-hover"
              style={{
                gridColumn: "span 2",
                gridRow: "span 2",
                borderRadius: 14,
                padding: 40,
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",
                background: "linear-gradient(135deg, var(--color-accent) 0%, var(--color-accent-hover) 100%)",
                color: "var(--color-surface)",
              }}
            >
              <h3 style={{ fontWeight: 800, fontSize: 28, marginBottom: 8 }}>
                Future Forward
              </h3>
              <p style={{ opacity: 0.9 }}>Designing tomorrow's digital landscapes.</p>
            </div>

            <div
              className="bg-gradient-secondary hover-lift"
              style={{
                borderRadius: 14,
              }}
            />
            <div
              className="bg-surface hover-lift shadow-accent-hover"
              style={{
                borderRadius: 14,
                padding: 20,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <h4 className="text-main" style={{ fontWeight: 700, textAlign: "center" }}>
                Vision
              </h4>
            </div>

            <div
              className="bg-surface hover-lift shadow-accent-hover"
              style={{
                gridColumn: "span 2",
                borderRadius: 14,
                padding: 24,
              }}
            >
              <h4 className="text-main" style={{ fontWeight: 700, marginBottom: 8 }}>
                Creative Systems
              </h4>
              <p className="text-muted" style={{ fontSize: 14 }}>
                Building frameworks that scale creativity.
              </p>
            </div>

            <div
              className="preview-accent hover-lift"
              style={{
                borderRadius: 14,
              }}
            />
            <div
              className="bg-surface hover-lift shadow-accent-hover"
              style={{
                gridColumn: "span 2",
                borderRadius: 14,
                padding: 24,
              }}
            >
              <h4 className="text-main" style={{ fontWeight: 700, marginBottom: 8 }}>
                Dynamic Branding
              </h4>
              <p className="text-muted" style={{ fontSize: 14 }}>
                Identities that evolve with your story.
              </p>
            </div>
            <div
              className="bg-surface hover-lift shadow-accent-hover"
              style={{
                borderRadius: 14,
                padding: 20,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <h4 className="text-main" style={{ fontWeight: 700, fontSize: 32 }}>+</h4>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- FULL WIDTH IMAGE SHOWCASE ---------------- */}
      <section
        className="fade-up"
        style={{
          position: "relative",
          height: "70vh",
          overflow: "hidden",
        }}
      >
        <div
          className="preview-gradient"
          style={{
            position: "absolute",
            inset: 0,
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.4) 100%)",
            display: "flex",
            alignItems: "flex-end",
            padding: "60px 80px",
            color: "white",
          }}
        >
          <div>
            <h2 style={{ fontWeight: 800, fontSize: 42, marginBottom: 12 }}>
              Crafted with Precision
            </h2>
            <p style={{ fontSize: 18, opacity: 0.9, maxWidth: 600 }}>
              Every detail matters. From concept sketches to final pixels, we obsess over the craft.
            </p>
          </div>
        </div>
      </section>

      {/* ---------------- STATISTICS STRIP ---------------- */}
      <section
        className="bg-surface-alt fade-up"
        style={{
          padding: "100px 24px",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: 60,
            textAlign: "center",
          }}
        >
          {[
            { num: "150+", label: "Projects Delivered" },
            { num: "98%", label: "Client Satisfaction" },
            { num: "50+", label: "Global Brands" },
            { num: "12yrs", label: "Industry Experience" },
          ].map((stat) => (
            <div key={stat.label}>
              <div
                className="text-accent"
                style={{ fontSize: "3.5rem", fontWeight: 800, marginBottom: 8 }}
              >
                {stat.num}
              </div>
              <div className="text-muted" style={{ fontWeight: 500 }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ---------------- TESTIMONIAL CAROUSEL PREVIEW ---------------- */}
      <section
        className="bg-surface fade-up"
        style={{
          padding: "140px 24px",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <h2 className="text-main" style={{ fontWeight: 800, marginBottom: 60 }}>
            What Clients Say
          </h2>

          <div
            className="bg-surface-alt shadow-accent-hover hover-lift"
            style={{
              borderRadius: 20,
              padding: "60px 48px",
              marginBottom: 40,
            }}
          >
            <p
              className="text-main"
              style={{
                fontSize: "1.5rem",
                fontWeight: 500,
                lineHeight: 1.6,
                marginBottom: 24,
              }}
            >
              "Their design process transformed not just our brand, but how we think about our customers."
            </p>
            <div className="text-accent" style={{ fontWeight: 700 }}>
              — Sarah Chen, CEO of Momentum
            </div>
          </div>

          <div style={{ display: "flex", gap: 8, justifyContent: "center" }}>
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className={i === 1 ? "bg-accent" : "bg-surface-alt"}
                style={{
                  width: i === 1 ? 32 : 8,
                  height: 8,
                  borderRadius: 4,
                  transition: "all 0.3s ease",
                }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- CTA WITH SPLIT DESIGN ---------------- */}
      <section
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(480px, 1fr))",
          minHeight: "60vh",
        }}
      >
        <div
          className="bg-surface fade-left"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: 60,
          }}
        >
          <div style={{ maxWidth: 480 }}>
            <h2 className="text-main" style={{ fontWeight: 800, fontSize: 36, marginBottom: 16 }}>
              Let's create something extraordinary.
            </h2>
            <p className="text-muted" style={{ marginBottom: 28, lineHeight: 1.7 }}>
              From bold concepts to refined execution — we're here to bring your vision to life.
            </p>
            <button
              className="accent hover-lift"
              style={{
                borderRadius: 10,
                padding: "14px 28px",
                fontWeight: 600,
              }}
            >
              Start Your Project
            </button>
          </div>
        </div>

        <div
          className="bg-gradient-secondary fade-right"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        />
      </section>
    </main>
  );
}

      {/* ---------------- HERO SECTION WITH SCROLL PANELS ---------------- */}
      <section
        className="bg-surface-gradient shadow-accent-hover fade-up"
        style={{
          padding: "80px 24px 140px",
          textAlign: "center",
          position: "relative",
        }}
      >
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <h1
            className="text-main"
            style={{
              fontSize: "3.2rem",
              fontWeight: 800,
              marginBottom: 20,
              lineHeight: 1.1,
            }}
          >
            Simplify work. Amplify impact.
          </h1>
          <p
            className="text-muted"
            style={{
              maxWidth: 600,
              margin: "0 auto 32px",
              fontSize: 17,
              lineHeight: 1.6,
            }}
          >
            A single platform to manage your projects, collaborate with teams,
            and deliver your best work — all in one place.
          </p>

          <div style={{ display: "flex", justifyContent: "center", gap: 16 }}>
            <button className="btn-gradient hover-lift" style={{ borderRadius: 10, padding: "12px 22px" }}>
              Try for Free
            </button>
            <button className="accent-outline hover-lift" style={{ borderRadius: 10, padding: "12px 22px" }}>
              Watch Demo
            </button>
          </div>
        </div>

        {/* Product Mockup */}
        <div
          className="bg-surface-alt hover-lift shadow-accent"
          style={{
            marginTop: 80,
            maxWidth: "900px",
            height: 420,
            borderRadius: 20,
            marginInline: "auto",
          }}
        >
          <div
            className="preview-accent"
            style={{
              height: "100%",
              borderRadius: 20,
            }}
          />
        </div>
      </section>

      {/* ---------------- FEATURE GRID ---------------- */}
      <section className="bg-surface-alt fade-up" style={{ padding: "100px 24px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", textAlign: "center" }}>
          <h2 className="text-main" style={{ fontWeight: 800, marginBottom: 12 }}>
            Work smarter, not harder.
          </h2>
          <p className="text-muted" style={{ marginBottom: 60 }}>
            Everything you need to plan, collaborate, and deliver — built into one intuitive tool.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: 40,
            }}
          >
            {[
              {
                title: "Task Management",
                desc: "Organize, prioritize, and assign work with clarity and focus.",
              },
              {
                title: "Real-Time Collaboration",
                desc: "Edit together, comment instantly, and stay connected anywhere.",
              },
              {
                title: "Analytics & Reports",
                desc: "Gain insights into performance and productivity at a glance.",
              },
            ].map((feature) => (
              <div
                key={feature.title}
                className="bg-surface shadow-accent-hover hover-lift"
                style={{
                  borderRadius: 14,
                  padding: "36px 24px",
                  transition: "transform var(--transition-speed) ease",
                }}
              >
                <div
                  className="bg-gradient-accent"
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: 10,
                    margin: "0 auto 18px",
                  }}
                />
                <h3 className="text-main" style={{ fontWeight: 700, marginBottom: 8 }}>
                  {feature.title}
                </h3>
                <p className="text-muted" style={{ fontSize: 15 }}>
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- PRODUCT SHOWCASE ---------------- */}
      <section className="bg-surface fade-up" style={{ padding: "100px 24px" }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto", textAlign: "center" }}>
          <h2 className="text-main" style={{ fontWeight: 800, marginBottom: 12 }}>
            A workspace that adapts to you.
          </h2>
          <p className="text-muted" style={{ marginBottom: 60 }}>
            Customize dashboards, automate workflows, and collaborate visually.
          </p>

          <div
            className="bg-surface-alt hover-lift shadow-accent-hover"
            style={{
              borderRadius: 18,
              overflow: "hidden",
              height: 420,
              margin: "0 auto",
              maxWidth: "900px",
            }}
          >
            <div
              className="preview-secondary"
              style={{
                height: "100%",
              }}
            />
          </div>
        </div>
      </section>

      {/* ---------------- PRICING PREVIEW ---------------- */}
      <section className="bg-surface-alt fade-up" style={{ padding: "100px 24px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", textAlign: "center" }}>
          <h2 className="text-main" style={{ fontWeight: 800, marginBottom: 12 }}>
            Pricing made simple.
          </h2>
          <p className="text-muted" style={{ marginBottom: 60 }}>
            Choose the plan that fits your team — and scale as you grow.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: 40,
              justifyItems: "center",
            }}
          >
            {[
              {
                name: "Starter",
                price: "$0",
                desc: "For individuals and small teams just getting started.",
              },
              {
                name: "Pro",
                price: "$19",
                desc: "For growing teams that need more collaboration tools.",
              },
              {
                name: "Enterprise",
                price: "Custom",
                desc: "Tailored solutions for large organizations.",
              },
            ].map((plan, i) => (
              <div
                key={plan.name}
                className={`hover-lift shadow-accent-hover ${
                  i === 1 ? "bg-surface" : "bg-surface-alt"
                }`}
                style={{
                  borderRadius: 16,
                  padding: "40px 28px",
                  width: "100%",
                  maxWidth: 340,
                  border: i === 1 ? "1px solid var(--color-accent)" : "1px solid var(--color-border)",
                }}
              >
                <h3 className="text-main" style={{ fontWeight: 700, marginBottom: 6 }}>
                  {plan.name}
                </h3>
                <p className="text-accent" style={{ fontWeight: 800, fontSize: 26, marginBottom: 10 }}>
                  {plan.price}
                </p>
                <p className="text-muted" style={{ marginBottom: 24 }}>
                  {plan.desc}
                </p>
                <button
                  className={i === 1 ? "btn-gradient hover-lift" : "accent-outline hover-lift"}
                  style={{ borderRadius: 10, padding: "10px 18px", fontWeight: 600 }}
                >
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- TESTIMONIALS / LOGOS ---------------- */}
      <section className="bg-surface fade-up" style={{ padding: "80px 24px", textAlign: "center" }}>
        <h3 className="text-main" style={{ fontWeight: 800, marginBottom: 40 }}>
          Trusted by leading teams
        </h3>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: 32,
          }}
        >
          {["Figma", "Asana", "Dropbox", "GitHub", "Notion"].map((brand) => (
            <div
              key={brand}
              className="bg-surface-alt hover-lift"
              style={{
                padding: "14px 22px",
                borderRadius: 10,
                color: "var(--color-accent)",
                fontWeight: 600,
              }}
            >
              {brand}
            </div>
          ))}
        </div>
      </section>

      {/* ---------------- CTA ---------------- */}
      <section
        className="bg-gradient-accent fade-up"
        style={{
          padding: "100px 24px",
          textAlign: "center",
          color: "var(--color-surface)",
        }}
      >
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <h2 style={{ fontWeight: 800, marginBottom: 12 }}>
            Start building your workflow today.
          </h2>
          <p style={{ opacity: 0.9, marginBottom: 28 }}>
            Try it free for 14 days. No credit card required.
          </p>
          <button
            className="accent hover-lift"
            style={{
              borderRadius: 10,
              padding: "12px 22px",
              fontWeight: 600,
            }}
          >
            Get Started for Free
          </button>
        </div>
      </section>
    </main>
  );
}
