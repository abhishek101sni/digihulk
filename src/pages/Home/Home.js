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
import Belowbanner from "./HomeComponents/BelowBanner/Belowbanner";

const Home = () => {
  return (
    <Box
      sx={{
        marginTop: { xs: "51px", sm: "51px", md: "90px", lg: "90px" },
      }}
    >
      <Growyourbusiness />
      <Belowbanner/>
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
