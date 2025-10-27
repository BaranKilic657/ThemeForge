"use client";
import React, { useState, useEffect } from "react";

export default function Home() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const testimonials = [
    {
      quote: "They didn't just redesign our brand — they transformed how we think about storytelling.",
      author: "Marcus Rivera",
      role: "Founder of Momentum",
      avatar: "👨‍💼",
    },
    {
      quote: "Every detail was considered, every interaction refined. The result exceeded our wildest expectations.",
      author: "Sarah Chen",
      role: "CEO at Elevate Studios",
      avatar: "👩‍💻",
    },
    {
      quote: "Working with them felt like having an extension of our team, but with 10x the creative firepower.",
      author: "David Park",
      role: "Design Director, Nexus",
      avatar: "👨‍🎨",
    },
    {
      quote: "They took our vision and amplified it beyond what we thought was possible. True design partners.",
      author: "Emma Thompson",
      role: "VP Product at Horizon",
      avatar: "👩‍💼",
    },
    {
      quote: "The attention to craft and strategic thinking made this the best investment we've made in our brand.",
      author: "James Wu",
      role: "Founder of Apex Labs",
      avatar: "👨‍🔬",
    },
  ];

  // Auto-rotate testimonials every 6 seconds
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(timer);
  }, [testimonials.length, isPaused]);

  return (
    <main className="fade-in" style={{ overflow: "hidden" }}>
      <style>{`
        @media (max-width: 768px) {
          section { padding: 60px 20px !important; }
          h1, .bold-text { font-size: 3.5rem !important; }
          h2 { font-size: 26px !important; }
          h3 { font-size: 18px !important; }
          [style*="grid-template-columns"] { grid-template-columns: 1fr !important; gap: 32px !important; }
          [style*="minmax(500px"] { grid-template-columns: 1fr !important; }
        }
      `}</style>
      {/* ---------------- SPLIT HERO - Editorial Magazine Style ---------------- */}
      <section
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(500px, 1fr))",
          minHeight: "100vh",
        }}
      >
        {/* Left - Bold Typography */}
        <div
          className="bg-gradient-accent fade-left"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "80px 60px",
            color: "var(--color-surface)",
          }}
        >
          <div style={{ maxWidth: 480 }}>
            <div style={{ fontSize: "7rem", fontWeight: 900, lineHeight: 0.85, marginBottom: 32 }}>
              BOLD
            </div>
            <div style={{ fontSize: "2rem", fontWeight: 300, opacity: 0.95, marginBottom: 40 }}>
              Typography-First Design
            </div>
            <button
              className="accent hover-lift"
              style={{
                borderRadius: 10,
                padding: "14px 28px",
                fontWeight: 600,
              }}
            >
              View Our Work
            </button>
          </div>
        </div>

        {/* Right - Stacked Content */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            className="bg-surface-alt fade-up"
            style={{
              flex: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: 48,
            }}
          >
            <div style={{ maxWidth: 400 }}>
              <h2 className="text-main" style={{ fontWeight: 800, marginBottom: 12, fontSize: 28 }}>
                Editorial Excellence
              </h2>
              <p className="text-muted" style={{ lineHeight: 1.7, fontSize: 16 }}>
                Every headline tells a story. We craft layouts that demand attention through bold type and visual hierarchy.
              </p>
            </div>
          </div>
          <div className="preview-secondary fade-up" style={{ flex: 1 }} />
        </div>
      </section>

      {/* ---------------- Asymmetric Bento Grid ---------------- */}
      <section className="bg-surface fade-up" style={{ padding: "140px 24px" }}>
        <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gridTemplateRows: "repeat(3, 220px)",
              gap: 20,
            }}
          >
            {/* Hero Card */}
            <div
              className="bg-surface-alt hover-lift shadow-accent-hover"
              style={{
                gridColumn: "1 / 3",
                gridRow: "1 / 3",
                borderRadius: 16,
                padding: 48,
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",
                background: "linear-gradient(135deg, var(--color-accent), var(--color-accent-hover))",
                color: "var(--color-surface)",
              }}
            >
              <h3 style={{ fontWeight: 900, fontSize: 32, marginBottom: 12 }}>
                Strategic Craft
              </h3>
              <p style={{ opacity: 0.9, fontSize: 17 }}>
                Design systems that scale with your ambition.
              </p>
            </div>

            <div className="bg-gradient-secondary hover-lift" style={{ borderRadius: 16 }} />
            
            <div
              className="bg-surface-alt hover-lift shadow-accent-hover"
              style={{
                borderRadius: 16,
                padding: 24,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
              }}
            >
              <h4 className="text-main" style={{ fontWeight: 800, fontSize: 22 }}>
                Vision
              </h4>
            </div>

            <div
              className="bg-surface-alt hover-lift shadow-accent-hover"
              style={{
                gridColumn: "3 / 5",
                borderRadius: 16,
                padding: 32,
              }}
            >
              <h4 className="text-main" style={{ fontWeight: 800, marginBottom: 10, fontSize: 20 }}>
                Identity Systems
              </h4>
              <p className="text-muted" style={{ fontSize: 15 }}>
                Cohesive brands that resonate across every touchpoint.
              </p>
            </div>

            <div className="preview-accent hover-lift" style={{ borderRadius: 16 }} />
            
            <div
              className="bg-surface-alt hover-lift shadow-accent-hover"
              style={{
                gridColumn: "2 / 4",
                borderRadius: 16,
                padding: 32,
              }}
            >
              <h4 className="text-main" style={{ fontWeight: 800, marginBottom: 10, fontSize: 20 }}>
                Motion Language
              </h4>
              <p className="text-muted" style={{ fontSize: 15 }}>
                Animated identities that bring static brands to life.
              </p>
            </div>

            <div
              className="bg-surface-alt hover-lift"
              style={{
                borderRadius: 16,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <h4 className="text-main" style={{ fontWeight: 900, fontSize: 48 }}>+</h4>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- Full-Width Image Hero ---------------- */}
      <section
        className="fade-up"
        style={{
          position: "relative",
          height: "75vh",
          overflow: "hidden",
        }}
      >
        <div className="preview-gradient" style={{ position: "absolute", inset: 0 }} />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(180deg, transparent 40%, rgba(0,0,0,0.5) 100%)",
            display: "flex",
            alignItems: "flex-end",
            padding: "80px",
            color: "white",
          }}
        >
          <div style={{ maxWidth: 700 }}>
            <h2 style={{ fontWeight: 900, fontSize: 48, marginBottom: 16, lineHeight: 1.1 }}>
              Precision in Every Pixel
            </h2>
            <p style={{ fontSize: 19, opacity: 0.95, lineHeight: 1.5 }}>
              From the first concept sketch to the final launch — we obsess over every detail, every interaction, every moment.
            </p>
          </div>
        </div>
      </section>

      {/* ---------------- Statistics Strip ---------------- */}
      <section className="bg-surface-alt fade-up" style={{ padding: "120px 24px" }}>
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: 64,
            textAlign: "center",
          }}
        >
          {[
            { num: "250+", label: "Projects Shipped" },
            { num: "99%", label: "Client Retention" },
            { num: "75+", label: "Global Partners" },
            { num: "15yr", label: "Craft Mastery" },
          ].map((stat) => (
            <div key={stat.label} className="fade-up">
              <div
                className="text-accent"
                style={{ fontSize: "4rem", fontWeight: 900, marginBottom: 10 }}
              >
                {stat.num}
              </div>
              <div className="text-muted" style={{ fontWeight: 600, fontSize: 16, letterSpacing: "0.5px" }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ---------------- Featured Testimonial ---------------- */}
      <section className="bg-surface fade-up" style={{ padding: "140px 24px", textAlign: "center" }}>
        <div style={{ maxWidth: "920px", margin: "0 auto" }}>
          <div
            className="bg-surface-alt shadow-accent-hover hover-lift"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            style={{
              borderRadius: 24,
              padding: "80px 60px",
              position: "relative",
              overflow: "hidden",
              transition: "all 0.4s ease",
            }}
          >
            <div
              className="bg-gradient-accent"
              style={{
                position: "absolute",
                top: "-50%",
                right: "-20%",
                width: 400,
                height: 400,
                borderRadius: "50%",
                opacity: 0.08,
                filter: "blur(60px)",
              }}
            />
            
            {/* Profile Avatar */}
            <div
              style={{
                width: 80,
                height: 80,
                borderRadius: "50%",
                background: "var(--color-accent)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 40,
                margin: "0 auto 32px",
                boxShadow: "0 8px 24px rgba(0,0,0,0.15)",
              }}
            >
              {testimonials[activeTestimonial].avatar}
            </div>

            <p
              className="text-main"
              style={{
                fontSize: "1.75rem",
                fontWeight: 600,
                lineHeight: 1.5,
                marginBottom: 32,
                position: "relative",
              }}
            >
              "{testimonials[activeTestimonial].quote}"
            </p>
            <div>
              <div className="text-accent" style={{ fontWeight: 700, fontSize: 17, marginBottom: 4 }}>
                {testimonials[activeTestimonial].author}
              </div>
              <div className="text-muted" style={{ fontSize: 15 }}>
                {testimonials[activeTestimonial].role}
              </div>
            </div>
          </div>

          {/* Profile Picture Navigation */}
          <div
            style={{
              display: "flex",
              gap: 16,
              justifyContent: "center",
              marginTop: 48,
              alignItems: "center",
            }}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {testimonials.map((testimonial, i) => (
              <button
                key={i}
                onClick={() => setActiveTestimonial(i)}
                className="hover-lift"
                style={{
                  width: i === activeTestimonial ? 64 : 48,
                  height: i === activeTestimonial ? 64 : 48,
                  borderRadius: "50%",
                  background: "var(--color-accent)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: i === activeTestimonial ? 28 : 20,
                  border: i === activeTestimonial ? "3px solid var(--color-accent-hover)" : "2px solid var(--color-border)",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  boxShadow: i === activeTestimonial ? "0 4px 16px rgba(0,0,0,0.2)" : "none",
                  opacity: i === activeTestimonial ? 1 : 0.6,
                }}
              >
                {testimonial.avatar}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- Split CTA ---------------- */}
      <section
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(500px, 1fr))",
          minHeight: "65vh",
        }}
      >
        <div
          className="bg-surface fade-left"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "80px 60px",
          }}
        >
          <div style={{ maxWidth: 520 }}>
            <h2 className="text-main" style={{ fontWeight: 900, fontSize: 42, marginBottom: 20, lineHeight: 1.1 }}>
              Let's Make Something Unforgettable
            </h2>
            <p className="text-muted" style={{ marginBottom: 32, lineHeight: 1.7, fontSize: 17 }}>
              Bold concepts. Refined execution. A partnership built on craft and ambition.
            </p>
            <button
              className="btn-gradient hover-lift"
              style={{
                borderRadius: 10,
                padding: "16px 32px",
                fontWeight: 700,
                fontSize: 16,
              }}
            >
              Start Your Project
            </button>
          </div>
        </div>

        <div className="bg-gradient-secondary fade-right" />
      </section>
    </main>
  );
}
