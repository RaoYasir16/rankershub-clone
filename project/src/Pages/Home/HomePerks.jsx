import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { IoStatsChartOutline } from "react-icons/io5";
import { MdOutlineDesignServices } from "react-icons/md";
import { GiCrystalGrowth } from "react-icons/gi";

import { SiTicktick } from "react-icons/si";

const HomePerks = () => {
  return (
    <>
      <Box
        sx={{
          minHeight: "140vh",
          backgroundColor: "#020314",
          position: "relative",
          mt:'0.1px',
        }}
      >
        <Box 
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            // marginTop: 5,
            
          }}
        >
          <Typography
            variant="body1"
            sx={{
              fontSize: {xs:'3rem' , md:'3rem'},
              fontWeight: "bold",
              color: "transparent",
              WebkitTextStroke: "1px #DE09F3",
              opacity: "0.3",
              position: "absolute",
            }}
          >
            OUR PERKS
          </Typography>
          <Typography variant="body1" color="#DE09F3">
            OUR PERKS
          </Typography>
        </Box>

        <Grid
        data-aos="fade-up"
          container
          spacing={4}
          justifyContent={"center"}
          mt={{ xs: 6, md: 8 }}
        >
          <Grid size="auto">
            <Box
              sx={{
                background: "linear-gradient(to right, #020202, #1B1B1B)",
                width: "15rem",
                height: "11rem",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "1rem",
              }}
            >
              <Box
                sx={{
                  color: "#DE09F3",
                  fontSize: { xs: "3rem", md: "3.5rem" },
                }}
              >
                <SiTicktick />
              </Box>
              <Typography
                variant="body1"
                color="#DE09F3"
                sx={{
                  fontWeight: "500",
                  fontSize: { xs: "1.1rem", md: "1.2rem" },
                }}
              >
                Best Quality
              </Typography>
            </Box>
          </Grid>
          <Grid size="auto">
            <Box
              sx={{
                background: "linear-gradient(to right, #020202, #1B1B1B)",
                width: "15rem",
                height: "11rem",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "1rem",
              }}
            >
              <Box
                sx={{
                  color: "#DE09F3",
                  fontSize: { xs: "3rem", md: "3.5rem" },
                }}
              >
                <IoStatsChartOutline />
              </Box>
              <Typography
                variant="body1"
                color="#DE09F3"
                sx={{
                  fontWeight: "500",
                  fontSize: { xs: "1.1rem", md: "1.2rem" },
                }}
              >
                Innovative Solutions
              </Typography>
            </Box>
          </Grid>
          <Grid size="auto">
            <Box
              sx={{
                background: "linear-gradient(to right, #020202, #1B1B1B)",
                width: "15rem",
                height: "11rem",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "1rem",
              }}
            >
              <Box
                sx={{
                  color: "#DE09F3",
                  fontSize: { xs: "3rem", md: "3.5rem" },
                }}
              >
                <MdOutlineDesignServices />
              </Box>
              <Typography
                variant="body1"
                color="#DE09F3"
                sx={{
                  fontWeight: "500",
                  fontSize: { xs: "1.1rem", md: "1.2rem" },
                }}
              >
                Product Design
              </Typography>
            </Box>
          </Grid>
          <Grid size="auto">
            <Box
              sx={{
                background: "linear-gradient(to right, #020202, #1B1B1B)",
                width: "15rem",
                height: "11rem",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "1rem",
              }}
            >
              <Box
                sx={{
                  color: "#DE09F3",
                  fontSize: { xs: "3rem", md: "3.5rem" },
                }}
              >
                <GiCrystalGrowth />
              </Box>
              <Typography
                variant="body1"
                color="#DE09F3"
                sx={{
                  fontWeight: "500",
                  fontSize: { xs: "1.1rem", md: "1.2rem" },
                }}
              >
                Future Visions
              </Typography>
            </Box>
          </Grid>
        </Grid>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            mt: { xs: 2, md: 8 },
            paddingY:{xs:3 , md:0},
            paddingX:{xs:1 , md:0}
          }}
        >
          <Typography
            variant="h5"
            color="white"
            sx={{ fontWeight: "600", fontSize: { xs: "1.2rem", md: "1.8rem" } }}
          >
            Our <span style={{ color: "#DE09F3" }}>AI-Powered</span> Marketing
            Approach
          </Typography>
          <Box data-aos="fade-up"
            sx={{
              background: "linear-gradient(to right, #121321, #020202)",
              width: { xs: "90%", md: "60%" },
              borderRight: "2px solid #DE09F3",
              borderRadius: ".8rem",
              minHeight: "10rem",
              padding: { xs: 2, md: 2 },
              mt: { xs: 2, md: 4 },
            }}
          >
            <Typography
              variant="h6"
              color="white"
              sx={{
                fontWeight: "600",
                fontSize: { xs: "1.1rem", md: "1.3rem" },
              }}
            >
              Elevate Your Digital Marketing with AI
            </Typography>
            <Typography
              variant="body1"
              color="white"
              sx={{ mt: 1, fontSize: { xs: ".9rem", md: "1rem" } }}
            >
              Experience the game-changing potential of Artificial Intelligence
              as we unleash its power in marketing. Our AI-powered marketing
              services revolutionize your marketing efforts. From predictive
              analytics to smart targeting and automated optimizations,
              Rankershub AI empowers your campaigns with unparalleled precision,
              efficiency, and effectiveness. Unlock the future of marketing with
              AI.
            </Typography>
          </Box>
          <Box data-aos="fade-up"
            sx={{
              background: "linear-gradient(to right, #020202, #121321)",
              width: { xs: "90%", md: "60%" },
              borderLeft: "2px solid #DE09F3",
              borderRadius: ".8rem",
              minHeight: "10rem",
              padding: { xs: 1, md: 2 },
              mt: { xs: 5, md: 4 },
            }}
          >
            <Typography
              variant="h6"
              color="white"
              sx={{
                fontWeight: "600",
                fontSize: { xs: "1.1rem", md: "1.3rem" },
              }}
            >
              AI Revolutionizing Digital Marketing
            </Typography>
            <Typography
              variant="body1"
              color="white"
              sx={{ mt: 1, fontSize: { xs: ".9rem", md: "1rem" } }}
            >
              Experience the game-changing potential of Artificial Intelligence
              as we unleash its power in marketing. Our AI-powered marketing
              services revolutionize your marketing efforts. From predictive
              analytics to smart targeting and automated optimizations,
              Rankershub AI empowers your campaigns with unparalleled precision,
              efficiency, and effectiveness. Unlock the future of marketing with
              AI.
            </Typography>
          </Box>
          <Box data-aos="fade-up"
            sx={{
              background: "linear-gradient(to right, #121321, #020202)",
              width: { xs: "90%", md: "60%" },
              borderRight: "2px solid #DE09F3",
              borderRadius: ".8rem",
              minHeight: "10rem",
              padding: { xs: 1, md: 2 },
              mt: { xs: 5, md: 4 },
            }}
          >
            <Typography
              variant="h6"
              color="white"
              sx={{
                fontWeight: "600",
                fontSize: { xs: "1.1rem", md: "1.3rem" },
              }}
            >
              Artificial Intelligence-Driven Marketing Excellence
            </Typography>
            <Typography
              variant="body1"
              color="white"
              sx={{ mt: 1, fontSize: { xs: ".9rem", md: "1rem" } }}
            >
              Experience the game-changing potential of Artificial Intelligence
              as we unleash its power in marketing. Our AI-powered marketing
              services revolutionize your marketing efforts. From predictive
              analytics to smart targeting and automated optimizations,
              Rankershub AI empowers your campaigns with unparalleled precision,
              efficiency, and effectiveness. Unlock the future of marketing with
              AI.
            </Typography>
          </Box>
          <Box  data-aos="fade-up"
            sx={{
              background: "linear-gradient(to right, #020202, #121321)",
              width: { xs: "90%", md: "60%" },
              borderLeft: "2px solid #DE09F3",
              borderRadius: ".8rem",
              minHeight: "10rem",
              padding: { xs: 1, md: 2 },
              mt: { xs: 5, md: 4 },
            }}
          >
            <Typography
              variant="h6"
              color="white"
              sx={{
                fontWeight: "600",
                fontSize: { xs: "1.1rem", md: "1.3rem" },
              }}
            >
              AI-Powered Marketing Mastery
            </Typography>
            <Typography variant="body1" color="white" sx={{ mt: 1 ,fontSize: { xs: ".9rem", md: "1rem" }  }}>
              Experience the game-changing potential of Artificial Intelligence
              as we unleash its power in marketing. Our AI-powered marketing
              services revolutionize your marketing efforts. From predictive
              analytics to smart targeting and automated optimizations,
              Rankershub AI empowers your campaigns with unparalleled precision,
              efficiency, and effectiveness. Unlock the future of marketing with
              AI.
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default HomePerks;
