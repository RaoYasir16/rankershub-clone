import React from "react";
import {
  Grid,
  Box,
  Typography,
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import RoomIcon from "@mui/icons-material/Room";

const ContactForm = () => {
  return (
    <>
      <Box sx={{ width: "90%", mx: "auto", py: 5, }}>
        <Grid container display={"flex"} justifyContent={"center"}>
          {/* Left Side */}
          <Grid
            size={{ xs: 12, md: 6 }}
            sx={{margin:"20px 0px"}}

          >
            <Box
              sx={{
                background: "linear-gradient(to bottom right, #d946ef, #9333ea)",
                //   display:"flex",
                alignItems: "center",
                color: "black",
                borderRadius: "20px 0px 0px 20px",
                p: 4,
                height: "100%",
              }}
            >
              <Typography variant="h5" fontWeight="bold" gutterBottom>
                Get in touch
              </Typography>
              <Typography variant="body1" gutterBottom>
                Supercharge your digital presence! Connect with our team today
                to unlock your brand's true potential. Our digital marketing
                experts are ready to craft personalized strategies that drive
                results. Let's fuel your digital dominance together!
              </Typography>
              <Box mt={3}>
                <Typography>
                  <CallIcon fontSize="14x" /> +1 307 487 8291
                </Typography>
                <Typography>
                  <EmailIcon fontSize="14px" /> contact@rankershub.ai
                </Typography>
                <Typography>
                  <RoomIcon fontSize="14px" /> Sheridan, WY
                </Typography>
              </Box>
            </Box>
          </Grid>

          {/* Right Side */}
          <Grid
            size={{ xs: 12, md: 6 }}
            sx={{margin:"20px 0px"}}
          >
            <Box
              sx={{
                border: "1px solid #9333ea",
                borderRadius: "0px 20px 20px 0px",
                p: 4,
                height: "100%",
              }}
            >
              <Typography
                variant="h5"
                fontWeight="bold"
                color="#DE09FB"
                gutterBottom
              >
                Contact Us
              </Typography>
              <Grid container spacing={2}>
                <Grid display={"flex"} justifyContent={"space-between"} size={{ xs: 12, md: 12}}>
                  <Grid size={{ xs: 12, md: 6 }}>
                    <TextField
                      fullWidth
                      placeholder="Full name"
                      variant="outlined"
                      sx={{
                        "& .MuiInputLabel-root": {
                          color: "black",
                          fontSize: "10px",
                          padding: "3px 2px",
                        },
                        "& .MuiOutlinedInput-root": {
                          backgroundColor: "white",
                          borderRadius: "40px",
                          height: "36px",
                        },
                      }}
                    />
                  </Grid>
                  <Grid size={{ xs: 12, md: 6 }}>
                    <TextField
                      fullWidth
                      placeholder="Your email"
                      // variant="outlined"
                      sx={{
                        "& .MuiInputLabel-root": {
                          color: "black",
                          fontSize: "10px",
                          padding: "3px 2px",
                        },
                        "& .MuiOutlinedInput-root": {
                          backgroundColor: "white",
                          borderRadius: "40px",
                          height: "36px",
                        },
                      }}
                    />
                  </Grid>
                </Grid>

                <Grid display={"flex"} justifyContent={"space-between"} size={{ xs: 12, md: 12}}>
                  <Grid size={{ xs: 12, md: 6 }}>
                    <TextField
                      fullWidth
                      placeholder="Pnone Number"
                      variant="outlined"
                      sx={{
                        "& .MuiInputLabel-root": {
                          color: "black",
                          fontSize: "10px",
                          padding: "3px 2px",
                        },
                        "& .MuiOutlinedInput-root": {
                          backgroundColor: "white",
                          borderRadius: "40px",
                          height: "36px",
                        },
                      }}
                    />
                  </Grid>
                  <Grid size={{ xs: 12, md: 6 }}>
                    <TextField
                      fullWidth
                      placeholder="Subject"
                      // variant="outlined"
                      sx={{
                        "& .MuiInputLabel-root": {
                          color: "black",
                          fontSize: "10px",
                          padding: "3px 2px",
                        },
                        "& .MuiOutlinedInput-root": {
                          backgroundColor: "white",
                          borderRadius: "40px",
                          height: "36px",
                        },
                      }}
                    />
                  </Grid>
                </Grid>

                <Grid display={"flex"} justifyContent={"space-between"} size={{ xs: 12, md: 12}}>
                  <TextField
                    fullWidth
                    multiline
                    rows={4}
                    placeholder="Comments"
                    variant="outlined"
                    sx={{
                      "& .MuiInputLabel-root": {
                        color: "black",
                        fontSize: "14px",
                      },
                      "& .MuiOutlinedInput-root": {
                        backgroundColor: "white",
                        borderRadius: "12px",
                        "& fieldset": {
                          borderColor: "#ccc",
                        },
                      },
                    }}
                  />
                </Grid>
              </Grid>

              <Grid size={{ xs:12, md:12}} sx={{mt:"10px"}}>
                <FormControlLabel
                  control={
                    <Checkbox
                      sx={{
                        color: "white",
                        "&.Mui-checked": {
                          color: "white",
                        },
                        p: "0 9px 0 0",
                      }}
                    />
                  }
                  label="I acknowledge that I have read and understood the Privacy policy"
                  sx={{
                    color: "white",
                    alignItems: "flex-start",
                    "& .MuiFormControlLabel-label": {
                      fontSize: "14px",
                      lineHeight: "1.4",
                    },
                  }}
                />

                <FormControlLabel
                  control={
                    <Checkbox
                      sx={{
                        color: "white",
                        "&.Mui-checked": {
                          color: "white",
                        },
                        p: "0 9px 0 0",
                      }}
                    />
                  }
                  label="Sign Up for SMS Updates"
                  sx={{
                    color: "white",
                    alignItems: "flex-start",
                    "& .MuiFormControlLabel-label": {
                      fontSize: "14px",
                      lineHeight: "1.4",
                    },
                  }}
                />

                <FormControlLabel
                  control={
                    <Checkbox
                      sx={{
                        color: "white",
                        "&.Mui-checked": {
                          color: "white",
                        },
                        p: "0 9px 0 0",
                      }}
                    />
                  }
                  label="By providing a telephone number and submitting this form you are consenting to be contacted by SMS text message. Message and Data Rates may apply. You can STOP messaging by sending STOP and get more help by sending HELP."
                  sx={{
                    color: "white",
                    alignItems: "flex-start",
                    "& .MuiFormControlLabel-label": {
                      fontSize: "14px",
                      lineHeight: "1.4",
                    },
                  }}
                />

                <FormControlLabel
                  control={
                    <Checkbox
                      sx={{
                        color: "white",
                        "&.Mui-checked": {
                          color: "white",
                        },
                        p: "0 9px 0 0",
                      }}
                    />
                  }
                  label="No mobile information will be shared with third parties/affiliates for marketing/promotional purposes. All other categories exclude text messaging originator opt-in data and consent; this information will not be shared with any third parties."
                  sx={{
                    color: "white",
                    alignItems: "flex-start",
                    "& .MuiFormControlLabel-label": {
                      fontSize: "14px",
                      lineHeight: "1.4",
                    },
                  }}
                />
              </Grid>

              <Button
                variant="contained"
                sx={{
                  mt: 2,
                  px: 3,
                  py: 1,
                  // background: "linear-gradient(to right, #d946ef, #9333ea)",
                  borderRadius: 2,
                  fontWeight: "bold",
                  backgroundImage: "radial-gradient(at center center, #de09fb 20%,#0c5ecc6b 100%)",
                  textTransform:"none"
                }}
              >
                Send Message
              </Button>
            </Box>
          </Grid>

        </Grid>
      </Box>
    </>
  );
};

export default ContactForm;
