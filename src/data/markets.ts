// ── Data Layer: markets.ts ────────────────────────────────────────────────
// Central JSON data source for all market details.
// Mirrors the role of data.js in the 3-tier architecture specification.

export interface MarketStat {
  label: string;
  value: string;
  unit?: string;
}

export interface MarketFeature {
  icon: string;
  title: string;
  description: string;
}

export interface MarketData {
  id: string;
  slug: string;
  name: string;
  subtitle: string;
  focus: string;
  tagline: string;
  district: string;
  established: string;
  history: string;
  description: string;
  accentColor: "terracotta" | "steel" | "leaf" | "gold";
  badge: string;
  stats: MarketStat[];
  features: MarketFeature[];
  imagePath: string;
  cardImagePath: string;
  highlights: string[];
  modernizationGoals: string[];
}

// ── Market Data Records ──────────────────────────────────────────────────
export const marketsData: MarketData[] = [
  {
    id: "terminal",
    slug: "terminal-market",
    name: "Terminal Market",
    subtitle: "(Super Market)",
    focus: "Modern Wholesale Hub",
    tagline: "The Commercial Heartbeat of Iloilo",
    district: "Iloilo City Proper",
    established: "1945",
    history:
      "Originally established as the city's main transit-commercial junction, Terminal Market evolved alongside Iloilo's post-war recovery into the region's largest wholesale distribution center. Its strategic location near the city terminal made it the natural gateway for inter-island goods arriving from Panay's agricultural provinces.",
    description:
      "Terminal Market — locally known as the Super Market — serves as the primary wholesale hub for Western Visayas. The modernization project transforms it into a hygienic, climate-adaptive trading complex while preserving its vital role in Iloilo's food supply chain.",
    accentColor: "terracotta",
    badge: "Wholesale Hub",
    stats: [
      { label: "Registered Stalls", value: "1,200+", unit: "stalls" },
      { label: "Daily Transactions", value: "₱8M+", unit: "pesos" },
      { label: "Daily Foot Traffic", value: "15,000+", unit: "visitors" },
      { label: "Floor Area", value: "12,500", unit: "sqm" },
    ],
    features: [
      {
        icon: "🏭",
        title: "Cold Chain Infrastructure",
        description:
          "Modern refrigerated zones for fish, meat, and dairy products to extend shelf life and reduce spoilage.",
      },
      {
        icon: "🚛",
        title: "Logistics Bay",
        description:
          "Dedicated loading/unloading bays for wholesale trucks with improved traffic flow management.",
      },
      {
        icon: "♻️",
        title: "Waste Management System",
        description:
          "Zero-waste initiative with composting facilities and segregated collection points throughout the market.",
      },
      {
        icon: "💳",
        title: "Cashless Payment Hubs",
        description:
          "Integrated POS terminals and QR code payment stations for modern, frictionless transactions.",
      },
      {
        icon: "🔒",
        title: "24/7 Security & CCTV",
        description:
          "Comprehensive surveillance network with trained security personnel ensuring vendor and customer safety.",
      },
      {
        icon: "♿",
        title: "Universal Accessibility",
        description:
          "PWD ramps, tactile pathways, and accessible restrooms throughout the complex.",
      },
    ],
    highlights: [
      "Largest wholesale market in Western Visayas",
      "Supplies 60% of Iloilo City's fresh produce",
      "Hub for inter-island goods from Panay provinces",
      "Major employer with 3,000+ vendor families",
    ],
    modernizationGoals: [
      "Install modern cold-storage infrastructure",
      "Implement integrated market information systems",
      "Establish dedicated logistics and transport lanes",
      "Upgrade sanitation to international food safety standards",
      "Create a vendor livelihood support center",
    ],
    imagePath: "/src/assets/terminal-market.jpg",
    cardImagePath: "/src/assets/terminal-market.jpg",
  },
  {
    id: "central",
    slug: "central-market",
    name: "Central Market",
    subtitle: "(Tienda Mayor)",
    focus: "Art Deco Heritage Preservation",
    tagline: "Where History Meets Commerce",
    district: "City Proper — Downtown Core",
    established: "1917",
    history:
      "Tienda Mayor — The Great Market — was constructed during the American colonial period and stands as one of Iloilo's most prized architectural landmarks. Its Art Deco-influenced façade, with ornate cornices and arched colonnades, reflects the city's golden era as the 'Queen City of the South.' The market was the social and commercial nexus of early 20th-century Iloilo.",
    description:
      "Central Market's modernization balances rigorous heritage conservation with essential infrastructure upgrades. The project preserves all original Art Deco façade elements while introducing modern utilities, improved ventilation, fire safety systems, and reorganized vendor zones.",
    accentColor: "gold",
    badge: "Heritage Site",
    stats: [
      { label: "Years of History", value: "100+", unit: "years" },
      { label: "Registered Vendors", value: "800+", unit: "vendors" },
      { label: "Heritage Elements", value: "47", unit: "preserved" },
      { label: "Daily Visitors", value: "10,000+", unit: "visitors" },
    ],
    features: [
      {
        icon: "🏛️",
        title: "Façade Restoration",
        description:
          "Meticulous restoration of Art Deco cornices, arches, and ornamental reliefs using period-authentic materials.",
      },
      {
        icon: "🖼️",
        title: "Heritage Gallery Walk",
        description:
          "Integrated gallery corridor showcasing Iloilo's market history through archival photographs and artifacts.",
      },
      {
        icon: "💨",
        title: "Passive Ventilation Upgrade",
        description:
          "Restored clerestory windows and high-volume fans maintain air flow without compromising the original structure.",
      },
      {
        icon: "🔥",
        title: "Fire Safety Retrofit",
        description:
          "Modern sprinkler systems and fire exits installed with minimal visual impact on heritage fabric.",
      },
      {
        icon: "💡",
        title: "Heritage Lighting Design",
        description:
          "Warm LED period-style lanterns throughout public areas, respecting the building's historic ambiance.",
      },
      {
        icon: "🎨",
        title: "Artisan Vendor Zone",
        description:
          "Dedicated section for local Ilonggo crafts, weaves, and heritage products to support local artisans.",
      },
    ],
    highlights: [
      "One of Iloilo's oldest standing commercial structures",
      "Proposed UNESCO heritage conservation site",
      "Home to Ilonggo traditional crafts and textiles",
      "Art Deco architecture from the American colonial period",
    ],
    modernizationGoals: [
      "Achieve heritage conservation certification",
      "Restore all Art Deco architectural elements",
      "Install modern fire suppression systems",
      "Develop cultural tourism anchor programming",
      "Create dedicated Ilonggo artisan retail zones",
    ],
    imagePath: "/src/assets/central-market.jpg",
    cardImagePath: "/src/assets/central-market.jpg",
  },
  {
    id: "jaro",
    slug: "jaro-market",
    name: "Jaro Big Market",
    subtitle: "(Merkado sang Jaro)",
    focus: "District Culture & Accessibility",
    tagline: "The Living Market of Jaro District",
    district: "Jaro District",
    established: "1903",
    history:
      "Jaro, a former independent municipality absorbed into Iloilo City, has always maintained a distinct cultural identity. The Jaro Big Market reflects this — it is deeply embedded in the social fabric of one of Iloilo's most historic districts, home to the Jaro Cathedral Basilica and centuries of Augustinian influence. The market serves the dense residential barangays of Jaro with fresh produce, dry goods, and essential services.",
    description:
      "The Jaro Big Market modernization prioritizes community accessibility and district character. Improvements focus on universal design, expanded vendor capacity, and the creation of community gathering spaces that reinforce Jaro's unique cultural identity within the city.",
    accentColor: "leaf",
    badge: "Community Market",
    stats: [
      { label: "Barangays Served", value: "23", unit: "barangays" },
      { label: "Registered Vendors", value: "650+", unit: "vendors" },
      { label: "Daily Foot Traffic", value: "8,000+", unit: "visitors" },
      { label: "Market Area", value: "6,800", unit: "sqm" },
    ],
    features: [
      {
        icon: "♿",
        title: "Accessibility-First Design",
        description:
          "Complete PWD accessibility with ramps, tactile flooring, accessible counters, and audio wayfinding systems.",
      },
      {
        icon: "🌿",
        title: "Green Market Canopy",
        description:
          "Landscaped open-air sections with shade trees and vertical gardens creating a comfortable, healthy environment.",
      },
      {
        icon: "👶",
        title: "Family & Community Hub",
        description:
          "Dedicated family areas with child-minding facilities and community bulletin boards for local services.",
      },
      {
        icon: "🚲",
        title: "Sustainable Mobility",
        description:
          "Secure bicycle parking, e-tricycle charging stations, and pedestrian-priority access routes.",
      },
      {
        icon: "📱",
        title: "Digital Vendor Registry",
        description:
          "Online vendor registration system with digital stall maps for easy navigation and transparency.",
      },
      {
        icon: "🎪",
        title: "Cultural Event Space",
        description:
          "Flexible community plaza for Jaro district festivals, livelihood fairs, and barangay assemblies.",
      },
    ],
    highlights: [
      "Serves the densest residential area of Iloilo City",
      "Adjacent to the historic Jaro Cathedral Basilica",
      "Important cultural hub for Jaro district identity",
      "Key market for organic and locally-grown produce",
    ],
    modernizationGoals: [
      "Achieve full PWD-compliant universal accessibility",
      "Create community-centric gathering spaces",
      "Implement green infrastructure and urban farming",
      "Expand vendor capacity with organized zone planning",
      "Integrate district cultural programming",
    ],
    imagePath: "/src/assets/jaro-market.jpg",
    cardImagePath: "/src/assets/jaro-market.jpg",
  },
  {
    id: "lapaz",
    slug: "lapaz-market",
    name: "La Paz Public Market",
    subtitle: "(Batchoy Heritage Center)",
    focus: "Gastronomy & Batchoy Heritage",
    tagline: "Birthplace of the Legendary La Paz Batchoy",
    district: "La Paz District",
    established: "1938",
    history:
      "La Paz Public Market holds a singular distinction in Philippine culinary history: it is the birthplace of La Paz Batchoy, Iloilo's most iconic dish. Created in the 1930s by Federico Guillergan Sr., the original Batchoy — a rich pork broth noodle soup with internal organs, chicharon, and egg noodles — was first sold in this very market. Today, the La Paz Batchoy stalls have become a living gastronomic institution drawing food travelers from across the Philippines.",
    description:
      "The La Paz Market modernization celebrates and institutionalizes the market's world-famous culinary heritage. The project creates a dedicated Batchoy Heritage Center, food tourism infrastructure, and a gastronomic district that elevates La Paz as a major food tourism destination while improving conditions for all vendors.",
    accentColor: "leaf",
    badge: "Gastronomy Hub",
    stats: [
      { label: "Years of Batchoy", value: "85+", unit: "years" },
      { label: "Original Batchoy Stalls", value: "12", unit: "original" },
      { label: "Daily Food Tourists", value: "2,000+", unit: "visitors" },
      { label: "Registered Vendors", value: "450+", unit: "vendors" },
    ],
    features: [
      {
        icon: "🍜",
        title: "Batchoy Heritage Center",
        description:
          "A curated cultural center documenting the 85-year history of La Paz Batchoy with interactive exhibits and recipe archives.",
      },
      {
        icon: "👨‍🍳",
        title: "Culinary Demonstration Stage",
        description:
          "A purpose-built kitchen stage for live Batchoy-making demonstrations, cooking classes, and chef events.",
      },
      {
        icon: "🌐",
        title: "Food Tourism Hub",
        description:
          "Visitor information center with guided gastronomic tour packages and partnerships with local tourism agencies.",
      },
      {
        icon: "🏆",
        title: "Food Safety Certification",
        description:
          "All food stalls certified under DOH and FDA food safety standards with regular health monitoring.",
      },
      {
        icon: "📸",
        title: "Instagrammable Heritage Zones",
        description:
          "Artistically designed photo spots celebrating Ilonggo culinary heritage, attracting social media food travelers.",
      },
      {
        icon: "🌱",
        title: "Organic Produce Section",
        description:
          "Dedicated farm-to-table zone with organic herbs, indigenous vegetables, and local specialty ingredients.",
      },
    ],
    highlights: [
      "Birthplace of La Paz Batchoy — Iloilo's iconic dish",
      "Major food tourism destination for Western Visayas",
      "Home to original Batchoy recipes since the 1930s",
      "Living example of Ilonggo gastronomic heritage",
    ],
    modernizationGoals: [
      "Establish Batchoy Heritage Museum and Archive",
      "Achieve DOH-certified food safety standards",
      "Develop organized gastronomic tourism circuits",
      "Create culinary entrepreneurship support programs",
      "Position La Paz as Western Visayas' food capital",
    ],
    imagePath: "/src/assets/lapaz-market.jpg",
    cardImagePath: "/src/assets/lapaz-market.jpg",
  },
];

// ── Application Layer utility: getMarketBySlug ───────────────────────────
// Mirrors the role of app.js dynamic content loader.
export function getMarketBySlug(slug: string): MarketData | undefined {
  return marketsData.find((m) => m.slug === slug);
}

export function getAllMarkets(): MarketData[] {
  return marketsData;
}
