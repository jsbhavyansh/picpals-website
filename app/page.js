"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Featured from "@/components/Featured";
import Hero from "@/components/Hero";
import DownloadSection from "@/components/DownloadSection";
import Footer from "@/components/Footer";

export default function Home() {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.2;
    }
  }, []);

  return (
    <div className="font-sans min-h-screen flex flex-col">
      {/* Navbar at top */}
      <Navbar />

      {/* Main content full width */}
      <main className="flex-1 w-full mt-20">
        <Hero />

        {/* Section with shared video background */}
        <section className="relative w-full overflow-hidden">
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

          {/* Black overlay */}
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40"></div>

          {/* Content with video overlay */}
          <div className="relative z-10">
            <Featured />
            <DownloadSection />
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer/>
    </div>
  );
}
