import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// PAGES
import Home from "../pages/Home/Home";
import Aboutus from "../pages/Aboutus/Aboutus";
import Contactus from "../pages/Contactus/Contactus";
import Ourservices from "../pages/OurServices/Ourservices";
import Scrolltotop from "../pages/ScrollToTop/Scrolltotop";

// header
import Header from "../components/Header/Header";

// Parent Services

import Contentmarketing from "../pages/OurServices/ParentServices/ContentMarketing/Contentmarketing";
import Digitalmarketing from "../pages/OurServices/ParentServices/DigitalMarketing/Digitalmarketing";
import Mobileappdev from "../pages/OurServices/ParentServices/MobileAppDev/Mobileappdev";
import Webdev from "../pages/OurServices/ParentServices/WebDev/Webdev"

// Footer
// import Footer from "../components/Footer/Footer";

const Navigation = () => {
  return (
    <BrowserRouter>
      <Header />
      <Scrolltotop>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us/" element={<Aboutus />} />
          <Route path="/contact-us/" element={<Contactus />} />
          <Route path="/our-services/" element={<Ourservices />} />

          {/* PARENT SERVICES */}
          <Route path="/content-marketing/" element={<Contentmarketing />} />
          <Route path="/digital-marketing/" element={<Digitalmarketing />} />
          <Route path="/mobile-app-develpment/" element={<Mobileappdev />} />
          <Route path="/website-development/" element={<Webdev/>} />
        </Routes>
      </Scrolltotop>
      {/* <Footer /> */}
    </BrowserRouter>
  );
};

export default Navigation;
