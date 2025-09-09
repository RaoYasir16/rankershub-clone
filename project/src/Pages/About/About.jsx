import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { IoEyeSharp } from "react-icons/io5";
import { GiCrystalGrowth } from "react-icons/gi";

const About = () => {
  return (
    <>
      <Box
        sx={{
          minHeight: "180vh",
          backgroundColor: "#020314",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          p: 4,
          py:{xs:15,md:15  }
        }}
      >
        <Typography
        data-aos="fade"
          data-aos-delay="140"
          data-aos-duration="600"
       
          variant="h5"
          color="white"
          sx={{
            fontSize: { xs: "1.8rem", md: "2rem" },
            fontWeight: "600",
            maxWidth: "45rem",
            textAlign: "center",
            mb: 3,
          }}
        >
          <span style={{ color: "#DE09F3" }}>Results-Driven </span>Digital
          Marketing Services in Sheridan for Enhanced Online Presence
        </Typography>

        <Grid  data-aos="fade-up" container spacing={2} justifyContent={"center"}>
          <Grid size={{ xs: 12, md: 4 }}>
            <Typography variant="body1" color="#aba7a7ff">
              Welcome to Rankershub AI, the leading AI-powered digital marketing
              agency serving businesses in Sheridan and beyond. Our agency was
              founded with a clear vision and a passion for leveraging
              artificial intelligence to revolutionize the marketing landscape.
            </Typography>
            <Typography variant="body1" color="#aba7a7ff" mt={1}>
              Rankershub AI was born out of collective expertise and
              entrepreneurial spirit. As seasoned marketing professionals, we
              recognized the transformative potential of AI in delivering highly
              targeted and impactful campaigns.
            </Typography>

            <Typography variant="body1" color="#aba7a7ff">
              Our AI algorithms analyze vast amounts of data to identify the
              most effective channels, keywords, and messaging that resonate
              with your target audience.
            </Typography>
            <Typography variant="body1" color="#aba7a7ff">
              As a locally rooted AI digital marketing agency in Sheridan, we
              take pride in serving businesses. We understand local businesses'
              unique challenges and opportunities and can help you navigate the
              local market effectively.
            </Typography>
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}>
            <Box
              sx={{
                backgroundColor: "#111220",
                display: "flex",
                p: 2,
                gap: 1,
                borderRadius: ".8rem",
              }}
            >
              <Box
                sx={{
                  color: "#BA10EC",
                  display: "flex",
                  flexShrink: 0,
                  fontSize: "2.5rem",
                }}
              >
                <IoEyeSharp />
              </Box>
              <Box>
                <Typography variant="body1" color="white">
                  Vision
                </Typography>
                <Typography variant="body2" color="#c2c0c0" mt={1}>
                  Our vision is to be at the forefront of the AI-driven digital
                  marketing revolution in Sheridan, transforming local
                  businesses by harnessing the power of artificial intelligence.
                  Moreover, it empowers local businesses to thrive digitally,
                  leveraging the latest AI technologies to create personalized
                  and impactful marketing experiences.
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                backgroundColor: "#111220",
                display: "flex",
                p: 2,
                gap: 1,
                borderRadius: ".8rem",
                mt: 2,
              }}
            >
              <Box
                sx={{
                  color: "#BA10EC",
                  display: "flex",
                  flexShrink: 0,
                  fontSize: "2.5rem",
                }}
              >
                <GiCrystalGrowth />
              </Box>
              <Box>
                <Typography variant="body1" color="white">
                  Mission
                </Typography>
                <Typography variant="body2" color="#c2c0c0" mt={1}>
                  Our mission is to empower businesses with AI-Powered marketing
                  services that propel their growth and success. We aim to
                  empower businesses with innovative AI-driven solutions that
                  deliver exceptional results. We leverage cutting-edge
                  artificial intelligence technologies to provide data-driven
                  insights, personalized experiences, and optimized campaigns.
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>

        <Box data-aos="fade"
          data-aos-delay="140"
          data-aos-duration="600"
          sx={{
            background: "linear-gradient( to right, #181822, #010102)",
        
            maxWidth: "69rem",
            borderRadius: "1rem",
            mt: 5,
            p: {xs:1, md:4},
            
          }}
        >
          <Typography variant="h6" color="#BA10EC" sx={{ fontWeight: "600" ,textAlign:'center'}}>
            The CEO's Perspective
          </Typography>
          <Typography
            variant="body1"
            color="white"
            sx={{
              borderLeft: "2px solid #BA10EC",
              borderRadius: "1rem",
              p: 2,
              mt: 3,
            }}
          >
            “With a deep understanding of the challenges businesses face in the
            digital age, we created a solution that would empower organizations
            to thrive in the ever-evolving digital ecosystem. With our
            comprehensive suite of Digital marketing services in Sheridan, we
            offer end-to-end digital marketing solutions that cover all aspects
            of your online presence. Whether you need assistance with search
            engine optimization (SEO), pay-per-click (PPC) advertising, content
            creation, social media marketing, or web optimization, we have you
            covered. “
          </Typography>
        </Box>

        <Box  data-aos="fade-up"  sx={{mt:8}} >
          <Typography data-aos="fade-up"  variant="h6" color="#BA10EC" sx={{textAlign:'center' ,fontWeight:'600'}}>
            Salient Features
          </Typography>

          <Box   sx={{display:'flex', alignItems:'center',mt:4 }}>
            <Box 
              sx={{
                p:1,
                width: {xs:'12rem' , md:'5rem'},
                background: "linear-gradient( to right, #CD0CF4, #6B1ECA)",
                display:'flex',
                justifyContent:'center',
                borderRadius:'.3rem'
              }}
            >
              <Typography variant="h2" color="black">
                1
              </Typography>
            </Box>
            <Box
            sx={{
                maxHeight: "5rem",
                background: "linear-gradient( to right, #5E20C3, #280F5D)",
                display:'flex',
                justifyContent:'center',
                alignItems:'center',
                p:{xs:1, md:4},
                px:{xs:1,md:8},
                borderRadius:'.3rem',
                overflowY:'hidden'
              }}>
              <Typography variant="body1" color="#bab4b4ff">
                Our Digital Marketing utilizes AI algorithms for marketing
                strategies based on actionable insights derived from customer
                data.
              </Typography>
            </Box>
            
          </Box>
             <Box   sx={{display:'flex', alignItems:'center',mt:3}}>
            
            <Box
            sx={{
                maxHeight: "5rem",
                background: "linear-gradient( to right, #5E20C3, #280F5D)",
                display:'flex',
                justifyContent:'center',
                alignItems:'center',
                p:{xs:1, md:4},
                px:{xs:1,md:8},
                borderRadius:'.3rem',
                overflowY:'hidden'
              }}>
              <Typography variant="body1" color="#bab4b4ff">
                Our Digital Marketing utilizes AI algorithms for marketing
                strategies based on actionable insights derived from customer
                data.
              </Typography>
            </Box>
            <Box
              sx={{
                p:1,
                width: {xs:'12rem' , md:'5rem'},
                background: "linear-gradient( to right, #CD0CF4, #6B1ECA)",
                display:'flex',
                justifyContent:'center',
                borderRadius:'.3rem'
              }}
            >
              <Typography variant="h2" color="black">
                2
              </Typography>
            </Box>
            
          </Box>
            <Box   sx={{display:'flex', alignItems:'center',mt:4 }}>
            <Box
              sx={{
                p:1,
                width: {xs:'12rem' , md:'5rem'},
                background: "linear-gradient( to right, #CD0CF4, #6B1ECA)",
                display:'flex',
                justifyContent:'center',
                borderRadius:'.3rem'
              }}
            >
              <Typography variant="h2" color="black">
                3
              </Typography>
            </Box>
            <Box
            sx={{
                maxHeight: "5rem",
                background: "linear-gradient( to right, #5E20C3, #280F5D)",
                display:'flex',
                justifyContent:'center',
                alignItems:'center',
                p:{xs:1, md:4},
                px:{xs:1,md:8},
                borderRadius:'.3rem',
                overflowY:'hidden'
              }}>
              <Typography variant="body1" color="#bab4b4ff">
                Our Digital Marketing utilizes AI algorithms for marketing
                strategies based on actionable insights derived from customer
                data.
              </Typography>
            </Box>
            
          </Box>
             <Box   sx={{display:'flex', alignItems:'center',mt:3}}>
            
            <Box
            sx={{
                maxHeight: "5rem",
                background: "linear-gradient( to right, #5E20C3, #280F5D)",
                display:'flex',
                justifyContent:'center',
                alignItems:'center',
                p:{xs:1, md:4},
                px:{xs:1,md:8},
                borderRadius:'.3rem',
                overflowY:'hidden'
              }}>
              <Typography variant="body1" color="#bab4b4ff">
                Our Digital Marketing utilizes AI algorithms for marketing
                strategies based on actionable insights derived from customer
                data.
              </Typography>
            </Box>
            <Box
              sx={{
                p:1,
                width: {xs:'12rem' , md:'5rem'},
                background: "linear-gradient( to right, #CD0CF4, #6B1ECA)",
                display:'flex',
                justifyContent:'center',
                borderRadius:'.3rem'
              }}
            >
              <Typography variant="h2" color="black">
                4
              </Typography>
            </Box>
            
          </Box>
          
        </Box>
      </Box>
    </>
  );
};

export default About;
