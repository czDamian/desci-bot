"use client";
import { motion } from "framer-motion";
import { FaArrowRight, FaTelegram, FaTwitter } from "react-icons/fa";
import { HiGlobe } from "react-icons/hi";

const Community = () => {
  return (
    <section className="py-20 bg-gray-800/30">
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
              Join the Community
            </span>
          </h2>
          <p className="mt-4 text-xl text-gray-300 max-w-3xl mx-auto">
            Connect with like-minded individuals passionate about accelerating
            biological innovation
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          <CommunityCard
            icon={<FaTelegram />}
            title="Telegram Group"
            description="Join our active Telegram community to discuss BIO/ACC concepts and stay updated"
            link="https://t.me/bioacc_community"
            linkText="Join Group"
          />

          <CommunityCard
            icon={<FaTwitter />}
            title="Twitter"
            description="Follow the latest discussions, news, and memes from the BIO/ACC movement"
            link="https://twitter.com/bioacc_official"
            linkText="Follow Us"
          />

          <CommunityCard
            icon={<HiGlobe />}
            title="DeSci Network"
            description="Connect with researchers, enthusiasts, and innovators in the decentralized science space"
            link="#"
            linkText="Explore Network"
          />
        </div>
      </div>
    </section>
  );
};

export default Community;
// Component for community cards
function CommunityCard({ icon, title, description, link, linkText }) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-green-500/30 transition-all duration-300"
    >
      <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 p-3 rounded-lg inline-block mb-4">
        <div className="text-green-400 text-2xl">{icon}</div>
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-400 mb-4">{description}</p>
      <a
        href={link}
        className="inline-flex items-center text-green-400 hover:text-green-300 font-medium"
      >
        {linkText} <FaArrowRight className="ml-2 text-sm" />
      </a>
    </motion.div>
  );
}
