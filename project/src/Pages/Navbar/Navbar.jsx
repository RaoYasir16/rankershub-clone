import React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import { Link } from "react-router-dom";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import logo from "../../Imgs/logo.png";
import MenuItem from "@mui/material/MenuItem";

const drawerWidth = 240;

const navItems = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Services", isServices: true },
  { label: "Contact", path: "/contact" },
];

const services = [
  {
    heading: "Development Services",
    subItems: [
      { label: "Website Design", path: "/services/web-design" },
      { label: "Mobile Apps", path: "/services/mobile-apps" },
      { label: "Graphic Design", path: "/services/graphic-design" },
      { label: "UI/UX Design", path: "/services/ui-ux" },
    ],
  },
  {
    heading: "Marketing",
    subItems: [
      { label: "SEO", path: "/services/seo" },
      { label: "SEM", path: "/services/sem" },
      { label: "Digital Marketing", path: "/services/digital-marketing" },
    ],
  },
  {
    heading: "SEO",
    subItems: [
      { label: "Google Business Platform", path: "/services/google-business" },
      { label: "Website SEO", path: "/services/website-seo" },
    ],
  },
  {
    heading: "Ads Management",
    subItems: [
      { label: "Google Ads", path: "/services/google-ads" },
      { label: "Social Media Ads", path: "/services/social-ads" },
    ],
  },
];

const ctaButton = { label: "Get Started", path: "/get-started" };

