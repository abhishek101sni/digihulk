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
import Webdev from "../pages/OurServices/ParentServices/WebDev/Webdev";

// Child Services
import Ppc from "../pages/OurServices/ChildServices/PPC/Ppc";
import Seo from "../pages/OurServices/ChildServices/Seo/Seo";
import Socialmedia from "../pages/OurServices/ChildServices/SocialMedia/Socialmedia";
import Emailmarketing from "../pages/OurServices/ChildServices/EmailMarketing/Emailmarketing";
import GoogleAnalytics from "../pages/OurServices/ChildServices/GoogleAnalytics/Googleanalytics";
import EcommerceWebsite from "../pages/OurServices/ChildServices/EcommerceWebsite/Ecommercewebsite";
import Customwebsite from "../pages/OurServices/ChildServices/CustomWebsite/Customwebsite";
import Wordpresswebsite from "../pages/OurServices/ChildServices/WordpressWebsite/Wordpresswebsite";

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
          <Route path="/website-development/" element={<Webdev />} />

          {/* CHILD SERVICES */}
          <Route path="/custom-website/" element={<Customwebsite />} />
          <Route path="/e-commerce/" element={<EcommerceWebsite />} />
          <Route path="/email-marketing/" element={<Emailmarketing />} />
          <Route path="/google-analytics/" element={<GoogleAnalytics />} />
          <Route path="/pay-per-click/" element={<Ppc />} />
          <Route path="/search-engine-optimisation/" element={<Seo />} />
          <Route path="/social-media/" element={<Socialmedia />} />
          <Route path="/wordpress-website/" element={<Wordpresswebsite/>} />
          
        </Routes>
      </Scrolltotop>
      {/* <Footer /> */}
    </BrowserRouter>
  );
};

export default Navigation;
