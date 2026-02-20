import heroBanner from "@/assets/hero-banner.jpg";
import { getAllMarkets } from "@/data/markets";
import MarketCard from "@/components/MarketCard";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowDown, Building2, Users, TrendingUp, Leaf } from "lucide-react";

const highlights = [
  {
    icon: Building2,
    label: "4 Markets",
    desc: "Being modernized",
    color: "hsl(var(--primary))",
  },
  {
    icon: Users,
    label: "3,000+",
    desc: "Vendor families",
    color: "hsl(var(--accent))",
  },
  {
    icon: TrendingUp,
    label: "₱8M+",
    desc: "Daily transactions",
    color: "hsl(35 75% 52%)",
  },
  {
    icon: Leaf,
    label: "100+",
    desc: "Years of heritage",
    color: "hsl(var(--secondary))",
  },
];

const Index = () => {
  const markets = getAllMarkets();

  return (
    <>
      <Header />
      <main>
        {/* ── Hero Section ─────────────────────────────────── */}
        <section
          className="relative min-h-[90vh] flex items-center justify-center overflow-hidden"
          aria-label="Hero — Iloilo City Public Market Modernization"
        >
          {/* BG Image */}
          <img
            src={heroBanner}
            alt="Aerial view of Iloilo City Public Market at golden hour"
            className="absolute inset-0 w-full h-full object-cover"
          />
          {/* Overlay */}
          <div
            className="absolute inset-0"
            style={{ background: "var(--gradient-hero)" }}
          />

          {/* Content — F-pattern: headline top-left attention */}
          <div className="relative z-10 max-w-5xl mx-auto px-6 py-20 text-center">
            {/* Eyebrow */}
            <div className="flex justify-center mb-6 animate-fade-in">
              <span
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full font-body text-xs font-semibold uppercase tracking-widest"
                style={{
                  background: "hsl(var(--primary) / 0.25)",
                  border: "1px solid hsl(var(--primary) / 0.5)",
                  color: "hsl(var(--primary-foreground))",
                }}
              >
                <span
                  className="w-1.5 h-1.5 rounded-full animate-pulse"
                  style={{ background: "hsl(var(--primary))" }}
                />
                City Government of Iloilo — 2025 Initiative
              </span>
            </div>

            {/* Headline */}
            <h1
              className="font-display font-black text-4xl sm:text-5xl lg:text-7xl leading-tight mb-6 animate-fade-up"
              style={{ color: "hsl(38 35% 97%)" }}
            >
              Iloilo City
              <br />
              <span style={{ color: "hsl(var(--primary))" }}>Public Market</span>
              <br />
              Modernization
            </h1>

            {/* Sub */}
            <p
              className="font-body text-lg sm:text-xl max-w-2xl mx-auto mb-8 leading-relaxed animate-fade-up delay-100"
              style={{ color: "hsl(38 25% 82%)" }}
            >
              Honoring heritage. Embracing the future. Four landmark markets transformed
              for a new generation of Ilonggos — while preserving the soul that makes
              each one irreplaceable.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3 justify-center animate-fade-up delay-200">
              <a
                href="#markets"
                className="flex items-center gap-2 px-6 py-3 rounded-xl font-body font-semibold text-base transition-all duration-200"
                style={{
                  background: "hsl(var(--primary))",
                  color: "hsl(var(--primary-foreground))",
                  boxShadow: "var(--shadow-terracotta)",
                }}
              >
                Explore Markets
                <ArrowDown size={16} />
              </a>
              <a
                href="/about"
                className="flex items-center gap-2 px-6 py-3 rounded-xl font-body font-semibold text-base transition-all duration-200"
                style={{
                  background: "hsl(38 35% 98% / 0.1)",
                  border: "1px solid hsl(38 35% 98% / 0.3)",
                  color: "hsl(38 35% 97%)",
                }}
              >
                About the Project
              </a>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
            <span className="font-body text-xs tracking-widest uppercase" style={{ color: "hsl(38 25% 70%)" }}>
              Scroll
            </span>
            <div
              className="w-px h-8"
              style={{ background: "linear-gradient(to bottom, hsl(var(--primary)), transparent)" }}
            />
          </div>
        </section>

        {/* ── Stats Bar ────────────────────────────────────── */}
        <section
          className="py-8"
          style={{
            background: "hsl(var(--foreground))",
          }}
          aria-label="Project at a glance"
        >
          <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6">
            {highlights.map(({ icon: Icon, label, desc, color }) => (
              <div key={label} className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ background: `${color}20`, border: `1px solid ${color}35` }}
                >
                  <Icon size={18} style={{ color }} />
                </div>
                <div>
                  <div
                    className="font-display font-bold text-lg leading-none"
                    style={{ color: "hsl(38 35% 95%)" }}
                  >
                    {label}
                  </div>
                  <div className="font-body text-xs" style={{ color: "hsl(38 15% 60%)" }}>
                    {desc}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Intro Section ────────────────────────────────── */}
        <section className="py-20 px-6" style={{ background: "var(--gradient-section)" }}>
          <div className="max-w-4xl mx-auto text-center">
            <div className="ornament mb-2">
              <span
                className="font-body text-xs tracking-widest uppercase font-semibold"
                style={{ color: "hsl(var(--primary))" }}
              >
                The Vision
              </span>
            </div>
            <h2
              className="font-display font-bold text-3xl sm:text-4xl mb-6"
              style={{ color: "hsl(var(--foreground))" }}
            >
              Heritage-Led, Future-Ready
            </h2>
            <p
              className="font-body text-base leading-relaxed mb-4"
              style={{ color: "hsl(var(--muted-foreground))" }}
            >
              The Iloilo City Public Market Modernization Project is a landmark urban
              development initiative that transforms four of the city's most significant
              public markets. Each market receives a tailored approach — balancing the
              preservation of historical identity with world-class infrastructure,
              sanitation, and accessibility standards.
            </p>
            <p
              className="font-body text-base leading-relaxed"
              style={{ color: "hsl(var(--muted-foreground))" }}
            >
              From the wholesale power of Terminal Market to the Art Deco grandeur of
              Tienda Mayor, the district soul of Jaro, and the gastronomic legacy of La
              Paz — every Ilonggo finds their market here.
            </p>
          </div>
        </section>

        {/* ── Market Cards Section ─────────────────────────── */}
        <section
          id="markets"
          className="py-20 px-6"
          aria-label="Iloilo City's four modernized markets"
        >
          <div className="max-w-7xl mx-auto">
            {/* Section header — F-pattern start */}
            <div className="mb-12">
              <div className="ornament mb-2">
                <span
                  className="font-body text-xs tracking-widest uppercase font-semibold"
                  style={{ color: "hsl(var(--primary))" }}
                >
                  The Four Markets
                </span>
              </div>
              <h2
                className="font-display font-bold text-3xl sm:text-4xl mb-3 text-center"
                style={{ color: "hsl(var(--foreground))" }}
              >
                Explore Each Market
              </h2>
              <p
                className="font-body text-base text-center max-w-xl mx-auto"
                style={{ color: "hsl(var(--muted-foreground))" }}
              >
                Discover the unique character, heritage, and modernization plans for each
                of Iloilo City's landmark public markets.
              </p>
            </div>

            {/* Cards grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
              {markets.map((market, i) => (
                <MarketCard key={market.id} market={market} index={i} />
              ))}
            </div>
          </div>
        </section>

        {/* ── Heritage Values Banner ───────────────────────── */}
        <section
          className="py-16 px-6"
          style={{
            background: "hsl(var(--foreground))",
          }}
          aria-label="Heritage values"
        >
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              {[
                {
                  icon: "🏛️",
                  title: "Heritage Preserved",
                  desc: "Every modernization plan respects and celebrates the unique historical identity of each market.",
                  color: "hsl(var(--primary))",
                },
                {
                  icon: "🌿",
                  title: "Community First",
                  desc: "Vendor livelihoods, community accessibility, and public health are at the center of every decision.",
                  color: "hsl(var(--accent))",
                },
                {
                  icon: "⚡",
                  title: "Future Ready",
                  desc: "Smart infrastructure, cashless systems, and sustainable design for the next 100 years.",
                  color: "hsl(35 75% 52%)",
                },
              ].map(({ icon, title, desc, color }) => (
                <div key={title} className="flex flex-col items-center gap-3">
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl"
                    style={{
                      background: `${color}20`,
                      border: `1px solid ${color}35`,
                    }}
                  >
                    {icon}
                  </div>
                  <h3
                    className="font-display font-semibold text-lg"
                    style={{ color: "hsl(38 35% 92%)" }}
                  >
                    {title}
                  </h3>
                  <p className="font-body text-sm leading-relaxed" style={{ color: "hsl(38 15% 60%)" }}>
                    {desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Index;
