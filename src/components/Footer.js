import React from 'react';
import { Box, Container, Grid, IconButton, Typography, Link } from '@mui/material';
import { GitHub, LinkedIn, Email, Phone } from '@mui/icons-material';
import { SiLeetcode, SiGeeksforgeeks, SiCodechef, SiHackerrank } from "react-icons/si";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Box
      component="footer"
      sx={{
        height: '4rem',
        backgroundColor: '#0a192f',
        color: 'white',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Container maxWidth="lg">
        <Grid container alignItems="center" justifyContent="space-between">
          <Grid item>
            <Typography variant="body2" color="rgba(255, 255, 255, 0.7)">
              © {currentYear} All Rights Reserved
            </Typography>
          </Grid>
          <Grid item>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <IconButton
                component={Link}
                href="nithanjhonpeter@gmail.com"
                target="_blank"
                sx={{ color: 'white', '&:hover': { color: '#06d6a0' } }}
              >
                <Email />
              </IconButton>
              <IconButton
                component={Link}
                href="+91 8838427362"
                sx={{ color: 'white', '&:hover': { color: '#06d6a0' } }}
              >
                <Phone />
              </IconButton>
              <IconButton
                component={Link}
                href="https://github.com/Nithanantoj"
                target="_blank"
                rel="noopener noreferrer"
                sx={{ color: 'white', '&:hover': { color: '#06d6a0' } }}
              >
                <GitHub />
              </IconButton>
              <IconButton
                component={Link}
                href="https://www.linkedin.com/in/nithan-jhon-peter-22cs115/"
                target="_blank"
                rel="noopener noreferrer"
                sx={{ color: 'white', '&:hover': { color: '#06d6a0' } }}
              >
                <LinkedIn />
              </IconButton>
              <IconButton
                component={Link}
                href="https://leetcode.com/nithanantoj55/"
                target="_blank"
                rel="noopener noreferrer"
                sx={{ color: 'white', '&:hover': { color: '#f2c94c' } }}
              >
                <SiLeetcode size={24} />
              </IconButton>
              <IconButton
                component={Link}
                href="https://www.geeksforgeeks.org/user/nithanjhyjne/"
                target="_blank"
                rel="noopener noreferrer"
                sx={{ color: 'white', '&:hover': { color: '#2f9e44' } }}
              >
                <SiGeeksforgeeks size={24} />
              </IconButton>
              <IconButton
                component={Link}
                href="https://www.hackerrank.com/profile/nithananto_j2021"
                target="_blank"
                rel="noopener noreferrer"
                sx={{ color: 'white', '&:hover': { color: '#2ec866' } }}
              >
                <SiHackerrank size={24} />
              </IconButton>
              <IconButton
                component={Link}
                href="https://www.codechef.com/users/nithanantoj55"
                target="_blank"
                rel="noopener noreferrer"
                sx={{ color: 'white', '&:hover': { color: '#5b4638' } }}
              >
                <SiCodechef size={24} />
              </IconButton>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
