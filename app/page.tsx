import Image from "next/image";
import Link from "next/link";

export default function Home() {
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
            Grow Your Business with Strategic Marketing & Custom Software
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
    </div>
  );
}
