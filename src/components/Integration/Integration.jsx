import React from "react";
import { Box, Typography, Button, Grid, useTheme } from "@mui/material";
import A1 from "../../assets/a1.png";
import A2 from "../../assets/a2.png";
import A3 from "../../assets/a3.png";
import A4 from "../../assets/a4.png";
import A5 from "../../assets/a5.png";
import A6 from "../../assets/a6.png";
import A7 from "../../assets/a7.png";
import A8 from "../../assets/a8.png";
import A9 from "../../assets/a9.png";
import A10 from "../../assets/a10.png";
import A11 from "../../assets/a11.png";
import A12 from "../../assets/12.png";

const Integration = () => {
  return (
    <>
      <Box
        sx={{
          minHeight: "50vh",
          bgcolor: "#020314",
          position: "relative",
          p: 4,
          display: "flex",
          flexDirection: "column",
          textAlign: "space-between",
          alignItems: "center",
        }}
      >
        <Grid container spacing={2}>
          <Grid
            size={{ xs: 12, md: 3 }}
            sx={{ height: { xs: "10rem", md: 0 } }}
          >
            {/* left images */}
            <Box>
              <Box
                component="img"
                src={A1}
                sx={{
                  Width: { xs: "1.4rem", md: "1.5rem" },
                  height: { xs: "1.4rem", md: "1.5rem" },
                  position: "absolute",
                  top: { xs: "1%", md: "31%" },
                  left: { xs: "33%", md: "20%" },
                }}
              />

              <Box
                component="img"
                src={A2}
                sx={{
                  Width: { xs: "1.4rem", md: "1.5rem" },
                  height: { xs: "1.4rem", md: "3rem" },
                  position: "absolute",
                  top: { xs: "15%", md: "31%" },
                  left: { xs: "17%", md: "28%" },
                }}
              />

              <Box
                component="img"
                src={A3}
                sx={{
                  Width: { xs: "1.4rem", md: "2rem" },
                  height: { xs: "1.4rem", md: "1.5rem" },
                  position: "absolute",
                  top: { xs: "30%", md: "55%" },
                  left: { xs: "22%", md: "16%" },
                }}
              />

              <Box
                component="img"
                src={A4}
                sx={{
                  Width: { xs: "1.4rem", md: "1.5rem" },
                  height: { xs: "1.4rem", md: "2rem" },
                  position: "absolute",
                  top: { xs: "1%", md: "55%" },
                  left: { xs: "65%", md: "24%" },
                }}
              />

              <Box
                component="img"
                src={A5}
                sx={{
                  Width: { xs: "1.4rem", md: "1.5rem" },
                  height: { xs: "1.4rem", md: "2rem" },
                  position: "absolute",
                  top: { xs: "15%", md: "78%" },
                  left: { xs: "35%", md: "17%" },
                }}
              />

              <Box
                component="img"
                src={A6}
                sx={{
                  Width: { xs: "1.4rem", md: "1.5rem" },
                  height: { xs: "1.4rem", md: "2rem" },
                  position: "absolute",
                  top: { xs: "30%", md: "78%" },
                  left: { xs: "63%", md: "27%" },
                }}
              />
            </Box>
          </Grid>

          {/* Text and button */}

          <Grid size={{ xs: 12, md: 3 }}>
            <Box 
            display="flex"
            flexDirection='column'
             justifyContent="center"
              alignItems="center"
              textAlign='center'
              >
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                mb: 6,
                mt: { xs: 5, md: 14 },
              }}
            >
              <Typography
                sx={{
                  fontSize: { xs: "3rem", md: "3rem" },
                  fontWeight: "bold",
                  color: "transparent",
                  WebkitTextStroke: "1px #DE09F3",
                  opacity: 0.3,
                  position: "absolute",
                }}
              >
                Integration
              </Typography>
              <Typography color="#DE09F3" fontWeight={600}>
                Integration
              </Typography>
            </Box>
            <Box sx={{ mt: { xs: 3, md: 1 } }}>
              <Typography
                variant="h5"
                color="white"
                sx={{ fontWeight: "600", width: "20rem" }}
              >
                We collaborate with the top software companies.
              </Typography>
              <Button
                sx={{
                  mt: { xs: 4, md: 4 },
                  background:
                    "linear-gradient(90deg, #701DCC 0%, #D40BF7 100%)",
                  "&:hover": {
                    background:
                      "linear-gradient(90deg, #6018b8 0%, #b309d3 100%)",
                  },
                  color:"white",padding:"10px 30px"
                }}
              >
                View All Services
              </Button>
            </Box>
            </Box>
          </Grid>
          <Grid size={{xs:12,md:3}}>
            {/* Right images */}
          <Box>
              <Box
                component="img"
                src={A7}
                sx={{
                  Width: { xs: "1.4rem", md: "1.5rem" },
                  height: { xs: "1.4rem", md: "1.5rem" },
                  position: "absolute",
                  top: { xs: "1%", md: "31%" },
                  right: { xs: "33%", md: "24%" },
                }}
              />

              <Box
                component="img"
                src={A8}
                sx={{
                  Width: { xs: "1.4rem", md: "1.5rem" },
                  height: { xs: "1.4rem", md: "1.5rem" },
                  position: "absolute",
                  top: { xs: "15%", md: "31%" },
                  right: { xs: "17%", md: "32%" },
                }}
              />

              <Box
                component="img"
                src={A9}
                sx={{
                  Width: { xs: "1.4rem", md: "2rem" },
                  height: { xs: "1.4rem", md: "1.5rem" },
                  position: "absolute",
                  top: { xs: "30%", md: "55%" },
                  right: { xs: "22%", md: "20%" },
                }}
              />

              <Box
                component="img"
                src={A10}
                sx={{
                  Width: { xs: "1.4rem", md: "1.5rem" },
                  height: { xs: "1.4rem", md: "2rem" },
                  position: "absolute",
                  top: { xs: "1%", md: "55%" },
                  right: { xs: "65%", md: "28%" },
                }}
              />

              <Box
                component="img"
                src={A3}
                sx={{
                  Width: { xs: "1.4rem", md: "1.5rem" },
                  height: { xs: "1.4rem", md: "4rem" },
                  position: "absolute",
                  top: { xs: "15%", md: "78%" },
                  right: { xs: "35%", md: "20%" },
                }}
              />

              <Box
                component="img"
                src={A12}
                sx={{
                  Width: { xs: "1.4rem", md: "1.5rem" },
                  height: { xs: "1.4rem", md: "2rem" },
                  position: "absolute",
                  top: { xs: "30%", md: "78%" },
                  right: { xs: "63%", md: "32%" },
                }}
              />
            </Box>

          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Integration;
