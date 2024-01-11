import './Gallery.css';

export default function Gallery() {
  return (
    <>
      {renderSection(["/images/Photo1.jpg", "/images/Photo2.jpg", "/images/Photo3.jpg", "/images/Photo4.jpg", "/images/Photo5.jpg", "/images/Photo6.jpg"])}
      <hr className="w-full border-t-2 my-4" />
      {renderSection(["/images/Photo7.jpg", "/images/Photo8.jpg", "/images/Photo9.jpg", "/images/Photo10.jpg", "/images/Photo11.jpg", "/images/Photo12.jpg"])}
    </>
  );

  function renderSection(imageSources) {
    return (
      <div className="p-4">
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

