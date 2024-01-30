import React from "react";

// MUI
import { Typography, Box, Grid } from "@mui/material";

// CSS
import "./HomeVideo.css"

// VIDEO
import homeVideo from "../../../../assets/video/VideoWithoutText.mp4";
import homeVideo2 from "../../../../assets/video/homeVideo2.mp4";
import homeVideo3 from "../../../../assets/video/Background.mp4";

const HomeVideo = () => {
  return (
    <>
      <Box
        sx={{
          marginTop: { xs: "51px", sm: "51px", md: "80px", lg: "80px" },
        }}
      >
        {/* VIDEO */}
        <Grid container>
          <Grid
            item
            xs={12}
            sm={12}
            md={12}
            lg={12}
            // display={{ xs: "none", lg: "block" }}
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
              <Box
                sx={{
                  position: "absolute",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  textAlign: "center",
                  top: { xs: "50px", sm: "50px", md: "50px", lg: "50px" },
                  width: "100%",
                }}
              >
                {/* Text */}
                <Grid container>
                  <Grid
                    item
                    xs={12}
                    sm={12}
                    md={0.7}
                    lg={0.7}
                    // sx={{ backgroundColor: "blue" }}
                  ></Grid>

                  <Grid
                    item
                    xs={12}
                    sm={12}
                    md={10.6}
                    lg={10.6}
                    // sx={{ backgroundColor: "red" }}
                  >
                    <Box
                      sx={{
                        marginTop: {
                          xs: "80px",
                          sm: "80px",
                          md: "200px",
                          lg: "200px",
                        },
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      {/* TEXT 1 */}
                      <Box>
                        <Typography
                          sx={{
                            display: "flex",
                            fontSize: {
                              xs: "0px",
                              sm: "0px",
                              md: "100px",
                              lg: "100px",
                            },
                            fontWeight: {
                              xs: "0",
                              sm: "0",
                              md: "600",
                              lg: "600",
                            },
                            fontFamily: "Raleway, sans-serif",
                            // color: "#253177",
                            color: "#fff",
                          }}
                        >
                          DigiHulks
                        </Typography>
                      </Box>
                      {/* for mobile */}
                      <Box sx={{}}>
                        <Typography
                          sx={{
                            display: "flex",
                            fontSize: {
                              xs: "60px",
                              sm: "60px",
                              md: "0px",
                              lg: "0px",
                            },
                            fontWeight: {
                              xs: "500",
                              sm: "500",
                              md: "0",
                              lg: "0",
                            },
                            paddingLeft: "10px",
                            paddingRight: "10px",
                            fontFamily: "Raleway, sans-serif",
                            color: "#fff",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          DigiHulks
                        </Typography>
                       
                      </Box>

                      {/* TEXT 2 */}
                      <Box
                        sx={{
                          marginTop: {
                            xs: "10px",
                            sm: "10px",
                            md: "0px",
                            lg: "0px",
                          },
                        }}
                      >
                        <Typography
                          sx={{
                            display: "flex",
                            justifyContent: {
                              xs: "center",
                              sm: "center",
                              md: "center",
                              lg: "center",
                            },
                            alignItems: {
                              xs: "center",
                              sm: "center",
                              md: "center",
                              lg: "center",
                            },
                            fontSize: {
                              xs: "15px",
                              sm: "15px",
                              md: "27px",
                              lg: "27px",
                            },
                            fontWeight: {
                              xs: "500",
                              sm: "500",
                              md: "500",
                              lg: "500",
                            },
                            fontFamily: "Raleway, sans-serif",
                            color: "#2AAA8A",
                            marginTop: "-5px",
                            wordSpacing: "8px",
                          }}
                        >
                          UNLOCKING DIGITAL POSSIBILITES
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
                    // sx={{ backgroundColor: "green" }}
                  ></Grid>
                </Grid>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default HomeVideo;
