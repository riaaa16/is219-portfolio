import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <main className="container mx-auto px-6 py-12 flex-grow">
        {/* About section with larger gap and smaller lightbulb */}
        <section className="mb-16 flex flex-col md:flex-row md:gap-16">
          <div className="flex-1 min-w-0 flex flex-col justify-center">
            <h1 className="font-pixel silkscreen-regular text-3xl mb-8">About Me</h1>
            <div className="prose">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, justo vel tincidunt luctus, nunc libero accumsan lacus, vitae tincidunt nisl mauris a elit.</p>
              <p>Nulla facilisi. Proin luctus, velit id commodo varius, urna velit tincidunt nunc, id faucibus mauris risus vel nisl.</p>
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
            <div className="pixel-card pixel-card-yellow card-hover">
              <div className="pixel-card-header pixel-card-header-yellow">
                <span className="font-pixel text-2xl">CARD NAME</span>
              </div>
              <div className="pixel-card-content">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, justo vel tincidunt luctus.</p>
              </div>
            </div>
            {/* Pink Card */}
            <div className="pixel-card pixel-card-pink card-hover">
              <div className="pixel-card-header pixel-card-header-pink">
                <span className="font-pixel text-2xl">CARD NAME</span>
              </div>
              <div className="pixel-card-content">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, justo vel tincidunt luctus.</p>
              </div>
            </div>
            {/* Blue Card */}
            <div className="pixel-card pixel-card-blue card-hover">
              <div className="pixel-card-header pixel-card-header-blue">
                <span className="font-pixel text-2xl">CARD NAME</span>
              </div>
              <div className="pixel-card-content">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, justo vel tincidunt luctus.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="container mx-auto px-6 py-8 text-sm text-gray-500 text-center">
        Viktoria Gaiser © {new Date().getFullYear()} &middot; <a href="mailto:vg435@njit.edu" className="underline hover:text-primary">vg435@njit.edu</a>
      </footer>
    </div>
  );
}
