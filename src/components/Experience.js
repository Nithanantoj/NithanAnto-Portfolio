import React from "react";
import { Box, Container, Grid, Typography, Card, CardContent, Avatar } from "@mui/material";
import DonBosco from "./assets/don-bosco.jpg"
import Eshwar from "./assets/srieshwar_logo.jpeg";
import Better from "./assets/bettrer-tommorow.jpg";

const qualifications = {
  education: [
    {
      title: "B.E. Computer Science and Engineering",
      institution: "Sri Eshwar College of Engineering",
      period: "2022 - 2026",
      details: "Current CGPA: 7.5/10",
      logo: Eshwar,
    },
    {
      title: "Higher Secondary Certificate (HSC)",
      institution: "Don Bosco Higher Secondary School",
      period: "2020 - 2022",
      details: "Final Percentage: 90.5%",
      logo: DonBosco, 
    },
  ],
  experience: [
    {
      title: "Full Stack Developer Intern",
      company: "Better Tomorrow",
      period: "Feb 2024 - Mar 2024",
      responsibilities: [
        "Developed and optimized web applications using React.js and Node.js.",
        "Implemented responsive UI design for better user experience.",
        "Integrated backend APIs and enhanced cross-browser compatibility.",
      ],
      logo: Better, 
    },
  ],
};

const Qualifications = () => {
  return (
    <Box
          component="section"
          id="experience"
          sx={{
            position: "relative",
            minHeight: "80vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            pt: { xs: -2, md: 4 },
          }}
        >
      <Container maxWidth="lg">
        <Typography variant="h4" sx={{ textAlign: "center", fontWeight: 700, fontSize: "2.5 rem", mb: 4, color: "#E3F2FD" }}>
          <span style={{ fontWeight: 400, color: "#06d6a0" }}>Here's My</span> <br></br> Qualifications
        </Typography>
        <Grid container spacing={4}>
          {/* Education Section */}
          <Grid item xs={12} md={6}>
            <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2 }}>
              Education
            </Typography>
            {qualifications.education.map((edu, index) => (
              <Card
                key={index}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  background: "rgba(255, 255, 255, 0.05)",
                  backdropFilter: "blur(10px)",
                  boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
                  color: "#E3F2FD",
                  mb: 3,
                  borderLeft: "4px solid #FF6F61",
                  padding: 2,
                }}
              >
                <Avatar
                  src={edu.logo}
                  alt={edu.institution}
                  sx={{ width: 50, height: 50, mr: 2}}
                />
                <CardContent>
                  <Typography variant="h6" sx={{ fontWeight: "bold", color: "#06d6a0"}}>
                    {edu.title}
                  </Typography>
                  <Typography variant="body2" color="inherit">
                    {edu.institution} / {edu.period}
                  </Typography>
                  <Typography variant="body2" sx={{ mt: 1 }}>
                    {edu.details}
                  </Typography>
                </CardContent>
              </Card>
            ))}
          </Grid>

          {/* Experience Section */}
          <Grid item xs={12} md={6}>
            <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2 }}>
              Experience
            </Typography>
            {qualifications.experience.map((exp, index) => (
              <Card
                key={index}
                sx={{
                  background: "rgba(255, 255, 255, 0.05)",
                  backdropFilter: "blur(10px)",
                  boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
                  color: "#E3F2FD",
                  mb: 3,
                  borderLeft: "4px solid #FF6F61",
                  paddingLeft: 2,
                }}
              >
                <CardContent>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 1 }}>
                    <img src={exp.logo} alt={exp.company} width="50" height="50" style={{ borderRadius: "50%" }} />
                    <Box>
                      <Typography variant="h6" sx={{ fontWeight: "bold", color: "#06d6a0" }}>
                        {exp.title}
                      </Typography>
                      <Typography variant="body2" color="inherit">
                        {exp.company} / {exp.period}
                      </Typography>
                    </Box>
                  </Box>
                  <Typography variant="body2" sx={{ mt: 1 }}>
                    Responsibilities:
                  </Typography>
                  <ul>
                    {exp.responsibilities.map((res, idx) => (
                      <li key={idx} style={{ fontSize: "14px", color: "#E3F2FD" }}>
                        {res}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Qualifications;
