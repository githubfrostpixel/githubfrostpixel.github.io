interface TimelineItemProps {
  title: string;
  company: string;
  period: string;
  description: string;
  skills: string[];
  isLast?: boolean;
}

export function TimelineItem({
  title,
  company,
  period,
  description,
  skills,
  isLast,
}: TimelineItemProps) {
  return (
    <div className="relative pl-8 pb-8 group">
      {/* Vertical Line */}
      {!isLast && (
        <div className="absolute left-[11px] top-6 w-[2px] h-full bg-slate-800 group-hover:bg-cyan-500/30 transition-colors" />
      )}

      {/* Dot */}
      <div className="absolute left-0 top-1.5 w-6 h-6 rounded-full bg-slate-800 border-2 border-cyan-500 group-hover:bg-cyan-500/20 transition-colors flex items-center justify-center">
        <div className="w-2 h-2 rounded-full bg-cyan-500" />
      </div>

      {/* Content */}
      <div className="bg-[#12121a] rounded-xl p-6 border border-slate-800 hover:border-cyan-500/30 transition-all duration-300">
        {/* Period */}
        <span className="text-sm text-cyan-400 font-medium">{period}</span>

        {/* Title & Company */}
        <h3 className="text-xl font-semibold text-slate-100 mt-1">{title}</h3>
        <p className="text-slate-400">{company}</p>

        {/* Description */}
        <p className="text-slate-400 text-sm mt-3">{description}</p>

        {/* Skills */}
        <div className="flex flex-wrap gap-2 mt-4">
          {skills.map((skill) => (
            <span
              key={skill}
              className="px-3 py-1 text-xs font-medium bg-cyan-500/10 text-cyan-400 rounded-full border border-cyan-500/20"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

