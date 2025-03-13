import { FaTelegram, FaTwitter } from "react-icons/fa";
import { HiGlobe } from "react-icons/hi";

const Footer = () => {
  return (
    <footer className="py-12 bg-gray-900 border-t border-gray-800">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold text-green-400">
              BIO/ACC AI Bot
            </h2>
            <p className="text-gray-400 mt-2">
              Accelerating DeSci knowledge and community engagement
            </p>
          </div>

          <div className="flex space-x-6">
            <a
              href="#"
              className="text-gray-400 hover:text-green-400 transition-colors"
            >
              <FaTelegram className="text-2xl" />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-green-400 transition-colors"
            >
              <FaTwitter className="text-2xl" />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-green-400 transition-colors"
            >
              <HiGlobe className="text-2xl" />
            </a>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500 text-sm">
          <p>
            © {new Date().getFullYear()} BIO/ACC AI Bot. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
