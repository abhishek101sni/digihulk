import React from "react";
// MUI
import { Box, Typography, Grid } from "@mui/material";
// CSS
import "./Getbestmobileapp.css";
// IMAGES
import android from "../../../../../../assets/images/mobiledevelopement/android.png";
import apple from "../../../../../../assets/images/mobiledevelopement/apple.png";
import mobileappdev from "../../../../../../assets/images/mobiledevelopement/mobileAppDevBanner.png";

const Getbestmobileapp = () => {
  return (
    <>
      {/* ForDesktop view */}

      {/* Grid 1 */}
      <Grid container>
        <Grid item xs={12} sm={12} md={0.7} lg={0.7}></Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={10.6}
          lg={10.6}
          // sx={{ backgroundColor: "grey" }}
        >
          <Box
            sx={{
              paddingTop: {
                xs: "0px",
                sm: "0px",
                md: "0px",
                lg: "0px",
              },
              paddingBottom: {
                xs: "0px",
                sm: "0px",
                md: "50px",
                lg: "50px",
              },
            }}
            display={{ xs: "none", lg: "block" }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: {
                  xs: "center",
                  sm: "center",
                  md: "flex-start",
                  lg: "flex-start",
                },
              }}
            >
              <Typography
                sx={{
                  color: "#253177",
                  fontSize: {
                    xs: "25px",
                    sm: "25px",
                    md: "35px",
                    lg: "35px",
                  },
                  fontWeight: "500",
                  fontFamily: "Open Sans, sans-serif",
                  lineHeight: "32px",
                }}
              >
                Get Best Mobile App Development Services in Delhi with Us
              </Typography>
            </Box>

            <Box
              sx={{
                marginTop: {
                  xs: "16px",
                  sm: "16px",
                  md: "20px",
                  lg: "20px",
                },
              }}
            >
              <Typography
                sx={{
                  fontSize: {
                    xs: "16px",
                    sm: "16px",
                    md: "18px",
                    lg: "18px",
                  },
                  fontWeight: "400",
                  fontFamily: "Open Sans, sans-serif",
                  color: "#000",
                  lineHeight: "30px",
                }}
              >
                Founded in 2002, JanusAlive is the leading Outdoor Advertising
                agency in India. With 20 years of experience, we are now the
                largest network in the country in this fast-paced sector. Our
                dedication to innovation and quality has brought us to the
                forefront, where we offer specialized media solutions to
                companies of all kinds. With more than 200 clients under its
                belt, JanusAlive is committed to creating memorable outdoor
                advertising campaigns. Our skilled team combines strategic
                thinking with creativity to make sure your brand sticks out in
                the constantly changing advertising market. Join JanusAlive for
                an unmatched outdoor advertising experience that will help the
                world connect with your message.
                <br />
                <br />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Typography>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={0.7} lg={0.7}></Grid>
      </Grid>

      {/* Grid 2 */}
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
            <Grid
              item
              xs={12}
              sm={12}
              md={6}
              lg={6}
              // sx={{ backgroundColor: "orange" }}
            >
              <Box
                sx={{
                  paddingTop: {
                    xs: "0px",
                    sm: "0px",
                    md: "0px",
                    lg: "0px",
                  },
                  paddingBottom: {
                    xs: "0px",
                    sm: "0px",
                    md: "30px",
                    lg: "30px",
                  },
                  paddingRight: {
                    xs: "10px",
                    sm: "10px",
                    md: "20px",
                    lg: "20px",
                  },
                }}
                display={{ xs: "none", lg: "block" }}
              >
                <Box
                  sx={{
                    // border: "1px solid black",
                    borderRadius: "20px",
                    width: {
                      xs: "100%",
                      sm: "100%",
                      md: "100%",
                      lg: "100%",
                    },
                    height: {
                      xs: "100%",
                      sm: "100%",
                      md: "350px",
                      lg: "350px",
                    },
                    boxShadow: 10,
                  }}
                >
                  <Box
                    sx={{
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
                      paddingLeft: {
                        xs: "10px",
                        sm: "10px",
                        md: "20px",
                        lg: "20px",
                      },
                    }}
                  >
                    <Box>
                      <Box
                        component="img"
                        sx={{
                          height: {
                            xs: "20px",
                            sm: "20px",
                            md: "70px",
                            lg: "70px",
                          },
                          width: {
                            xs: "20px",
                            sm: "20px",
                            md: "70px",
                            lg: "70px",
                          },
                        }}
                        src={android}
                      />
                    </Box>

                    <Box
                      sx={{
                        marginTop: {
                          xs: "10px",
                          sm: "10px",
                          md: "15px",
                          lg: "15px",
                        },
                      }}
                    >
                      <Typography
                        sx={{
                          color: "#253177",
                          fontSize: {
                            xs: "20px",
                            sm: "20px",
                            md: "25px",
                            lg: "25px",
                          },
                          fontWeight: "700",
                          fontFamily: "Open Sans, sans-serif",
                          lineHeight: "25px",
                        }}
                      >
                        Android App Development
                      </Typography>
                    </Box>

                    <Box
                      sx={{
                        marginTop: {
                          xs: "10px",
                          sm: "10px",
                          md: "15px",
                          lg: "15px",
                        },
                      }}
                    >
                      <Typography
                        sx={{
                          color: "#000",
                          fontSize: {
                            xs: "20px",
                            sm: "20px",
                            md: "16px",
                            lg: "16px",
                          },
                          fontWeight: "500",
                          fontFamily: "Open Sans, sans-serif",
                          lineHeight: "25px",
                        }}
                      >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Integer nec odio. Praesent libero. Sed cursus ante
                        dapibus diam. Sed nisi. Nulla quis sem at nibh elementum
                        imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce
                        nec tellus sed augue semper porta. Mauris massa.
                        Vestibulum lacinia arcu eget nulla. Class aptent taciti
                        sociosqu ad litora torquent per conubia nostra, per
                        inceptos himenaeos. Curabitur sodales ligula in libero.
                        Sed dignissim lacinia nunc.
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Grid>
            <Grid
              item
              xs={12}
              sm={12}
              md={6}
              lg={6}
              // sx={{ backgroundColor: "yellow" }}
            >
              <Box
                sx={{
                  paddingTop: {
                    xs: "0px",
                    sm: "0px",
                    md: "0px",
                    lg: "0px",
                  },
                  paddingBottom: {
                    xs: "0px",
                    sm: "0px",
                    md: "30px",
                    lg: "30px",
                  },
                  paddingLeft: {
                    xs: "10px",
                    sm: "10px",
                    md: "20px",
                    lg: "20px",
                  },
                }}
              >
                <Box
                  sx={{
                    // border: "1px solid black",
                    borderRadius: "20px",
                    width: {
                      xs: "100%",
                      sm: "100%",
                      md: "100%",
                      lg: "100%",
                    },
                    height: {
                      xs: "100%",
                      sm: "100%",
                      md: "350px",
                      lg: "350px",
                    },
                    boxShadow: 8,
                  }}
                  display={{ xs: "none", lg: "block" }}
                >
                  <Box
                    sx={{
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
                      paddingLeft: {
                        xs: "10px",
                        sm: "10px",
                        md: "20px",
                        lg: "20px",
                      },
                    }}
                  >
                    <Box>
                      <Box
                        component="img"
                        sx={{
                          height: {
                            xs: "20px",
                            sm: "20px",
                            md: "70px",
                            lg: "70px",
                          },
                          width: {
                            xs: "20px",
                            sm: "20px",
                            md: "70px",
                            lg: "70px",
                          },
                        }}
                        src={apple}
                      />
                    </Box>

                    <Box
                      sx={{
                        marginTop: {
                          xs: "10px",
                          sm: "10px",
                          md: "15px",
                          lg: "15px",
                        },
                      }}
                    >
                      <Typography
                        sx={{
                          color: "#253177",
                          fontSize: {
                            xs: "20px",
                            sm: "20px",
                            md: "25px",
                            lg: "25px",
                          },
                          fontWeight: "700",
                          fontFamily: "Open Sans, sans-serif",
                          lineHeight: "25px",
                        }}
                      >
                        IOs App Development
                      </Typography>
                    </Box>

                    <Box
                      sx={{
                        marginTop: {
                          xs: "10px",
                          sm: "10px",
                          md: "15px",
                          lg: "15px",
                        },
                      }}
                    >
                      <Typography
                        sx={{
                          color: "#000",
                          fontSize: {
                            xs: "20px",
                            sm: "20px",
                            md: "16px",
                            lg: "16px",
                          },
                          fontWeight: "500",
                          fontFamily: "Open Sans, sans-serif",
                          lineHeight: "25px",
                        }}
                      >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Integer nec odio. Praesent libero. Sed cursus ante
                        dapibus diam. Sed nisi. Nulla quis sem at nibh elementum
                        imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce
                        nec tellus sed augue semper porta. Mauris massa.
                        Vestibulum lacinia arcu eget nulla. Class aptent taciti
                        sociosqu ad litora torquent per conubia nostra, per
                        inceptos himenaeos. Curabitur sodales ligula in libero.
                        Sed dignissim lacinia nunc.
                      </Typography>
                    </Box>
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

      {/* for mobile view */}
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
          sx={{ backgroundColor: "green" }}
        >
          <Grid container>
          {/* for android */}
            <Grid
              item
              xs={12}
              sm={12}
              md={6}
              lg={6}
              sx={{
                backgroundColor: "#fff",
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
              <Box sx={{
                // border:"2px solid red",
                boxShadow: 5,
                borderRadius:"20px",
                marginTop:{
                  xs:"20px",
                  sm:"20px",
                  md:"0px",
                  lg:"0px"
                },
                marginBottom:{
                  xs:"10px",
                  sm:"10px",
                  md:"0px",
                  lg:"0px"
                },
                
              }}
              display={{lg: "none" }}
              >
                {/* for android */}
                <Box>
                  <Box
                    sx={{
                      width: {
                        xs: "100%",
                        sm: "100%",
                        md: "0px",
                        lg: "0px",
                      },
                      paddingTop: {
                          xs: "20px",
                          sm: "20px",
                          md: "0px",
                          lg: "0px",
                        },
                        paddingBottom: {
                          xs: "20px",
                          sm: "20px",
                          md: "0px",
                          lg: "0px",
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
                      {/* IMG */}
                      <Box
                        component="img"
                        sx={{
                          height: {
                            xs: "70px",
                            sm: "70px",
                            md: "0px",
                            lg: "0px",
                          },
                          width: {
                            xs: "70px",
                            sm: "70px",
                            md: "0px",
                            lg: "0px",
                          },
                        }}
                        src={android}
                      />
                    </Box>

                    {/* Heading */}
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Typography
                        sx={{
                          color: "#253177",
                          fontSize: {
                            xs: "20px",
                            sm: "20px",
                            md: "0px",
                            lg: "0px",
                          },
                          fontWeight: "500",
                          fontFamily: "Open Sans, sans-serif",
                          lineHeight: "32px",
                          marginTop: {
                            xs: "5px",
                            sm: "5px",
                            md: "0px",
                            lg: "0px",
                          },
                        }}
                      >
                        Android App Development
                      </Typography>
                    </Box>
                    {/* Des */}
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        marginTop: {
                          xs: "5px",
                          sm: "5px",
                          md: "0px",
                          lg: "0px",
                        },
                      }}
                    >
                      <Typography
                        sx={{
                          color: "#000",
                          fontSize: {
                            xs: "15px",
                            sm: "15px",
                            md: "0px",
                            lg: "0px",
                          },
                          fontWeight: "500",
                          fontFamily: "Open Sans, sans-serif",
                          lineHeight: "20px",
                          // textAlign:"justify"
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
                        Lorem ipsum dolor sit amet, elit.
                        Integer nec odio. Praesent libero. Sed cursus ante
                        dapibus diam. Sed nisi. Nulla quis sem at nibh elementum
                        imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce
                        nec tellus sed augue semper porta.
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Grid>
            {/* For Apple */}
            <Grid
              item
              xs={12}
              sm={12}
              md={6}
              lg={6}
              sx={{
                backgroundColor: "#fff",
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
              <Box sx={{
                // border:"2px solid red",
                boxShadow: 5,
                borderRadius:"20px",
                marginTop:{
                  xs:"10px",
                  sm:"10px",
                  md:"0px",
                  lg:"0px"
                },
                marginBottom:{
                  xs:"20px",
                  sm:"20px",
                  md:"0px",
                  lg:"0px"
                }
              }}
              display={{lg: "none" }} 
              >
                {/* for android */}
                <Box>
                  <Box
                    sx={{
                      width: {
                        xs: "100%",
                        sm: "100%",
                        md: "0px",
                        lg: "0px",
                      },
                      paddingTop: {
                          xs: "20px",
                          sm: "20px",
                          md: "0px",
                          lg: "0px",
                        },
                        paddingBottom: {
                          xs: "20px",
                          sm: "20px",
                          md: "0px",
                          lg: "0px",
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
                      {/* IMG */}
                      <Box
                        component="img"
                        sx={{
                          height: {
                            xs: "70px",
                            sm: "70px",
                            md: "0px",
                            lg: "0px",
                          },
                          width: {
                            xs: "70px",
                            sm: "70px",
                            md: "0px",
                            lg: "0px",
                          },
                        }}
                        src={apple}
                      />
                    </Box>

                    {/* Heading */}
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Typography
                        sx={{
                          color: "#253177",
                          fontSize: {
                            xs: "20px",
                            sm: "20px",
                            md: "0px",
                            lg: "0px",
                          },
                          fontWeight: "500",
                          fontFamily: "Open Sans, sans-serif",
                          lineHeight: "32px",
                          marginTop: {
                            xs: "5px",
                            sm: "5px",
                            md: "0px",
                            lg: "0px",
                          },
                        }}
                      >
                        IOs App Development
                      </Typography>
                    </Box>
                    {/* Des */}
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        marginTop: {
                          xs: "5px",
                          sm: "5px",
                          md: "0px",
                          lg: "0px",
                        },
                      }}
                    >
                      <Typography
                        sx={{
                          color: "#000",
                          fontSize: {
                            xs: "15px",
                            sm: "15px",
                            md: "0px",
                            lg: "0px",
                          },
                          fontWeight: "500",
                          fontFamily: "Open Sans, sans-serif",
                          lineHeight: "20px",
                          // textAlign:"justify"
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
                        Lorem ipsum dolor sit amet, elit.
                        Integer nec odio. Praesent libero. Sed cursus ante
                        dapibus diam. Sed nisi. Nulla quis sem at nibh elementum
                        imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce
                        nec tellus sed augue semper porta.
                      </Typography>
                    </Box>
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
          // sx={{ backgroundColor: "red" }}
        ></Grid>
      </Grid>
    </>
  );
};

export default Getbestmobileapp;
