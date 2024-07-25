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
            "https://drive.google.com/file/d/1YU3BRG_GkVgNS23SuSI_1rEzxE1uRqSb/view?usp=sharing",
            "_blank"
        );
    };

    // id="about" class="about section" 

    // id="aboutDiv" className='aboutContainer'
    return (


        <Grid container id="about" className='about section' sx={{ width: "80%", margin: "10% auto", padding: "0% 10px" }} spacing={2}>
            <Grid item xs={12} sm={6} md={6} sx={{ margin: "auto" }}>
                <Box sx={{ borderTop: "2px solid rgb(151, 160, 161)", position: "relative" }}>
                    <Typography className='aboutHeading' variant='h4' sx={{ color: "#bfd94a", backgroundColor: "#0b0217", position: "absolute", top: "-25px", padding: "5px 5px 5px 5px", borderRadius:"8px", fontFamily: "monospace" }}>About Me</Typography>
                    <Typography id="user-detail-intro" className='aboutText' sx={{ marginTop: "8%", color: "#bfd94a", fontFamily: "monospace" }}>
                        Hello! My name is <span style={{ color: "white" }}>Sourabh</span> and I enjoy creating things that live on the internet. My interest in computers and technology started back when I was in my 6th grade and my father brought me a computer, and since then, I've been exploring various aspects of it.
                        <br /><br />
                        After my graduation, I discovered <span style={{ color: "white" }}>Web Development</span> and started my journey from there. Fast-forward to today, and I’ve worked on many projects with various tech stacks like JavaScript, Node.js, Express.js, and MongoDB. My main focus these days is building accessible and inclusive products. I'm an enthusiastic Full Stack Developer, a lifelong learner, and skilled in front-end Web Development with high adaptability to learn new technologies and attention to detail.
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