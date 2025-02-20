import React, { useState } from 'react';
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  IconButton, 
  Drawer, 
  List, 
  ListItem, 
  ListItemText, 
  Box, 
  Container 
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const navItems = [
    { name: 'Home', href: 'hero' },
    { name: 'About', href: 'about' },
    { name: 'Qualifications', href: 'experience' },
    { name: 'Skills', href: 'skills' },
    { name: 'Projects', href: 'projects' },
    { name: 'Contact', href: 'contact' }
  ];

  const drawer = (
    <Box
      sx={{
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.95)',
        backdropFilter: 'blur(10px)',
        display: 'flex',
        flexDirection: 'column',
        padding: '20px'
      }}
    >
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
        <Typography variant="h6" component={Link} to="/" 
          sx={{ 
            color: '#06d6a0',
            textDecoration: 'none',
            fontWeight: 600,
            textShadow: '0 0 10px rgba(6, 214, 160, 0.3)'
          }}
        >
          Portfolio
        </Typography>
        <IconButton
          onClick={handleDrawerToggle}
          sx={{ 
            color: '#06d6a0',
            '&:hover': {
              backgroundColor: 'rgba(6, 214, 160, 0.1)'
            }
          }}
        >
          <CloseIcon />
        </IconButton>
      </Box>
      <List sx={{ flexGrow: 1 }}>
        {navItems.map((item) => (
          <ListItem key={item.name}>
            <ListItemText>
              <ScrollLink
                to={item.href}
                spy={true}
                smooth={true}
                duration={500}
                offset={-64}
                onClick={handleDrawerToggle}
                style={{
                  color: 'white',
                  textDecoration: 'none',
                  fontSize: '1.1rem',
                  cursor: 'pointer',
                  display: 'block',
                  padding: '12px',
                  transition: 'all 0.3s ease',
                }}
                activeStyle={{ color: '#06d6a0' }}
              >
                <span style={{ 
                  transition: 'transform 0.3s, color 0.3s', 
                  display: 'inline-block', 
                  position: 'relative'
                }}
                  onMouseEnter={(e) => {
                    e.target.style.color = '#06d6a0';
                    e.target.style.transform = 'scale(1.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.color = 'white';
                    e.target.style.transform = 'scale(1)';
                  }}
                >
                  {item.name}
                  <span style={{
                    position: 'absolute',
                    bottom: '0',
                    left: '0',
                    width: '100%',
                    height: '2px',
                    backgroundColor: '#06d6a0',
                    transform: 'scaleX(0)',
                    transformOrigin: 'bottom right',
                    transition: 'transform 0.3s ease',
                  }}></span>
                </span>
              </ScrollLink>
            </ListItemText>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <AppBar position="fixed" className="navbar" elevation={0}>
      <Container maxWidth="xl">
        <Toolbar sx={{ 
          padding: '10px 0',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <Typography 
            variant="h5" 
            component={Link} 
            to="/" 
            sx={{ 
              textDecoration: 'none', 
              color: '#06d6a0',
              fontWeight: 600,
              letterSpacing: '0.5px',
              textShadow: '0 0 10px rgba(6, 214, 160, 0.3)',
              '&:hover': {
                color: '#06d6a0',
                textShadow: '0 0 15px rgba(6, 214, 160, 0.4)'
              }
            }}
            className="nav-logo"
          >
            Portfolio
          </Typography>

          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ 
              display: { md: 'none' },
              color: '#06d6a0',
              '&:hover': {
                backgroundColor: 'rgba(6, 214, 160, 0.1)'
              }
            }}
          >
            <MenuIcon />
          </IconButton>

          <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: '32px' }}>
            {navItems.map((item) => (
              <ScrollLink
                key={item.name}
                to={item.href}
                spy={true}
                smooth={true}
                duration={500}
                offset={-64}
                style={{
                  position: 'relative',
                  color: '#fff',
                  textDecoration: 'none',
                  fontSize: '1.1rem',
                  cursor: 'pointer',
                  padding: '10px',
                  transition: 'all 0.3s ease',
                }}
                activeStyle={{ color: '#06d6a0' }}
              >
                <span
                  onMouseEnter={(e) => {
                    e.target.style.color = '#06d6a0';
                    e.target.style.transform = 'scale(1.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.color = 'white';
                    e.target.style.transform = 'scale(1)';
                  }}
                  style={{
                    display: 'inline-block',
                    position: 'relative',
                  }}
                >
                  {item.name}
                  <span style={{
                    position: 'absolute',
                    bottom: '0',
                    left: '0',
                    width: '100%',
                    height: '2px',
                    backgroundColor: '#06d6a0',
                    transform: 'scaleX(0)',
                    transformOrigin: 'bottom right',
                    transition: 'transform 0.3s ease',
                  }}></span>
                </span>
              </ScrollLink>
            ))}
          </Box>
        </Toolbar>
      </Container>

      <Drawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { 
            boxSizing: 'border-box', 
            width: '100%',
            maxWidth: '400px',
            borderLeft: '1px solid rgba(6, 214, 160, 0.1)',
            boxShadow: '-4px 0 30px rgba(6, 214, 160, 0.1)'
          },
        }}
      >
        {drawer}
      </Drawer>
    </AppBar>
  );
};

export default Navbar;
