import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import heroImage from "../../assets/marriage3.png";

const prompts = [
  "Celebrate Your Dream Wedding With Us",
  "Make Memories That Last a Lifetime",
  "Host Your Royal Indian Wedding in Style",
];

const Herosection = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % prompts.length);
    }, 5000); // Changes every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="relative w-full h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50" />

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center h-full text-center px-6">
        <div className="text-white max-w-3xl">
          <AnimatePresence mode="wait">
            <motion.h1
              key={prompts[index]}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-6xl font-bold mb-6 leading-tight"
            >
              {prompts[index].includes("Wedding") ? (
                <>
                  {prompts[index].split("Wedding")[0]}
                  <strong className="text-yellow-500">Wedding</strong>
                  {prompts[index].split("Wedding")[1]}
                </>
              ) : (
                prompts[index]
              )}
            </motion.h1>
          </AnimatePresence>

          <p className="text-lg sm:text-xl mb-8">
            Experience royal luxury and unforgettable moments at our premium Indian wedding venue.
          </p>
          <motion.a
            href="#book"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-6 rounded-full transition-all duration-300"
          >
            Book Us
          </motion.a>
        </div>
      </div>
    </div>
  );
};

export default Herosection;
