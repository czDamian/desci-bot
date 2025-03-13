import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FaRobot, FaTelegram } from "react-icons/fa";
import { HiChevronDown } from "react-icons/hi";
import Logo from "./Logo";
const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);
  return (
    <div className="relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMwMGZmOTkiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzRjMC0yLjIgMS44LTQgNC00czQgMS44IDQgNC0xLjggNC00IDQtNC0xLjgtNC00eiIvPjwvZz48L2c+PC9zdmc+')] bg-repeat"></div>
      </div>

      <div className="container mx-auto px-6 py-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center text-center"
        >
          <div className="mb-6">
            <Logo size={150} />
          </div>

          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-teal-300">
              BIO/ACC
            </span>
            <span className="text-white"> Telegram AI Bot</span>
          </h1>

          <p className="mt-6 text-xl md:text-2xl max-w-3xl text-gray-300">
            Accelerate your DeSci knowledge and community engagement with our
            intelligent AI assistant
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <a
              href="https://t.me/desci_ai_bot"
              className="flex items-center justify-center gap-2 bg-gradient-to-r from-green-500 to-emerald-400 hover:from-green-600 hover:to-emerald-500 text-gray-900 font-bold py-3 px-8 rounded-full shadow-lg transform transition-all duration-300 hover:scale-105"
            >
              <FaTelegram className="text-xl" />
              <span>Try it on Telegram</span>
            </a>

            <a
              href="#features"
              className="flex items-center justify-center gap-2 bg-gray-800 hover:bg-gray-700 border border-green-500/30 text-white font-bold py-3 px-8 rounded-full shadow-lg transform transition-all duration-300 hover:scale-105"
            >
              <span>Explore Features</span>
              <HiChevronDown className="text-xl animate-bounce" />
            </a>
          </div>
        </motion.div>
      </div>

      {/* Floating Elements */}
      <div className="hidden md:block absolute top-1/4 left-10 w-20 h-20 bg-green-500/10 rounded-full blur-xl"></div>
      <div className="hidden md:block absolute bottom-1/4 right-10 w-32 h-32 bg-emerald-500/10 rounded-full blur-xl"></div>
    </div>
  );
};

export default Hero;
