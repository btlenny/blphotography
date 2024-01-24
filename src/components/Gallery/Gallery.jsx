import React from 'react';
import './Gallery.css';

export default function Gallery() {
    return (
      <>
        {renderSection("OK Carol", ["/images/OKCarol-1.jpg", "/images/OKCarol-6.jpg", "/images/OKCarol-8.jpg", "/images/OKCarol-4.jpg", "/images/OKCarol-5.jpg", "/images/OKCarol-7.jpg"])}
        <hr className="w-90 border-t border-gray-100 my-4 scroll-px-4" />
        {renderSection("McConkey", ["/images/McConks.jpg", "/images/McConks-1.jpg", "/images/McConks-2.jpg", "/images/McConks-3.jpg", "/images/McConks-4.jpg", "/images/McConks-5.jpg"])}
        <hr className="w-90 border-t border-gray-100 my-4 scroll-px-4" />
        {renderSection("Whites", ["/images/Whites-6.jpg", "/images/Whites-1.jpg", "/images/Whites-2.jpg", "/images/Whites-3.jpg", "/images/Whites-4.jpg", "/images/Whites-5.jpg"])}
        <hr className="w-90 border-t border-gray-100 my-4 scroll-px-4" />
        {renderSection("Peakes", ["/images/Peakes.jpg", "/images/Peakes-1.jpg", "/images/Peakes-2.jpg", "/images/Peakes-3.jpg", "/images/Peakes-4.jpg", "/images/Peakes-5.jpg"])}
        <hr className="w-90 border-t border-gray-100 my-4 scroll-px-4" />
        {renderSection("Clums", ["/images/Clums.jpg", "/images/Clums-1.jpg", "/images/Clums-2.jpg", "/images/Clums-3.jpg", "/images/Clums-4.jpg", "/images/Clums-5.jpg"])}
      </>
    );
  
    function renderSection(title, imageSources) {
      return (
        <div className="p-4">
          <h2 className="title">{title}</h2>
          <div className="grid grid-cols-3 gap-4">
            {imageSources.map((src, index) => (
              <div key={index}>
                <img className="h-auto max-w-full rounded-xs fadeInDown" src={src} alt="" />
              </div>
            ))}
          </div>
        </div>
      );
    }
  }


