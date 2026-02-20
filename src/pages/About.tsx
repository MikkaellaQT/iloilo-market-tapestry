import { Link } from "react-router-dom";
import { ArrowRight, Target, Eye, Heart } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import heroBanner from "@/assets/hero-banner.jpg";

const aboutSections = [
  {
    icon: Eye,
    title: "Vision",
    text: "A city where thriving public markets reflect Iloilo's identity as the Queen City of the South — hygienic, heritage-proud, and future-ready for every generation of Ilonggos.",
    color: "hsl(var(--primary))",
  },
  {
    icon: Target,
    title: "Mission",
    text: "To modernize Iloilo's landmark public markets through participatory planning, heritage-sensitive design, and standards-driven infrastructure that elevates vendor livelihoods and community wellbeing.",
    color: "hsl(var(--accent))",
  },
  {
    icon: Heart,
    title: "Values",
    text: "Heritage preservation, inclusive accessibility, environmental sustainability, vendor partnership, and transparent governance drive every decision in this modernization program.",
    color: "hsl(35 75% 52%)",
  },
];

const timeline = [
  { year: "2023", event: "Project inception — feasibility studies and community consultations begin." },
  { year: "2024", event: "Architectural and heritage assessment completed for all four markets." },
  { year: "2025", event: "Groundbreaking and construction phase begins across all market sites." },
  { year: "2026", event: "Phase 1 completion — Terminal Market and Central Market open to public." },
  { year: "2027", event: "Phase 2 completion — Jaro and La Paz Markets fully operational." },
];

