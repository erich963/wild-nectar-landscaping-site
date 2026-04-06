import Image from "next/image";
import Link from "next/link";
import ReviewCarousel from "@/components/ReviewCarousel";

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center">
        <Image
          src="/images/gallery/523c7c_066bb941f18e4f4bb0de87597f2deb89~mv2.jpg.avif"
          alt="Native plant landscape in Maine"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Ecological Landscaping for a Thriving Maine
          </h1>
          <p className="text-lg md:text-xl text-cream/90 mb-10 max-w-2xl mx-auto leading-relaxed">
            We design beautiful, resilient landscapes rooted in native plants --
            creating gardens that nourish the land, support wildlife, and bring
            lasting beauty to your property.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/book-online"
              className="inline-block bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-4 rounded-lg text-lg transition-colors"
            >
              Book a Consultation
            </Link>
            <Link
              href="/projects"
              className="inline-block bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-lg text-lg transition-colors border border-white/30"
            >
              View Our Work
            </Link>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 md:py-28 bg-cream">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-4">
            What We Do
          </h2>
          <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
            From concept to care, we bring ecological landscaping to every stage
            of your garden.
          </p>
          <div className="grid md:grid-cols-3 gap-10">
            {/* Service 1 */}
            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow text-center">
              <div className="flex justify-center mb-6"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-12 w-12 text-primary"><path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" /></svg></div>
              <h3 className="text-xl font-bold text-primary mb-4">
                Landscape Design &amp; Planning
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Custom native plant garden designs tailored to your site, your
                soil, and Maine&apos;s unique ecology. Every plan is crafted to
                maximize beauty and biodiversity.
              </p>
              <Link
                href="/services"
                className="text-secondary font-semibold hover:text-secondary/80 transition-colors"
              >
                Learn More &rarr;
              </Link>
            </div>

            {/* Service 2 */}
            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow text-center">
              <div className="flex justify-center mb-6"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-12 w-12 text-primary"><path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085" /></svg></div>
              <h3 className="text-xl font-bold text-primary mb-4">
                Installation
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Professional planting, garden bed preparation, and hardscaping
                brought to life with care and precision. We build the foundation
                for your thriving landscape.
              </p>
              <Link
                href="/services"
                className="text-secondary font-semibold hover:text-secondary/80 transition-colors"
              >
                Learn More &rarr;
              </Link>
            </div>

            {/* Service 3 */}
            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow text-center">
              <div className="flex justify-center mb-6"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-12 w-12 text-primary"><path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" /></svg></div>
              <h3 className="text-xl font-bold text-primary mb-4">
                Land Management &amp; Maintenance
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Ongoing ecological care including soil health management,
                seasonal maintenance, and habitat stewardship to keep your
                landscape thriving year after year.
              </p>
              <Link
                href="/services"
                className="text-secondary font-semibold hover:text-secondary/80 transition-colors"
              >
                Learn More &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-4">
            Recent Installations
          </h2>
          <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
            See what ecological landscaping looks like in action.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { src: "/images/projects/523c7c_19ca44c6047a4102b9d0a183e3383534~mv2.jpg.avif", title: "Native Pollinator Garden" },
              { src: "/images/projects/523c7c_837fa7686bab4e4ebfa0bbd7acc6faea~mv2.jpg.avif", title: "Stone Walkway & Garden Beds" },
              { src: "/images/projects/523c7c_b2302c632cf14322bcfc2473a6a5020f~mv2.jpg.avif", title: "Seaside Entrance Garden" },
            ].map((project) => (
              <div key={project.title} className="group relative aspect-[4/3] rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
                <Image
                  src={project.src}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-white font-semibold text-lg">{project.title}</h3>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/projects"
              className="inline-block bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-4 rounded-lg transition-colors"
            >
              View All Projects
            </Link>
          </div>
        </div>
      </section>

      {/* Why Ecological Landscaping */}
      <section className="py-20 md:py-28 bg-sage">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-4">
            Why Ecological Landscaping?
          </h2>
          <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
            A landscape that works with nature, not against it, delivers lasting
            rewards.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white/80 backdrop-blur rounded-2xl p-8 text-center">
              <div className="flex justify-center mb-4"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-8 w-8 text-primary"><path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" /></svg></div>
              <h3 className="text-lg font-bold text-primary mb-3">
                Support Native Pollinators &amp; Wildlife
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Native plants provide critical food and habitat for bees,
                butterflies, birds, and beyond.
              </p>
            </div>
            <div className="bg-white/80 backdrop-blur rounded-2xl p-8 text-center">
              <div className="flex justify-center mb-4"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-8 w-8 text-primary"><path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" /></svg></div>
              <h3 className="text-lg font-bold text-primary mb-3">
                Build Healthy, Living Soil
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Ecological practices nurture the soil microbiome, creating a
                thriving foundation for all plant life.
              </p>
            </div>
            <div className="bg-white/80 backdrop-blur rounded-2xl p-8 text-center">
              <div className="flex justify-center mb-4"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-8 w-8 text-primary"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" /></svg></div>
              <h3 className="text-lg font-bold text-primary mb-3">
                Low-Maintenance, Resilient Gardens
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Native plantings are adapted to local conditions, meaning less
                watering, fewer chemicals, and more time enjoying your garden.
              </p>
            </div>
            <div className="bg-white/80 backdrop-blur rounded-2xl p-8 text-center">
              <div className="flex justify-center mb-4"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-8 w-8 text-primary"><path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" /></svg></div>
              <h3 className="text-lg font-bold text-primary mb-3">
                Beauty That Gives Back to Nature
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Create stunning landscapes that restore ecosystems and connect
                you to the natural world.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Reviews */}
      <section className="py-20 md:py-28 bg-cream">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-4">
            Hear What Our Customers Have to Say
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Real feedback from homeowners who chose ecological landscaping.
          </p>
          <ReviewCarousel />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-primary">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Landscape?
          </h2>
          <p className="text-cream/80 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
            Let&apos;s work together to create a landscape that&apos;s
            beautiful, resilient, and alive. Book a consultation to get started.
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
