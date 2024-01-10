import React, { useState, useEffect } from "react";
import "./Landing.css";

const imageUrls = [
  "/images/Photo1.jpg",
  "/images/Photo2.jpg",
  "/images/Photo4.jpg",
  "/images/Photo5.jpg",
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
    }, 8000); // 5000 milliseconds (5 seconds)

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
            className={`fade-in ${imageLoaded ? "visible" : ""}`}
            onLoad={() => {
              handleImageLoad();
              setTimeout(() => setImageLoaded(false), 4000); // Set a timeout to trigger the fade-out effect after 4000 milliseconds (same as your interval)
            }}
          />
        </div>
        <div className="text-container text-center">
          <img src="/logo.svg" id="logo" className="mx-auto" alt="Logo" />
          <h1>RAW MOMENTS CAPTURED</h1>
          <a href="/work" className="border p-2 inline-block mt-4">
            SEE WORK
          </a>
        </div>
      </div>
    </div>
  );
}
