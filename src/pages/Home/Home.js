import React from "react";

// MUI
import { Box, Typography, Grid } from "@mui/material";

// PAGES
import Homecards from "./HomeComponents/Homecards/Homecards";
import HomeVideo from "./HomeComponents/HomeVideo/HomeVideo";
import Footer from "../../components/Footer/Footer";
import Ourexclusiveservice from "./HomeComponents/OurExclusiveService/Ourexclusiveservice";
import Whatwedo from "./HomeComponents/WhatWeDo/Whatwedo";
import Growyourbusiness from "./HomeComponents/GrowYourBusiness/Growyourbusiness";
import Whychoosedigihulk from "./HomeComponents/WhyChooseDigiHulk/Whychoosedigihulk";

const Home = () => {
  return (
    <Box sx={{ xs: "", sm: "", md: "0px", lg: "0px" }}>
      <Growyourbusiness />
      {/* <HomeVideo/> */}
      {/* <Homecards /> */}
      <Whatwedo />
      <Ourexclusiveservice />
      {/* Footer */}
      <Whychoosedigihulk />
      <Footer />
    </Box>
  );
};

export default Home;
