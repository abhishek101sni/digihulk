import React from "react";

// CSS
import "./Ecommercewebsite.css";

// MUI
import { Box, Typography, Grid } from "@mui/material";

// IMAGES
import webdevimg from "../../../../assets/images/WebDevlopement/webdev2.png";
import webportals from "../../../../assets/images/WebDevlopement/web-portals.png";
import websites from "../../../../assets/images/WebDevlopement/www.png";
import ecommerce from "../../../../assets/images/WebDevlopement/ecommerce.png";
import webapps from "../../../../assets/images/WebDevlopement/web-apps.png";

const Ecommercewebsite = () => {
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
                Ecommerce Website
                <br />
                Development
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
                Welcome to the grand stage of digital commerce, where the
                ordinary transforms into extraordinary transactions. In this
                realm of endless possibilities, your business takes center
                stage, and every click opens a gateway to a world of online
                prosperity.
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
                  Ecommerce Website
                  <br />
                  Development
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
                  Welcome to the grand stage of digital commerce, where the
                  ordinary transforms into extraordinary transactions. In this
                  realm of endless possibilities, your business takes center
                  stage, and every click opens a gateway to a world of online
                  prosperity.
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
                Why Choose the E-Commerce Odyssey
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
                Step into the world of 24/7 marketplace magic with an E-commerce
                website that never sleeps. Your digital store becomes a
                round-the-clock haven, inviting customers to explore, shop, and
                engage at their convenience. Break free from geographical
                limitations and cast a global expansion spell. E-commerce
                transforms your business into a global player, reaching
                customers worldwide. The personalization potency of data-driven
                strategies ensures every visitor feels like an honored guest,
                with tailored recommendations and enchanting online experiences.
                Choose E-commerce and let the magic of online retail propel your
                business to new heights. Trust us at Digihulks to weave this
                enchantment into your digital presence.
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
                      Retail
                      <br />
                      Royalty
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
                      Craft a digital storefront that captivates, entices, and
                      converts. Your products become the stars in this theater
                      of online retail.
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
                      Subscription
                      <br />
                      Sorcery
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
                      Dive into the subscription model, where customers become
                      lifelong patrons, and your offerings become a regular
                      enchantment in their lives.
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
                      Service <br />
                      Symphony
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
                      Showcase your expertise with an e-commerce platform
                      tailored for services, turning your skills into
                      sought-after digital experiences.
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
                      Digital Downloads <br />
                      Delight
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
                      Whether it's art, music, or knowledge, a dedicated
                      e-commerce space for digital downloads ensures your
                      creations find their way to the right audience.
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

export default Ecommercewebsite;
