import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";


const WebDesign = () => {
  return (
    <>
      <Box
        sx={{
          minHeight: "100vh",
          backgroundColor: "#020314",
          p: 4,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          paddingTop: { xs: 15, md: 20 },
          textAlign: "center",
        }}
      >
        <Typography
          data-aos="fade"
          data-aos-delay="140"
          data-aos-duration="600"
          variant="h4"
          color="#DB09F9"
          fontWeight={600}
        >
          Web Design
        </Typography>

        <Typography
          data-aos="fade"
          data-aos-delay="140"
          data-aos-duration="600"
          variant="body2"
          color="#c1c0c0ff"
          sx={{ maxWidth: "55rem", mt: 4 }}
        >
          Rankershub AI offers professional Web design services in Wyoming to
          enhance your online presence. We specialize in creating visually
          appealing and user-friendly websites that engage visitors and drive
          conversions.
        </Typography>

        <Typography
          data-aos="fade"
          data-aos-delay="140"
          data-aos-duration="600"
          variant="body2"
          color="#c1c0c0ff"
          sx={{ maxWidth: "55rem", mt: 3 }}
        >
          In today’s digital marketing landscape, effective Web design is
          crucial for businesses to establish credibility, as it determines the
          first impression of a business online. Our Web design service aligns
          with the latest industry trends, responsive design principles, and
          optimal user experience to ensure your website is both aesthetically
          pleasing and functional.
        </Typography>
        <Typography
          data-aos="fade"
          data-aos-delay="140"
          data-aos-duration="600"
          variant="body2"
          color="#c1c0c0ff"
          sx={{ maxWidth: "55rem", mt: 3 }}
        >
          We aim to create websites that reflect your brand identity, increase
          brand awareness, and ultimately achieve their marketing objectives. We
          combine creativity, functionality, and industry best practices to
          deliver exceptional websites that propel your business forward.
        </Typography>

        <Typography
          data-aos="fade"
          data-aos-delay="140"
          data-aos-duration="600"
          variant="h5"
          color="#DB09F9"
          fontWeight={600}
          mt={5}
        >
          Key <span style={{ color: "white" }}>Benefits</span>
        </Typography>
        <Typography
          data-aos="fade"
          data-aos-delay="140"
          data-aos-duration="600"
          variant="body2"
          color="#c1c0c0ff"
          sx={{ maxWidth: "55rem", mt: 3 }}
        >
          Rankershub AI’s Web design service provides clients with numerous
          benefits:
        </Typography>

        <Typography
          data-aos="fade-up"
          variant="body2"
          color="#c1c0c0ff"
          textAlign={"start"}
          sx={{
            maxWidth: "55rem",
            mt: 3,
            borderLeft: "2px solid #DB09F9",
            borderRadius: "1rem",
            p: 2,
          }}
        >
          Our Web design service helps achieve specific marketing objectives by
          capturing attention and providing a user-friendly experience.
          Moreover, reinforces brand identity, optimizes call-to-actions, and
          ensures mobile compatibility for broader reach and engagement.
          Ultimately gaining a competitive edge in their industry to attract and
          retain customers.
        </Typography>

        <Typography data-aos="fade"
            data-aos-delay="140"
            data-aos-duration="600" variant="h5" color="#DB09F9" fontWeight={600} mt={5}>
          Scope
        </Typography>

        <Typography
          data-aos="fade"
          data-aos-delay="140"
          data-aos-duration="600"
          variant="body2"
          color="#c1c0c0ff"
          sx={{ maxWidth: "55rem", mt: 3 }}
        >
          The web design service provided by RANKERS HUB AI encompasses a
          comprehensive range of aspects and components. This includes visual
          layout, user interface (UI) design, information architecture, and
          responsive design. Our Web design services employ user-centered
          design, responsive design, and visual hierarchy for effective website
          creation.
        </Typography>

        <Typography
          data-aos="fade"
          data-aos-delay="140"
          data-aos-duration="600"
          variant="body2"
          color="#c1c0c0ff"
          sx={{ maxWidth: "55rem", mt: 3 }}
        >
          Rankershub AI utilizes cutting-edge tools such as industry-standard
          graphic design software (e.g., Photoshop, Sketch), advanced
          prototyping tools, and modern coding languages (e.g., HTML, CSS,
          JavaScript). to deliver high-quality web design solutions.
        </Typography>

        <Grid
          data-aos="fade-up"
          container
          spacing={8}
          justifyContent={"center"}
          mt={6}
        >
          <Grid size={{ xs: 12, md: 4 }}>
            <Box
              sx={{
                background: "linear-gradient(175deg, #0A031C, #DB09F9)",
                p: 2,
                borderRadius: ".8rem",
              }}
            >
              <Typography variant="body1" color="#DB09F9" fontWeight={600}>
                Our Approach
              </Typography>
              <Typography
                textAlign={"start"}
                variant="body1"
                color="#b3afafff"
                mt={1}
              >
                At Rankershub AI, our approach to web design service in Wyoming
                is rooted in a combination of creativity and data-driven
                strategies to deliver visually stunning and optimized websites.
                Our expert team leverages their extensive experience to craft
                visually stunning websites that are tailored to each client’s
                unique needs. We emphasize data analysis and AI-driven insights
                to optimize user experience, conversions, and overall
                performance, ensuring measurable results and continuous
                improvement.
              </Typography>
            </Box>
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}>
            <Box
              sx={{
                background: "linear-gradient(175deg, #0A031C, #DB09F9)",
                p: 2,
                borderRadius: ".8rem",
              }}
            >
              <Typography variant="body1" color="#DB09F9" fontWeight={600}>
                Why Choose <span style={{ color: "white" }}>Rankershub AI</span>
              </Typography>
              <Typography
                textAlign={"start"}
                variant="body1"
                color="#b3afafff"
                mt={1}
              >
                At Rankershub AI, our approach to web design service in Wyoming
                is rooted in a combination of creativity and data-driven
                strategies to deliver visually stunning and optimized websites.
                Our expert team leverages their extensive experience to craft
                visually stunning websites that are tailored to each client’s
                unique needs. We emphasize data analysis and AI-driven insights
                to optimize user experience, conversions, and overall
                performance, ensuring measurable results and continuous
                improvement.
              </Typography>
            </Box>
          </Grid>
        </Grid>

        <Typography
          variant="body2"
          color="#c1c0c0ff"
          sx={{ maxWidth: "55rem", mt: 6 }}
        >
          Ready to elevate your online presence with a captivating website?
          Contact Rankershub AI today to discuss your web design needs. Our
          expert team is here to help you achieve your digital goals. Reach out
          now and let’s create an exceptional website together.
        </Typography>

         <Link to="/Contact">
          <Button
            data-aos="fade"
            data-aos-delay="140"
            data-aos-duration="600"
            variant="contained"
            sx={{
              background: "linear-gradient(to right, #DB09F9, #631FC7)",
              mt: 6,
            }}
          >
            Let's Create Website
          </Button>
        </Link>
      </Box>
    </>
  );
};

export default WebDesign;
