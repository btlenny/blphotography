// React component
import React, { useState, useEffect } from "react";
import "./Landing.css";

const imageUrls = [
  "/images/Home.jpg",
  "/images/Home-1.jpg",
  "/images/Home-2.jpg",
  "/images/Home-3.jpg",
  "/images/Home-4.jpg",
  "/images/Home-5.jpg"
];

export default function Landing() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === imageUrls.length - 1 ? 0 : prevIndex + 1
      );
      setImageLoaded(false); // Reset imageLoaded for each new image
    }, 5000); // 5000 milliseconds (5 seconds)

    return () => clearInterval(intervalId);
  }, []);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  return (
    <div className="landing-page">
      <div className="content-container">
        <div className="image-container">
          <img
            src={imageUrls[currentImageIndex]}
            alt="Landing Page Image"
            style={{
              transition: "opacity 0.5s ease-in-out",
              opacity: imageLoaded ? 1 : 0,
            }}
            onLoad={() => {
              handleImageLoad();
              setTimeout(() => setImageLoaded(false), 4000); // Set a timeout to trigger the fade-out effect after 4000 milliseconds (same as your interval)
            }}
          />
        </div>
        <div className="text-container text-center">
          <img src="/logo.svg" id="logo" className="mx-auto" alt="Logo" />
          <h1 className="italic">RAW MOMENTS CAPTURED</h1>
          <a href="/work" className="border rounded-sm p-2 inline-block mt-4">
            VIEW WORK
          </a>
        </div>
      </div>
    </div>
  );
}
