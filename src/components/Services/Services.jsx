import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Grid,Typography, Box } from "@mui/material";
import ComputerIcon from "@mui/icons-material/Computer";
import BrushIcon from "@mui/icons-material/Brush";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import ArticleIcon from "@mui/icons-material/Article";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";



const Services = () => {
   useEffect(() => {
      AOS.init({
        duration: 1000,
        once: true,
      });
    }, []);

  return (
    <>
      <Box
        sx={{
          minHeight: "100vh",
          bgcolor: "#020314",
          position: "relative",
          backgroundImage: "radial-gradient(circle at center, #DE09F3, transparent 40%)",
          margin:"30px 0px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            mb: 6,
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: "2.5rem", md: "3rem" },
              fontWeight: "bold",
              color: "transparent",
              WebkitTextStroke: "1px #DE09F3",
              opacity: 0.3,
              position: "absolute",
            }}
          >
            OUR SERVICES
          </Typography>
          <Typography color="#DE09F3" fontWeight={600}>
            OUR SERVICES
          </Typography>
        </Box>

        <Grid
          data-aos="fade"
          data-aos-delay="140"
          data-aos-duration="600"
          container
          spacing={3}
          justifyContent={"center"}
        >
          <Grid
            size={{ xs: 12, md: 3 }}
            sx={{
              width: "100%",
              margin: "10px 15px",
              // mexWidth: { xs: "auto", md: "20rem" },
            }}
          >
            <Box
              sx={{
                p: 2,
                display: "flex",
                borderRadius: 2,
                // bgcolor: "#111220",
                bgcolor: "#0000007d",
                minWidth: { xs: "auto", md: "100%" },
                gap: 2,
                minHeight: { xs: "auto", md: "12rem" },
                backgroundImage: "linear-gradient(to top right, #DE09F3, transparent 20%)",
              }}
            >
              <Box
                sx={{
                  color: "#DE09F3",
                  fontSize: {
                    xs: "2rem",
                    md: "3.3rem",
                    display: "flex",
                    flexShrink: 0,
                  },
                }}
              >
                <ComputerIcon />
              </Box>
              <Box
                sx={{ display: "flex", flexDirection: "column", gap: 1, mb: 1 }}
              >
                <Typography
                  variant="h6"
                  color="white"
                  fontSize="18px"
                  fontWeight={400}
                >
                  Website Development
                </Typography>
                <Typography
                  variant="p"
                  fontSize="14px"
                  fontFamily="Catamaran, sans-serif"
                  lineHeight="1.25rem"
                  color="#C5C5C5"
                >
                  Our team of UI/UX designers delivers AI-powered UI/UX
                  designing services, leveraging advanced technologies and
                  algorithms to create intuitive and user-centric interfaces
                  that enhance the overall user experience and drive engagement.
                </Typography>
              </Box>
            </Box>
          </Grid>

          <Grid
            size={{ xs: 12, md: 3 }}
            sx={{
              width: "100%",
              margin: "10px 15px",
              mexWidth: { xs: "auto", md: "20rem" },
            }}
          >
            <Box
              sx={{
                p: 2,
                display: "flex",
                borderRadius: 2,
                // bgcolor: "#111220",
                bgcolor: "#0000007d",
                minWidth: { xs: "auto", md: "100%" },
                gap: 2,
                minHeight: { xs: "auto", md: "12rem" },
                // backgroundImage:"linear-gradient(to top right, #DE09F3, transparent 20%)",
              }}
            >
              <Box
                sx={{
                  color: "#DE09F3",
                  fontSize: {
                    xs: "2rem",
                    md: "3.3rem",
                    display: "flex",
                    flexShrink: 0,
                  },
                }}
              >
                <BrushIcon />
              </Box>
              <Box
                sx={{ display: "flex", flexDirection: "column", gap: 1, mb: 1 }}
              >
                <Typography
                  variant="h6"
                  color="white"
                  fontSize="18px"
                  fontWeight={400}
                >
                  Graphic Designing
                </Typography>
                <Typography
                  variant="p"
                  fontSize="14px"
                  fontFamily="Catamaran, sans-serif"
                  lineHeight="1.25rem"
                  color="#C5C5C5"
                >
                  Our talented graphic designers offer AI-powered graphic
                  designing services, harnessing advanced technologies and
                  algorithms to create visually stunning and impactful designs
                  that engage and resonate with your target audience.
                </Typography>
              </Box>
            </Box>
          </Grid>

          <Grid
            size={{ xs: 12, md: 3 }}
            sx={{
              width: "100%",
              margin: "10px 15px",
              mexWidth: { xs: "auto", md: "20rem" },
            }}
          >
            <Box
              sx={{
                p: 2,
                display: "flex",
                borderRadius: 2,
                // bgcolor: "#111220",
                bgcolor: "#0000007d",
                minWidth: { xs: "auto", md: "100%" },
                gap: 2,
                minHeight: { xs: "auto", md: "12rem" },
                backgroundImage:
                  "linear-gradient(to top left, #DE09F3, transparent 20%)",
              }}
            >
              <Box
                sx={{
                  color: "#DE09F3",
                  fontSize: {
                    xs: "2rem",
                    md: "3.3rem",
                    display: "flex",
                    flexShrink: 0,
                  },
                }}
              >
                <PhoneAndroidIcon />
              </Box>
              <Box
                sx={{ display: "flex", flexDirection: "column", gap: 1, mb: 1 }}
              >
                <Typography
                  variant="h6"
                  color="white"
                  fontSize="18px"
                  fontWeight={400}
                >
                  Application Development
                </Typography>
                <Typography
                  variant="p"
                  fontSize="14px"
                  fontFamily="Catamaran, sans-serif"
                  lineHeight="1.25rem"
                  color="#C5C5C5"
                >
                  We develop customized applications tailored to your business
                  needs, whether a mobile app, web app, or software solution,
                  using AI technology and best practices.
                </Typography>
              </Box>
            </Box>
          </Grid>

          {/* 2nd line */}

          <Grid
            size={{ xs: 12, md: 3 }}
            sx={{
              width: "100%",
              margin: "10px 15px",
              mexWidth: { xs: "auto", md: "20rem" },
            }}
          >
            <Box
              sx={{
                p: 2,
                display: "flex",
                borderRadius: 2,
                // bgcolor: "#111220",
                bgcolor: "#0000007d",
                minWidth: { xs: "auto", md: "100%" },
                gap: 2,
                minHeight: { xs: "auto", md: "12rem" },
                backgroundImage:
                  "linear-gradient(to top right, #DE09F3, transparent 20%)",
              }}
            >
              <Box
                sx={{
                  color: "#DE09F3",
                  fontSize: {
                    xs: "2rem",
                    md: "3.3rem",
                    display: "flex",
                    flexShrink: 0,
                  },
                }}
              >
                <ArticleIcon />
              </Box>
              <Box
                sx={{ display: "flex", flexDirection: "column", gap: 1, mb: 1 }}
              >
                <Typography
                  variant="h6"
                  color="white"
                  fontSize="18px"
                  fontWeight={400}
                >
                  UI / UX Designing
                </Typography>
                <Typography
                  variant="p"
                  fontSize="14px"
                  fontFamily="Catamaran, sans-serif"
                  lineHeight="1.25rem"
                  color="#C5C5C5"
                >
                  Our team of UI/UX designers delivers AI-powered UI/UX
                  designing services, leveraging advanced technologies and
                  algorithms to create intuitive and user-centric interfaces
                  that enhance the overall user experience and drive engagement.
                </Typography>
              </Box>
            </Box>
          </Grid>

          <Grid
            size={{ xs: 12, md: 3 }}
            sx={{
              width: "100%",
              margin: "10px 15px",
              mexWidth: { xs: "auto", md: "20rem" },
            }}
          >
            <Box
              sx={{
                p: 2,
                display: "flex",
                borderRadius: 2,
                // bgcolor: "#111220",
                bgcolor: "#0000007d",
                minWidth: { xs: "auto", md: "100%" },
                gap: 2,
                minHeight: { xs: "auto", md: "12rem" },
                // backgroundImage: "linear-gradient(to top left, #DE09F3, transparent 20%)",
              }}
            >
              <Box
                sx={{
                  color: "#DE09F3",
                  fontSize: {
                    xs: "2rem",
                    md: "3.3rem",
                    display: "flex",
                    flexShrink: 0,
                  },
                }}
              >
                <TrendingUpIcon />
              </Box>
              <Box
                sx={{ display: "flex", flexDirection: "column", gap: 1, mb: 1 }}
              >
                <Typography
                  variant="h6"
                  color="white"
                  fontSize="18px"
                  fontWeight={400}
                >
                  SEO & Content Writing
                </Typography>
                <Typography
                  variant="p"
                  fontSize="14px"
                  fontFamily="Catamaran, sans-serif"
                  lineHeight="1.25rem"
                  color="#C5C5C5"
                >
                  As an SEO Company in Sheridan, Wyoming, we optimize websites
                  for search engines, conducting keyword research, on-page
                  optimization, and content creation to improve organic
                  visibility and drive targeted traffic to your website.
                </Typography>
              </Box>
            </Box>
          </Grid>

          <Grid
            size={{ xs: 12, md: 3 }}
            sx={{
              width: "100%",
              margin: "10px 15px",
              mexWidth: { xs: "auto", md: "20rem" },
            }}
          >
            <Box
              sx={{
                p: 2,
                display: "flex",
                borderRadius: 2,
                // bgcolor: "#111220",
                bgcolor: "#0000007d",
                minWidth: { xs: "auto", md: "100%" },
                gap: 2,
                minHeight: { xs: "auto", md: "12rem" },
                backgroundImage:
                  "linear-gradient(to top left, #DE09F3, transparent 20%)",
              }}
            >
              <Box
                sx={{
                  color: "#DE09F3",
                  fontSize: {
                    xs: "2rem",
                    md: "3.3rem",
                    display: "flex",
                    flexShrink: 0,
                  },
                }}
              >
                <TrendingUpIcon />
              </Box>
              <Box
                sx={{ display: "flex", flexDirection: "column", gap: 1, mb: 1 }}
              >
                <Typography
                  variant="h6"
                  color="white"
                  fontSize="18px"
                  fontWeight={400}
                >
                  Digital Marketing
                </Typography>
                <Typography
                  variant="p"
                  fontSize="14px"
                  fontFamily="Catamaran, sans-serif"
                  lineHeight="1.25rem"
                  color="#C5C5C5"
                >
                  Our digital marketing strategies encompass various channels,
                  including SEM, SMM, email marketing, and content marketing, to
                  effectively reach and engage your target audience.
                </Typography>
              </Box>
            </Box>
          </Grid>


        </Grid>
        
      </Box>


    </>
  );
};

export default Services;
