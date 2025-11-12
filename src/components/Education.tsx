import { Briefcase, GraduationCap } from 'lucide-react';

const Education = () => {
  const timeline = [
    {
      year: '2014–2018',
      title: 'Senior UI/UX Designer',
      company: 'PS Present',
      icon: Briefcase,
      description: 'Led design initiatives for multiple client projects',
    },
    {
      year: '2018–Present',
      title: 'Lead Product Designer',
      company: 'Creative Agency',
      icon: Briefcase,
      description: 'Managing design team and product strategy',
    },
    {
      year: '2010–2014',
      title: 'Bachelor of Design',
      company: 'Design University',
      icon: GraduationCap,
      description: 'Specialized in Digital Media and Interaction Design',
    },
  ];

  return (
    <section id="education" className="py-24 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#F1F5F9] mb-6">
            Education & Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#6366F1] to-[#A855F7] mx-auto rounded-full"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {timeline.map((item, index) => (
              <div key={index} className="relative group">
                <div className="flex gap-6">
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#6366F1]/20 to-[#A855F7]/20 rounded-xl flex items-center justify-center border-2 border-[#6366F1]/50 group-hover:border-[#6366F1] group-hover:shadow-lg group-hover:shadow-[#6366F1]/50 transition-all duration-300 z-10">
                      <item.icon
                        size={24}
                        className="text-[#6366F1] group-hover:text-[#A855F7] transition-colors duration-300"
                      />
                    </div>
                    {index < timeline.length - 1 && (
                      <div className="w-0.5 h-full bg-gradient-to-b from-[#6366F1]/50 to-transparent mt-2"></div>
                    )}
                  </div>

                  <div className="flex-1 pb-12">
                    <div className="bg-[#1E293B] p-6 rounded-2xl border border-[#6366F1]/20 group-hover:border-[#6366F1]/50 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-[#6366F1]/30">
                      <span className="text-[#6366F1] text-sm font-medium">
                        {item.year}
                      </span>
                      <h3 className="text-xl font-bold text-[#F1F5F9] mt-2 mb-1">
                        {item.title}
                      </h3>
                      <p className="text-[#A855F7] font-medium mb-2">
                        {item.company}
                      </p>
                      <p className="text-[#CBD5E1]">{item.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
