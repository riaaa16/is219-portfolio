import Footer from "@/components/Footer";

export default function ProjectsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="container mx-auto px-6 py-12 flex-grow">
        <h1 className="font-pixel text-3xl mb-8 text-center">Projects</h1>
        <div className="prose mx-auto max-w-2xl text-center">
          <p>Welcome to my projects page! Here you will find a showcase of my creative and technical work. More coming soon.</p>
        </div>
      </main>
      <Footer />
    </div>
  );
}