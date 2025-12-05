import { Card } from '../components/ui/Card';
import { projects } from '../data/projects';

export function ProjectsPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-100 mb-4">
            My <span className="text-cyan-400">Projects</span>
          </h1>
          <div className="w-20 h-1 bg-cyan-500 rounded-full mb-4" />
          <p className="text-slate-400 max-w-2xl">
            A collection of projects I've worked on. Each project represents a unique
            challenge and learning experience.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Card
              key={project.id}
              title={project.title}
              description={project.description}
              image={project.image}
              technologies={project.technologies}
              githubUrl={project.githubUrl}
              demoUrl={project.demoUrl}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

