export async function processImages({ image1, image2, prompt }) {
  const formData = new FormData();
  formData.append('image1', image1);
  formData.append('image2', image2);
  formData.append('prompt', prompt);

  // const apiUrl = process.env.NEXT_PUBLIC_BASE_URL;

  try {
    const res = await fetch('http://48.216.241.134:8000/api/process', {
      method: 'POST',
      body: formData,
    });

    const blob = await res.blob();

    if (!blob.type.startsWith("image/")) {
      const text = await blob.text();
      throw new Error(text || "Response is not an image.");
    }

    const imageUrl = URL.createObjectURL(blob);
    return imageUrl;
  } catch (error) {
    console.error('Error processing images:', error);
    throw error;
  }
}
