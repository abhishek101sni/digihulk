import React from "react";

// CSS
import "./Webdev.css";

// MUI
import { Box, Typography, Grid } from "@mui/material";

// IMAGES
import webdevimg from "../../../../assets/images/WebDevlopement/webdev2.png";
import webportals from "../../../../assets/images/WebDevlopement/web-portals.png";
import websites from "../../../../assets/images/WebDevlopement/www.png";
import ecommerce from "../../../../assets/images/WebDevlopement/ecommerce.png";
import webapps from "../../../../assets/images/WebDevlopement/web-apps.png";

const Webdev = () => {
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
                Web Development
                <br />
                Services
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
                Genuine care for your web development project
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
                With the expertise built on 1,900+ web projects, ScienceSoft
                professionally designs, redesigns and continuously supports
                customer-facing and enterprise web apps and achieves high
                conversion and adoption rates.
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
                  Web Development
                  <br />
                  Services
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
                  Genuine care for your web development project
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
                  With the expertise built on 1,900+ web projects, ScienceSoft
                  professionally designs, redesigns and continuously supports
                  customer-facing and enterprise web apps and achieves high
                  conversion and adoption rates.
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
              paddingLeft:{
                xs: "10px",
                sm: "10px",
                md: "0px",
                lg: "0px",
              },
              paddingRight:{
                xs: "10px",
                sm: "10px",
                md: "0px",
                lg: "0px",
              }
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
                  lineHeight:"32px",

                }}
              >
                What Web Solution Do You Need?
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
                  lineHeight:"25px",
                  textAlign:"justify"
                }}
              >
                Web development services help create all types of web-based
                software and ensure great experience for web users. Different
                types of web solutions may seem similar from the outside but we
                approach them differently and know what factors are winning in
                each case.
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
              {/* Web Portals */}
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
                      Web portals
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
                      Since 2005, ScienceSoft works with web portals for
                      different audiences: customers, business partners,
                      ecommerce users, patients, vendors, interest-based
                      communities. Web portals we create automatically aggregate
                      data from corporate systems and become a source of
                      up-to-date information and help for users.
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
              {/* Websites */}
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
                      Websites
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
                      250+ businesses, governmental and non-profit organizations
                      use the websites we’ve created for corporate presentation
                      and brand building. We make sure our websites have an
                      easy-to-use page editor for dynamic content management.
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
              {/* ecommerce */}
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
                      Ecommerce
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
                      20 years in ecommerce development, we’ve grown the
                      expertise from entry-level shops for startups to custom
                      ecommerce solutions built for large-scale and high-growth
                      businesses. We multiply business efficiency by using
                      scalable microservices architectures and enabling high
                      automation of all business processes.
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
              {/* WEbApps */}
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
                      Web apps
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
                      In our portfolio of 1,900+ created web apps, you will find
                      solutions for efficient management of different business
                      activities. We apply smart automation to streamline
                      workflows and integrate corporate apps together for
                      coherent operation.
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

export default Webdev;
