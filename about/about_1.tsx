import React from "react";

export default function About() {
  return (
    <main className="fade-in" style={{ overflow: "hidden" }}>
      {/* ---------------- HERO ---------------- */}
      <section
        className="bg-gradient-accent fade-up"
        style={{
          minHeight: "80vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          color: "var(--color-surface)",
          padding: "0 24px",
        }}
      >
        <div style={{ maxWidth: 900 }}>
          <h1 style={{ fontWeight: 800, fontSize: "3.8rem", lineHeight: 1.1, marginBottom: 20 }}>
            We design with intention, build with vision.
          </h1>
          <p style={{ maxWidth: 640, margin: "0 auto", lineHeight: 1.7, opacity: 0.9 }}>
            From bold startups to established leaders, we help brands express who they are —
            through strategy, craft, and clarity.
          </p>
        </div>
      </section>

      {/* ---------------- MISSION / STORY ---------------- */}
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
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(480px, 1fr))",
            gap: 80,
            alignItems: "center",
          }}
        >
          <div className="fade-left">
            <h2 className="text-main" style={{ fontWeight: 800, marginBottom: 16 }}>
              Our Mission
            </h2>
            <p className="text-muted" style={{ lineHeight: 1.8, marginBottom: 16 }}>
              We believe digital design has the power to shape human emotion. Every detail — motion,
              color, type, rhythm — matters. Our mission is to create experiences that connect
              people through beauty, empathy, and simplicity.
            </p>
            <p className="text-muted" style={{ lineHeight: 1.8 }}>
              We’re not just making interfaces. We’re designing moments that feel natural, powerful,
              and timeless.
            </p>
          </div>

          <div
            className="bg-surface-alt hover-lift shadow-accent-hover"
            style={{
              height: 420,
              borderRadius: 20,
            }}
          />
        </div>
      </section>

      {/* ---------------- VALUES GRID ---------------- */}
      <section
        className="bg-surface-alt fade-up"
        style={{
          padding: "140px 24px",
        }}
      >
        <div style={{ maxWidth: "1100px", margin: "0 auto", textAlign: "center" }}>
          <h2 className="text-main" style={{ fontWeight: 800, marginBottom: 16 }}>
            Our Core Values
          </h2>
          <p className="text-muted" style={{ marginBottom: 80 }}>
            What drives us every day — design principles rooted in people, process, and purpose.
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
                title: "Empathy First",
                desc: "Design begins by understanding the people who will experience it.",
              },
              {
                title: "Evolve Constantly",
                desc: "We learn, adapt, and grow — because innovation never stands still.",
              },
              {
                title: "Clarity Over Complexity",
                desc: "Simplicity creates strength. We strip away noise to reveal essence.",
              },
            ].map((val) => (
              <div
                key={val.title}
                className="bg-surface hover-lift shadow-accent-hover"
                style={{
                  padding: "36px 28px",
                  borderRadius: 14,
                  textAlign: "left",
                }}
              >
                <h3 className="text-main" style={{ fontWeight: 700, marginBottom: 8 }}>
                  {val.title}
                </h3>
                <p className="text-muted" style={{ lineHeight: 1.6 }}>
                  {val.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- TIMELINE / MILESTONES ---------------- */}
      <section
        className="bg-surface fade-up"
        style={{
          padding: "140px 24px",
        }}
      >
        <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <h2 className="text-main" style={{ fontWeight: 800, textAlign: "center", marginBottom: 60 }}>
            Our Journey
          </h2>
          <div style={{ display: "grid", gap: 60 }}>
            {[
              {
                year: "2018",
                title: "Founded with a mission",
                desc: "Two designers and one developer joined forces to create a studio dedicated to emotional digital design.",
              },
              {
                year: "2020",
                title: "Grew into a team of creators",
                desc: "Our vision expanded — adding strategists, writers, and motion artists who share our passion for clarity and depth.",
              },
              {
                year: "2023",
                title: "Recognized for innovation",
                desc: "Our projects have been featured in global design awards, showcasing our pursuit of purpose-driven creativity.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="hover-lift shadow-accent-hover"
                style={{
                  padding: "32px 28px",
                  borderLeft: "3px solid var(--color-accent)",
                  background: "var(--color-surface-alt)",
                  borderRadius: 12,
                }}
              >
                <h4
                  className="text-accent"
                  style={{ fontWeight: 700, marginBottom: 6, fontSize: 18 }}
                >
                  {item.year}
                </h4>
                <h3 className="text-main" style={{ fontWeight: 700, marginBottom: 8 }}>
                  {item.title}
                </h3>
                <p className="text-muted">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- TEAM SHOWCASE ---------------- */}
      <section
        className="bg-surface-alt fade-up"
        style={{
          padding: "140px 24px",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <h2 className="text-main" style={{ fontWeight: 800, marginBottom: 16 }}>
            Meet Our Team
          </h2>
          <p className="text-muted" style={{ marginBottom: 80 }}>
            Designers, engineers, and dreamers — united by curiosity and craft.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: 40,
              justifyItems: "center",
            }}
          >
            {["Alex", "Mira", "Noah", "Rin"].map((name) => (
              <div
                key={name}
                className="bg-surface hover-lift shadow-accent-hover"
                style={{
                  borderRadius: 16,
                  padding: 24,
                  width: "100%",
                  maxWidth: 260,
                  textAlign: "center",
                }}
              >
                <div
                  className="bg-gradient-accent"
                  style={{
                    width: 100,
                    height: 100,
                    borderRadius: "50%",
                    margin: "0 auto 20px",
                  }}
                />
                <h4 className="text-main" style={{ fontWeight: 700, marginBottom: 6 }}>
                  {name}
                </h4>
                <p className="text-muted" style={{ fontSize: 14 }}>
                  {name === "Alex"
                    ? "Creative Director"
                    : name === "Mira"
                    ? "Lead Designer"
                    : name === "Noah"
                    ? "Engineering Lead"
                    : "UX Strategist"}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- CTA ---------------- */}
      <section
        className="bg-gradient-secondary fade-up"
        style={{
          textAlign: "center",
          padding: "120px 24px",
          color: "var(--color-surface)",
        }}
      >
        <div style={{ maxWidth: "700px", margin: "0 auto" }}>
          <h2 style={{ fontWeight: 800, marginBottom: 12 }}>
            Let’s create the next chapter — together.
          </h2>
          <p style={{ opacity: 0.9, marginBottom: 28 }}>
            Partner with us to build design systems, experiences, and brands that last.
          </p>
          <button
            className="accent hover-lift"
            style={{
              borderRadius: 10,
              padding: "12px 22px",
              fontWeight: 600,
            }}
          >
            Start a Conversation
          </button>
        </div>
      </section>
    </main>
  );
}
