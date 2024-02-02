import React from "react";

// CSS
import "./Ourexclusiveservice.css";

// MUI
import { Box, Typography, Grid } from "@mui/material";

// REACT-ROUTER-DOM
import { useNavigate } from "react-router-dom";

// IMAGES
import SocailMediaMarketing from "../../../../assets/images/OurServices/socialMediaMarketing.png";
import SocailMediaManagement from "../../../../assets/images/OurServices/socialMediaManagement.png";
import WebDev from "../../../../assets/images/OurServices/website_developement.png";
import remarketing from "../../../../assets/images/OurServices/remarketing.png";
import seo from "../../../../assets/images/OurServices/seo.png";
import ppc from "../../../../assets/images/OurServices/ppc.png";
import mobileDev from "../../../../assets/images/OurServices/Mobiledevelopment.png";
import content from "../../../../assets/images/OurServices/content.png";

const Ourexclusiveservice = () => {
  const navigate = useNavigate();
  return (
    <Box>
      {/* TITLE */}
      <Grid
        container
        sx={
          {
            // backgroundColor: "#F5F5F5",
          }
        }
      >
        <Grid
          item
          xs={12}
          sm={12}
          md={0.7}
          lg={0.7}
          // sx={{ backgroundColor: "purple" }}
        ></Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={10.6}
          lg={10.6}
          // sx={{ backgroundColor: "pink" }}
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
                  lineHeight: {
                    xs: "33px",
                    sm: "33px",
                    md: "0px",
                    lg: "0px",
                  },
                }}
              >
                Our Exclusive Services
              </Typography>
            </Box>

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
              }}
            >
              <Typography
                sx={{
                  color: "#000",
                  fontSize: {
                    xs: "0px",
                    sm: "0px",
                    md: "16px",
                    lg: "16px",
                  },
                  fontWeight: "600",
                  //   fontFamily: "Poppins, sans-serif",
                  fontFamily: "Raleway, sans-serif",
                  textAlign: {
                    xs: "left",
                    sm: "left",
                    md: "center",
                    lg: "center",
                  },
                  marginTop: {
                    xs: "0px",
                    sm: "0px",
                    md: "25px",
                    lg: "25px",
                  },
                }}
              >
                Unbeatable Brand like yours should never settle for the rest
                when it comes down to your marketing
              </Typography>
              <Box>
                <Typography
                  sx={{
                    color: "#000",
                    fontSize: {
                      xs: "15px",
                      sm: "15px",
                      md: "0px",
                      lg: "0px",
                    },
                    fontWeight: "400",
                    fontFamily: "Poppins, sans-serif",
                    // fontFamily: "Raleway, sans-serif",
                    textAlign: "center",
                    marginTop: {
                      xs: "15px",
                      sm: "15px",
                      md: "0px",
                      lg: "0px",
                    },
                  }}
                >
                  Unbeatable Brand like yours should never settle for the rest
                  when it comes down to your marketing
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
          // sx={{ backgroundColor: "purple" }}
        ></Grid>
      </Grid>
      {/* CONTENT 1 */}
      <Grid container>
        <Grid item></Grid>
        <Grid item xs={12} sm={12} md={0.7} lg={0.7}></Grid>
        <Grid item xs={12} sm={12} md={10.6} lg={10.6}>
          <Grid container>
            <Grid
              item
              xs={12}
              sm={12}
              md={4}
              lg={4}
              sx={{ backgroundColor: "grey" }}
            >
              {/* Wordpress Website Development */}
              <Box
                sx={{
                  height: "500px",
                  width: "100%",
                  backgroundColor: "#fff",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  cursor: "pointer",
                }}
                onClick={() => {
                  navigate("/wordpress-website/");
                }}
              >
                <Box
                  sx={{
                    height: "450px",
                    width: "300px",
                    backgroundColor: "#fff",
                    borderRadius: "20px",
                    boxShadow: 8,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    transition: "transform 0.1s ease-in-out", // Add a transition for smooth effect
                    "&:hover": {
                      transform: "scale(1.1)", // Increase the scale on hover
                    },
                  }}
                >
                  <Box
                    component="img"
                    sx={{
                      width: { xs: "60px", sm: "60px", md: "70px", lg: "70px" },
                      height: {
                        xs: "60px",
                        sm: "60px",
                        md: "70px",
                        lg: "70px",
                      },
                      marginTop: {
                        xs: "30px",
                        sm: "30px",
                        md: "30px",
                        lg: "30px",
                      },
                    }}
                    src={content}
                  />
                  {/* Heading */}
                  <Box
                    sx={{
                      marginTop: {
                        xs: "15px",
                        sm: "15px",
                        md: "20px",
                        lg: "20px",
                      },
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
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
                      Wordpress Website
                      {/* Social Media */}
                      <br />
                      Development
                    </Typography>
                  </Box>
                  {/* Details */}
                  <Box
                    sx={{
                      marginTop: {
                        xs: "21px",
                        sm: "21px",
                        md: "10px",
                        lg: "10px",
                      },
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
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
                        width: {
                          xs: "250px",
                          sm: "250px",
                          md: "250px",
                          lg: "250px",
                        },
                        fontWeight: "500",
                        //   fontFamily: "Poppins, sans-serif",
                        fontFamily: "Raleway, sans-serif",
                        textAlign: "center",
                        color: "rgba(122,122,122)",
                        textAlign: "center",
                      }}
                    >
                      Elevate your brand with Digihulks' SEO-optimized content.
                      Engage your audience and boost your online presence with
                      expertly crafted, keyword-rich writing. Choose Digihulks
                      for impactful digital success.
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Grid>
            <Grid
              item
              xs={12}
              sm={12}
              md={4}
              lg={4}
              sx={{ backgroundColor: "grey" }}
            >
              {/* Mobile Development */}
              <Box
                sx={{
                  height: "500px",
                  width: "100%",
                  backgroundColor: "#fff",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  cursor: "pointer",
                }}
              >
                <Box
                  sx={{
                    height: "450px",
                    width: "300px",
                    backgroundColor: "#fff",
                    borderRadius: "20px",
                    boxShadow: 8,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    transition: "transform 0.1s ease-in-out", // Add a transition for smooth effect
                    "&:hover": {
                      transform: "scale(1.1)", // Increase the scale on hover
                    },
                  }}
                  onClick={() => {
                    navigate("/mobile-app-develpment/");
                  }}
                >
                  <Box
                    component="img"
                    sx={{
                      width: { xs: "60px", sm: "60px", md: "70px", lg: "70px" },
                      height: {
                        xs: "60px",
                        sm: "60px",
                        md: "70px",
                        lg: "70px",
                      },
                      marginTop: {
                        xs: "30px",
                        sm: "30px",
                        md: "30px",
                        lg: "30px",
                      },
                    }}
                    src={mobileDev}
                  />
                  {/* Heading */}
                  <Box
                    sx={{
                      marginTop: {
                        xs: "15px",
                        sm: "15px",
                        md: "20px",
                        lg: "20px",
                      },
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
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
                      Mobile
                      <br /> Development
                      {/* Social Media */}
                      {/* <br /> */}
                      {/* Remarketing */}
                    </Typography>
                  </Box>
                  {/* Details */}
                  <Box
                    sx={{
                      marginTop: {
                        xs: "21px",
                        sm: "21px",
                        md: "10px",
                        lg: "10px",
                      },
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
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
                        width: {
                          xs: "250px",
                          sm: "250px",
                          md: "250px",
                          lg: "250px",
                        },
                        fontWeight: "500",
                        //   fontFamily: "Poppins, sans-serif",
                        fontFamily: "Raleway, sans-serif",
                        textAlign: "center",
                        color: "rgba(122,122,122)",
                        textAlign: "center",
                      }}
                    >
                      Elevate your brand with Digihulks' top-notch mobile app
                      development. Our experts turn ideas into high-performance,
                      user-friendly apps. Choose innovation for business
                      success.
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Grid>
            <Grid
              item
              xs={12}
              sm={12}
              md={4}
              lg={4}
              sx={{ backgroundColor: "green" }}
            >
              {/* Social Media management */}
              <Box
                sx={{
                  height: "500px",
                  width: "100%",
                  backgroundColor: "#fff",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  cursor: "pointer",
                }}
                onClick={() => {
                  navigate("/social-media/");
                }}
              >
                <Box
                  sx={{
                    height: "450px",
                    width: "300px",
                    backgroundColor: "#fff",
                    borderRadius: "20px",
                    boxShadow: 8,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    transition: "transform 0.1s ease-in-out", // Add a transition for smooth effect
                    "&:hover": {
                      transform: "scale(1.1)", // Increase the scale on hover
                    },
                  }}
                >
                  <Box
                    component="img"
                    sx={{
                      width: { xs: "60px", sm: "60px", md: "70px", lg: "70px" },
                      height: {
                        xs: "60px",
                        sm: "60px",
                        md: "70px",
                        lg: "70px",
                      },
                      marginTop: {
                        xs: "30px",
                        sm: "30px",
                        md: "30px",
                        lg: "30px",
                      },
                    }}
                    src={SocailMediaManagement}
                  />
                  {/* Heading */}
                  <Box
                    sx={{
                      marginTop: {
                        xs: "10px",
                        sm: "10px",
                        md: "20px",
                        lg: "20px",
                      },
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
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
                      Social Media
                      <br />
                      Management
                    </Typography>
                  </Box>
                  {/* Details */}
                  <Box
                    sx={{
                      marginTop: {
                        xs: "21px",
                        sm: "21px",
                        md: "10px",
                        lg: "10px",
                      },
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
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
                        width: {
                          xs: "250px",
                          sm: "250px",
                          md: "250px",
                          lg: "250px",
                        },
                        fontWeight: "500",
                        //   fontFamily: "Poppins, sans-serif",
                        fontFamily: "Raleway, sans-serif",
                        textAlign: "center",
                        color: "rgba(122,122,122)",
                        textAlign: "center",
                      }}
                    >
                      Elevate your brand with Digihulks' social media prowess.
                      We drive engagement, optimize content, and boost your
                      online influence. Trust us for expert social media
                      management that ensures your brand stands out and
                      flourishes in the digital landscape. Choose Digihulks for
                      social media success.
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={12} md={0.7} lg={0.7}></Grid>
      </Grid>

      {/* CONTENT 2*/}

      <Grid container>
        <Grid item></Grid>
        <Grid item xs={12} sm={12} md={0.7} lg={0.7}></Grid>
        <Grid item xs={12} sm={12} md={10.6} lg={10.6}>
          <Grid container>
            <Grid
              item
              xs={12}
              sm={12}
              md={4}
              lg={4}
              sx={{ backgroundColor: "grey" }}
            >
              {/* Google Analytics */}
              <Box
                sx={{
                  height: "500px",
                  width: "100%",
                  backgroundColor: "#fff",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  cursor: "pointer",
                }}
                onClick={() => {
                  navigate("/google-analytics/");
                }}
              >
                <Box
                  sx={{
                    height: "450px",
                    width: "300px",
                    backgroundColor: "#fff",
                    borderRadius: "20px",
                    boxShadow: 8,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    transition: "transform 0.1s ease-in-out", // Add a transition for smooth effect
                    "&:hover": {
                      transform: "scale(1.1)", // Increase the scale on hover
                    },
                  }}
                >
                  <Box
                    component="img"
                    sx={{
                      width: { xs: "60px", sm: "60px", md: "70px", lg: "70px" },
                      height: {
                        xs: "60px",
                        sm: "60px",
                        md: "70px",
                        lg: "70px",
                      },
                      marginTop: {
                        xs: "30px",
                        sm: "30px",
                        md: "30px",
                        lg: "30px",
                      },
                    }}
                    src={WebDev}
                  />
                  {/* Heading */}
                  <Box
                    sx={{
                      marginTop: {
                        xs: "15px",
                        sm: "15px",
                        md: "20px",
                        lg: "20px",
                      },
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
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
                      Google
                      <br />
                      Analytics
                    </Typography>
                  </Box>
                  {/* Details */}
                  <Box
                    sx={{
                      marginTop: {
                        xs: "21px",
                        sm: "21px",
                        md: "10px",
                        lg: "10px",
                      },
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
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
                        width: {
                          xs: "250px",
                          sm: "250px",
                          md: "250px",
                          lg: "250px",
                        },
                        fontWeight: "500",
                        //   fontFamily: "Poppins, sans-serif",
                        fontFamily: "Raleway, sans-serif",
                        textAlign: "center",
                        color: "rgba(122,122,122)",
                        textAlign: "center",
                      }}
                    >
                      Elevate your digital strategy with Digihulks' Google
                      Analytics proficiency. Gain strategic insights and enhance
                      your online presence. Trust Digihulks for impactful
                      data-driven decisions. Choose us for Google Analytics
                      mastery.
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Grid>
            <Grid
              item
              xs={12}
              sm={12}
              md={4}
              lg={4}
              sx={{ backgroundColor: "grey" }}
            >
              {/* Serch Engine Optmisation */}
              <Box
                sx={{
                  height: "500px",
                  width: "100%",
                  backgroundColor: "#fff",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  cursor: "pointer",
                }}
                onClick={() => {
                  navigate("/search-engine-optimisation/");
                }}
              >
                <Box
                  sx={{
                    height: "450px",
                    width: "300px",
                    backgroundColor: "#fff",
                    borderRadius: "20px",
                    boxShadow: 8,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    transition: "transform 0.1s ease-in-out", // Add a transition for smooth effect
                    "&:hover": {
                      transform: "scale(1.1)", // Increase the scale on hover
                    },
                  }}
                >
                  <Box
                    component="img"
                    sx={{
                      width: { xs: "60px", sm: "60px", md: "70px", lg: "70px" },
                      height: {
                        xs: "60px",
                        sm: "60px",
                        md: "70px",
                        lg: "70px",
                      },
                      marginTop: {
                        xs: "30px",
                        sm: "30px",
                        md: "30px",
                        lg: "30px",
                      },
                    }}
                    src={seo}
                  />
                  {/* Heading */}
                  <Box
                    sx={{
                      marginTop: {
                        xs: "15px",
                        sm: "15px",
                        md: "20px",
                        lg: "20px",
                      },
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
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
                      Search Engine
                      <br />
                      Optimization
                    </Typography>
                  </Box>
                  {/* Details */}
                  <Box
                    sx={{
                      marginTop: {
                        xs: "21px",
                        sm: "21px",
                        md: "10px",
                        lg: "10px",
                      },
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
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
                        width: {
                          xs: "250px",
                          sm: "250px",
                          md: "250px",
                          lg: "250px",
                        },
                        fontWeight: "500",
                        //   fontFamily: "Poppins, sans-serif",
                        fontFamily: "Raleway, sans-serif",
                        textAlign: "center",
                        color: "rgba(122,122,122)",
                        textAlign: "center",
                      }}
                    >
                      Elevate your online presence with Digihulks! Our expert
                      SEO services ensure top search rankings, increased
                      traffic, and enhanced brand visibility. Trust us to
                      optimize your website for success. Choose Digihulks, your
                      partner in SEO excellence.
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Grid>
            <Grid
              item
              xs={12}
              sm={12}
              md={4}
              lg={4}
              sx={{ backgroundColor: "green" }}
            >
              {/* PPC */}
              <Box
                sx={{
                  height: "500px",
                  width: "100%",
                  backgroundColor: "#fff",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  cursor: "pointer",
                }}
                onClick={() => {
                  navigate("/pay-per-click/");
                }}
              >
                <Box
                  sx={{
                    height: "450px",
                    width: "300px",
                    backgroundColor: "#fff",
                    borderRadius: "20px",
                    boxShadow: 8,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    transition: "transform 0.1s ease-in-out", // Add a transition for smooth effect
                    "&:hover": {
                      transform: "scale(1.1)", // Increase the scale on hover
                    },
                  }}
                >
                  <Box
                    component="img"
                    sx={{
                      width: { xs: "60px", sm: "60px", md: "70px", lg: "70px" },
                      height: {
                        xs: "60px",
                        sm: "60px",
                        md: "70px",
                        lg: "70px",
                      },
                      marginTop: {
                        xs: "30px",
                        sm: "30px",
                        md: "30px",
                        lg: "30px",
                      },
                    }}
                    src={ppc}
                  />
                  {/* Heading */}
                  <Box
                    sx={{
                      marginTop: {
                        xs: "10px",
                        sm: "10px",
                        md: "20px",
                        lg: "20px",
                      },
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
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
                      PPC Adds
                    </Typography>
                  </Box>
                  {/* Details */}
                  <Box
                    sx={{
                      marginTop: {
                        xs: "21px",
                        sm: "21px",
                        md: "10px",
                        lg: "10px",
                      },
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
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
                        width: {
                          xs: "250px",
                          sm: "250px",
                          md: "250px",
                          lg: "250px",
                        },
                        fontWeight: "500",
                        //   fontFamily: "Poppins, sans-serif",
                        fontFamily: "Raleway, sans-serif",
                        textAlign: "center",
                        color: "rgba(122,122,122)",
                        textAlign: "center",
                      }}
                    >
                      Supercharge your online presence with Digihulks! Our PPC
                      services drive targeted traffic for maximum ROI. Elevate
                      your digital game with our expert campaigns. Choose
                      Digihulks for impactful pay-per-click solutions and
                      amplify your brand’s success!
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

export default Ourexclusiveservice;
