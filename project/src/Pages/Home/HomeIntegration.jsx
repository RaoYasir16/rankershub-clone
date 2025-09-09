import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import React from "react";
import i1 from "../../Imgs/i1.png";
import i2 from "../../Imgs/i2.png";
import i3 from "../../Imgs/i3.png";
import i4 from "../../Imgs/i4.png";
import i5 from "../../Imgs/i5.png";
import i6 from "../../Imgs/i6.png";
import Grid from "@mui/material/Grid";

const HomeIntegration = () => {
  return (
    <>
      <Box
        sx={{
          minHeight: "50vh",
          bgcolor: "#020314",
          position: "relative",
          p: 4,
          display: "flex",
          flexDirection: "column",
          textAlign: "center",
          alignItems: "center",
        }}
      >
        <Grid container spacing={2}> 

            <Grid size={{xs:12 , md:3}} sx={{height:{xs:'10rem', md:0}}}>

            <Box  >
          <Box component="img" src={i1} alt="example" sx={{ width: { xs: "1.4rem", md: "1.5rem" }, height: "auto", position: "absolute", top:{xs:'1%' , md: '31%'}, left:{xs:'33%' , md:'27%'} }} />
          <Box component="img" src={i2} alt="example" sx={{ width: { xs: "2rem", md: "2.3rem" }, height: "auto", position: "absolute", top:{xs:'15%' , md: '31%'}, left:{xs:'17%' , md:'34%'} }} />
          <Box component="img" src={i3} alt="example" sx={{ width: { xs: "3.5rem", md: "4.5rem" }, height: "auto", position: "absolute", top:{xs:'30%' , md: '55%'}, left:{xs:'22%' , md:'31%'} }} />
          <Box component="img" src={i4} alt="example" sx={{ width: { xs: "2.5rem", md: "1.8rem" }, height: "auto", position: "absolute", top:{xs:'1%' , md: '55%'}, left:{xs:'65%' , md:'25%'} }} />
          <Box component="img" src={i5} alt="example" sx={{ width: { xs: "2.5rem", md: "2.2rem" }, height: "auto", position: "absolute", top:{xs:'15%' , md: '78%'}, left:{xs:'53%' , md:'35%'} }} />
          <Box component="img" src={i6} alt="example" sx={{ width: { xs: "2.5rem", md: "2.2rem" }, height: "auto", position: "absolute", top:{xs:'30%' , md: '78%'}, left:{xs:'63%' , md:'27%'} }} />
        </Box></Grid>
        

        <Grid size={{xs:12 , md:12}}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            mb: 6,
            mt: { xs: 5, md: 17 },
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: "3rem", md: "3rem" },
              fontWeight: "bold",
              color: "transparent",
              WebkitTextStroke: "1px #DE09F3",
              opacity: 0.3,
              position: "absolute",
            }}
          >
            Integration
          </Typography>
          <Typography color="#DE09F3" fontWeight={600}>
            Integration
          </Typography>
        </Box>
        
        <Box sx={{ mt: { xs: 3, md: 1 } }}>
          <Typography
            variant="h5"
            color="white"
            sx={{ fontWeight: "600", width: "20rem" }}
          >
            We collobrate with the top software companies.
          </Typography>
          <Button
            variant="contained"
            sx={{
              mt: { xs: 4, md: 4 },
              background: "linear-gradient(90deg, #701DCC 0%, #D40BF7 100%)",
              "&:hover": {
                background: "linear-gradient(90deg, #6018b8 0%, #b309d3 100%)",
              },
            }}
          >
            View All Services
          </Button>
        </Box>
        </Grid>


    

        <Grid size={{xs:12 , md:3}} sx={{height:{xs:'13rem', md:0}}}>
        <Box>
          <Box component="img" src={i1} alt="example" sx={{ width: { xs: "1.4rem", md: "1.5rem" }, height: "auto", position: "absolute", top:{md:'31%'}, bottom:{xs:'3%'}, right:{xs:'70%' , md:'27%'} }} />
          <Box component="img" src={i2} alt="example" sx={{ width: { xs: "2rem", md: "2.3rem" }, height: "auto", position: "absolute", top:{md:'31%'}, bottom:{xs:'3%'}, right:{xs:'27%' , md:'34%'} }} />
          <Box component="img" src={i3} alt="example" sx={{ width: { xs: "3.5rem", md: "4.5rem" }, height: "auto", position: "absolute", top:{md:'55%'}, bottom:{xs:'15%'}, right:{xs:'58%' , md:'31%'} }} />
          <Box component="img" src={i4} alt="example" sx={{ width: { xs: "2.5rem", md: "1.8rem" }, height: "auto", position: "absolute", top:{md:'55%'}, bottom:{xs:'15%'}, right:{xs:'15%' , md:'25%'} }} />
          <Box component="img" src={i5} alt="example" sx={{ width: { xs: "2.5rem", md: "2.2rem" }, height: "auto", position: "absolute", top:{md:'78%'}, bottom:{xs:'25%'}, right:{xs:'63%' , md:'35%'} }} />
          <Box component="img" src={i6} alt="example" sx={{ width: { xs: "2.5rem", md: "2.2rem" }, height: "auto", position: "absolute", top:{md:'78%'}, bottom:{xs:'25%'}, right:{xs:'20%' , md:'27%'} }} />
        </Box></Grid>
        </Grid>
      </Box>
    </>
  );
};

export default HomeIntegration;
