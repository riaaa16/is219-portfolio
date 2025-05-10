"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import Footer from "@/components/Footer";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  function handleProjectCard(option: string) {
    router.push(`/projects?option=${option}`);
  }

  return (
    <div className="min-h-screen flex flex-col">
      <main className="container mx-auto px-6 py-12 flex-grow">
        {/* About section with larger gap and smaller lightbulb */}
        <section className="mb-16 flex flex-col md:flex-row md:gap-16">
          <div className="flex-1 min-w-0 flex flex-col justify-center">
            <h1 className="font-pixel silkscreen-regular text-3xl mb-8">About Me</h1>
            <div className="prose">
              <p>Hi! I'm an aspiring web developer studying Web & Information Systems at NJIT.
                On this portfolio website, you'll find a few projects created using primarily JavaScript and React.
                Click on one of the cards below to view a project!</p>
              <br></br>
              <p>If you want to see more projects, please check out my <a target="_blank" href="https://github.com/riaaa16" style={{ color: '#1976d2', textDecoration: 'underline' }}>GitHub</a>.</p>
            </div>
          </div>
          <div className="flex-shrink-0 flex justify-center items-center mt-8 md:mt-0 md:w-[20%] w-full">
            <img
              src="/peta/animated lightbulb.png"
              alt="Animated pixel lightbulb"
              className="w-full max-w-[64px] h-auto"
              style={{ display: 'block' }}
            />
          </div>
        </section>

        {/* Card grid - Three colorful cards */}
        <section>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Yellow Card */}
            <div className="pixel-card pixel-card-yellow card-hover" onClick={() => handleProjectCard('data-visualization')} style={{ cursor: 'pointer' }}>
              <div className="pixel-card-header pixel-card-header-yellow">
                <span className="font-pixel text-2xl">Data Visualization</span>
              </div>
              <div className="pixel-card-content">
                <p>Look at D3 charts and mindmaps to explore the relation between food costs and minimum wage.</p>
              </div>
            </div>
            {/* Pink Card */}
            <div className="pixel-card pixel-card-pink card-hover" onClick={() => handleProjectCard('ai-chat')} style={{ cursor: 'pointer' }}>
              <div className="pixel-card-header pixel-card-header-pink">
                <span className="font-pixel text-2xl">AI Chat</span>
              </div>
              <div className="pixel-card-content">
                <p>Create a username and speak to Xenova's flan-t5-small text-to-text generation model!</p>
              </div>
            </div>
            {/* Blue Card */}
            <div className="pixel-card pixel-card-blue card-hover" onClick={() => handleProjectCard('2048')} style={{ cursor: 'pointer' }}>
              <div className="pixel-card-header pixel-card-header-blue">
                <span className="font-pixel text-2xl">2048</span>
              </div>
              <div className="pixel-card-content">
                <p>Play a recreation of the popular game 2048!</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
