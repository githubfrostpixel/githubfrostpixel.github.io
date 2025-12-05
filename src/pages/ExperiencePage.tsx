import { experiences, technicalSkills } from '../data/experience';

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

        {/* Experience Cards */}
        <div className="space-y-8">
          {experiences.map((exp) => (
            <div
              key={exp.id}
              className="bg-[#12121a] rounded-xl border border-slate-800 overflow-hidden hover:border-cyan-500/30 transition-colors"
            >
              {/* Header */}
              <div className="p-6 border-b border-slate-800">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                  <div>
                    <h2 className="text-2xl font-bold text-slate-100">{exp.title}</h2>
                    <p className="text-cyan-400 font-medium">{exp.company}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-slate-300 font-medium">{exp.period}</p>
                    <p className="text-slate-500 text-sm">{exp.location} | {exp.type}</p>
                  </div>
                </div>
                <p className="text-slate-400 mt-4">{exp.description}</p>
              </div>

              {/* Achievements */}
              <div className="p-6">
                <h3 className="text-lg font-semibold text-slate-100 mb-4">Key Achievements</h3>
                <ul className="space-y-3">
                  {exp.achievements.map((achievement, index) => (
                    <li key={index} className="flex gap-3 text-slate-400">
                      <span className="text-cyan-400 mt-1 flex-shrink-0">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>

                {/* Skills used */}
                <div className="mt-6 pt-6 border-t border-slate-800">
                  <h4 className="text-sm font-medium text-slate-500 mb-3">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 text-sm font-medium bg-cyan-500/10 text-cyan-400 rounded-full border border-cyan-500/20"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Technical Skills Section */}
        <div className="mt-16 bg-[#12121a] rounded-xl p-8 border border-slate-800">
          <h2 className="text-2xl font-semibold text-slate-100 mb-8">
            Technical Skills
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-cyan-400 font-medium mb-3 flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
                Languages
              </h3>
              <div className="flex flex-wrap gap-2">
                {technicalSkills.languages.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 text-sm bg-slate-800 text-slate-300 rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-cyan-400 font-medium mb-3 flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
                Frameworks & Libraries
              </h3>
              <div className="flex flex-wrap gap-2">
                {technicalSkills.frameworks.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 text-sm bg-slate-800 text-slate-300 rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-cyan-400 font-medium mb-3 flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Tools & Platforms
              </h3>
              <div className="flex flex-wrap gap-2">
                {technicalSkills.tools.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 text-sm bg-slate-800 text-slate-300 rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-cyan-400 font-medium mb-3 flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
                Domain Expertise
              </h3>
              <div className="flex flex-wrap gap-2">
                {technicalSkills.domains.map((skill) => (
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