const About = () => {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section
          className="relative py-32 px-6 overflow-hidden flex items-center justify-center min-h-[50vh]"
          aria-label="About the project"
        >
          <img
            src={heroBanner}
            alt="Iloilo City Public Market from the air"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(135deg, hsl(15 65% 45% / 0.9) 0%, hsl(20 20% 8% / 0.88) 100%)",
            }}
          />
          <div className="relative z-10 text-center max-w-3xl mx-auto">
            <div className="ornament mb-2">
              <span
                className="font-body text-xs tracking-widest uppercase font-semibold"
                style={{ color: "hsl(var(--primary-light))" }}
              >
                About the Project
              </span>
            </div>
            <h1
              className="font-display font-black text-4xl sm:text-5xl mb-4"
              style={{ color: "hsl(38 35% 97%)" }}
            >
              The Story Behind the Initiative
            </h1>
            <p
              className="font-body text-base leading-relaxed"
              style={{ color: "hsl(38 25% 80%)" }}
            >
              The Iloilo City Public Market Modernization Project is a landmark commitment by
              the City Government of Iloilo to its vendors, communities, and heritage — for
              the next 100 years.
            </p>
          </div>
        </section>

        {/* Vision / Mission / Values */}
        <section className="py-16 px-6" style={{ background: "var(--gradient-section)" }}>
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
            {aboutSections.map(({ icon: Icon, title, text, color }) => (
              <div
                key={title}
                className="rounded-2xl p-7"
                style={{
                  background: "hsl(var(--card))",
                  border: "1px solid hsl(var(--border))",
                  boxShadow: "var(--shadow-sm)",
                }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: `${color}18`, border: `1px solid ${color}30` }}
                >
                  <Icon size={22} style={{ color }} />
                </div>
                <h2
                  className="font-display font-bold text-xl mb-3"
                  style={{ color: "hsl(var(--foreground))" }}
                >
                  {title}
                </h2>
                <p
                  className="font-body text-sm leading-relaxed"
                  style={{ color: "hsl(var(--muted-foreground))" }}
                >
                  {text}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Context */}
        <section className="py-16 px-6">
          <div className="max-w-3xl mx-auto">
            <div className="ornament mb-2">
              <span
                className="font-body text-xs tracking-widest uppercase font-semibold"
                style={{ color: "hsl(var(--primary))" }}
              >
                Context
              </span>
            </div>
            <h2
              className="font-display font-bold text-2xl sm:text-3xl mb-6 text-center"
              style={{ color: "hsl(var(--foreground))" }}
            >
              Why This Project Matters
            </h2>
            <div className="space-y-4 font-body text-sm leading-relaxed" style={{ color: "hsl(var(--muted-foreground))" }}>
              <p>
                Public markets are not merely commercial spaces — in Iloilo, they are living
                archives of culture, livelihood, and community identity. From the Art Deco
                grandeur of Tienda Mayor to the world-famous Batchoy stalls of La Paz, each
                market tells a story that spans generations.
              </p>
              <p>
                Yet these markets face mounting pressures: aging infrastructure, sanitation
                challenges, inadequate fire safety, and poor accessibility for persons with
                disabilities. Without intervention, these irreplaceable cultural assets face
                decline — and the livelihoods of thousands of vendor families with them.
              </p>
              <p>
                The modernization project addresses these challenges head-on with a
                "Heritage-Led, Future-Ready" approach — ensuring that what makes each
                market unique is not lost, but amplified, as they are upgraded to meet
                21st-century standards.
              </p>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section
          className="py-16 px-6"
          style={{ background: "hsl(var(--foreground))" }}
          aria-label="Project timeline"
        >
          <div className="max-w-3xl mx-auto">
            <div className="ornament mb-2">
              <span
                className="font-body text-xs tracking-widest uppercase font-semibold"
                style={{ color: "hsl(var(--primary))" }}
              >
                Timeline
              </span>
            </div>
            <h2
              className="font-display font-bold text-2xl sm:text-3xl mb-10 text-center"
              style={{ color: "hsl(38 35% 95%)" }}
            >
              Project Milestones
            </h2>

            <ol className="relative space-y-6">
              {/* Line */}
              <div
                className="absolute left-12 top-0 bottom-0 w-px"
                style={{ background: "hsl(var(--primary) / 0.25)" }}
              />
              {timeline.map(({ year, event }, i) => (
                <li key={year} className="relative flex gap-6 items-start">
                  <div
                    className="relative z-10 w-24 flex-shrink-0 flex flex-col items-center"
                  >
                    <div
                      className="w-8 h-8 rounded-full flex items-center justify-center font-display font-bold text-xs"
                      style={{
                        background:
                          i <= 1
                            ? "hsl(var(--primary))"
                            : "hsl(var(--primary) / 0.25)",
                        border: "2px solid hsl(var(--primary) / 0.5)",
                        color:
                          i <= 1
                            ? "hsl(var(--primary-foreground))"
                            : "hsl(var(--primary))",
                      }}
                    >
                      {i + 1}
                    </div>
                    <span
                      className="font-display font-bold text-base mt-1"
                      style={{ color: "hsl(var(--primary))" }}
                    >
                      {year}
                    </span>
                  </div>
                  <div
                    className="flex-1 rounded-xl p-4 mt-1"
                    style={{
                      background:
                        i <= 1
                          ? "hsl(var(--primary) / 0.12)"
                          : "hsl(38 35% 98% / 0.05)",
                      border:
                        i <= 1
                          ? "1px solid hsl(var(--primary) / 0.3)"
                          : "1px solid hsl(38 35% 98% / 0.08)",
                    }}
                  >
                    <p
                      className="font-body text-sm leading-relaxed"
                      style={{
                        color:
                          i <= 1 ? "hsl(38 35% 90%)" : "hsl(38 15% 60%)",
                      }}
                    >
                      {event}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-6 text-center" style={{ background: "var(--gradient-section)" }}>
          <h2
            className="font-display font-bold text-2xl sm:text-3xl mb-4"
            style={{ color: "hsl(var(--foreground))" }}
          >
            Ready to Explore the Markets?
          </h2>
          <p
            className="font-body text-sm mb-6"
            style={{ color: "hsl(var(--muted-foreground))" }}
          >
            Dive into the history, modernization plans, and unique character of each market.
          </p>
          <Link
            to="/#markets"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-body font-semibold text-sm transition-all duration-200"
            style={{
              background: "hsl(var(--primary))",
              color: "hsl(var(--primary-foreground))",
              boxShadow: "var(--shadow-terracotta)",
            }}
          >
            Explore All Markets
            <ArrowRight size={15} />
          </Link>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default About;