function Navbar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [servicesOpen, setServicesOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prev) => !prev);
  };

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Box
        component="img"
        sx={{ height: 40, width: "auto", my: 2 }}
        alt="Logo"
        src={logo}
      />
      <Divider />
      <List>
        {navItems.map((item) =>
          item.isServices ? (
            <React.Fragment key="services">
              <ListItem disablePadding>
                <ListItemButton
                  onClick={(e) => {
                    e.stopPropagation();
                    setServicesOpen((p) => !p);
                  }}
                >
                  <ListItemText
                    primary="Services"
                    sx={{
                      textAlign: "left",
                      color: "white",
                      "&:hover": {
                        textDecoration: "underline",
                        textUnderlineOffset: "4px",
                      },
                    }}
                  />
                  {servicesOpen ? (
                    <ExpandLessIcon sx={{ color: "white" }} />
                  ) : (
                    <ExpandMoreIcon sx={{ color: "white" }} />
                  )}
                </ListItemButton>
              </ListItem>

              {servicesOpen &&
                services.map((section) => (
                  <Box
                    key={section.heading}
                    sx={{
                      textAlign: "left",
                      // mt: 1,
                      // pl: 2,
                      bgcolor: "rgba(255,255,255,0.05)",
                      borderRadius: 1,
                      // pb: 1,
                    }}
                  >
                    <Typography
                      fontWeight="bold"
                      sx={{
                        color: "white",
                        // mb: 0.5,
                        bgcolor: "rgba(255,255,255,0.08)",
                        px: 2,
                        py: 1,
                        borderRadius: 1,
                      }}
                    >
                      {section.heading}
                    </Typography>
                    <Box>
                      {section.subItems.map((sub) => (
                        <ListItem key={sub.label} disablePadding>
                          <ListItemButton
                            component="a"
                            href={sub.path}
                            sx={{
                              pl: 3,
                              minHeight: 32,
                              color: "#b0b0b0",
                              bgcolor: "rgba(255,255,255,0.03)",
                              borderRadius: 1,
                              "&:hover": {
                                bgcolor: "rgba(255,255,255,0.1)",
                                // textDecoration: "underline",
                                textUnderlineOffset: "4px",
                                color: "white",
                              },
                            }}
                          >
                            <ListItemText primary={sub.label} />
                          </ListItemButton>
                        </ListItem>
                      ))}
                    </Box>
                  </Box>
                ))}
            </React.Fragment>
          ) : (
            <ListItem disablePadding key={item.label}>
              <ListItemButton
                component="a"
                href={item.path}
                sx={{
                  textAlign: "left",
                  color: "white",
                  "&:hover": {
                    textUnderlineOffset: "4px",
                  },
                }}
              >
                <ListItemText primary={item.label} />
              </ListItemButton>
            </ListItem>
          )
        )}
        <Divider />
        <ListItem>
          <Button
            component="a"
            href={ctaButton.path}
            variant="contained"
            sx={{
              width: "100%",
              background: "linear-gradient(90deg, #BA10EC,#8119D3)",
              borderRadius: "50px",
            }}
          >
            {ctaButton.label}
          </Button>
        </ListItem>
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        component="nav"
        elevation={0}
        sx={{ backgroundColor: "transparent", p: 2, position: "absolute" }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: {
              xs: "space-between",
              md: "space-between",
              lg: "space-around",
            },
          }}
        >
          <Box
            component="img"
            sx={{ maxWidth: "12rem", height: "auto", flexShrink: 0 }}
            alt="Logo"
            src={logo}
          />

          <Box
            sx={{
              display: { xs: "none", sm: "none", md: "flex" },
              gap: { md: 2 },
              alignItems: "center",
            }}
          >
            {navItems.map((item) =>
              item.isServices ? (
                <Box
                  key="services"
                  onMouseEnter={(e) => setAnchorEl(e.currentTarget)}
                  onMouseLeave={handleMenuClose}
                >
                  <Button
                    sx={{
                      color: "#fff",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: 0.5,
                    }}
                  >
                    <span>Services</span>
                    {anchorEl ? (
                      <ExpandLessIcon fontSize="small" />
                    ) : (
                      <ExpandMoreIcon fontSize="small" />
                    )}
                  </Button>

                  <Menu
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={handleMenuClose}
                    MenuListProps={{ onMouseLeave: handleMenuClose }}
                    anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
                    transformOrigin={{ vertical: "top", horizontal: "center" }}
                    sx={{
                      "& .MuiPaper-root": {
                        borderRadius: "1.5rem",
                        width: "50%",
                        padding: 4,
                        bgcolor: "#111220",
                        color: "white",
                      },
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        gap: 2,
                      }}
                    >
                      {services.map((section) => (
                        <Box key={section.heading} textAlign="center">
                          <Typography fontWeight="bold" gutterBottom>
                            {section.heading}
                          </Typography>
                          <Box
                            sx={{
                              flexWrap: "wrap",
                            }}
                          >
                            {section.subItems.map((sub) => (
                              <ListItem
                                key={sub.label}
                                disablePadding
                                sx={{ my: 0 }}
                              >
                                <ListItemButton
                                  component="a"
                                  href={sub.path}
                                  sx={{
                                    pl: 3,
                                    minHeight: 32,
                                    color: "#b0b0b0",
                                    borderRadius: 1,
                                    mb: { xs: 0.2, md: 0.4 },
                                    bgcolor: {
                                      xs: "rgba(255,255,255,0.05)",
                                      md: "rgba(255, 255, 255, 0)",
                                    },
                                    "&:hover": {
                                      bgcolor: {
                                        xs: "rgba(255,255,255,0.1)",
                                        md: "rgba(255,255,255,0.1)",
                                      },
                                      textUnderlineOffset: "4px",
                                      color: "white",
                                    },
                                  }}
                                >
                                  <ListItemText
                                    primary={sub.label}
                                    primaryTypographyProps={{
                                      fontSize: "0.9rem",
                                    }}
                                  />
                                </ListItemButton>
                              </ListItem>
                            ))}
                          </Box>
                        </Box>
                      ))}
                    </Box>
                  </Menu>
                </Box>
              ) : (
                <Button
                  key={item.label}
                  component="a"
                  href={item.path}
                  sx={{
                    color: "#fff",
                  }}
                >
                  {item.label}
                </Button>
              )
            )}
            <Button
              component="a"
              href={ctaButton.path}
              variant="contained"
              sx={{
                background: "linear-gradient(90deg, #BA10EC,#8119D3)",
                borderRadius: "50px",
                fontSize: { lg: "0.8rem" },
                fontWeight: "500",
              }}
            >
              {ctaButton.label}
            </Button>
          </Box>

          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerToggle}
            sx={{ display: { xs: "block", sm: "block", md: "none" } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
          sx={{
            display: { xs: "block", sm: "block", md: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              backgroundColor: "#020314",
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}

Navbar.propTypes = {
  window: PropTypes.func,
};

export default Navbar;
