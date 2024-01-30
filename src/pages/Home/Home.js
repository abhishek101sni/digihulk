import React from "react";

// MUI
import { Box, Typography, Grid } from "@mui/material";
import Homecards from "./HomeComponents/Homecards/Homecards";
import HomeVideo from "./HomeComponents/HomeVideo/HomeVideo";
import Footer from "../../components/Footer/Footer";
import Ourexclusiveservice from "./HomeComponents/OurExclusiveService/Ourexclusiveservice";
import Whatwedo from "./HomeComponents/WhatWeDo/Whatwedo";

const Home = () => {
  return (
    <Box sx={{ xs: "", sm: "", md: "0px", lg: "0px" }}>
      <HomeVideo/>
      {/* <Homecards /> */}
      <Whatwedo/>
      <Ourexclusiveservice/>
      {/* Footer */}
      <Footer/>
    </Box>
  );
};

export default Home;
