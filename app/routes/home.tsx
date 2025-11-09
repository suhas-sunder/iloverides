import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  const title =
    "iLoveRides | Theme Parks, Roller Coasters & Attractions Encyclopedia";
  const description =
    "Discover theme parks, roller coasters, water rides, zoos, aquariums, and attractions worldwide. Compare stats, explore maps, and plan trips with data-driven tools and calculators.";
  const url = "https://www.iloverides.com";

  return [
    { title },
    { name: "description", content: description },
    {
      name: "keywords",
      content:
        "theme parks, roller coasters, rides by speed, tallest rides, zoos, aquariums, water parks, amusement park data, ride comparisons, travel math calculators",
    },
    { name: "robots", content: "index,follow,max-image-preview:large" },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:type", content: "website" },
    { property: "og:url", content: url },
    { property: "og:image", content: `${url}/og-image.jpg` },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
    { name: "theme-color", content: "#1E3A5F" },
  ];
}

export default function Home({}: Route.ComponentProps) {
  const faqs = [
    {
      q: "What is iLoveRides?",
      a: "A data-driven encyclopedia for theme parks, roller coasters, water rides, zoos, and aquariums. Explore attractions by speed, height, park, or location.",
    },
    {
      q: "Do you review or rank rides?",
      a: "No. iLoveRides focuses on verified data such as speed, height, and manufacturer details. It is an information resource, not a review site.",
    },
    {
      q: "Which regions are covered?",
      a: "We include major parks and flagship attractions across the United States, Canada, United Kingdom, France, Japan, China, and Australia.",
    },
    {
      q: "What tools can I use?",
      a: "Explore sortable tables, compare rides side by side, view interactive maps, and calculate travel distances or times between destinations.",
    },
    {
      q: "Is the information verified?",
      a: "Attraction data is compiled from official park sources, manufacturers, and industry databases whenever available.",
    },
    {
      q: "What types of attractions does iLoveRides cover?",
      a: "iLoveRides includes theme parks, roller coasters, dark rides, water rides, drop towers, zoos, aquariums, and major attractions worldwide. Each entry focuses on verified data such as speed, height, manufacturer, and opening year.",
    },
    {
      q: "Where does the attraction data come from?",
      a: "Information is compiled from official park websites, manufacturers like Intamin, B&M, Zamperla, and Mack Rides, industry databases, and public engineering documents whenever available. Data is continuously updated.",
    },
    {
      q: "Can I compare roller coasters and rides side by side?",
      a: "Yes. iLoveRides offers comparison tools that let you compare speed, height, drop angle, track length, inversions, G-forces, and manufacturer details between multiple attractions.",
    },
    {
      q: "Do you provide ride rankings or ratings?",
      a: "No. iLoveRides is not a review or ranking site. It provides factual, engineering-based ride data without subjective rankings or personal opinions.",
    },
    {
      q: "Which countries are currently included?",
      a: "The site covers major attractions in the United States, Canada, United Kingdom, France, Germany, Japan, China, South Korea, United Arab Emirates, and Australia. New regions are added regularly.",
    },
    {
      q: "How accurate are the speed and height measurements?",
      a: "Ride stats are sourced from official park disclosures and manufacturers. If multiple values exist, iLoveRides lists the most widely accepted specification and notes any discrepancies when relevant.",
    },
    {
      q: "Does iLoveRides include opening dates and park history?",
      a: "Yes. Many attraction pages include opening years, previous names, refurbishments, relocations, and manufacturer history if available.",
    },
    {
      q: "Can I find rides by speed, height, or G-force?",
      a: "Absolutely. Visitors can browse categories such as fastest rides, tallest coasters, most inversions, and high-G attractions using the site’s sorting tools.",
    },
    {
      q: "Do you track ride closures or refurbishments?",
      a: "Major closures, refurbishments, and re-themes are included when confirmed by the park or manufacturer. Temporary or unverified rumors are not reported.",
    },
    {
      q: "Are maps or geographic tools available?",
      a: "Yes. iLoveRides features interactive maps showing ride locations, park boundaries, and nearby attractions to help travelers plan visits efficiently.",
    },
    {
      q: "Can I calculate travel time between parks?",
      a: "Yes. The Travel Math tools include driving distances, travel times, cost estimates, and multi-destination planning for theme park trips.",
    },
    {
      q: "Does iLoveRides include water parks and aquatic attractions?",
      a: "Yes. Water rides, slides, wave pools, and aquatic shows are included alongside theme park and zoo attractions, especially major or record-breaking installations.",
    },
    {
      q: "Does the site track new ride announcements and openings?",
      a: "Yes. The Events & Openings section monitors major ride announcements, opening dates, construction progress, and seasonal park events.",
    },
    {
      q: "Is iLoveRides affiliated with any theme parks?",
      a: "No. iLoveRides is an independent resource with no official partnership or endorsement from any amusement park, manufacturer, or operator.",
    },
    {
      q: "Is the site suitable for planning family trips?",
      a: "Yes. iLoveRides helps families choose attractions by type, intensity, and height requirements. Data-driven tools make it easier to plan age-appropriate and efficient park itineraries.",
    },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        name: "iLoveRides",
        url: "https://www.iloverides.com",
        description:
          "Explore global amusement parks, roller coasters, zoos, and aquariums with verified stats, comparisons, and travel tools.",
        potentialAction: {
          "@type": "SearchAction",
          target: "https://www.iloverides.com/?q={search_term_string}",
          "query-input": "required name=search_term_string",
        },
      },
      {
        "@type": "Organization",
        name: "iLoveRides",
        url: "https://www.iloverides.com",
        logo: "https://www.iloverides.com/iloverides-logo.png",
      },
      {
        "@type": "FAQPage",
        mainEntity: faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
    ],
  };

  const categories = [
    {
      t: "Parks & Resorts",
      d: "Explore top parks like Disneyland, Universal, Cedar Point, and more with stats, maps, and attractions.",
      href: "/parks",
    },
    {
      t: "Rides Database",
      d: "Search and compare roller coasters, dark rides, and thrill attractions by speed, height, or type.",
      href: "/rides",
    },
    {
      t: "Travel Calculators",
      d: "Plan trips using driving, distance, flight, and cost calculators based on real-world data.",
      href: "/travel-math",
    },
  ];

  const features = [
    {
      t: "Ride Comparisons",
      d: "Compare ride stats such as speed, height, drop angle, and duration across multiple parks.",
      href: "/compare",
    },
    {
      t: "Interactive Maps",
      d: "Visualize attractions, regions, and parks using map-based data tools.",
      href: "/maps",
    },
    {
      t: "Events & Openings",
      d: "Stay up to date on new rides, park openings, and seasonal events worldwide.",
      href: "/events",
    },
  ];

  const hubLinks = [
    { label: "Parks", href: "/parks" },
    { label: "Rides", href: "/rides" },
    { label: "Zoos", href: "/zoos" },
    { label: "Aquariums", href: "/aquariums" },
    { label: "Water Parks", href: "/water-parks" },
    { label: "Maps", href: "/maps" },
    { label: "Compare", href: "/compare" },
    { label: "Ride Calculators", href: "/ride-calculators" },
    { label: "Events", href: "/events" },
    { label: "Travel Math", href: "/travel-math" },
  ];

  return (
    <main className="bg-[#F4F6FA] text-[#111827]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* HERO */}
      <section className="bg-[#1E3A5F] text-white border-b border-[#142746]">
        <div className="mx-auto max-w-6xl px-4 pt-16 pb-14">
          <h1 className="text-5xl font-extrabold leading-tight">
            Explore the world’s most exciting rides and attractions
          </h1>
          <p className="mt-5 text-lg text-slate-200 max-w-2xl">
            Discover theme parks, coasters, and attractions by speed, height, or
            location. Compare data, plan trips, and learn how thrill engineering
            meets travel discovery.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="/rides-by-speed"
              className="rounded-xl bg-emerald-600 px-5 py-3 text-base font-semibold text-white hover:brightness-110"
            >
              Fastest rides
            </a>
            <a
              href="/rides-by-height"
              className="rounded-xl border-[2px] border-white px-5 py-3 text-base font-semibold text-white hover:bg-white/10"
            >
              Tallest rides
            </a>
            <a
              href="/compare"
              className="rounded-xl border-[2px] border-white px-5 py-3 text-base font-semibold text-white hover:bg-white/10"
            >
              Compare attractions
            </a>
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="mx-auto max-w-6xl px-4 py-14">
        <div className="grid gap-6 sm:grid-cols-3">
          {categories.map((c) => (
            <a
              key={c.t}
              href={c.href}
              className="group rounded-2xl border-[2px] border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition"
            >
              <h3 className="text-lg font-semibold text-[#1E3A5F]">{c.t}</h3>
              <p className="mt-3 text-base text-slate-700">{c.d}</p>
              <div className="mt-3 text-sm font-semibold text-emerald-600 group-hover:translate-x-0.5 transition">
                Explore →
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* FEATURES */}
      <section className="mx-auto max-w-6xl px-4 py-14">
        <h2 className="text-3xl font-bold text-[#1E3A5F]">
          What you can explore
        </h2>
        <p className="mt-3 text-base text-slate-700 max-w-3xl">
          Find attractions by speed, height, park, or thrill type. Use
          calculators and comparison tools to explore global theme parks and
          data-driven insights.
        </p>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <a
              key={f.t}
              href={f.href}
              className="rounded-2xl border-[2px] border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition"
            >
              <h3 className="text-lg font-semibold text-[#1E3A5F]">{f.t}</h3>
              <p className="mt-3 text-base text-slate-700">{f.d}</p>
            </a>
          ))}
        </div>
      </section>

      {/* CTA / HUB LINKS */}
      <section className="mx-auto max-w-6xl px-4 pb-16">
        <div className="rounded-2xl border-[2px] border-[#1E3A5F] bg-[#1E3A5F] p-8 shadow-sm text-white">
          <h2 className="text-2xl font-bold">Start your thrill exploration</h2>
          <p className="mt-3 text-base text-slate-200 max-w-2xl">
            Browse through every attraction category, from roller coasters and
            water parks to zoos, aquariums, and interactive travel tools.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            {hubLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="rounded-xl bg-emerald-600 px-4 py-2 text-base font-semibold text-white hover:brightness-110"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="mx-auto max-w-6xl px-4 pb-20">
        <h2 className="text-3xl font-bold text-[#1E3A5F] mb-6">FAQ</h2>
        <div className="divide-y divide-slate-200 rounded-2xl border-[2px] border-slate-200 bg-white shadow-sm">
          {faqs.map((f) => (
            <details key={f.q} className="group open:bg-[#F9FAFB]">
              <summary className="cursor-pointer list-none px-6 py-5 text-lg font-medium">
                {f.q}
              </summary>
              <div className="px-6 pb-5 text-base text-slate-700">{f.a}</div>
            </details>
          ))}
        </div>
      </section>
    </main>
  );
}
