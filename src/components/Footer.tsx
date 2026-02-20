import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Facebook, ExternalLink } from "lucide-react";
import { marketsData } from "@/data/markets";

const Footer = () => {
  return (
    <footer
      className="mt-0"
      style={{ background: "var(--gradient-footer)" }}
      role="contentinfo"
    >
      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand column */}
        <div className="lg:col-span-1">
          <div className="flex items-center gap-3 mb-4">
            <div
              className="w-10 h-10 rounded-lg flex items-center justify-center text-lg font-display font-bold"
              style={{
                background: "hsl(var(--primary) / 0.25)",
                border: "1px solid hsl(var(--primary) / 0.4)",
                color: "hsl(var(--primary))",
              }}
            >
              IM
            </div>
            <div>
              <div
                className="font-display font-bold text-base"
                style={{ color: "hsl(var(--primary))" }}
              >
                Iloilo Markets
              </div>
              <div className="font-body text-xs" style={{ color: "hsl(38 20% 60%)" }}>
                Modernization Project
              </div>
            </div>
          </div>
          <p className="font-body text-sm leading-relaxed mb-4" style={{ color: "hsl(38 20% 65%)" }}>
            Preserving heritage, embracing modernity. The City Government of Iloilo's commitment to
            world-class public markets for every Ilonggo.
          </p>
          <div className="flex items-center gap-2 mb-2">
            <MapPin size={13} style={{ color: "hsl(var(--primary))" }} />
            <span className="font-body text-xs" style={{ color: "hsl(38 20% 60%)" }}>
              Iloilo City Hall, Gen. Luna St.
            </span>
          </div>
          <div className="flex items-center gap-2 mb-2">
            <Phone size={13} style={{ color: "hsl(var(--primary))" }} />
            <span className="font-body text-xs" style={{ color: "hsl(38 20% 60%)" }}>
              (033) 336-0107
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Mail size={13} style={{ color: "hsl(var(--primary))" }} />
            <span className="font-body text-xs" style={{ color: "hsl(38 20% 60%)" }}>
              markets@iloilocity.gov.ph
            </span>
          </div>
        </div>

        {/* Markets column */}
        <div>
          <h3
            className="font-display font-semibold text-base mb-4"
            style={{ color: "hsl(38 35% 90%)" }}
          >
            Our Markets
          </h3>
          <ul className="space-y-2">
            {marketsData.map((market) => (
              <li key={market.id}>
                <Link
                  to={`/${market.slug}`}
                  className="flex items-center gap-2 font-body text-sm transition-colors duration-150 group"
                  style={{ color: "hsl(38 20% 65%)" }}
                  onMouseEnter={(e) =>
                    ((e.target as HTMLElement).style.color = "hsl(var(--primary))")
                  }
                  onMouseLeave={(e) =>
                    ((e.target as HTMLElement).style.color = "hsl(38 20% 65%)")
                  }
                >
                  <span
                    className="w-1 h-1 rounded-full inline-block"
                    style={{ background: "hsl(var(--primary) / 0.6)" }}
                  />
                  {market.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Project goals column */}
        <div>
          <h3
            className="font-display font-semibold text-base mb-4"
            style={{ color: "hsl(38 35% 90%)" }}
          >
            Project Goals
          </h3>
          <ul className="space-y-2">
            {[
              "Heritage Conservation",
              "Modern Infrastructure",
              "Food Safety Standards",
              "Vendor Livelihood Support",
              "Accessibility for All",
              "Sustainable Design",
              "Tourism Development",
            ].map((goal) => (
              <li
                key={goal}
                className="flex items-center gap-2 font-body text-sm"
                style={{ color: "hsl(38 20% 65%)" }}
              >
                <span
                  className="w-1 h-1 rounded-full inline-block"
                  style={{ background: "hsl(var(--accent) / 0.7)" }}
                />
                {goal}
              </li>
            ))}
          </ul>
        </div>

        {/* Social / Quick links */}
        <div>
          <h3
            className="font-display font-semibold text-base mb-4"
            style={{ color: "hsl(38 35% 90%)" }}
          >
            Connect
          </h3>
          <div className="flex gap-3 mb-6">
            <a
              href="https://www.facebook.com/IloiloCityGov"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow City Government of Iloilo on Facebook"
              className="w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-200"
              style={{
                background: "hsl(var(--primary) / 0.15)",
                border: "1px solid hsl(var(--primary) / 0.25)",
                color: "hsl(var(--primary))",
              }}
            >
              <Facebook size={16} />
            </a>
            <a
              href="https://www.iloilocity.gov.ph"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Iloilo City Government website"
              className="w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-200"
              style={{
                background: "hsl(var(--accent) / 0.15)",
                border: "1px solid hsl(var(--accent) / 0.25)",
                color: "hsl(var(--accent))",
              }}
            >
              <ExternalLink size={16} />
            </a>
          </div>
          <div
            className="rounded-xl p-4"
            style={{
              background: "hsl(var(--primary) / 0.1)",
              border: "1px solid hsl(var(--primary) / 0.2)",
            }}
          >
            <p
              className="font-display italic text-sm leading-relaxed"
              style={{ color: "hsl(var(--primary-light))" }}
            >
              "Ang Iloilo ay daan sa kalambo nga bukas."
            </p>
            <p className="font-body text-xs mt-1" style={{ color: "hsl(38 20% 55%)" }}>
              Iloilo is a gateway to a prosperous future.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        className="border-t px-6 py-4"
        style={{ borderColor: "hsl(38 10% 20%)" }}
      >
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="font-body text-xs" style={{ color: "hsl(38 10% 45%)" }}>
            © 2025 City Government of Iloilo — Public Market Modernization Project. All rights reserved.
          </p>
          <p className="font-body text-xs" style={{ color: "hsl(38 10% 40%)" }}>
            Iloilo City, Western Visayas, Philippines
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
