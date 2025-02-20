import React, { useState } from "react";
import { Box, Container, Typography, TextField, Button, Grid } from "@mui/material";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
    };

    emailjs
      .send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        templateParams,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        (response) => {
          console.log("Email sent successfully!", response);
          toast.success("Message sent successfully!", {
            position: "bottom-left", // Toast appears at bottom-left
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "dark",
            
          });
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          console.log("Failed to send email:", error);
          toast.error("Failed to send message. Please try again.", {
            position: "bottom-left", // Toast appears at bottom-left
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "dark",
          });
        }
      );
  };

  return (
    <Box component="section" id="contact" sx={{ py: { xs: 8, md: 12 }, color: "white" }}>
      <Container maxWidth="md">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <Typography
            variant="h2"
            sx={{
              mb: 6,
              textAlign: "center",
              fontWeight: 700,
              fontSize: { xs: "2.5rem", md: "3.5rem" },
              background: "linear-gradient(90deg, #ffffff 0%, rgba(255,255,255,0.9) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              position: "relative",
              "&::after": {
                content: '""',
                position: "absolute",
                bottom: "-10px",
                left: "50%",
                transform: "translateX(-50%)",
                width: "60px",
                height: "4px",
                background: "#06d6a0",
                boxShadow: "0 0 10px rgba(6, 214, 160, 0.5)",
              },
            }}
          >
            Get in Touch
          </Typography>
        </motion.div>

        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 4 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                name="name"
                label="Name"
                value={formData.name}
                onChange={handleChange}
                required
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": { borderColor: "rgba(255, 255, 255, 0.23)" },
                    "&:hover fieldset": { borderColor: "#06d6a0" },
                    "&.Mui-focused fieldset": { borderColor: "#06d6a0" },
                  },
                  "& .MuiInputLabel-root": { color: "rgba(255, 255, 255, 0.7)" },
                  "& .MuiInputBase-input": { color: "white" },
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                name="email"
                label="Email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": { borderColor: "rgba(255, 255, 255, 0.23)" },
                    "&:hover fieldset": { borderColor: "#06d6a0" },
                    "&.Mui-focused fieldset": { borderColor: "#06d6a0" },
                  },
                  "& .MuiInputLabel-root": { color: "rgba(255, 255, 255, 0.7)" },
                  "& .MuiInputBase-input": { color: "white" },
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                name="message"
                label="Message"
                multiline
                rows={4}
                value={formData.message}
                onChange={handleChange}
                required
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": { borderColor: "rgba(255, 255, 255, 0.23)" },
                    "&:hover fieldset": { borderColor: "#06d6a0" },
                    "&.Mui-focused fieldset": { borderColor: "#06d6a0" },
                  },
                  "& .MuiInputLabel-root": { color: "rgba(255, 255, 255, 0.7)" },
                  "& .MuiInputBase-input": { color: "white" },
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                type="submit"
                variant="contained"
                fullWidth
                sx={{
                  mt: 2,
                  py: 1.5,
                  backgroundColor: "#06d6a0",
                  "&:hover": { backgroundColor: "#05c090" },
                }}
              >
                Send Message
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Container>

      {/* Toast Container (Left Bottom) */}
      <ToastContainer
        position="bottom-left"
        autoClose={3000}
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
        draggable
        theme="dark"
      />
    </Box>
  );
};

export default Contact;
