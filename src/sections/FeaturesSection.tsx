"use client";
import { motion } from "framer-motion";

const targetGroups = [
  "Metro Cities",
  "Kids",
  "Housewives",
  "School Students",
  "College Students",
  "Working Women",
  "Family",
];

const whiteLabels = [
  { title: "8oarding", description: "Outdoor moveable media, ETL campaigns.", gradient: "from-purple-500 via-pink-500 to-red-500" },
  { title: "Ad8OH", description: "OOH media, movies, billboards.", gradient: "from-yellow-400 via-orange-500 to-pink-500" },
  { title: "8Dijad", description: "Digital screens, LED ads.", gradient: "from-green-400 via-blue-500 to-purple-500" },
  { title: "Ad8Mobile", description: "Mobile ads – audio, video, in-app.", gradient: "from-indigo-500 via-sky-500 to-teal-400" },
  { title: "Ad8Paper", description: "Newspaper display, classifieds.", gradient: "from-rose-400 via-fuchsia-500 to-purple-600" },
  { title: "Ad8Radio", description: "Radio ads, regional spots.", gradient: "from-red-400 via-pink-500 to-yellow-500" },
];

export default function FeaturesSection() {
  return (
    <section className="relative z-10 bg-[radial-gradient(ellipse_120%_100%_at_top_right,#EAEEFE,#FFFFFF)] px-6 md:px-16 py-12 md:py-20 overflow-hidden">
      {/* Section Heading */}
      <div className="max-w-6xl mx-auto text-center mb-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-black via-[#1a2e95] to-[#000d56] text-transparent bg-clip-text"
        >
          Reach the Right Audience
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="mt-4 text-base md:text-lg text-[#010D3E] tracking-tight max-w-2xl mx-auto"
        >
          Book cost-effective ads for hyper-targeted groups using our AI-driven platform.
        </motion.p>
      </div>

      {/* Target Group Tags */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="flex flex-wrap gap-3 justify-center mb-12"
      >
        {targetGroups.map((label) => (
          <motion.div
            key={label}
            whileHover={{ scale: 1.05 }}
            className="px-4 py-2 bg-gradient-to-tr from-blue-100 to-indigo-200 rounded-full text-sm font-medium text-[#001E80] border border-[#001E80]/20 shadow-sm shadow-blue-300/20 backdrop-blur-md"
          >
            {label}
          </motion.div>
        ))}
      </motion.div>

      {/* White-Label Headline */}
      <div className="text-center mb-8">
        <motion.h3
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl md:text-3xl font-bold text-[#001E80]"
        >
          White-Label Ad Solutions
        </motion.h3>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="mt-3 text-sm md:text-base text-gray-600 max-w-xl mx-auto"
        >
          Don’t have your own ad tech? Use ours. We offer a full-stack white-label platform with SSO, insights, and automation.
        </motion.p>
      </div>

      {/* Gradient Cards */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {whiteLabels.map(({ title, description, gradient }) => (
          <motion.div
            key={title}
            whileHover={{ scale: 1.05 }}
            className={`rounded-2xl p-5 text-white bg-gradient-to-br ${gradient} shadow-xl`}
          >
            <h4 className="text-lg font-semibold mb-1">{title}</h4>
            <p className="text-sm opacity-90">{description}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
