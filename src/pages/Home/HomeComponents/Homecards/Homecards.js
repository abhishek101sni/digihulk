import React from "react";
import { Typography, Box, Grid } from "@mui/material";

// CARDS
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Button, CardActionArea, CardActions } from "@mui/material";

// IMAGES
import sample from "../../../../assets/images/sample.png";

// FONT CSS
import "./Homecards.css";

const Homecards = () => {
  return (
    <Box sx={{ marginTop: { xs: "70px", sm: "70px", md: "70px", lg: "70px" } }}>
      <Box>
        <Grid container>
          <Grid item xs={12} sm={12} md={0.7} lg={0.7}></Grid>
          <Grid item xs={12} sm={12} md={10.6} lg={10.6}>
            <Grid container>
              <Grid
                item
                xs={12}
                sm={12}
                md={4}
                lg={4}
                sx={{ backgroundColor: "" }}
              >
                <Box
                  sx={{
                    backgroundColor: "#fff",
                    borderRight: { lg: "1px solid #C8C8C8" },
                    borderTop: { xs: "1px solid #C8C8C8", lg: "none" },
                    borderBottom: {
                      xs: "1px solid #C8C8C8",
                      lg: "1px solid #C8C8C8",
                    },
                    height:{
                        xs: "100%",
                        sm: "100%",
                        md: "100%",
                        lg: "100%",

                    }
                  }}
                >
                  {/* Image */}
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Box
                      component="img"
                      sx={{
                        width: {
                          xs: "20%",
                          sm: "20%",
                          md: "20%",
                          lg: "20%",
                        },
                        height: {
                          sm: "20%",
                          xs: "20%",
                          md: "20%",
                          lg: "20%",
                        },
                        marginTop: {
                          xs: "10px",
                          sm: "10px",
                          md: "20px",
                          lg: "20px",
                        },
                      }}
                      alt="add_img1"
                      src={sample}
                    />
                  </Box>
                  {/* Heading */}
                  <Box
                    sx={{
                      marginTop: {
                        xs: "10px",
                        sm: "10px",
                        md: "15",
                        lg: "15px",
                      },
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: {
                          xs: "20px",
                          sm: "20px",
                          md: "17px",
                          lg: "17px",
                        },
                        fontWeight: {
                          xs: "10px",
                          sm: "10px",
                          md: "400",
                          lg: "400",
                        },
                        fontFamily: "Poppins, sans-serif",
                      }}
                    >
                      Search Engine Optimization
                    </Typography>
                  </Box>
                  {/* Description */}
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
                    <Typography
                      sx={{
                        fontSize: { xs: "", sm: "", md: "", lg: "14px" },
                        fontFamily: "Poppins, sans-serif",
                        // textAlign: "justify",
                        // wordSpacing: "-1px",
                        width: { xs: "80%", lg: "90%" },
                        textAlign: "center",
                      }}
                    >
                      From SEO Audit to SEO Strategy to On-page SEO to Link
                      Building, as a Top SEO Agency, Techmagnate offers the best
                      Search Engine Optimization (SEO) services if you want to
                      get to the top of Google Search results and stay there.
                    </Typography>
                  </Box>
                  {/* Button */}
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Button
                      variant="contained"
                      sx={{
                        marginTop: {
                          xs: "30px",
                          sm: "30px",
                          md: "25px",
                          lg: "25px",
                        },
                        marginBottom: {
                          xs: "30px",
                          sm: "30px",
                          md: "30px",
                          lg: "30px",
                        },
                      }}
                    >
                      GET TOP RANKING
                    </Button>
                  </Box>
                </Box>
              </Grid>
              <Grid
                item
                xs={12}
                sm={12}
                md={4}
                lg={4}
                // sx={{ backgroundColor: "blue" }}
              >
                <Box
                  sx={{
                    backgroundColor: "#fff",
                    borderRight: { lg: "1px solid #C8C8C8" },
                    borderTop: { xs: "none", lg: "none" },
                    borderBottom: {
                      xs: "1px solid #C8C8C8",
                      lg: "1px solid #C8C8C8",
                    },
                  }}
                >
                  {/* Image */}
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Box
                      component="img"
                      sx={{
                        width: {
                          xs: "20%",
                          sm: "20%",
                          md: "20%",
                          lg: "20%",
                        },
                        height: {
                          sm: "20%",
                          xs: "20%",
                          md: "20%",
                          lg: "20%",
                        },
                        marginTop: {
                          xs: "10px",
                          sm: "10px",
                          md: "20px",
                          lg: "20px",
                        },
                      }}
                      alt="add_img1"
                      src={sample}
                    />
                  </Box>
                  {/* Heading */}
                  <Box
                    sx={{
                      marginTop: {
                        xs: "10px",
                        sm: "10px",
                        md: "15",
                        lg: "15px",
                      },
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: {
                          xs: "20px",
                          sm: "20px",
                          md: "17px",
                          lg: "17px",
                        },
                        fontWeight: {
                          xs: "10px",
                          sm: "10px",
                          md: "400",
                          lg: "400",
                        },
                        fontFamily: "Poppins, sans-serif",
                      }}
                    >
                      Pay Per Click
                    </Typography>
                  </Box>
                  {/* Description */}
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
                    <Typography
                      sx={{
                        fontSize: { xs: "", sm: "", md: "", lg: "14px" },
                        fontFamily: "Poppins, sans-serif",
                        // textAlign: "justify",
                        // wordSpacing: "-1px",
                        width: { xs: "80%", lg: "90%" },
                        textAlign: "center",
                      }}
                    >
                      As one of only 60 Google Premier Partners in India, we are
                      amongst the best of the best when it comes to generating
                      leads and driving sales via ppc services.
                    </Typography>
                  </Box>
                  {/* Button */}
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Button
                      variant="contained"
                      sx={{
                        marginTop: {
                          xs: "30px",
                          sm: "30px",
                          md: "25px",
                          lg: "25px",
                        },
                        marginBottom: {
                          xs: "30px",
                          sm: "30px",
                          md: "30px",
                          lg: "30px",
                        },
                      }}
                    >
                      GET TOP RANKING
                    </Button>
                  </Box>
                </Box>
              </Grid>
              <Grid
                item
                xs={12}
                sm={12}
                md={4}
                lg={4}
                // sx={{ backgroundColor: "green" }}
              ></Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={12} md={0.7} lg={0.7}></Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Homecards;
