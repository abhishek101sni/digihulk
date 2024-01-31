import React from "react";

// CSS
import "./Webdev.css";

// MUI
import { Box, Typography, Grid } from "@mui/material";

// IMAGES
import webdevimg from "../../../../assets/images/WebDevlopement/webdev2.png";

const Webdev = () => {
  return (
    <Box
      sx={{
        marginTop: { xs: "51px", sm: "51px", md: "90px", lg: "90px" },
      }}
    >
      {/* For Desktop */}
      <Grid container>
        <Grid
          item
          xs={12}
          sm={12}
          md={0.7}
          lg={0.7}
          sx={{ backgroundColor: "#253177" }}
        ></Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={5.3}
          lg={5.3}
          sx={{ backgroundColor: "#253177" }}
        >
          <Box
            sx={{
              marginTop: {
                xs: "0px",
                sm: "0px",
                md: "100px",
                lg: "100px",
              },
              marginBottom: {
                xs: "0px",
                sm: "0px",
                md: "50px",
                lg: "50px",
              },
            }}
            display={{ xs: "none", lg: "block" }}
          >
            <Box>
              <Typography
                sx={{
                  color: "rgb(232, 232, 232)",
                  fontSize: {
                    xs: "0px",
                    sm: "0px",
                    md: "45px",
                    lg: "45px",
                  },
                  marginTop: {
                    xs: "0px",
                    sm: "0px",
                    md: "80px",
                    lg: "80px",
                  },
                  fontWeight: "600",
                  fontFamily: "Raleway, sans-serif",
                  lineHeight: "50px",
                }}
              >
                Web Development
                <br />
                Services
              </Typography>
            </Box>
            <Box>
              <Typography
                sx={{
                  color: "rgb(232, 232, 232)",
                  fontSize: {
                    xs: "0px",
                    sm: "0px",
                    md: "19px",
                    lg: "19px",
                  },
                  fontWeight: "600",
                  fontFamily: "Raleway, sans-serif",
                  marginTop: {
                    xs: "0px",
                    sm: "0px",
                    md: "10px",
                    lg: "10px",
                  },
                }}
              >
                Genuine care for your web development project
              </Typography>
            </Box>
            <Box>
              <Typography
                sx={{
                  color: "rgb(232, 232, 232)",
                  fontSize: {
                    xs: "0px",
                    sm: "0px",
                    md: "18px",
                    lg: "18px",
                  },
                  fontWeight: "500",

                  fontFamily: "Raleway, sans-serif",
                  fontStyle: "italic",
                  marginTop: {
                    xs: "0px",
                    sm: "0px",
                    md: "30px",
                    lg: "30px",
                  },
                }}
              >
                With the expertise built on 1,900+ web projects, ScienceSoft
                professionally designs, redesigns and continuously supports
                customer-facing and enterprise web apps and achieves high
                conversion and adoption rates.
              </Typography>
            </Box>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={5.3}
          lg={5.3}
          sx={{
            backgroundColor: "#253177",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            component="img"
            src={webdevimg}
            sx={{
              width: {
                xs: "0px",
                sm: "0px",
                md: "500px",
                lg: "500px",
              },
              height: {
                xs: "0px",
                sm: "0px",
                md: "500px",
                lg: "500px",
              },
            }}
            display={{ xs: "none", lg: "block" }}
          />
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={0.7}
          lg={0.7}
          sx={{ backgroundColor: "#253177" }}
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
          sx={{ backgroundColor: "#253177" }}
        ></Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={5.3}
          lg={5.3}
          sx={{
            backgroundColor: "#253177",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            component="img"
            src={webdevimg}
            sx={{
              width: {
                xs: "300px",
                sm: "300px",
                md: "500px",
                lg: "500px",
              },
              height: {
                xs: "300px",
                sm: "300px",
                md: "500px",
                lg: "500px",
              },
            }}
            display={{ lg: "none" }}
          />
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={5.3}
          lg={5.3}
          sx={{ backgroundColor: "#253177" }}
        >
          <Box
            sx={{
              marginTop: {
                xs: "-20px",
                sm: "-20px",
                md: "100px",
                lg: "100px",
              },
              marginBottom: {
                xs: "50px",
                sm: "5px",
                md: "50px",
                lg: "50px",
              },
            }}
            display={{ lg: "none" }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Box>
                <Typography
                  sx={{
                    color: "rgb(232, 232, 232)",
                    fontSize: {
                      xs: "30px",
                      sm: "30px",
                      md: "45px",
                      lg: "45px",
                    },
                    marginTop: {
                      xs: "0px",
                      sm: "0px",
                      md: "80px",
                      lg: "80px",
                    },
                    fontWeight: "600",
                    fontFamily: "Raleway, sans-serif",
                    lineHeight: "40px",
                    textAlign: "center",
                  }}
                >
                  Web Development
                  <br />
                  Services
                </Typography>
              </Box>

              <Box
                sx={{
                  paddingLeft: {
                    xs: "10px",
                    sm: "10px",
                  },
                  paddingRight: {
                    xs: "10px",
                    sm: "10px",
                  },
                  marginTop: {
                    xs: "10px",
                    sm: "10px",
                    md: "10px",
                    lg: "10px",
                  },
                }}
              >
                <Typography
                  sx={{
                    color: "rgb(232, 232, 232)",
                    fontSize: {
                      xs: "16px",
                      sm: "16px",
                      md: "19px",
                      lg: "19px",
                    },
                    fontWeight: "600",
                    fontFamily: "Raleway, sans-serif",

                    textAlign: "center",
                  }}
                >
                  Genuine care for your web development project
                </Typography>
              </Box>
              <Box
                sx={{
                  width: {
                    xs: "90%",
                  },
                  marginTop: {
                    xs: "10px",
                    sm: "10px",
                  },
                }}
              >
                <Typography
                  sx={{
                    color: "rgb(232, 232, 232)",
                    fontSize: {
                      xs: "15px",
                      sm: "15px",
                      md: "18px",
                      lg: "18px",
                    },
                    fontWeight: "500",

                    fontFamily: "Raleway, sans-serif",
                    fontStyle: "italic",
                    marginTop: {
                      xs: "0px",
                      sm: "0px",
                      md: "30px",
                      lg: "30px",
                    },

                    textAlign: "center",
                  }}
                >
                  With the expertise built on 1,900+ web projects, ScienceSoft
                  professionally designs, redesigns and continuously supports
                  customer-facing and enterprise web apps and achieves high
                  conversion and adoption rates.
                </Typography>
              </Box>
            </Box>
          </Box>
        </Grid>

        <Grid
          item
          xs={12}
          sm={12}
          md={0.7}
          lg={0.7}
          sx={{ backgroundColor: "#253177" }}
        ></Grid>
      </Grid>
    </Box>
  );
};

export default Webdev;
