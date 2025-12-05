export function AboutPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-100 mb-4">
            About <span className="text-cyan-400">Me</span>
          </h1>
          <div className="w-20 h-1 bg-cyan-500 rounded-full" />
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Profile Image */}
          <div className="md:col-span-1">
            <div className="aspect-square rounded-2xl overflow-hidden bg-slate-800 border border-slate-700">
              <img
                src="/images/profile.jpg"
                alt="Profile"
                className="w-full h-full object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = 'https://placehold.co/400x400/12121a/22d3ee?text=Photo';
                }}
              />
            </div>
            {/* Quote */}
            <blockquote className="mt-4 text-center">
              <p className="text-slate-400 italic text-sm">
                『 Fulfilled people are just urban legend 』
              </p>
              <cite className="text-cyan-400 text-xs not-italic">- Shiro</cite>
            </blockquote>
          </div>

          {/* Bio */}
          <div className="md:col-span-2 space-y-6">
            <div className="bg-[#12121a] rounded-xl p-6 border border-slate-800">
              <h2 className="text-2xl font-semibold text-slate-100 mb-4">
                Hello! I'm <span className="text-cyan-400">Chau</span>
              </h2>
              <div className="space-y-4 text-slate-400">
                <p>
                  I'm a Software Engineer at Viettel High Tech, specializing in edge AI, 
                  real-time video processing, and high-performance embedded systems. I thrive 
                  on solving complex technical challenges and optimizing systems for maximum efficiency.
                </p>
                <p>
                  My work focuses on developing intelligent traffic monitoring solutions, 
                  from building custom storage systems to implementing computer vision pipelines 
                  that run on edge devices. I'm passionate about pushing the boundaries of what's 
                  possible on resource-constrained hardware.
                </p>
                <p>
                  When I'm not coding, you can find me exploring new technologies, working on side projects for fun, or sharpening my problem-solving skills on LeetCode.
                </p>
              </div>
            </div>

            {/* Quick Facts */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-[#12121a] rounded-xl p-4 border border-slate-800">
                <p className="text-sm text-slate-500 mb-1">Location</p>
                <p className="text-slate-100">Ha Noi, Viet Nam</p>
              </div>
              <div className="bg-[#12121a] rounded-xl p-4 border border-slate-800">
                <p className="text-sm text-slate-500 mb-1">Experience</p>
                <p className="text-slate-100">2+ Years</p>
              </div>
              <div className="bg-[#12121a] rounded-xl p-4 border border-slate-800">
                <p className="text-sm text-slate-500 mb-1">Focus</p>
                <p className="text-slate-100">Edge AI & Embedded Systems</p>
              </div>
              <div className="bg-[#12121a] rounded-xl p-4 border border-slate-800">
                <p className="text-sm text-slate-500 mb-1">TOEIC</p>
                <p className="text-slate-100">980 / 990</p>
              </div>
            </div>

            {/* Education */}
            <div className="bg-[#12121a] rounded-xl p-6 border border-slate-800">
              <h3 className="text-lg font-semibold text-slate-100 mb-4 flex items-center gap-2">
                <svg className="w-5 h-5 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                </svg>
                Education
              </h3>
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-lg bg-white flex items-center justify-center flex-shrink-0 p-1">
                  <img 
                    src="/images/fpt_logo.png" 
                    alt="FPT University" 
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <p className="text-slate-100 font-medium">FPT University</p>
                  <p className="text-cyan-400 text-sm">Bachelor of Software Engineering</p>
                  <p className="text-slate-500 text-sm mt-1">Ha Noi, Vietnam</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

