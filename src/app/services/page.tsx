import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services | Wild Nectar Landscaping",
  description:
    "Explore Wild Nectar Landscaping's ecological services including landscape design, native plant installation, habitat restoration, land management, and seasonal offerings in the Greater Portland, Maine area.",
};

const services = [
  {
    title: "Landscape Design & Consultation",
    description:
      "Every great landscape starts with a thoughtful plan. We begin with a thorough site assessment, evaluating your soil, sunlight, water patterns, and existing ecology. From there, we create custom ecological garden designs featuring native plant selections tailored to your property and goals. You'll receive detailed design drawings and a clear planting plan so you know exactly what to expect.",
    highlights: [
      "Comprehensive site assessment",
      "Custom ecological garden designs",
      "Native plant selection for your conditions",
      "Detailed design drawings and planning",
    ],
    image: "/images/gallery/RainGardenGraphic_v2.jpg.avif",
    imageAlt: "Ecological garden design plan by Wild Nectar Landscaping",
  },
  {
    title: "Garden Installation",
    description:
      "We bring your design to life with expert installation. From preparing garden beds and building raised beds to installing pollinator gardens and rain gardens, we handle every detail with care. Our installations are built to thrive from day one, using best practices for soil preparation and plant placement.",
    highlights: [
      "Garden bed preparation and soil amendment",
      "Native plant installation",
      "Pollinator and rain garden construction",
      "Raised bed design and building",
    ],
    image: "/images/gallery/Raised Bed Construction.jpg.avif",
    imageAlt: "Raised bed garden installation by Wild Nectar Landscaping",
  },
  {
    title: "Land Management & Maintenance",
    description:
      "A thriving landscape needs ongoing ecological care. Our land management services keep your gardens healthy and balanced season after season. We provide regular weeding, trimming, soil health management, and seasonal maintenance -- all guided by ecological principles that strengthen your landscape over time.",
    highlights: [
      "Ongoing ecological garden care",
      "Weeding and trimming",
      "Seasonal maintenance programs",
      "Soil health monitoring and management",
    ],
    image: "/images/gallery/523c7c_4bde8fea1b24499a85ff8da15b01a3c3~mv2.jpg.avif",
    imageAlt: "Maintained native landscape in Maine",
  },
  {
    title: "Habitat Restoration",
    description:
      "We help bring your land back to ecological health. Our habitat restoration work focuses on removing invasive species, re-establishing native plant communities, and creating the conditions for natural ecosystems to recover and thrive. Whether it's a backyard or a larger property, we restore the balance that native habitats depend on.",
    highlights: [
      "Invasive species removal",
      "Native plant community establishment",
      "Ecological habitat recovery",
      "Biodiversity enhancement",
    ],
    image: "/images/gallery/Milkweed_JPG.jpg.avif",
    imageAlt: "Native milkweed habitat restoration by Wild Nectar Landscaping",
  },
  {
    title: "Seasonal Services",
    description:
      "Celebrate every season with Wild Nectar. We offer handcrafted holiday wreaths made with locally sourced natural materials, custom seasonal planters, thorough fall bed preparation, and comprehensive spring cleanups to get your landscape ready for the growing season ahead.",
    highlights: [
      "Handcrafted holiday wreaths",
      "Custom seasonal planters",
      "Fall bed preparation and winterizing",
      "Spring cleanup and bed refresh",
    ],
    image: "/images/gallery/Holiday Wreath_edited.jpg.avif",
    imageAlt: "Handcrafted holiday wreath by Wild Nectar Landscaping",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center">
        <Image
          src="/images/gallery/Purple Echinacea 2.jpg.avif"
          alt="Purple echinacea in a native Maine garden"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Our Services
          </h1>
          <p className="text-lg md:text-xl text-cream/90 max-w-2xl mx-auto leading-relaxed">
            Ecological landscaping services rooted in native plant expertise and
            a deep respect for the land.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20 md:py-28 bg-cream">
        <div className="max-w-6xl mx-auto px-6">
          <div className="space-y-20 md:space-y-28">
            {services.map((service, index) => (
              <div
                key={service.title}
                className={`grid md:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "md:[direction:rtl]" : ""
                }`}
              >
                {/* Image */}
                <div
                  className={`relative h-[350px] md:h-[450px] rounded-2xl overflow-hidden ${
                    index % 2 === 1 ? "md:[direction:ltr]" : ""
                  }`}
                >
                  <Image
                    src={service.image}
                    alt={service.imageAlt}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Content */}
                <div className={index % 2 === 1 ? "md:[direction:ltr]" : ""}>
                  <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">
                    {service.title}
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-3 mb-8">
                    {service.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="flex items-start gap-3 text-gray-600"
                      >
                        <span className="text-secondary mt-1 font-bold">
                          &#10003;
                        </span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/book-online"
                    className="inline-block bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-4 rounded-lg transition-colors"
                  >
                    Book This Service
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 md:py-28 bg-primary">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Not Sure Where to Start?
          </h2>
          <p className="text-cream/80 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
            Every landscape is unique. Book a consultation and we&apos;ll help
            you figure out the best path forward for your property, your goals,
            and your budget.
          </p>
          <Link
            href="/book-online"
            className="inline-block bg-secondary hover:bg-secondary/90 text-white font-semibold px-10 py-4 rounded-lg text-lg transition-colors"
          >
            Book a Consultation
          </Link>
        </div>
      </section>
    </>
  );
}
