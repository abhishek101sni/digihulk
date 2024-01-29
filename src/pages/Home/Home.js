import React from "react";

// MUI
import { Box, Typography, Grid } from "@mui/material";
import Homecards from "./HomeComponents/Homecards/Homecards";

const Home = () => {
  return (
    <Box sx={{ xs: "", sm: "", md: "80px", lg: "80px" }}>
      <Homecards />
    </Box>
  );
};

export default Home;
