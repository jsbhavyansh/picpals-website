"use client";

import React from "react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative z-10 w-full px-6 py-10 border-t border-gray-700 bg-black bg-opacity-60 backdrop-blur-md">
      <div className="max-w-6xl mx-auto flex flex-col gap-8">
        {/* Top links */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-gray-300 text-sm text-center md:text-left">
            © {new Date().getFullYear()} Your Company. All rights reserved.
          </div>

          <div className="flex flex-wrap justify-center md:justify-start gap-6">
            <a
              href="/privacy-policy"
              className="text-gray-300 hover:text-white transition-colors duration-200"
            >
              Privacy Policy
            </a>
            <a
              href="/terms-of-service"
              className="text-gray-300 hover:text-white transition-colors duration-200"
            >
              Terms of Service
            </a>
            <a
              href="/contact"
              className="text-gray-300 hover:text-white transition-colors duration-200"
            >
              Contact Us
            </a>
            <a
              href="/about"
              className="text-gray-300 hover:text-white transition-colors duration-200"
            >
              About
            </a>
          </div>
        </div>

    
      </div>
    </footer>
  );
}
