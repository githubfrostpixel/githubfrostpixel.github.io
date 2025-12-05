import { TimelineItem } from '../components/ui/Timeline';
import { experiences } from '../data/experience';

export function ExperiencePage() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-100 mb-4">
            Experience & <span className="text-cyan-400">Skills</span>
          </h1>
          <div className="w-20 h-1 bg-cyan-500 rounded-full mb-4" />
          <p className="text-slate-400 max-w-2xl">
            My professional journey and the skills I've developed along the way.
          </p>
        </div>

        {/* Timeline */}
        <div className="mt-8">
          {experiences.map((exp, index) => (
            <TimelineItem
              key={exp.id}
              title={exp.title}
              company={exp.company}
              period={exp.period}
              description={exp.description}
              skills={exp.skills}
              isLast={index === experiences.length - 1}
            />
          ))}
        </div>

        {/* All Skills Section */}
        <div className="mt-16 bg-[#12121a] rounded-xl p-8 border border-slate-800">
          <h2 className="text-2xl font-semibold text-slate-100 mb-6">
            Technical Skills
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h3 className="text-cyan-400 font-medium mb-3">Languages</h3>
              <div className="flex flex-wrap gap-2">
                {['JavaScript', 'TypeScript', 'Python', 'Java', 'C#', 'SQL'].map(
                  (skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 text-sm bg-slate-800 text-slate-300 rounded-full"
                    >
                      {skill}
                    </span>
                  )
                )}
              </div>
            </div>
            <div>
              <h3 className="text-cyan-400 font-medium mb-3">Frameworks</h3>
              <div className="flex flex-wrap gap-2">
                {['React', 'Node.js', 'ASP.NET', 'Spring Boot', 'FastAPI'].map(
                  (skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 text-sm bg-slate-800 text-slate-300 rounded-full"
                    >
                      {skill}
                    </span>
                  )
                )}
              </div>
            </div>
            <div>
              <h3 className="text-cyan-400 font-medium mb-3">Tools & Others</h3>
              <div className="flex flex-wrap gap-2">
                {['Git', 'Docker', 'AWS', 'PostgreSQL', 'MongoDB'].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 text-sm bg-slate-800 text-slate-300 rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

