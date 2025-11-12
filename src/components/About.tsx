import { Figma, Palette, Layers, PenTool } from 'lucide-react';

const About = () => {
  const tools = [
    { name: 'Figma', icon: Figma },
    { name: 'Adobe XD', icon: Layers },
    { name: 'Illustrator', icon: PenTool },
    { name: 'Photoshop', icon: Palette },
  ];

  return (
    <section id="about" className="py-24 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#F1F5F9] mb-6">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#6366F1] to-[#A855F7] mx-auto rounded-full"></div>
        </div>

        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-lg text-[#CBD5E1] leading-relaxed">
            I'm a passionate UI/UX and Mobile App Designer dedicated to
            crafting intuitive and visually stunning digital experiences. With a
            keen eye for detail and a user-first approach, I transform complex
            problems into elegant solutions that users love.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {tools.map((tool, index) => (
            <div
              key={index}
              className="group bg-[#1E293B] p-8 rounded-2xl border border-[#6366F1]/20 hover:border-[#6366F1]/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#6366F1]/30"
            >
              <div className="flex flex-col items-center gap-4">
                <div className="p-4 bg-gradient-to-br from-[#6366F1]/20 to-[#A855F7]/20 rounded-xl group-hover:shadow-lg group-hover:shadow-[#6366F1]/50 transition-all duration-300">
                  <tool.icon
                    size={32}
                    className="text-[#6366F1] group-hover:text-[#A855F7] transition-colors duration-300"
                  />
                </div>
                <span className="text-[#F1F5F9] font-medium">{tool.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
