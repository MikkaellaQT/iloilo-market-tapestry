import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <>
      <Header />
      <main
        className="flex min-h-[70vh] items-center justify-center px-6"
        style={{ background: "var(--gradient-section)" }}
      >
        <div className="text-center">
          <div
            className="font-display font-black text-8xl mb-4"
            style={{ color: "hsl(var(--primary) / 0.2)" }}
          >
            404
          </div>
          <h1
            className="font-display font-bold text-3xl mb-3"
            style={{ color: "hsl(var(--foreground))" }}
          >
            Page Not Found
          </h1>
          <p
            className="font-body text-base mb-8"
            style={{ color: "hsl(var(--muted-foreground))" }}
          >
            This market stall seems to have moved. Let's get you back to the main market.
          </p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-body font-semibold text-sm"
            style={{
              background: "hsl(var(--primary))",
              color: "hsl(var(--primary-foreground))",
              boxShadow: "var(--shadow-terracotta)",
            }}
          >
            Return to Home
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default NotFound;
