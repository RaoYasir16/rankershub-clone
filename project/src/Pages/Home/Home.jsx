import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import React from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import video from "../../Imgs/homevideo.mp4";
import HomePerks from "./HomePerks";
import HomeServices from "./HomeServices";
import HomeProjects from "./HomeProjects";
import HomeIntegration from "./HomeIntegration";
import HomeGrow from "./HomeGrow";
import HomeContact from "./HomeContact";

const Homeee = () => {
  return (
    <>
      <Box
        sx={{
          minHeight: "100vh",
          minWidth: "100vw",
          backgroundColor: "#020314",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: { xs: "7rem 1.2rem", sm: "7rem 1.2rem", md: '7rem 5rem', lg:0 },
        }}
      >
        <Grid 
        data-aos="fade"
          data-aos-delay="140"
          data-aos-duration="600" 
          container
          spacing={3}
          justifyContent="center"
          alignItems="center"
        >
          <Grid  size={{ xs: 12,sm:5 ,md: 6 ,lg:4 }}>
            <Typography 
              variant="h4"
              color="white"
              sx={{
                fontWeight: { xs: 500, md: 700 },
                fontSize: { xs: "1.8rem", sm: "1.6rem", md: "2rem", lg: "2.3rem" },
              }}
            >
              <span style={{ color: "#DE09FB" }}>Boost</span> Your Business with
              Strategic Digital Marketing Services in Sheridan!
            </Typography>

            <Typography
              variant="body1"
              color="white"
              sx={{
                marginTop: { xs: 2, md: 4 },
                fontSize: { xs: "0.9rem", lg: "1.1rem" },
                lineHeight: { xs: 1.5, md: 1.7 },
              }}
            >
              Step into a digital revolution where your brand’s story comes to
              life through strategic and impactful marketing.
            </Typography>

            <Typography
              variant="body1"
              color="white"
              sx={{
                marginTop: { xs: 2, md: 4 },
                fontSize: { xs: "0.9rem",  lg: "1.1rem" },
                lineHeight: { xs: 1.5, md: 1.7 },
              }}
            >
              At our digital marketing agency. We harness the potential of
              artificial intelligence to create targeted campaigns, optimize
              performance, and drive exceptional results for your business in
              the ever-changing digital landscape.
            </Typography>

            <Button
              variant="contained"
              sx={{
                background: "linear-gradient(90deg, #BA10EC,#8119D3)",
                borderRadius: "50px",
                marginTop: { xs: 5, md: 5 },
                fontSize: { xs: "0.75rem", md: "0.85rem", },
                fontWeight:{xs:400 , md:600},
                padding: { xs: "0.5rem 1.2rem", md:'.6rem 1.1rem' },
              }}
            >
              Inititate Ranking Process
            </Button>
          </Grid>

          <Grid size={{ xs: 12,sm:5, md: 6, lg:4 }}>
            <Box
              sx={{
                width: "100%",
                maxWidth: { xs: "100%", lg: 500 },
                margin: "0 auto",
                borderRadius: 2,
                overflow: "hidden",
                boxShadow: "10px 10px 5px #171717",
                marginTop: { xs: 6, md: 0 },
              }}
            >
              <video
                src={video}
                autoPlay
                muted
                loop
                style={{
                  width: "100%",
                  height: "auto",
                  display: "block",
                }}
              />
            </Box>
          </Grid>
        </Grid>
      </Box>
      <HomePerks/>
      <HomeServices/>
      <HomeProjects/>
      <HomeIntegration/>
      <HomeGrow/>
      <HomeContact/>
    </>
  );
};

export default Homeee;
