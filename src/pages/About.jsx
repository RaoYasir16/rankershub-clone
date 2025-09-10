import { Typography, Box, Grid, ListItem, ListItemIcon } from "@mui/material";
import React from "react";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import ScreenShareOutlinedIcon from "@mui/icons-material/ScreenShareOutlined";
const About = () => {
  return (
    <>
      {/* Results-Driven section */}
      <Box
        sx={{
          color: "white",
          py: "8",
          px: "4",
          backgroundImage:
            "radial-gradient(circle at center, #DE09F3, transparent 40%)",
        }}
      >
        <Grid
          container
          spacing={"4"}
          alignItems={"center"}
          flexDirection={"column"}
        >
          <Grid
            size={{ xs: 12, md: 6 }}
            sx={{
              alignItems: "center",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Box
              display={"flex"}
              alignItems={"center"}
              width={"60%"}
              mt={"30px"}
            >
              <Typography
                variant="h4"
                sx={{ fontWeight: "bold", mb: "2", textAlign: "center" }}
              >
                <span style={{ color: "#ff00ff" }}>Results-Driven</span>Digital
                Marketing Services in Sheridan for Enhanced Online Presence
              </Typography>
            </Box>
          </Grid>

          <Grid
            container
            spacing={2}
            alignItems="center"
            mt={"40px"}
            display={"flex"}
            justifyContent={"center"}
          >
            {/* Left side */}
            <Grid size={{ xs: 12, md: 5 }}>
              <Box>
                <Typography
                  sx={{
                    color: "#c1c1c1",
                    fontSize: "16px",
                    fontFamily: "acumin-pro, sans-serif",
                    fontWeight: "400",
                    lineHeight: "1.5rem",
                  }}
                >
                  Welcome to Rankershub AI, the leading AI-powered digital
                  marketing agency serving businesses in Sheridan and beyond.
                  Our agency was founded with a clear vision and a passion for
                  leveraging artificial intelligence to revolutionize the
                  marketing landscape.
                </Typography>
                <Typography
                  sx={{
                    mt: "10px",
                    color: "#c1c1c1",
                    fontSize: "16px",
                    fontFamily: "acumin-pro, sans-serif",
                    fontWeight: "400",
                    lineHeight: "1.5rem",
                  }}
                >
                  Welcome to Rankershub AI, the leading AI-powered digital
                  marketing agency serving businesses in Sheridan and beyond.
                  Our agency was founded with a clear vision and a passion for
                  leveraging artificial intelligence to revolutionize the
                  marketing landscape.
                </Typography>

                <Box>
                  <ListItem>
                    <ListItemIcon sx={{ minWidth: "30px" }}>
                      <CheckCircleOutlineIcon
                        sx={{ color: "#ff00ff", fontSize: "20px" }}
                      />
                    </ListItemIcon>
                    <Typography
                      sx={{ fontSize: "12px", mt: "16px", color: "#c1c1c1" }}
                    >
                      Our AI algorithms analyze vast amounts of data to identify
                      the most effective channels, keywords, and messaging that
                      resonate with your target audience.
                    </Typography>
                  </ListItem>

                  <ListItem sx={{ mt: "-18px" }}>
                    <ListItemIcon sx={{ minWidth: "30px" }}>
                      <CheckCircleOutlineIcon
                        sx={{ color: "#ff00ff", fontSize: "20px" }}
                      />
                    </ListItemIcon>
                    <Typography
                      sx={{ fontSize: "12px", mt: "16px", color: "#c1c1c1" }}
                    >
                      As a locally rooted AI digital marketing agency in
                      Sheridan, we take pride in serving businesses. We
                      understand local businesses' unique challenges and
                      opportunities and can help you navigate the local market
                      effectively.
                    </Typography>
                  </ListItem>
                </Box>
              </Box>
            </Grid>

            {/* Right side */}
            <Grid size={{ xs: 12, md: 5 }}>
              <Box>
                <Grid
                  size={{ xs: 12, md: 12 }}
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
                      // minHeight: { xs: "auto", md: "12rem" },
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
                      <RemoveRedEyeOutlinedIcon />
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: 1,
                        mb: 1,
                      }}
                    >
                      <Typography
                        variant="h6"
                        color="white"
                        fontSize="18px"
                        fontWeight={400}
                      >
                        Vision
                      </Typography>
                      <Typography
                        variant="p"
                        fontSize="12px"
                        fontFamily="Catamaran, sans-serif"
                        lineHeight="1.5rem"
                        color="#C5C5C5"
                      >
                        Our vision is to be at the forefront of the AI-driven
                        digital marketing revolution in Sheridan, transforming
                        local businesses by harnessing the power of artificial
                        intelligence. Moreover, it empowers local businesses to
                        thrive digitally, leveraging the latest AI technologies
                        to create personalized and impactful marketing
                        experiences.
                      </Typography>
                    </Box>
                  </Box>
                </Grid>

                <Grid
                  size={{ xs: 12, md: 12 }}
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
                      <ScreenShareOutlinedIcon />
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: 1,
                        mb: 1,
                      }}
                    >
                      <Typography
                        variant="h6"
                        color="white"
                        fontSize="18px"
                        fontWeight={400}
                      >
                        Mission
                      </Typography>
                      <Typography
                        variant="p"
                        fontSize="12px"
                        fontFamily="Catamaran, sans-serif"
                        lineHeight="1.5rem"
                        color="#C5C5C5"
                      >
                        Our mission is to empower businesses with AI-Powered
                        marketing services that propel their growth and success.
                        We aim to empower businesses with innovative AI-driven
                        solutions that deliver exceptional results. We leverage
                        cutting-edge artificial intelligence technologies to
                        provide data-driven insights, personalized experiences,
                        and optimized campaigns. experiences.
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Box>

      {/* The CEO's Perspective section */}

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Grid container justifyContent="center" alignItems="center">
          <Grid size={{ sx: 12, md: 10 }}>
            <Box
              sx={{
                borderRadius: "15px",
                mx: "auto",
                p: 4,
                backgroundImage:
                  "linear-gradient(220deg, #000000 0%, #6060604D 100%)",
              }}
            >
              <Typography
                sx={{
                  color: "#de09fb",
                  fontSize: "25px",
                  fontWeight: "600",
                  textAlign: "center",
                }}
              >
                The CEO's Perspective
              </Typography>
              <Box
                sx={{
                  borderRadius: "10px",
                  borderLeft: "2px solid #de09fb",
                  padding: "5px 10px",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "16px",
                    fontWeight: "400",
                    color: "white",
                    lineHeight: "1.5rem",
                  }}
                >
                  “With a deep understanding of the challenges businesses face
                  in the digital age, we created a solution that would empower
                  organizations to thrive in the ever-evolving digital
                  ecosystem. With our comprehensive suite of Digital marketing
                  services in Sheridan, we offer end-to-end digital marketing
                  solutions that cover all aspects of your online presence.
                  Whether you need assistance with search engine optimization
                  (SEO), pay-per-click (PPC) advertising, content creation,
                  social media marketing, or web optimization, we have you
                  covered. “
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>

      {/* Salient Features section */}

      <Box sx={{ backgroundColor: "#0b0014", py: 6, px: 2 }}>
        <Box>
          <Typography
            sx={{
              fontSize: "25px",
              textAlign: "center",
              color: "#de09fb",
              margin: "10px 0px",
            }}
          >
            Salient Features
          </Typography>
        </Box>
        <Grid container spacing={3} justifyContent="center" >
          
          <Grid size={{ xs: 12, md: 12}} maxWidth={"90%"}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                maxWidth:"100%",
                borderRadius: "12px",
                background: "linear-gradient(to right, #d946ef, #9333ea)",
                p: 2,
              }}
            >
              <Box
                sx={{
                  bgcolor: "#db2777",
                  color: "white",
                  fontWeight: "bold",
                  fontSize: "24px",
                  borderRadius: "8px",
                  px: 2,
                  py: 1,
                }}
              >
                1
              </Box>
              <Typography
                variant="body1"
                sx={{ textAlign: "left", flex: 1, mx: 2 }}
              >
                Our Digital Marketing utilizes AI algorithms for marketing
                strategies based on actionable insights derived from customer
                data.
              </Typography>
            </Box>
          </Grid>

          <Grid size={{ xs: 12, md: 12}} maxWidth={"90%"}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                borderRadius: "12px",
                maxWidth:"100%",
                background: "linear-gradient(to right, #d946ef, #9333ea)",
                p: 2,
              }}
            >
              <Box
                sx={{
                  bgcolor: "#db2777",
                  color: "white",
                  fontWeight: "bold",
                  fontSize: "24px",
                  borderRadius: "8px",
                  px: 2,
                  py: 1,
                }}
              >
                2
              </Box>
              <Typography
                variant="body1"
                sx={{ textAlign: "left", flex: 1, mx: 2,fontSize:"14" }}
              >
                We analyze key metrics, such as website traffic, conversions,
                and engagement rates to optimize marketing efforts for better
                results.
              </Typography>
            </Box>
          </Grid>

          <Grid size={{ xs: 12, md: 12}} maxWidth={"90%"}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                maxWidth:"100%",
                borderRadius: "12px",
                background: "linear-gradient(to right, #d946ef, #9333ea)",
                p: 2,
              }}
            >
              <Box
                sx={{
                  bgcolor: "#db2777",
                  color: "white",
                  fontWeight: "bold",
                  fontSize: "24px",
                  borderRadius: "8px",
                  px: 2,
                  py: 1,
                }}
              >
                3
              </Box>
              <Typography
                variant="body1"
                sx={{ textAlign: "left", flex: 1, mx: 2 }}
              >
                We use real-time analytics and AI-powered tools to make agile
                marketing decisions, responding quickly to changing market
                conditions.
              </Typography>
            </Box>
          </Grid>

          <Grid size={{ xs: 12, md: 12}} maxWidth={"90%"}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                maxWidth:"100%",
                borderRadius: "12px",
                background: "linear-gradient(to right, #d946ef, #9333ea)",
                p: 2,
              }}
            >
              <Box
                sx={{
                  bgcolor: "#db2777",
                  color: "white",
                  fontWeight: "bold",
                  fontSize: "24px",
                  borderRadius: "8px",
                  px: 2,
                  py: 1,
                }}
              >
                4
              </Box>
              <Typography
                variant="body1"
                sx={{ textAlign: "left", flex: 1, mx: 2 }}
              >
                Our Digital Marketing Services automate various marketing
                processes to ensure consistent and timely execution of marketing
                activities.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default About;
