import React from "react";

// CSS
import "./Googleanalytics.css";

// MUI
import { Box, Typography, Grid } from "@mui/material";

// IMAGES
import webdevimg from "../../../../assets/images/WebDevlopement/webdev2.png";
import webportals from "../../../../assets/images/WebDevlopement/web-portals.png";
import websites from "../../../../assets/images/WebDevlopement/www.png";
import ecommerce from "../../../../assets/images/WebDevlopement/ecommerce.png";
import webapps from "../../../../assets/images/WebDevlopement/web-apps.png";

const Googleanalytics = () => {
  return (
    <Box
      sx={{
        marginTop: { xs: "51px", sm: "51px", md: "90px", lg: "90px" },
      }}
    >
      {/* BANNER */}
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
                  fontFamily: "Open Sans, sans-serif",
                  lineHeight: "50px",
                }}
              >
                Google Analytics
                <br />
                {/* Optimisation */}
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
                  fontFamily: "Open Sans, sans-serif",
                  marginTop: {
                    xs: "0px",
                    sm: "0px",
                    md: "10px",
                    lg: "10px",
                  },
                }}
              >
                {/* Genuine care for your web development project */}
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

                  fontFamily: "Open Sans, sans-serif",
                  fontStyle: "italic",
                  marginTop: {
                    xs: "0px",
                    sm: "0px",
                    md: "30px",
                    lg: "30px",
                  },
                }}
              >
                At DigiHulks, we craft digital success stories through the art
                of Search Engine Optimization (SEO). Explore our comprehensive
                SEO services that redefine your online presence and thrust your
                website to the forefront of search engine rankings.
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
                    fontFamily: "Open Sans, sans-serif",
                    lineHeight: "40px",
                    textAlign: "center",
                  }}
                >
                  Search Engine
                  <br />
                  Optimisation
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
                    fontFamily: "Open Sans, sans-serif",

                    textAlign: "center",
                  }}
                >
                  {/* Genuine care for your web development project */}
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

                    fontFamily: "Open Sans, sans-serif",
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
                  At DigiHulks, we craft digital success stories through the art
                  of Search Engine Optimization (SEO). Explore our comprehensive
                  SEO services that redefine your online presence and thrust
                  your website to the forefront of search engine rankings.
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

      {/* What Web Solution Do You Need? */}
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
          <Box
            sx={{
              marginTop: {
                xs: "20px",
                sm: "20px",
                md: "60px",
                lg: "60px",
              },
              marginBottom: {
                xs: "20px",
                sm: "20px",
                md: "15px",
                lg: "15px",
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
                  color: "#000",
                  lineHeight: "32px",
                }}
              >
                Why SEO Matters?
              </Typography>
            </Box>
            <Box
              sx={{
                marginTop: {
                  xs: "10px",
                  sm: "10px",
                  md: "30px",
                  lg: "30px",
                },
              }}
            >
              <Typography
                sx={{
                  fontSize: {
                    xs: "16px",
                    sm: "16px",
                    md: "20px",
                    lg: "20px",
                  },
                  fontWeight: "400",
                  fontFamily: "Open Sans, sans-serif",
                  color: "#000",
                  lineHeight: "25px",
                  textAlign: "justify",
                }}
              >
                Discover the pivotal role SEO plays in enhancing your digital
                footprint. Uncover the benefits of increased visibility, organic
                traffic, and the competitive edge that elevates your brand above
                the rest, locally and globally.
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

      {/* CArds */}
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
          // sx={{ backgroundColor: "grey" }}
        >
          <Grid container>
            <Grid
              item
              xs={12}
              sm={12}
              md={3}
              lg={3}
              // sx={{ backgroundColor: "pink" }}
            >
              {/* On-Page Excellence */}
              <Box
                sx={{
                  width: "100%",
                  backgroundColor: "#fff",
                  display: "flex",
                  justifyContent: {
                    xs: "center",
                    sm: "center",
                    md: "flex-start",
                    lg: "flex-start",
                  },
                  alignItems: "center",
                  marginTop: {
                    xs: "5%",
                    sm: "5%",
                    md: "15%",
                    lg: "15%",
                  },
                  marginBottom: {
                    xs: "2.5%",
                    sm: "2.5%",
                    md: "15%",
                    lg: "15%",
                  },
                }}
              >
                <Box
                  sx={{
                    height: "400px",
                    width: "300px",
                    backgroundColor: "#fff",
                    borderRadius: "1px",
                    boxShadow: 8,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
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
                    src={webportals}
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
                        fontFamily: "Open Sans, sans-serif",
                        textAlign: "center",
                        color: "#000",
                        textAlign: "center",
                      }}
                    >
                      On-Page Excellence
                      {/* Social Media */}
                      {/* <br /> */}
                      {/* Marketing */}
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
                        fontFamily: "Open Sans, sans-serif",
                        color: "rgba(122,122,122)",
                      }}
                    >
                      Unleash the power of optimized content, strategic keyword
                      placement, and a user-friendly website structure. Our
                      on-page SEO ensures every aspect aligns for search engine
                      success, whether targeting local or global audiences.
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Grid>
            <Grid
              item
              xs={12}
              sm={12}
              md={3}
              lg={3}
              // sx={{ backgroundColor: "grey" }}
            >
              {/* Off-Page Brilliance: */}
              <Box
                sx={{
                  // height: "500px",
                  width: "100%",
                  backgroundColor: "#fff",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: {
                    xs: "2.5%",
                    sm: "2.5%",
                    md: "15%",
                    lg: "15%",
                  },
                  marginBottom: {
                    xs: "2.5%",
                    sm: "2.5%",
                    md: "15%",
                    lg: "15%",
                  },
                }}
              >
                <Box
                  sx={{
                    height: "400px",
                    width: "300px",
                    backgroundColor: "#fff",
                    borderRadius: "1px",
                    boxShadow: 8,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
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
                    src={websites}
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
                        fontFamily: "Open Sans, sans-serif",
                        textAlign: "center",
                        color: "#000",
                        textAlign: "center",
                      }}
                    >
                      Off-Page Brilliance
                      {/* Social Media */}
                      {/* <br /> */}
                      {/* Marketing */}
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
                        fontFamily: "Open Sans, sans-serif",
                        color: "rgba(122,122,122)",
                      }}
                    >
                      Propel your website's authority with quality backlinks,
                      social signals, and online mentions. Our off-page SEO
                      strategies build a robust online presence beyond your
                      website, connecting with both local and global
                      communities.
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Grid>
            <Grid
              item
              xs={12}
              sm={12}
              md={3}
              lg={3}
              // sx={{ backgroundColor: "cyan" }}
            >
              {/* Technical SEO */}
              <Box
                sx={{
                  // height: "500px",
                  width: "100%",
                  backgroundColor: "#fff",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: {
                    xs: "2.5%",
                    sm: "2.5%",
                    md: "15%",
                    lg: "15%",
                  },
                  marginBottom: {
                    xs: "2.5%",
                    sm: "2.5%",
                    md: "15%",
                    lg: "15%",
                  },
                }}
              >
                <Box
                  sx={{
                    height: "400px",
                    width: "300px",
                    backgroundColor: "#fff",
                    borderRadius: "1px",
                    boxShadow: 8,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
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
                    src={ecommerce}
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
                        fontFamily: "Open Sans, sans-serif",
                        textAlign: "center",
                        color: "#000",
                        textAlign: "center",
                      }}
                    >
                      Technical SEO
                      {/* Social Media */}
                      {/* <br /> */}
                      {/* Marketing */}
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
                        color: "rgba(122,122,122)",
                      }}
                    >
                      Dive into the intricacies of website architecture, mobile
                      optimization, and site speed. Our technical SEO ensures
                      your website not only meets but exceeds search engine
                      standards, ensuring optimal performance for both local and
                      global searches.
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Grid>
            <Grid
              item
              xs={12}
              sm={12}
              md={3}
              lg={3}
              // sx={{ backgroundColor: "brown" }}
            >
              {/* Local SEO Excellence */}
              <Box
                sx={{
                  // height: "500px",
                  width: "100%",
                  backgroundColor: "#fff",
                  display: "flex",
                  justifyContent: {
                    xs: "center",
                    sm: "center",
                    md: "flex-end",
                    lg: "flex-end",
                  },
                  alignItems: "center",
                  marginTop: {
                    xs: "2.5%",
                    sm: "2.5%",
                    md: "15%",
                    lg: "15%",
                  },
                  marginBottom: {
                    xs: "5%",
                    sm: "5%",
                    md: "15%",
                    lg: "15%",
                  },
                }}
              >
                <Box
                  sx={{
                    height: "400px",
                    width: "300px",
                    backgroundColor: "#fff",
                    borderRadius: "1px",
                    boxShadow: 8,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
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
                    src={webapps}
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
                        fontFamily: "Open Sans, sans-serif",
                        textAlign: "center",
                        color: "#000",
                        textAlign: "center",
                      }}
                    >
                      Local SEO Excellence
                      {/* Social Media */}
                      {/* <br /> */}
                      {/* Marketing */}
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
                        fontFamily: "Open Sans, sans-serif",
                        color: "rgba(122,122,122)",
                      }}
                    >
                      Dominate your local market with our specialized Local SEO
                      strategies. Enhance your visibility in local searches,
                      manage online reviews, and establish a strong presence in
                      Google My Business (GMB) for increased local engagement.
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
          // sx={{ backgroundColor: "red" }}
        ></Grid>
      </Grid>
    </Box>
  );
};

export default Googleanalytics;
