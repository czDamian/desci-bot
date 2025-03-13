import { motion } from "framer-motion";
import { FaArrowRight, FaTelegram } from "react-icons/fa";

const JoinCommunity = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-800 to-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center bg-gradient-to-r from-gray-800/50 to-gray-900/50 p-12 rounded-3xl border border-green-500/20 shadow-[0_0_30px_rgba(0,255,127,0.1)]"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Accelerate Your DeSci Journey?
          </h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Join thousands of researchers, enthusiasts, and innovators who are
            already using the BIO/ACC AI Bot to enhance their understanding and
            engagement.
          </p>

          <a
            href="https://t.me/desci_ai_bot"
            className="flex items-center justify-center gap-2 bg-gradient-to-r from-green-500 to-emerald-400 hover:from-green-600 hover:to-emerald-500 text-gray-900 font-bold py-4 px-10 rounded-full shadow-lg mx-auto w-fit transform transition-all duration-300 hover:scale-105"
          >
            <FaTelegram className="text-xl" />
            <span>Start Using the Bot Today</span>
            <FaArrowRight className="ml-2" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default JoinCommunity;
