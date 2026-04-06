import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resources | Wild Nectar Landscaping",
  description:
    "Learn about ecological landscaping, native plants, soil health, pollinator gardens, and sustainable landscape care in Maine. Educational resources from Wild Nectar Landscaping.",
};

const resources = [
  {
    title: "Why Native Plants Matter",
    description:
      "Native plants are the foundation of healthy ecosystems. They have evolved alongside local wildlife for thousands of years, providing essential food and habitat for pollinators, birds, and beneficial insects. Unlike non-native ornamentals, native species require less water, fewer chemicals, and support biodiversity right in your backyard.",
    image:
      "/images/projects/523c7c_19ca44c6047a4102b9d0a183e3383534~mv2.jpg.avif",
    imageAlt: "Native wildflowers in a Maine garden",
  },
  {
    title: "Building Healthy Soil",
    description:
      "Healthy soil is alive -- teeming with billions of microorganisms that form the foundation of plant health. By composting, mulching with natural materials, avoiding synthetic chemicals, and minimizing soil disturbance, you can nurture a thriving soil ecosystem that feeds your plants from the ground up.",
    image:
      "/images/projects/523c7c_46f5dfe7bf5641f9b538f5c648a0e1c5~mv2.jpg.avif",
    imageAlt: "Rich garden soil with organic matter",
  },
  {
    title: "Creating a Pollinator Garden",
    description:
      "Pollinator populations are in decline, but you can make a difference by creating habitat in your own yard. A successful pollinator garden includes a diversity of native flowering plants that bloom from early spring through late fall, providing continuous nectar and pollen sources for bees, butterflies, and hummingbirds.",
    image:
      "/images/projects/523c7c_5068896fe74948cb837f9119c62787d4~mv2.jpg.avif",
    imageAlt: "Pollinator-friendly garden with native flowers",
  },
  {
    title: "Rain Gardens 101",
    description:
      "Rain gardens are shallow, planted depressions designed to capture and filter stormwater runoff from roofs, driveways, and lawns. They reduce erosion, recharge groundwater, and filter pollutants naturally. Planted with native species that tolerate both wet and dry conditions, rain gardens are beautiful, functional, and ecologically valuable.",
    image:
      "/images/projects/523c7c_837fa7686bab4e4ebfa0bbd7acc6faea~mv2.jpg.avif",
    imageAlt: "Rain garden with native plantings",
  },
  {
    title: "Seasonal Landscape Care in Maine",
    description:
      "Maine's distinct seasons each bring unique opportunities for ecological land care. Spring is for assessing winter damage and early plantings. Summer is for mindful watering and letting beneficial insects thrive. Fall is ideal for planting native trees and shrubs. Winter is for planning next year's projects and leaving seed heads for wildlife.",
    image:
      "/images/projects/523c7c_b2302c632cf14322bcfc2473a6a5020f~mv2.jpg.avif",
    imageAlt: "Seasonal Maine landscape",
  },
];

export default function ResourcesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 bg-primary">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Resources &amp; Education
          </h1>
          <p className="text-lg text-cream/80 max-w-2xl mx-auto leading-relaxed">
            Understanding ecological practices helps us all become better
            stewards of the land. Explore these resources to learn more about
            native plants, soil health, and sustainable landscaping.
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-sage">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">
            Learn, Grow, Restore
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Ecological landscaping is about working with nature rather than
            against it. Whether you&apos;re a seasoned gardener or just getting
            started, these resources will help you make informed choices for your
            landscape, your local ecosystem, and the planet.
          </p>
        </div>
      </section>

      {/* Resource Cards */}
      <section className="py-20 md:py-28 bg-cream">
        <div className="max-w-6xl mx-auto px-6">
          <div className="space-y-12">
            {resources.map((resource, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div className="relative w-full md:w-2/5 h-64 md:h-auto min-h-[280px]">
                  <Image
                    src={resource.image}
                    alt={resource.imageAlt}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="w-full md:w-3/5 p-8 md:p-10 flex flex-col justify-center">
                  <h3 className="text-2xl font-bold text-primary mb-4">
                    {resource.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {resource.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-primary">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Want Personalized Guidance?
          </h2>
          <p className="text-cream/80 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
            Every landscape is unique. Contact us to learn how ecological
            practices can transform your specific property into a thriving
            native habitat.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-block bg-secondary hover:bg-secondary/90 text-white font-semibold px-10 py-4 rounded-lg text-lg transition-colors"
            >
              Contact Us
            </Link>
            <Link
              href="/book-online"
              className="inline-block bg-white/10 hover:bg-white/20 text-white font-semibold px-10 py-4 rounded-lg text-lg transition-colors border border-white/30"
            >
              Book a Consultation
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
