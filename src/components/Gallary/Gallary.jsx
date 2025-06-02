import React, { useState } from 'react';

import shal1 from '../../assets/shall1.jpeg';
import kitchen from '../../assets/shall2.jpeg';
import lounge from '../../assets/shall3.jpeg';
import dinein from '../../assets/shall4.jpeg';
import bedroom from '../../assets/shall5.jpeg';
import parking from '../../assets/shall6.jpeg';
import parking1 from '../../assets/shall7.jpeg';
import parking2 from '../../assets/shall8.jpeg';
import parking3 from '../../assets/shall9.jpeg';
import parking4 from '../../assets/shall10.jpeg';
import parking5 from '../../assets/shall11.jpeg';
import parking6 from '../../assets/shall12.jpeg';

const images = [
  { src: shal1, alt: 'Open Field' },
  { src: kitchen, alt: 'Kitchen' },
  { src: lounge, alt: 'Lounge' },
  { src: dinein, alt: 'Dine-in Area' },
  { src: bedroom, alt: 'Bedroom' },
  { src: parking, alt: 'Parking Area' },
  { src: parking1, alt: 'Parking Area' },
  { src: parking2, alt: 'Parking Area' },
  { src: parking3, alt: 'Parking Area' },
  { src: parking4, alt: 'Parking Area' },
  { src: parking5, alt: 'Parking Area' },
  { src: parking6, alt: 'Parking Area' },
];

const Gallary = () => {
  const [modalImage, setModalImage] = useState(null);

  const openModal = (image) => {
    setModalImage(image);
  };

  const closeModal = () => {
    setModalImage(null);
  };

  return (
    <section className="py-12 bg-white">
      <h1 className="text-3xl md:text-4xl font-bold text-center text-neutral-800 mb-10 uppercase">
        Hotel Gallery
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4 sm:px-6 md:px-12">
        {images.map((image, index) => (
          <div
            key={index}
            className="group relative overflow-hidden rounded-xl cursor-pointer flex justify-center items-center h-48 bg-gray-100"
            onClick={() => openModal(image)}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover transform group-hover:scale-105 transition duration-300 ease-in-out"
            />
            <div className="absolute inset-0  bg-opacity-30 opacity-0 group-hover:opacity-100 transition duration-300" />
          </div>
        ))}
      </div>

      {/* Modal */}
      {modalImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50"
          onClick={closeModal}
        >
          <div className="relative max-w-4xl w-full p-4">
            <img
              src={modalImage.src}
              alt={modalImage.alt}
              className="w-full h-auto rounded-lg shadow-lg"
            />
            <button
              onClick={closeModal}
              className="absolute top-2 right-4 text-white text-3xl font-bold"
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallary;
