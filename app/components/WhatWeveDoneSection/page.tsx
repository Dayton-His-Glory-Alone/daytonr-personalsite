"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

export default function WhatWeveDoneSection() {
  const automationTasks = [
    "Paying invoices",
    "Filling out forms",
    "Entering data",
    "Responding to repetitive emails",
    "Scheduling meetings manually",
    "Copying data between systems",
    "Tracking expenses by hand",
  ];

  const processSteps = [
    { title: "Shadow 👤", desc: "Assess needs and areas of opportunity." },
    { title: "Consult 🗣️", desc: "Make sure we’re solving the right problems." },
    { title: "Design 📝", desc: "Create efficient systems and automations." },
    { title: "Review 🔍", desc: "Ensure everything works seamlessly." },
    { title: "Savings Guaranteed ⌛💲", desc: "You save time, energy, and money." },
  ];

  return (
    <>
      {/* Buy Back Your Time Section */}
      <section id="what-weve-done" className="py-20 px-6 lg:px-20 bg-white text-gray-800">
        <div className="max-w-5xl mx-auto text-center">
          <motion.h2
            className="text-4xl font-bold mb-8 text-gray-900"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Buy Back Your Time
          </motion.h2>

          <p className="text-lg text-gray-600 mb-10">
            Are you always stuck doing tasks that could be automated?
          </p>

          <ul className="text-left inline-block space-y-4">
            {automationTasks.map((task, index) => (
              <motion.li
                key={index}
                className="flex items-center space-x-3 text-lg"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <span className="text-green-600 text-xl">✔</span>
                <span>{task}</span>
              </motion.li>
            ))}
          </ul>

          <motion.h3
            className="text-2xl font-semibold mt-16 text-gray-900"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            Conquer Repeat Processes 🚀
          </motion.h3>
        </div>
      </section>

      {/* My Process Section */}
      <section id="my-process" className="py-20 px-6 lg:px-20 bg-gray-50">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12">
          {/* Left: Image */}
          <motion.div
            className="w-full lg:w-1/3 flex justify-center"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <Image
              src="/dayton_profile.png"
              alt="Dayton Profile"
              width={300}
              height={300}
              className="rounded-2xl shadow-lg"
            />
          </motion.div>

          {/* Right: Steps */}
          <motion.div
            className="w-full lg:w-2/3"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <h2 className="text-4xl font-bold mb-8 text-gray-900 text-center lg:text-left">
              My Process
            </h2>

            <div className="space-y-8">
              {processSteps.map((step, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
                  whileHover={{ scale: 1.02 }}
                >
                  <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-lg">{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
