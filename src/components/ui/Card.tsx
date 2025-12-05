import { GithubIcon, ExternalLinkIcon } from './Icons';

interface CardProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl: string;
  demoUrl?: string;
}

export function Card({
  title,
  description,
  image,
  technologies,
  githubUrl,
  demoUrl,
}: CardProps) {
  return (
    <div className="group relative bg-[#12121a] rounded-xl overflow-hidden border border-slate-800 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/10 hover:-translate-y-1">
      {/* Image */}
      <div className="aspect-video overflow-hidden bg-slate-900">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = 'https://placehold.co/600x400/12121a/22d3ee?text=Project';
          }}
        />
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-semibold text-slate-100 mb-2 group-hover:text-cyan-400 transition-colors">
          {title}
        </h3>
        <p className="text-slate-400 text-sm mb-4 line-clamp-3">{description}</p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 text-xs font-medium bg-slate-800 text-cyan-400 rounded"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-3">
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-slate-400 hover:text-cyan-400 transition-colors"
          >
            <GithubIcon className="w-5 h-5" />
            <span>Code</span>
          </a>
          {demoUrl && (
            <a
              href={demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-slate-400 hover:text-cyan-400 transition-colors"
            >
              <ExternalLinkIcon className="w-5 h-5" />
              <span>Demo</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

