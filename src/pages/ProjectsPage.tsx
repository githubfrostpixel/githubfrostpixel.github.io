import { Card } from '../components/ui/Card';
import { projects, awards } from '../data/projects';
import { ExternalLinkIcon } from '../components/ui/Icons';

function TrophyIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C13.1 2 14 2.9 14 4V5H19C19.55 5 20 5.45 20 6V9C20 11.21 18.21 13 16 13H15.83C15.42 14.17 14.31 15 13 15V17H16C17.1 17 18 17.9 18 19V20C18 21.1 17.1 22 16 22H8C6.9 22 6 21.1 6 20V19C6 17.9 6.9 17 8 17H11V15C9.69 15 8.58 14.17 8.17 13H8C5.79 13 4 11.21 4 9V6C4 5.45 4.45 5 5 5H10V4C10 2.9 10.9 2 12 2ZM6 7V9C6 10.1 6.9 11 8 11H8.06C8.03 10.67 8 10.34 8 10V7H6ZM16 7H16V10C16 10.34 15.97 10.67 15.94 11H16C17.1 11 18 10.1 18 9V7H16Z"/>
    </svg>
  );
}

const placementColors = {
  first: 'from-yellow-400 to-amber-500',
  second: 'from-slate-300 to-slate-400',
  third: 'from-amber-600 to-amber-700',
  honorable: 'from-cyan-400 to-cyan-500',
};

const placementLabels = {
  first: 'First Prize',
  second: 'Second Prize',
  third: 'Third Prize',
  honorable: 'Honorable Mention',
};

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

        {/* Awards Section */}
        {awards.length > 0 && (
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-slate-100 mb-6 flex items-center gap-3">
              <TrophyIcon className="w-7 h-7 text-yellow-400" />
              Awards & Recognition
            </h2>
            <div className="grid gap-6">
              {awards.map((award) => (
                <div
                  key={award.id}
                  className="relative bg-[#12121a] rounded-xl border border-slate-800 overflow-hidden hover:border-yellow-500/30 transition-all group"
                >
                  {/* Gradient accent */}
                  <div className={`absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b ${placementColors[award.placement]}`} />
                  
                  <div className="p-6 pl-8">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                      <div className="flex-1">
                        {/* Placement Badge */}
                        <div className="flex items-center gap-3 mb-3">
                          <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-sm font-semibold bg-gradient-to-r ${placementColors[award.placement]} text-slate-900`}>
                            <TrophyIcon className="w-4 h-4" />
                            {placementLabels[award.placement]}
                          </span>
                          <span className="text-slate-500 text-sm">{award.year}</span>
                        </div>
                        
                        {/* Title & Competition */}
                        <h3 className="text-xl font-semibold text-slate-100 mb-1 group-hover:text-cyan-400 transition-colors">
                          {award.title}
                        </h3>
                        <p className="text-cyan-400 text-sm mb-3">{award.competition}</p>
                        
                        {/* Description */}
                        <p className="text-slate-400 text-sm">{award.description}</p>
                      </div>
                      
                      {/* Links */}
                      <div className="flex flex-col sm:flex-row gap-2">
                        {award.demoUrl && (
                          <a
                            href={award.demoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-slate-900 bg-cyan-500 hover:bg-cyan-400 rounded-lg transition-all whitespace-nowrap"
                          >
                            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                              <path d="M8 5v14l11-7z"/>
                            </svg>
                            Watch Demo
                          </a>
                        )}
                        {award.link && (
                          <a
                            href={award.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-slate-400 hover:text-cyan-400 bg-slate-800/50 hover:bg-cyan-500/10 rounded-lg border border-slate-700 hover:border-cyan-500/30 transition-all whitespace-nowrap"
                          >
                            <ExternalLinkIcon className="w-4 h-4" />
                            View Article
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Projects Section */}
        <div>
          <h2 className="text-2xl font-bold text-slate-100 mb-6">Projects</h2>
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
    </div>
  );
}
