import React from 'react';
import {
  TentTree,
  Utensils,
  Sofa,
  Car,
  BedDouble,
  Soup
} from 'lucide-react';

const areas = [
  {
    name: "Open Field Area",
    icon: <TentTree className="h-10 w-10 text-green-600" />,
    size: "5000 sq ft",
  },
  {
    name: "Kitchen Area",
    icon: <Utensils className="h-10 w-10 text-red-500" />,
    size: "800 sq ft",
  },
  {
    name: "Lounge Area",
    icon: <Sofa className="h-10 w-10 text-blue-500" />,
    size: "1200 sq ft",
  },
  {
    name: "Dine-In Area",
    icon: <Soup className="h-10 w-10 text-yellow-600" />,
    size: "1000 sq ft",
  },
  {
    name: "Bedroom Area",
    icon: <BedDouble className="h-10 w-10 text-purple-600" />,
    size: "1500 sq ft",
  },
  {
    name: "Parking Area",
    icon: <Car className="h-10 w-10 text-gray-700" />,
    size: "1000 sq ft",
  },
];

const Speacingarea = () => {
  return (
    <section className="py-12 bg-white">
      <h1 className="text-neutral-700 font-bold uppercase text-center text-4xl mb-10">
        Our Hotel Area
      </h1>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4 px-4 md:px-12">
        {areas.map((area, index) => (
          <div
            key={index}
            className="bg-gray-50 rounded-2xl shadow-md p-6 text-center hover:shadow-xl transition-shadow duration-300"
          >
            <div className="flex justify-center mb-4">{area.icon}</div>
            <h2 className="text-xl font-semibold text-neutral-800">{area.name}</h2>
            <p className="text-neutral-500 mt-2">{area.size}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Speacingarea;
