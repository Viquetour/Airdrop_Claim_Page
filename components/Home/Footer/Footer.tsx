import { FaTwitter, FaFacebookF, FaInstagram, FaLinkedinIn, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative w-full bg-gray-900 border-t-2 border-gray-700 py-8 sm:py-10 md:py-12 px-3 sm:px-4 md:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Social Icons */}
        <div className="flex justify-center items-center gap-4 sm:gap-6 md:gap-8 mb-6 sm:mb-8">
          <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300" title="Twitter">
            <FaTwitter className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300" title="Facebook">
            <FaFacebookF className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300" title="Instagram">
            <FaInstagram className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300" title="LinkedIn">
            <FaLinkedinIn className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300" title="GitHub">
            <FaGithub className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
          </a>
        </div>
        
        {/* Divider */}
        <div className="h-px bg-gray-700 mb-6 sm:mb-8"></div>
        
        {/* Footer Text */}
        <div className="text-center space-y-2">
          <p className="text-gray-300 text-xs sm:text-sm md:text-base">
            © 2025 LiWU Panda. All rights reserved.
          </p>
          <p className="text-gray-400 text-xs sm:text-sm">
            Built on BNB Chain | Powered by LiwuPanda Team 🚀
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
