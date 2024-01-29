import React from "react";

// MUI
import { Typography, Box, Grid } from "@mui/material";

// import homeVideo3 from "../../../../../assets/video/Background.mp4";
import homeVideo3 from "../../assets/video/Background.mp4";

import "./Aboutus.css"

const Aboutus = () => {
  return (
    <>
      <Grid container 
      // sx={{backgroundColor:"red"}}
      >
        <Grid item xs={12} sm={12} md={12} lg={12} 
        // sx={{backgroundColor:"red"}}
        >
          <Box
            sx={{
              width: { xs: "100%", sm: "100%", md: "100%", lg: "100%" },
              height: { xs: "50vh", sm: "50vh", md: "100vh", lg: "100vh" },
            }}
          >
             <video
                src={homeVideo3}
                autoPlay
                loop
                muted
                style={{
                  width: "100%",
                  height: "90%",
                  objectFit: "cover",
                }}
              />
          </Box>

        </Grid>
      </Grid>
    </>
  );
};

export default Aboutus;
