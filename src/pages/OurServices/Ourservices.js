import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import sample from "../../assets/images/PPC/ppc.png";

import "./Ourservices.css";

const Ourservices = () => {
  return (
    <Box
      sx={{
        marginTop: { xs: "55px", sm: "55px", md: "90px", lg: "90px" },
      }}
    >
      {/* TITLE */}
      <Grid container>
        <Grid
          item
          xs={12}
          sm={12}
          md={0.7}
          lg={0.7}
          sx={{ backgroundColor: "red" }}
        ></Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={10.6}
          lg={10.6}
          sx={{ backgroundColor: "green" }}
        >
          <Box>
            {/* Title */}
            <Box>
              <Typography
                sx={{
                  fontSize: {
                    xs: "50px",
                    sm: "50px",
                    md: "100px",
                    lg: "100px",
                  },
                  fontWeight: "600",
                  //   fontFamily: "Poppins, sans-serif",
                  fontFamily: "Raleway, sans-serif",
                  textAlign: "center",
                  color: "#000",
                }}
              >
                Our Services
              </Typography>
            </Box>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={0.7}
          lg={0.7}
          sx={{ backgroundColor: "blue" }}
        ></Grid>
      </Grid>

      {/* Content */}

      <Grid container>
        <Grid
          item
          xs={12}
          sm={12}
          md={0.7}
          lg={0.7}
          sx={{ backgroundColor: "red" }}
        ></Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={10.6}
          lg={10.6}
          sx={{ backgroundColor: "green" }}
        >
          <Grid container>
            <Grid
              item
              xs={12}
              sm={12}
              md={3}
              lg={3}
              sx={{
                backgroundColor: "orange",
                display: "flex",
                justifyContent: {
                  xs: "center",
                  sm: "center",
                  md: "center",
                  lg: "center",
                },
                alignItem: {
                  xs: "center",
                  sm: "center",
                  md: "center",
                  lg: "center",
                },
              }}
            >
              <Box
                sx={{
                  paddingTop: {
                    xs: "0px",
                    sm: "0px",
                    md: "60px",
                    lg: "60px",
                  },
                  paddingBottom: {
                    xs: "0px",
                    sm: "0px",
                    md: "60px",
                    lg: "60px",
                  },
                }}
              >
                {/* IMAGE */}

                <Box
                  component="img"
                  sx={{
                    height: {
                      xs: "50px",
                      sm: "50px",
                      md: "100px",
                      lg: "100px",
                    },
                    width: {
                      xs: "50px",
                      sm: "50px",
                      md: "100px",
                      lg: "100px",
                    },
                  }}
                  src={sample}
                />

                {/* heading */}
                <Box>
                  <Typography
                    sx={{
                      fontSize: {
                        xs: "50px",
                        sm: "50px",
                        md: "30px",
                        lg: "30px",
                      },
                      fontWeight: "600",
                      //   fontFamily: "Poppins, sans-serif",
                      fontFamily: "Raleway, sans-serif",
                      textAlign: "center",
                      color: "#000",
                    }}
                  >
                    Digital Marketing
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid
              item
              xs={12}
              sm={12}
              md={3}
              lg={3}
              sx={{ backgroundColor: "cyan" }}
            ></Grid>
            <Grid
              item
              xs={12}
              sm={12}
              md={3}
              lg={3}
              sx={{ backgroundColor: "blue" }}
            ></Grid>
            <Grid
              item
              xs={12}
              sm={12}
              md={3}
              lg={3}
              sx={{ backgroundColor: "yellow" }}
            ></Grid>
            <Grid
              item
              xs={12}
              sm={12}
              md={3}
              lg={3}
              sx={{ backgroundColor: "brown" }}
            ></Grid>
          </Grid>
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={0.7}
          lg={0.7}
          sx={{ backgroundColor: "blue" }}
        ></Grid>
      </Grid>
    </Box>
  );
};

export default Ourservices;
