import React from "react";

const videos = [
  {
    title: "Grand Wedding Entry",
    src: "https://www.w3schools.com/html/mov_bbb.mp4", // Replace with your real video URL or path
  },
  {
    title: "Haldi Ceremony Highlights",
    src: "https://www.w3schools.com/html/movie.mp4", // Replace with your real video URL or path
  },
  {
    title: "Reception Dance",
    src: "https://www.w3schools.com/html/mov_bbb.mp4", // Replace with your real video URL or path
  },
];

const Vediogal = () => {
  return (
    <section className="py-12 bg-white">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-neutral-800 mb-10 uppercase">
        Marriage Video Gallery
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 sm:px-6 md:px-12">
        {videos.map((video, index) => (
          <div
            key={index}
            className="bg-gray-100 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition duration-300"
          >
            <video
              controls
              className="w-full h-64 object-cover"
              poster="https://via.placeholder.com/400x300?text=Video+Preview"
            >
              <source src={video.src} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="p-4 text-center">
              <h3 className="text-lg font-semibold text-gray-700">
                {video.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Vediogal;
