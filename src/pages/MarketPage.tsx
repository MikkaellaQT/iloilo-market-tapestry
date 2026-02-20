import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowLeft, MapPin, Calendar, CheckCircle2 } from "lucide-react";
import { getMarketBySlug } from "@/data/markets";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

/**
 * MarketPage — Dynamic content loader (Application Layer)
 * Fetches data from the Data Layer (markets.ts) and populates the Presentation Layer.
 * Mirrors the role of app.js dynamic content loader in the 3-tier spec.
 */
const MarketPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const market = getMarketBySlug(slug ?? "");

  // Redirect to 404 if market not found
  if (!market) return <Navigate to="/not-found" replace />;

  const accentHsl =
    market.accentColor === "terracotta"
      ? "hsl(var(--primary))"
      : market.accentColor === "leaf"
      ? "hsl(var(--accent))"
      : market.accentColor === "steel"
      ? "hsl(var(--secondary))"
      : "hsl(35 75% 52%)";

  return (
    <>
      <Header />
      <main>
        {/* ── Hero ─────────────────────────────────────────── */}
        <section
          className="relative min-h-[65vh] flex items-end overflow-hidden"
          aria-label={`${market.name} hero`}
        >
          <img
            src={market.imagePath}
            alt={`${market.name} — ${market.focus}`}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, hsl(20 20% 8% / 0.3) 0%, hsl(20 20% 5% / 0.92) 100%)",
            }}
          />

          <div className="relative z-10 max-w-5xl mx-auto w-full px-6 pb-14 pt-32">
            {/* Breadcrumb */}
            <Link
              to="/"
              className="inline-flex items-center gap-2 mb-6 font-body text-sm transition-colors"
              style={{ color: "hsl(38 25% 70%)" }}
              aria-label="Back to homepage"
            >
              <ArrowLeft size={15} />
              All Markets
            </Link>

            {/* Badge */}
            <div className="flex flex-wrap gap-2 mb-4">
              <span
                className="inline-flex items-center px-3 py-1 rounded-full text-xs font-body font-semibold uppercase tracking-wide"
                style={{ background: accentHsl, color: "hsl(0 0% 100%)" }}
              >
                {market.badge}
              </span>
              <span
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-body"
                style={{
                  background: "hsl(38 35% 98% / 0.1)",
                  border: "1px solid hsl(38 35% 98% / 0.25)",
                  color: "hsl(38 25% 85%)",
                }}
              >
                <MapPin size={10} /> {market.district}
              </span>
              <span
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-body"
                style={{
                  background: "hsl(38 35% 98% / 0.1)",
                  border: "1px solid hsl(38 35% 98% / 0.25)",
                  color: "hsl(38 25% 85%)",
                }}
              >
                <Calendar size={10} /> Est. {market.established}
              </span>
            </div>

            <h1
              className="font-display font-black text-4xl sm:text-5xl lg:text-6xl leading-tight mb-2"
              style={{ color: "hsl(38 35% 97%)" }}
            >
              {market.name}
            </h1>
            <p
              className="font-display italic text-xl mb-3"
              style={{ color: accentHsl }}
            >
              {market.subtitle}
            </p>
            <p
              className="font-body text-base max-w-xl"
              style={{ color: "hsl(38 25% 75%)" }}
            >
              {market.tagline}
            </p>
          </div>
        </section>

        {/* ── Stats Row ────────────────────────────────────── */}
        <section
          className="py-10 px-6"
          style={{ background: "hsl(var(--foreground))" }}
          aria-label="Market statistics"
        >
          <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
            {market.stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl p-5 text-center"
                style={{
                  background: "hsl(var(--primary) / 0.1)",
                  border: "1px solid hsl(var(--primary) / 0.2)",
                }}
              >
                <div
                  className="font-display font-bold text-3xl leading-none mb-1"
                  style={{ color: accentHsl }}
                >
                  {stat.value}
                </div>
                <div
                  className="font-body text-xs"
                  style={{ color: "hsl(38 15% 62%)" }}
                >
                  {stat.label}
                </div>
                {stat.unit && (
                  <div
                    className="font-body text-xs mt-0.5"
                    style={{ color: "hsl(38 10% 45%)" }}
                  >
                    {stat.unit}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* ── About + History ─────────────────────────────── */}
        <section
          className="py-16 px-6"
          style={{ background: "var(--gradient-section)" }}
          aria-label="Market history and description"
        >
          <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* History */}
            <div>
              <div className="ornament mb-2">
                <span
                  className="font-body text-xs tracking-widest uppercase font-semibold"
                  style={{ color: accentHsl }}
                >
                  History
                </span>
              </div>
              <h2
                className="font-display font-bold text-2xl mb-4"
                style={{ color: "hsl(var(--foreground))" }}
              >
                A Story Worth Preserving
              </h2>
              <p
                className="font-body text-sm leading-relaxed mb-4"
                style={{ color: "hsl(var(--muted-foreground))" }}
              >
                {market.history}
              </p>

              {/* Highlights */}
              <ul className="space-y-2">
                {market.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-2.5">
                    <CheckCircle2
                      size={15}
                      className="mt-0.5 flex-shrink-0"
                      style={{ color: accentHsl }}
                    />
                    <span
                      className="font-body text-sm"
                      style={{ color: "hsl(var(--muted-foreground))" }}
                    >
                      {h}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Description + Goals */}
            <div>
              <div className="ornament mb-2">
                <span
                  className="font-body text-xs tracking-widest uppercase font-semibold"
                  style={{ color: accentHsl }}
                >
                  Modernization
                </span>
              </div>
              <h2
                className="font-display font-bold text-2xl mb-4"
                style={{ color: "hsl(var(--foreground))" }}
              >
                The Modernization Plan
              </h2>
              <p
                className="font-body text-sm leading-relaxed mb-6"
                style={{ color: "hsl(var(--muted-foreground))" }}
              >
                {market.description}
              </p>

              {/* Goals */}
              <div
                className="rounded-xl p-5"
                style={{
                  background: `${accentHsl}10`,
                  border: `1px solid ${accentHsl}25`,
                }}
              >
                <h3
                  className="font-display font-semibold text-base mb-3"
                  style={{ color: accentHsl }}
                >
                  Key Modernization Goals
                </h3>
                <ul className="space-y-2">
                  {market.modernizationGoals.map((goal, i) => (
                    <li key={goal} className="flex items-start gap-2.5">
                      <span
                        className="font-display font-bold text-sm flex-shrink-0 w-5"
                        style={{ color: accentHsl }}
                      >
                        {i + 1}.
                      </span>
                      <span
                        className="font-body text-sm"
                        style={{ color: "hsl(var(--foreground))" }}
                      >
                        {goal}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ── Features Grid ────────────────────────────────── */}
        <section
          className="py-16 px-6"
          aria-label="Market features and improvements"
        >
          <div className="max-w-5xl mx-auto">
            <div className="ornament mb-2">
              <span
                className="font-body text-xs tracking-widest uppercase font-semibold"
                style={{ color: accentHsl }}
              >
                Features
              </span>
            </div>
            <h2
              className="font-display font-bold text-2xl sm:text-3xl mb-8 text-center"
              style={{ color: "hsl(var(--foreground))" }}
            >
              What's Being Built
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {market.features.map((feature) => (
                <div
                  key={feature.title}
                  className="feature-item"
                >
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center text-xl flex-shrink-0"
                    style={{
                      background: `${accentHsl}15`,
                      border: `1px solid ${accentHsl}25`,
                    }}
                  >
                    {feature.icon}
                  </div>
                  <div>
                    <h3
                      className="font-display font-semibold text-sm mb-1"
                      style={{ color: "hsl(var(--foreground))" }}
                    >
                      {feature.title}
                    </h3>
                    <p
                      className="font-body text-xs leading-relaxed"
                      style={{ color: "hsl(var(--muted-foreground))" }}
                    >
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Other Markets ────────────────────────────────── */}
        <section
          className="py-16 px-6"
          style={{ background: "hsl(var(--muted))" }}
          aria-label="Explore other markets"
        >
          <div className="max-w-5xl mx-auto text-center">
            <h2
              className="font-display font-bold text-2xl mb-2"
              style={{ color: "hsl(var(--foreground))" }}
            >
              Explore More Markets
            </h2>
            <p
              className="font-body text-sm mb-8"
              style={{ color: "hsl(var(--muted-foreground))" }}
            >
              Discover the other markets being transformed in Iloilo City.
            </p>
            <Link
              to="/#markets"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-body font-semibold text-sm transition-all duration-200"
              style={{
                background: accentHsl,
                color: "hsl(0 0% 100%)",
                boxShadow: `0 4px 20px ${accentHsl.replace(")", " / 0.3)")}`,
              }}
            >
              <ArrowLeft size={15} />
              Back to All Markets
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default MarketPage;
