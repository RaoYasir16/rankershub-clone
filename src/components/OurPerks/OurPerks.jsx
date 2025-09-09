import { Box, Typography, Grid } from "@mui/material";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import BarChartIcon from "@mui/icons-material/BarChart";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import PersonIcon from "@mui/icons-material/Person";

const OurPerks = () => {
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
          bgcolor: "#020314",
          position: "relative",
          p: 2,
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            // mb: 3,
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
            OUR PERKS
          </Typography>
          <Typography color="#DE09F3" fontWeight={600}>
            OUR PERKS
          </Typography>
        </Box>

        <Grid
          mt="30px"
          data-aos="fade"
          data-aos-delay="140"
          data-aos-duration="600"
          container
          spacing={4}
          justifyContent={"center"}
        >
          
          <Grid
            item
            xs={12}
            md={3}
            sx={{
              width: "100%",
              margin: "10px 0px",
              maxWidth: { xs: "auto", md: "15rem" },
            }}
          >
            <Box
              sx={{
                p: 3,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                borderRadius: 3,
                backgroundImage:
                  "linear-gradient(135deg, #000000 0%, #1C1C1C 100%)",
                minWidth: { xs: "auto", md: "100%" },
                minHeight: { xs: "auto", md: "12rem" },
                boxShadow: "0 6px 18px rgba(0,0,0,0.5)",
                transition: "all 0.3s ease",
                "&:hover": {
                  transform: "translateY(-6px)",
                  boxShadow: "0 12px 28px rgba(0,0,0,0.7)",
                },
              }}
            >
              {/* Icon */}
              <Box
                sx={{
                  color: "#DE09F3",
                  fontSize: { xs: "3rem", md: "5rem" },
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  mb: 1,
                }}
              >
                <CheckCircleOutlineIcon sx={{ fontSize: { xs: 50, md: 80 } }} />
              </Box>

              {/* Text */}
              <Typography
                variant="h6"
                sx={{
                  color: "#DE09F3",
                  fontSize: { xs: "1.2rem", md: "1.5rem" },
                  fontWeight: 600,
                }}
              >
                Best Quality
              </Typography>
            </Box>
          </Grid>

          <Grid
            item
            xs={12}
            md={3}
            sx={{
              width: "100%",
              margin: "10px 15px",
              maxWidth: { xs: "auto", md: "15rem" },
            }}
          >
            <Box
              sx={{
                p: 3,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                borderRadius: 3,
                backgroundImage:
                  "linear-gradient(135deg, #000000 0%, #1C1C1C 100%)",
                minWidth: { xs: "auto", md: "100%" },
                minHeight: { xs: "auto", md: "12rem" },
                boxShadow: "0 6px 18px rgba(0,0,0,0.5)",
                transition: "all 0.3s ease",
                "&:hover": {
                  transform: "translateY(-6px)",
                  boxShadow: "0 12px 28px rgba(0,0,0,0.7)",
                },
              }}
            >
              {/* Icon */}
              <Box
                sx={{
                  color: "#DE09F3",
                  fontSize: { xs: "3rem", md: "5rem" },
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  mb: 1,
                }}
              >
                <BarChartIcon sx={{ fontSize: { xs: 50, md: 80 } }} />
              </Box>

              {/* Text */}
              <Typography
                variant="h6"
                sx={{
                  color: "#DE09F3",
                  fontSize: { xs: "1.2rem", md: "1.5rem" },
                  fontWeight: 600,
                }}
              >
                Best Quality
              </Typography>
            </Box>
          </Grid>

          <Grid
            item
            xs={12}
            md={3}
            sx={{
              width: "100%",
              margin: "10px 15px",
              maxWidth: { xs: "auto", md: "15rem" },
            }}
          >
            <Box
              sx={{
                p: 3,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                borderRadius: 3,
                backgroundImage:
                  "linear-gradient(135deg, #000000 0%, #1C1C1C 100%)",
                minWidth: { xs: "auto", md: "100%" },
                minHeight: { xs: "auto", md: "12rem" },
                boxShadow: "0 6px 18px rgba(0,0,0,0.5)",
                transition: "all 0.3s ease",
                "&:hover": {
                  transform: "translateY(-6px)",
                  boxShadow: "0 12px 28px rgba(0,0,0,0.7)",
                },
              }}
            >
              {/* Icon */}
              <Box
                sx={{
                  color: "#DE09F3",
                  fontSize: { xs: "3rem", md: "5rem" },
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  mb: 1,
                }}
              >
                <RocketLaunchIcon sx={{ fontSize: { xs: 50, md: 80 } }} />
              </Box>

              {/* Text */}
              <Typography
                variant="h6"
                sx={{
                  color: "#DE09F3",
                  fontSize: { xs: "1.2rem", md: "1.5rem" },
                  fontWeight: 600,
                }}
              >
                Best Quality
              </Typography>
            </Box>
          </Grid>

          <Grid
            item
            xs={12}
            md={3}
            sx={{
              width: "100%",
              margin: "10px 15px",
              maxWidth: { xs: "auto", md: "15rem" },
            }}
          >
            <Box
              sx={{
                p: 3,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                borderRadius: 3,
                backgroundImage:
                  "linear-gradient(135deg, #000000 0%, #1C1C1C 100%)",
                minWidth: { xs: "auto", md: "100%" },
                minHeight: { xs: "auto", md: "12rem" },
                boxShadow: "0 6px 18px rgba(0,0,0,0.5)",
                transition: "all 0.3s ease",
                "&:hover": {
                  transform: "translateY(-6px)",
                  boxShadow: "0 12px 28px rgba(0,0,0,0.7)",
                },
              }}
            >
              {/* Icon */}
              <Box
                sx={{
                  color: "#DE09F3",
                  fontSize: { xs: "3rem", md: "5rem" },
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  mb: 1,
                }}
              >
                <PersonIcon sx={{ fontSize: { xs: 50, md: 80 } }} />
              </Box>

              {/* Text */}
              <Typography
                variant="h6"
                sx={{
                  color: "#DE09F3",
                  fontSize: { xs: "1.2rem", md: "1.5rem" },
                  fontWeight: 600,
                }}
              >
                Best Quality
              </Typography>
            </Box>
          </Grid>
         

        </Grid>
      </Box>
    </>
  );
};

export default OurPerks;
