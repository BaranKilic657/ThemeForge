import React from "react";

export default function About() {
  return (
    <main className="fade-in" style={{ overflow: "hidden" }}>
      {/* ---------------- HERO ---------------- */}
      <section
        className="bg-surface fade-up"
        style={{
          minHeight: "70vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "0 24px",
        }}
      >
        <h1
          className="text-main"
          style={{
            fontSize: "3.4rem",
            fontWeight: 800,
            lineHeight: 1.1,
            marginBottom: 20,
          }}
        >
          Empowering innovation through clarity.
        </h1>
        <p
          className="text-muted"
          style={{
            maxWidth: 640,
            margin: "0 auto",
            lineHeight: 1.7,
          }}
        >
          We help modern businesses evolve through design systems, user experience, and scalable digital transformation.
        </p>
      </section>

      {/* ---------------- OVERVIEW ---------------- */}
      <section
        className="bg-surface-alt fade-up"
        style={{
          padding: "120px 24px",
        }}
      >
        <div
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(460px, 1fr))",
            gap: 80,
            alignItems: "center",
          }}
        >
          <div>
            <h2 className="text-main" style={{ fontWeight: 800, marginBottom: 14 }}>
              Who We Are
            </h2>
            <p className="text-muted" style={{ lineHeight: 1.8, marginBottom: 16 }}>
              We are a multidisciplinary team of designers, engineers, and strategists united by
              one mission — to make technology simple, purposeful, and powerful.
            </p>
            <p className="text-muted" style={{ lineHeight: 1.8 }}>
              Our work combines strategy, experience design, and system architecture to build
              products that drive lasting impact.
            </p>
          </div>

          <div
            className="bg-gradient-accent hover-lift shadow-accent-hover"
            style={{
              height: 400,
              borderRadius: 18,
            }}
          />
        </div>
      </section>

      {/* ---------------- COMPANY STATS ---------------- */}
      <section
        className="bg-surface fade-up"
        style={{
          padding: "120px 24px",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <h2 className="text-main" style={{ fontWeight: 800, marginBottom: 12 }}>
            Trusted by teams worldwide
          </h2>
          <p className="text-muted" style={{ marginBottom: 80 }}>
            Delivering measurable design and technology outcomes across industries.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: 40,
              justifyItems: "center",
            }}
          >
            {[
              { value: "150+", label: "Clients" },
              { value: "35+", label: "Industries Served" },
              { value: "98%", label: "Retention Rate" },
              { value: "10yrs", label: "Experience" },
            ].map((stat) => (
              <div key={stat.label} className="hover-lift">
                <h3
                  className="text-accent"
                  style={{ fontWeight: 800, fontSize: 32, marginBottom: 8 }}
                >
                  {stat.value}
                </h3>
                <p className="text-muted">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- VALUE PILLARS ---------------- */}
      <section
        className="bg-surface-alt fade-up"
        style={{
          padding: "140px 24px",
        }}
      >
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 80 }}>
            <h2 className="text-main" style={{ fontWeight: 800, marginBottom: 14 }}>
              Our Pillars
            </h2>
            <p className="text-muted">
              Guiding principles behind every collaboration, project, and innovation.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: 48,
            }}
          >
            {[
              {
                title: "Integrity",
                desc: "We hold ourselves to the highest ethical and creative standards in everything we do.",
              },
              {
                title: "Partnership",
                desc: "We believe in collaboration, transparency, and mutual growth with our clients.",
              },
              {
                title: "Excellence",
                desc: "Our work blends rigorous execution with visionary design.",
              },
            ].map((pillar) => (
              <div
                key={pillar.title}
                className="bg-surface hover-lift shadow-accent-hover"
                style={{
                  borderRadius: 16,
                  padding: "40px 32px",
                  textAlign: "left",
                }}
              >
                <h3 className="text-main" style={{ fontWeight: 700, marginBottom: 8 }}>
                  {pillar.title}
                </h3>
                <p className="text-muted" style={{ lineHeight: 1.6 }}>
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- LEADERSHIP ---------------- */}
      <section
        className="bg-surface fade-up"
        style={{
          padding: "140px 24px",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <h2 className="text-main" style={{ fontWeight: 800, marginBottom: 16 }}>
            Leadership
          </h2>
          <p className="text-muted" style={{ marginBottom: 80 }}>
            Our team of leaders brings together decades of multidisciplinary expertise.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: 40,
              justifyItems: "center",
            }}
          >
            {[
              { name: "Liam Foster", role: "CEO & Founder" },
              { name: "Sofia Grant", role: "Head of Design" },
              { name: "Ethan Wu", role: "Lead Engineer" },
              { name: "Iris Kim", role: "Strategy Director" },
            ].map((person) => (
              <div
                key={person.name}
                className="bg-surface-alt hover-lift shadow-accent-hover"
                style={{
                  borderRadius: 14,
                  padding: 28,
                  width: "100%",
                  maxWidth: 280,
                }}
              >
                <div
                  className="bg-gradient-secondary"
                  style={{
                    width: 90,
                    height: 90,
                    borderRadius: "50%",
                    margin: "0 auto 20px",
                  }}
                />
                <h4 className="text-main" style={{ fontWeight: 700 }}>
                  {person.name}
                </h4>
                <p className="text-muted" style={{ fontSize: 14 }}>
                  {person.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- CTA ---------------- */}
      <section
        className="bg-gradient-accent fade-up"
        style={{
          padding: "120px 24px",
          textAlign: "center",
          color: "var(--color-surface)",
        }}
      >
        <div style={{ maxWidth: "700px", margin: "0 auto" }}>
          <h2 style={{ fontWeight: 800, marginBottom: 12 }}>
            Let’s build with purpose.
          </h2>
          <p style={{ opacity: 0.9, marginBottom: 28 }}>
            Discover how clarity in design can drive transformation at every level of your business.
          </p>
          <button
            className="accent hover-lift"
            style={{
              borderRadius: 10,
              padding: "12px 22px",
              fontWeight: 600,
            }}
          >
            Partner with Us
          </button>
        </div>
      </section>
    </main>
  );
}
