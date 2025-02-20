import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, CardMedia, Chip, Link } from '@mui/material';
import { motion } from 'framer-motion';
import Thought from './assets/Thought-canvas.png';
import HMS from './assets/OIP.jpeg';
import SpotIntern from './assets/SpotIntern.png';

const Projects = () => {
  const projects = [
    {
      name: "Thought Canvas",
      image: Thought,
      github: "https://github.com/Nithanantoj/Thought-canvas",
      techStack: ["React", "Node.js", "MongoDB", "Express", "JWT", "bcrypt"],
      description: "Thought Canvas is a secure and intuitive notes-making application that allows users to create, edit, delete, and share notes seamlessly. With robust authentication, password encryption, and easy sharing via email and WhatsApp, it simplifies note management for users of all backgrounds."
    },
    {
      name: "HMS",
      image: HMS,
      github: "https://github.com/Nithanantoj/Hospital_Management_System.git",
      techStack: ["React", "Node.js", "MongoDB", "Express", "JWT", "bcrypt", "Material UI", ],
      description: "A Hospital Management System (HMS) is a software solution that streamlines hospital operations, including patient records, appointments, billing, and staff management. It enhances efficiency, reduces errors, and improves patient care."
    },
    {
      name: "SpotIntern",
      image: SpotIntern,
      github: "https://github.com/Nithanantoj/SpotIntern.git",
      techStack: ["React", "Node.js", "MongoDB", "Express", "JWT", "bcrypt", "Tailwind CSS",],
      description: "SpotIntern is a platform that helps college students discover and apply for internships by providing real-time notifications via email and WhatsApp. It uses web scraping to fetch internship listings from various sources, ensuring students stay updated on new opportunities."
    }
  ];

  return (
    <Box component="section" id="projects" sx={{ py: { xs: 8, md: 12 }, position: 'relative', color: 'white' }}>
      <Container maxWidth="lg">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <Typography
            variant="h2"
            sx={{
              mb: 6,
              textAlign: 'center',
              fontWeight: 700,
              fontSize: { xs: '2.5rem', md: '3.5rem' },
              background: 'linear-gradient(90deg, #ffffff 0%, rgba(255,255,255,0.9) 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              position: 'relative',
              '&::after': {
                content: '""',
                position: 'absolute',
                bottom: '-10px',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '60px',
                height: '4px',
                background: '#06d6a0',
                boxShadow: '0 0 10px rgba(6, 214, 160, 0.5)'
              }
            }}
          >
            Projects
          </Typography>
        </motion.div>

        <Grid container spacing={4} justifyContent="center">
          {projects.map((project, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    background: 'rgba(255, 255, 255, 0.05)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    transition: 'transform 0.3s ease-in-out',
                    '&:hover': {
                      transform: 'scale(1.08)', // Bulky effect
                    },
                    '&:hover .description': {
                      height: 'auto',
                      opacity: 1,
                      paddingTop: '10px'
                    }
                  }}
                >
                  <CardMedia component="img" height="200" image={project.image} alt={project.name} sx={{ objectFit: 'cover' }} />
                  <CardContent>
                    <Link
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{
                        textDecoration: 'none',
                        color: '#06d6a0',
                        '&:hover': { textDecoration: 'underline' }
                      }}
                    >
                      <Typography variant="h5" component="div" gutterBottom>
                        {project.name}
                      </Typography>
                    </Link>
                    <Box
                      className="description"
                      sx={{
                        height: 0,
                        opacity: 0,
                        overflow: 'hidden',
                        transition: 'height 0.3s ease-in-out, opacity 0.3s ease-in-out'
                      }}
                    >
                      <Typography variant="body2" color="text.secondary" sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                        {project.description}
                      </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mt: 2 }}>
                      {project.techStack.map((tech, techIndex) => (
                        <Chip
                          key={techIndex}
                          label={tech}
                          sx={{
                            backgroundColor: 'rgba(6, 214, 160, 0.1)',
                            color: '#06d6a0',
                            border: '1px solid #06d6a0',
                            '&:hover': { backgroundColor: 'rgba(6, 214, 160, 0.2)' }
                          }}
                        />
                      ))}
                    </Box>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Projects;
