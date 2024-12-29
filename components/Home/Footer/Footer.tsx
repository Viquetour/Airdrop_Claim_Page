import { FaTwitter, FaFacebookF, FaInstagram, FaLinkedinIn, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative w-full h-3 md:h-3 bg-gray-800 py-6 mt-0">
      {/* Icons Row */}
      <div className="flex justify-center items-center space-x-6">
        <a href="#" className="text-gray-200 hover:text-gray-300 transition duration-300">
          <FaTwitter className="w-6 h-3" />
        </a>
        <a href="#" className="text-gray-200 hover:text-gray-300 transition duration-300">
          <FaFacebookF className="w-6 h-3" />
        </a>
        <a href="#" className="text-gray-200 hover:text-gray-300 transition duration-300">
          <FaInstagram className="w-6 h-5" />
        </a>
        <a href="#" className="text-gray-200 hover:text-gray-300 transition duration-300">
          <FaLinkedinIn className="w-6 h-3" />
        </a>
        <a href="#" className="text-gray-200 hover:text-gray-300 transition duration-300">
          <FaGithub className="w-6 h-3" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
