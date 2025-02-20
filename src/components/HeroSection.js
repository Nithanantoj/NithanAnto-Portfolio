import React from 'react';
import { Container, Typography, Box, Button } from '@mui/material';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { styled } from '@mui/material/styles';
import DownloadIcon from '@mui/icons-material/Download';
import SendIcon from '@mui/icons-material/Send';
import Marquee from 'react-fast-marquee';
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';


const StyledButton = styled(Button)(({ theme, variant }) => ({
  borderRadius: '30px',
  padding: '12px 32px',
  fontSize: '1rem',
  textTransform: 'none',
  fontWeight: 500,
  letterSpacing: '0.5px',
  transition: 'all 0.3s ease',
  ...(variant === 'contained' && {
    backgroundColor: '#06d6a0',
    color: '#ffffff',
    '&:hover': {
      backgroundColor: '#05c090',
      transform: 'translateY(-3px)',
      boxShadow: '0 6px 20px rgba(6, 214, 160, 0.3)'
    }
  }),
  ...(variant === 'outlined' && {
    borderColor: '#06d6a0',
    color: '#06d6a0',
    '&:hover': {
      borderColor: '#06d6a0',
      backgroundColor: 'rgba(6, 214, 160, 0.1)',
      transform: 'translateY(-3px)'
    }
  })
}));

