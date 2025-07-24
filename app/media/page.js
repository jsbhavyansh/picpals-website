"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import { Menu, ImageIcon, Layers, Camera, Wand2 } from "lucide-react";
import { processImages } from "@/pages/api/process-proxy";
import { useSearchParams } from "next/navigation";

export default function MediaPage() {
  // Fetching arguments from URL
  const searchParams = useSearchParams();
  const initialPrompt = searchParams.get("prompt") || "";

  const [prompt, setPrompt] = useState(initialPrompt);
  const [image1File, setImage1File] = useState(null);
  const [image2File, setImage2File] = useState(null);
  const [image1Preview, setImage1Preview] = useState(null);
  const [image2Preview, setImage2Preview] = useState(null);
  const [showMenu, setShowMenu] = useState(false);
  const [loading, setLoading] = useState(false);
  const [resultImage, setResultImage] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  const handleImageChange = (e, setFile, setPreview) => {
    const file = e.target.files?.[0];
    if (file) {
      setFile(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  // Handle submit function
  const handleSubmit = async () => {
    if (!image1File || !image2File || !prompt.trim()) {
      alert("Please upload both images and enter a prompt");
      return;
    }

    setLoading(true);
    setResultImage(null);
    setErrorMessage("");

    try {
      const imageUrl = await processImages({
        image1: image1File,
        image2: image2File,
        prompt,
      });

      if (imageUrl) {
        setResultImage(imageUrl);
      } else {
        setErrorMessage("No image found in response.");
      }
    } catch (error) {
      console.error("Submit error:", error);
      setErrorMessage(error.message || "Network error. Please try again.");
    } finally {
      setLoading(false);
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
            {/* Image 1 Upload */}
            <div className="flex flex-col items-center justify-center border-2 border-dashed border-purple-600/50 rounded-xl p-6 h-44 hover:bg-black/30 transition cursor-pointer">
              <label className="cursor-pointer text-center w-full h-full flex flex-col justify-center">
                {image1Preview ? (
                  <img
                    src={image1Preview}
                    alt="First Upload Preview"
                    className="mx-auto rounded-lg max-h-32 object-contain shadow-lg"
                  />
                ) : (
                  <p className="text-gray-400">Drag & drop first image here or click to upload</p>
                )}
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => handleImageChange(e, setImage1File, setImage1Preview)}
                  className="hidden"
                />
              </label>
            </div>

            {/* Image 2 Upload */}
            <div className="flex flex-col items-center justify-center border-2 border-dashed border-purple-600/50 rounded-xl p-6 h-44 hover:bg-black/30 transition cursor-pointer">
              <label className="cursor-pointer text-center w-full h-full flex flex-col justify-center">
                {image2Preview ? (
                  <img
                    src={image2Preview}
                    alt="Second Upload Preview"
                    className="mx-auto rounded-lg max-h-32 object-contain shadow-lg"
                  />
                ) : (
                  <p className="text-gray-400">Drag & drop second image here or click to upload</p>
                )}
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => handleImageChange(e, setImage2File, setImage2Preview)}
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

            {/* Submit Button */}
            <button
              onClick={handleSubmit}
              disabled={loading || !image1File || !image2File || !prompt.trim()}
              className={`mt-4 px-6 py-3 rounded-lg text-white font-semibold transition ${
                loading || !image1File || !image2File || !prompt.trim()
                  ? "bg-gray-600 cursor-not-allowed"
                  : "bg-purple-600 hover:bg-purple-700"
              }`}
            >
              {loading ? "Processing..." : "Submit for Processing"}
            </button>

            {/* Loading Bar */}
            {loading && (
              <div className="w-full bg-gray-800 rounded-full h-2.5 mt-4">
                <div className="bg-purple-600 h-2.5 rounded-full animate-pulse w-full"></div>
              </div>
            )}
          </div>
        </section>

        {/* Right Section */}
        <section className="flex flex-col items-center justify-center p-8 md:w-1/2 bg-black/30 backdrop-blur-md">
          <h2 className="text-2xl font-bold mb-6">Output Preview</h2>

          {/* Result Image */}
          {resultImage && (
            <div className="mb-8">
              <h3 className="text-lg mb-2 font-semibold text-purple-400">Output Image</h3>
              <img
                src={resultImage}
                alt="Processed Result"
                className="max-w-xs rounded-xl border border-purple-600 shadow-xl"
              />
            </div>
          )}

          <div className="flex flex-col gap-6 w-full items-center">
            {image1Preview && (
              <img
                src={image1Preview}
                alt="First Upload Preview"
                className="max-w-xs rounded-xl shadow-2xl border border-gray-700"
              />
            )}
            {image2Preview && (
              <img
                src={image2Preview}
                alt="Second Upload Preview"
                className="max-w-xs rounded-xl shadow-2xl border border-gray-700"
              />
            )}
            {prompt && (
              <p className="bg-black/50 backdrop-blur-md p-4 rounded-xl max-w-xs text-center border border-gray-700">
                {prompt}
              </p>
            )}

            {/* Error Message */}
            {errorMessage && (
              <p className="mt-4 text-red-500 text-sm text-center bg-red-900/30 p-2 rounded border border-red-500">
                {errorMessage}
              </p>
            )}
          </div>
        </section>
      </main>
    </div>
  );
}