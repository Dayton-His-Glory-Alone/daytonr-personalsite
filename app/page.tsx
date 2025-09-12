'use client'
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react"; 

export default function Home() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const words = ["perform", "shine","sell","pace", "grow", "stand"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 1500); // Change word every 1.5 seconds

    return () => clearInterval(interval);
  }, [words.length]);

  return (
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
        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        {/* Hero Content */}
        <div className="relative z-10 px-6">
          
<h1 className="text-4xl font-bold mb-4">
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
  with Strategic Marketing & Custom Software
</h1>

<p className="text-lg max-w-2xl mx-auto mb-6">
  I help businesses like yours expand their digital footprint, automate
  processes, and build meaningful connections with customers.
</p>


          {/* Services button */}
          <Link
            href="services"
            className="inline-block bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition"
          >
            See What I Can Do for You
          </Link>
          <br />
          {/* Appointment button */}
          <a
            href="https://calendar.app.google/9QHdAtmbYtDjjcDM9"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 bg-[#039BE5] text-white px-6 py-3 rounded-lg hover:bg-[#0288d1] transition"
          >
            Book an Appointment
          </a>
        </div>
      </section>

      {/* What We've Done Section */}
      <section id="what-weve-done" className="py-16 px-8 bg-white">
        <h2 className="text-3xl font-semibold text-center mb-12">
          What We&apos;ve Done
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {/* First Card with Rotating Text */}
          <div className="bg-[#fffbe6] p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300 flex flex-col items-center">
            <div className="relative w-40 h-40 mb-4">
              <div className="relative w-full h-full">
                <svg className="w-full h-full" viewBox="0 0 200 200">
                  <defs>
                    <path 
                      id="circlePath" 
                      d="M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0" 
                    />
                  </defs>
                  
                  {/* Background circle */}
                  <circle cx="100" cy="100" r="75" fill="#f8fafc" />

                  {/* Center image */}
                  <image 
                    href="/calebjoefounders.png" 
                    x="0" 
                    y="0" 
                    width="200" 
                    height="200" 
                  />

                  {/* Rotating text */}
                  <g className="animate-spin-slow">
                    <text className="fill-green-600 font-bold text-[16px]">
                      <textPath href="#circlePath" startOffset="0%">
                        saved $300/year in hosting costs.               •
                      </textPath>
                    </text>
                  </g>
                </svg>
              </div>
            </div>
            <h3 className="text-xl font-bold text-center mb-2">
              Website Conversion For Truck Drivers Best
            </h3>
            <p className="text-sm text-center">
              Converted site hosting and reduced operational costs while improving performance.
            </p>
          </div>


          
          {/* Placeholder Card 1 */}
    <div className="bg-[#fffbe6] p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300 flex flex-col items-center">
            <div className="relative w-40 h-40 mb-4">
              <div className="relative w-full h-full">
                <svg className="w-full h-full" viewBox="0 0 200 200">
                  <defs>
                    <path 
                      id="circlePath" 
                      d="M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0" 
                    />
                  </defs>
                  
                  {/* Background circle */}
                  <circle cx="100" cy="100" r="75" fill="#f8fafc" />

                  {/* Center image */}
                  <image 
                    href="/moveit.png" 
                    x="0" 
                    y="0" 
                    width="200" 
                    height="200" 
                  />

                  {/* Rotating text */}
                  <g className="animate-spin-slow">
                    <text className="fill-white-600 font-bold text-[16px]">
                      <textPath href="#circlePath" startOffset="0%">
                        saved thousands in insurance costs               •
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
          </div>



          {/* Placeholder Card 2 */}
    <div className="bg-[#fffbe6] p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300 flex flex-col items-center">
            <div className="relative w-40 h-40 mb-4">
              <div className="relative w-full h-full">
                <svg className="w-full h-full" viewBox="0 0 200 200">
                  <defs>
                    <path 
                      id="circlePath" 
                      d="M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0" 
                    />
                  </defs>
                  
                  {/* Background circle */}
                  <circle cx="100" cy="100" r="75" fill="#f8fafc" />

                  {/* Center image */}
                  <image 
                    href="/cleaners.png" 
                    x="0" 
                    y="0" 
                    width="200" 
                    height="200" 
                  />

                  {/* Rotating text */}
                  <g className="animate-spin-slow">
                    <text className="fill-white-600 font-bold text-[16px]">
                      <textPath href="#circlePath" startOffset="0%">
                       increased leads and revenue              •
                      </textPath>
                    </text>
                  </g>
                </svg>
              </div>
            </div>
            <h3 className="text-xl font-bold text-center mb-2">
              Client communication app for commercial cleaners
            </h3>
            <p className="text-sm text-center">
              Helped businesses expand their reach and increase revenue through strategic solutions.
            </p>
          </div>

          
      </section>
      
      {/* Services / Projects */}
      <section id="services" className="py-16 px-8 bg-white">
        <h2 className="text-3xl font-semibold text-center mb-12">
          What I Offer
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {[
            {
              title: "Marketing Strategy",
              desc: "Craft campaigns that resonate. Ill help define your voice, grow your audience, and drive results.",
              icon: "/appicon3.png",
              href: "https://www.nussbaum.com",
            },
            {
              title: "Custom Software",
              desc: "From apps to automation, I develop tailored software solutions that make your work easier and more powerful.",
              icon: "/appicon.png",
              href: "https://www.myversevault.com",
            },
            {
              title: "Web Presence",
              desc: "Make your website work for you. I design, build, and manage sites that convert and captivate.",
              icon: "/appicon2.png",
              href: "https://www.truckdriversbest.com",
            },
          ].map((service) => (
            <a
              key={service.title}
              href={service.href}
              className="bg-[#fffbe6] p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300"
            >
              <Image
                src={service.icon}
                alt={service.title}
                width={60}
                height={60}
                className="mb-4 mx-auto"
              />
              <h3 className="text-xl font-bold text-center mb-2">
                {service.title}
              </h3>
              <p className="text-sm text-center">{service.desc}</p>
            </a>
          ))}
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
  );
}
