import { Box, Typography, Button, Grid } from "@mui/material";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Herro_video from "../assets/Herro-video.mp4";
import Services from "../components/Services/Services";
import Projects from "../components/Projects/Projects";
import Integration from "../components/Integration/Integration";
import OurPerks from "../components/OurPerks/OurPerks";
import WhyChoose from "../components/WhyChooseUs/WhyChoose";
import ContactForm from "../components/ContactForm/ContactForm";

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <>
      {/* Hero Section */}
     
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "white",
            px: 6,
            py: 8,
            background:
              "radial-gradient(circle, #a726c1 0%, rgba(98, 0, 255, 0) 40%)",
          }}
        >
          <Grid container spacing={4}>
          {/* Left Text */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Box items sx={{ flex: 1, pr: 4 }}>
              <Typography
                variant="h1"
                component="h2"
                fontSize={{ xs: "30px", md: "42px" }}
                sx={{
                  // fontSize: "42px",
                  fontWeight: "bold",
                  lineHeight: 1.3,
                }}
              >
                <span style={{ color: "#de09fb" }}>Boost</span> Your Business
                with Strategic Digital Marketing Services in Sheridan!
              </Typography>

              <Typography sx={{ mt: 3, fontSize: "16px", lineHeight: 1.6 }}>
                Step into a digital revolution where your brand's story comes to
                life through strategic and impactful marketing. <br />
                At our digital marketing agency, we harness the potential of
                artificial intelligence to create targeted campaigns, optimize
                performance, and drive exceptional results for your business.
              </Typography>

              <Button
                sx={{
                  mt: 4,
                  px: 4,
                  py: 1.5,
                  textTransform: "none",
                  borderRadius: "30px",
                  fontSize: "16px",
                  background:
                    "linear-gradient(90deg, #a726c1 0%, #6100ff 100%)",
                  color: "white",
                  "&:hover": {
                    background:
                      "linear-gradient(90deg, #6100ff 0%, #a726c1 100%)",
                  },
                }}
              >
                Initiate Ranking Process
              </Button>
            </Box>
          </Grid>

          {/* Right Video */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Box
              sx={{
                flex: 1,
                display: "flex",
                justifyContent: "center",
              }}
            >
              <video
                width="100%"
                height="auto"
                autoPlay
                loop
                muted
                style={{
                  borderRadius: "20px",
                  boxShadow: "0px 0px 40px rgba(168, 85, 247, 0.5)",
                  maxWidth: "500px",
                }}
              >
                <source src={Herro_video} type="video/mp4" />
              </video>
            </Box>
          </Grid>
          </Grid>
        </Box>
     

      {/* OUR PERKS Section */}

      <OurPerks />

      {/* AI Marketing Section */}

      <Box sx={{ color: "#fff", p: 4 }}>
        <Typography
          variant="h4"
          sx={{ fontWeight: "bold", textAlign: "center", mb: 4 }}
        >
          Our <span style={{ color: "#d42fff" }}>AI-Powered</span> Marketing
          Approach
        </Typography>

        <Box width={"80%"} sx={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",mx:"auto"}}>

          <Box
            data-aos="fade-right"
            data-aos-delay="200"
            data-aos-duration="800"
            elevation={3}
            sx={{
              background: "#000000",
              boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
              p: 3,
              mb: 4,
              borderRadius: 2,
              borderRight: "2px solid #d42fff",
            }}
          >
            <Typography
              variant="h6"
              sx={{ fontWeight: "bold", color: "white" }}
            >
              Elevate Your Digital Marketing with AI
            </Typography>
            <Typography variant="body1" sx={{ mt: 1, color: "white" }}>
              Experience the game-changing potential of Artificial Intelligence
              as we unleash its power in marketing. Our AI-powered marketing
              services revolutionize your marketing efforts. From predictive
              analytics to smart targeting and automated optimizations,
              Rankershub AI empowers your campaigns with unparalleled precision,
              efficiency, and effectiveness. Unlock the future of marketing with
              AI.
            </Typography>
          </Box>

          <Box
            data-aos="fade-left"
            data-aos-delay="-200"
            data-aos-duration="800"
            elevation={3}
            sx={{
              backgroundColor: "#111",
              p: 3,
              mb: 4,
              borderRadius: 2,
              borderLeft: "2px solid #d42fff",
            }}
          >
            <Typography
              variant="h6"
              sx={{ fontWeight: "bold", color: "white" }}
            >
              AI Revolutionizing Digital Marketing
            </Typography>
            <Typography variant="body1" sx={{ mt: 1, color: "white" }}>
              Artificial Intelligence is reshaping the digital marketing
              landscape, driving a paradigm shift in how businesses connect with
              their audience. By leveraging the power of AI analytics,
              personalization, automation, and predictive modeling, marketers
              can optimize targeting and enhance customer experiences. Moreover,
              achieve unprecedented efficiency and effectiveness in their
              digital marketing strategies.
            </Typography>
          </Box>

          <Box
            data-aos="fade-right"
            data-aos-delay="200"
            data-aos-duration="800"
            elevation={3}
            sx={{
              background: "#000000",
              boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
              p: 3,
              mb: 4,
              borderRadius: 2,
              borderRight: "2px solid #d42fff",
            }}
          >
            <Typography
              variant="h6"
              sx={{ fontWeight: "bold", color: "white" }}
            >
              Artificial Intelligence-Driven Marketing Excellence
            </Typography>
            <Typography variant="body1" sx={{ mt: 1, color: "white" }}>
              With AI as a driving force, the digital marketing landscape is
              evolving exponentially, opening doors to unparalleled innovation
              and strategic advantage. AI-Powered marketing services bring
              benefits like advanced personalized customer experiences, precise
              targeting, SEO Optimization, predictive analytics, content
              generation and optimization, improved customer service, and a
              competitive advantage in the dynamic digital landscape.
            </Typography>
          </Box>

          <Box
            data-aos="fade-left"
            data-aos-delay="-200"
            data-aos-duration="800"
            elevation={3}
            sx={{
              backgroundColor: "#111",
              p: 3,
              mb: 4,
              borderRadius: 2,
              borderLeft: "2px solid #d42fff",
            }}
          >
            <Typography
              variant="h6"
              sx={{ fontWeight: "bold", color: "white" }}
            >
              AI-Powered Marketing Mastery
            </Typography>
            <Typography variant="body1" sx={{ mt: 1, color: "white" }}>
              Rankershub AI utilizes tools such as Semrush, Surfer SEO, Frase,
              and Diib to enhance their strategies. Semrush offers comprehensive
              SEO marketing solutions, while Surfer SEO provides on-page
              optimization guidance. Frase utilizes AI to generate content
              briefs and optimize content strategy. Diib offers AI-powered
              analytics and insights for website performance and SEO
              optimization. These tools help to streamline processes, improve
              SEO, generate data-driven content, and optimize website
              performance.
            </Typography>
          </Box>
        </Box>

      </Box>

      {/* Services import Section */}
      <Services />

      {/* Our Projects Section */}
      <Projects />

      {/* Integration Section */}
      <Integration />

      {/* Why Choose Us Section */}
      <WhyChoose />

      {/* Contact Us Section */}
      <ContactForm />
    </>
  );
};

export default Home;
