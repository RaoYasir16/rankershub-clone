import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { CgWebsite } from "react-icons/cg";
import { HiOutlinePaintBrush } from "react-icons/hi2";
import { RiApps2AddLine } from "react-icons/ri";
import { FaLaptop } from "react-icons/fa";
import { HiOutlineDocumentSearch } from "react-icons/hi";
import { LuChartColumnStacked } from "react-icons/lu";





const HomeServices = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        bgcolor: "#020314",
        position: "relative",
        p: 4,
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          mb: 6,
        }}
      >
        <Typography
          sx={{
            fontSize: { xs: "2.5rem", md: "3rem" },
            fontWeight: "bold",
            color: "transparent",
            WebkitTextStroke: "1px #DE09F3",
            opacity: 0.3,
            position: "absolute",
          }}
        >
          OUR SERVICES
        </Typography>
        <Typography color="#DE09F3" fontWeight={600}>
          OUR SERVICES
        </Typography>
      </Box>

      <Box data-aos="fade-up" sx={{ textAlign: "center", mb: 6 }}>
        <Typography variant="h5" color="white" fontWeight={600}>
          We Shape the Perfect Solution.
        </Typography>
        <Typography
          variant="body1"
          color="#c2c0c0"
          sx={{ width: { xs: "90%", md: "50%" }, mx: "auto", mt: 1 }}
        >
          Digital marketing Services leveraging AI can offer a wide range of
          services that harness the power of artificial intelligence. Some key
          services include:
        </Typography>
      </Box>

      <Grid  data-aos="fade"
          data-aos-delay="140"
          data-aos-duration="600" container spacing={3} justifyContent={"center"}>
        <Grid size={{ xs: 12, md: 3 }} sx={{ width:'100%', maxWidth:{xs:'auto' , md:"20rem"}}}>
          <Box
            sx={{
              p: 3,
              display: "flex",
              borderRadius: 2,
              bgcolor: "#111220",
              gap: 2,
              minHeight:{xs:'auto' , md:'18rem'},
              backgroundImage:
                "linear-gradient(to top right, #DE09F3, transparent 20%)",
            }}
          >
            <Box
              sx={{
                color: "#DE09F3",
                fontSize: { xs: "2rem", md: "3.3rem" },
                display: "flex",
                flexShrink: 0,
              }}
            >
              <CgWebsite />
            </Box>
            <Box
              sx={{ display: "flex", flexDirection: "column", gap: 1, mb: 1 }}
            >
              <Typography variant="h6" color="white" fontWeight={600}>
                Website Development
              </Typography>
              <Typography variant="body2" color="#c2c0c0">
                Our digital marketing agency USA provides AI-powered web
                development services, leveraging advanced technologies and
                algorithms to create intelligent, personalized, high-performing
                websites for our clients.
              </Typography>{" "}
            </Box>
          </Box>
        </Grid>







        <Grid size={{ xs: 12, md: 3 }} sx={{ width:'100%',maxWidth:{xs:'auto' , md:"20rem"}}}>
          <Box
            sx={{
              p: 3,
              display: "flex",
              borderRadius: 2,
              bgcolor: "#111220",
              gap: 2,
              minHeight:{xs:'auto' , md:'18rem'},
            }}
          >
            <Box
              sx={{
                color: "#DE09F3",
                fontSize: { xs: "2rem", md: "3.3rem" },
                display: "flex",
                flexShrink: 0,
              }}
            >
              <HiOutlinePaintBrush />
            </Box>
            <Box
              sx={{ display: "flex", flexDirection: "column", gap: 1, mb: 1 }}
            >
              <Typography variant="h6" color="white" fontWeight={600}>
                Graphic Desgining
              </Typography>
              <Typography variant="body2" color="#c2c0c0">
                Our digital marketing agency USA provides AI-powered web
                development services, leveraging advanced technologies and
                algorithms to create intelligent, personalized, high-performing
                websites for our clients intelligent, personalized, high-performing
                websites for our clients.
              </Typography>{" "}
            </Box>
          </Box>
        </Grid>
         <Grid size={{ xs: 12, md: 3 }} sx={{width:'100%',maxWidth:{xs:'auto' , md:"20rem"}}}>
          <Box
            sx={{
              p: 3,
              display: "flex",
              borderRadius: 2,
              bgcolor: "#111220",
              gap: 2,
                minHeight:{xs:'auto' , md:'18rem'},
              backgroundImage:
                "linear-gradient(to top left, #DE09F3, transparent 20%)",
            }}
          >
            <Box
              sx={{
                color: "#DE09F3",
                fontSize: { xs: "2rem", md: "3.3rem" },
                display: "flex",
                flexShrink: 0,
              }}
            >
              <RiApps2AddLine />
            </Box>
            <Box
              sx={{ display: "flex", flexDirection: "column", gap: 1, mb: 1 }}
            >
              <Typography variant="h6" color="white" fontWeight={600}>
                Application Development
              </Typography>
              <Typography variant="body2" color="#c2c0c0">
                Our digital marketing agency USA provides AI-powered web
                development services, leveraging advanced technologies and
                algorithms to create intelligent, personalized, high-performing
                websites for our clients.
              </Typography>{" "}
            </Box>
          </Box>
        </Grid>
      </Grid>
       <Grid data-aos="fade"
          data-aos-delay="140"
          data-aos-duration="600" container spacing={3} justifyContent="center" mt={4}>
        <Grid size={{ xs: 12, md: 3 }} sx={{width:'100%',maxWidth:{xs:'auto' , md:"20rem"}}}>
          <Box
            sx={{
              p: 3,
              display: "flex",
              borderRadius: 2,
              bgcolor: "#111220",
              gap: 2,
                minHeight:{xs:'auto' , md:'18rem'},
              backgroundImage:
                "linear-gradient(to top right, #DE09F3, transparent 20%)",
            }}
          >
            <Box
              sx={{
                color: "#DE09F3",
                fontSize: { xs: "2rem", md: "3.3rem" },
                display: "flex",
                flexShrink: 0,
              }}
            >
              <FaLaptop />
            </Box>
            <Box
              sx={{ display: "flex", flexDirection: "column", gap: 1, mb: 1 }}
            >
              <Typography variant="h6" color="white" fontWeight={600}>
                UI / UX Designing
              </Typography>
              <Typography variant="body2" color="#c2c0c0">
                Our digital marketing agency USA provides AI-powered web
                development services, leveraging advanced technologies and
                algorithms to create intelligent, personalized, high-performing
                websites for our clients.
              </Typography>{" "}
            </Box>
          </Box>
        </Grid>
        <Grid size={{ xs: 12, md: 3 }} sx={{width:'100%',maxWidth:{xs:'auto' , md:"20rem"}}}>
          <Box
            sx={{
              p: 3,
              display: "flex",
              borderRadius: 2,
              bgcolor: "#111220",
              gap: 2,
                minHeight:{xs:'auto' , md:'18rem'},
            }}
          >
            <Box
              sx={{
                color: "#DE09F3",
                fontSize: { xs: "2rem", md: "3.3rem" },
                display: "flex",
                flexShrink: 0,
              }}
            >
              <HiOutlineDocumentSearch />
            </Box>
            <Box
              sx={{ display: "flex", flexDirection: "column", gap: 1, mb: 1 }}
            >
              <Typography variant="h6" color="white" fontWeight={600}>
                SEO & Content Writing
              </Typography>
              <Typography variant="body2" color="#c2c0c0">
                Our digital marketing agency USA provides AI-powered web
                development services, leveraging advanced technologies and
                algorithms to create intelligent, personalized, high-performing
                websites for our clients.
              </Typography>{" "}
            </Box>
          </Box>
        </Grid>
         <Grid size={{ xs: 12, md: 3 }} sx={{width:'100%',maxWidth:{xs:'auto' , md:"20rem"}}}>
          <Box
            sx={{
              p: 3,
              display: "flex",
              borderRadius: 2,
              bgcolor: "#111220",
              gap: 2,
                minHeight:{xs:'auto' , md:'18rem'},
              backgroundImage:
                "linear-gradient(to top left, #DE09F3, transparent 20%)",
            }}
          >
            <Box
              sx={{
                color: "#DE09F3",
                fontSize: { xs: "2rem", md: "3.3rem" },
                display: "flex",
                flexShrink: 0,
              }}
            >
              <LuChartColumnStacked />
            </Box>
            <Box
              sx={{ display: "flex", flexDirection: "column", gap: 1, mb: 1 }}
            >
              <Typography variant="h6" color="white" fontWeight={600}>
                Digital Marketing
              </Typography>
              <Typography variant="body2" color="#c2c0c0">
                Our digital marketing agency USA provides AI-powered web
                development services, leveraging advanced technologies and
                algorithms to create intelligent, personalized, high-performing
                websites for our clients.
              </Typography>{" "}
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default HomeServices;
