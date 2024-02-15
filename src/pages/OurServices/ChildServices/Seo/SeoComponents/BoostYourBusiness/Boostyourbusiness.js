import React from "react";

// css
import "./Boostyourbusiness.css";

// MUI
import { Box, Typography, Grid } from "@mui/material";

// IMAGES
import samcircle from "../../../../../../assets/images/mobiledevelopement/android.png";

const Boostyourbusiness = () => {
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
                      Boost your Business Through Affordable SEO Services
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
                      Remember, SEO is not an overnight task it requires
                      long-term commitment and robust strategies. But when you
                      are here with our leading SEO Services Company in Delhi,
                      you can rest assured that you will get stable and better
                      results. Our affordable seo services for small business
                      have helped hundreds of businesses to expand their online
                      presence, increase leads and grow their revenue.
                    </Typography>
                  </Box>

                  {/* Circles */}
                  <Box
                    sx={{
                      marginTop: {
                        xs: "20px",
                        sm: "20px",
                        md: "20px",
                        lg: "20px",
                      },
                      marginBottom: {
                        xs: "20px",
                        sm: "20px",
                        md: "20px",
                        lg: "20px",
                      },
                      paddingLeft: {
                        xs: "",
                        sm: "",
                        md: "50px",
                        lg: "50px",
                      },
                      paddingRight: {
                        xs: "",
                        sm: "",
                        md: "50px",
                        lg: "50px",
                      },
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: {
                          xs: "column",
                          sm: "column",
                          md: "row",
                          lg: "row",
                        },
                      }}
                    >
                      {/* circle 1 */}
                      <Box
                        sx={{
                          height: {
                            xs: "170px",
                            sm: "170px",
                            md: "200px",
                            lg: "200px",
                          },
                          width: {
                            xs: "170px",
                            sm: "170px",
                            md: "200px",
                            lg: "200px",
                          },
                          borderRadius: "100px",
                          border: "3px solid #253177",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          flexDirection: "column",
                          margin: {
                            xs: "10px",
                            sm: "10px",
                            md: "10px",
                            lg: "10px",
                          },
                        }}
                      >
                        {/* Image */}
                        <Box
                          sx={
                            {
                              //  marginTop:{
                              //     xs:"-5px",
                              //     sm:"-5px",
                              //     md:"-25px",
                              //     lg:"-25px"
                              //   }
                            }
                          }
                        >
                          <Box
                            component="img"
                            sx={{
                              height: {
                                xs: "50px",
                                sm: "50px",
                                md: "50px",
                                lg: "50px",
                              },
                              width: {
                                xs: "50px",
                                sm: "50px",
                                md: "50px",
                                lg: "50px",
                              },
                            }}
                            src={samcircle}
                          />
                        </Box>
                        {/* Text */}
                        <Box>
                          <Typography
                            sx={{
                              fontSize: {
                                xs: "12px",
                                sm: "12px",
                                md: "14px",
                                lg: "14px",
                              },
                              fontWeight: "500",
                              fontFamily: "Open Sans, sans-serif",
                              color: "rgba(122,122,122)",
                              lineHeight: "20px",
                              textAlign: "center",
                            }}
                          >
                            SEO Optimization
                          </Typography>
                        </Box>
                      </Box>

                      {/* circle 2 */}
                      <Box
                        sx={{
                          height: {
                            xs: "170px",
                            sm: "170px",
                            md: "200px",
                            lg: "200px",
                          },
                          width: {
                            xs: "170px",
                            sm: "170px",
                            md: "200px",
                            lg: "200px",
                          },
                          borderRadius: "100px",
                          border: "3px solid #253177",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          flexDirection: "column",
                          margin: {
                            xs: "10px",
                            sm: "10px",
                            md: "10px",
                            lg: "10px",
                          },
                        }}
                      >
                        {/* Image */}
                        <Box>
                          <Box
                            component="img"
                            sx={{
                              height: {
                                xs: "50px",
                                sm: "50px",
                                md: "50px",
                                lg: "50px",
                              },
                              width: {
                                xs: "50px",
                                sm: "50px",
                                md: "50px",
                                lg: "50px",
                              },
                            }}
                            src={samcircle}
                          />
                        </Box>
                        {/* Text */}
                        <Box>
                          <Typography
                           sx={{
                              fontSize: {
                                xs: "12px",
                                sm: "12px",
                                md: "14px",
                                lg: "14px",
                              },
                              fontWeight: "500",
                              fontFamily: "Open Sans, sans-serif",
                              color: "rgba(122,122,122)",
                              lineHeight: "20px",
                              textAlign: "center",
                            }}
                          >Improved SERP Ranking</Typography>
                        </Box>
                      </Box>

                      {/* circle 3 */}
                      <Box
                        sx={{
                          height: {
                            xs: "170px",
                            sm: "170px",
                            md: "200px",
                            lg: "200px",
                          },
                          width: {
                            xs: "170px",
                            sm: "170px",
                            md: "200px",
                            lg: "200px",
                          },
                          borderRadius: "100px",
                          border: "3px solid #253177",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          flexDirection: "column",
                          margin: {
                            xs: "10px",
                            sm: "10px",
                            md: "10px",
                            lg: "10px",
                          },
                        }}
                      >
                        {/* Image */}
                        <Box>
                          <Box
                            component="img"
                            sx={{
                              height: {
                                xs: "50px",
                                sm: "50px",
                                md: "50px",
                                lg: "50px",
                              },
                              width: {
                                xs: "50px",
                                sm: "50px",
                                md: "50px",
                                lg: "50px",
                              },
                            }}
                            src={samcircle}
                          />
                        </Box>
                        {/* Text */}
                        <Box>
                          <Typography
                          sx={{
                              fontSize: {
                                xs: "12px",
                                sm: "12px",
                                md: "14px",
                                lg: "14px",
                              },
                              fontWeight: "500",
                              fontFamily: "Open Sans, sans-serif",
                              color: "rgba(122,122,122)",
                              lineHeight: "20px",
                              textAlign: "center",
                            }}
                          >Divine Organic traffic</Typography>
                        </Box>
                      </Box>

                      {/* circle 4 */}
                      <Box
                        sx={{
                          height: {
                            xs: "170px",
                            sm: "170px",
                            md: "200px",
                            lg: "200px",
                          },
                          width: {
                            xs: "170px",
                            sm: "170px",
                            md: "200px",
                            lg: "200px",
                          },
                          borderRadius: "100px",
                          border: "3px solid #253177",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          flexDirection: "column",
                          margin: {
                            xs: "10px",
                            sm: "10px",
                            md: "10px",
                            lg: "10px",
                          },
                        }}
                      >
                        {/* Image */}
                        <Box>
                          <Box
                            component="img"
                            sx={{
                              height: {
                                xs: "50px",
                                sm: "50px",
                                md: "50px",
                                lg: "50px",
                              },
                              width: {
                                xs: "50px",
                                sm: "50px",
                                md: "50px",
                                lg: "50px",
                              },
                            }}
                            src={samcircle}
                          />
                        </Box>
                        {/* Text */}
                        <Box>
                          <Typography
                          sx={{
                              fontSize: {
                                xs: "12px",
                                sm: "12px",
                                md: "14px",
                                lg: "14px",
                              },
                              fontWeight: "500",
                              fontFamily: "Open Sans, sans-serif",
                              color: "rgba(122,122,122)",
                              lineHeight: "20px",
                              textAlign: "center",
                            }}
                          >Generate Quality Leads</Typography>
                        </Box>
                      </Box>
                      {/* circle 5 */}
                      <Box
                        sx={{
                          height: {
                            xs: "170px",
                            sm: "170px",
                            md: "200px",
                            lg: "200px",
                          },
                          width: {
                            xs: "170px",
                            sm: "170px",
                            md: "200px",
                            lg: "200px",
                          },
                          borderRadius: "100px",
                          border: "3px solid #253177",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          flexDirection: "column",
                          margin: {
                            xs: "10px",
                            sm: "10px",
                            md: "10px",
                            lg: "10px",
                          },
                        }}
                      >
                        {/* Image */}
                        <Box>
                          <Box
                            component="img"
                            sx={{
                              height: {
                                xs: "50px",
                                sm: "50px",
                                md: "50px",
                                lg: "50px",
                              },
                              width: {
                                xs: "50px",
                                sm: "50px",
                                md: "50px",
                                lg: "50px",
                              },
                            }}
                            src={samcircle}
                          />
                        </Box>
                        {/* Text */}
                        <Box>
                          <Typography
                          sx={{
                              fontSize: {
                                xs: "12px",
                                sm: "12px",
                                md: "14px",
                                lg: "14px",
                              },
                              fontWeight: "500",
                              fontFamily: "Open Sans, sans-serif",
                              color: "rgba(122,122,122)",
                              lineHeight: "20px",
                              textAlign: "center",
                            }}
                          >Increased Revenue</Typography>
                        </Box>
                      </Box>
                    </Box>
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

export default Boostyourbusiness;
