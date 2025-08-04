"use client";

import { useState } from "react";

const faqs = [
  {
    question: "What is ADmyBRAND?",
    answer:
      "ADmyBRAND is an AI-powered advertising platform that automates campaign creation, audience targeting, and performance analysis across multiple channels.",
  },
  {
    question: "How is ADmyBRAND different from other marketing tools?",
    answer:
      "Unlike traditional tools, ADmyBRAND uses AI to optimize real-time ad placement, automate analytics, and reduce ad wastage with smarter insights.",
  },
  {
    question: "Can I integrate my existing ad accounts?",
    answer:
      "Yes, you can connect accounts from platforms like Google Ads, Meta, YouTube, LinkedIn, and more within minutes.",
  },
  {
    question: "Is there a free trial?",
    answer:
      "Absolutely! We offer a 14-day free trial so you can experience the power of automated advertising before committing.",
  },
  {
    question: "Is ADmyBRAND suitable for small businesses?",
    answer:
      "Yes. Whether you're a solo entrepreneur or a growing brand, our tools scale with your needs and help you compete effectively.",
  },
];

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-16 px-4 md:px-8 lg:px-24">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-black via-[#1a2e95] to-[#000d56] text-transparent bg-clip-text mt-6">
          Frequently Asked Questions
        </h2>
        <p className="mt-3 text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
          Everything you need to know about using ADmyBRAND effectively.
        </p>
      </div>

      <div className="mt-12 max-w-3xl mx-auto space-y-5">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-xl p-5 transition-all duration-300 bg-white shadow hover:shadow-md"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full text-left flex justify-between items-center font-medium text-gray-800 text-base md:text-lg"
            >
              {faq.question}
              <span className="ml-2 text-blue-600 text-xl">
                {openIndex === index ? "−" : "+"}
              </span>
            </button>
            {openIndex === index && (
              <p className="mt-3 text-gray-600 text-sm md:text-base">
                {faq.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};
