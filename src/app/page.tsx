import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto space-y-16 pt-20 px-4">
        {/* Hero Section with solid colored heading instead of gradient */}
        <div className="text-center space-y-6 max-w-[800px] mx-auto">
          <h1 className="font-mono tracking-tighter text-tropical-indigo-600">
            Creative Code. Authentic Solutions.
          </h1>
          <p className="text-lg text-medium-contrast max-w-2xl mx-auto">
            Welcome to my portfolio—where creativity meets technical excellence. I'm passionate about building thoughtful, accessible software solutions that solve real problems.
          </p>
          <div className="flex flex-wrap gap-4 justify-center pt-4">
            <Button variant="tropical" size="lg" className="text-base">
              View Projects
            </Button>
            <Button variant="outline-asparagus" size="lg" className="text-base">
              Explore Playground
            </Button>
          </div>
        </div>

        {/* Core Principles Section - Using different brand color for each card */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-8">
          <Card variant="tropical" className="card-hover">
            <CardHeader>
              <CardTitle className="font-mono tracking-tight text-tropical-indigo-700">Creativity</CardTitle>
              <CardDescription>Original ideas through code and design</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-medium-contrast">
                I bring fresh perspectives to technical challenges, experimenting with new approaches and technologies to create unique solutions.
              </p>
            </CardContent>
          </Card>

          <Card variant="asparagus" className="card-hover">
            <CardHeader>
              <CardTitle className="font-mono tracking-tight text-asparagus-700">Technical Excellence</CardTitle>
              <CardDescription>Dedication to quality and craft</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-medium-contrast">
                I believe in writing clean, maintainable code and creating experiences that are both beautiful and functional for all users.
              </p>
            </CardContent>
          </Card>

          <Card variant="coral" className="card-hover">
            <CardHeader>
              <CardTitle className="font-mono tracking-tight text-light-coral-700">Continuous Growth</CardTitle>
              <CardDescription>Always learning, always evolving</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-medium-contrast">
                My portfolio reflects my journey as a developer—showcasing not just completed work, but my process, learning, and evolution over time.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Featured Projects Section with solid colored heading instead of gradient */}
        <div className="text-center space-y-8 py-16">
          <h2 className="font-mono tracking-tighter text-asparagus-600 max-w-3xl mx-auto">
            Explore My Creative Process
          </h2>
          <p className="text-lg text-medium-contrast max-w-2xl mx-auto">
            Dive into my projects and experiments to see how I approach problems, implement solutions, and continuously refine my craft.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button variant="asparagus" size="lg" className="text-base">
              Visit the Playground
            </Button>
            <Button variant="outline-coral" size="lg" className="text-base">
              Learn More About Me
            </Button>
          </div>
        </div>

        {/* Final CTA Section with yet another color combination */}
        <div className="bg-vanilla-50 rounded-xl p-8 text-center">
          <h3 className="text-2xl font-mono tracking-tight text-charcoal-700 mb-4">Ready to Work Together?</h3>
          <p className="text-medium-contrast max-w-xl mx-auto mb-6">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
          <Button variant="coral" size="lg">
            Get in Touch
          </Button>
        </div>
      </main>
    </div>
  );
}
