import React, { useState } from "react";

const Gallery = () => {
  const images = [
    "assets/img/gallery/gallery-1.jpg",
    "assets/img/gallery/gallery-2.jpg",
    "assets/img/gallery/gallery-3.jpg",
    "assets/img/gallery/gallery-4.jpg",
    "assets/img/gallery/gallery-5.jpg",
    "assets/img/gallery/gallery-6.jpg",
    "assets/img/gallery/gallery-7.jpg",
    "assets/img/gallery/gallery-8.jpg",
  ];

  const [modalOpen, setModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openModal = (index) => {
    setCurrentImageIndex(index);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <section id="gallery" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Gallery</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore a captivating visual journey through our gallery photos.
            Each image tells a unique story, capturing moments of beauty,
            innovation, and inspiration. Welcome to a gallery where every photo
            is a window to a world of wonder.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((src, index) => (
            <div key={index} className="overflow-hidden rounded-lg shadow-lg">
              <button
                onClick={() => openModal(index)}
                className="block w-full h-0 pb-[100%] relative focus:outline-none"
              >
                <img
                  src={src}
                  alt={`Gallery item ${index + 1}`}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
              </button>
            </div>
          ))}
        </div>
      </div>

      {modalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-[99999999]">
          <div className="max-w-4xl w-full">
            <img
              src={images[currentImageIndex]}
              alt={`Gallery item ${currentImageIndex + 1}`}
              className="w-full h-auto"
            />
            <button
              onClick={closeModal}
              className="bg-white top-10 text-xl absolute right-10 text-black w-10 h-10 rounded-full focus:outline-none"
            >
              &times; {/* Close symbol */}
            </button>
            <div className="absolute top-[50%] left-0 right-0 flex justify-between p-4">
              <button
                onClick={prevImage}
                className="bg-white w-10 h-10 text-black p-2 rounded-full focus:outline-none"
              >
                &#8592; {/* Left arrow */}
              </button>

              <button
                onClick={nextImage}
                className="bg-white w-10 h-10 text-black p-2 rounded-full focus:outline-none"
              >
                &#8594; {/* Right arrow */}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
