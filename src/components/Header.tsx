import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, MapPin } from "lucide-react";
import { marketsData } from "@/data/markets";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { label: "Home", href: "/" },
    ...marketsData.map((m) => ({ label: m.name, href: `/${m.slug}` })),
    { label: "About", href: "/about" },
  ];

  const isActive = (href: string) =>
    location.pathname === href ||
    (href !== "/" && location.pathname.startsWith(href));

  return (
    <header
      className="sticky top-0 z-50 w-full"
      style={{
        background: "hsl(var(--foreground))",
        boxShadow: "0 2px 20px hsl(20 20% 5% / 0.4)",
      }}
    >
      {/* Top bar */}
      <div
        className="border-b py-1.5 px-4 flex items-center justify-between text-xs font-body"
        style={{
          borderColor: "hsl(var(--primary) / 0.3)",
          background: "hsl(var(--primary) / 0.15)",
        }}
      >
        <span className="flex items-center gap-1.5" style={{ color: "hsl(var(--primary-light))" }}>
          <MapPin size={11} />
          Iloilo City, Western Visayas, Philippines
        </span>
        <span style={{ color: "hsl(38 35% 70%)" }}>
          City Government of Iloilo — Market Modernization Program
        </span>
      </div>

      {/* Main nav */}
      <div className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <div
            className="w-10 h-10 rounded-lg flex items-center justify-center text-lg font-display font-bold"
            style={{
              background: "var(--gradient-hero)",
              color: "hsl(var(--primary-foreground))",
              boxShadow: "var(--shadow-terracotta)",
            }}
          >
            IM
          </div>
          <div>
            <div
              className="font-display font-bold text-base leading-tight"
              style={{ color: "hsl(var(--primary))" }}
            >
              Iloilo Markets
            </div>
            <div
              className="font-body text-xs leading-tight"
              style={{ color: "hsl(38 35% 65%)" }}
            >
              Modernization Project
            </div>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className="px-3 py-2 rounded-md text-sm font-body font-medium transition-all duration-200"
              style={{
                color: isActive(link.href)
                  ? "hsl(var(--primary))"
                  : "hsl(38 35% 75%)",
                background: isActive(link.href)
                  ? "hsl(var(--primary) / 0.15)"
                  : "transparent",
              }}
              onMouseEnter={(e) => {
                if (!isActive(link.href)) {
                  (e.target as HTMLElement).style.color = "hsl(var(--primary-light))";
                  (e.target as HTMLElement).style.background =
                    "hsl(var(--primary) / 0.08)";
                }
              }}
              onMouseLeave={(e) => {
                if (!isActive(link.href)) {
                  (e.target as HTMLElement).style.color = "hsl(38 35% 75%)";
                  (e.target as HTMLElement).style.background = "transparent";
                }
              }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA + Mobile toggle */}
        <div className="flex items-center gap-3">
          <a
            href="#markets"
            className="hidden lg:inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-body font-medium transition-all duration-200"
            style={{
              background: "hsl(var(--primary))",
              color: "hsl(var(--primary-foreground))",
              boxShadow: "var(--shadow-terracotta)",
            }}
          >
            Explore Markets
          </a>
          <button
            className="lg:hidden p-2 rounded-md"
            style={{ color: "hsl(38 35% 80%)" }}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <nav
          className="lg:hidden border-t px-6 py-4 flex flex-col gap-1"
          style={{
            borderColor: "hsl(var(--primary) / 0.2)",
            background: "hsl(20 20% 10%)",
          }}
          aria-label="Mobile navigation"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              onClick={() => setMenuOpen(false)}
              className="px-4 py-3 rounded-lg text-sm font-body font-medium transition-all"
              style={{
                color: isActive(link.href)
                  ? "hsl(var(--primary))"
                  : "hsl(38 35% 75%)",
                background: isActive(link.href)
                  ? "hsl(var(--primary) / 0.12)"
                  : "transparent",
              }}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Header;
