import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Grid, Typography, Box } from "@mui/material";
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';
import EnergySavingsLeafIcon from '@mui/icons-material/EnergySavingsLeaf';
import HandshakeIcon from '@mui/icons-material/Handshake';
import TrackChangesIcon from '@mui/icons-material/TrackChanges';

const WhyChoose = () => {
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
          p: 4,
          backgroundImage:
            "radial-gradient(circle at center, #DE09F3, transparent 40%)",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            // mb: 6,
          }}
        >
          <Typography color="#DE09F3" fontWeight={600}>
            Why Choose Us
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            mb: 6,
          }}
        >
          <Typography
            color="white"
            fontFamily="acumin-pro"
            fontWeight={600}
            fontSize="32px"
          >
            We Strive To Grow You With Us
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
            size={{ xs: 12, md: 5 }}
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
                <TipsAndUpdatesIcon />
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
                  Manifest the Potential of AI Expertise
                </Typography>
                <Typography
                  variant="p"
                  fontSize="14px"
                  fontFamily="Catamaran, sans-serif"
                  lineHeight="1.25rem"
                  color="#C5C5C5"
                >
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

          <Grid
            size={{ xs: 12, md: 5 }}
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
                <EnergySavingsLeafIcon />
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
                  Unleash the Potential of AI-Powered Marketing Services
                </Typography>
                <Typography
                  variant="p"
                  fontSize="14px"
                  fontFamily="Catamaran, sans-serif"
                  lineHeight="1.25rem"
                  color="#C5C5C5"
                >
                  Ignite the full potential of digital marketing agency and
                  propel them to unprecedented heights. Embrace cutting-edge
                  technologies, data-driven insights, and innovative strategies
                  to create impactful campaigns that captivate audiences.
                  Leverage AI and automation to streamline processes, enhance
                  targeting, and drive conversions. Stay agile, adapt to
                  emerging trends, and harness the power of creativity to set
                  your agency apart.
                </Typography>
              </Box>
            </Box>
          </Grid>

          {/* 2nd line */}

          <Grid
            size={{ xs: 12, md: 5 }}
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
                <HandshakeIcon />
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
                  Elevate Your Digital Marketing with Our Strategic Partnership
                </Typography>
                <Typography
                  variant="p"
                  fontSize="14px"
                  fontFamily="Catamaran, sans-serif"
                  lineHeight="1.25rem"
                  color="#C5C5C5"
                >
                  Elevate your AI-driven digital marketing strategies by
                  partnering with us. As a strategic partner, we bring a deep
                  understanding of AI technologies and their application in
                  marketing. With our expertise, we'll help you harness the
                  power of AI to optimize campaigns, personalize experiences,
                  and drive impactful results.
                </Typography>
              </Box>
            </Box>
          </Grid>

          <Grid
            size={{ xs: 12, md: 5 }}
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
                <TrackChangesIcon/>
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
                  Empowering Success in the Digital Era
                </Typography>
                <Typography
                  variant="p"
                  fontSize="14px"
                  fontFamily="Catamaran, sans-serif"
                  lineHeight="1.25rem"
                  color="#C5C5C5"
                >
                  We are dedicated to surpassing client expectations and
                  delivering exceptional results. Through our expertise in AI
                  technologies, Our commitment is rooted in a deep understanding
                  of marketing goals and target audiences, enabling us to
                  achieve outstanding outcomes that propel their success in the
                  dynamic world of digital marketing.
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default WhyChoose;
