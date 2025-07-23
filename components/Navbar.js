"use client";

import Image from "next/image";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function Navbar() {
  const [activeIndex, setActiveIndex] = useState(null);

  const menuItems = [
    {
      name: "Pricing",
      submenu: ["Basic Plan", "Pro Plan", "Enterprise Plan"],
    },
    {
      name: "Terms of Service",
      submenu: [],
    },
    {
      name: "Privacy Policy",
      submenu: [],
    },
    {
      name: "Downloads",
      submenu: ["Play Store", "App Store"],
    },
  ];

  const handleHover = (index) => {
    setActiveIndex(index);
  };

  const handleLeave = () => {
    setActiveIndex(null);
  };

  return (
    <nav className="w-full flex items-center justify-between px-10 py-4 bg-black border-b border-gray-800 fixed top-0 left-0 z-50">
      <div className="flex items-center gap-3">
        <Image
          src="/next.svg"
          alt="Logo"
          width={40}
          height={40}
          className="invert"
        />
        <span className="text-2xl font-semibold tracking-tight text-white">
          Group Photo
        </span>
      </div>

      <ul className="hidden md:flex items-center gap-10 text-sm font-medium text-gray-300">
        {menuItems.map((item, index) => (
          <li
            key={index}
            className="relative cursor-pointer"
            onMouseEnter={() => handleHover(index)}
            onMouseLeave={handleLeave}
          >
            <div className="flex items-center gap-1 hover:text-white transition-colors duration-200">
              {item.name}
              {item.submenu.length > 0 && (
                <ChevronDown
                  size={16}
                  className={`mt-[2px] transition-transform duration-200 ${
                    activeIndex === index ? "rotate-180" : ""
                  }`}
                />
              )}
            </div>

            {/* Submenu */}
            {item.submenu.length > 0 && (
              <ul
                className={`absolute top-full left-0 bg-gray-900 border border-gray-700 rounded-md shadow-xl min-w-[160px] overflow-hidden transition-all duration-300 ${
                  activeIndex === index
                    ? "opacity-100 visible translate-y-0"
                    : "opacity-0 invisible -translate-y-2"
                }`}
              >
                {item.submenu.map((subitem, subIndex) => (
                  <li
                    key={subIndex}
                    className="px-4 py-2 text-gray-300 hover:bg-gray-800 hover:text-white border-b border-gray-700 last:border-none transition-colors duration-150"
                  >
                    {subitem}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>

      <button className="bg-white text-black px-6 py-3 rounded-full text-sm font-semibold shadow hover:shadow-lg hover:bg-gray-200 transition-all duration-200">
        Get the App
      </button>
    </nav>
  );
}
