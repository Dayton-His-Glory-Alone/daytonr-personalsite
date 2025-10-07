'use client'
import Link from "next/link";
import React, { useEffect, useState } from "react"; 
import Header from "./components/Header";

export default function Home() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const words = ["perform.", "shine.","sell.","pace.", "grow.", "stand."];

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

          {/* Services button */}
          {/* Appointment button (Primary CTA) */}
<a
  href="https://calendar.app.google/9QHdAtmbYtDjjcDM9"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-block bg-[#039BE5] text-white px-8 py-4 rounded-lg shadow-lg hover:bg-[#0288d1] transition font-semibold text-lg"
>
  Book a Call
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
