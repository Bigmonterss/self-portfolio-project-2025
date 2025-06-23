import { FaLinkedin, FaGithub, FaInstagram, FaReact } from "react-icons/fa";
import { SiTailwindcss, SiJavascript } from "react-icons/si";

export const Footer = () => {
  return (
    <footer className="w-full bg-[rgba(10,10,10,0.8)] backdrop-blur-lg border-t border-white/5 shadow-lg mt-8">
      <div className="max-w-5xl mx-auto px-4 py-4">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <a href="#home" className="text-xl font-bold text-white transition-all hover:scale-110">
            <p className="flex items-center space-x-3 text-gray-300 justify-center md:justify-start">
              <span>Powered by</span>
              <FaReact size={24} />
              <SiJavascript size={24} />
              <SiTailwindcss size={24} />
            </p>
          </a>

          <div className="flex items-center space-x-6 text-white justify-center">
            <a
              href="https://www.linkedin.com/in/jayden-pham-6043812b5/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:-translate-y-0.5 transition-all hover:text-blue-500"
            >
              <FaLinkedin size={28} />
            </a>
            <a
              href="https://github.com/Bigmonterss"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:-translate-y-0.5 transition-all hover:text-blue-500"
            >
              <FaGithub size={28} />
            </a>
            <a
              href="https://www.instagram.com/bigmonters/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:-translate-y-0.5 transition-all hover:text-blue-500"
            >
              <FaInstagram size={28} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
