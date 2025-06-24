import { MdOutlineWarningAmber } from "react-icons/md";
import ChatCard from "./ChatCard";
import Link from "next/link";

export const metadata = {
  title: "Chat || DeSci Bot",
  description:
    "an AI-powered assistant designed to engage with the BIO/ACC and DeSci (Decentralized Science) communities",
};

const page = () => {
  return (
    <div className="">
      {/* Disclaimer */}
      <div className="mb-4 p-3 bg-blue-100 text-blue-800 rounded text-sm text-center ">
        <MdOutlineWarningAmber className="text-xl text-blue-600 inline mr-2" />
        DeSci Bot does not record your chat history. Any previous conversation
        is lost when you leave or refresh the page.
      </div>
      <ChatCard />
      <div className="mt-6 flex justify-center">
        {/* back to home button */}
        <button className="px-6 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition-colors duration-200 font-semibold cursor-pointer">
          <Link href="/" className="flex items-center gap-2">
            Back Home
          </Link>
        </button>
      </div>
    </div>
  );
};

export default page;
