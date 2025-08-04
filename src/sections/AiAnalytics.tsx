"use client";

import { useState, useCallback } from "react";
import { motion } from "framer-motion";
import { FaBrain, FaChartLine, FaCogs } from "react-icons/fa";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";

export const AiAnalytics = () => {
  const [prompt, setPrompt] = useState("");
  const [insights, setInsights] = useState({
    tracking: "",
    recommendation: "",
    insight: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleGenerate = useCallback(() => {
    if (!prompt.trim()) {
      setError("Please enter a campaign description.");
      return;
    }

    setLoading(true);
    setError(null);

    setTimeout(() => {
      setInsights({
        tracking: "Track impressions, click-through rates, and conversion metrics in real time.",
        recommendation: "Allocate more budget to high-performing channels and use A/B testing.",
        insight: "Short-form video content tends to perform better with younger audiences.",
      });
      setLoading(false);
    }, 1000); // Simulated delay
  }, [prompt]);

  const chartData = [
    { name: "Tracking", value: insights.tracking.length || 0 },
    { name: "Recommendation", value: insights.recommendation.length || 0 },
    { name: "Insight", value: insights.insight.length || 0 },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <section
      id="ai-analytics"
      className="min-h-screen bg-[#000d3e] text-white px-6 py-24"
    >
      <motion.div
        className="text-center max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-white via-sky-400 to-blue-500 bg-clip-text text-transparent">
          AI-Powered Analytics Tool
        </h1>
        <p className="mt-6 text-lg text-white/80">
          Enter your campaign details to generate real-time AI insights.
        </p>

        <textarea
          className="mt-6 w-full p-4 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all"
          rows={4}
          placeholder="Describe your ad campaign (e.g., Social media campaign, $10,000 budget, targeting young adults)..."
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
        />

        <button
          onClick={handleGenerate}
          className={`mt-4 px-6 py-3 rounded-lg text-white font-semibold transition-all ${
            loading || !prompt
              ? "bg-gray-600 cursor-not-allowed"
              : "bg-sky-500 hover:bg-sky-600 shadow-lg hover:shadow-sky-500/50"
          }`}
          disabled={loading || !prompt}
        >
          {loading ? "Generating..." : "Generate Insights"}
        </button>

        {error && (
          <p className="mt-4 text-red-400 text-sm animate-pulse">{error}</p>
        )}
      </motion.div>

      {!loading && (insights.tracking || error) && (
        <motion.div
          className="mt-20 max-w-6xl mx-auto"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <div className="grid gap-8 md:grid-cols-3">
            <motion.div
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/10 shadow-lg hover:shadow-white/20 transition-shadow"
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.4 }}
            >
              <FaChartLine className="text-sky-400 text-4xl mb-4 animate-pulse" />
              <h3 className="text-xl font-semibold mb-2">Performance Tracking</h3>
              <p className="text-white/70 text-sm">
                {error ? "Error fetching data." : insights.tracking || "No data available"}
              </p>
            </motion.div>

            <motion.div
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/10 shadow-lg hover:shadow-white/20 transition-shadow"
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.5 }}
            >
              <FaBrain className="text-pink-400 text-4xl mb-4 animate-pulse" />
              <h3 className="text-xl font-semibold mb-2">AI Recommendations</h3>
              <p className="text-white/70 text-sm">
                {error ? "Error fetching data." : insights.recommendation || "No data available"}
              </p>
            </motion.div>

            <motion.div
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/10 shadow-lg hover:shadow-white/20 transition-shadow"
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.6 }}
            >
              <FaCogs className="text-green-400 text-4xl mb-4 animate-pulse" />
              <h3 className="text-xl font-semibold mb-2">Campaign Insights</h3>
              <p className="text-white/70 text-sm">
                {error ? "Error fetching data." : insights.insight || "No data available"}
              </p>
            </motion.div>
          </div>

          {insights.tracking && (
            <motion.div
              className="mt-16 bg-white/5 p-6 rounded-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
            >
              <h2 className="text-2xl font-bold mb-4">Insight Summary Chart</h2>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={chartData}>
                    <XAxis dataKey="name" stroke="#ccc" />
                    <YAxis stroke="#ccc" />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "#1f2937",
                        border: "1px solid #4b5563",
                        borderRadius: "4px",
                        color: "#fff",
                      }}
                    />
                    <Bar dataKey="value" fill="#38bdf8">
                      {chartData.map((entry, index) => (
                        <Cell
                          key={`cell-${index}`}
                          fill={["#38bdf8", "#ec4899", "#22c55e"][index]}
                        />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </motion.div>
          )}
        </motion.div>
      )}
    </section>
  );
};
