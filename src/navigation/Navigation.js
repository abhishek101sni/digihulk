import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// PAGES
import Home from "../pages/Home/Home";
import Aboutus from "../pages/Aboutus/Aboutus";
import Contactus from "../pages/Contactus/Contactus";
import Service from "../pages/Service/Service";
import Scrolltotop from "../pages/ScrollToTop/Scrolltotop";
// header
import Header from "../components/Header/Header";
// Footer
import Footer from "../components/Footer/Footer";
const Navigation = () => {
  return (
    <BrowserRouter>
      <Header />
      <Scrolltotop>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us/" element={<Aboutus />} />
          <Route path="/contact-us/" element={<Contactus />} />
          <Route path="/service" element={<Service />} />
        </Routes>
      </Scrolltotop>
      {/* <Footer /> */}
    </BrowserRouter>
  );
};

export default Navigation;
