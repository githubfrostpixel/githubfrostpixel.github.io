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
          </div>

          {/* Bio */}
          <div className="md:col-span-2 space-y-6">
            <div className="bg-[#12121a] rounded-xl p-6 border border-slate-800">
              <h2 className="text-2xl font-semibold text-slate-100 mb-4">
                Hello! I'm <span className="text-cyan-400">[Your Name]</span>
              </h2>
              <div className="space-y-4 text-slate-400">
                <p>
                  [Write your introduction here. Talk about who you are, what you do, 
                  and what drives you. This is your chance to make a personal connection 
                  with visitors.]
                </p>
                <p>
                  [Add more details about your background, education, or journey into 
                  your field. What makes you unique? What are you passionate about?]
                </p>
                <p>
                  [Mention any hobbies, interests outside of work, or personal goals. 
                  This helps humanize your profile and makes you more relatable.]
                </p>
              </div>
            </div>

            {/* Quick Facts */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-[#12121a] rounded-xl p-4 border border-slate-800">
                <p className="text-sm text-slate-500 mb-1">Location</p>
                <p className="text-slate-100">[Your City, Country]</p>
              </div>
              <div className="bg-[#12121a] rounded-xl p-4 border border-slate-800">
                <p className="text-sm text-slate-500 mb-1">Education</p>
                <p className="text-slate-100">[Your Degree/University]</p>
              </div>
              <div className="bg-[#12121a] rounded-xl p-4 border border-slate-800">
                <p className="text-sm text-slate-500 mb-1">Experience</p>
                <p className="text-slate-100">[X+ Years]</p>
              </div>
              <div className="bg-[#12121a] rounded-xl p-4 border border-slate-800">
                <p className="text-sm text-slate-500 mb-1">Focus</p>
                <p className="text-slate-100">[Your Specialty]</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

