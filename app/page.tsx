import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen p-8 bg-[#f7f3e9]">
      <header className="text-center mb-10">
        <h1 className="text-2xl font-bold mt-4">EXPAND YOUR REACH</h1>
      </header>

      <hr className="mb-10 border-gray-400" />

      <header className="text-center mb-6">
        <h1 className="text-2xl font-bold mt-4">Blog</h1>
      </header>

      <main className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 gap-6 mb-12">
        <Link href="/blog">
          <div
            className="cursor-pointer bg-yellow-300 shadow-md p-4 rounded-lg transform rotate-[-2deg] hover:rotate-0 transition-transform"
            style={{
              boxShadow: "4px 4px 8px rgba(0, 0, 0, 0.2)",
            }}
          >
            <h2 className="text-lg font-semibold mb-2">Latest Thought</h2>
            <p className="text-sm text-gray-800">
              When you fall: get up, get up, and get up again. Don't let bitterness and regret overtake you.
            </p>
            <p className="mt-2 text-xs text-gray-600 underline">Read all notes →</p>
          </div>
        </Link>
      </main>

      <footer className="text-center mt-10">
        <h2 className="text-xl font-semibold mb-4">Projects</h2>
        <div className="flex flex-wrap justify-center items-center gap-6">
          {[
            {
              href: "https://www.myversevault.com",
              src: "/appicon.png",
              title: "VerseVault",
              desc: "Scripture Memory App designed in Flutter",
            },
            {
              href: "https://www.nussbaum.com",
              src: "/appicon3.png",
              title: "Nussbaum",
              desc: "Maintain website and online presence",
            },
            {
              href: "https://www.truckdriversbest.com",
              src: "/appicon2.png",
              title: "Truck Drivers Best",
              desc: "Site conversion to Wordpress",
            },
          ].map((project) => (
            <div className="text-center" key={project.title}>
              <a href={project.href}>
                <Image
                  src={project.src}
                  alt={project.title}
                  width={80}
                  height={80}
                  className="rounded-lg shadow-lg"
                />
              </a>
              <p className="mt-2 font-medium">{project.title}</p>
              <p className="text-sm text-gray-600">{project.desc}</p>
            </div>
          ))}
        </div>
      </footer>
    </div>
  );
}
