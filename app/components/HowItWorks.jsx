import { motion } from "framer-motion";

const HowItWorks = () => {
  return (
    <section className="py-20 bg-gray-900/70">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-teal-300">
              How It Works
            </span>
          </h2>

          <div className="space-y-12">
            <StepItem
              number="01"
              title="Add the Bot to Your Telegram"
              description="Simply search for @desci_ai_bot on Telegram or click our link to start a conversation"
            />

            <StepItem
              number="02"
              title="Ask Questions or Request Information"
              description="Interact with the bot by asking questions about BIO/ACC, DeSci concepts, or request content generation"
            />

            <StepItem
              number="03"
              title="Receive Instant, Accurate Responses"
              description="The bot processes your query using its knowledge base and provides detailed, formatted answers"
            />

            <StepItem
              number="04"
              title="Share and Engage"
              description="Use the information to enhance discussions, share with your community, or deepen your understanding"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;

// Component for how it works steps
function StepItem({ number, title, description }) {
  return (
    <div className="flex items-start gap-6">
      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-green-500 to-emerald-400 flex items-center justify-center text-gray-900 font-bold text-lg">
        {number}
      </div>
      <div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-400">{description}</p>
      </div>
    </div>
  );
}
