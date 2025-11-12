import { ExternalLink } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce Mobile App',
      description: 'Modern shopping experience with seamless checkout flow',
      category: 'Mobile Design',
    },
    {
      title: 'SaaS Dashboard',
      description: 'Analytics platform with real-time data visualization',
      category: 'Web Design',
    },
    {
      title: 'Fitness Tracking App',
      description: 'Intuitive workout and nutrition tracking interface',
      category: 'Mobile Design',
    },
    {
      title: 'Banking Platform',
      description: 'Secure and user-friendly financial management system',
      category: 'Web Design',
    },
    {
      title: 'Social Media App',
      description: 'Engaging community platform with rich interactions',
      category: 'Mobile Design',
    },
    {
      title: 'Travel Booking Website',
      description: 'Seamless booking experience with immersive visuals',
      category: 'Web Design',
    },
  ];

  return (
    <section id="projects" className="py-24 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#F1F5F9] mb-6">
            Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#6366F1] to-[#A855F7] mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-[#1E293B] rounded-2xl overflow-hidden border border-[#6366F1]/20 hover:border-[#6366F1]/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#6366F1]/30"
            >
              <div className="aspect-video bg-gradient-to-br from-[#6366F1]/20 to-[#A855F7]/20 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#6366F1] to-[#A855F7] opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                <div className="text-6xl filter grayscale group-hover:grayscale-0 transition-all duration-300">
                  🎨
                </div>
              </div>

              <div className="p-6">
                <div className="mb-2">
                  <span className="text-xs text-[#6366F1] font-medium px-3 py-1 bg-[#6366F1]/10 rounded-full">
                    {project.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-[#F1F5F9] mb-2">
                  {project.title}
                </h3>
                <p className="text-[#CBD5E1] mb-4">{project.description}</p>
                <button className="group/btn flex items-center gap-2 text-[#6366F1] hover:text-[#A855F7] transition-colors duration-300 font-medium">
                  View Case Study
                  <ExternalLink
                    size={16}
                    className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform duration-300"
                  />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
