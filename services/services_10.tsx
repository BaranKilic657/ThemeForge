"use client";

import { useState } from "react";

export default function Services10() {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      name: "Design",
      services: [
        {
          title: "Brand Identity",
          description: "Complete brand systems including logos, colors, typography, and guidelines.",
          price: "From $8K",
        },
        {
          title: "UI/UX Design",
          description: "User-centered design for web and mobile applications.",
          price: "From $12K",
        },
        {
          title: "Design Systems",
          description: "Scalable component libraries and design tokens.",
          price: "From $15K",
        },
      ],
    },
    {
      name: "Development",
      services: [
        {
          title: "Web Development",
          description: "Custom websites and web applications built with modern frameworks.",
          price: "From $20K",
        },
        {
          title: "Mobile Apps",
          description: "Native iOS and Android or cross-platform React Native apps.",
          price: "From $35K",
        },
        {
          title: "E-commerce",
          description: "Full-featured online stores with payment integration.",
          price: "From $25K",
        },
      ],
    },
    {
      name: "Marketing",
      services: [
        {
          title: "SEO & SEM",
          description: "Search optimization and paid advertising campaigns.",
          price: "From $3K/mo",
        },
        {
          title: "Content Strategy",
          description: "Content creation, editorial calendars, and distribution.",
          price: "From $5K/mo",
        },
        {
          title: "Social Media",
          description: "Social media management and campaign execution.",
          price: "From $4K/mo",
        },
      ],
    },
  ];

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
          padding: "140px 24px",
        }}
      >
        <div style={{ maxWidth: "1000px", margin: "0 auto", textAlign: "center" }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 12,
              padding: "10px 24px",
              borderRadius: 24,
              background: "color-mix(in srgb, var(--color-surface) 20%, transparent)",
              fontSize: 14,
              fontWeight: 700,
              marginBottom: 32,
            }}
          >
            <span>🏆</span>
            <span>Award-Winning Digital Agency</span>
          </div>
          <h1
            style={{
              fontWeight: 900,
              fontSize: "clamp(48px, 7vw, 78px)",
              lineHeight: 1.1,
              marginBottom: 32,
            }}
          >
            Your Vision, Our Expertise
          </h1>
          <p
            style={{
              fontSize: 20,
              lineHeight: 1.7,
              marginBottom: 48,
              opacity: 0.95,
              maxWidth: 680,
              margin: "0 auto 48px",
            }}
          >
            We're a full-service digital agency helping brands grow through strategic design,
            development, and marketing.
          </p>
          <button
            className="hover-lift"
            style={{
              padding: "20px 52px",
              borderRadius: 12,
              fontSize: 18,
              fontWeight: 700,
              background: "var(--color-surface)",
              color: "var(--color-accent)",
              border: "none",
              cursor: "pointer",
            }}
          >
            Explore Services
          </button>
        </div>
      </section>

      {/* ---------- TABBED PRICING ---------- */}
      <section
        className="fade-up"
        style={{
          padding: "140px 24px",
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 60 }}>
            <h2
              className="text-main"
              style={{
                fontWeight: 800,
                fontSize: 46,
                marginBottom: 20,
              }}
            >
              Services & Pricing
            </h2>
            <p className="text-muted" style={{ fontSize: 19 }}>
              Transparent pricing for quality services
            </p>
          </div>

          {/* Tabs */}
          <div
            style={{
              display: "flex",
              gap: 12,
              justifyContent: "center",
              marginBottom: 56,
              flexWrap: "wrap",
            }}
          >
            {tabs.map((tab, i) => (
              <button
                key={i}
                onClick={() => setActiveTab(i)}
                className={activeTab === i ? "bg-gradient-accent" : "bg-surface"}
                style={{
                  padding: "16px 40px",
                  borderRadius: 12,
                  fontSize: 17,
                  fontWeight: 700,
                  border: activeTab === i ? "none" : "2px solid var(--color-border)",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  color: activeTab === i ? "var(--color-surface)" : "var(--color-text)",
                }}
              >
                {tab.name}
              </button>
            ))}
          </div>

          {/* Services Grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 32,
            }}
          >
            {tabs[activeTab].services.map((service, i) => (
              <div
                key={i}
                className="bg-surface hover-lift shadow-accent-hover"
                style={{
                  padding: "40px 36px",
                  borderRadius: 20,
                  border: "2px solid var(--color-border)",
                }}
              >
                <h3
                  className="text-main"
                  style={{
                    fontWeight: 800,
                    fontSize: 24,
                    marginBottom: 16,
                  }}
                >
                  {service.title}
                </h3>
                <p
                  className="text-muted"
                  style={{
                    fontSize: 16,
                    lineHeight: 1.7,
                    marginBottom: 28,
                    minHeight: 80,
                  }}
                >
                  {service.description}
                </p>
                <div
                  className="text-accent"
                  style={{
                    fontSize: 32,
                    fontWeight: 900,
                    marginBottom: 28,
                  }}
                >
                  {service.price}
                </div>
                <button
                  className="hover-lift"
                  style={{
                    width: "100%",
                    padding: "14px 32px",
                    borderRadius: 10,
                    fontSize: 15,
                    fontWeight: 700,
                    background: "var(--color-accent)",
                    color: "var(--color-surface)",
                    border: "none",
                    cursor: "pointer",
                  }}
                >
                  Get Quote
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- PROCESS ---------- */}
      <section
        className="bg-surface-alt fade-up"
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
              Our Process
            </h2>
            <p className="text-muted" style={{ fontSize: 19 }}>
              From concept to launch in 5 simple steps
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(5, 1fr)",
              gap: 28,
            }}
          >
            {[
              { step: "01", title: "Discovery", description: "Understanding your needs and goals" },
              { step: "02", title: "Strategy", description: "Creating a roadmap for success" },
              { step: "03", title: "Design", description: "Crafting beautiful interfaces" },
              { step: "04", title: "Development", description: "Building robust solutions" },
              { step: "05", title: "Launch", description: "Going live and beyond" },
            ].map((phase, i) => (
              <div
                key={i}
                className="bg-surface"
                style={{
                  padding: "32px 28px",
                  borderRadius: 16,
                  border: "2px solid var(--color-border)",
                  textAlign: "center",
                }}
              >
                <div
                  className="bg-gradient-accent"
                  style={{
                    width: 56,
                    height: 56,
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 20px",
                    fontSize: 20,
                    fontWeight: 900,
                  }}
                >
                  {phase.step}
                </div>
                <h4
                  className="text-main"
                  style={{
                    fontWeight: 700,
                    fontSize: 18,
                    marginBottom: 12,
                  }}
                >
                  {phase.title}
                </h4>
                <p
                  className="text-muted"
                  style={{
                    fontSize: 14,
                    lineHeight: 1.6,
                  }}
                >
                  {phase.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- TESTIMONIALS ---------- */}
      <section
        className="fade-up"
        style={{
          padding: "140px 24px",
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 80 }}>
            <h2
              className="text-main"
              style={{
                fontWeight: 800,
                fontSize: 46,
                marginBottom: 20,
              }}
            >
              Client Love
            </h2>
            <p className="text-muted" style={{ fontSize: 19 }}>
              What our clients say about us
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 32,
            }}
          >
            {[
              {
                quote: "Best agency we've ever worked with. Professional, creative, and always on time.",
                author: "Sarah Johnson",
                role: "CEO, TechStart",
              },
              {
                quote: "They transformed our digital presence. Our traffic increased 300% in 6 months.",
                author: "Mike Chen",
                role: "Marketing Director, GrowthCo",
              },
              {
                quote: "Exceptional quality and outstanding support. Can't recommend them enough!",
                author: "Emma Wilson",
                role: "Founder, CreativeHub",
              },
            ].map((testimonial, i) => (
              <div
                key={i}
                className="bg-surface hover-lift shadow-accent-hover"
                style={{
                  padding: "36px 32px",
                  borderRadius: 20,
                  border: "2px solid var(--color-border)",
                }}
              >
                <div
                  style={{
                    marginBottom: 20,
                    fontSize: 16,
                  }}
                >
                  {"★★★★★".split("").map((star, idx) => (
                    <span key={idx} className="text-accent">
                      {star}
                    </span>
                  ))}
                </div>
                <p
                  className="text-main"
                  style={{
                    fontSize: 16,
                    lineHeight: 1.7,
                    marginBottom: 24,
                    fontStyle: "italic",
                  }}
                >
                  "{testimonial.quote}"
                </p>
                <div>
                  <div
                    className="text-main"
                    style={{
                      fontWeight: 700,
                      fontSize: 15,
                      marginBottom: 4,
                    }}
                  >
                    {testimonial.author}
                  </div>
                  <div className="text-muted" style={{ fontSize: 13 }}>
                    {testimonial.role}
                  </div>
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
          <div style={{ fontSize: 68, marginBottom: 28 }}>🚀</div>
          <h2
            style={{
              fontWeight: 900,
              fontSize: 48,
              marginBottom: 24,
            }}
          >
            Let's Create Something Amazing
          </h2>
          <p
            style={{
              fontSize: 19,
              lineHeight: 1.7,
              marginBottom: 40,
              opacity: 0.95,
            }}
          >
            Ready to take your digital presence to the next level? Get in touch and let's discuss
            your project.
          </p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <button
              className="hover-lift"
              style={{
                padding: "18px 44px",
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
                padding: "18px 44px",
                borderRadius: 12,
                fontSize: 17,
                fontWeight: 700,
                background: "transparent",
                color: "var(--color-surface)",
                border: "2px solid var(--color-surface)",
                cursor: "pointer",
              }}
            >
              Schedule Call
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
          div[style*="gridTemplateColumns: repeat(3, 1fr)"],
          div[style*="gridTemplateColumns: repeat(5, 1fr)"] {
            grid-template-columns: 1fr !important;
            gap: 24px !important;
          }
          div[style*="padding: 40px 36px"],
          div[style*="padding: 36px 32px"],
          div[style*="padding: 32px 28px"] {
            padding: 28px 24px !important;
          }
          div[style*="minHeight: 80"] {
            min-height: auto !important;
          }
        }
      `}</style>
    </div>
  );
}
