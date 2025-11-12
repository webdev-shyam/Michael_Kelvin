import { Monitor, Smartphone, Palette } from 'lucide-react';

const Services = () => {
  const services = [
    {
      title: 'UI/UX Design',
      icon: Palette,
      tagline: 'Crafting intuitive experiences that users love',
    },
    {
      title: 'Web Design',
      icon: Monitor,
      tagline: 'Building responsive and engaging websites',
    },
    {
      title: 'App Design',
      icon: Smartphone,
      tagline: 'Creating beautiful mobile experiences',
    },
  ];

  return (
    <section id="services" className="py-24 px-6 lg:px-8 bg-[#1E293B]/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#F1F5F9] mb-6">
            Services
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#6366F1] to-[#A855F7] mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-[#0F172A] p-10 rounded-2xl border border-[#6366F1]/20 hover:border-[#6366F1]/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#6366F1]/30 text-center"
            >
              <div className="flex flex-col items-center gap-6">
                <div className="w-20 h-20 bg-gradient-to-br from-[#6366F1]/20 to-[#A855F7]/20 rounded-2xl flex items-center justify-center group-hover:shadow-lg group-hover:shadow-[#6366F1]/50 transition-all duration-300">
                  <service.icon
                    size={36}
                    className="text-[#6366F1] group-hover:text-[#A855F7] transition-colors duration-300"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#F1F5F9] mb-3">
                    {service.title}
                  </h3>
                  <p className="text-[#CBD5E1]">{service.tagline}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
