"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export const InteractivePricingCalculator = () => {
  const [adSpend, setAdSpend] = useState(5000); // in INR
  const [channels, setChannels] = useState(3); // number of ad channels
  const [aiOptimization, setAiOptimization] = useState(true);

  const baseCost = 999;
  const channelCost = channels * 500;
  const spendBasedCost = adSpend > 5000 ? (adSpend - 5000) * 0.02 : 0;
  const aiCost = aiOptimization ? 1499 : 0;

  const total = baseCost + channelCost + spendBasedCost + aiCost;

  return (
    <section className="relative bg-gradient-to-br from-white via-blue-50 to-white py-20 px-4 md:px-10 lg:px-20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-black via-[#1a2e95] to-[#000d56] text-transparent bg-clip-text text-center mb-12">
          Interactive Pricing Calculator
        </h2>

        <div className="bg-white p-8 rounded-3xl shadow-xl grid gap-6 border border-blue-100">
          {/* Ad Spend */}
          <div>
            <label className="block mb-2 font-medium text-gray-700">
              Monthly Ad Spend (₹{adSpend})
            </label>
            <input
              type="range"
              min="1000"
              max="20000"
              step="1000"
              value={adSpend}
              onChange={(e) => setAdSpend(Number(e.target.value))}
              className="w-full"
            />
          </div>

          {/* Channels */}
          <div>
            <label className="block mb-2 font-medium text-gray-700">
              Number of Ad Channels ({channels})
            </label>
            <input
              type="range"
              min="1"
              max="10"
              value={channels}
              onChange={(e) => setChannels(Number(e.target.value))}
              className="w-full"
            />
          </div>

          {/* AI Optimization Toggle */}
          <div className="flex items-center justify-between">
            <span className="font-medium text-gray-700">AI Optimization</span>
            <button
              onClick={() => setAiOptimization(!aiOptimization)}
              className={`px-4 py-2 rounded-full text-sm font-semibold shadow-sm transition ${
                aiOptimization
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 text-gray-700"
              }`}
            >
              {aiOptimization ? "Enabled" : "Disabled"}
            </button>
          </div>

          {/* Summary */}
          <motion.div
            key={total}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-gradient-to-r from-blue-600 to-indigo-800 text-white text-center p-6 rounded-2xl"
          >
            <h3 className="text-lg md:text-xl font-semibold mb-1">Estimated Monthly Price</h3>
            <p className="text-3xl font-bold">₹{total.toFixed(0)}</p>
            <p className="text-sm mt-2 text-blue-100">
              Base ₹{baseCost} + Channels ₹{channelCost} + Ad Spend ₹{spendBasedCost.toFixed(0)} + AI ₹{aiCost}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
