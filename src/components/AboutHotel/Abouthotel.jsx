import React from "react";
import { motion } from "framer-motion";
import {
  FaUtensils,
  FaBed,
  FaGlassCheers,
  FaParking,
  FaSpa,
  FaWifi,
} from "react-icons/fa";

const facilities = [
  {
    icon: <FaUtensils className="text-3xl text-red-500" />,
    title: "Catering",
    desc: "Exquisite multi-cuisine food tailored to your wedding theme.",
  },
  {
    icon: <FaBed className="text-3xl text-red-500" />,
    title: "Luxury Rooms",
    desc: "Comfortable and elegant stay for guests and families.",
  },
  {
    icon: <FaGlassCheers className="text-3xl text-red-500" />,
    title: "Banquet Hall",
    desc: "Spacious and beautifully decorated hall for ceremonies.",
  },
  {
    icon: <FaParking className="text-3xl text-red-500" />,
    title: "Valet Parking",
    desc: "Secure and hassle-free parking for all your guests.",
  },
  {
    icon: <FaSpa className="text-3xl text-red-500" />,
    title: "Spa & Salon",
    desc: "Get wedding-ready with on-site grooming and wellness services.",
  },
  {
    icon: <FaWifi className="text-3xl text-red-500" />,
    title: "High-Speed Wi-Fi",
    desc: "Seamless connectivity throughout the hotel premises.",
  },
];

const Abouthotel = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-slate-700 uppercase mb-6"
        >
          About Us
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-lg text-slate-600 max-w-3xl mx-auto mb-12"
        >
          We offer an unforgettable experience for your dream Indian wedding.
          From grand decor and catering to spa treatments and luxury rooms, our
          venue is designed to make every moment magical.
        </motion.p>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {facilities.map((facility, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg p-4 sm:p-6 hover:shadow-2xl transition duration-300"
            >
              {/* Icon with 360 rotation on hover */}
              <div className="flex justify-center items-center mb-3 transition-transform duration-500 hover:rotate-[360deg]">
                {facility.icon}
              </div>
              <h3 className="text-base sm:text-xl font-semibold mb-1">
                {facility.title}
              </h3>
              <p className="text-gray-600 text-sm">{facility.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Abouthotel;
