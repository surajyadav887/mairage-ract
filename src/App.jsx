import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Herosection from "./components/Herosection/Herosection";
import Abouthotel from "./components/AboutHotel/Abouthotel";
import Footter from "./components/Footer/Footter";
import Speacingarea from "./components/Speacingara/Speacingarea";
import Events from "./components/Events/Events";
import Gallary from "./components/Gallary/Gallary";
import Testimonials from "./components/Testimonials/Testimonials";
import Vediogal from "./components/vediogallary/Vediogal";


const App = () => {
  return (
    <>
   <Navbar/>
   <Herosection/>
   <Abouthotel/>
   <Speacingarea/>
   <Events/>
   <Gallary/>
   <Vediogal/>
   <Testimonials/>
   <Footter/>
   </>
  );
};

export default App;
