"use client";

import { useState, useEffect, useCallback } from "react";

const reviews = [
  {
    quote:
      "Lindsy is hard working, genuine, and creative. She responded quickly and brought a real vision to our yard. We couldn\u2019t be happier with how our native garden turned out \u2014 it\u2019s beautiful and full of life.",
    author: "Sarah M.",
    location: "Cape Elizabeth",
  },
  {
    quote:
      "We hired Wild Nectar to help us renew and expand our existing plantings with a focus on native species. Lindsy was invaluable in preparing the beds, making drawings, and suggesting plants. Highly recommend!",
    author: "David & Karen R.",
    location: "Gray",
  },
  {
    quote:
      "From the initial consultation to the final planting, Wild Nectar exceeded our expectations. Our pollinator garden is thriving and we see more butterflies and bees than ever before.",
    author: "Jennifer L.",
    location: "South Portland",
  },
  {
    quote:
      "Professional, knowledgeable, and truly passionate about ecological landscaping. The rain garden Lindsy designed for us is both functional and gorgeous.",
    author: "Mark T.",
    location: "Falmouth",
  },
];

export default function ReviewCarousel() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [fade, setFade] = useState(true);

  const goTo = useCallback(
    (index: number) => {
      setFade(false);
      setTimeout(() => {
        setCurrent((index + reviews.length) % reviews.length);
        setFade(true);
      }, 300);
    },
    []
  );

  const next = useCallback(() => goTo(current + 1), [current, goTo]);
  const prev = useCallback(() => goTo(current - 1), [current, goTo]);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      goTo(current + 1);
    }, 6000);
    return () => clearInterval(timer);
  }, [current, isPaused, goTo]);

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Left Arrow */}
      <button
        onClick={prev}
        aria-label="Previous review"
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 md:-translate-x-6 z-10 p-2 rounded-full bg-white/80 hover:bg-white shadow transition-colors"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-5 h-5 text-primary"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5L8.25 12l7.5-7.5"
          />
        </svg>
      </button>

      {/* Right Arrow */}
      <button
        onClick={next}
        aria-label="Next review"
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 md:translate-x-6 z-10 p-2 rounded-full bg-white/80 hover:bg-white shadow transition-colors"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-5 h-5 text-primary"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 4.5l7.5 7.5-7.5 7.5"
          />
        </svg>
      </button>

      {/* Review Content */}
      <div className="text-center px-10 md:px-16">
        <div className="text-6xl text-secondary leading-none mb-6 select-none">
          &ldquo;
        </div>
        <div
          className={`transition-opacity duration-300 ${
            fade ? "opacity-100" : "opacity-0"
          }`}
        >
          <blockquote className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-8 italic font-serif">
            {reviews[current].quote}
          </blockquote>
          <p className="text-primary font-semibold text-lg">
            {reviews[current].author}
          </p>
          <p className="text-gray-500 text-sm">{reviews[current].location}</p>
        </div>
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-3 mt-8">
        {reviews.map((_, index) => (
          <button
            key={index}
            onClick={() => goTo(index)}
            aria-label={`Go to review ${index + 1}`}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === current
                ? "bg-secondary"
                : "bg-gray-300 hover:bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
