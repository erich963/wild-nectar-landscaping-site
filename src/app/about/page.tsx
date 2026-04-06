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
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.115 5.19l.319 1.913A6 6 0 008.11 10.36L9.75 12l-.387.775c-.217.433-.132.956.21 1.298l1.348 1.348c.21.21.329.497.329.795v1.089c0 .426.24.815.622 1.006l.153.076c.433.217.956.132 1.298-.21l.723-.723a8.7 8.7 0 002.288-4.042 1.087 1.087 0 00-.358-1.099l-1.33-1.108c-.251-.21-.582-.299-.905-.245l-1.17.195a1.125 1.125 0 01-.98-.314l-.295-.295a1.125 1.125 0 010-1.591l.13-.132a1.125 1.125 0 011.3-.21l.603.302a.809.809 0 001.086-1.086L14.25 7.5l1.256-.837a4.5 4.5 0 001.528-1.732l.146-.292M6.115 5.19A9 9 0 1017.18 4.64M6.115 5.19A8.965 8.965 0 0112 3c1.929 0 3.716.607 5.18 1.64" />
      </svg>
    ),
    title: "Ecological Stewardship",
    description:
      "Every landscape decision is guided by a deep respect for the ecosystems we work within. We design with nature, not against it.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-10 w-10 text-primary">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
      </svg>
    ),
    title: "Native Plant Expertise",
    description:
      "We specialize in Maine's native flora, selecting plants that thrive in local conditions and provide critical resources for wildlife.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-10 w-10 text-primary">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 00-3.7-3.7 48.678 48.678 0 00-7.324 0 4.006 4.006 0 00-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3l-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 003.7 3.7 48.656 48.656 0 007.324 0 4.006 4.006 0 003.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3l-3 3" />
      </svg>
    ),
    title: "Sustainable Practices",
    description:
      "From soil health to water management, we use methods that regenerate rather than deplete, building landscapes that improve over time.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-10 w-10 text-primary">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
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
