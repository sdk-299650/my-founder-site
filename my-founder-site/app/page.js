import Card from "./components/Card";

export default function Home() {
  return (
    <main className="bg-black text-white min-h-screen px-6 py-16">
      {/* Hero Section */}
      <section className="text-center max-w-4xl mx-auto">
        <h1 className="text-6xl font-extrabold leading-tight mb-4">
          Welcome to SDK.
        </h1>
        <img
          src="/sdklogo.png"
          alt="SDK Logo"
          className="mx-auto mb-6"
          width="280"
        />
        <p className="text-lg text-gray-300 mb-6">
          I create AR/VR ecosystems and AI-driven experiences — from rapid
          prototyping to live WiFi solutions that connect people in unexpected
          places.
        </p>
        
      </section>

      {/* Card Grid */}
      <section className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-8">
        <Card
  title="SignalRise"
  description="Immersive WiFi balloon network & advertising platform."
  icon="📡"
  link="https://sdk-space.netlify.app/signalrise"
  linkLabel="Explore SignalRise →"
  bgImage="/SigRiseHardy.png"
/>

<Card
  title="🧠 Blog"
  description="Thoughts, founder lessons, quantum AR/VR scribbles."
  link="/blog"
  linkLabel="Read Posts →"
  bgImage="/blog.bg.png"
/>

<Card
  title="🤝 Connect"
  description="Let’s collaborate. Reach me on LinkedIn, YouTube, or shoot an idea my way."
  link="/contact"
  linkLabel="Get In Touch →"
  bgImage="/connect-idea.png"
/>

<Card
  title="📽️ YouTube"
  description="SDK music, projects, and ongoing footage of the journey."
  link="https://youtube.com/@SDK-z6v"
  linkLabel="Watch Now →"
  bgImage="/youtube.jpg"
/>

<Card
  title="More Coming Soon"
  description="I’m always stacking ideas — from an AR-driven Mental Health Ecosystem, to playing with some Higgs boson ideas."
  icon="⚡"
  linkLabel="Stay Tuned →"
  bgImage="/future.png"
/>

      </section>
      <div className="bg-gray-900 rounded-xl p-6 shadow-lg mt-10">
  <h3 className="text-xl font-bold text-white mb-2">
    🎧 Now Playing: <span className="text-blue-400">All Among Us</span>
  </h3>

  <audio controls loop className="w-full mt-2 rounded">
    <source src="/all-among-us.mp3" type="audio/mpeg" />
    Your browser does not support the audio element.
  </audio>
</div>


    </main>
  );
}
