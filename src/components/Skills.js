import React from 'react';
import { Box, Container, Typography, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import { SiRender } from "react-icons/si";
// Importing developer icons


import { C, Java, JavaScript, Python, HTML5, CSS3, TailwindCSS, GitHubLight,MaterialUI, Dart, Flutter, React as ReactIcon,Postman, NodeJs, ExpressJsLight, Spring, Figma, Git, VercelLight, Render, Canva, MongoDB, MySQL } from 'developer-icons';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: [
        { name: 'C', icon: <C />, color: '#2962ff' },
        { name: 'Java', icon: <Java />, color: '#f89820' },
        { name: 'JavaScript', icon: <JavaScript />, color: '#f0db4f' },
        { name: 'Python', icon: <Python />, color: '#ffd43b' }
      ]
    },
    {
      title: 'Frontend Development',
      skills: [
        { name: 'HTML5', icon: <HTML5 />, color: '#ff6d00' },
        { name: 'CSS3', icon: <CSS3 />, color: '#2196f3' },
        { name: 'Tailwind CSS', icon: <TailwindCSS />, color: '#00bcd4' },
        { name: 'Material UI', icon: <MaterialUI />, color: '#007fff' },
        { name: 'Dart', icon: <Dart />, color: '#00e5ff' },
        { name: 'Flutter', icon: <Flutter />, color: '#40c4ff' },
        { name: 'React.js', icon: <ReactIcon />, color: '#00b0ff' }
      ]
    },
    {
      title: 'Backend Development',
      skills: [
        { name: 'Node.js', icon: <NodeJs />, color: '#4caf50' },
        { name: 'Express.js', icon: <ExpressJsLight />, color: '#76ff03' },
        { name: 'Spring Boot', icon: <Spring />, color: '#64dd17' }
      ]
    },
    {
      title: 'Databases',
      skills: [
        { name: 'MongoDB', icon: <MongoDB />, color: '#4caf50' },
        { name: 'MySQL', icon: <MySQL />, color: '#00758f' }
      ]
    },
    {
      title: 'Tools & Platforms',
      skills: [
        { name: 'Git', icon: <Git />, color: '#f4511e' },
        { name: 'GitHub', icon: <GitHubLight/> , color: '#d500f9' },
        { name: 'Postman', icon: <Postman/> , color: '#d500f9' },
        { name: 'Vercel', icon: <VercelLight />, color: '#000000' },
        { name: 'Render', icon: <SiRender />, color: '#1e88e5' },
        { name: 'Canva', icon: <Canva />, color: '#00bfa5' },
        { name: 'Figma', icon: <Figma />, color: '#f50057' }
      ]
    }
  ];

  return (
    <Box component="section" id="skills" sx={{ py: -6, color: 'white', scrollMarginTop: '80px' }}>
      <Container maxWidth="lg" sx={{ background: 'transparent', p: 4, borderRadius: '16px', boxShadow: '0 0 15px rgba(249, 248, 248, 0)', mt: 6, textAlign: 'center' }}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <Typography variant="h4" sx={{ textAlign: "center", fontWeight: 700, fontSize: "2.5 rem", mb: 4, color: "#E3F2FD" }}>
<span style={{ fontWeight: 400, color: "#06d6a0" }}>What I Know</span> <br></br> Skills & Technologies
  
</Typography>
        </motion.div>

        <Box sx={{ mt: 4 }}>
          {skillCategories.map((category, index) => (
            <motion.div key={index} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.1 }}>
              <Typography variant="h4" sx={{ mb: 3, color: '#06d6a0', fontWeight: 600 }}>{category.title}</Typography>
              <Grid container spacing={6} sx={{ mb: 5, justifyContent: 'center' }}>
                {category.skills.map((skill, skillIndex) => (
                  <Grid item xs={6} sm={4} md={3} lg={1.714} sx={{ flexBasis: '14.2857%' }} key={skillIndex}>
                    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                      <Box sx={{ p: 2, borderRadius: 2, '&:hover .icon': { transform: 'scale(1.2)' } }}>
                      <Box
  className="icon"
  sx={{
    fontSize: '3rem',
    mb: 1,
    borderRadius: '10px', 
    boxShadow: '0 0 10px 0.1px rgb(63, 224, 184)',
    backgroundColor: '#000000',
    width: '64px',
    height: '64px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    p: 2
  }}
>
  {skill.icon}
</Box>


                        <Typography variant="body1" sx={{ color: 'white', fontWeight: 500 }}>{skill.name}</Typography>
                      </Box>
                    </motion.div>
                  </Grid>
                ))}
              </Grid>
            </motion.div>
          ))}
        </Box>
      </Container>
    </Box>
  );  
};

export default Skills;
