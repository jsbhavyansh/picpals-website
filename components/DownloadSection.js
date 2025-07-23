"use client";

import React from "react";

export default function DownloadSection() {
  return (
    <div className="flex flex-col items-center justify-center px-4 py-16">
      <div className="w-full max-w-5xl border border-gray-700 bg-black bg-opacity-50 rounded-xl p-8 md:p-12 text-center">
        <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">
          Want to use our services?
        </h2>
        <p className="text-gray-300 mb-6">
          Download our app now and get started with AI-powered image editing on the go.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
              alt="Get it on Google Play"
              className="h-12 md:h-14"
            />
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
              alt="Download on the App Store"
              className="h-12 md:h-14"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
