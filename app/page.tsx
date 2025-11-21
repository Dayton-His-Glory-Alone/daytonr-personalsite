'use client'
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react"; 
import Header from "./components/Header";

export default function Home() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const words = ["perform.", "shine.","sell.","pace.", "grow.", "stand."];

  const automationTasks = [
    "Paying invoices",
    "Filling out forms",
    "Responding to repetitive emails",
    "Copying data between systems",
    "Tracking expenses by hand",
  ];
  
  const processSteps = [
    { title: "Shadow 👤", desc: "Assess needs and areas of opportunity." },
    { title: "Consult 🗣️", desc: "Make sure we're solving the right problems." },
    { title: "Design 📝", desc: "Create efficient systems and automations." },
    { title: "Review 🔍", desc: "Ensure everything works seamlessly." },
    { title: "Savings Guaranteed ⌛💲", desc: "You save time, energy, and money." },
  ];
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 1500);

    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <>
      <Header />
      <div className="min-h-screen bg-[#f7f3e9] text-gray-800">
        {/* Hero Section */}
        <section className="relative w-full h-screen flex items-center justify-center text-center text-white overflow-hidden">
          {/* Background Video */}
          <video
            autoPlay
            muted
            loop
            className="absolute top-0 left-0 w-full h-full object-cover"
          >
            <source src="/videoplayback.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          {/* Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>

          {/* Hero Content */}
          <div className="relative z-10 px-6">
            <h1 className="text-6xl font-bold mb-4">
              Empower Your Business To
              <br />
              <span className="inline-block perspective-1000">
                <span
                  key={words[currentWordIndex] + "-out"}
                  className="inline-block animate-flip text-[#039BE5] mr-1"
                >
                  Out
                </span>
                <span
                  key={words[currentWordIndex]}
                  className="inline-block animate-flip text-white"
                >
                  <b>{words[currentWordIndex]}</b>
                </span>
              </span>
              <br />
            </h1>

            <p className="text-lg max-w-2xl mx-auto mb-6">
              I help businesses expand their digital footprint, automate
              processes, and build meaningful connections with customers.
            </p>

            {/* Appointment button (Primary CTA) */}
            <a
              href="https://calendar.app.google/9QHdAtmbYtDjjcDM9"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#039BE5] text-white px-8 py-4 rounded-lg shadow-lg hover:bg-[#0288d1] transition font-semibold text-lg"
            >
              Schedule a Call
            </a>

            <br />

            {/* Services button (Secondary CTA) */}
            <Link
              href="services"
              className="inline-block mt-4 border-2 border-white text-white px-6 py-3 rounded-lg hover:bg-white hover:text-black transition"
            >
              See What I Can Do for You
            </Link>
          </div>
        </section>

        {/* What We've Done Section */}
        <section id="what-weve-done" className="py-16 px-8 bg-white">
          <h2 className="text-3xl font-semibold text-center mb-12">
            What We&apos;ve Done
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">

            {/* First Card */}
            <a
              href="https://truckdriversbest.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#fffbe6] p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300 flex flex-col items-center"
            >
              <div className="relative w-40 h-40 mb-4">
                <div className="relative w-full h-full">
                  <svg className="w-full h-full" viewBox="0 0 200 200">
                    <defs>
                      <path 
                        id="circlePath" 
                        d="M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0" 
                      />
                    </defs>
                    <circle cx="100" cy="100" r="75" fill="#f8fafc" />
                    <image href="/calebjoefounders.png" x="0" y="0" width="200" height="200" />
                    <g className="animate-spin-slow">
                      <text className="fill-green-600 font-bold text-[16px]">
                        <textPath href="#circlePath" startOffset="0%">
                          saved $300/year in hosting costs. •
                        </textPath>
                      </text>
                    </g>
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold text-center mb-2">
                Website conversion for truck drivers best
              </h3>
              <p className="text-sm text-center">
                Converted site hosting, reducing operational costs while improving performance.
              </p>
            </a>

            {/* Second Card */}
            <a
              href="https://moveit.my.nussbaum.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#fffbe6] p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300 flex flex-col items-center"
            >
              <div className="relative w-40 h-40 mb-4">
                <div className="relative w-full h-full">
                  <svg className="w-full h-full" viewBox="0 0 200 200">
                    <defs>
                      <path 
                        id="circlePath2" 
                        d="M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0" 
                      />
                    </defs>
                    <circle cx="100" cy="100" r="75" fill="#f8fafc" />
                    <image href="/moveit.png" x="0" y="0" width="200" height="200" />
                    <g className="animate-spin-slow">
                      <text className="fill-white-600 font-bold text-[16px]">
                        <textPath href="#circlePath2" startOffset="0%">
                          saved thousands in insurance costs •
                        </textPath>
                      </text>
                    </g>
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold text-center mb-2">
                Custom Employee Health App
              </h3>
              <p className="text-sm text-center">
                Delivered exceptional results that significantly reduced insurance costs while improving employee satisfaction.
              </p>
            </a>

            {/* Third Card */}
            <a
              href="https://squeakycleancommunication.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#fffbe6] p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300 flex flex-col items-center"
            >
              <div className="relative w-40 h-40 mb-4">
                <div className="relative w-full h-full">
                  <svg className="w-full h-full" viewBox="0 0 200 200">
                    <defs>
                      <path 
                        id="circlePath3" 
                        d="M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0" 
                      />
                    </defs>
                    <circle cx="100" cy="100" r="75" fill="#f8fafc" />
                    <image href="/cleaners.png" x="0" y="0" width="200" height="200" />
                    <g className="animate-spin-slow">
                      <text className="fill-blue-600 font-bold text-[16px]">
                        <textPath href="#circlePath3" startOffset="0%">
                          streamlined client communication •
                        </textPath>
                      </text>
                    </g>
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold text-center mb-2">
                Commercial Cleaners App
              </h3>
              <p className="text-sm text-center">
                An app designed for commercial cleaners to simplify client communication and job management.
              </p>
            </a>
          </div>
        </section>

        {/* What We're Working On Section */}
        <section id="what-were-working-on" className="py-20 px-8 bg-gradient-to-br from-[#f7f3e9] via-[#fff8dc] to-[#ffefd5]">
          <motion.h2
            className="text-4xl font-bold text-center mb-4 text-gray-900"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            What We&apos;re Working On...
          </motion.h2>
          <motion.p
            className="text-center text-gray-600 mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Current projects in our workshop — stay tuned for innovation in progress!
          </motion.p>

          <motion.div
            className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
          >
            <div className="relative h-64 bg-gradient-to-r from-blue-500 via-indigo-600 to-purple-600 flex items-center justify-center overflow-hidden">
              {/* Animated Workshop Background */}
              <div className="absolute inset-0 opacity-20">
                <motion.div
                  className="absolute top-10 left-10 w-20 h-20 bg-white rounded-full"
                  animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                />
                <motion.div
                  className="absolute bottom-10 right-10 w-16 h-16 bg-white rounded-full"
                  animate={{ x: [0, -40, 0], y: [0, 30, 0] }}
                  transition={{ duration: 5, repeat: Infinity }}
                />
                <motion.div
                  className="absolute top-1/2 left-1/2 w-24 h-24 border-4 border-white rounded-full"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                />
              </div>

              {/* Main Icon/Badge */}
              <motion.div
                className="relative z-10 bg-white p-6 rounded-full shadow-xl"
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <span className="text-6xl">🚚</span>
              </motion.div>
            </div>

            <div className="p-8">
              <motion.h3
                className="text-3xl font-bold text-gray-900 mb-3"
                whileHover={{ x: 5 }}
              >
                <a
                  href="https://nussbaumtech.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#039BE5] transition-colors"
                >
                  Nussbaum Technology Website 🛠️
                </a>
              </motion.h3>
              
              <p className="text-lg text-gray-600 mb-6">
                Designing a modern, intuitive website for a cutting-edge truck carrier freight bidding software platform.
              </p>

              <div className="flex flex-wrap gap-3 mb-6">
                <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                  🎨 UI/UX Design
                </span>
                <span className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
                  🚀 Next.js
                </span>
                <span className="px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                  💼 B2B Platform
                </span>
                <span className="px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm font-medium">
                  🔧 In Progress
                </span>
              </div>

              <div className="border-l-4 border-[#039BE5] pl-4 py-2 bg-blue-50 rounded-r">
                <p className="text-sm text-gray-700 italic">
                  &ldquo;Building a platform that revolutionizes how carriers bid on freight — streamlined, efficient, and powerful.&rdquo;
                </p>
              </div>

              <motion.a
                href="https://nussbaumtech.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-block bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transition font-semibold"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Visit Nussbaum Tech →
              </motion.a>
            </div>
          </motion.div>
        </section>
      
        {/* Buy Back Your Time Section */}
        <section id="buy-back-time" className="py-20 px-6 lg:px-20 bg-white text-gray-800">
          <div className="max-w-5xl mx-auto text-center">
            <motion.h2
              className="text-4xl font-bold mb-8 text-gray-900"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              Buy Back Your Time
            </motion.h2>
            <p className="text-lg text-gray-600 mb-10">
              Are you stuck doing repetitive tasks?
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
        <section id="my-process" className="py-20 px-6 lg:px-20 bg-gray-50 w-full">
          <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12">
            {/* Left: Image */}
            <motion.div
              className="w-full lg:w-1/3 flex flex-col items-center justify-center space-y-6"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <Image
                src="/dayton_profile.png"
                alt="Dayton Profile"
                width={300}
                height={300}
                className="rounded-2xl"
              />

              <a
                href="https://calendar.app.google/9QHdAtmbYtDjjcDM9"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#039BE5] text-white px-8 py-4 rounded-lg shadow-lg hover:bg-[#0288d1] transition font-semibold text-lg"
              >
                Schedule a Call with Dayton
              </a>
            </motion.div>

            {/* Right: Steps */}
            <motion.div
              className="w-full lg:w-2/3"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <h2 className="text-4xl font-bold mb-8 text-gray-900 text-center lg:text-left">
                Our Process
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

        {/* Footer */}
        <footer className="text-center py-10 px-6 bg-[#f0ede6]">
          <p className="text-sm">Ready to take your brand further?</p>
          <a
            href="mailto:dayton@letsoutstand.com"
            className="text-lg font-medium underline hover:text-black"
          >
            Lets Connect
          </a>
          <p className="mt-4 text-xs text-gray-500">
            © {new Date().getFullYear()} Stand Out Solutions. All rights reserved.
          </p>
        </footer>

        {/* Add CSS for the spinning animation */}
        <style jsx global>{`
          @keyframes spin-slow {
            from { transform: rotate(0deg); }
            to { transform: rotate(100deg); }
          }
          .animate-spin-slow {
            animation: spin-slow 6s linear infinite alternate;
            transform-origin: 50% 50%;
          }
        `}</style>
        <style jsx>{`
          .perspective-1000 {
            perspective: 1000px;
          }
          .animate-flip {
            display: inline-block;
            animation: flip 0.7s ease-in-out;
          }
          @keyframes flip {
            0% {
              transform: rotateX(90deg);
              opacity: 0;
              color: #039be5;
            }
            50% {
              transform: rotateX(0deg);
              opacity: 1;
              color: #0288d1;
            }
            100% {
              transform: rotateX(0deg);
              opacity: 1;
              color: white;
            }
          }
        `}</style>
      </div>
    </>
  );
}
