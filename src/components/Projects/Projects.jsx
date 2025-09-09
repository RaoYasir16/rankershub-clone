import React, { useState } from "react";
import { Box, Button, Stack, Typography, Grid } from "@mui/material";
import Project1 from "../../assets/project-1.jpg";
import Project2 from "../../assets/project-2.png";
import Project3 from "../../assets/project-3.png";

const Projects = () => {
  const [hovered, setHovered] = useState(null);

  return (
    <>
    <Box sx={{ width: "90%", display:"flex", mx: "auto",flexDirection:"column",justifyContent:"center",alignItems:"center" }}>
      {/* Heading */}
      <Box sx={{  mb: "30px" }}>
        <Typography variant="h6" sx={{ color: "#de09fb", fontWeight: 400 }}>
          Our Projects
        </Typography>
        <Typography variant="h4" sx={{ color: "#fff", mb: 2, fontWeight: 600 }}>
          Improve & Enhance the Digital Projects.
        </Typography>
        <Typography variant="body1" sx={{ color: "white", fontWeight: 400 }}>
          As an SEO company in Sheridan, Wyoming, Our aim is to help businesses
          maximize their online presence, engage their target audience, drive
          conversions, and achieve marketing objectives through effective,
          data-driven strategies. Here are some of our projects that we have
          crafted.
        </Typography>
      </Box>

      {/* Cards */}
      <Grid container spacing={3}>
        {/* Card 1 */}
        <Grid item xs={12} sm={6} md={4}>
          <Box
            sx={{
              width: 350,
              height: 300,
              position: "relative",
              overflow: "hidden",
              borderRadius: 2,
              boxShadow: 3,
              cursor: "pointer",
            }}
            onMouseEnter={() => setHovered("card1")}
            onMouseLeave={() => setHovered(null)}
          >
            <Box
              component="img"
              src={Project1}
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                transition: "transform 0.3s ease",
                transform: hovered === "card1" ? "scale(1.05)" : "scale(1)",
              }}
            />
            <Box
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                bgcolor:
                  hovered === "card1" ? "rgba(0, 0, 0, 0.5)" : "transparent",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                opacity: hovered === "card1" ? 1 : 0,
                transition: "opacity 0.3s ease",
              }}
            >
              <Stack direction="column" spacing={2}>
                <Button
                  variant="contained"
                  sx={{
                    color: "#ce09ea",
                    background: "white",
                    borderRadius: 2,
                  }}
                >
                  Tennis Coach
                </Button>
                <Button
                  variant="contained"
                  color="secondary"
                  sx={{ borderRadius: 3 }}
                >
                  See Preview
                </Button>
              </Stack>
            </Box>
          </Box>
        </Grid>

        {/* Card 2 */}
        <Grid item xs={12} sm={6} md={4}>
          <Box
            sx={{
              width: 350,
              height: 300,
              position: "relative",
              overflow: "hidden",
              borderRadius: 2,
              boxShadow: 3,
              cursor: "pointer",
            }}
            onMouseEnter={() => setHovered("card2")}
            onMouseLeave={() => setHovered(null)}
          >
            <Box
              component="img"
              src={Project2}
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                transition: "transform 0.3s ease",
                transform: hovered === "card2" ? "scale(1.05)" : "scale(1)",
              }}
            />
            <Box
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                bgcolor:
                  hovered === "card2" ? "rgba(0, 0, 0, 0.5)" : "transparent",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                opacity: hovered === "card2" ? 1 : 0,
                transition: "opacity 0.3s ease",
              }}
            >
              <Stack direction="column" spacing={2}>
                <Button
                  variant="contained"
                  sx={{
                    color: "#ce09ea",
                    background: "white",
                    borderRadius: 2,
                  }}
                >
                  Painting Services
                </Button>
                <Button
                  variant="contained"
                  color="secondary"
                  sx={{ borderRadius: 3 }}
                >
                  See Preview
                </Button>
              </Stack>
            </Box>
          </Box>
        </Grid>

        {/* Card 3 */}
        <Grid item xs={12} sm={6} md={4}>
          <Box
            sx={{
              width: 350,
              height: 300,
              position: "relative",
              overflow: "hidden",
              borderRadius: 2,
              boxShadow: 3,
              cursor: "pointer",
            }}
            onMouseEnter={() => setHovered("card3")}
            onMouseLeave={() => setHovered(null)}
          >
            <Box
              component="img"
              src={Project3}
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                transition: "transform 0.3s ease",
                transform: hovered === "card3" ? "scale(1.05)" : "scale(1)",
              }}
            />
            <Box
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                bgcolor:
                  hovered === "card1" ? "rgba(0, 0, 0, 0.5)" : "transparent",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                opacity: hovered === "card3" ? 1 : 0,
                transition: "opacity 0.3s ease",
              }}
            >
              <Stack direction="column" spacing={2}>
                <Button
                  variant="contained"
                  sx={{
                    color: "#ce09ea",
                    background: "white",
                    borderRadius: 2,
                  }}
                >
                  Driving School
                </Button>
                <Button
                  variant="contained"
                  color="secondary"
                  sx={{ borderRadius: 3 }}
                >
                  See Preview
                </Button>
              </Stack>
            </Box>
          </Box>
        </Grid>

        {/* Card 4 */}
        <Grid item xs={12} sm={6} md={4}>
          <Box
            sx={{
              width: 350,
              height: 300,
              position: "relative",
              overflow: "hidden",
              borderRadius: 2,
              boxShadow: 3,
              cursor: "pointer",
            }}
            onMouseEnter={() => setHovered("card4")}
            onMouseLeave={() => setHovered(null)}
          >
            <Box
              component="img"
              src={Project3}
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                transition: "transform 0.3s ease",
                transform: hovered === "card4" ? "scale(1.05)" : "scale(1)",
              }}
            />
            <Box
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                bgcolor:
                  hovered === "card4" ? "rgba(0, 0, 0, 0.5)" : "transparent",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                opacity: hovered === "card4" ? 1 : 0,
                transition: "opacity 0.3s ease",
              }}
            >
              <Stack direction="column" spacing={2}>
                <Button
                  variant="contained"
                  sx={{
                    color: "#ce09ea",
                    background: "white",
                    borderRadius: 2,
                  }}
                >
                  Barbar Shop
                </Button>
                <Button
                  variant="contained"
                  color="secondary"
                  sx={{ borderRadius: 3 }}
                >
                  See Preview
                </Button>
              </Stack>
            </Box>
          </Box>
        </Grid>

      </Grid>
    </Box>
    </>
  );
};

export default Projects;
