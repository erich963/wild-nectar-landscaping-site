import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | Wild Nectar Landscaping",
  description:
    "Browse our portfolio of ecological landscaping projects in Maine. Native plant gardens, habitat restoration, pollinator gardens, and sustainable landscape designs by Wild Nectar Landscaping.",
};

const projects = [
  {
    src: "/images/projects/523c7c_19ca44c6047a4102b9d0a183e3383534~mv2.jpg.avif",
    title: "Native Pollinator Garden",
    description:
      "A vibrant garden designed to attract and sustain native pollinators with carefully selected wildflowers and shrubs.",
  },
  {
    src: "/images/projects/523c7c_1a77f819c23648f1925cf44359a227d9~mv2.jpg.avif",
    title: "Ecological Garden Bed",
    description:
      "A layered planting bed featuring native perennials, grasses, and groundcovers for year-round interest.",
  },
  {
    src: "/images/projects/523c7c_46f5dfe7bf5641f9b538f5c648a0e1c5~mv2.jpg.avif",
    title: "Habitat Restoration Project",
    description:
      "Restoring degraded land with native species to rebuild biodiversity and ecological function.",
  },
  {
    src: "/images/projects/523c7c_5068896fe74948cb837f9119c62787d4~mv2.jpg.avif",
    title: "Woodland Edge Garden",
    description:
      "A naturalistic planting along a forest edge, blending cultivated beauty with wild habitat.",
  },
  {
    src: "/images/projects/523c7c_837fa7686bab4e4ebfa0bbd7acc6faea~mv2.jpg.avif",
    title: "Rain Garden Installation",
    description:
      "A functional rain garden that manages stormwater runoff while providing habitat for native wildlife.",
  },
  {
    src: "/images/projects/523c7c_b2302c632cf14322bcfc2473a6a5020f~mv2.jpg.avif",
    title: "Native Meadow Conversion",
    description:
      "Transforming a traditional lawn into a low-maintenance native meadow teeming with life.",
  },
  {
    src: "/images/projects/523c7c_ccd650c22751405a96ff0ed8c318d6ce~mv2.jpg.avif",
    title: "Residential Landscape Design",
    description:
      "A full-property ecological landscape plan bringing beauty, function, and biodiversity to a Maine home.",
  },
];

export default function ProjectsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 bg-primary">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our Projects
          </h1>
          <p className="text-lg text-cream/80 max-w-2xl mx-auto leading-relaxed">
            Every landscape tells a story. Explore our portfolio of ecological
            gardens, habitat restorations, and native plantings across Maine.
          </p>
        </div>
      </section>

      {/* Project Grid */}
      <section className="py-20 md:py-28 bg-cream">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={project.src}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-primary mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {project.description}
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
            Ready to Start Your Project?
          </h2>
          <p className="text-cream/80 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
            Let&apos;s create a landscape that&apos;s uniquely yours -- rooted in
            native plants and designed to thrive. Book a consultation to get
            started.
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
