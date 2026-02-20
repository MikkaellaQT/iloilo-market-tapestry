import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import type { MarketData } from "@/data/markets";

interface MarketCardProps {
  market: MarketData;
  index?: number;
}

const MarketCard = ({ market, index = 0 }: MarketCardProps) => {
  const accentVars: Record<string, string> = {
    terracotta: "var(--primary)",
    gold: "210 60% 55%",
    leaf: "var(--accent)",
    steel: "var(--secondary)",
  };

  const accentHsl = market.accentColor === "terracotta"
    ? "hsl(var(--primary))"
    : market.accentColor === "leaf"
    ? "hsl(var(--accent))"
    : market.accentColor === "steel"
    ? "hsl(var(--secondary))"
    : "hsl(35 75% 52%)"; // gold

  const delay = index * 100;

  return (
    <article
      className="group relative flex flex-col overflow-hidden rounded-2xl"
      style={{
        background: "hsl(var(--card))",
        border: "1px solid hsl(var(--border))",
        boxShadow: "var(--shadow-md)",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        animationDelay: `${delay}ms`,
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.transform = "translateY(-6px)";
        (e.currentTarget as HTMLElement).style.boxShadow = "0 16px 48px hsl(20 20% 12% / 0.2)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
        (e.currentTarget as HTMLElement).style.boxShadow = "var(--shadow-md)";
      }}
    >
      {/* Image */}
      <div className="relative h-52 overflow-hidden">
        <img
          src={market.cardImagePath}
          alt={`${market.name} — ${market.focus}`}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        {/* Gradient overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, transparent 40%, hsl(20 20% 8% / 0.7) 100%)",
          }}
        />
        {/* Badge */}
        <div className="absolute top-3 left-3">
          <span
            className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-body font-semibold tracking-wide uppercase"
            style={{
              background: `${accentHsl}`,
              color: "hsl(0 0% 100%)",
              boxShadow: "0 2px 8px hsl(0 0% 0% / 0.2)",
            }}
          >
            {market.badge}
          </span>
        </div>
        {/* Established */}
        <div className="absolute bottom-3 right-3">
          <span
            className="font-display italic text-xs"
            style={{ color: "hsl(38 35% 85%)" }}
          >
            Est. {market.established}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-6">
        {/* District */}
        <p
          className="font-body text-xs tracking-widest uppercase mb-1 font-medium"
          style={{ color: accentHsl }}
        >
          {market.district}
        </p>

        {/* Name */}
        <h2
          className="font-display font-bold text-xl leading-tight mb-0.5"
          style={{ color: "hsl(var(--foreground))" }}
        >
          {market.name}
        </h2>
        <p
          className="font-body text-sm mb-2"
          style={{ color: "hsl(var(--muted-foreground))" }}
        >
          {market.subtitle}
        </p>

        {/* Focus */}
        <div
          className="text-xs font-body font-medium px-3 py-1.5 rounded-lg mb-3 inline-block self-start"
          style={{
            background: `${accentHsl}15`,
            color: accentHsl,
            border: `1px solid ${accentHsl}30`,
          }}
        >
          {market.focus}
        </div>

        {/* Tagline */}
        <p
          className="font-body text-sm leading-relaxed flex-1 mb-4"
          style={{ color: "hsl(var(--muted-foreground))" }}
        >
          {market.tagline}
        </p>

        {/* Stats preview */}
        <div className="grid grid-cols-2 gap-2 mb-4">
          {market.stats.slice(0, 2).map((stat) => (
            <div
              key={stat.label}
              className="rounded-lg p-3 text-center"
              style={{
                background: "hsl(var(--muted))",
                border: "1px solid hsl(var(--border))",
              }}
            >
              <div
                className="font-display font-bold text-lg leading-none"
                style={{ color: accentHsl }}
              >
                {stat.value}
              </div>
              <div
                className="font-body text-xs mt-0.5 leading-tight"
                style={{ color: "hsl(var(--muted-foreground))" }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <Link
          to={`/${market.slug}`}
          className="flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl font-body font-semibold text-sm transition-all duration-200"
          style={{
            background: accentHsl,
            color: "hsl(0 0% 100%)",
            boxShadow: `0 4px 15px ${accentHsl.replace("hsl(", "hsl(").replace(")", " / 0.3)")}`,
          }}
          aria-label={`Explore ${market.name} details`}
        >
          Explore Market
          <ArrowRight size={15} />
        </Link>
      </div>
    </article>
  );
};

export default MarketCard;
