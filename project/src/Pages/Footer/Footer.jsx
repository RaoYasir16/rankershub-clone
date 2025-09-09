import { Box, Grid, Typography, TextField, Link as MuiLink } from "@mui/material";
import React from "react";
import logo from "../../Imgs/logo.png";
import { IoIosCall } from "react-icons/io";
import { CgMail } from "react-icons/cg";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa6";
import { InputAdornment } from "@mui/material";
import { RiSendPlaneFill } from "react-icons/ri";
import { Link as RouterLink } from "react-router-dom";

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#020314",
        minHeight: "35vh",
        borderTop: "2px solid #242424",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        p: 4,
      }}
    >
      <Grid
        container
        spacing={6}
        marginLeft={{ xs: "0", md: "1rem" }}
        justifyContent={"center"}
        textAlign={{ xs: "center", md: "left" }}
      >
        
        <Grid size={{ xs: 12, md: 4 }}>
          <Box
            component="img"
            src={logo}
            alt="example"
            sx={{
              width: { xs: "60%", md: "15rem" },
              height: "auto",
              objectFit: "cover",
            }}
          />
          <Typography
            variant="body1"
            color="#9d9d9fff"
            sx={{ fontSize: { xs: ".7rem", md: ".8rem" }, mt: 1 }}
          >
            Make your business’s marketing go sky-rocket with our AI optimization
            coupled with digital marketing.
          </Typography>
          <Box
            sx={{
              display: "flex",
              gap: 2,
              color: "white",
              mt: 3,
              justifyContent: { xs: "center", md: "flex-start" },
            }}
          >
            <FaFacebook />
            <FaInstagram />
            <FaLinkedin />
          </Box>
        </Grid>


        <Grid size={{ xs: 12, md: 2 }}>
          <Typography
            variant="h6"
            sx={{ mb: 2, fontWeight: 600, color: "white" }}
          >
            Quick Links
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 0.2,
              color: "#9d9d9fff",
              fontSize: { xs: ".7rem", md: ".8rem" },
            }}
          >
            <MuiLink component={RouterLink} to="/" color="inherit" underline="hover">
              Home
            </MuiLink>
            <MuiLink component={RouterLink} to="/about" color="inherit" underline="hover">
              About
            </MuiLink>
            <MuiLink component={RouterLink} to="/services/web-design" color="inherit" underline="hover">
              Services
            </MuiLink>
            <MuiLink component={RouterLink} to="/privacy-policy" color="inherit" underline="hover">
              Privacy Policy
            </MuiLink>
            <MuiLink component={RouterLink} to="/terms" color="inherit" underline="hover">
              Terms & Conditions
            </MuiLink>
            <MuiLink component={RouterLink} to="/refund-policy" color="inherit" underline="hover">
              Refund Policy
            </MuiLink>
          </Box>
        </Grid>


        <Grid size={{ xs: 12, md: 2 }}>
          <Typography
            variant="h6"
            sx={{ mb: 2, fontWeight: 600, color: "white" }}
          >
            Services
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 0.2,
              color: "#9d9d9fff",
              fontSize: { xs: ".7rem", md: ".8rem" },
            }}
          >
            <MuiLink component={RouterLink} to="/services/web-design" color="inherit" underline="hover">
              Web Design
            </MuiLink>
            <MuiLink component={RouterLink} to="/services/mobile-apps" color="inherit" underline="hover">
              App Development
            </MuiLink>
            <MuiLink component={RouterLink} to="/services/graphic-design" color="inherit" underline="hover">
              Graphic Design
            </MuiLink>
            <MuiLink component={RouterLink} to="/services/seo" color="inherit" underline="hover">
              SEO Services
            </MuiLink>
            <MuiLink component={RouterLink} to="/services/ui-ux" color="inherit" underline="hover">
              UI / UX Design
            </MuiLink>
            <MuiLink component={RouterLink} to="/services/digital-marketing" color="inherit" underline="hover">
              Digital Marketing
            </MuiLink>
          </Box>
        </Grid>

        
        <Grid size={{ xs: 12, md: 3 }}>
          <Typography
            variant="h6"
            sx={{ mb: 2, fontWeight: 600, color: "white" }}
          >
            Contact Us
          </Typography>
          <Box sx={{ display: "flex", gap: 0.5, justifyContent: { xs: "center", md: "flex-start" } }}>
            <IoIosCall color="#DB09F9" />
            <Typography variant="body1" color="#9d9d9fff" sx={{ fontSize: { xs: ".7rem", md: ".8rem" } }}>
              +92 9948 9191
            </Typography>
          </Box>
          <Box sx={{ display: "flex", gap: 0.5, mt: 0.5, justifyContent: { xs: "center", md: "flex-start" } }}>
            <CgMail color="#DB09F9" />
            <Typography variant="body1" color="#9d9d9fff" sx={{ fontSize: { xs: ".7rem", md: ".8rem" } }}>
              contact@gmail.com
            </Typography>
          </Box>
          <Box sx={{ display: "flex", gap: 0.5, mt: 0.5, justifyContent: { xs: "center", md: "flex-start" } }}>
            <FaMapMarkerAlt color="#DB09F9" />
            <Typography variant="body1" color="#9d9d9fff" sx={{ fontSize: { xs: ".7rem", md: ".8rem" } }}>
              sheriyan, YK
            </Typography>
          </Box>
          <Box>
            <Typography
              variant="body1"
              color="#ccccdeff"
              sx={{
                fontSize: { xs: ".7rem", md: ".8rem" },
                fontWeight: "600",
                mt: 1,
                mb: 1,
                textAlign: { xs: "center", md: "left" },
              }}
            >
              Subscribe Us
            </Typography>
            <TextField
              placeholder="Your email address"
              sx={{
                bgcolor: "white",
                borderRadius: "2rem",
                "& .MuiOutlinedInput-root": {
                  borderRadius: "2rem",
                  height: "2.3rem",
                  width: "15rem",
                  "& input": {
                    padding: "0 10px",
                  },
                  "& input::placeholder": {
                    color: "grey",
                    opacity: 1,
                    fontSize: "0.9rem",
                    fontWeight: 500,
                  },
                },
              }}
              slotProps={{
                input: {
                  endAdornment: (
                    <InputAdornment position="end">
                      <Box
                        sx={{
                          background: "linear-gradient(to right, #DB09F9, #631FC7)",
                          borderRadius: "50%",
                          fontSize: "1.2rem",
                          color: "white",
                          height: "2rem",
                          width: "2.5rem",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <RiSendPlaneFill />
                      </Box>
                    </InputAdornment>
                  ),
                },
              }}
            />
          </Box>
        </Grid>
      </Grid>

      
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: { xs: "center", md: "space-between" },
          alignItems: { xs: "center", md: "center" },
          textAlign: { xs: "center", md: "left" },
          width: { xs: "100%", md: "65%" },
          borderTop: "2px solid #242424",
          paddingTop: "1rem",
          mt: 3,
          gap: { xs: 1, md: 0 },
          mx: "auto",
        }}
      >
        <Typography variant="body1" color="#ccccdeff" sx={{ fontSize: { xs: ".7rem", md: ".9rem" } }}>
          Copyright © 2023 Rankershub AI. All Rights Reserved
        </Typography>
        <Typography variant="body1" color="#ccccdeff" sx={{ fontSize: { xs: ".7rem", md: ".9rem" } }}>
          Powered by <span style={{ color: "#DB09F9" }}>Rankershub AI</span>
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
