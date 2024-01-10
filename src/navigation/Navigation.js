import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// PAGES
import Home from "../pages/Home/Home";
import Aboutus from "../pages/Aboutus/Aboutus";
import Contactus from "../pages/Contactus/Contactus";
import Service from "../pages/Service/Service";
import Scrolltotop from "../pages/ScrollToTop/Scrolltotop";

const Navigation = () => {
  return (
    <BrowserRouter>
      <Scrolltotop>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/contactus" element={<Contactus />} />
          <Route path="/service" element={<Service />} />
        </Routes>
      </Scrolltotop>
    </BrowserRouter>
  );
};

export default Navigation;
