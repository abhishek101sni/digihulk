import React from "react";
import "./Whatwedo.css";
import { Box, Typography, Grid } from "@mui/material";

// IMAGES
import wwd1 from "../../../../assets/images/Whatwedo/wwd1.gif";
import wwd2 from "../../../../assets/images/Whatwedo/wwd2.gif";
import wwd3 from "../../../../assets/images/Whatwedo/wwd3.gif";

const Whatwedo = () => {
  return (
    <>
      <Grid
        container
        sx={{
          backgroundColor: "#F0F0F0",
        }}
      >
        <Grid
          item
          xs={12}
          sm={12}
          md={0.7}
          lg={0.7}
          sx={{
            backgroundColor: "#F0F0F0",
          }}
        ></Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={10.6}
          lg={10.6}
          sx={{
            backgroundColor: "#F0F0F0",
          }}
        >
          <Box
            sx={{
              marginTop: { xs: "30px", sm: "30px", md: "30px", lg: "30px" },
              marginBottom: {
                xs: "20px",
                sm: "20px",
                md: "15px",
                lg: "15px",
              },
              //   border:"2px solid red"
            }}
          >
            <Box>
              <Typography
                sx={{
                  fontSize: {
                    xs: "35px",
                    sm: "35px",
                    md: "36px",
                    lg: "36px",
                  },
                  fontWeight: "600",
                  //   fontFamily: "Poppins, sans-serif",
                  fontFamily: "Raleway, sans-serif",
                  textAlign: "center",
                  color: "#000",
                }}
              >
                What We Do
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
          // sx={{ backgroundColor: "purple" }}
        ></Grid>
      </Grid>

      {/* CONTEnt */}

      <Grid container>
        <Grid
          item
          xs={12}
          sm={12}
          md={0.7}
          lg={0.7}
          sx={{
            backgroundColor: "#F0F0F0",
          }}
        ></Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={10.6}
          lg={10.6}
          sx={{
            backgroundColor: "#F0F0F0",
          }}
        >
          <Grid container>
            {/* Digital Marketing */}
            <Grid
              item
              xs={12}
              sm={12}
              md={3}
              lg={3}
              sx={{
                backgroundColor: "#F0F0F0",
              }}
            >
              <Box
                sx={{
                  //   border: "1px solid black",
                  width: {
                    xs: "100%",
                    sm: "100%",
                    md: "100%",
                    lg: "100%",
                  },
                  height: {
                    xs: "100%",
                    sm: "100%",
                    md: "450px",
                    lg: "450px",
                  },
                  transition: "background-color 0.3s, transform 0.3s",
                  "&:hover": {
                    backgroundColor: "white",
                    transform: "scale(1)",
                  },
                }}
              >
                <Box>
                  {/* IMAGE */}
                  <Box
                    sx={{
                      display: "flex",
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

                      //   backgroundColor:"red"
                    }}
                  >
                    <Box
                      component="img"
                      src={wwd1}
                      sx={{
                        width: {
                          xs: "95%",
                          sm: "95%",
                          md: "80%",
                          lg: "80%",
                        },
                        height: {
                          xs: "100%",
                          sm: "100%",
                          md: "160px",
                          lg: "160px",
                        },
                      }}
                    />
                  </Box>
                  {/* HEADING */}
                  <Box
                    sx={{
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
                        fontSize: {
                          xs: "24px",
                          sm: "24px",
                          md: "25px",
                          lg: "25px",
                        },
                        fontWeight: "600",
                        //   fontFamily: "Poppins, sans-serif",
                        fontFamily: "Raleway, sans-serif",
                        textAlign: "center",
                        color: "#000",
                        textAlign: "center",
                      }}
                    >
                      Digital Marketing
                    </Typography>
                  </Box>
                  {/* DEtails */}

                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Box
                      sx={{
                        marginTop: {
                          xs: "10px",
                          sm: "10px",
                          md: "10px",
                          lg: "10px",
                        },
                        width: {
                          xs: "90%",
                          sm: "90%",
                          md: "80%",
                          lg: "80%",
                        },
                        height: {
                          xs: "100%",
                          sm: "100%",
                          md: "160px",
                          lg: "160px",
                        },

                        // backgroundColor: "red",
                      }}
                    >
                      <Typography
                        sx={{
                          fontSize: {
                            xs: "14px",
                            sm: "14px",
                            md: "14px",
                            lg: "14px",
                          },
                          fontWeight: "600",
                          fontFamily: "Raleway, sans-serif",
                          //   textAlign: "center",
                          color: "rgba(122,122,122)",
                          textAlign: "justify",
                          //   wordSpacing:{
                          //     xs: "-2px",
                          //     sm: "1px",
                          //     md: "14px",
                          //     lg: "14px",
                          //   }
                        }}
                      >
                        Supercharge your online presence with Digihulks! Our
                        expert digital marketing services focus on SEO, social
                        media, and content strategies. Elevate your brand
                        visibility, drive targeted traffic, and convert clicks
                        into customers. Optimize your website's performance with
                        our proven expertise. Choose Digihulks for dynamic
                        online success.
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Grid>
            {/* Web Developement */}
            <Grid
              item
              xs={12}
              sm={12}
              md={3}
              lg={3}
              sx={{
                backgroundColor: "#F0F0F0",
              }}
            >
              <Box
                sx={{
                  //   border: "1px solid black",
                  width: {
                    xs: "100%",
                    sm: "100%",
                    md: "100%",
                    lg: "100%",
                  },
                  height: {
                    xs: "100%",
                    sm: "100%",
                    md: "450px",
                    lg: "450px",
                  },
                  marginTop: {
                    xs: "20px",
                    sm: "20px",
                    md: "0px",
                    lg: "0px",
                  },
                  borderTop: {
                    xs: "1px solid #000",
                    lg: "none",
                  },
                  transition: "background-color 0.3s, transform 0.3s",
                  "&:hover": {
                    backgroundColor: "white",
                    transform: "scale(1)",
                  },
                }}
              >
                <Box>
                  {/* IMAGE */}
                  <Box
                    sx={{
                      display: "flex",
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
                      marginTop: {
                        xs: "20px",
                        sm: "20px",
                        md: "0px",
                        lg: "0px",
                      },
                      //   backgroundColor:"red"
                    }}
                  >
                    <Box
                      component="img"
                      src={wwd2}
                      sx={{
                        width: {
                          xs: "95%",
                          sm: "95%",
                          md: "80%",
                          lg: "80%",
                        },
                        height: {
                          xs: "100%",
                          sm: "100%",
                          md: "160px",
                          lg: "160px",
                        },
                      }}
                    />
                  </Box>
                  {/* HEADING */}
                  <Box
                    sx={{
                      marginTop: {
                        xs: "10px",
                        sm: "10px",
                        md: "25px",
                        lg: "10px",
                      },
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: {
                          xs: "24px",
                          sm: "24px",
                          md: "25px",
                          lg: "25px",
                        },
                        fontWeight: "600",
                        //   fontFamily: "Poppins, sans-serif",
                        fontFamily: "Raleway, sans-serif",
                        textAlign: "center",
                        color: "#000",
                        textAlign: "center",
                      }}
                    >
                      Web Development
                    </Typography>
                  </Box>
                  {/* DEtails */}

                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Box
                      sx={{
                        marginTop: {
                          xs: "10px",
                          sm: "10px",
                          md: "25px",
                          lg: "10px",
                        },
                        width: {
                          xs: "90%",
                          sm: "90%",
                          md: "80%",
                          lg: "80%",
                        },
                        height: {
                          xs: "100%",
                          sm: "100%",
                          md: "160px",
                          lg: "160px",
                        },

                        // backgroundColor: "red",
                      }}
                    >
                      <Typography
                        sx={{
                          fontSize: {
                            xs: "14px",
                            sm: "14px",
                            md: "14px",
                            lg: "14px",
                          },
                          fontWeight: "600",
                          fontFamily: "Raleway, sans-serif",
                          //   textAlign: "center",
                          color: "rgba(122,122,122)",
                          textAlign: "justify",
                        }}
                      >
                        Elevate your online presence with Digihulks! We
                        specialize in crafting top-notch, responsive websites
                        tailored to your unique needs. Achieve your business
                        goals with our user-friendly and visually captivating
                        website development services. Start your digital journey
                        today!
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Grid>
            {/* Content marketing */}
            <Grid
              item
              xs={12}
              sm={12}
              md={3}
              lg={3}
              //   sx={{ backgroundColor: "pink" }}
            >
              <Box
                sx={{
                  //   border: "1px solid black",
                  width: {
                    xs: "100%",
                    sm: "100%",
                    md: "100%",
                    lg: "100%",
                  },
                  height: {
                    xs: "100%",
                    sm: "100%",
                    md: "450px",
                    lg: "450px",
                  },
                  borderTop: {
                    xs: "1px solid #000",
                    lg: "none",
                  },
                  marginTop: {
                    xs: "20px",
                    sm: "20px",
                    md: "0px",
                    lg: "0px",
                  },
                  transition: "background-color 0.3s, transform 0.3s",
                  "&:hover": {
                    backgroundColor: "white",
                    transform: "scale(1)",
                  },
                }}
              >
                <Box>
                  {/* IMAGE */}
                  <Box
                    sx={{
                      display: "flex",
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
                      marginTop: {
                        xs: "20px",
                        sm: "20px",
                        md: "0px",
                        lg: "0px",
                      },
                      //   backgroundColor:"red"
                    }}
                  >
                    <Box
                      component="img"
                      src={wwd3}
                      sx={{
                        width: {
                          xs: "95%",
                          sm: "95%",
                          md: "80%",
                          lg: "80%",
                        },
                        height: {
                          xs: "100%",
                          sm: "100%",
                          md: "160px",
                          lg: "160px",
                        },
                        // border:"1px solid red"
                      }}
                    />
                  </Box>
                  {/* HEADING */}
                  <Box
                    sx={{
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
                        fontSize: {
                          xs: "24px",
                          sm: "24px",
                          md: "25px",
                          lg: "25px",
                        },
                        fontWeight: "600",
                        //   fontFamily: "Poppins, sans-serif",
                        fontFamily: "Raleway, sans-serif",
                        textAlign: "center",
                        color: "#000",
                        textAlign: "center",
                      }}
                    >
                      Content Marketing
                    </Typography>
                  </Box>
                  {/* DEtails */}

                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Box
                      sx={{
                        marginTop: {
                          xs: "10px",
                          sm: "10px",
                          md: "25px",
                          lg: "10px",
                        },
                        width: {
                          xs: "90%",
                          sm: "90%",
                          md: "80%",
                          lg: "80%",
                        },
                        height: {
                          xs: "100%",
                          sm: "100%",
                          md: "160px",
                          lg: "160px",
                        },

                        // backgroundColor: "red",
                      }}
                    >
                      <Typography
                        sx={{
                          fontSize: {
                            xs: "14px",
                            sm: "14px",
                            md: "14px",
                            lg: "14px",
                          },
                          fontWeight: "600",
                          fontFamily: "Raleway, sans-serif",
                          //   textAlign: "center",
                          color: "rgba(122,122,122)",
                          textAlign: "justify",
                        }}
                      >
                        Elevate your brand with Digihulks' SEO-optimized
                        content. Engage your audience and boost your online
                        presence with expertly crafted, keyword-rich writing.
                        Choose Digihulks for impactful digital success.
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Grid>
            {/* Mobile App Devleopment */}
            <Grid
              item
              xs={12}
              sm={12}
              md={3}
              lg={3}
              //   sx={{ backgroundColor: "pink" }}
            >
              <Box
                sx={{
                  //   border: "1px solid black",
                  width: {
                    xs: "100%",
                    sm: "100%",
                    md: "100%",
                    lg: "100%",
                  },
                  height: {
                    xs: "100%",
                    sm: "100%",
                    md: "450px",
                    lg: "450px",
                  },
                  borderTop: {
                    xs: "1px solid #000",
                    lg: "none",
                  },
                  marginTop: {
                    xs: "20px",
                    sm: "20px",
                    md: "0px",
                    lg: "0px",
                  },
                  transition: "background-color 0.3s, transform 0.3s",
                  "&:hover": {
                    backgroundColor: "#253177",
                    transform: "scale(1)",
                  },
                  // backgroundColor: "#253177",
                  borderBottomLeftRadius: "10px",
                  borderBottomRightRadius: "10px",
                  borderTopLeftRadius: "10px",
                  borderTopRightRadius: "10px",
                }}
              >
                <Box>
                  {/* IMAGE */}
                  <Box
                    sx={{
                      display: "flex",
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
                      marginTop: {
                        xs: "20px",
                        sm: "20px",
                        md: "0px",
                        lg: "0px",
                      },
                      //   backgroundColor:"red"
                    }}
                  >
                    <Box
                      component="img"
                      src={wwd3}
                      sx={{
                        width: {
                          xs: "95%",
                          sm: "95%",
                          md: "85%",
                          lg: "85%",
                        },
                        height: {
                          xs: "100%",
                          sm: "100%",
                          md: "160px",
                          lg: "160px",
                        },
                        marginTop: "20px",
                        borderBottomLeftRadius: "10px",
                        borderBottomRightRadius: "10px",
                        borderTopLeftRadius: "10px",
                        borderTopRightRadius: "10px",
                        // border:"1px solid red"
                      }}
                    />
                  </Box>
                  {/* HEADING */}
                  <Box
                    sx={{
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
                        fontSize: {
                          xs: "24px",
                          sm: "24px",
                          md: "25px",
                          lg: "25px",
                        },
                        fontWeight: "600",
                        //   fontFamily: "Poppins, sans-serif",
                        fontFamily: "Raleway, sans-serif",
                        textAlign: "center",
                        color: "#000",
                        textAlign: "center",
                        "&:hover": {
                          color: "red",
                        },
                      }}
                    >
                      Mobile Development
                    </Typography>
                  </Box>
                  {/* DEtails */}

                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Box
                      sx={{
                        marginTop: {
                          xs: "10px",
                          sm: "10px",
                          md: "25px",
                          lg: "10px",
                        },
                        width: {
                          xs: "90%",
                          sm: "90%",
                          md: "80%",
                          lg: "80%",
                        },
                        height: {
                          xs: "100%",
                          sm: "100%",
                          md: "160px",
                          lg: "160px",
                        },

                        // backgroundColor: "red",
                      }}
                    >
                      <Typography
                        sx={{
                          fontSize: {
                            xs: "14px",
                            sm: "14px",
                            md: "14px",
                            lg: "14px",
                          },
                          fontWeight: "600",
                          fontFamily: "Raleway, sans-serif",
                          //   textAlign: "center",
                          color: "rgba(122,122,122)",
                          textAlign: "justify",
                        }}
                      >
                        Elevate your brand with Digihulks' SEO-optimized
                        content. Engage your audience and boost your online
                        presence with expertly crafted, keyword-rich writing.
                        Choose Digihulks for impactful digital success.
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
          sx={{
            backgroundColor: "#F0F0F0",
          }}
        ></Grid>
      </Grid>
    </>
  );
};

export default Whatwedo;
