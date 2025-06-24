import Link from "next/link";
import Logo from "./Logo";

const Header = () => {
  return (
    <div className="flex items-center justify-between mb-6 px-4 py-2">
      <div>
        <Logo size={50} />
      </div>
      <div>
        <Link
          href="/chat"
          className="px-6 py-2.5 rounded-full bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-green-400"
        >
          Get Started
        </Link>
      </div>
    </div>
  );
};

export default Header;
