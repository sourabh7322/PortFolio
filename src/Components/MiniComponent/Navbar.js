// Navbar.js
import { Box, Button, Drawer, List, ListItem, ListItemText, Slide, Typography, IconButton } from "@mui/material";
import React, { useEffect, useState, useContext } from "react";
import LinearDeterminate from "./ProgressComp";
import "./Navbar.css";
import { details } from "../../details";
import Resume from '../../media/Resume-Sourabh.pdf';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import { Link } from 'react-scroll';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { ThemeContext } from '../../ThemeContext'; // Import ThemeContext

const Navbar = ({ scrollHandle }) => {
  const { darkMode, toggleTheme } = useContext(ThemeContext); // Access context values
  const [checked, setChecked] = useState(false);
  const [hoverEffect, setHoverEffect] = useState(0);
  const [scrolled, setScrolled] = useState(0);
  const [open, setOpen] = useState(false);

  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  const introLoaded = () => {
    setTimeout(() => {
      setChecked(true);
    }, 600);
  };

  useEffect(() => {
    introLoaded();
  }, []);

  const openResume = () => {
    window.open(
      "https://drive.google.com/file/d/1o0JzAGzA9NvrzWXilvzDPX-S7PDmbRCT/view?usp=sharing", "_blank"
    );
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(document.documentElement.scrollTop);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Box
      id="nav-menu"
      className={scrolled >= 100 ? "navbarboxShadow" : ""}
      sx={{
        display: "flex",
        justifyContent: "space-between",
        width: "100%",
        padding: "5px 1%",
        position: "sticky",
        top: "0%",
        zIndex: "10",
        backgroundColor: darkMode ? "black" : "#fff", // Background color based on theme
        color: darkMode ? "#fff" : "#333", // Text color based on theme
      }}
    >
      <Box
        sx={{
          width: "100%",
          padding: "0% 25px",
          display: "flex",
          alignItems: "center",
          gap: "5px",
          color: darkMode ? "#00FF41" : "#333", // Color based on theme
        }}
      >
        <Typography sx={{ fontFamily: "monospace", fontSize: "2rem", fontWeight: '500', textShadow: darkMode ? "0 10px 10px white" : "0 10px 10px black" }} variant='h1'>
          My Portfolio
        </Typography>
      </Box>
      <Box className="logoBox" sx={{ display: "none" }}>
      </Box>
      <Box
        className="navbar-part-2"
        p='1rem'
        sx={{
          display: "flex",
          width: "80%",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {
          details.navList.map((ele, index) => (
            <Link
              key={index}
              to={details.className[index]}
              spy={true}
              smooth={true}
              offset={-150}
              duration={500}
            >
              <Slide direction="down" in={checked}>
                <Box
                  className="navbarList"
                  sx={{ cursor: "pointer" }}
                  onMouseOut={() => setHoverEffect(0)}
                  onMouseOver={() => setHoverEffect(index + 1)}
                >
                  <Typography className={ele?.val2} variant="h5" sx={{ fontSize: "1.1rem", fontFamily: "monospace", color: darkMode ? '#00FF41' : '#333' }}>{ele.val1}</Typography>
                  {hoverEffect === index + 1 ? (
                    <LinearDeterminate color={"white"} />
                  ) : (
                    <Box sx={{ height: "4px" }}></Box>
                  )}
                </Box>
              </Slide>
            </Link>
          ))
        }

        <Box className='nav-link resume' onClick={openResume}>
          <a href={Resume} download='Resume-Sourabh'>
            <Button variant="outlined"
              download={Resume}
              id="resume-button-1"
              sx={{
                border: darkMode ? "1px solid #70d94a" : "1px solid #333",
                color: darkMode ? "#00FF41" : "#333",
                fontSize: "0.8rem",
                fontFamily: "monospace",
              }}>Resume</Button>
          </a>

          <LinearDeterminate color={"transparent"} />
        </Box>

        <Box className="ham" sx={{ display: "none", color: darkMode ? "#70d94a" : "#333" }} >
          <MenuOutlinedIcon onClick={handleDrawerToggle} />
          <Drawer
            sx={{
              width: 300,
              flexShrink: 0,
              '& .MuiDrawer-paper': {
                width: 300,
                backgroundColor: darkMode ? '#00FF41' : '#fff',
                color: darkMode ? '#bfd94a' : '#333',
              },
            }}
            variant="temporary"
            anchor="right"
            open={open}
            onClose={handleDrawerToggle}
          >
            <List sx={{ marginTop: '50px' }}>
              {details.navList.map((ele, index) => (
                <ListItem button key={index}>
                  <Link
                    activeClass="active"
                    to={details.className[index]}
                    spy={true}
                    smooth={true}
                    offset={-150}
                    duration={500}
                    onClick={handleDrawerToggle}
                  >
                    <ListItemText primary={ele.val1} sx={{ textAlign: 'center' }} />
                  </Link>
                </ListItem>
              ))}
            </List>
          </Drawer>
        </Box>

        <IconButton sx={{ ml: 1, color: darkMode ? "#70d94a" : "#333" }} onClick={toggleTheme}>
          {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
        </IconButton>
      </Box>
    </Box>
  );
};

export default Navbar;
