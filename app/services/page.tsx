import Image from "next/image";
import Link from "next/link";

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-[#f7f3e9] text-gray-800 px-6 py-12">
      <header className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">How I Help You Grow</h1>
        <p className="text-lg max-w-2xl mx-auto">
          Whether youre a small business, a startup, or an established brand, I offer solutions that help you
          connect better, run smarter, and grow faster.
        </p>
      </header>

      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto mb-20">
        {[
          {
            title: "Marketing Strategy",
            icon: "/icons/marketing.png",
            desc: "From brand voice to multi-channel campaigns, I help you reach the right people with the right message.",
            price: "Starts at $500"
          },
          {
            title: "Website Design",
            icon: "/icons/web.png",
            desc: "Beautiful, functional websites built to attract, engage, and convert — on any device.",
            price: "Starting at $1000"
          },
          {
            title: "App Development",
            icon: "/icons/app.png",
            desc: "I build custom mobile & web apps tailored to your business processes and customer needs.",
            price: "From $1500"
          },
          {
            title: "Automation & Workflows",
            icon: "/icons/automation.png",
            desc: "Streamline your operations with smart automations that save time and reduce manual work.",
            price: "From $800"
          },
          {
            title: "Content Creation",
            icon: "/icons/content.png",
            desc: "Need blog posts, graphics, or social media content? I create content that connects and converts.",
            price: "Starting at $300 per month"
          },
          {
            title: "SEO & Analytics",
            icon: "/icons/seo.png",
            desc: "Get discovered. I optimize your site and content to rank better and measure what matters.",
            price: "Starting at $400"
          },
        ].map((service) => (
          <div key={service.title} className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition">
            <Image
              src={service.icon}
              alt={service.title}
              width={60}
              height={60}
              className="mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p className="text-sm">{service.desc}</p>
            <p className="mt-4 font-semibold text-lg">{service.price}</p>
          </div>
        ))}
      </section>

      <section className="text-center">
        <h2 className="text-2xl font-bold mb-4">Let’s Build Something Great</h2>
        <p className="mb-6">Reach out today and lets talk about how I can help your business thrive.</p>
        <Link href="mailto:youremail@example.com" className="inline-block bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition">
          Contact Me
        </Link>
      </section>
    </div>
  );
}
