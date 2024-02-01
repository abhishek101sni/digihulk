import React from "react";

// MUI
import { Typography, Box, Grid } from "@mui/material";

// IMAGES
import firstImage from "../../assets/images/aboutUs/expandingBusiness.jpg";
import SecondImage from "../../assets/images/aboutUs/expandingBusiness2.jpg";
import thirdImage from "../../assets/images/aboutUs/expandingBusiness3.jpg";

import Footer from "../../components/Footer/Footer"
import "./Aboutus.css";

const Aboutus = () => {
  return (
    <>
    <Box sx={{ marginTop: { xs: "50px", sm: "50px", md: "90px", lg: "90px" } }}>
      {/* 1st */}
      {/* desktop */}
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
          md={5.3}
          lg={5.3}
          // sx={{ backgroundColor: "blue" }}
        >
          <Box
            sx={{
              marginTop: { xs: "30px", sm: "30px", md: "130px", lg: "130px" },
              marginBottom: { xs: "30px", sm: "30px", md: "30px", lg: "30px" },
            }}
          >
            <Box sx={{}}>
              <Typography
                sx={{
                  color: "#253177",
                  fontSize: {
                    xs: "35px",
                    sm: "35px",
                    md: "40px",
                    lg: "40px",
                  },
                  fontWeight: "500",
                  fontFamily: "Open Sans, sans-serif",
                  textAlign: {
                    xs: "center",
                    sm: "center",
                    md: "none",
                    lg: "none",
                  },
                  lineHeight: "35px",
                }}
              >
                Know More About Us!
              </Typography>
            </Box>
            <Box>
              <Typography
                sx={{
                  color: "#000",
                  fontWeight: "400",
                  fontFamily: "Open Sans, sans-serif",
                  lineHeight: "23px",
                  textAlign: {
                    xs: "justify",
                    sm: "justify",
                    md: "0px",
                    lg: "0px",
                  },
                  fontSize: {
                    xs: "16px",
                    sm: "16px",
                    md: "16px",
                    lg: "16px",
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
                  marginTop: { xs: "15px", sm: "15px", md: "20px", lg: "20px" },
                }}
              >
                Socio Labs is a Delhi-based digital company that effortlessly
                works with versatile brands to build effective media strategies
                and campaigns. The company weaves compelling narratives for
                various brands and businesses who wish to seek transformation in
                their work domain, and help them attain a governing social media
                presence and command. We work as a team serving different
                avenues of digital marketing such as web development, social
                media campaigns, PPC ads, and search engine optimization. Our
                business endeavors to create contemporary entrepreneurial ideas
                beginning from formulating plans to accelerate your social media
                presence to creating engaging and interactive websites that
                reflect your work portfolio on a global domain. We devise
                statues that help businesses thrive in the social media domain
                and boost their overall productivity in terms of lead
                generation, increased virtual traffic, and practice social-niche
                domination.
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
          // sx={{ backgroundColor: "green" }}
        >
          <Box
            sx={{
              marginTop: { xs: "0px", sm: "0px", md: "90px", lg: "90px" },
              marginBottom: { xs: "30px", sm: "30px", md: "50px", lg: "50px" },
              display: "flex",
              justifyContent: {
                xs: "center",
                sm: "center",
                md: "center",
                lg: "center",
              },
            }}
          >
            <Box
              component="img"
              src={firstImage}
              sx={{
                height: {
                  xs: "80%",
                  sm: "80%",
                  md: "60%",
                  lg: "60%",
                },
                width: {
                  xs: "95%",
                  sm: "95%",
                  md: "70%",
                  lg: "70%",
                },
              }}
            />
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

      {/* 2nd */}
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
          md={5.3}
          lg={5.3}
          // sx={{ backgroundColor: "green" }}
        >
          <Box
            sx={{
              marginTop: { xs: "0px", sm: "0px", md: "50px", lg: "50px" },
              marginBottom: { xs: "30px", sm: "30px", md: "10px", lg: "10px" },
              display: "flex",
              justifyContent: {
                xs: "center",
                sm: "center",
                md: "center",
                lg: "center",
              },
            }}
          >
            <Box
              component="img"
              src={SecondImage}
              sx={{
                height: {
                  xs: "80%",
                  sm: "80%",
                  md: "60%",
                  lg: "60%",
                },
                width: {
                  xs: "95%",
                  sm: "95%",
                  md: "70%",
                  lg: "70%",
                },
              }}
            />
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={5.3}
          lg={5.3}
          // sx={{ backgroundColor: "blue" }}
        >
          <Box
            sx={{
              marginTop: { xs: "30px", sm: "30px", md: "90px", lg: "90px" },
              marginBottom: { xs: "30px", sm: "30px", md: "90px", lg: "90px" },
            }}
          >
            <Box sx={{}}>
              <Typography
                sx={{
                  color: "#253177",
                  fontSize: {
                    xs: "35px",
                    sm: "35px",
                    md: "40px",
                    lg: "40px",
                  },
                  fontWeight: "500",
                  fontFamily: "Open Sans, sans-serif",
                  textAlign: {
                    xs: "center",
                    sm: "center",
                    md: "none",
                    lg: "none",
                  },
                  lineHeight: "35px",
                }}
              >
                We Know What You Need!
              </Typography>
            </Box>
            <Box>
              <Typography
                sx={{
                  color: "#000",
                  fontWeight: "400",
                  fontFamily: "Open Sans, sans-serif",
                  lineHeight: "23px",
                  textAlign: {
                    xs: "justify",
                    sm: "justify",
                    md: "0px",
                    lg: "0px",
                  },
                  fontSize: {
                    xs: "16px",
                    sm: "16px",
                    md: "16px",
                    lg: "16px",
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
                  marginTop: { xs: "15px", sm: "15px", md: "20px", lg: "20px" },
                }}
              >
                We are sure as a brand you have many critical avenues to tend
                to, from micro-managing operations to seeking online
                credibility, it can be quite hard for you to manage it all? Well
                in such a case, give us a call to get all your social media
                marketing issues sorted with carefully curated content that
                reflects your brand & vision and derives revenue based on
                authentic lead generation, novel social media campaigns, and web
                development that is trendy and unique. With our dedicated team
                personnel, tending to different departments of digital
                marketing, we take care of each minute detail. Our crisp
                creative ideas and concepts are sure to boost your sales and
                revenue and help you succeed with contentment and care. We at
                Socio Labs strive for creativity mixed with passion and zest to
                deliver the best for the brands who come to us for a complete
                renewal of plans and policies, we ideate, create authentic plans
                that organically attract sources and leads through compelling
                social media campaigns, refurbished website and enriching
                creative content serving SEO requirements.
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
      {/* 3rd */}
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
          md={5.3}
          lg={5.3}
          // sx={{ backgroundColor: "blue" }}
        >
          <Box
            sx={{
              marginTop: { xs: "30px", sm: "30px", md: "150px", lg: "200px" },
              marginBottom: { xs: "30px", sm: "30px", md: "90px", lg: "90px" },
            }}
          >
            <Box sx={{}}>
              <Typography
                sx={{
                  color: "#253177",
                  fontSize: {
                    xs: "35px",
                    sm: "35px",
                    md: "40px",
                    lg: "40px",
                  },
                  fontWeight: "500",
                  fontFamily: "Open Sans, sans-serif",
                  textAlign: {
                    xs: "center",
                    sm: "center",
                    md: "none",
                    lg: "none",
                  },
                  lineHeight: "35px",
                }}
              >
                {/* Know More About Us! */}
              </Typography>
            </Box>
            <Box>
              <Typography
                sx={{
                  color: "#000",
                  fontWeight: "400",
                  fontFamily: "Open Sans, sans-serif",
                  lineHeight: "23px",
                  textAlign: {
                    xs: "justify",
                    sm: "justify",
                    md: "0px",
                    lg: "0px",
                  },
                  fontSize: {
                    xs: "16px",
                    sm: "16px",
                    md: "16px",
                    lg: "16px",
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
                  marginTop: { xs: "15px", sm: "15px", md: "20px", lg: "20px" },
                }}
              >
                For the music business, social networking is brilliant. Just
                when you think it’s doom and gloom and you have to spend
                millions of pounds on marketing and this and that, you have this
                amazing thing now called fan power. The whole world is linked
                through a laptop. It’s amazing. And it’s free. I love it.
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
          // sx={{ backgroundColor: "green" }}
        >
          <Box
            sx={{
              marginTop: { xs: "0px", sm: "0px", md: "50px", lg: "50px" },
              marginBottom: { xs: "30px", sm: "30px", md: "90px", lg: "90px" },
              display: "flex",
              justifyContent: {
                xs: "center",
                sm: "center",
                md: "center",
                lg: "center",
              },
            }}
          >
            <Box
              component="img"
              src={thirdImage}
              sx={{
                height: {
                  xs: "80%",
                  sm: "80%",
                  md: "60%",
                  lg: "60%",
                },
                width: {
                  xs: "95%",
                  sm: "95%",
                  md: "70%",
                  lg: "70%",
                },
              }}
            />
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
    </Box>

    <Footer/>
    </>
  );
};

export default Aboutus;
