import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";


function Nav() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      position="static"
      elevation={0}
      sx={{
        width: "100%",
        background: "transparent",
        boxShadow: "none",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ width: "100%", px: 2 }}>
          {/* Logo */}
          <img
            src={logo}
            alt="Logo"
            style={{ height: "40px", marginRight: "10px" }}
          />

          {/* Mobile Menu Button */}
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" },  }}>
            <IconButton
            sx={{marginLeft: "auto",}}
              size="large"
              aria-label="menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block" },
              }}
            >

            </Menu>
          </Box>
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              marginLeft: "auto", 
            }}
          >

            <MenuItem component= { Link} to="/">Home</MenuItem>
            <MenuItem component = {Link} to="/about">About</MenuItem>
            <MenuItem component = {Link} to= "/services">Services</MenuItem>
            <MenuItem component = {Link} to= "/contact">Contact</MenuItem>
            <MenuItem><Button sx={{background:"linear-gradient(210deg, #5f20c5 0%, #de09fb 100%)" ,
                fontFamily:"acumin-pro",
                color:"white",borderRadius:"15px",fontFamily: '"acumin-pro", Sans-serif',fontSize:"14px",
                padding:"7px 20px 6px 20px", transition:"all 0.3s ease-in-out",
                textTransform: "none",
                "&:hover":{
                  background: "linear-gradient(90deg, #6100ff 0%, #a726c1 100%)",
                },
                }}>Call Now</Button></MenuItem>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Nav;

// import React, { useState } from "react";
// import { AppBar, Toolbar, Button, Menu, MenuItem } from "@mui/material";

// export default function Nav() {
//   const [anchorEl, setAnchorEl] = useState(null);

//   const handleMenuOpen = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleMenuClose = () => {
//     setAnchorEl(null);
//   };

//   return (
//     <AppBar position="static" sx={{ background: "linear-gradient(to right, #1c1c3c, #000)" }}>
//       <Toolbar>
//         <Button color="inherit">Home</Button>
//         <Button color="inherit">About</Button>

//         {/* Services with hover dropdown */}
//         <Button
//           color="inherit"
//           onMouseEnter={handleMenuOpen}
//           aria-controls="services-menu"
//           aria-haspopup="true"
//         >
//           Services
//         </Button>

//         <Menu
//           id="services-menu"
//           anchorEl={anchorEl}
//           open={Boolean(anchorEl)}
//           onClose={handleMenuClose}
//           MenuListProps={{
//             onMouseLeave: handleMenuClose, // close when mouse leaves
//           }}
//           anchorOrigin={{
//             vertical: "bottom",
//             horizontal: "left",
//           }}
//           transformOrigin={{
//             vertical: "top",
//             horizontal: "left",
//           }}
//         >
//           <MenuItem onClick={handleMenuClose}>Development Services</MenuItem>
//           <MenuItem onClick={handleMenuClose}>Marketing Services</MenuItem>
//           <MenuItem onClick={handleMenuClose}>Ads Management</MenuItem>
//           <MenuItem onClick={handleMenuClose}>SEO Services</MenuItem>
//         </Menu>

//         <Button color="inherit">Contact</Button>
//       </Toolbar>
//     </AppBar>
//   );
// }
