import { FaSearch } from "react-icons/fa";

export default function Header() {
  return (
    <header className="w-full">
      {/* Announcement Bar */}
      <div className="bg-purple-800 text-white text-base text-center py-3">
        🎉 Get the latest coupon updates daily – Save more, spend less!
      </div>

      {/* Main Header */}
      <div className="bg-white shadow-sm px-6 md:px-16 py-6 flex flex-col md:flex-row items-center justify-between">
        {/* Logo */}
        <div className="text-3xl font-bold text-purple-800">
          Coupon<span className="font-light text-black">Hunt</span>
        </div>

        {/* Navigation Links */}
        <nav className="flex space-x-6 mt-4 md:mt-0 text-base font-medium text-gray-700">
          <a href="#" className="hover:text-purple-700">Home</a>
          <a href="#" className="hover:text-purple-700">Coupons</a>
          <a href="#" className="hover:text-purple-700">Stores</a>
          <a href="#" className="hover:text-purple-700">Categories</a>
          <a href="#" className="hover:text-purple-700">About us</a>
        </nav>

        {/* Search Box */}
        <div className="mt-4 md:mt-0 relative w-full max-w-xs">
          <input
            type="text"
            placeholder="Search coupons..."
            className="w-full border border-gray-300 rounded px-5 py-3 pr-12 text-base focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <FaSearch className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 text-lg" />
        </div>
      </div>
    </header>
  );
}
