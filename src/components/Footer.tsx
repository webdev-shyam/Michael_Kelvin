import {
  FaBehance,
  FaFacebook,
  FaGithub,
  FaInbox,
  FaInstagram,
} from "react-icons/fa";
import { FaX } from "react-icons/fa6";

const Footer = () => {
  const socials = [
    { icon: FaBehance, url: "https://www.behance.net/KeltrixxDesign" },
    {
      icon: FaInstagram,
      url: "https://www.instagram.com/kelvin_digitalspace?igsh=MXF6a2xhN3R0bzkyNQ==",
    },
    { icon: FaInbox, url: "mailto:okakpukelvin@gmail.com" },
    { icon: FaFacebook, url: "https://www.facebook.com/king.kelvin.9216/" },
    { icon: FaGithub, url: "https://github.com/Prodigy12x" },
    { icon: FaX, url: "https://x.com/next_prodigy12" },
  ];

  return (
    <footer className="py-12 px-6 lg:px-8 border-t border-[#6366F1]/10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center gap-6">
          <div className="flex gap-4">
            {socials.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#1E293B] border border-[#6366F1]/20 rounded-lg flex items-center justify-center text-[#6366F1] hover:border-[#6366F1]/50 hover:shadow-lg hover:shadow-[#6366F1]/50 hover:scale-110 transition-all duration-300"
              >
                <social.icon size={18} />
              </a>
            ))}
          </div>

          <p className="text-[#CBD5E1] text-center tracking-widest">
            © {new Date().getFullYear()} All Rights Reserved | Design and
            Developed by{" "}
            <span className="text-[#6366F1] ">Web Wise Agency</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
