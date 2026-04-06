import Image from "next/image";
import Link from "next/link";

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
              <div className="flex justify-center mb-6"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-12 w-12 text-primary"><path strokeLinecap="round" strokeLinejoin="round" d="M12 21c0 0 0-4 0-8m0 0c-2-3-6-4.5-9-3 3.5 1 6 3.5 9 3m0 0c2-3 6-4.5 9-3-3.5 1-6 3.5-9 3m0-8c-1.5-2.5-4.5-4-7.5-3 2.5 1 4.5 3 7.5 3m0 0c1.5-2.5 4.5-4 7.5-3-2.5 1-4.5 3-7.5 3" /></svg></div>
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
              <div className="flex justify-center mb-6"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-12 w-12 text-primary"><path strokeLinecap="round" strokeLinejoin="round" d="M9.5 3l-1 4.5L5 9l3.5 1.5L9.5 15l1-4.5L14 9l-3.5-1.5L9.5 3z" /><path strokeLinecap="round" strokeLinejoin="round" d="M14 14l2 8M10 22h8M7 22l3-8" /></svg></div>
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
              <div className="flex justify-center mb-6"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-12 w-12 text-primary"><path strokeLinecap="round" strokeLinejoin="round" d="M12 21V11m0 0c0-4 3-7 7-7-1 4-4 7-7 7zm0 0c0-4-3-7-7-7 1 4 4 7 7 7z" /></svg></div>
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

      {/* About Preview */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden">
              <Image
                src="/images/gallery/523c7c_ccd650c22751405a96ff0ed8c318d6ce~mv2.jpg.avif"
                alt="Lindsy Hebert of Wild Nectar Landscaping at work"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Rooted in Purpose
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Wild Nectar Landscaping was founded by Lindsy Hebert with a
                simple but powerful mission: to restore the relationship between
                people and the land they live on. Based in Gray, Maine, we
                specialize in habitat restoration, soil health, native plant
                species, and building biodiversity right in your backyard.
              </p>
              <p className="text-gray-700 leading-relaxed mb-8">
                Every project is an opportunity to heal the land, support
                pollinators, and create spaces that are as beautiful as they are
                ecologically meaningful.
              </p>
              <Link
                href="/about"
                className="inline-block bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-4 rounded-lg transition-colors"
              >
                Meet Lindsy
              </Link>
            </div>
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
              <div className="flex justify-center mb-4"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-8 w-8 text-primary"><circle cx="12" cy="12" r="3" /><path strokeLinecap="round" strokeLinejoin="round" d="M12 9c0-2.5 1.5-4.5 4-5-1 2-1.5 3.5-4 5m0 0c0-2.5-1.5-4.5-4-5 1 2 1.5 3.5 4 5m3 0c2.5 0 4.5 1.5 5 4-2-1-3.5-1.5-5-4m-6 0c-2.5 0-4.5 1.5-5 4 2-1 3.5-1.5 5-4m5.1 2.1c1.8 1.8 1.8 4.2.7 6.4-1.5-1.5-2.5-3-0.7-6.4m-8.2 0c-1.8 1.8-1.8 4.2-.7 6.4 1.5-1.5 2.5-3 0.7-6.4" /></svg></div>
              <h3 className="text-lg font-bold text-primary mb-3">
                Support Native Pollinators &amp; Wildlife
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Native plants provide critical food and habitat for bees,
                butterflies, birds, and beyond.
              </p>
            </div>
            <div className="bg-white/80 backdrop-blur rounded-2xl p-8 text-center">
              <div className="flex justify-center mb-4"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-8 w-8 text-primary"><path strokeLinecap="round" strokeLinejoin="round" d="M12 22v-8m0 0c0-4-3-7-7-8 1 5 4 8 7 8zm0 0c0-4 3-7 7-8-1 5-4 8-7 8z" /><path strokeLinecap="round" strokeLinejoin="round" d="M12 14V6c0-2 1.5-3.5 3.5-3.5C15.5 5 14 7 12 7" /></svg></div>
              <h3 className="text-lg font-bold text-primary mb-3">
                Build Healthy, Living Soil
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Ecological practices nurture the soil microbiome, creating a
                thriving foundation for all plant life.
              </p>
            </div>
            <div className="bg-white/80 backdrop-blur rounded-2xl p-8 text-center">
              <div className="flex justify-center mb-4"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-8 w-8 text-primary"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg></div>
              <h3 className="text-lg font-bold text-primary mb-3">
                Low-Maintenance, Resilient Gardens
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Native plantings are adapted to local conditions, meaning less
                watering, fewer chemicals, and more time enjoying your garden.
              </p>
            </div>
            <div className="bg-white/80 backdrop-blur rounded-2xl p-8 text-center">
              <div className="flex justify-center mb-4"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-8 w-8 text-primary"><circle cx="12" cy="6" r="3" /><path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3m0 0c0 3-2 5.5-5 7m5-7c0 3 2 5.5 5 7" /><path strokeLinecap="round" strokeLinejoin="round" d="M8 11c-1.5-1-3.5-1-5 0m18 0c-1.5-1-3.5-1-5 0" /></svg></div>
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

      {/* Testimonial Section */}
      <section className="py-20 md:py-28 bg-cream">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <div className="text-5xl text-secondary mb-8">&ldquo;</div>
          <blockquote className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-8 italic">
            Lindsy is hard working, genuine, and creative. She responded quickly
            and brought a real vision to our yard. We couldn&apos;t be happier
            with how our native garden turned out -- it&apos;s beautiful and full
            of life.
          </blockquote>
          <p className="text-primary font-semibold text-lg">
            -- Happy Wild Nectar Customer
          </p>
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
