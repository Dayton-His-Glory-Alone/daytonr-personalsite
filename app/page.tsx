import Image from "next/image";

const posts = [
  { id: 1, title: "Failure", content: "Failure means you are trying to do something." },
  { id: 2, title: "Legacy", content: "When I die, the only thing I want people to say is... I loved Jesus, I loved my wife, and I loved others." },
];

export default function Home() {
  return (
    <div className="min-h-screen p-8 bg-[#f7f3e9]">
      <header className="text-center mb-10">
        <Image
          src="/next.svg"
          alt="logo"
          width={180}
          height={38}
          priority
        />
        <h1 className="text-2xl font-bold mt-4">Blog</h1>
      </header>

      <main className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <div
            key={post.id}
            className="bg-yellow-300 shadow-md p-4 rounded-lg transform rotate-[-2deg] hover:rotate-0 transition-transform"
            style={{
              boxShadow: "4px 4px 8px rgba(0, 0, 0, 0.2)",
            }}
          >
            <h2 className="text-lg font-semibold mb-2">{post.title}</h2>
            <p className="text-sm text-gray-800">{post.content}</p>
          </div>
        ))}
      </main>

      <footer className="text-center mt-10">
      </footer>
    </div>
  );
}
