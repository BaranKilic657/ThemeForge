"use client";

import { useState } from "react";

export default function Portfolio2() {
  const [filter, setFilter] = useState("All");

  const categories = ["All", "Web", "Mobile", "Branding", "E-commerce"];

  const projects = [
    {
      title: "Aurora Banking",
      category: "Web",
      description: "Modern banking interface with advanced security features",
      color: "var(--color-accent)",
    },
    {
      title: "Wellness App",
      category: "Mobile",
      description: "Health tracking and fitness coaching platform",
      color: "var(--color-accent)",
    },
    {
      title: "Urban Coffee Co.",
      category: "Branding",
      description: "Complete brand identity for artisan coffee chain",
      color: "var(--color-accent)",
    },
    {
      title: "StyleHub",
      category: "E-commerce",
      description: "Fashion marketplace with AR try-on features",
      color: "var(--color-accent)",
    },
    {
      title: "TaskMaster Pro",
      category: "Web",
      description: "Enterprise project management solution",
      color: "var(--color-accent)",
    },
    {
      title: "PetCare Connect",
      category: "Mobile",
      description: "Veterinary appointment and pet health tracker",
      color: "var(--color-accent)",
    },
    {
      title: "GreenLeaf Organics",
      category: "Branding",
      description: "Sustainable food brand visual identity",
      color: "var(--color-accent)",
    },
    {
      title: "TechGear Store",
      category: "E-commerce",
      description: "Electronics e-commerce with smart recommendations",
      color: "var(--color-accent)",
    },
    {
      title: "CloudSync",
      category: "Web",
      description: "File sharing and collaboration platform",
      color: "var(--color-accent)",
    },
  ];

  const filteredProjects =
    filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <div
      style={{
        minHeight: "100vh",
        paddingTop: 80,
      }}
    >
      {/* ---------- HERO ---------- */}
      <section
        className="bg-gradient-accent"
        style={{
          padding: "120px 24px",
        }}
      >
        <div style={{ maxWidth: "1000px", margin: "0 auto", textAlign: "center" }}>
          <h1
            style={{
              fontWeight: 900,
              fontSize: "clamp(52px, 8vw, 84px)",
              lineHeight: 1.1,
              marginBottom: 32,
            }}
          >
            Our Portfolio
          </h1>
          <p
            style={{
              fontSize: 21,
              lineHeight: 1.7,
              marginBottom: 48,
              opacity: 0.95,
              maxWidth: 680,
              margin: "0 auto",
            }}
          >
            Showcasing the brands we've built, the products we've designed, and the experiences we've
            crafted for forward-thinking companies.
          </p>
        </div>
      </section>

      {/* ---------- STATS ---------- */}
      <section
        className="bg-surface-alt fade-up"
        style={{
          padding: "80px 24px",
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: 48,
              textAlign: "center",
            }}
          >
            {[
              { value: "150+", label: "Projects Completed" },
              { value: "50+", label: "Happy Clients" },
              { value: "12", label: "Countries" },
              { value: "20+", label: "Awards Won" },
            ].map((stat, i) => (
              <div key={i}>
                <div
                  className="text-accent"
                  style={{
                    fontSize: 48,
                    fontWeight: 900,
                    marginBottom: 12,
                  }}
                >
                  {stat.value}
                </div>
                <div
                  className="text-main"
                  style={{
                    fontSize: 16,
                    fontWeight: 600,
                  }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- FILTERABLE GALLERY ---------- */}
      <section
        className="fade-up"
        style={{
          padding: "140px 24px",
        }}
      >
        <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
          {/* Filter Buttons */}
          <div
            style={{
              display: "flex",
              gap: 12,
              justifyContent: "center",
              marginBottom: 60,
              flexWrap: "wrap",
            }}
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={filter === category ? "bg-gradient-accent" : "bg-surface"}
                style={{
                  padding: "14px 32px",
                  borderRadius: 12,
                  fontSize: 15,
                  fontWeight: 700,
                  border: filter === category ? "none" : "2px solid var(--color-border)",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  color: filter === category ? "var(--color-surface)" : "var(--color-text)",
                }}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Masonry Grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 28,
            }}
          >
            {filteredProjects.map((project, index) => (
              <div
                key={index}
                className="bg-surface hover-lift shadow-accent-hover"
                style={{
                  borderRadius: 24,
                  border: "2px solid var(--color-border)",
                  overflow: "hidden",
                  cursor: "pointer",
                }}
              >
                {/* Image Placeholder */}
                <div
                  className="bg-gradient-accent"
                  style={{
                    height: index % 3 === 0 ? 280 : index % 3 === 1 ? 240 : 320,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 48,
                    position: "relative",
                  }}
                >
                  {index % 3 === 0 ? "🎨" : index % 3 === 1 ? "💻" : "📱"}
                  
                  {/* Category Badge */}
                  <div
                    style={{
                      position: "absolute",
                      top: 20,
                      right: 20,
                      padding: "8px 16px",
                      borderRadius: 8,
                      background: "var(--color-surface)",
                      color: "var(--color-accent)",
                      fontSize: 12,
                      fontWeight: 700,
                      textTransform: "uppercase",
                      letterSpacing: 1,
                    }}
                  >
                    {project.category}
                  </div>
                </div>

                {/* Content */}
                <div style={{ padding: "32px 28px" }}>
                  <h3
                    className="text-main"
                    style={{
                      fontWeight: 800,
                      fontSize: 24,
                      marginBottom: 12,
                    }}
                  >
                    {project.title}
                  </h3>
                  <p
                    className="text-muted"
                    style={{
                      fontSize: 15,
                      lineHeight: 1.7,
                    }}
                  >
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- TESTIMONIAL ---------- */}
      <section
        className="bg-surface-alt fade-up"
        style={{
          padding: "140px 24px",
        }}
      >
        <div style={{ maxWidth: "900px", margin: "0 auto", textAlign: "center" }}>
          <div
            style={{
              fontSize: 72,
              marginBottom: 32,
            }}
          >
            💬
          </div>
          <blockquote
            className="text-main"
            style={{
              fontSize: 28,
              fontWeight: 600,
              lineHeight: 1.6,
              marginBottom: 32,
              fontStyle: "italic",
            }}
          >
            "Working with this team was transformative. They didn't just build our product—they
            understood our vision and brought it to life beyond our expectations."
          </blockquote>
          <div>
            <div
              className="text-main"
              style={{
                fontWeight: 700,
                fontSize: 18,
                marginBottom: 6,
              }}
            >
              Jennifer Martinez
            </div>
            <div className="text-muted" style={{ fontSize: 15 }}>
              CEO, TechVentures Inc.
            </div>
          </div>
        </div>
      </section>

      {/* ---------- SERVICES TEASER ---------- */}
      <section
        className="fade-up"
        style={{
          padding: "140px 24px",
        }}
      >
        <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 80 }}>
            <h2
              className="text-main"
              style={{
                fontWeight: 800,
                fontSize: 46,
                marginBottom: 20,
              }}
            >
              What We Do
            </h2>
            <p className="text-muted" style={{ fontSize: 19 }}>
              Our areas of expertise
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: 28,
            }}
          >
            {[
              { icon: "🎨", title: "Brand Design", items: 32 },
              { icon: "💻", title: "Web Development", items: 58 },
              { icon: "📱", title: "Mobile Apps", items: 41 },
              { icon: "🛍️", title: "E-commerce", items: 19 },
            ].map((service, i) => (
              <div
                key={i}
                className="bg-surface hover-lift shadow-accent-hover"
                style={{
                  padding: "40px 32px",
                  borderRadius: 20,
                  border: "2px solid var(--color-border)",
                  textAlign: "center",
                }}
              >
                <div style={{ fontSize: 56, marginBottom: 20 }}>{service.icon}</div>
                <h4
                  className="text-main"
                  style={{
                    fontWeight: 700,
                    fontSize: 20,
                    marginBottom: 12,
                  }}
                >
                  {service.title}
                </h4>
                <div className="text-muted" style={{ fontSize: 15 }}>
                  {service.items} projects
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- CTA ---------- */}
      <section
        className="bg-gradient-secondary fade-up"
        style={{
          padding: "100px 24px",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <h2
            style={{
              fontWeight: 900,
              fontSize: 48,
              marginBottom: 24,
            }}
          >
            Let's Create Your Next Success Story
          </h2>
          <p
            style={{
              fontSize: 19,
              lineHeight: 1.7,
              marginBottom: 40,
              opacity: 0.95,
            }}
          >
            Join the growing list of satisfied clients who've transformed their digital presence with
            our help.
          </p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <button
              className="hover-lift"
              style={{
                padding: "18px 48px",
                borderRadius: 12,
                fontSize: 17,
                fontWeight: 700,
                background: "var(--color-surface)",
                color: "var(--color-accent)",
                border: "none",
                cursor: "pointer",
              }}
            >
              Start a Project
            </button>
            <button
              className="hover-lift"
              style={{
                padding: "18px 48px",
                borderRadius: 12,
                fontSize: 17,
                fontWeight: 700,
                background: "transparent",
                color: "var(--color-surface)",
                border: "2px solid var(--color-surface)",
                cursor: "pointer",
              }}
            >
              Contact Us
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
          blockquote {
            font-size: 20px !important;
          }
          div[style*="gridTemplateColumns: repeat(3, 1fr)"],
          div[style*="gridTemplateColumns: repeat(4, 1fr)"] {
            grid-template-columns: 1fr !important;
            gap: 24px !important;
          }
          div[style*="padding: 40px 32px"],
          div[style*="padding: 32px 28px"] {
            padding: 28px 24px !important;
          }
        }
      `}</style>
    </div>
  );
}
