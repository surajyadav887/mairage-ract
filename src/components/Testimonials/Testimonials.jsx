import React from 'react';
import image1 from "../../assets/shall1.jpeg"
import image2 from "../../assets/shall2.jpeg"
import image3 from "../../assets/shall3.jpeg"
const testimonials = [
  {
    name: "Aarav Sharma",
    role: "Groom's Brother",
    message:
      "The hotel was absolutely stunning! The decoration, service, and hospitality made the wedding unforgettable. Highly recommend it for any grand occasion.",
    image: image1,
  },
  {
    name: "Ritika Mehra",
    role: "Bride's Friend",
    message:
      "Everything was beautifully arranged. The staff was courteous, food was amazing, and the rooms were clean and luxurious. A perfect venue for a dream wedding!",
    image: image2,
  },
  {
    name: "Rajesh Khanna",
    role: "Father of the Groom",
    message:
      "From the welcome drinks to the final ceremony, everything was handled with grace and perfection. Our guests were thrilled. Truly a premium marriage hotel!",
    image: image3,
  },
];

const Testimonials = () => {
  return (
    <section className="py-12 bg-gray-50">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-neutral-800 mb-12 uppercase">
        What Our Guests Say
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6 md:px-16">
        {testimonials.map((person, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300"
          >
            <div className="flex flex-col items-center text-center">
              <img
                src={person.image}
                alt={person.name}
                className="w-20 h-20 rounded-full object-cover mb-4 border-4 border-white shadow-sm"
              />
              <h3 className="text-xl font-semibold text-neutral-800">{person.name}</h3>
              <p className="text-sm text-neutral-500">{person.role}</p>
              <p className="text-neutral-600 mt-4 italic">“{person.message}”</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
