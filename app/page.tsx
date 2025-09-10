import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { useEffect } from "react";

// Extend the Window type so TS stops complaining about `window.calendar`
declare global {
  interface Window {
    calendar?: {
      schedulingButton: {
        load: (options: {
          url: string;
          color?: string;
          label?: string;
          target: HTMLElement | null;
        }) => void;
      };
    };
  }
}

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f7f3e9] text-gray-800">
      {/* Hero Section */}
      <section className="text-center py-16 px-6">
        <h1 className="text-4xl font-bold mb-4">
          Grow Your Business with Strategic Marketing & Custom Software
        </h1>
        <p className="text-lg max-w-2xl mx-auto">
          I help businesses like yours expand their digital footprint, automate
          processes, and build meaningful connections with customers.
        </p>
        <Link
          href="services"
          className="inline-block mt-6 bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition"
        >
          See What I Can Do for You
        </Link>
      </section>

      {/* Services / Projects */}
      <section id="services" className="py-16 px-8 bg-white">
        <h2 className="text-3xl font-semibold text-center mb-12">What I Offer</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {[
            {
              title: "Marketing Strategy",
              desc: "Craft campaigns that resonate. I’ll help define your voice, grow your audience, and drive results.",
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

      {/* Google Calendar Scheduling Button */}
      <div className="flex justify-center mt-10 mb-6">
        <div id="calendar-button" className="scale-110"></div>
      </div>

      <Script
        src="https://calendar.google.com/calendar/scheduling-button-script.js"
        strategy="afterInteractive"
        onLoad={() => {
          if (window?.calendar?.schedulingButton) {
            window.calendar.schedulingButton.load({
              url: "https://calendar.google.com/calendar/appointments/schedules/AcZssZ3oCD3WvYeVh1Vm7-ONpzN9zxpOfBC2UtfkL0jslYM4GclsH6r52G8SYYOYQZ8D8oMt1Aw6v0eO?gv=true",
              color: "#039BE5",
              label: "📅 Book a Call",
              target: document.getElementById("calendar-button"),
            });
          }
        }}
      />

      {/* Blog Section */}
      <section className="text-center py-16 px-6">
        <h2 className="text-3xl font-semibold mb-8">Latest Thought</h2>
        <Link href="/blog">
          <div className="cursor-pointer inline-block bg-yellow-300 p-6 rounded-lg shadow-md transform rotate-[-2deg] hover:rotate-0 transition-transform max-w-md">
            <h3 className="text-lg font-bold mb-2">Falling</h3>
            <p className="text-sm">
              When you fall: get up, get up, and get up again. Don’t let
              bitterness and regret overtake you.
            </p>
            <p className="mt-3 text-xs underline text-gray-700">
              Read all notes →
            </p>
          </div>
        </Link>
      </section>

      {/* Footer */}
      <footer className="text-center py-10 px-6 bg-[#f0ede6]">
        <p className="text-sm">Ready to take your brand further?</p>
        <a
          href="mailto:youremail@example.com"
          className="text-lg font-medium underline hover:text-black"
        >
          Let’s Connect
        </a>
        <p className="mt-4 text-xs text-gray-500">
          © {new Date().getFullYear()} Your Name. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
