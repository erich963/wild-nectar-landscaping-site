import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us | Wild Nectar Landscaping",
  description:
    "Meet Lindsy Hebert, founder of Wild Nectar Landscaping. Based in Gray and South Portland, Maine, we specialize in ecological landscaping, native plant gardens, and habitat restoration since 2021.",
};

const values = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-10 w-10 text-primary">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21c0 0-8-6-8-12a8 8 0 0 1 8-4c4 0 6 2 8 4 0 6-8 12-8 12z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21V9" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12c0-2 1.5-4 3-5" />
      </svg>
    ),
    title: "Ecological Stewardship",
    description:
      "Every landscape decision is guided by a deep respect for the ecosystems we work within. We design with nature, not against it.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-10 w-10 text-primary">
        <circle cx="12" cy="12" r="3" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 2v3M12 19v3M2 12h3M19 12h3M4.93 4.93l2.12 2.12M16.95 16.95l2.12 2.12M4.93 19.07l2.12-2.12M16.95 7.05l2.12-2.12" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 5a7 7 0 0 1 0 14" />
      </svg>
    ),
    title: "Native Plant Expertise",
    description:
      "We specialize in Maine's native flora, selecting plants that thrive in local conditions and provide critical resources for wildlife.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-10 w-10 text-primary">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.65 6.35A8 8 0 1 0 19.73 13" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 2a8 8 0 0 1 7.73 11" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M16 6l2.35.35L18.35 4" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 18l-2.35-.35.35 2.35" />
      </svg>
    ),
    title: "Sustainable Practices",
    description:
      "From soil health to water management, we use methods that regenerate rather than deplete, building landscapes that improve over time.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-10 w-10 text-primary">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 7v6" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 10h6" />
      </svg>
    ),
    title: "Community Education",
    description:
      "We believe in sharing knowledge. Through every project, we help our clients understand and connect with the ecology of their own land.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center">
        <Image
          src="/images/gallery/Northern Blazing Star.jpg.avif"
          alt="Northern Blazing Star wildflower in a native Maine landscape"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            About Wild Nectar Landscaping
          </h1>
          <p className="text-lg md:text-xl text-cream/90 max-w-2xl mx-auto leading-relaxed">
            Rooted in passion. Growing with purpose.
          </p>
        </div>
      </section>

      {/* About Lindsy */}
      <section className="py-20 md:py-28 bg-cream">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden">
              <Image
                src="/images/gallery/523c7c_ccd650c22751405a96ff0ed8c318d6ce~mv2.jpg.avif"
                alt="Lindsy Hebert, founder of Wild Nectar Landscaping"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Meet Lindsy Hebert
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Lindsy founded Wild Nectar Landscaping in February 2021 with a
                clear vision: to bring ecological integrity and natural beauty to
                every landscape she touches. Based in the Gray and South
                Portland, Maine area, she brings a rare combination of hard
                work, genuine care, and creative vision to every project.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                Her passion for native plants and ecological landscaping runs
                deep. Lindsy sees every yard, garden bed, and open space as an
                opportunity to create a thriving ecosystem -- one that supports
                pollinators, builds soil health, and brings lasting beauty to
                Maine communities.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Whether she&apos;s designing a pollinator garden, restoring a
                degraded habitat, or hand-selecting native species for a
                client&apos;s property, Lindsy approaches her work with the same
                dedication and creativity that inspired her to start Wild Nectar
                in the first place.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 md:py-28 bg-primary">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            Our Mission
          </h2>
          <p className="text-xl md:text-2xl text-cream/90 leading-relaxed italic">
            To design, install, and maintain thriving, balanced,
            low-maintenance gardens and landscapes that are ecologically
            beneficial, beautiful, and resilient.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 md:py-28 bg-sage">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-4">
            Our Values
          </h2>
          <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
            The principles that guide every garden we grow and every landscape
            we restore.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <div
                key={value.title}
                className="bg-white/80 backdrop-blur rounded-2xl p-8 text-center"
              >
                <div className="flex justify-center mb-4">{value.icon}</div>
                <h3 className="text-lg font-bold text-primary mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Landscape Image */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden">
            <Image
              src="/images/gallery/Marcia Anemone Canadensis.jpg.avif"
              alt="Anemone Canadensis native plant installation by Wild Nectar Landscaping"
              fill
              className="object-cover"
            />
          </div>
          <p className="text-center text-gray-500 mt-4 text-sm">
            A native Anemone Canadensis planting thriving in a Wild Nectar
            landscape.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-primary">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Let&apos;s Create Something Beautiful Together
          </h2>
          <p className="text-cream/80 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
            Ready to transform your outdoor space into a thriving, ecologically
            rich landscape? Book a consultation with Lindsy to get started.
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
