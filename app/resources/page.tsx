"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function ResourcesPage() {
  const articles = [
    {
      title: "The Ultimate Business Cost Audit Checklist",
      summary:
        "Discover hidden savings and revenue opportunities across technology, HR, marketing, and operations. This checklist guides you step-by-step to reduce waste and increase efficiency.",
      slug: "business-cost-audit-checklist",
      categories: [
        "Technology & Software",
        "Employee & HR",
        "Customer Acquisition",
        "Operations & Efficiency",
        "Revenue Enhancement",
        "Quick Wins",
      ],
    },
    // Add more articles below as your library grows
  ];

  return (
    <div className="min-h-screen bg-[#f7f3e9] text-gray-800 px-6 py-12">
      {/* Header / Hero Section */}
      <header className="text-center mb-16">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-4 text-[#b23b25]"
        >
          Resources for Smarter Businesses
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-lg text-gray-600 max-w-2xl mx-auto"
        >
          Explore guides, tools, and strategies to optimize costs, improve
          efficiency, and grow your organization.
        </motion.p>
      </header>

      {/* Articles Grid */}
      <section className="max-w-5xl mx-auto grid gap-8 md:grid-cols-2">
        {articles.map((article, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 * i }}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 p-6 flex flex-col justify-between"
          >
            <div>
              <h2 className="text-2xl font-semibold mb-3 text-[#b23b25]">
                {article.title}
              </h2>
              <p className="text-gray-700 mb-4">{article.summary}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {article.categories.map((cat, j) => (
                  <span
                    key={j}
                    className="bg-[#f1ebe0] text-sm px-3 py-1 rounded-full text-gray-700"
                  >
                    {cat}
                  </span>
                ))}
              </div>
            </div>
            <Link
              href={`/resources/${article.slug}`}
              className="text-[#b23b25] hover:text-[#7e291a] font-medium mt-auto transition-colors"
            >
              Read More →
            </Link>
          </motion.div>
        ))}
      </section>

      {/* CTA Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="text-center mt-24 bg-[#f0e7d6] py-12 rounded-2xl max-w-4xl mx-auto shadow-inner"
      >
        <h2 className="text-2xl font-semibold text-[#b23b25] mb-4">
          Ready to implement these changes?
        </h2>
        <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
          Many businesses save <strong>$2,000–$10,000+</strong> annually from
          just the first few items on this checklist. Let’s discuss how we can
          optimize your business together.
        </p>
        <Link
          href="/contact"
          className="inline-block bg-[#b23b25] text-white px-6 py-3 rounded-full font-medium hover:bg-[#7e291a] transition-colors"
        >
          Get in Touch
        </Link>
      </motion.section>
    </div>
  );
}
