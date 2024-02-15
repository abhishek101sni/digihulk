import React from "react";

import "./Blogshomepage.css";
import { Box, Typography, Grid } from "@mui/material";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Button, CardActionArea, CardActions } from "@mui/material";

import sam from "../../../../assets/images/city_aerial_view_road_156925_1024x768.jpeg";

const Blogshomepage = () => {
  return (
    <Box
      sx={{
        xs: "51px",
        sm: "51px",
        sm: "90px",
        lg: "90px",
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
          md={10.6}
          lg={10.6}
          //   sx={{ backgroundColor: "green" }}
        >
          <Box>
            <Typography
              sx={{
                fontSize: {
                  xs: "30px",
                  sm: "30px",
                  md: "36px",
                  lg: "36px",
                },
                fontWeight: "600",
                //   fontFamily: "Poppins, sans-serif",
                fontFamily: "Raleway, sans-serif",
                color: "#000",
                textAlign: "center",
                paddingTop: "20px",
                paddingBottom: "0px",
              }}
            >
              Featured 
            </Typography>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={0.7}
          lg={0.7}
          //   sx={{ backgroundColor: "blue" }}
        ></Grid>
      </Grid>

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
          md={10.6}
          lg={10.6}
          //   sx={{ backgroundColor: "green" }}
        >
          <Grid container>
            <Grid
              item
              xs={12}
              sm={12}
              md={4}
              lg={4}
              sx={{
                // backgroundColor: "cyan",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Card
                sx={{ maxWidth: 345, marginTop: "30px", marginBottom: "30px" }}
              >
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image={sam}
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h6" component="div">
                      A omplete guide to Developing Artificial intelligence
                      Software
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Lizards are a widespread group of squamate reptiles, with
                      over 6,000 species, ranging across all continents except
                      Antarctica
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
            <Grid
              item
              xs={12}
              sm={12}
              md={4}
              lg={4}
              sx={{
                // backgroundColor: "cyan",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                // height: "400px",
              }}
            >
              <Card
                sx={{ maxWidth: 345, marginTop: "30px", marginBottom: "30px" }}
              >
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image={sam}
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h6" component="div">
                      A omplete guide to Developing Artificial intelligence
                      Software
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Lizards are a widespread group of squamate reptiles, with
                      over 6,000 species, ranging across all continents except
                      Antarctica
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
            <Grid
              item
              xs={12}
              sm={12}
              md={4}
              lg={4}
              sx={{
                // backgroundColor: "cyan",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                // height: "400px",
              }}
            >
              <Card
                sx={{ maxWidth: 345, marginTop: "30px", marginBottom: "30px" }}
              >
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image={sam}
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h6" component="div">
                      A omplete guide to Developing Artificial intelligence
                      Software
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Lizards are a widespread group of squamate reptiles, with
                      over 6,000 species, ranging across all continents except
                      Antarctica
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={0.7}
          lg={0.7}
          //   sx={{ backgroundColor: "blue" }}
        ></Grid>
      </Grid>

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
          md={10.6}
          lg={10.6}
          sx={{
            // backgroundColor: "green",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              marginTop: "20px",
              marginBottom: "20px",
              height: { md: "50px", lg: "50px" },
              width: { md: "210px", lg: "210px" },
              backgroundColor: "#253177",
              borderRadius: "10px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
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
                fontWeight: "600",
                fontFamily: "Raleway, sans-serif",
                color: "#fff",
                lineHeight: "60px",
                cursor: "pointer",
              }}
            >
              ALL BLOG ARTICLES
            </Typography>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={0.7}
          lg={0.7}
          //   sx={{ backgroundColor: "blue" }}
        ></Grid>
      </Grid>
    </Box>
  );
};

export default Blogshomepage;
