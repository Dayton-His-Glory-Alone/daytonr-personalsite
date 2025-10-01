import Link from "next/link";
import { Megaphone, Monitor, Smartphone, Workflow, PenTool } from "lucide-react";

export default function ServicesPage() {
  const services = [
    {
      title: "Marketing Strategy",
      icon: <Megaphone className="w-12 h-12 text-indigo-600 mb-4" />,
      desc: "From brand voice to multi-channel campaigns, I help you reach the right people with the right message.",
      price: "Starts at $200",
    },
    {
      title: "Website Design",
      icon: <Monitor className="w-12 h-12 text-teal-600 mb-4" />,
      desc: "Beautiful, functional websites built to attract, engage, and convert — on any device.",
      price: "Starting at $300",
    },
    {
      title: "App Development",
      icon: <Smartphone className="w-12 h-12 text-purple-600 mb-4" />,
      desc: "I build custom mobile & web apps tailored to your business processes and customer needs.",
      price: "From $1500",
    },
    {
      title: "Automation & Workflows",
      icon: <Workflow className="w-12 h-12 text-rose-600 mb-4" />,
      desc: "Break through bottle-necks. From automating invoices to email! I will assess your business process and streamline your operations with smart automations that save time and reduce manual work.",
      price: "From $100",
    },
    {
      title: "Content Creation",
      icon: <PenTool className="w-12 h-12 text-amber-600 mb-4" />,
      desc: "Need Film or Graphics? I create content that connects and converts.",
      price: "Starting at $300 per month",
    },
  ];

  return (
    <div className="min-h-screen bg-[#f7f3e9] text-gray-800 px-6 py-12">
      <header className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">How I Help You Grow</h1>
        <p className="text-lg max-w-2xl mx-auto">
          Whether you are a small business, a startup, or an established brand, I
          offer solutions that help you connect better, run smarter, and grow
          faster.
        </p>

        <p className="text-lg max-w-2xl mx-auto">
          <b>Satisfaction guaranteed!</b> We build something you love/use or your
          money back.
        </p>
      </header>

      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto mb-20">
        {services.map((service) => (
          <div
            key={service.title}
            className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition"
          >
            {service.icon}
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p className="text-sm">{service.desc}</p>
            <p className="mt-4 font-semibold text-lg">{service.price}</p>
          </div>
        ))}
      </section>

      <section className="text-center">
        <h2 className="text-2xl font-bold mb-4">Let’s Build Something Great</h2>
        <p className="mb-6">
          Reach out today and lets talk about how I can help your business
          thrive.
        </p>
        <Link
          href="mailto:dayton@letsoutstand.com"
          className="inline-block bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition"
        >
          Contact Me
        </Link>
      </section>
    </div>
  );
}
