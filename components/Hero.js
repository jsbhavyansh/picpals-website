"use client";

import React, { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";

export default function Hero() {
  const videoRef = useRef(null);
  const router = useRouter();

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.75; 
    }
  }, []);

  const handleGetStarted = () => {
    router.push("/media");
  };

  return (
    <section className="relative w-full h-screen overflow-hidden bg-black">
      {/* Video background */}
      {/* <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover opacity-30"
      >
        <source src="/testVideo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video> */}

      {/* Black overlay for dark aesthetic */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40"></div>

      {/* Overlay content */}
      <div className="relative z-10 flex flex-col items-center mt-20 justify-center h-full px-2 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mt-5 text-white mb-4">
          AI-Powered Image Editing
        </h1>
        <p className="text-gray-300 max-w-xl mb-8">
          Harness the power of artificial intelligence to create, enhance, and transform your images effortlessly.
        </p>
        <button
          onClick={handleGetStarted}
          className="bg-white text-black px-8 py-3 rounded-full text-sm font-semibold shadow hover:shadow-lg hover:bg-gray-200 transition-all duration-200"
        >
          Get Started
        </button>
      </div>
    </section>
  );
}
