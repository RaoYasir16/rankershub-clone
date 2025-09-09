import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { TextField, Button } from "@mui/material";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import { IoIosCall } from "react-icons/io";
import { CgMail } from "react-icons/cg";
import { FaMapMarkerAlt } from "react-icons/fa";
import { useForm } from "react-hook-form";
import Alert from "@mui/material/Alert";
import CheckIcon from "@mui/icons-material/Check";

const Contact = () => {

    const [showSuccess, setShowSuccess] = useState(false); 
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const delay = (d) => {
    return new Promise((reslove, reject) => {
      setTimeout(() => {
        reslove();
      }, d * 1000);
    });
  };
  const onSubmit = async (data) => {
    await delay(1); 
    console.log(data);
    setShowSuccess(true);
    reset();
    setTimeout(() => setShowSuccess(false), 3000);
  };

  return (
    <>
      <Box
        sx={{
          minHeight: "90vh",
          backgroundColor: "#020314",
          p: 4,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          py: { xs: 15, md: 20 },
          position:'relative',
        }}
      >
        <Grid
          data-aos="fade-up"
          container
          spacing={0}
          justifyContent={"center"}
          sx={{ maxWidth: "98rem" }}
        >
          <Grid size={{ xs: 12, md: 3 }}>
            <Box
              sx={{
                background: "linear-gradient(to bottom, #DB09F9, #631FC7)",
                minHeight:"43rem" ,
                p: { xs: 2, md: 4 },
                borderTopRightRadius: { xs: "0.8rem", md: 0 },
                borderBottomRightRadius: { xs: "0.8rem", md: 0 },
                borderTopLeftRadius: ".8rem",
                borderBottomLeftRadius: ".8rem",
                mb: { xs: 5, md: 0 },
              }}
            >
              <Typography
                variant="h4"
                color="black"
                sx={{
                  fontWeight: "600",
                  fontSize: { xs: "1.2rem", md: "2rem" },
                }}
              >
                Get in touch
              </Typography>
              <Typography
                variant="body1"
                color="black"
                sx={{ mt: { xs: 2, md: 3 } }}
              >
                Supercharge your digital presence! Connect with our team today
                to unlock your brand’s true potential. Our digital marketing
                experts are ready to craft personalized strategies that drive
                results. Let’s fuel your digital dominance together!
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  mt: { xs: 2, md: 4 },
                }}
              >
                <IoIosCall />
                <Typography variant="body1" color="black">
                  +92 225 874416
                </Typography>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  mt: { xs: 1, md: 1 },
                }}
              >
                <CgMail />
                <Typography variant="body1" color="black">
                  contact@gmail.com
                </Typography>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  mt: { xs: 1, md: 1 },
                }}
              >
                <FaMapMarkerAlt />
                <Typography variant="body1" color="black">
                  sheriyans
                </Typography>
              </Box>
            </Box>
          </Grid>

          <Grid size={{ xs: 12, md: 5 }}>
            <Box
              sx={{
                minHeight: "43rem",
                p: { xs: 2, md: 4 },
                border: "1px solid #5F20C5",
                borderTopRightRadius: ".8rem",
                borderBottomRightRadius: ".8rem",
                borderTopLeftRadius: { xs: "0.8rem", md: 0 },
                borderBottomLeftRadius: { xs: "0.8rem", md: 0 },
                backgroundColor: "#0a0a1a",
              }}
            >
              <Typography
                variant="h4"
                color="#BA10EC"
                sx={{
                  fontSize: { xs: "1.2rem", md: "1.8rem" },
                  fontWeight: 600,
                }}
              >
                Contact Us
              </Typography>

              <form action="" onSubmit={handleSubmit(onSubmit)}>
                <Grid container spacing={2} mt={4}>
                  <Grid item size={{ xs: 12, md: 6 }}>
                    <TextField
                      {...register("username", {
                        required: {
                          value: true,
                          message: "Please fill out this Field",
                        },
                      })}
                      fullWidth
                      placeholder="username"
                      sx={{
                        bgcolor: "white",
                        borderRadius: "2rem",
                        "& .MuiOutlinedInput-root": {
                          borderRadius: "2rem",
                          height: "2.5rem",
                          "& input": {
                            padding: "0 10px",
                          },
                          "& input::placeholder": {
                            color: "grey",
                            opacity: 1,
                            fontSize: "0.9rem",
                            fontWeight: 500,
                            marginLeft: "10px",
                          },
                        },
                      }}
                    />
                    {errors.username && (
                      <Typography variant="body1" color="red">
                        {errors.username.message}
                      </Typography>
                    )}
                  </Grid>
                  <Grid item size={{ xs: 12, md: 6 }}>
                    <TextField
                      {...register("email", {
                        required: {
                          value: true,
                          message: "Please fill out this Field",
                        },
                      })}
                      fullWidth
                      placeholder="Your Email"
                      sx={{
                        bgcolor: "white",
                        borderRadius: "2rem",
                        "& .MuiOutlinedInput-root": {
                          borderRadius: "2rem",
                          height: "2.5rem",
                          "& input": {
                            padding: "0 10px",
                          },
                          "& input::placeholder": {
                            color: "grey",
                            opacity: 1,
                            fontSize: "0.9rem",
                            fontWeight: 500,
                            marginLeft: "10px",
                          },
                        },
                      }}
                    />
                    {errors.email && (
                      <Typography variant="body1" color="red">
                        {errors.email.message}
                      </Typography>
                    )}
                  </Grid>
                </Grid>

                <Grid container spacing={2} mt={3}>
                  <Grid size={{ xs: 12, md: 6 }}>
                    <TextField
                      {...register("phone", {
                        required: {
                          value: true,
                          message: "Please fill out this Field",
                        },
                      })}
                      fullWidth
                      placeholder="Phone Number"
                      sx={{
                        bgcolor: "white",
                        borderRadius: "2rem",
                        "& .MuiOutlinedInput-root": {
                          borderRadius: "2rem",
                          height: "2.5rem",
                          "& input": {
                            padding: "0 10px",
                          },
                          "& input::placeholder": {
                            color: "grey",
                            opacity: 1,
                            fontSize: "0.9rem",
                            fontWeight: 500,
                            marginLeft: "10px",
                          },
                        },
                      }}
                    />
                    {errors.phone && (
                      <Typography variant="body1" color="red">
                        {errors.phone.message}
                      </Typography>
                    )}
                  </Grid>
                  <Grid size={{ xs: 12, md: 6 }}>
                    <TextField
                      {...register("subject", {
                        required: {
                          value: true,
                          message: "Please fill out this Field",
                        },
                      })}
                      fullWidth
                      placeholder="Subject"
                      sx={{
                        bgcolor: "white",
                        borderRadius: "2rem",
                        "& .MuiOutlinedInput-root": {
                          borderRadius: "2rem",
                          height: "2.5rem",
                          "& input": {
                            padding: "0 10px",
                          },
                          "& input::placeholder": {
                            color: "grey",
                            opacity: 1,
                            fontSize: "0.9rem",
                            fontWeight: 500,
                            marginLeft: "10px",
                          },
                        },
                      }}
                    />
                    {errors.subject && (
                      <Typography variant="body1" color="red">
                        {errors.subject.message}
                      </Typography>
                    )}
                  </Grid>

                  <TextField
                    {...register("comments", {
                      required: {
                        value: true,
                        message: "Please fill out this Field",
                      },
                    })}
                    id="outlined-multiline-static"
                    placeholder="Comments"
                    multiline
                    fullWidth
                    rows={2}
                    sx={{
                      bgcolor: "white",
                      borderRadius: "2rem",
                      mt: 2,
                      "& .MuiOutlinedInput-root": {
                        borderRadius: "1rem",
                        "& textarea": {
                          padding: "5px",
                        },
                      },
                    }}
                  />
                  {errors.comments && (
                    <Typography variant="body1" color="red">
                      {errors.comments.message}
                    </Typography>
                  )}

                  <Box sx={{ mt: 2 }}>
                    <FormGroup sx={{ display: "flex", gap: 0.5 }}>
                      <FormControlLabel
                        control={
                          <Checkbox
                            {...register("policy")}
                            defaultChecked
                            sx={{
                              color: "white",
                              p: 0.5,
                              px: { xs: 2.5, md: 1.5 },
                              "&.Mui-checked": {
                                color: "#BA10EC",
                              },
                            }}
                          />
                        }
                        label="I acknowledge that I have read and understood the Privacy policy of Rankerhub AI."
                        sx={{
                          m: 0,
                          "& .MuiFormControlLabel-label": {
                            color: "#aeaeb9ff",
                            fontSize: { xs: ".7rem", md: ".9rem" },
                            lineHeight: 1.4,
                            px: 1,
                          },
                          "& .MuiCheckbox-root": {
                            alignSelf: "start",
                          },
                        }}
                      />

                      <FormControlLabel
                        control={
                          <Checkbox
                            {...register("smsUpdates")}
                            defaultChecked
                            sx={{
                              color: "white",
                              p: 0.5,
                              px: 1.4,
                              "&.Mui-checked": {
                                color: "#BA10EC",
                              },
                            }}
                          />
                        }
                        label="Sign Up for SMS Updates"
                        sx={{
                          m: 0,
                          "& .MuiFormControlLabel-label": {
                            color: "#aeaeb9ff",
                            fontSize: { xs: ".7rem", md: ".9rem" },
                            lineHeight: 1.4,
                            px: 1,
                          },
                          "& .MuiCheckbox-root": {
                            alignSelf: "start",
                          },
                        }}
                      />

                      <FormControlLabel
                        control={
                          <Checkbox
                            {...register("smsConsent")}
                            sx={{
                              color: "white",
                              p: 0.5,
                              px: 2.5,
                              "&.Mui-checked": {
                                color: "#BA10EC",
                              },
                            }}
                          />
                        }
                        label="By providing a telephone number and submitting this form you are consenting to be contacted by SMS text message..."
                        sx={{
                          m: 0,
                          "& .MuiFormControlLabel-label": {
                            color: "#aeaeb9ff",
                            fontSize: { xs: ".7rem", md: ".9rem" },
                            lineHeight: 1.4,
                            px: 1,
                          },
                          "& .MuiCheckbox-root": {
                            alignSelf: "start",
                          },
                        }}
                      />

                      <FormControlLabel
                        control={
                          <Checkbox
                            {...register("noShare")}
                            sx={{
                              color: "white",
                              p: 0.5,
                              px: 2.5,
                              "&.Mui-checked": {
                                color: "#BA10EC",
                              },
                            }}
                          />
                        }
                        label="No mobile information will be shared with third parties..."
                        sx={{
                          m: 0,
                          "& .MuiFormControlLabel-label": {
                            color: "#aeaeb9ff",
                            fontSize: { xs: ".7rem", md: ".9rem" },
                            lineHeight: 1.4,
                            px: 1,
                          },
                          "& .MuiCheckbox-root": {
                            alignSelf: "start",
                          },
                        }}
                      />
                    </FormGroup>
                  </Box>
                </Grid>

                <Button
                  type="submit"
                  variant="contained"
                  sx={{
                    background: "linear-gradient(to right, #DB09F9, #631FC7)",
                    mt: 2,
                  }}
                >
                  Send Message
                </Button>
              </form>
            </Box>
          </Grid>
        </Grid>
      </Box>
                {showSuccess && (
                  <Alert
                    icon={<CheckIcon fontSize="inherit" />}
                    severity="success"
                    sx={{position:'fixed', top:'1%',left:{xs:'20%' , md: '43%'} }}
                  >
                    Form Submitted Sucessfully. 
                  </Alert>
                )}
    </>
  );
};

export default Contact;
