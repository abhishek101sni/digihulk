import React from "react";

// css
import "./Ourmobileapp.css";

// MUI
import { Box, Typography, Grid } from "@mui/material";

// IMAGES
import mobileImage from "../../../../../assets/images/mobiledevelopement/mobileDev.png";
import mobileImage2 from "../../../../../assets/images/mobiledevelopement/MobileAppDev2.png";

const Ourmobileapp = () => {
  return (
    <Box>
      {/* Heading */}
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
          sx={
            {
              // backgroundColor: "yellow",
            }
          }
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              paddingTop: {
                xs: "0px",
                sm: "0px",
                md: "20px",
                lg: "20px",
              },
              paddingBottom: {
                xs: "0px",
                sm: "0px",
                md: "20px",
                lg: "20px",
              },
            }}
          >
            <Box>
              <Typography
                sx={{
                  fontSize: {
                    xs: "0px",
                    sm: "0px",
                    md: "35px",
                    lg: "35px",
                  },
                  fontWeight: "500",
                  fontFamily: "Open Sans, sans-serif",
                  color: "#253177",
                  // lineHeight: "32px",
                }}
              >
                Our Mobile Application Development Process
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
          // sx={{ backgroundColor: "red" }}
        ></Grid>
      </Grid>

      {/* ForDesktop÷ */}

      {/* Content */}
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
          // sx={{ backgroundColor: "green" }}
        >
          <Grid container>
            {/* Content 1 */}
            <Grid
              item
              xs={12}
              sm={12}
              md={4}
              lg={4}
              // sx={{ backgroundColor: "red" }}
            >
              <Box
                sx={{
                  paddingTop: {
                    xs: "",
                    sm: "",
                    md: "40px",
                    lg: "40px",
                  },
                  paddingBottom: {
                    xs: "",
                    sm: "",
                    md: "40px",
                    lg: "40px",
                  },
                }}
              >
                {/* item 1 */}
                <Box
                  sx={{
                    height: {
                      xs: "",
                      sm: "",
                      md: "100%",
                      lg: "100%",
                    },
                    width: {
                      xs: "",
                      sm: "",
                      md: "100%",
                      lg: "100%",
                    },
                    backgroundColor: "#fff",
                  }}
                >
                  <Box>
                    <Typography
                      sx={{
                        fontSize: {
                          xs: "0px",
                          sm: "0px",
                          md: "30px",
                          lg: "30px",
                        },
                        fontWeight: "500",
                        fontFamily: "Open Sans, sans-serif",
                        color: "#253177",
                        // lineHeight: "32px",
                        textAlign: "right",
                      }}
                    >
                      Strategy Building
                    </Typography>
                  </Box>

                  <Box>
                    <Typography
                      sx={{
                        fontSize: {
                          xs: "0px",
                          sm: "0px",
                          md: "15px",
                          lg: "15px",
                        },
                        fontWeight: "500",
                        fontFamily: "Open Sans, sans-serif",
                        color: "#000",
                        // lineHeight: "32px",
                        textAlign: "right",
                      }}
                    >
                      To ensure flawless execution, it is crucial to conduct
                      thorough preliminary project discussions to get crystal
                      clarity on the business vision and strategically plan out
                      the succeeding steps regarding the app functionalities and
                      features.
                    </Typography>
                  </Box>
                </Box>

                {/* item 2 */}
                <Box
                  sx={{
                    height: {
                      xs: "",
                      sm: "",
                      md: "100%",
                      lg: "100%",
                    },
                    width: {
                      xs: "",
                      sm: "",
                      md: "100%",
                      lg: "100%",
                    },
                    backgroundColor: "#fff",
                    marginTop: {
                      xs: "",
                      sm: "",
                      md: "80px",
                      lg: "80px",
                    },
                  }}
                >
                  <Box>
                    <Typography
                      sx={{
                        fontSize: {
                          xs: "0px",
                          sm: "0px",
                          md: "30px",
                          lg: "30px",
                        },
                        fontWeight: "500",
                        fontFamily: "Open Sans, sans-serif",
                        color: "#253177",
                        // lineHeight: "32px",
                        textAlign: "right",
                      }}
                    >
                      Analysis and Planning
                    </Typography>
                  </Box>

                  <Box>
                    <Typography
                      sx={{
                        fontSize: {
                          xs: "0px",
                          sm: "0px",
                          md: "15px",
                          lg: "15px",
                        },
                        fontWeight: "500",
                        fontFamily: "Open Sans, sans-serif",
                        color: "#000",
                        // lineHeight: "32px",
                        textAlign: "right",
                      }}
                    >
                      Mapping out the competitive business landscape and
                      carrying out market research regarding the current trends
                      help highlight the unique value your venture offers the
                      audiences effectively and awards you with a competitive
                      edge.
                    </Typography>
                  </Box>
                </Box>

                {/* item 3 */}
                <Box
                  sx={{
                    height: {
                      xs: "",
                      sm: "",
                      md: "100%",
                      lg: "100%",
                    },
                    width: {
                      xs: "",
                      sm: "",
                      md: "100%",
                      lg: "100%",
                    },
                    backgroundColor: "#fff",
                    marginTop: {
                      xs: "",
                      sm: "",
                      md: "80px",
                      lg: "80px",
                    },
                  }}
                >
                  <Box>
                    <Typography
                      sx={{
                        fontSize: {
                          xs: "0px",
                          sm: "0px",
                          md: "30px",
                          lg: "30px",
                        },
                        fontWeight: "500",
                        fontFamily: "Open Sans, sans-serif",
                        color: "#253177",
                        // lineHeight: "32px",
                        textAlign: "right",
                      }}
                    >
                      UI/UX Design
                    </Typography>
                  </Box>

                  <Box>
                    <Typography
                      sx={{
                        fontSize: {
                          xs: "0px",
                          sm: "0px",
                          md: "15px",
                          lg: "15px",
                        },
                        fontWeight: "500",
                        fontFamily: "Open Sans, sans-serif",
                        color: "#000",
                        // lineHeight: "32px",
                        textAlign: "right",
                      }}
                    >
                      The blueprint of the app is built to finally lay out how
                      your mobile app ideas and vision would materialise in
                      terms of aesthetics and functionality. This works as a
                      solid framework for mobile app development and design.
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Grid>
            {/* Mobile Image */}
            <Grid
              item
              xs={12}
              sm={12}
              md={4}
              lg={4}
              sx={
                {
                  // backgroundColor: "yellow",
                }
              }
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Box
                  component="img"
                  sx={{
                    height: {
                      xs: "",
                      sm: "",
                      md: "70%",
                      lg: "70%",
                    },
                    width: {
                      xs: "",
                      sm: "",
                      md: "80%",
                      lg: "80%",
                    },
                  }}
                  src={mobileImage}
                />
              </Box>
            </Grid>

            {/* Content 2 */}
            <Grid
              item
              xs={12}
              sm={12}
              md={4}
              lg={4}
              // sx={{ backgroundColor: "red" }}
            >
              <Box
                sx={{
                  paddingTop: {
                    xs: "",
                    sm: "",
                    md: "40px",
                    lg: "40px",
                  },
                  paddingBottom: {
                    xs: "",
                    sm: "",
                    md: "40px",
                    lg: "40px",
                  },
                }}
              >
                {/* item 1 */}
                <Box
                  sx={{
                    height: {
                      xs: "",
                      sm: "",
                      md: "100%",
                      lg: "100%",
                    },
                    width: {
                      xs: "",
                      sm: "",
                      md: "100%",
                      lg: "100%",
                    },
                    backgroundColor: "#fff",
                  }}
                >
                  <Box>
                    <Typography
                      sx={{
                        fontSize: {
                          xs: "0px",
                          sm: "0px",
                          md: "30px",
                          lg: "30px",
                        },
                        fontWeight: "500",
                        fontFamily: "Open Sans, sans-serif",
                        color: "#253177",
                        // lineHeight: "32px",
                        textAlign: "left",
                      }}
                    >
                      App Development
                    </Typography>
                  </Box>

                  <Box>
                    <Typography
                      sx={{
                        fontSize: {
                          xs: "0px",
                          sm: "0px",
                          md: "15px",
                          lg: "15px",
                        },
                        fontWeight: "500",
                        fontFamily: "Open Sans, sans-serif",
                        color: "#000",
                        // lineHeight: "32px",
                        textAlign: "left",
                      }}
                    >
                      With the accurate execution of plans, the actual mobile
                      app development begins. Subsequent to the code being
                      created, the main sections being laid out, the app becomes
                      ultimately ready to be vetted with clients' feedback
                      awaited
                    </Typography>
                  </Box>
                </Box>

                {/* item 2 */}
                <Box
                  sx={{
                    height: {
                      xs: "",
                      sm: "",
                      md: "100%",
                      lg: "100%",
                    },
                    width: {
                      xs: "",
                      sm: "",
                      md: "100%",
                      lg: "100%",
                    },
                    backgroundColor: "#fff",
                    marginTop: {
                      xs: "",
                      sm: "",
                      md: "80px",
                      lg: "80px",
                    },
                  }}
                >
                  <Box>
                    <Typography
                      sx={{
                        fontSize: {
                          xs: "0px",
                          sm: "0px",
                          md: "30px",
                          lg: "30px",
                        },
                        fontWeight: "500",
                        fontFamily: "Open Sans, sans-serif",
                        color: "#253177",
                        // lineHeight: "32px",
                        textAlign: "left",
                      }}
                    >
                      Testing
                    </Typography>
                  </Box>

                  <Box>
                    <Typography
                      sx={{
                        fontSize: {
                          xs: "0px",
                          sm: "0px",
                          md: "15px",
                          lg: "15px",
                        },
                        fontWeight: "500",
                        fontFamily: "Open Sans, sans-serif",
                        color: "#000",
                        // lineHeight: "32px",
                        textAlign: "left",
                      }}
                    >
                      Quality Assurance (QA) mobile app testing is done to make
                      certain that the app built is stable and secure,
                      performing well on all fronts. Performance testing ensures
                      delivery of a quality app solution.
                    </Typography>
                  </Box>
                </Box>

                {/* item 3 */}
                <Box
                  sx={{
                    height: {
                      xs: "",
                      sm: "",
                      md: "100%",
                      lg: "100%",
                    },
                    width: {
                      xs: "",
                      sm: "",
                      md: "100%",
                      lg: "100%",
                    },
                    backgroundColor: "#fff",
                    marginTop: {
                      xs: "",
                      sm: "",
                      md: "80px",
                      lg: "80px",
                    },
                  }}
                >
                  <Box>
                    <Typography
                      sx={{
                        fontSize: {
                          xs: "0px",
                          sm: "0px",
                          md: "30px",
                          lg: "30px",
                        },
                        fontWeight: "500",
                        fontFamily: "Open Sans, sans-serif",
                        color: "#253177",
                        // lineHeight: "32px",
                        textAlign: "left",
                      }}
                    >
                      Development & Support
                    </Typography>
                  </Box>

                  <Box>
                    <Typography
                      sx={{
                        fontSize: {
                          xs: "0px",
                          sm: "0px",
                          md: "15px",
                          lg: "15px",
                        },
                        fontWeight: "500",
                        fontFamily: "Open Sans, sans-serif",
                        color: "#000",
                        // lineHeight: "32px",
                        textAlign: "left",
                      }}
                    >
                      All the technicalities of mobile app launch are dealt with
                      and eventually, the final step of mobile app deployment on
                      various app store platforms reached to embark upon your
                      start up venture.
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Grid>
          </Grid>
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

      {/* for Mobile */}
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
        >
          <Grid container>
            <Grid item xs={12} sm={12} md={12}>
              <Box>
                <Box
                  sx={{
                    paddingTop: {
                      xs: "10px",
                      sm: "10px",
                      md: "0px",
                      lg: "0px",
                    },
                    paddingBottom: {
                      xs: "10px",
                      sm: "10px",
                      md: "0px",
                      lg: "0px",
                    },
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: {
                        xs: "23px",
                        sm: "23px",
                        md: "0px",
                        lg: "0px",
                      },
                      fontWeight: "500",
                      fontFamily: "Open Sans, sans-serif",
                      color: "#253177",
                      // lineHeight: "32px",
                      textAlign: "center",
                    }}
                  >
                    Our Mobile Application
                    <br /> Development <br /> Process
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
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

      {/* Content */}

      {/* IMG */}
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
        >
          <Box>
            <Box
              component="img"
              sx={{
                height: {
                  xs: "250px",
                  sm: "250px",
                  md: "0px",
                  lg: "0px",
                },
                width: {
                  xs: "100%",
                  sm: "100%",
                  md: "0px",
                  lg: "0px",
                },
              }}
              src={mobileImage2}
            />
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
          // sx={{ backgroundColor: "yellow" }}
        >
          <Box>
            {/* Box 1  */}
            <Box
              sx={{
                paddingLeft: {
                  xs: "10px",
                  sm: "10px",
                  md: "0px",
                  lg: "0px",
                },
                paddingRight: {
                  xs: "10px",
                  sm: "10px",
                  md: "0px",
                  lg: "0px",
                },
                marginTop: {
                  xs: "10px",
                  sm: "10px",
                  md: "0px",
                  lg: "0px",
                },
                paddingTop: {
                      xs: "10px",
                      sm: "10px",
                      md: "0px",
                      lg: "0px",
                    },
                    paddingBottom: {
                      xs: "10px",
                      sm: "10px",
                      md: "0px",
                      lg: "0px",
                    },
                backgroundColor: "#E8E8E8",
              }}
            >
              <Box>
                <Typography
                  sx={{
                    fontSize: {
                      xs: "18px",
                      sm: "18px",
                      md: "0px",
                      lg: "0px",
                    },
                    fontWeight: "500",
                    fontFamily: "Open Sans, sans-serif",
                    color: "#253177",
                    // lineHeight: "32px",
                    textAlign: "left",
                   
                  }}
                >
                  Strategy Building
                </Typography>
              </Box>

              <Box>
                <Typography
                  sx={{
                    fontSize: {
                      xs: "15px",
                      sm: "15px",
                      md: "0px",
                      lg: "0px",
                    },
                    fontWeight: "500",
                    fontFamily: "Open Sans, sans-serif",
                    color: "#000",
                    // lineHeight: "32px",
                    textAlign: "left",
                  }}
                >
                  To ensure flawless execution, it is crucial to conduct
                  thorough preliminary project discussions to get crystal clarit
                </Typography>
              </Box>
            </Box>

            {/* Box 2  */}
            <Box
              sx={{
                paddingLeft: {
                  xs: "10px",
                  sm: "10px",
                  md: "0px",
                  lg: "0px",
                },
                paddingRight: {
                  xs: "10px",
                  sm: "10px",
                  md: "0px",
                  lg: "0px",
                },
                marginTop: {
                  xs: "10px",
                  sm: "10px",
                  md: "0px",
                  lg: "0px",
                },
              }}
            >
              <Box>
                <Typography
                  sx={{
                    fontSize: {
                      xs: "18px",
                      sm: "18px",
                      md: "0px",
                      lg: "0px",
                    },
                    fontWeight: "500",
                    fontFamily: "Open Sans, sans-serif",
                    color: "#253177",
                    // lineHeight: "32px",
                    textAlign: "right",
                  }}
                >
                  Analysis and Planning
                </Typography>
              </Box>

              <Box>
                <Typography
                  sx={{
                    fontSize: {
                      xs: "15px",
                      sm: "15px",
                      md: "0px",
                      lg: "0px",
                    },
                    fontWeight: "500",
                    fontFamily: "Open Sans, sans-serif",
                    color: "#000",
                    // lineHeight: "32px",
                    textAlign: "right",
                  }}
                >
                  Mapping out the competitive business landscape and carrying
                  out market research regarding the current trends help
                  highlight
                </Typography>
              </Box>
            </Box>

            {/* Box 3  */}
            <Box
              sx={{
                paddingLeft: {
                  xs: "10px",
                  sm: "10px",
                  md: "0px",
                  lg: "0px",
                },
                paddingRight: {
                  xs: "10px",
                  sm: "10px",
                  md: "0px",
                  lg: "0px",
                },
                marginTop: {
                  xs: "10px",
                  sm: "10px",
                  md: "0px",
                  lg: "0px",
                },
                paddingTop: {
                      xs: "10px",
                      sm: "10px",
                      md: "0px",
                      lg: "0px",
                    },
                    paddingBottom: {
                      xs: "10px",
                      sm: "10px",
                      md: "0px",
                      lg: "0px",
                    },
                backgroundColor: "#E8E8E8",
              }}
            >
              <Box>
                <Typography
                  sx={{
                    fontSize: {
                      xs: "18px",
                      sm: "18px",
                      md: "0px",
                      lg: "0px",
                    },
                    fontWeight: "500",
                    fontFamily: "Open Sans, sans-serif",
                    color: "#253177",
                    // lineHeight: "32px",
                    textAlign: "left",
                    
                  }}
                >
                  UI/UX Design
                </Typography>
              </Box>

              <Box>
                <Typography
                  sx={{
                    fontSize: {
                      xs: "15px",
                      sm: "15px",
                      md: "0px",
                      lg: "0px",
                    },
                    fontWeight: "500",
                    fontFamily: "Open Sans, sans-serif",
                    color: "#000",
                    // lineHeight: "32px",
                    textAlign: "left",
                  }}
                >
                  The blueprint of the app is built to finally lay out how your
                  mobile app ideas and vision would materialise in terms of
                  aesthetics and functionality.
                </Typography>
              </Box>
            </Box>

            {/* Box 4  */}
            <Box
              sx={{
                paddingLeft: {
                  xs: "10px",
                  sm: "10px",
                  md: "0px",
                  lg: "0px",
                },
                paddingRight: {
                  xs: "10px",
                  sm: "10px",
                  md: "0px",
                  lg: "0px",
                },
                marginTop: {
                  xs: "10px",
                  sm: "10px",
                  md: "0px",
                  lg: "0px",
                },
              }}
            >
              <Box>
                <Typography
                  sx={{
                    fontSize: {
                      xs: "18px",
                      sm: "18px",
                      md: "0px",
                      lg: "0px",
                    },
                    fontWeight: "500",
                    fontFamily: "Open Sans, sans-serif",
                    color: "#253177",
                    // lineHeight: "32px",
                    textAlign: "right",
                  }}
                >
                  App Development
                </Typography>
              </Box>

              <Box>
                <Typography
                  sx={{
                    fontSize: {
                      xs: "15px",
                      sm: "15px",
                      md: "0px",
                      lg: "0px",
                    },
                    fontWeight: "500",
                    fontFamily: "Open Sans, sans-serif",
                    color: "#000",
                    // lineHeight: "32px",
                    textAlign: "right",
                  }}
                >
                  With the accurate execution of plans, the actual mobile app
                  development begins. Subsequent to the code being created, the
                  main sections being
                </Typography>
              </Box>
            </Box>

            {/* Box 5  */}
            <Box
              sx={{
                paddingLeft: {
                  xs: "10px",
                  sm: "10px",
                  md: "0px",
                  lg: "0px",
                },
                paddingRight: {
                  xs: "10px",
                  sm: "10px",
                  md: "0px",
                  lg: "0px",
                },
                marginTop: {
                  xs: "10px",
                  sm: "10px",
                  md: "0px",
                  lg: "0px",
                },
                paddingTop: {
                      xs: "10px",
                      sm: "10px",
                      md: "0px",
                      lg: "0px",
                    },
                    paddingBottom: {
                      xs: "10px",
                      sm: "10px",
                      md: "0px",
                      lg: "0px",
                    },
                backgroundColor: "#E8E8E8",
              }}
            >
              <Box>
                <Typography
                  sx={{
                    fontSize: {
                      xs: "18px",
                      sm: "18px",
                      md: "0px",
                      lg: "0px",
                    },
                    fontWeight: "500",
                    fontFamily: "Open Sans, sans-serif",
                    color: "#253177",
                    // lineHeight: "32px",
                    textAlign: "left",
                  }}
                >
                  Testing
                </Typography>
              </Box>

              <Box>
                <Typography
                  sx={{
                    fontSize: {
                      xs: "15px",
                      sm: "15px",
                      md: "0px",
                      lg: "0px",
                    },
                    fontWeight: "500",
                    fontFamily: "Open Sans, sans-serif",
                    color: "#000",
                    // lineHeight: "32px",
                    textAlign: "left",
                  }}
                >
                  Quality Assurance (QA) mobile app testing is done to make
                  certain that the app built is stable and secure,
                </Typography>
              </Box>
            </Box>

            {/* Box 6  */}
            <Box
              sx={{
                paddingLeft: {
                  xs: "10px",
                  sm: "10px",
                  md: "0px",
                  lg: "0px",
                },
                paddingRight: {
                  xs: "10px",
                  sm: "10px",
                  md: "0px",
                  lg: "0px",
                },
                marginTop: {
                  xs: "10px",
                  sm: "10px",
                  md: "0px",
                  lg: "0px",
                },
                // backgroundColor: "#E8E8E8",
              }}
            >
              <Box>
                <Typography
                  sx={{
                    fontSize: {
                      xs: "18px",
                      sm: "18px",
                      md: "0px",
                      lg: "0px",
                    },
                    fontWeight: "500",
                    fontFamily: "Open Sans, sans-serif",
                    color: "#253177",
                    // lineHeight: "32px",
                    textAlign: "right",
                  }}
                >
                  Development & Support
                </Typography>
              </Box>

              <Box>
                <Typography
                  sx={{
                    fontSize: {
                      xs: "15px",
                      sm: "15px",
                      md: "0px",
                      lg: "0px",
                    },
                    fontWeight: "500",
                    fontFamily: "Open Sans, sans-serif",
                    color: "#000",
                    // lineHeight: "32px",
                    textAlign: "right",
                  }}
                >
                  With the accurate execution of plans, the actual mobile app
                  development begins. Subsequent to the code being created, the
                  main sections being laid out, the app becomes ultimately ready
                  to be vetted with clients' feedback awaited
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
          // sx={{ backgroundColor: "blue" }}
        ></Grid>
      </Grid>
    </Box>
  );
};

export default Ourmobileapp;
