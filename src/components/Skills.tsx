import { Smartphone, Palette, Layout, Zap, Search, Sparkles } from 'lucide-react';

const Skills = () => {
  const skills = [
    {
      title: 'UI Design',
      icon: Palette,
      description: 'Creating beautiful, intuitive interfaces',
    },
    {
      title: 'UX Research',
      icon: Search,
      description: 'Understanding user needs and behaviors',
    },
    {
      title: 'Wireframing',
      icon: Layout,
      description: 'Structuring content and user flows',
    },
    {
      title: 'Prototyping',
      icon: Zap,
      description: 'Building interactive design mockups',
    },
    {
      title: 'Interaction Design',
      icon: Sparkles,
      description: 'Crafting engaging micro-interactions',
    },
    {
      title: 'App UI',
      icon: Smartphone,
      description: 'Designing native mobile experiences',
    },
  ];

  return (
    <section id="skills" className="py-24 px-6 lg:px-8 bg-[#1E293B]/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#F1F5F9] mb-6">
            Skills
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#6366F1] to-[#A855F7] mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="group bg-[#0F172A] p-8 rounded-2xl border border-[#6366F1]/20 hover:border-[#6366F1]/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#6366F1]/30"
            >
              <div className="flex flex-col gap-4">
                <div className="w-16 h-16 bg-gradient-to-br from-[#6366F1]/20 to-[#A855F7]/20 rounded-xl flex items-center justify-center group-hover:shadow-lg group-hover:shadow-[#6366F1]/50 transition-all duration-300">
                  <skill.icon
                    size={28}
                    className="text-[#6366F1] group-hover:text-[#A855F7] transition-colors duration-300"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#F1F5F9] mb-2">
                    {skill.title}
                  </h3>
                  <p className="text-[#CBD5E1]">{skill.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
