import React, { useState } from "react";

// MUI
import {
  AppBar,
  Box,
  CssBaseline,
  Divider,
  Drawer,
  IconButton,
  Toolbar,
  Menu,
  Typography,
  Grid,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";

// REACT_ROUTER_DOM
import { Link, useNavigate } from "react-router-dom";

// IMAGES
import DigiHulkHeaderLogo from "../../assets/images/Digihulk_NoBg.png";
import dropdownicon from "../../assets/images/dropDownIcon.png";
import homeIcon from "../../assets/images/Side-Drawer-icons/home.png";
import aboutUsIcon from "../../assets/images/Side-Drawer-icons/about-us.png";
import servicesIcon from "../../assets/images/Side-Drawer-icons/services.png";
import contactUsIcon from "../../assets/images/Side-Drawer-icons/contact-us.png";

// CSS
import "./Header.css";

const buttonHoverStyle = {
  "&:hover": {
    cursor: "pointer",
    color: "red",
  },
};

const drawerWidth = 240;
const navItems = [
  {
    to: "/",
    name: "HOME",
  },
  {
    to: "/about-us/",
    name: "ABOUT US",
  },
  {
    // to: "/sports",
    name: "OUR SERVICES",
  },
  {
    to: "/contact-us/",
    name: "CONTACT US",
  },
  // {
  //   to: "/blogs",
  //   name: "BLOGS",
  // },
];

function Header(props) {
  // dropdwon
  const [anchorEl, setAnchorEl] = useState(false);

  const handleOpenMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };
  // dropdwon

  const navigate = useNavigate();

  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{
        textAlign: "center",
        //  backgroundColor: "#011e29",
        // backgroundColor: "#080808",
        backgroundColor: "#fff",
        height: "100%",
      }}
    >
      <Link
        to={"/"}
        style={{
          flexGrow: 1,
          display: { xs: "none", sm: "block" },
          textDecoration: "none",
          color: "#fff",
          ...buttonHoverStyle,
        }}
      >
        <Box>
          <Box
            component="img"
            sx={{
              width: {
                xs: "60%",
                sm: "60%",
                md: "100px",
                lg: "100px",
              },
              height: {
                xs: "50%",
                sm: "50%",
                md: "50px",
                lg: "50px",
              },
              // marginLeft: { xs: "15px", sm: "15px", md: "43px", lg: "43px" },
              marginTop: { xs: "15px", sm: "15px", md: "15px", lg: "15px" },
            }}
            alt="DigiHulkHeaderLogo"
            src={DigiHulkHeaderLogo}
          />
        </Box>
      </Link>

      <Box sx={{ marginTop: "10px" }}>
        {/* Home */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            marginLeft: "20px",
            marginTop: "15px",
          }}
        >
          <Box>
            <img
              src={homeIcon}
              style={{ width: "20px", height: "20px", marginTop: "5px" }}
            />
          </Box>
          <Box>
            <Link to={"/"} style={{ textDecoration: "none" }}>
              <Typography
                sx={{
                  color: "#000",
                  fontSize: "17px",
                  fontWeight: "600",
                  fontFamily: "Poppins, sans-serif",
                  marginLeft: "4px",
                  paddingTop: "5px",
                  paddingBottom: "5px",
                }}
              >
                HOME
              </Typography>
            </Link>
          </Box>
        </Box>

        {/* About us  */}
        <Box sx={{ display: "flex", flexDirection: "row", marginLeft: "20px" }}>
          <Box>
            <img
              src={aboutUsIcon}
              style={{ width: "20px", height: "20px", marginTop: "5px" }}
            />
          </Box>
          <Box>
            <Link to={"/about-us"} style={{ textDecoration: "none" }}>
              <Typography
                sx={{
                  color: "#000",
                  fontSize: "17px",
                  fontWeight: "600",
                  fontFamily: "Poppins, sans-serif",
                  marginLeft: "4px",
                  paddingTop: "5px",
                  paddingBottom: "5px",
                }}
              >
                ABOUT US
              </Typography>
            </Link>
          </Box>
        </Box>

        {/* Contact us  */}
        <Box sx={{ display: "flex", flexDirection: "row", marginLeft: "20px" }}>
          <Box>
            <img
              src={servicesIcon}
              style={{ width: "20px", height: "20px", marginTop: "5px" }}
            />
          </Box>
          <Box>
            <Link to={"/our-services/"} style={{ textDecoration: "none" }}>
              <Typography
                sx={{
                  color: "#000",
                  fontSize: "17px",
                  fontWeight: "600",
                  fontFamily: "Poppins, sans-serif",
                  marginLeft: "4px",
                  paddingTop: "5px",
                  paddingBottom: "5px",
                }}
              >
                OUR SERVICES
              </Typography>
            </Link>
          </Box>
        </Box>

        {/* Contact us  */}
        <Box sx={{ display: "flex", flexDirection: "row", marginLeft: "20px" }}>
          <Box>
            <img
              src={contactUsIcon}
              style={{ width: "20px", height: "20px", marginTop: "5px" }}
            />
          </Box>
          <Box>
            <Link to={"/contact-us"} style={{ textDecoration: "none" }}>
              <Typography
                sx={{
                  color: "#000",
                  fontSize: "17px",
                  fontWeight: "600",
                  fontFamily: "Poppins, sans-serif",
                  marginLeft: "4px",
                  paddingTop: "5px",
                  paddingBottom: "5px",
                }}
              >
                CONTACT US
              </Typography>
            </Link>
          </Box>
        </Box>
      </Box>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <>
      <Box sx={{ display: "flex" }}>
        {/* <CssBaseline /> */}
        <AppBar
          component="nav"
          // sx={{
          //   backgroundColor: {
          //     xs: "#fff",
          //     sm: "#fff",
          //     md: "#fff",
          //     lg: "#fff",
          //   },
          //   height: "75px",
          //   elevation:"0px"
          // }}
          sx={{
            backgroundColor: {
              xs: "#fff",
              sm: "#fff",
              md: "#fff",
              lg: "#fff",
            },
          }}
        >
          <Toolbar
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <IconButton
              color="#000"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>
{/* 
<Grid container>
  <Grid item xs={12} sm={12} md={0.7} lg={0.7} sx={{backgroundColor:"red"}}></Grid>
  <Grid item xs={12} sm={12} md={10.6} lg={10.6} sx={{backgroundColor:"green"}}>h</Grid>
  <Grid item xs={12} sm={12} md={0.7} lg={0.7}sx={{backgroundColor:"yellow"}}></Grid>
</Grid> */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Link to={"/"}>
                <Box
                  component="img"
                  sx={{
                    width: {
                      xs: "80%",
                      sm: "80%",
                      md: "170px",
                      lg: "170px",
                    },
                    height: {
                      xs: "40px",
                      sm: "40px",
                      md: "70px",
                      lg: "70px",
                    },
                    // marginLeft: {
                    //   xs: "100px",
                    //   sm: "100px",
                    //   md: "45px",
                    //   lg: "45px",
                    // },

                    marginTop: { xs: "5px", sm: "5px", md: "10px", lg: "10px" },
                    marginBottom: {
                      xs: "5px",
                      sm: "5px",
                      md: "6px",
                      lg: "6px",
                    },

                  }}
                  alt="DigiHulkMainHeaderLogo"
                  src={DigiHulkHeaderLogo}
                />
              </Link>
            </Box>

            <Box
              sx={{
                display: { xs: "none", sm: "block" },
              }}
            >
              <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                  }}
                >
                  {/* HOME */}
                  <Link to={"/"} style={{ textDecoration: "none" }}>
                    <Typography
                      sx={{
                        color: "rgba(122,122,122)",
                        fontSize: "18px",
                        fontWeight: "500",
                        // fontFamily: "Poppins, sans-serif",
                        fontFamily: "Raleway, sans-serif",
                        "&:hover": {
                                  color: "#2AAA8A",
                                  cursor: "pointer",
                                },
                      }}
                    >
                      Home
                    </Typography>
                  </Link>

                  {/* ABOUT US */}
                  <Box sx={{ paddingLeft: "30px" }}>
                    <Link to={"/about-us/"} style={{ textDecoration: "none" }}>
                      <Typography
                        sx={{
                          color: "rgba(122,122,122)",
                          fontSize: "18px",
                          fontWeight: "500",
                          // fontFamily: "Poppins, sans-serif",
                          fontFamily: "Raleway, sans-serif",
                          "&:hover": {
                                  color: "#2AAA8A",
                                  cursor: "pointer",
                                },
                        }}
                      >
                        About us
                      </Typography>
                    </Link>
                  </Box>

                  {/* Dropdown */}
                  <Box
                    sx={{
                      paddingLeft: "30px",
                      //  marginTop: "6px"
                    }}
                  >
                    <Box
                      sx={{ display: "flex", flexDirection: "row" }}
                      onClick={() => navigate("/our-services/")}
                    >
                      <Box>
                        <Typography
                          aria-controls="simple-menu"
                          aria-haspopup="true"
                          sx={{
                            color: "rgba(122,122,122)",
                            fontSize: "18px",
                            fontWeight: "500",
                            // fontFamily: "Poppins, sans-serif", 
                            fontFamily: "Raleway, sans-serif",
                            "&:hover": {
                                  color: "#2AAA8A",
                                  cursor: "pointer",
                                },
                          }}
                          onMouseOver={handleOpenMenu}
                        >
                          Our Services
                        </Typography>
                      </Box>
                      <Box>
                        <img
                          src={dropdownicon}
                          style={{
                            width: "10px",
                            height: "5px",
                            marginLeft: "5px",
                            marginBottom: "2px",
                          }}
                        />
                      </Box>
                    </Box>

                    <Menu
                      sx={{ marginTop: "9px" }}
                      id="simple-menu"
                      anchorEl={anchorEl}
                      keepMounted
                      open={Boolean(anchorEl)}
                      onClose={handleCloseMenu}
                      MenuListProps={{ onMouseLeave: handleCloseMenu }}
                    >
                      <Box sx={{ width: "230px", borderRadius: "0px" }}>
                        {/* outdoor */}
                        <Box
                          sx={{
                            marginTop: "5px",
                            borderBottom: "1px solid #D3D3D3",
                          }}
                        >
                          <Link
                            to={"/digital-marketing/"}
                            style={{ textDecoration: "none" }}
                          >
                            <Typography
                              sx={{
                                marginLeft: "20px",
                                paddingTop: "1px",
                                paddingBottom: "1px",
                                color: "#000",
                                "&:hover": {
                                  color: "red",
                                  cursor: "pointer",
                                },
                                fontSize: "15px",
                                fontWeight: "600",
                                fontFamily: "Poppins, sans-serif",
                                paddingBottom: "5px",
                              }}
                            >
                              Digital Marketing
                            </Typography>
                          </Link>
                        </Box>

                        {/* metro*/}
                        <Box sx={{ borderBottom: "1px solid #D3D3D3" }}>
                          <Link
                            to={"/website-development/"}
                            style={{ textDecoration: "none" }}
                          >
                            <Typography
                              sx={{
                                marginLeft: "20px",
                                paddingTop: "1px",
                                paddingBottom: "1px",
                                color: "#000",
                                "&:hover": {
                                  color: "red",
                                  cursor: "pointer",
                                },
                                fontSize: "15px",
                                fontWeight: "600",
                                fontFamily: "Poppins, sans-serif",
                                paddingTop: "7px",
                                paddingBottom: "7px",
                              }}
                            >
                              Web Design
                            </Typography>
                          </Link>
                        </Box>

                        {/* Airport branding */}
                        <Box sx={{ borderBottom: "1px solid #D3D3D3" }}>
                          <Link
                            to={"/mobile-app-develpment/"}
                            style={{ textDecoration: "none" }}
                          >
                            <Typography
                              sx={{
                                marginLeft: "20px",
                                paddingTop: "1px",
                                paddingBottom: "1px",
                                color: "#000",
                                "&:hover": {
                                  color: "red",
                                  cursor: "pointer",
                                },
                                fontSize: "15px",
                                fontWeight: "600",
                                fontFamily: "Poppins, sans-serif",
                                paddingTop: "7px",
                                paddingBottom: "7px",
                              }}
                            >
                              Mobile App Development
                            </Typography>
                          </Link>
                        </Box>

                        {/* MALL-BRANDING */}
                        <Box
                        //  sx={{ borderBottom: "1px solid #D3D3D3"}}
                         >
                          <Link
                            to={"/content-marketing/"}
                            style={{ textDecoration: "none" }}
                          >
                            <Typography
                              sx={{
                                marginLeft: "20px",
                       
                                color: "#000",
                                "&:hover": {
                                  color: "red",
                                  cursor: "pointer",
                                },
                                fontSize: "15px",
                                fontWeight: "600",
                                fontFamily: "Poppins, sans-serif",
                                paddingTop: "7px",
                                paddingBottom: "7px",
                              }}
                            >
                              Content Marketing
                            </Typography>
                          </Link>
                        </Box>
                      </Box>
                    </Menu>
                  </Box>
                  {/* Dropdown  ends*/}

                  {/* CONTACT US */}
                  <Box sx={{ paddingLeft: "15px" }}>
                    <Link
                      to={"/contact-us/"}
                      style={{ textDecoration: "none" }}
                    >
                      <Typography
                        sx={{
                          color: "rgba(122,122,122)",
                          fontSize: "18px",
                          fontWeight: "500",
                          // fontFamily: "Poppins, sans-serif",
                          fontFamily: "Raleway, sans-serif",
                          "&:hover": {
                                  color: "#2AAA8A",
                                  cursor: "pointer",
                                },
                        }}
                      >
                        Contact us
                      </Typography>
                    </Link>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Toolbar>
        </AppBar>
        <nav>
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
          >
            {drawer}
          </Drawer>
        </nav>
      </Box>
    </>
  );
}

export default Header;
