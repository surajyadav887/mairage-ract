import React from 'react';
import image1 from "../../assets/birthday.jpg";
import image2 from "../../assets/engagement.jpg";
import image3 from "../../assets/Reception.jpeg";
import image4 from "../../assets/ceromany.webp";
import image5 from "../../assets/festival.webp";
import image6 from "../../assets/ana.webp";



const events = [
  {
    name: "Wedding Ceremony",
    description:
      "Celebrate your special day with a picturesque venue, professional catering, and elegant decor.",
    image: image4,
  },
  {
    name: "Engagement Celebrations",
    description:
      "Host productive meetings with fully-equipped conference rooms and seamless service.",
    image: image2,
  },
  {
    name: "Birthday Party",
    description:
      "Enjoy a memorable birthday bash with customized themes, cakes, and entertainment.",
    image: image1,
  },
  {
    name: "Reception",
    description:
      "Experience vibrant music nights with talented artists and gourmet food.",
    image: image3,
  },
  {
    name: "Cultural Festival",
    description:
      "Celebrate diverse cultures with colorful performances, food, and traditions.",
    image: image5,
  },
  {
    name: "Anniversaries",
    description:
      "Celebrate your milestones with elegance, joy, and personalized arrangements.",
    image: image6,
  },
];

const Events = () => {
  return (
    <section className="py-12 bg-gray-50">
      <h1 className="text-3xl md:text-4xl font-bold text-center text-neutral-800 mb-10 uppercase">
        Events We conduct
      </h1>
      <div className="grid gap-8 px-4 sm:px-6 md:px-12 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {events.map((event, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition duration-300 flex flex-col"
          >
            <img
              src={event.image}
              alt={event.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-5 flex flex-col justify-between flex-grow">
              <div>
                <h2 className="text-xl font-semibold text-neutral-800 mb-2">
                  {event.name}
                </h2>
                <p className="text-neutral-600 text-sm mb-4">
                  {event.description}
                </p>
              </div>
              <button className="mt-auto bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition duration-300">
                Book Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Events;
