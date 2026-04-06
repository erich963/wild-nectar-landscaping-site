"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";

const steps = [
  {
    number: 1,
    title: "Submit Your Request",
    description:
      "Fill out the form with your project details and preferred timeline.",
  },
  {
    number: 2,
    title: "We'll Reach Out Within 48 Hours",
    description:
      "Our team will review your request and contact you to discuss your vision.",
  },
  {
    number: 3,
    title: "Schedule a Site Visit",
    description:
      "We'll visit your property to assess soil, sunlight, drainage, and existing conditions.",
  },
  {
    number: 4,
    title: "Receive Your Custom Plan",
    description:
      "Get a tailored ecological landscape design built around your goals, budget, and site.",
  },
];

export default function BookOnlinePage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    serviceType: "",
    preferredDate: "",
    description: "",
  });
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    // Form submission logic would go here
    setSubmitted(true);
  }

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 bg-primary">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Book a Consultation
          </h1>
          <p className="text-lg text-cream/80 max-w-2xl mx-auto leading-relaxed">
            Take the first step toward a beautiful, ecologically thriving
            landscape. Tell us about your project and we&apos;ll be in touch
            soon.
          </p>
        </div>
      </section>

      {/* Booking Content */}
      <section className="py-20 md:py-28 bg-cream">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Consultation Form */}
            <div className="lg:col-span-2 bg-white rounded-2xl p-8 md:p-10 shadow-sm">
              <h2 className="text-2xl font-bold text-primary mb-6">
                Consultation Request
              </h2>
              {submitted ? (
                <div className="text-center py-12">
                  <div className="flex justify-center mb-4"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-12 w-12 text-primary"><path strokeLinecap="round" strokeLinejoin="round" d="M12 21c0 0-8-6-8-12a4 4 0 0 1 8 0 4 4 0 0 1 8 0c0 6-8 12-8 12z" /><path strokeLinecap="round" strokeLinejoin="round" d="M12 21V9" /></svg></div>
                  <h3 className="text-xl font-bold text-primary mb-2">
                    Request Submitted!
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Thank you for your interest in Wild Nectar Landscaping.
                    We&apos;ll reach out within 48 hours to discuss your
                    project.
                  </p>
                  <Link
                    href="/"
                    className="text-secondary font-semibold hover:text-secondary/80 transition-colors"
                  >
                    &larr; Back to Home
                  </Link>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-semibold text-gray-700 mb-1"
                      >
                        Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        required
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-semibold text-gray-700 mb-1"
                      >
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-semibold text-gray-700 mb-1"
                      >
                        Phone *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        required
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="preferredDate"
                        className="block text-sm font-semibold text-gray-700 mb-1"
                      >
                        Preferred Date
                      </label>
                      <input
                        type="date"
                        id="preferredDate"
                        value={formData.preferredDate}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            preferredDate: e.target.value,
                          })
                        }
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="address"
                      className="block text-sm font-semibold text-gray-700 mb-1"
                    >
                      Property Address *
                    </label>
                    <input
                      type="text"
                      id="address"
                      required
                      value={formData.address}
                      onChange={(e) =>
                        setFormData({ ...formData, address: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="serviceType"
                      className="block text-sm font-semibold text-gray-700 mb-1"
                    >
                      Service Type *
                    </label>
                    <select
                      id="serviceType"
                      required
                      value={formData.serviceType}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          serviceType: e.target.value,
                        })
                      }
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors bg-white"
                    >
                      <option value="">Select a service</option>
                      <option value="landscape-design">
                        Landscape Design &amp; Planning
                      </option>
                      <option value="installation">Installation</option>
                      <option value="habitat-restoration">
                        Habitat Restoration
                      </option>
                      <option value="land-management">
                        Land Management &amp; Maintenance
                      </option>
                      <option value="pollinator-garden">
                        Pollinator Garden
                      </option>
                      <option value="rain-garden">Rain Garden</option>
                      <option value="native-meadow">
                        Native Meadow Conversion
                      </option>
                      <option value="soil-health">
                        Soil Health &amp; Composting
                      </option>
                      <option value="consultation-only">
                        General Consultation
                      </option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="description"
                      className="block text-sm font-semibold text-gray-700 mb-1"
                    >
                      Project Description *
                    </label>
                    <textarea
                      id="description"
                      required
                      rows={5}
                      placeholder="Tell us about your property, your goals, and any ideas you have for your landscape..."
                      value={formData.description}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          description: e.target.value,
                        })
                      }
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors resize-vertical"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-4 rounded-lg text-lg transition-colors"
                  >
                    Submit Consultation Request
                  </button>
                </form>
              )}
            </div>

            {/* Side Panel */}
            <div className="space-y-8">
              <div className="bg-white rounded-2xl p-8 shadow-sm">
                <h2 className="text-2xl font-bold text-primary mb-6">
                  What to Expect
                </h2>
                <div className="space-y-6">
                  {steps.map((step) => (
                    <div key={step.number} className="flex gap-4">
                      <div className="flex-shrink-0 w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg">
                        {step.number}
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-800 mb-1">
                          {step.title}
                        </h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-sage rounded-2xl p-8">
                <h3 className="text-lg font-bold text-primary mb-3">
                  Need Immediate Help?
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Call us directly and we&apos;ll be happy to discuss your
                  project over the phone.
                </p>
                <a
                  href="tel:603-667-6886"
                  className="inline-flex items-center gap-2 text-primary font-semibold text-lg hover:text-primary/80 transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-5 w-5"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25z" /></svg> (603) 667-6886
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
