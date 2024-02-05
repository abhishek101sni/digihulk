import React from "react";

// MUI
import { Box, Typography, Grid } from "@mui/material";

// CSS
import "./Growyourbusiness.css";

// IMAGES
import digitalMarketing2 from "../../../../assets/images/digitalMarketing2.png";

const Growyourbusiness = () => {
  return (
    <Box
      sx={{
        marginTop: { xs: "51px", sm: "51px", md: "90px", lg: "90px" },
      }}
    >
      <Grid container>
        <Grid
          item
          xs={12}
          sm={12}
          md={0.7}
          lg={0.7}
          //   sx={{ backgroundColor: "red" }}
        ></Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={7}
          lg={7}
          //   sx={{ backgroundColor: "grey" }}
        >
          <Box
            sx={{
              height: {
                xs: "0px",
                sm: "0px",
                md: "500px",
                lg: "500px",
              },
              display: "flex",
              justifyContent: "center",
              // alignItems:"center",
              flexDirection: "column",
              paddingLeft: "30px",
            }}
          >
            <Box sx={{}}>
              <Typography
                sx={{
                  fontSize: {
                    xs: "24px",
                    sm: "24px",
                    md: "50px",
                    lg: "50px",
                  },
                  fontWeight: "600",
                  fontFamily: "Raleway, sans-serif",
                  color: "#253177",
                  lineHeight: "60px",
                }}
              >
                Grow your business with
                <br />
                <span
                  style={{
                    fontSize: {
                      xs: "24px",
                      sm: "24px",
                      md: "50px",
                      lg: "50px",
                    },
                    fontWeight: "600",
                    fontFamily: "Raleway, sans-serif",
                    color: "#21883b",
                  }}
                >
                  DigiHulks!
                </span>
              </Typography>
            </Box>
            <Box
              sx={{
                marginTop: "20px",
              }}
            >
              <Typography
                sx={{
                  fontSize: {
                    xs: "24px",
                    sm: "24px",
                    md: "18px",
                    lg: "18px",
                  },
                  fontWeight: "500",
                  fontFamily: "Raleway, sans-serif",
                  color: "rgba(122,122,122)",
                }}
              >
                Fuel your success with our digital marketing and development
                expertise.
              </Typography>
            </Box>
            <Box>
                <Box
                sx={{
                    marginTop:"20px",
                    height:{md:"50px" , lg:"50px"},
                    width:{md:"140px" , lg:"140px"},
                    backgroundColor:"#253177",
                    borderRadius:"50px",
                    display:"flex",
                    justifyContent:"center",
                    alignItems:"center"

                }}>
                    <Typography 
                    
                        sx={{
                  fontSize: {
                    xs: "24px",
                    sm: "24px",
                    md: "18px",
                    lg: "18px",
                  },
                  fontWeight: "600",
                  fontFamily: "Raleway, sans-serif",
                  color:"#fff",
                  lineHeight: "60px",
                  cursor:"pointer"
                    }}>ABOUT US</Typography>
                </Box>
            </Box>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={3.6}
          lg={3.6}
          //   sx={{ backgroundColor: "cyan" }}
        >

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              paddingTop: "100px",
              
            }}
          >

            <Box
            className="object"
              component="img"
              sx={{
                height: {
                  xs: "0px",
                  sm: "0px",
                  md:"300px",
                  lg:"300px"
                },
                width: {
                  xs: "0px",
                  sm: "0px",
                  md:"300px",
                  lg:"300px"
                },
              }}
              src={digitalMarketing2}
            />
            </Box>


        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={0.7}
          lg={0.7}
          //   sx={{ backgroundColor: "red" }}
        ></Grid>
      </Grid>
    </Box>
  );
};

export default Growyourbusiness;
