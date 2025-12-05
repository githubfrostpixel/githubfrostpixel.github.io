import { Button } from '../components/ui/Button';

export function HomePage() {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/hero-bg.jpg')",
        }}
      >
        {/* Fallback gradient if no image */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />
      </div>

      {/* Gradient Overlay - Black at top fading to transparent */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f] via-[#0a0a0f]/60 to-transparent" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-slate-100 tracking-tight mb-4">
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            [Your Name]
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-slate-400 mb-8 max-w-2xl">
          [Your Role] | Building elegant solutions to complex problems
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Button to="/projects" variant="primary">
            View Projects
          </Button>
          <Button to="/contact" variant="outline">
            Contact Me
          </Button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-slate-400 flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-cyan-400 rounded-full animate-pulse" />
          </div>
        </div>
      </div>
    </div>
  );
}

