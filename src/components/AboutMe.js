import React from 'react';
import { Box, Container, Typography, Grid } from '@mui/material';
import CodeIcon from '@mui/icons-material/Code';
import GroupsIcon from '@mui/icons-material/Groups';
import AutoGraphIcon from '@mui/icons-material/AutoGraph';

const AboutMe = () => {
  const keyPoints = [
    {
      icon: <CodeIcon sx={{ fontSize: '2rem', color: '#06d6a0' }} />,
      title: 'Problem Solver',
      description: 'Passionate about tackling complex technical challenges and finding elegant solutions.'
    },
    {
      icon: <GroupsIcon sx={{ fontSize: '2rem', color: '#06d6a0' }} />,
      title: 'Team Collaborator',
      description: 'Experienced in working with cross-functional teams to deliver high-impact projects.'
    },
    {
      icon: <AutoGraphIcon sx={{ fontSize: '2rem', color: '#06d6a0' }} />,
      title: 'Continuous Learner',
      description: 'Always exploring new technologies and staying updated with industry best practices.'
    }
  ];

  return (
    <Box
      id="about"
      sx={{
        py: { xs: 8, md: 12 },
        color: 'white',
        position: 'relative'
      }}
    >
      <Container maxWidth="xl">
        <Grid container spacing={6} alignItems="center">
          {/* Image Section */}
          <Grid item xs={12} md={5}>
            <Box
              sx={{
                position: 'relative',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: '-10px',
                  left: '30px',
                  right: '-10px',
                  bottom: '-10px',
                  background: 'transparent',
                  borderRadius: '20px',
                  zIndex: 0
                }
              }}
            >
              <Box
                component="img"
                src="/assets/mine.jpeg"
                alt="About Me"
                sx={{
                  left: '110px',
                  width: '65%',
                  height: '70%',
                  borderRadius: '0px',
                  position: 'relative',
                  zIndex: 1,
                  boxShadow: '20px 20px 0 0  #06d6a0',
                  transition: 'transform 0.3s ease',
                  '&:hover': {
                    transform: 'scale(1.02)'
                  }
                }}
              />
            </Box>
          </Grid>

          {/* Content Section */}
          <Grid item xs={12} md={7}>
            <Box sx={{ pl: { md: 6 } }}>
              <Typography 
                variant="h2" 
                sx={{ 
                  mb: 4,
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
                    left: 0,
                    width: '60px',
                    height: '4px',
                    background: '#06d6a0',
                    boxShadow: '0 0 10px rgba(6, 214, 160, 0.5)'
                  }
                }}
              >
                About Me
              </Typography>

              <Typography 
                variant="body1" 
                sx={{ 
                  mb: 4,
                  fontSize: { xs: '1.1rem', md: '1.2rem' },
                  lineHeight: 1.8,
                  color: 'rgba(255, 255, 255, 0.9)'
                }}
              >
                A passionate Full Stack Developer dedicated to building user-centric, scalable web applications. 
                Skilled in solving complex challenges, I thrive on delivering impactful digital experiences. 
                I enjoy collaborating, exploring emerging technologies, and contributing to open-source projects.
              </Typography>

              <Grid container spacing={4}>
                {keyPoints.map((point, index) => (
                  <Grid item xs={12} sm={6} md={4} key={index}>
                    <Box
                      sx={{
                        p: 3,
                        height: '100%',
                        background: 'rgba(6, 214, 160, 0.05)',
                        borderRadius: '16px',
                        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                        '&:hover': {
                          transform: 'translateY(-5px)',
                          boxShadow: '0 10px 30px rgba(6, 214, 160, 0.1)'
                        }
                      }}
                    >
                      <Box sx={{ mb: 2 }}>{point.icon}</Box>
                      <Typography 
                        variant="h6" 
                        sx={{ 
                          mb: 1,
                          fontWeight: 600,
                          color: '#06d6a0'
                        }}
                      >
                        {point.title}
                      </Typography>
                      <Typography 
                        variant="body2"
                        sx={{
                          color: 'rgba(255, 255, 255, 0.8)',
                          lineHeight: 1.6
                        }}
                      >
                        {point.description}
                      </Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default AboutMe;
