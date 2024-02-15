import React from "react";

// CSS
import "./Resultdriven.css";

// MUI
import { Box, Typography, Grid } from "@mui/material";

// IMAGES
import sampo from "../../../../../../assets/images/OurServices/seo.png";

// JSON
import { resultdriv } from "../../../../../../assets/json/SeoJson/ResultDriven/Resultdriv";

const Resultdriven = () => {
  return (
    <Box>
      <Grid container>
        <Grid item xs={12} sm={12} md={0.7} lg={0.7}></Grid>
        <Grid item xs={12} sm={12} md={10.6} lg={10.6}>
          <Grid
            container
            sx={
              {
                //  backgroundColor: "orange"
              }
            }
          >
            {resultdriv.map((item) => (
              <Grid item xs={12} sm={12} md={4} lg={4}>
                <Box>
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
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      {/* IMAge */}
                      <Box
                        component="img"
                        src={item.image}
                        sx={{
                          height: {
                            xs: "100px",
                            sm: "100px",
                            md: "100px",
                            lg: "100px",
                          },
                          width: {
                            xs: "100px",
                            sm: "100px",
                            md: "100px",
                            lg: "100px",
                          },
                        }}
                      />
                    </Box>
                    {/* Title*/}
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
                          marginTop: {
                            xs: "10px",
                            sm: "10px",
                            md: "10px",
                            lg: "10px",
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
                          textAlign: "center",
                        }}
                      >
                        {item.title}
                      </Typography>
                    </Box>
                    {/* Description` */}
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
                          textAlign: "center",
                          marginTop: {
                            xs: "10px",
                            sm: "10px",
                            md: "10px",
                            lg: "10px",
                          },
                          paddingLeft: {
                            xs: "10px",
                            sm: "10px",
                            md: "10px",
                            lg: "10px",
                          },
                          paddingRight: {
                            xs: "10px",
                            sm: "10px",
                            md: "10px",
                            lg: "10px",
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
        <Grid item xs={12} sm={12} md={0.7} lg={0.7}></Grid>
      </Grid>
    </Box>
  );
};

export default Resultdriven;
