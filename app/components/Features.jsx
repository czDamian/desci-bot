import { motion } from "framer-motion";
import { FaTelegram, FaTwitter } from "react-icons/fa";
import {
  HiChatAlt2,
  HiDocumentText,
  HiLightningBolt,
  HiSparkles,
} from "react-icons/hi";

const Features = () => {
  return (
    <section id="features" className="py-20 bg-gray-800/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-teal-300">
              Powerful Features
            </span>
          </h2>
          <p className="mt-4 text-xl text-gray-300 max-w-3xl mx-auto">
            Our AI bot comes packed with tools to enhance your DeSci experience
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard
            icon={<FaTelegram />}
            title="Telegram Integration"
            description="Works seamlessly in both group chats and direct messages, providing instant responses to your queries"
          />

          <FeatureCard
            icon={<HiLightningBolt />}
            title="RAG-based Knowledge"
            description="Retrieval Augmented Generation ensures accurate, up-to-date information about DeSci and BIO/ACC topics"
          />

          <FeatureCard
            icon={<HiSparkles />}
            title="Content Generation"
            description="Create BIO/ACC-themed content, memes, and explanations to share with your community"
          />

          <FeatureCard
            icon={<FaTwitter />}
            title="Social Media Integration"
            description="Stay updated with the latest BIO/ACC discussions happening on Twitter and other platforms"
          />

          <FeatureCard
            icon={<HiChatAlt2 />}
            title="HTML-formatted Messages"
            description="Receive beautifully formatted responses with rich text, links, and structured information"
          />

          <FeatureCard
            icon={<HiDocumentText />}
            title="Research Summaries"
            description="Get concise summaries of complex scientific papers and BIO/ACC concepts"
          />
        </div>
      </div>
    </section>
  );
};

export default Features;

// Component for feature cards
function FeatureCard({ icon, title, description }) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-green-500/30 transition-all duration-300"
    >
      <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 p-3 rounded-lg inline-block mb-4">
        <div className="text-green-400 text-2xl">{icon}</div>
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </motion.div>
  );
}
