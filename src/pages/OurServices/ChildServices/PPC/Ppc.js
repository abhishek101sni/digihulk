import React from "react";

// MUI
import { Box, Typography, Grid } from "@mui/material";

// CSS
import "./Ppc.css";

// IMAGES
import adwords from "../../../../assets/images/PPC/adwords.jpeg";
import ppcimg from "../../../../assets/images/PPC/ppc.png";

// Footer
import Footer from "../../../../components/Footer/Footer"

const Ppc = () => {
  return (
    <Box sx={{ marginTop: { xs: "55px", sm: "55px", md: "90px", lg: "90px" } }}>
      {/* BAR */}
      <Grid container>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Box
            sx={{
              backgroundColor: "#253177",
              height: { xs: "100px", sm: "100px", md: "200px", lg: "200px" },
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography
              sx={{
                color: "#fff",
                fontSize: {
                  xs: "20px",
                  sm: "20px",
                  md: "50px",
                  lg: "50px",
                },
                fontWeight: "500",
                fontFamily: "Open Sans, sans-serif",
              }}
            >
              PPC SERVICES
            </Typography>
          </Box>
        </Grid>
      </Grid>

      {/* IMAGE */}
      <Grid container>
        <Grid item xs={12} sm={12} md={2} lg={2}></Grid>
        <Grid item xs={12} sm={6} md={8} lg={8}>
          <Box
            sx={{
              marginTop: {
                xs: "10px",
                sm: "10px",
                md: "10px",
                lg: "10px",
              },
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box
              component="img"
              src={adwords}
              sx={{
                height: {
                  xs: "80%",
                  sm: "80%",
                  md: "100%",
                  lg: "100%",
                },
                width: {
                  xs: "95%",
                  sm: "95%",
                  md: "100%",
                  lg: "100%",
                },
              }}
            />
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={2} lg={2}></Grid>
      </Grid>

      {/* Content */}
      <Grid container>
        <Grid item xs={12} sm={12} md={2} lg={2}></Grid>
        <Grid item xs={12} sm={6} md={8} lg={8}>
          <Box
            sx={{
              marginTop: {
                xs: "5px",
                sm: "5px",
                md: "10px",
                lg: "10px",
              },
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: {
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
                    xs: "14px",
                    sm: "14px",
                    md: "15px",
                    lg: "15px",
                  },
                  fontWeight: "500",
                  fontFamily: "Open Sans, sans-serif",
                }}
              >
                Are you in search of a company to provide you with PPC services
                in Delhi? Looking for the best PPC Company in India?
                <br />
                <br />
                Well, look no further because Socio Labs is the best PPC Company
                in Delhi. It is one of the most well-known internet marketing
                strategies where you pay each time a potential customer clicks
                on your ad. Now you may ask, “Why is PPC so popular?” The reason
                is that it is 100% trackable, transparent, effective, and helps
                you create brand awareness.
                <br />
                <br />
                Here at Socio Labs, we have a panel of qualified and
                hard-working PPC experts who are more than capable enough to
                help your local business or large franchise to gain quality
                traffic with Pay Per Click advertising. In addition to providing
                PPC services in Delhi, one of our strongest suits is providing
                Google Ads Management services.
                <br />
                <br />
                We take our clients’ success very seriously and make sure that
                their company ranks high in the Google Search List. And for all
                this hard work, we make sure that the customer gets the service
                at a reasonable price.
              </Typography>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={2} lg={2}></Grid>
      </Grid>

      {/* PPC IMAGE */}
      <Grid container>
        <Grid item xs={12} sm={12} md={2} lg={2}></Grid>
        <Grid item xs={12} sm={6} md={8} lg={8}>
          <Box
            sx={{
              marginTop: {
                xs: "5px",
                sm: "5px",
                md: "10px",
                lg: "10px",
              },
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box
              component="img"
              src={ppcimg}
              sx={{
                height: {
                  xs: "50%",
                  sm: "50%",
                  md: "30%",
                  lg: "30%",
                },
                width: {
                  xs: "50%",
                  sm: "50%",
                  md: "30%",
                  lg: "30%",
                },
              }}
            />
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={2} lg={2}></Grid>
      </Grid>

      {/* content */}
      <Grid container>
        <Grid item xs={12} sm={12} md={2} lg={2}></Grid>
        <Grid item xs={12} sm={6} md={8} lg={8}>
          <Box
            sx={{
              marginTop: {
                xs: "5px",
                sm: "5px",
                md: "10px",
                lg: "10px",
              },
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: {
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
                    xs: "14px",
                    sm: "14px",
                    md: "15px",
                    lg: "15px",
                  },
                  fontWeight: "500",
                  fontFamily: "Open Sans, sans-serif",
                }}
              >
                WHAT MAKES US THE BEST PPC COMPANY IN DELHI
                <br />
                <br />
                Here at Socio Labs, we have been providing PPC Marketing
                Services and Google Ads Management Services for big and small
                businesses for the past several years. And with all this
                experience and a team of well-trained experts backing us, we are
                confident that we’ll provide your business with quality traffic.
                <br />
                <br />
                We are best known for creating a catchy and intriguing PPC Ad
                Campaign from scratch. Socio Labs is not just a PPC company in
                Delhi; it is a one-stop-shop for all PPC-related services. No
                matter what you need, PPC Services, Ad Campaign Ideas, Google
                Ads Management, Website Design and development, we can make it
                happen.
                <br />
                <br />
                Location Targeting is an excellent way of narrowing down to the
                area where you can find quality traffic and restrict the area
                where you want. This way, you can maximize the return on
                investment. With the help of extensive research and the
                expertise of our team, we plan our campaigns accordingly. So,
                working with the best PPC company in Delhi will ensure that you
                can approach your target audience and increase your ROI.
              </Typography>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={2} lg={2}></Grid>
      </Grid>

      {/* Footer */}
      <Footer/>
    </Box>
  );
};

export default Ppc;
