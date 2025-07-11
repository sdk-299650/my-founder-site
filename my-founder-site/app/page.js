import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-neutral-900 text-white px-6">
      {/* Hero */}
      <section className="text-center mb-20">
        <h1 className="text-5xl md:text-7xl font-bold mb-4">
          Hey—Welcome to SDK.
        </h1>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/sdklogo.png"
          alt="SDK Logo"
          width="300"
          height="150"
          className="mx-auto mb-6 rounded-l"
        />
        <p className="text-lg md:text-xl text-gray-300 max-w-xl mx-auto">
          I create AR/VR Ecosystems and AI-driven experience — from rapid prototypes to live WiFi solutions that connect people in unexpected places.
        </p>
      
      </section>

      <p className="text-md text-gray-400 max-w-lg mx-auto mt-4">
        SignalRise is just the start — stay up with my blog, future projects, and get in touch to build the next big thing together.
      </p>

      {/* Projects / Links */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-8">

        {/* SignalRise Card */}
        <div className="bg-neutral-800 p-8 rounded-lg hover:shadow-lg transition">
          <h2 className="text-2xl font-semibold mb-2">📡 SignalRise</h2>
          <p className="text-gray-400 mb-4">
            Immersive WiFi balloon network & advertising platform.
          </p>
          <Link href="/signalrise" className="text-blue-400 hover:underline">
            View Project →
          </Link>
        </div>

        {/* Blog Card */}
        <div className="bg-neutral-800 p-8 rounded-lg hover:shadow-lg transition">
          <h2 className="text-2xl font-semibold mb-2">📝 Blog</h2>
          <p className="text-gray-400 mb-4">
            Thoughts, founder lessons, quantum AR/VR scribbles.
          </p>
          <Link href="/blog" className="text-blue-400 hover:underline">
            Read Posts →
          </Link>
        </div>

        {/* Contact Card */}
        <div className="bg-neutral-800 p-8 rounded-lg hover:shadow-lg transition">
          <h2 className="text-2xl font-semibold mb-2">🤝 Connect</h2>
          <p className="text-gray-400 mb-4">
            Let’s collaborate. Reach me on LinkedIn, or shoot an idea my way.
          </p>
          <Link href="/contact" className="text-blue-400 hover:underline">
            Get In Touch →
          </Link>
        </div>

        {/* Future Project Card */}
        <div className="bg-neutral-800 p-8 rounded-lg hover:shadow-lg transition">
          <h2 className="text-2xl font-semibold mb-2">✨ More Coming Soon</h2>
          <p className="text-gray-400 mb-4">
            I’m always stacking ideas — from an AR-driven Mental Health Ecosystem, to playing with some Higgs boson ideas using AI pattern recognition capabilities.
            "Where we're going, we don't need roads."
        </p>
        <Link href="/blog" className="text-blue-400 hover:underline">
          Follow the Journey →
        </Link>
       </div>
      </section>
    </main>
  );
}
