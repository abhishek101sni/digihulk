import React from "react";
// CSS
import "./Belowbanner.css";

// MUI
import { Box, Typography, Grid } from "@mui/material";

const Belowbanner = () => {
  return (
    <Box>
    {/* For DESKTOP */}
      <Grid container>
        <Grid
          item
          xs={12}
          sm={12}
          md={0.7}
          lg={0.7}
          // sx={{ backgroundColor: "red" }}
        ></Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={10.6}
          lg={10.6}
          // sx={{ backgroundColor: "green" }}
          display={{ xs: "none", lg: "block" }}
        >
          <Box
            sx={{
              paddingTop: {
                xs: "20px",
                sm: "20px",
                md: "100px",
                lg: "100px",
              },
              paddingBottom: {
                xs: "20px",
                sm: "20px",
                md: "100px",
                lg: "100px",
              },
              paddingLeft: {
                xs: "20px",
                sm: "20px",
                md: "0px",
                lg: "0px",
              },
              paddingRight: {
                xs: "20px",
                sm: "20px",
                md: "0px",
                lg: "0px",
              },
            }}
          >
            <Typography
              sx={{
                fontSize: {
                  xs: "20px",
                  sm: "20px",
                  md: "17px",
                  lg: "17px",
                },
                fontWeight: {
                  xs: "10px",
                  sm: "10px",
                  md: "400",
                  lg: "400",
                },
                fontFamily: "Poppins, sans-serif",
                textAlign: {
                  xs: "justify",
                  sm: "justify",
                  md: "center",
                  lg: "center",
                },
              }}
            >
              since 1989. For millions of users. We transform businesses with
              powerful and adaptable <br />
              digital solutions that satisfy the needs of today and unlock the
              opportunities of <br />
              tomorrow.
            </Typography>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={0.7}
          lg={0.7}
          // sx={{ backgroundColor: "blue" }}
        ></Grid>
      </Grid>

      {/* For Mobile */}

        <Grid container>
        <Grid
          item
          xs={12}
          sm={12}
          md={0.7}
          lg={0.7}
        //   sx={{ backgroundColor: "red" }}
        ></Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={10.6}
          lg={10.6}
        //   sx={{ backgroundColor: "green" }}
          display={{ xs: "", lg: "none"}}
        >
          <Box
            sx={{
              paddingTop: {
                xs: "20px",
                sm: "20px",
                md: "100px",
                lg: "100px",
              },
              paddingBottom: {
                xs: "20px",
                sm: "20px",
                md: "100px",
                lg: "100px",
              },
              paddingLeft: {
                xs: "20px",
                sm: "20px",
                md: "0px",
                lg: "0px",
              },
              paddingRight: {
                xs: "20px",
                sm: "20px",
                md: "0px",
                lg: "0px",
              },
            }}
          >
            <Typography
              sx={{
                fontSize: {
                  xs: "15px",
                  sm: "15px",
                  md: "17px",
                  lg: "17px",
                },
                fontWeight: {
                  xs: "10px",
                  sm: "10px",
                  md: "400",
                  lg: "400",
                },
                fontFamily: "Poppins, sans-serif",
                textAlign: {
                  xs: "center",
                  sm: "center",
                  md: "center",
                  lg: "center",
                },
              }}
            >
              Since 1989. For millions of users. We transform businesses with
              powerful and adaptable 
              digital solutions that satisfy the needs of today and unlock the
              opportunities of 
              tomorrow.
            </Typography>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={0.7}
          lg={0.7}
        //   sx={{ backgroundColor: "blue" }}
        ></Grid>
      </Grid>
    </Box>
  );
};

export default Belowbanner;
