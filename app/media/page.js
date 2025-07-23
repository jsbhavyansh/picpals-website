"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import { Menu, ImageIcon, Layers, Camera, Wand2 } from "lucide-react";

export default function MediaPage() {
  const [prompt, setPrompt] = useState("");
  const [image1, setImage1] = useState(null);
  const [image2, setImage2] = useState(null);
  const [showMenu, setShowMenu] = useState(false);

  const handleImageChange = (e, setter) => {
    if (e.target.files && e.target.files[0]) {
      setter(URL.createObjectURL(e.target.files[0]));
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white font-inter">
      <Navbar />

      {/* Hamburger Menu */}
      <div className="flex items-center justify-between p-4 border-b border-gray-800 backdrop-blur-md bg-black/30">
        <button
          onClick={() => setShowMenu(!showMenu)}
          className="text-white hover:text-purple-500 transition"
        >
          <Menu size={28} />
        </button>
        <h1 className="text-lg font-semibold">Media Studio</h1>
      </div>

      {/* Top Menu */}
      {showMenu && (
        <div className="flex flex-wrap items-center justify-center gap-8 bg-black/80 backdrop-blur-md border-b border-gray-800 p-4 transition">
          <div className="flex flex-col items-center hover:text-purple-400 cursor-pointer transition">
            <Camera size={28} className="mb-1" />
            <span className="text-sm">Group Photo</span>
          </div>
          <div className="flex flex-col items-center hover:text-purple-400 cursor-pointer transition">
            <Layers size={28} className="mb-1" />
            <span className="text-sm">Image Blend</span>
          </div>
          <div className="flex flex-col items-center hover:text-purple-400 cursor-pointer transition">
            <ImageIcon size={28} className="mb-1" />
            <span className="text-sm">Background Change</span>
          </div>
          <div className="flex flex-col items-center hover:text-purple-400 cursor-pointer transition">
            <Wand2 size={28} className="mb-1" />
            <span className="text-sm">Image Creation</span>
          </div>
        </div>
      )}

      <main className="flex flex-col md:flex-row flex-grow">
        {/* Left Section */}
        <section className="flex flex-col gap-6 p-8 md:w-1/2 border-r border-gray-800 bg-black/40 backdrop-blur-md">
          <h2 className="text-2xl font-bold mb-2">Upload & Prompt</h2>

          <div className="flex flex-col gap-6">
            {/* Drag & Drop input 1 */}
            <div className="flex flex-col items-center justify-center border-2 border-dashed border-purple-600/50 rounded-xl p-6 h-44 hover:bg-black/30 transition cursor-pointer">
              <label className="cursor-pointer text-center w-full h-full flex flex-col justify-center">
                {image1 ? (
                  <img
                    src={image1}
                    alt="First Upload Preview"
                    className="mx-auto rounded-lg max-h-32 object-contain shadow-lg"
                  />
                ) : (
                  <p className="text-gray-400">Drag & drop first image here or click to upload</p>
                )}
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => handleImageChange(e, setImage1)}
                  className="hidden"
                />
              </label>
            </div>

            {/* Drag & Drop input 2 */}
            <div className="flex flex-col items-center justify-center border-2 border-dashed border-purple-600/50 rounded-xl p-6 h-44 hover:bg-black/30 transition cursor-pointer">
              <label className="cursor-pointer text-center w-full h-full flex flex-col justify-center">
                {image2 ? (
                  <img
                    src={image2}
                    alt="Second Upload Preview"
                    className="mx-auto rounded-lg max-h-32 object-contain shadow-lg"
                  />
                ) : (
                  <p className="text-gray-400">Drag & drop second image here or click to upload</p>
                )}
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => handleImageChange(e, setImage2)}
                  className="hidden"
                />
              </label>
            </div>

            {/* Prompt input */}
            <div>
              <label className="block mb-2 text-sm font-medium">Prompt</label>
              <textarea
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="Describe your vision..."
                rows={3}
                className="text-white bg-black/30 backdrop-blur-md rounded-lg p-3 w-full border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-600 resize-none transition"
              />
            </div>
          </div>
        </section>

        {/* Right Section */}
        <section className="flex flex-col items-center justify-center p-8 md:w-1/2 bg-black/30 backdrop-blur-md">
          <h2 className="text-2xl font-bold mb-6">Output Preview</h2>

          <div className="flex flex-col gap-6 w-full items-center">
            {image1 && (
              <img
                src={image1}
                alt="First Upload Preview"
                className="max-w-xs rounded-xl shadow-2xl border border-gray-700"
              />
            )}
            {image2 && (
              <img
                src={image2}
                alt="Second Upload Preview"
                className="max-w-xs rounded-xl shadow-2xl border border-gray-700"
              />
            )}
            {prompt && (
              <p className="bg-black/50 backdrop-blur-md p-4 rounded-xl max-w-xs text-center border border-gray-700">
                {prompt}
              </p>
            )}
          </div>
        </section>
      </main>
    </div>
  );
}
