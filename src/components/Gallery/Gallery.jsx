import React from 'react';
import './Gallery.css';

export default function Gallery() {
    return (
      <>
        {renderSection("OK Carol", ["/images/OKCarol-1.jpg", "/images/OKCarol-2.jpg", "/images/OKCarol-3.jpg", "/images/OKCarol-4.jpg", "/images/OKCarol-5.jpg", "/images/OKCarol-6.jpg"])}
        <hr className="w-90 border-t border-gray-100 my-4 scroll-px-4" />
        {renderSection("McConkeys", ["/images/Photo7.jpg", "/images/Photo8.jpg", "/images/Photo9.jpg", "/images/Photo10.jpg", "/images/Photo11.jpg", "/images/Photo12.jpg"])}
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


