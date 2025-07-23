"use client";

import Image from "next/image";
import { useEffect } from "react";

const features = [
  {
    id: 1,
    title: "Group Photo",
    description: "Manage tasks seamlessly and effectively with advanced tools.",
    images: [
      "https://picsum.photos/seed/1/150/100",
      "https://picsum.photos/seed/2/150/100",
      "https://picsum.photos/seed/3/150/100",
    ],
    widthStyle: "w-1/4",
  },
  {
    id: 2,
    title: "Background Change",
    description: "Experience intuitive design and easy integration.",
    images: [
      "https://picsum.photos/seed/4/150/100",
      "https://picsum.photos/seed/5/150/100",
      "https://picsum.photos/seed/6/150/100",
    ],
    widthStyle: "w-1/2",
  },
  {
    id: 3,
    title: "Image Blend",
    description: "Get real-time insights and analytics for confident decisions.",
    images: [
      "https://picsum.photos/seed/7/150/100",
      "https://picsum.photos/seed/8/150/100",
      "https://picsum.photos/seed/9/150/100",
    ],
    widthStyle: "w-1/2",
  },
  {
    id: 4,
    title: "Image Creation",
    description: "Ensures security, scalability, and reliability at its core.",
    images: [
      "https://picsum.photos/seed/10/150/100",
      "https://picsum.photos/seed/11/150/100",
      "https://picsum.photos/seed/12/150/100",
    ],
    widthStyle: "w-1/4",
  },
];

export default function Featured() {
  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `
      @keyframes scroll-x {
        0% { transform: translateX(0%); }
        100% { transform: translateX(-50%); }
      }
      .animate-scroll-x {
        animation: scroll-x 5s linear infinite;
      }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <section className="flex flex-wrap justify-center items-stretch gap-6 px-8 py-16">
      {features.map((feature) => (
        <div
          key={feature.id}
          className={`${feature.widthStyle} min-w-[200px] relative overflow-hidden rounded-xl shadow-lg group transition-all duration-300 bg-gray-900 flex flex-col`}
        >
          {/* Image slider container */}
          <div className="flex overflow-hidden w-full h-28 px-2 py-2">
            <div className="flex space-x-3 group-hover:animate-scroll-x">
              {feature.images.concat(feature.images).map((img, index) => (
                <Image
                  key={index}
                  src={img}
                  alt={`${feature.title} ${index + 1}`}
                  width={150}
                  height={100}
                  className="object-cover rounded-lg"
                />
              ))}
            </div>
          </div>

          {/* Text and button section */}
          <div className="flex-grow flex flex-col justify-between bg-gray-900 p-6">
            <h3 className="text-white font-semibold text-lg">{feature.title}</h3>

            <div className="relative mt-2 h-10"> {/* Fixed height container for smooth overlay */}
              <p className="absolute top-0 left-0 text-gray-300 text-sm transition-all duration-500 ease-in-out group-hover:translate-y-8 group-hover:opacity-0">
                {feature.description}
              </p>

              <button
                className="absolute top-0 left-0 w-[120px] bg-white text-black px-4 py-2 rounded-full text-sm font-medium opacity-0 translate-y-8 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-in-out"
              >
                Try Now
              </button>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