const HeroSection = () => {
  return (
    <Box
      component="section"
      id="hero"
      sx={{
        position: "relative",
        minHeight: "80vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        pt: { xs: 12, md: 18 },
      }}
    >
      <Container maxWidth="xl" sx={{ mt: { xs: -6, md: -10 } }}> 
        <Box
          sx={{
            top: { xs: 0, md: 10 },
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: { xs: 8, md: 4 }
          }}
        >
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            style={{ flex: 1 }}
          >
            <Box 
              sx={{ 
                maxWidth: '800px',
                textAlign: { xs: 'center', md: 'left' },
                ml: { xs: 0, md: 20 },
                mt: { xs: 0, md: -6 }
              }}
            >
              <Typography 
                variant="h2" 
                component="h1" 
                sx={{ 
                  fontWeight: 600,
                  color: 'white',
                  mb: 1.5,
                  fontSize: { xs: '2.8rem', md: '4rem' },
                  lineHeight: 1.1
                }}
              >
                Hello, I'm
              </Typography>
              <Typography 
                variant="h2" 
                component="div"
                sx={{ 
                  fontWeight: 700,
                  color: '#06d6a0',
                  mb: 2.5,
                  fontSize: { xs: '2.8rem', md: '4.2rem' },
                  lineHeight: 1.1,
                  textShadow: '2px 2px 4px rgba(6, 214, 160, 0.3)',
                  position: 'relative',
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    bottom: '-15px',
                    left: { xs: '50%', md: '0' },
                    transform: { xs: 'translateX(-50%)', md: 'translateX(0)' },
                    width: '80px',
                    height: '4px',
                    background: '#06d6a0',
                    boxShadow: '0 0 10px rgba(6, 214, 160, 0.5)'
                  }
                }}
              >
                Nithan Anto J
              </Typography>
              <Box 
                sx={{ 
                  mb: 4, 
                  height: '45px',
                  display: 'flex',
                  justifyContent: { xs: 'center', md: 'flex-start' }
                }}
              >
                <TypeAnimation
                  sequence={[
                    'Innovator',
                    2000,
                    'Creator',
                    2000,
                    'Problem Solver',
                    2000
                  ]}
                  wrapper="span"
                  speed={50}
                  style={{
                    fontSize: '2rem',
                    color: '#06d6a0',
                    opacity: 0.9,
                    fontWeight: 500
                  }}
                  repeat={Infinity}
                />
              </Box>
              <Typography 
                variant="h5" 
                sx={{ 
                  color: 'rgba(255, 255, 255, 0.8)',
                  mb: 5,
                  fontWeight: 400,
                  fontSize: { xs: '1.3rem', md: '1.8rem' }
                }}
              >
                Full Stack Software Developer
              </Typography>
              <Box 
                sx={{ 
                  display: 'flex', 
                  gap: 3,
                  flexDirection: { xs: 'column', sm: 'row' },
                  justifyContent: { xs: 'center', md: 'flex-start' }
                }}
              >
                <ScrollLink to="contact" smooth={true} duration={800}>
                  <StyledButton 
                    variant="contained"
                    endIcon={<SendIcon />}
                    sx={{
                      fontSize: { xs: '1rem', md: '1.1rem' },
                      padding: '14px 36px'
                    }}
                  >
                    Get in Touch
                  </StyledButton>
                </ScrollLink> 
                <StyledButton 
                  variant="outlined"
                  href="https://drive.google.com/drive/folders/1FJ0oa0Ra4gSHgtvGLisRSjagY-M1iV-k?usp=drive_link"
                  endIcon={<DownloadIcon />}
                  sx={{
                    fontSize: { xs: '1rem', md: '1.1rem' },
                    padding: '14px 36px'
                  }}
                >
                  Download CV
                </StyledButton>
              </Box>
            </Box>
          </motion.div>

          {/* Right Content - Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
            style={{ 
              flex: 1,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'flex-start',
              paddingTop: '40px'
            }}
          >
            <Box
              sx={{
                position: 'relative',
                width: { xs: '280px', sm: '400px', md: '450px' },
                height: { xs: '280px', sm: '400px', md: '450px' },
                mr: { xs: 0, md: 4 },
                mt: { xs: 0, md: -4 },
                transform: { xs: 'none', md: 'translateY(-20px)' },
                borderRadius: '50%',
                padding: '4px',
                background: 'linear-gradient(145deg, rgba(6, 214, 160, 0.3), rgba(6, 214, 160, 0.1))',
                boxShadow: `
                  0 0 30px rgba(6, 214, 160, 0.3),
                  0 0 60px rgba(6, 214, 160, 0.2),
                  0 0 90px rgba(6, 214, 160, 0.1),
                  inset 0 0 30px rgba(6, 214, 160, 0.3)
                `,
                animation: 'glow 3s ease-in-out infinite alternate',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: '-2px',
                  left: '-2px',
                  right: '-2px',
                  bottom: '-2px',
                  background: 'linear-gradient(45deg, rgba(6, 214, 160, 0.4), transparent)',
                  borderRadius: '50%',
                  zIndex: 0,
                  animation: 'spin 10s linear infinite'
                }
              }}
            >
              {/* Profile Image */}
              <Box
                component="img"
                src="/assets/mine.jpeg"
                alt="Nithan Anto J"
                sx={{
                  position: 'relative',
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  borderRadius: '50%',
                  zIndex: 1,
                  transition: 'transform 0.3s ease',
                  '&:hover': {
                    transform: 'scale(1.02)'
                  }
                }}
              />
            </Box>
          </motion.div>
        </Box>
      </Container>
      {/* Marquee Section - Positioned at the Bottom */}
      <Box
        sx={{
          position: "absolute",
          bottom: 0,
          width: "100%",
          backgroundColor: "#06d6a0",
          py: 2,
        }}
      >
        <Marquee gradient={false} speed={50} pauseOnHover>
  <Typography
    variant="h4" // Increased text size
    sx={{
      color: "white",
      fontWeight: 600,
      fontSize: "1.5rem",
      mx: 6, // Increased horizontal spacing
      letterSpacing: "0.1em", // Adds spacing between characters
    }}
  >
    Student @ SECE'26 &nbsp; • &nbsp; Full-Stack Developer &nbsp; • &nbsp; MERN Stack Enthusiast &nbsp; • &nbsp; Postman API Student Expert &nbsp; • &nbsp; Competitive Programmer &nbsp; • 
  </Typography>
</Marquee>

      </Box>
    </Box>
  );
};

export default HeroSection;
