import { Box, Button, TextField, Typography, InputLabel } from '@mui/material';
import React, { useState, useContext } from 'react';
import emailjs from 'emailjs-com';
import "./Contact.css";
import { ThemeContext } from '../../ThemeContext';

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const { darkMode, toggleTheme } = useContext(ThemeContext);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_p9m6k4j', 'template_6q2fw14', e.target, '3FymQ55-yJvxSdfm5')
            .then((result) => {
                console.log(result.text);
                alert("Message sent successfully!");
            }, (error) => {
                console.log(error.text);
                alert("Failed to send the message. Please try again.");
            });
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <>
            <Typography 
                variant='h2' 
                sx={{ 
                    textAlign: "center", 
                    fontWeight: "600", 
                    color: "#bfd94a", 
                    fontFamily: "monospace",
                    marginTop:"50px"
                }}
            >
                Contact Me
            </Typography>
            <Box 
                id="contactDiv" 
                sx={{ 
                    width: { xs: '90%', md: '60%' }, 
                    margin: "10px auto", 
                    padding: "20px", 
                    backgroundColor: darkMode ? "black" : "#fff",
                    borderRadius: "10px",
                    boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px"
                }}
            >
                <Box 
                    sx={{ 
                        display: 'flex', 
                        flexDirection: 'column', 
                        alignItems: 'center', 
                        marginBottom: '20px',
                        color: darkMode ? "#fff" : "#333",
                        fontFamily: "monospace"
                    }}
                >
                    <InputLabel 
                        htmlFor="email" 
                        sx={{ display: 'flex', alignItems: 'center', marginBottom: '10px',color: darkMode ? "#fff" : "#333",fontFamily: "monospace",fontSize: "1.5rem", fontWeight: '500' }}
                    >  
                        <i className="fa-solid fa-envelope" style={{ marginRight: '10px' }}></i>
                        Email: sourabhrawat77200@gmail.com
                    </InputLabel>
                    <InputLabel 
                        htmlFor="phone" 
                        sx={{ display: 'flex', alignItems: 'center',color: darkMode ? "#fff" : "#333" ,fontFamily: "monospace",fontSize: "1.5rem", fontWeight: '500'}}
                    >
                        <i className="fa-solid fa-phone" style={{ marginRight: '10px' }}></i>
                        Phone number: 7906834867
                    </InputLabel>
                </Box>

                <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
                    <InputLabel 
                        htmlFor="name" 
                        sx={{ color: "#00FF41", marginBottom: "5px", fontFamily: "monospace",fontSize: "1.5rem", fontWeight: '500' }}
                    >
                        Name
                    </InputLabel>
                    <TextField
                        fullWidth
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        sx={{ 
                            mb: 3, 
                            backgroundColor: '#fff', 
                            borderRadius: "5px",
                            '& .MuiOutlinedInput-root': {
                                '& fieldset': {
                                    borderColor: '#bfd94a',
                                },
                                '&:hover fieldset': {
                                    borderColor: '#00FF41',
                                },
                                '&.Mui-focused fieldset': {
                                    borderColor: '#00FF41',
                                },
                            }
                        }}
                    />
                    <InputLabel 
                        htmlFor="email" 
                        sx={{ color: "#00FF41", marginBottom: "5px", fontFamily: "monospace",fontSize: "1.5rem", fontWeight: '500' }}
                    >
                        Email
                    </InputLabel>
                    <TextField
                        fullWidth
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        type="email"
                        sx={{ 
                            mb: 3, 
                            backgroundColor: '#fff', 
                            borderRadius: "5px",
                            '& .MuiOutlinedInput-root': {
                                '& fieldset': {
                                    borderColor: '#bfd94a',
                                },
                                '&:hover fieldset': {
                                    borderColor: '#00FF41',
                                },
                                '&.Mui-focused fieldset': {
                                    borderColor: '#00FF41',
                                },
                            }
                        }}
                    />
                    <InputLabel 
                        htmlFor="message" 
                        sx={{ color: "#00FF41", marginBottom: "5px", fontFamily: "monospace",fontSize: "1.5rem", fontWeight: '500' }}
                    >
                        Message
                    </InputLabel>
                    <TextField
                        fullWidth
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        multiline
                        rows={3}
                        sx={{ 
                            mb: 2, 
                            backgroundColor: '#fff', 
                            borderRadius: "5px",
                            '& .MuiOutlinedInput-root': {
                                '& fieldset': {
                                    borderColor: '#bfd94a',
                                },
                                '&:hover fieldset': {
                                    borderColor: '#00FF41',
                                },
                                '&.Mui-focused fieldset': {
                                    borderColor: '#00FF41',
                                },
                            }
                        }}
                    />
                    <Button 
                        type="submit" 
                        variant="contained" 
                        sx={{ 
                            display: "block", 
                            margin: "auto", 
                            backgroundColor: "#00FF41", 
                            color: "#333", 
                            '&:hover': {
                                backgroundColor: "#00e639",
                            }
                        }}
                    >
                        Send
                    </Button>
                </Box>
            </Box>
        </>
    );
};

export default Contact;
