import React from "react";
import { Box, Typography, List, ListItem, ListItemText } from "@mui/material";

const RefundPolicy = () => {
  const rules = [
    "No refunds once work begins.",
    "Services can be cancelled anytime, but current month’s fees are non-refundable.",
    "No refunds if SEO advice or website changes are ignored.",
    "No refunds if another SEO provider is hired or DIY SEO is done during service.",
    "No refunds if website access is not provided or the site is broken.",
    "No refunds for mock-up designs once approved.",
    "Special event services require 30-day notice to cancel.",
    "SEO and marketing packages can be cancelled with 15-day written notice; completed work is non-refundable.",
    "No refunds for projects inactive more than 30 days.",
  ];
  return (
    <>
      <Box
        sx={{
          minHeight: "80vh",
          backgroundColor: "#020314",
          p: {xs:2, md:4},
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
          Refund Policy
        </Typography>

        <Box sx={{ maxWidth: "800px", mx: "auto", p:{xs:1 , md:2} }}>
          
          <List>
            {rules.map((rule, index) => (
              <ListItem key={index} sx={{ pl: 0, color:'white' }}>
                <ListItemText primary={`• ${rule}`} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Box>
    </>
  );
};

export default RefundPolicy;
