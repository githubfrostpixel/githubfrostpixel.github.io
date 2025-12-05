import { GithubIcon, LinkedinIcon, LeetcodeIcon } from '../components/ui/Icons';
import { socialLinks } from '../data/social';

export function ContactPage() {
  const getIcon = (icon: string) => {
    switch (icon) {
      case 'github':
        return <GithubIcon className="w-8 h-8" />;
      case 'linkedin':
        return <LinkedinIcon className="w-8 h-8" />;
      case 'leetcode':
        return <LeetcodeIcon className="w-8 h-8" />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0f] pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-100 mb-4">
            Get In <span className="text-cyan-400">Touch</span>
          </h1>
          <div className="w-20 h-1 bg-cyan-500 rounded-full mb-4" />
          <p className="text-slate-400 max-w-2xl">
            Feel free to reach out if you want to collaborate, have questions, or just
            want to say hi!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="space-y-6">
            {/* Email */}
            <div className="bg-[#12121a] rounded-xl p-6 border border-slate-800 hover:border-cyan-500/30 transition-colors">
              <h3 className="text-lg font-semibold text-slate-100 mb-2">Email</h3>
              <a
                href="mailto:bachngocminhchau@gmail.com"
                className="text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                bachngocminhchau@gmail.com
              </a>
              <p className="text-sm text-slate-500 mt-2">
                Best way to reach me for professional inquiries.
              </p>
            </div>

            {/* Location */}
            <div className="bg-[#12121a] rounded-xl p-6 border border-slate-800">
              <h3 className="text-lg font-semibold text-slate-100 mb-2">Location</h3>
              <p className="text-slate-400">Ha Noi, Viet Nam</p>
              <p className="text-sm text-slate-500 mt-2">
                Open to remote opportunities worldwide.
              </p>
            </div>
          </div>

          {/* Social Links */}
          <div className="bg-[#12121a] rounded-xl p-6 border border-slate-800">
            <h3 className="text-lg font-semibold text-slate-100 mb-6">
              Connect With Me
            </h3>
            <div className="space-y-4">
              {socialLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-lg bg-slate-800/50 hover:bg-cyan-500/10 border border-transparent hover:border-cyan-500/30 transition-all group"
                >
                  <div className="text-slate-400 group-hover:text-cyan-400 transition-colors">
                    {getIcon(link.icon)}
                  </div>
                  <div>
                    <p className="font-medium text-slate-100 group-hover:text-cyan-400 transition-colors">
                      {link.name}
                    </p>
                    <p className="text-sm text-slate-500">View my profile</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Resume Download */}
        <div className="mt-8 bg-[#12121a] rounded-xl p-6 border border-slate-800 text-center">
          <h3 className="text-lg font-semibold text-slate-100 mb-2">
            Want my resume?
          </h3>
          <p className="text-slate-400 mb-4">
            Download my resume to learn more about my experience and qualifications.
          </p>
          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center gap-2 px-6 py-3 bg-cyan-500 text-slate-900 font-medium rounded-lg hover:bg-cyan-400 transition-colors"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            Download Resume
          </a>
        </div>
      </div>
    </div>
  );
}

