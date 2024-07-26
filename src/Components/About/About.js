import { Box, Button, Grid, Slide, Typography, Zoom } from '@mui/material'
import React, { useEffect, useState } from 'react'
import "./About.css"
import ProfilePic from '../../media/ProfilePic.jpg'
import LinearDeterminate from '../MiniComponent/ProgressComp';
import Resume from '../../media/Resume-Sourabh.pdf';

const About = () => {
    const [checked1, setChecked1] = useState(false);
    const [checked2, setChecked2] = useState(false);
    const [scrolled, setScrolled] = useState(0);

    window.addEventListener("scroll", () => {
        setScrolled(document.documentElement.scrollTop);
    })

    if (scrolled >= 56) {
        setTimeout(() => {
            setChecked1(true)
        }, 600)
        setTimeout(() => {
            setChecked2(true)
        }, 800)
    }

    const openResume = () => {
        window.open(
            "https://drive.google.com/file/d/1o0JzAGzA9NvrzWXilvzDPX-S7PDmbRCT/view?usp=sharing",
            "_blank"
        );
    };

    // id="about" class="about section" 

    // id="aboutDiv" className='aboutContainer'
    return (


        <Grid container id="about" className='about section' sx={{ width: "80%", margin: "10% auto", padding: "0% 10px" }} spacing={2}>
            <Grid item xs={12} sm={7} md={6} sx={{ margin: "auto" }}>
                <Box sx={{ borderTop: "2px solid rgb(151, 160, 161)", position: "relative" }}>
                    <Typography className='aboutHeading' variant='h4' sx={{ color: "#bfd94a", backgroundColor: "#0b0217", position: "absolute", top: "-25px", padding: "5px 5px 5px 5px", borderRadius:"8px", fontFamily: "monospace" }}>About Me</Typography>
                    <Typography id="user-detail-intro" className='aboutText' sx={{ marginTop: "8%", color: "#00FF41", fontFamily: "monospace" }}>
                        Hello! My name is <span style={{ color: "#00FF41" }}>Sourabh</span>.My journey into the world of technology began in the 6th grade when my father brought home our first computer. Fascinated by its capabilities, I immersed myself in exploring various aspects of computing. This early interest blossomed into a passion that led me to pursue a career in Web Development after graduation. Over the years, I’ve had the opportunity to work on numerous projects utilizing diverse tech stacks such as JavaScript, Node.js, Express.js, and MongoDB.
                        <br /><br />
                        Today, my focus is on building accessible and inclusive products. As a <span style={{color:"#00FF41"}}>Full Stack Developer</span>, I pride myself on my adaptability and continuous learning. My keen attention to detail and commitment to creating user-friendly experiences drive my work in front-end Web Development. I'm dedicated to staying updated with the latest technologies to ensure that my projects are both innovative and impactful.
                    </Typography>
                    <Box id="resumeBtn" onClick={openResume} marginTop='1.5rem' sx={{ display: "flex", justifyContent: "center" }}>
                        <Button variant="outlined" href={Resume} download="Resume-Sourabh" id="resume-button-2" sx={{ border: "1px solid #a39e56", color: "#a39e56", fontSize: "0.8rem", fontFamily: "monospace", margin: "auto" }}>Resume</Button>
                        <LinearDeterminate color={"transparent"} />
                    </Box>
                </Box>
            </Grid>
            <Grid item xs={12} sm={5} sx={{ margin: "auto" }}>
                <Box className='imageContainer' sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <img className='home-img' style={{ display: "block", margin: "auto", borderRadius: "20px" }} width={"250px"} src={ProfilePic} />
                </Box>
            </Grid>
        </Grid>
    )
}

export default About