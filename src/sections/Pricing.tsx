"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const pricingTiers = [
  {
    title: "Startup",
    monthlyPrice: 1.999,
    buttonText: "Start now",
    features: [
      "Free for first 12 months",
      "5 myMail Credits",
      "250 Design Credits",
      "Campaign Management",
      "Add Team members (upto 5)",
      "Business AdInsurance",
      "Access to Loans & Ad Credit",
      "Expense Management",
      "Feed & Shots",
    ],
  },
  {
    title: "Professional",
    monthlyPrice: 5.999,
    buttonText: "Start now",
    features: [
      "Everything in STARTUP+",
      "Recommendations",
      "Unlock Contact Details",
      "Campaign Reports",
      "Dedicated SPOCK",
      "Access to Design+",
      "Mogul Vouchers",
      "Team Management",
      "2 online consultations",
    ],
  },
  {
    title: "Enterprise",
    monthlyPrice: 19.999,
    buttonText: "Start now",
    features: [
      "Everything in PROFESSIONAL+",
      "Campaign Insights",
      "Access to MO Offers",
      "Ad free Experience",
      "Analytics reports",
      "Agency tools for pricing",
      "Payment collection & reports",
      "Rescheduling",
    ],
  },
  {
    title: "Ultra",
    monthlyPrice: 149.999,
    buttonText: "Start now",
    features: [
      "Everything in ENTERPRISE+",
      "Agency Administrative tools",
      "Access to premium Plugins",
      "Contract Management",
      "24/7 Dedicated Support",
      "Verified tickmark on feeds",
      "Marketing communication",
      "Digital marketing tools",
      "ROAS based campaigns",
    ],
  },
];

export const Pricing = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? pricingTiers.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === pricingTiers.length - 1 ? 0 : prev + 1));
  };

  const tier = pricingTiers[activeIndex];

  return (
    <section className="relative py-16 md:py-20 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183EC2,#EAEEFE)] overflow-hidden">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-6xl font-bold tracking-tight bg-gradient-to-r from-black via-[#1a2e95] to-[#000d56] text-transparent bg-clip-text">
          Choose Your Plan
        </h2>
        <p className="text-base md:text-xl text-[#010D3E] mt-4 max-w-xl mx-auto">
          Free forever. Upgrade for unlimited tasks, better security, and powerful tools.
        </p>
        <div className="flex justify-center items-center gap-6 mt-8">
          <button
            onClick={handlePrev}
            className="bg-gray-800/50 hover:bg-gray-700/60 text-gray-200 p-2 rounded-full backdrop-blur-md transition"
          >
            <ChevronLeft />
          </button>
          <div className="bg-gray-900/60 backdrop-blur-md text-gray-100 rounded-xl p-6 shadow-md max-w-md">
            <h3 className="text-2xl md:text-3xl font-semibold mb-3">{tier.title}</h3>
            <div className="text-2xl md:text-4xl font-bold mb-4 flex items-baseline">
              ₹<span className="text-3xl md:text-5xl">{tier.monthlyPrice}</span>
              <span className="text-sm md:text-base font-medium text-gray-400">/month</span>
            </div>
            <button className="w-full py-2 md:py-3 text-base md:text-lg bg-gray-700 text-gray-100 font-semibold rounded-md hover:bg-gray-600 mb-3">
              {tier.buttonText}
            </button>
            <ul className="text-sm md:text-base text-gray-300 text-left space-y-2">
              {tier.features.map((feature, i) => (
                <li key={i} className="flex items-center gap-2">
                  <span>✅</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          <button
            onClick={handleNext}
            className="bg-gray-800/50 hover:bg-gray-700/60 text-gray-200 p-2 rounded-full backdrop-blur-md transition"
          >
            <ChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
};