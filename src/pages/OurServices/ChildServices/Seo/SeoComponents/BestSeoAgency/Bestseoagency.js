import React from "react";

// MUI
import { Box, Typography, Grid } from "@mui/material";

// CSS
import "./Bestseoagency.css";

const Bestseoagency = () => {
  return (
    <Box>
      <Grid container>
        <Grid item xs={12} sm={12} md={0.7} lg={0.7}></Grid>
        <Grid item xs={12} sm={12} md={10.6} lg={10.6}>
          <Grid container>
            <Grid
              item
              xs={12}
              sm={12}
              md={12}
              lg={12}
              sx={
                {
                  // backgroundColor: "orange",
                }
              }
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
                }}
              >
                <Box>
                  {/* Title */}
                  <Box>
                    <Typography
                      sx={{
                        fontSize: {
                          xs: "25px",
                          sm: "25px",
                          md: "35px",
                          lg: "35px",
                        },
                        fontWeight: "600",
                        fontFamily: "Open Sans, sans-serif",
                        color: "#253177",
                        lineHeight: "27px",
                        marginTop: {
                          xs: "10px",
                          sm: "10px",
                          md: "10px",
                          lg: "10px",
                        },
                        paddingLeft: {
                          xs: "10px",
                          sm: "10px",
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
                      DigiHulks : The #Best SEO agency in Delhi
                    </Typography>
                  </Box>

                  {/* Description */}
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
                        color: "#000",
                        lineHeight: "20px",
                        // textAlign :"center",
                        marginTop: {
                          xs: "10px",
                          sm: "10px",
                          md: "10px",
                          lg: "10px",
                        },
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
                      Luckily you have landed on the right place where you will
                      get the cheap and affordable SEO services in Delhi NCR for
                      your We have the right solutions you have been searching
                      for We have in-depth expertise in SEO to push your website
                      on me the of maximize your visibility using future proof
                      and trustworthy SCO techniques Team up with our Top 21 SEO
                      Agency in Deth achive better ranking on search engine.<br/> We
                      are a team of highly motivated, skilled, and talented seu
                      experts Well there is no exaggeration to say that Yes Wech
                      our clients with our unmatched Keyword Research skills.<br/>
                      Amid fierce competition, we help businesses have a robust
                      foothold in the industry and boost their sales in no time
                      growth, you can avail the affordable SEO packages in Delhi
                      and take your business to new heights
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={12} md={0.7} lg={0.7}></Grid>
      </Grid>
    </Box>
  );
};

export default Bestseoagency;
