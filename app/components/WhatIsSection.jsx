import { FaFlask, FaDna, FaMicrochip } from "react-icons/fa";
import { motion } from "framer-motion";

const WhatIsSection = () => {
  return (
    <section className="py-20 bg-gray-900/50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            What is <span className="text-green-400">BIO/ACC</span>?
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            BIO/ACC (Biological Accelerationism) is a movement focused on
            accelerating biological innovation and scientific progress. Our AI
            bot helps you understand the principles, stay updated with the
            latest developments, and connect with the DeSci community.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-green-500/30 transition-all duration-300">
              <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 p-3 rounded-lg inline-block mb-4">
                <FaDna className="text-green-400 text-2xl" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Biological Innovation
              </h3>
              <p className="text-gray-400">
                Accelerating progress in biotechnology, genomics, and synthetic
                biology
              </p>
            </div>

            <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-green-500/30 transition-all duration-300">
              <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 p-3 rounded-lg inline-block mb-4">
                <FaFlask className="text-green-400 text-2xl" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Decentralized Science
              </h3>
              <p className="text-gray-400">
                Supporting open, collaborative, and accessible scientific
                research
              </p>
            </div>

            <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-green-500/30 transition-all duration-300">
              <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 p-3 rounded-lg inline-block mb-4">
                <FaMicrochip className="text-green-400 text-2xl" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Tech Integration</h3>
              <p className="text-gray-400">
                Merging AI, blockchain, and biotechnology for scientific
                advancement
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhatIsSection;
