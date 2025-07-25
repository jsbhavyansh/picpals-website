"use client";

import Image from "next/image";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

const features = [
  {
    id: 1,
    title: "Fashion Duo",
    description: "Showcase modern style and playful charm with elegance.",
    images: [
      "https://picsum.photos/seed/1/150/100",
      "https://picsum.photos/seed/2/150/100",
      "https://picsum.photos/seed/3/150/100",
    ],
    widthStyle: "w-1/4",
    presetPrompt: "A fashionable portrait captures two female celebrities, positioned side-by-side with one on the left and the other on the right. They both exude a stylish and playful charm in their fashionable and cute attire. The clothing might involve trendy dresses, stylish separates, or a mix of both, chosen to complement their individual styles and create a harmonious overall look. Soft, diffused lighting enhances their features and creates a warm, inviting atmosphere. Their poses are relaxed yet stylish, conveying a sense of effortless cool and camaraderie. The background is a smooth, solid-colored backdrop, perhaps a pastel shade or a more vibrant hue that complements their outfits, ensuring the focus remains on the two stars and their fashionable presence. The overall impression is one of modern glamour, playful sophistication, and the vibrant energy of these two fashionable icons.",
  },
  {
    id: 2,
    title: "Studio Couple",
    description: "Classic portrait with soft light and natural connection.",
    images: [
      "https://picsum.photos/seed/4/150/100",
      "https://picsum.photos/seed/5/150/100",
      "https://picsum.photos/seed/6/150/100",
    ],
    widthStyle: "w-1/2",
    presetPrompt: "A professional portrait captures a young couple against a neutral studio background.The background is smooth, monochromatic,seamless. The woman on the left wears a simple, elegant blouse in a soft color, while the man on the right is in a well-fitted button-down shirt. Their bodies are slightly angled toward each other, creating a sense of connection while allowing both faces to be clearly visible to the camera. The lighting is soft and flattering, with gentle shadows that create dimension without harshness. Their expressions are warm and genuine - perhaps soft smiles or a look of quiet contentment that suggests their comfort with each other. The composition is classic and balanced, with their faces at similar heights in the frame. The overall impression is one of authentic partnership, mutual respect, and the subtle intimacy of a couple who are at ease in each other's presence.",
  },
  {
    id: 3,
    title: "Street Style Blend",
    description: "Trendy fashion with relaxed poses and bold details.",
    images: [
      "https://picsum.photos/seed/7/150/100",
      "https://picsum.photos/seed/8/150/100",
      "https://picsum.photos/seed/9/150/100",
    ],
    widthStyle: "w-1/2",
    presetPrompt: "A stylish portrait captures a woman and man, side-by-side, the woman positioned on the left and the man on the right. They both wear casual yet fashionable attire, perhaps trendy streetwear or designer separates, with the word 'yw' emblazoned across their shirts. The lighting is carefully crafted to create a mood of cool sophistication, highlighting their features and the stylish details of their clothing. Their poses are relaxed yet confident, conveying a sense of effortless cool. The background is smooth, monochromatic,seamless,keeping the focus on the couple and their shared sense of style. The overall impression is one of modern fashion, youthful rebellion, and a strong connection between the two individuals.",
  },
  {
    id: 4,
    title: "Cafe Moment",
    description: "Warm, cozy portrait with everyday intimacy.",
    images: [
      "https://picsum.photos/seed/10/150/100",
      "https://picsum.photos/seed/11/150/100",
      "https://picsum.photos/seed/12/150/100",
    ],
    widthStyle: "w-1/4",
    presetPrompt: "A half-body portrait captures a young couple in casual weekend attire against the backdrop of a cozy café. The woman on the left wears a soft sweater and simple necklace, while the man on the right is in a casual button-down with rolled sleeves. They sit at a small round table, perhaps with coffee cups or dessert plates visible in the foreground. The café setting is suggested through soft bokeh of warm lights, wooden elements, and perhaps hints of other patrons blurred in the background. The lighting is warm and intimate, suggesting afternoon or evening hours. Their posture shows them leaning slightly toward each other, engaged in conversation or sharing a moment of connection. Their expressions are relaxed and authentic - perhaps mid-laugh or exchanging warm glances. The overall impression is one of everyday intimacy, comfortable companionship, and the simple pleasure of shared time together.",
  }
];

export default function Featured() {
  const router = useRouter();

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

  // Handle the "Try Now" button click
  const handleTryNow = (prompt, title) => {
    const encodedPrompt = encodeURIComponent(prompt);
    const encodedTitle = encodeURIComponent(title);
    router.push(`/media?prompt=${encodedPrompt}&effect=${encodedTitle}`);
  };

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
                onClick={() => handleTryNow(feature.presetPrompt, feature.title)}
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
