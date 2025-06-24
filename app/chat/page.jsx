import ChatCard from "./ChatCard";

export const metadata = {
  title: "Chat || DeSci Bot",
  description:
    "an AI-powered assistant designed to engage with the BIO/ACC and DeSci (Decentralized Science) communities",
};

const page = () => {
  return (
    <div className="">
      {/* Disclaimer */}
      {/* <div className="mb-4 p-3 bg-blue-100 text-blue-800 rounded text-sm text-center ">
        <MdOutlineWarningAmber className="text-xl text-blue-600 inline mr-2" />
        DeSci Bot does not record your chat history. Any previous conversation
        is lost when you leave or refresh the page.
      </div> */}
      <ChatCard />
    </div>
  );
};

export default page;
