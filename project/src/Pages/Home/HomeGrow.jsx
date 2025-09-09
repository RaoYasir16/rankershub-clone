import Box from "@mui/material/Box";
import React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { GoLightBulb } from "react-icons/go";
import { SiSpeedypage } from "react-icons/si";
import { GiTargetShot } from "react-icons/gi";
import { LuHandshake } from "react-icons/lu";

const HomeGrow = () => {
  return (
    <>
      <Box
        sx={{
          minHeight: "80vh",
          backgroundColor: "#020314",
          p: 4,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      > <Box data-aos="fade"
          data-aos-delay="140"
          data-aos-duration="600" sx={{display: "flex",
          flexDirection: "column",
          alignItems: "center",}}>
        <Typography variant="body1" color="#BA10EC">
          Why Choose Us
        </Typography>
        <Typography variant="h5" color="white" sx={{ fontWeight: 700 }}>
          We Strive To Grow You With Us
        </Typography>

        <Grid container spacing={2} justifyContent={"center"}>
          <Grid size={{ xs: 12, md: 4 }} sx={{ width:'100%',maxWidth: "50rem" }}>
            <Box sx={{
                 backgroundColor: "#111220",
                 display:'flex',
                 p:2,
                 gap:1,
                 borderRadius:'.8rem',

                 mt:2
                  }}>
              <Box
                sx={{
                  color: "#BA10EC",
                  display: "flex",
                  flexShrink: 0,
                  fontSize: "2.5rem",
                }}
              >
                <GoLightBulb />
              </Box>
              <Box>
                <Typography variant="body1" color="white">
                  Manifest the Potential of AI Expertise
                </Typography>
                <Typography variant="body2" color="#c2c0c0" mt={1}>
                  Our AI-driven digital marketing expertise revolutionizes the
                  industry by leveraging data analysis, personalization, and
                  automation. It can uncover valuable customer insights, provide
                  24/7 customer support through chatbots, make accurate
                  predictions and optimize marketing strategies, enhance social
                  media management, and monitor brand sentiment, and
                  personalization. As an SEO Company in Sheridan, Wyoming, we
                  can optimize and automate various digital marketing tasks,
                  saving time and resources.
                </Typography>
              </Box>
            </Box>
          </Grid>
           <Grid size={{ xs: 12, md: 4 }} sx={{ width:'100%',maxWidth: "50rem" }}>

            <Box sx={{
                 backgroundColor: "#111220",
                 display:'flex',
                 p:2,
                 gap:1,
                 borderRadius:'.8rem',
                
                 mt:2
                  }}>
              <Box
                sx={{
                  color: "#BA10EC",
                  display: "flex",
                  flexShrink: 0,
                  fontSize: "2.5rem",
                }}
              >
                <SiSpeedypage />
              </Box>
              <Box>
                <Typography variant="body1" color="white">
                  Manifest the Potential of AI Expertise
                </Typography>
                <Typography variant="body2" color="#c2c0c0" mt={1}>
                  Our AI-driven digital marketing expertise revolutionizes the
                  industry by leveraging data analysis, personalization, and
                  automation. It can uncover valuable customer insights, provide
                  24/7 customer support through chatbots, make accurate
                  predictions and optimize marketing strategies, enhance social
                  media management, and monitor brand sentiment, and
                  personalization. As an SEO Company in Sheridan, Wyoming, we
                  can optimize and automate various digital marketing tasks,
                  saving time and resources.
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
         <Grid container spacing={2} justifyContent={"center"} mt={2}>
          <Grid size={{ xs: 12, md: 4 }} sx={{ width:'100%',maxWidth: "50rem" }}>
            <Box sx={{
                 backgroundColor: "#111220",
                 display:'flex',
                 p:2,
                 gap:1,
                 borderRadius:'.8rem',

                 mt:2
                  }}>
              <Box
                sx={{
                  color: "#BA10EC",
                  display: "flex",
                  flexShrink: 0,
                  fontSize: "2.5rem",
                }}
              >
                <LuHandshake/>
              </Box>
              <Box>
                <Typography variant="body1" color="white">
                Elevate Your Digital Marketing with Our Strategic Partnership
                </Typography>
                <Typography variant="body2" color="#c2c0c0" mt={1}>
                  Our AI-driven digital marketing expertise revolutionizes the
                  industry by leveraging data analysis, personalization, and
                  automation. It can uncover valuable customer insights, provide
                  24/7 customer support through chatbots, make accurate
                  predictions and optimize marketing strategies, enhance social
                  media management, and monitor brand sentiment, and
                  personalization. As an SEO Company in Sheridan, Wyoming, we
                  can optimize and automate various digital marketing tasks,
                  saving time and resources.
                </Typography>
              </Box>
            </Box>
          </Grid>
           <Grid size={{ xs: 12, md: 4 }} sx={{ width:'100%',maxWidth: "50rem" }}>

            <Box sx={{
                 backgroundColor: "#111220",
                 display:'flex',
                 p:2,
                 gap:1,
                 borderRadius:'.8rem',
                
                 mt:2
                  }}>
              <Box
                sx={{
                  color: "#BA10EC",
                  display: "flex",
                  flexShrink: 0,
                  fontSize: "2.5rem",
                }}
              >
                <GiTargetShot/>
              </Box>
              <Box>
                <Typography variant="body1" color="white">
                Empowering Sucess in the Digital Era
                </Typography>
                <Typography variant="body2" color="#c2c0c0" mt={1}>
                  Our AI-driven digital marketing expertise revolutionizes the
                  industry by leveraging data analysis, personalization, and
                  automation. It can uncover valuable customer insights, provide
                  24/7 customer support through chatbots, make accurate
                  predictions and optimize marketing strategies, enhance social
                  media management, and monitor brand sentiment, and
                  personalization. As an SEO Company in Sheridan, Wyoming, we
                  can optimize and automate various digital marketing tasks,
                  saving time and resources.
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
</Box>
      
      </Box>
    </>
  );
};

export default HomeGrow;
