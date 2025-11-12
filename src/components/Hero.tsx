import { ArrowRight, Mail } from "lucide-react";

const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-6 lg:px-8 pt-20">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-up mt-2">
           

            <h1 className="text-5xl lg:text-6xl font-bold text-[#F1F5F9] leading-tight">
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-[#6366F1] to-[#A855F7] bg-clip-text text-transparent">
                Michael Kelvin
              </span>
            </h1>

            <p className="text-lg text-[#CBD5E1] leading-relaxed max-w-xl">
              I create user-friendly interfaces and delightful digital
              experiences that connect people with technology in meaningful
              ways.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                onClick={() => scrollToSection("#projects")}
                className="group px-8 py-4 bg-gradient-to-r from-[#6366F1] to-[#A855F7] text-white rounded-2xl font-medium transition-all duration-300 hover:shadow-lg hover:shadow-[#6366F1]/50 hover:scale-105 flex items-center justify-center gap-2"
              >
                View My Work
                <ArrowRight
                  size={20}
                  className="group-hover:translate-x-1 transition-transform duration-300"
                />
              </button>

              <button
                onClick={() => scrollToSection("#contact")}
                className="px-8 py-4 border-2 border-[#6366F1] text-[#6366F1] rounded-2xl font-medium transition-all duration-300 hover:bg-[#6366F1]/10 hover:shadow-lg hover:shadow-[#6366F1]/30 flex items-center justify-center gap-2"
              >
                <Mail size={20} />
                Contact Me
              </button>
            </div>
          </div>

          {/* <div className="flex justify-center lg:justify-end animate-fade-up-delay">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#6366F1] to-[#A855F7] rounded-3xl blur-xl opacity-75 group-hover:opacity-100 transition duration-300"></div>
              <div className="relative bg-[#1E293B] rounded-3xl p-8 border border-[#6366F1]/20">
                <div className="w-64 h-64 lg:w-80 lg:h-80 bg-gradient-to-br from-[#6366F1]/20 to-[#A855F7]/20 rounded-2xl flex items-center justify-center">
                  <div className="text-[#CBD5E1] text-center">
                    <div className="w-48 h-48 lg:w-64 lg:h-64 bg-[#0F172A] rounded-2xl flex items-center justify-center">
                      <span className="text-6xl">
                        <img src="assets/michael_kelvin.jpg" alt="Michael_kelvin" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}

          <div className="relative animate-fade-in-delay">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl hover:shadow-[0_0_50px_rgba(122,62,240,0.3)] transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-[#7A3EF0]/20 to-[#3AA0FF]/20 z-10"></div>
              <img
                src="assets/michael_kelvin.jpg"
                alt="Michael_kelvin"
                className="w-full h-[35rem] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
