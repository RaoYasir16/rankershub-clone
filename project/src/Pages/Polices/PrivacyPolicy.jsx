import { Box, Typography } from "@mui/material";
import React from "react";

const PrivacyPolicy = () => {
  const privacys = [
    {
      heading: "Introduction:",
      description:
        "This Privacy Policy outlines how Rankershub AI collects, uses, discloses, and protects the personal information gathered through its website and services. By accessing or using our website, you consent to the terms outlined in this Privacy Policy",
    },
    {
      heading: "Information Collection:",
      description:
        "We may collect personal information, including names, email addresses, phone numbers, and other contact details, when you voluntarily provide it to us through our website forms or other communication channels.",
    },
    {
      heading: "Use of Information:",
      description:
        "We may use the collected information to communicate with you, provide services, improve user experience, and for marketing purposes, including sending SMS and making calls related to our services.",
    },
    {
      heading: "Receiving SMS:",
      description:
        "Rankershub AI can use your phone number to send you details of services, new offers, payment links, and all other sort of communication regarding your services, through SMS.",
    },
    {
      heading: "Disclosure of Information:",
      description:
        "We do not sell or rent your personal information to third parties, in any case.",
    },
    {
      heading: "Data Security:",
      description:
        "We implement appropriate security measures to protect against unauthorized access, alteration, disclosure, or destruction of your personal information. However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.",
    },
    {
      heading: "Data Retention:",
      description:
        "We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law.",
    },
    {
      heading: "Your Rights:",
      description:
        "You have the right to access, update, or delete your personal information. You may also object to the processing of your data or request restrictions on its use. To exercise these rights or inquire about our privacy practices, please contact us using the information provided below.",
    },
    {
      heading: "SMS Marketing:",
      description:
        "By opting in to receive SMS messages from us, you agree to receive marketing messages from Rankershub AI. Message and Data Rates may apply. You can STOP messaging by sending STOP and get more help by sending HELP.",
    },
    {
      heading: "Third-Party Data Sharing:",
      description:
        "No mobile information will be shared with third parties/affiliates for marketing/promotional purposes.",
    },
    {
      heading: "Changes to Privacy Policy:",
      description:
        "We reserve the right to update or modify this Privacy Policy at any time without prior notice. Any changes will be effective immediately upon posting on our website. We encourage you to review this Privacy Policy periodically for updates.",
    },
    {
      heading: "Contact Us:",
      description:
        "If you have any questions or concerns about our Privacy Policy or data practices, please contact us at contact@rankershub.ai.",
    },
  ];
  return (
    <>
     <Box
  sx={{
    minHeight: "80vh",
    backgroundColor: "#020314",
    px: { xs: 3, md: 6 },
    display: "flex",
    flexDirection: "column",
    alignItems: "center", 
    pt: { xs: 15, md: 20 },
  }}
>
  <Typography
    variant="h4"
    color="#DB09F9"
    fontWeight={600}
    gutterBottom
    sx={{ textAlign: "center" }} 
  >
    Privacy Policy
  </Typography>

  {privacys.map((privacy, index) => (
    <Box key={index} sx={{ mb: 3, maxWidth: "60rem" , display:'flex', alignItems:'flex-start' , flexDirection:'column'}}>
      <Typography variant="h6" color="#DB09F9" gutterBottom sx={{ textAlign: "left" }}>
        {privacy.heading}
      </Typography>
      <Typography variant="body1" color="#9d9d9fff" sx={{ textAlign: "left" }}>
        {privacy.description}
      </Typography>
    </Box>
  ))}
</Box>

    </>
  );
};

export default PrivacyPolicy;
