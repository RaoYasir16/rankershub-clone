import Box from "@mui/material/Box";
import React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import w1 from "../../Imgs/w1.jpeg";
import w2 from "../../Imgs/w2.jpg";
import w3 from "../../Imgs/w3.jpg";

const HomeProjects = () => {
  return (
    <>
      <Box 
        sx={{
          minHeight: "100vh",
          backgroundColor: "#020314",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          p: 4,
        }}
      >
        <Box data-aos="fade"
          data-aos-delay="140"
          data-aos-duration="600"
          sx={{
            width: "65rem",
            maxWidth: "100%",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography variant="body1" color="#DE09F3" sx={{ fontWeight: 600 }}>
            Our Projects
          </Typography>
          <Typography
            variant="h5"
            color="white"
            sx={{ fontWeight: "600", mt: 2 }}
          >
            Improve & Enhance the Digital Projects.
          </Typography>
          <Typography variant="body2" color="white" sx={{ mt: 1 }}>
            As an SEO company in Sheridan, Wyoming, Our aim is to help
            businesses maximize their online presence, engage their target
            audience, drive conversions, and achieve marketing objectives
            through effective, data-driven strategies. Here are some of our
            projects that we have crafted.
          </Typography>
        </Box>

        <Grid data-aos="fade"
          data-aos-delay="140"
          data-aos-duration="600" container spacing={3} mt={3} justifyContent={"center"}>
          <Grid size="auto">
            <Box
              sx={{
                height: "20rem",
                width: "21rem",
                backgroundColor: "pink",
                borderRadius: ".8rem",
                overflow: "hidden",
              }}
            >
              <Box
                component="img"
                src={w1}
                alt="example"
                sx={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </Box>
          </Grid>
          <Grid size="auto">
            <Box
              sx={{
                height: "20rem",
                width: "21rem",
                backgroundColor: "pink",
                borderRadius: ".8rem",
                overflow: "hidden",
              }}
            >
              <Box
                component="img"
                src={w2}
                alt="example"
                sx={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </Box>
          </Grid>
          <Grid size="auto">
            <Box
              sx={{
                height: "20rem",
                width: "21rem",
                backgroundColor: "pink",
                borderRadius: ".8rem",
                overflow: "hidden",
              }}
            >
              <Box
                component="img"
                src={w3}
                alt="example"
                sx={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </Box>
          </Grid>
        </Grid>
        <Grid data-aos="fade"
          data-aos-delay="140"
          data-aos-duration="600" container spacing={3} mt={3} justifyContent={"center"}>
          <Grid size="auto" sx={{ width: "21rem",}}>
            <Box
              sx={{
                
                height: "20rem",
                backgroundColor: "pink",
                borderRadius: ".8rem",
                overflow: "hidden",
              }}
            >
              <Box
                component="img"
                src={w3}
                alt="example"
                sx={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </Box>
          </Grid>
          <Grid size="auto">
            <Box
              sx={{
                height: "20rem",
                width: "21rem",
                backgroundColor: "pink",
                borderRadius: ".8rem",
                overflow: "hidden",
              }}
            >
              <Box
                component="img"
                src={w1}
                alt="example"
                sx={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </Box>
          </Grid>
          <Grid size="auto">
            <Box
              sx={{
                height: "20rem",
                width: "21rem",
                backgroundColor: "pink",
                borderRadius: ".8rem",
                overflow: "hidden",
              }}
            >
              <Box
                component="img"
                src={w2}
                alt="example"
                sx={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </Box>
          </Grid>
        </Grid>
        <Grid data-aos="fade"
          data-aos-delay="140"
          data-aos-duration="600" container spacing={3} mt={3} justifyContent={"center"}>
          <Grid size="auto">
            <Box
              sx={{
                height: "20rem",
                width: "21rem",
                backgroundColor: "pink",
                borderRadius: ".8rem",
                overflow: "hidden",
              }}
            >
              <Box
                component="img"
                src={w2}
                alt="example"
                sx={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </Box>
          </Grid>
          <Grid size="auto">
            <Box
              sx={{
                height: "20rem",
                width: "21rem",
                backgroundColor: "pink",
                borderRadius: ".8rem",
                overflow: "hidden",
              }}
            >
              <Box
                component="img"
                src={w3}
                alt="example"
                sx={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </Box>
          </Grid>
          <Grid size="auto">
            <Box
              sx={{
                height: "20rem",
                width: "21rem",
                backgroundColor: "pink",
                borderRadius: ".8rem",
                overflow: "hidden",
              }}
            >
              <Box
                component="img"
                src={w1}
                alt="example"
                sx={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default HomeProjects;
