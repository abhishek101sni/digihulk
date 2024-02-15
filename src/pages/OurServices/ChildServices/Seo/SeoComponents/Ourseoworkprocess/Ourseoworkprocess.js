import React from "react";

// CSS
import "./Ourseoworkprocess.css";

// MUI
import { Box, Typography, Grid } from "@mui/material";

// Css
import "./Ourseoworkprocess.css";

// IMAGES
import samsam from "../../../../../../assets/images/OurServices/content.png";

// jSON
import { ourworkprocess } from "../../../../../../assets/json/SeoJson/OurseoworkPro/Ourseoworkpro";

const Ourseoworkprocess = () => {
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
          sx={{
            // backgroundColor: "yellow",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              paddingTop: {
                xs: "10px",
                sm: "10px",
                md: "20px",
                lg: "20px",
              },
              paddingBottom: {
                xs: "10px",
                sm: "10px",
                md: "20px",
                lg: "20px",
              },
            }}
          >
            <Box>
              <Typography
                sx={{
                  fontSize: {
                    xs: "25px",
                    sm: "25px",
                    md: "35px",
                    lg: "35px",
                  },
                  fontWeight: "500",
                  fontFamily: "Open Sans, sans-serif",
                  color: "#253177",
                  // lineHeight: "32px",
                }}
              >
                Our Seo Work process
              </Typography>
            </Box>

            {/* for desktop */}
            <Box>
              <Typography
                sx={{
                  fontSize: {
                    xs: "0px",
                    sm: "0px",
                    md: "18px",
                    lg: "18px",
                  },
                  fontWeight: "500",
                  fontFamily: "Open Sans, sans-serif",
                  color: "#000",
                  // lineHeight: "32px",
                }}
              >
                360-degree solutions to our clients through bespoke ,
                industry-focused SEO services
              </Typography>
            </Box>

            {/* for mobile */}
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
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
              }}
            >
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
                  textAlign: "center",
                }}
              >
                360-degree solutions to our clients through bespoke ,
                industry-focused
                <br />
                SEO services
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

      {/* Content */}
      <Grid container>
        <Grid
          item
          xs={12}
          sm={12}
          md={0.7}
          lg={0.7}
          // sx={{ backgroundColor: "green" }}
        ></Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={10.6}
          lg={10.6}
          // sx={{ backgroundColor: "orange" }}
        >
          <Grid container>
          {ourworkprocess.map((item)=>(
            <Grid
              item
              xs={12}
              sm={12}
              md={4}
              lg={4}
              sx={{
                // backgroundColor: "pink",
                padding: {
                  xs: "10px",
                  sm: "10px",
                  md: "10px",
                  lg: "10px",
                },
              }}
            >
              <Box
                sx={{
                  height: {
                    xs: "100%",
                    sm: "100%",
                    md: "100%",
                    lg: "100%",
                  },
                  width: {
                    xs: "100%",
                    sm: "100%",
                    md: "100%",
                    lg: "100%",
                  },
                  backgroundColor: "#fff",
                  borderRadius: "10px",
                  boxShadow: 5,
                }}
              >
                <Box
                  sx={{
                    paddingTop: {
                      xs: "20px",
                      sm: "20px",
                      md: "20px",
                      lg: "20px",
                    },
                    paddingBottom: {
                      xs: "20px",
                      sm: "20px",
                      md: "20px",
                      lg: "20px",
                    },
                    display: "flex",
                    flexDirection: "column",
                    // justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Box>
                    <Box
                      component="img"
                      src={item.image}
                      sx={{
                        height: {
                          xs: "100px",
                          sm: "100px",
                          lg: "100px",
                          md: "100px",
                        },
                        width: {
                          xs: "100px",
                          sm: "100px",
                          lg: "100px",
                          md: "100px",
                        },
                      }}
                    />
                  </Box>
                  <Box>
                    <Typography
                      sx={{
                        fontSize: {
                          xs: "20px",
                          sm: "20px",
                          md: "20px",
                          lg: "20px",
                        },
                        fontWeight: "600",
                        fontFamily: "Open Sans, sans-serif",
                        color: "#000",
                        // lineHeight: "32px",
                          marginTop:{
                        xs:"10px",
                        sm:"10px",
                        md:"10px",
                        lg:"10px",
                        },
                        paddingLeft:{
                          xs:"20px",
                          sm:"20px",
                          md:"0px",
                          lg:"0px"
                        },
                        paddingRight:{
                          xs:"20px",
                          sm:"20px",
                          md:"0px",
                          lg:"0px"
                        }
                      }}
                    >
                      {item.title}
                    </Typography>
                  </Box>
                  <Box>
                    <Typography
                     sx={{
                        fontSize: {
                          xs: "14px",
                          sm: "14px",
                          md: "16px",
                          lg: "16px",
                        },
                        fontWeight: "500",
                        fontFamily: "Open Sans, sans-serif",
                        color: "rgba(122,122,122)",
                        lineHeight: "20px",
                        textAlign :"center",
                        marginTop:{
                        xs:"10px",
                        sm:"10px",
                        md:"10px",
                        lg:"10px",
                        },
                        paddingLeft:{
                        xs:"10px",
                        sm:"10px",
                        md:"10px",
                        lg:"10px",
                        },
                          paddingRight:{
                        xs:"10px",
                        sm:"10px",
                        md:"10px",
                        lg:"10px",
                        },
                        
                      }}
                    >
                  {item.description}
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Grid>
            ))}
          </Grid>
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
  );
};

export default Ourseoworkprocess;
