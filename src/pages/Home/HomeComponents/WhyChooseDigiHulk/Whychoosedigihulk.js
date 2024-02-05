import React from "react";

// CSS
import { Box, Typography, Grid } from "@mui/material";
import "./Whychoosedigihulk.css";

// JSON
import { WhyChoosedata1 } from "../../../../assets/json/WhychoosedigihulkJson1";
import { WhyChoosedata2 } from "../../../../assets/json/WhychoosedigihulkJson2";

const Whychoosedigihulk = () => {
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
                md: "30px",
                lg: "30px",
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
                  fontWeight: "500",
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
                Why Choose DigiHulk for SEO Services India
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
      {/* CONTENT 1 */}
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
              // sx={{ backgroundColor: "#fff" }}
            >
              {WhyChoosedata1.map((item) => {
                return (
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      marginTop: {
                        xs: "14px",
                        sm: "14px",
                        md: "20px",
                        lg: "20px",
                      },
                      marginBottom: {
                        xs: "14px",
                        sm: "14px",
                        md: "20px",
                        lg: "20px",
                      },
                      paddingLeft: {
                        xs: "14px",
                        sm: "14px",
                        md: "20px",
                        lg: "20px",
                      },
                      paddingRight: {
                        xs: "14px",
                        sm: "14px",
                        md: "20px",
                        lg: "20px",
                      },
                    }}
                  >
                    <Box sx={{
                      display:"flex",
                      justifyContent:"center",
                      alignItems:"center"
                    }}>
                      <Box
                        component="img"
                        sx={{
                          height: {
                            xs: "20px",
                            sm: "20px",
                            md: "25px",
                            lg: "25px",
                          },
                          width: {
                            xs: "20px",
                            sm: "20px",
                            md: "25px",
                            lg: "25px",
                          },
                        }}
                        src={item.img}
                      />
                    </Box>
                    <Box>
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
                          color: "rgba(122,122,122)",
                          paddingLeft: {
                            xs: "14px",
                            sm: "14px",
                            md: "10px",
                            lg: "10px",
                          },
                        }}
                      >
                        {item.title}
                      </Typography>
                    </Box>
                  </Box>
                );
              })}
            </Grid>
             <Grid
              item
              xs={12}
              sm={12}
              md={6}
              lg={6}
              // sx={{ backgroundColor: "#fff" }}
            >
              {WhyChoosedata2.map((item) => {
                return (
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      marginTop: {
                        xs: "14px",
                        sm: "14px",
                        md: "20px",
                        lg: "20px",
                      },
                      marginBottom: {
                        xs: "14px",
                        sm: "14px",
                        md: "20px",
                        lg: "20px",
                      },
                      paddingLeft: {
                        xs: "14px",
                        sm: "14px",
                        md: "20px",
                        lg: "20px",
                      },
                      paddingRight: {
                        xs: "14px",
                        sm: "14px",
                        md: "20px",
                        lg: "20px",
                      },
                    }}
                  >
                    <Box sx={{
                      display:"flex",
                      justifyContent:"center",
                      alignItems:"center"
                    }}>
                      <Box
                        component="img"
                        sx={{
                          height: {
                            xs: "20px",
                            sm: "20px",
                            md: "25px",
                            lg: "25px",
                          },
                          width: {
                            xs: "20px",
                            sm: "20px",
                            md: "25px",
                            lg: "25px",
                          },
                        }}
                        src={item.img}
                      />
                    </Box>
                    <Box>
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
                          color: "rgba(122,122,122)",
                          paddingLeft: {
                            xs: "14px",
                            sm: "14px",
                            md: "10px",
                            lg: "10px",
                          },
                        }}
                      >
                        {item.title}
                      </Typography>
                    </Box>
                  </Box>
                );
              })}
            </Grid>
          </Grid>
          
           
            <Grid
              item
              xs={12}
              sm={12}
              md={6}
              lg={6}
              // sx={{ backgroundColor: "yellow" }}
            ></Grid>


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
      {/* CONTENT 2 */}
     
    </Box>
  );
};

export default Whychoosedigihulk;
