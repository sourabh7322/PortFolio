// App.js
import React from 'react';
import './App.css';
import Navbar from './Components/MiniComponent/Navbar';
import Intro from './Components/Intro/Intro';
import Sidebar from './Components/MiniComponent/Sidebar';
import About from './Components/About/About';
import Skill from './Components/Skill/Skill';
import Work from './Components/Work/Work';
import Contact from './Components/Contact/Contact';
import GithubCalender from './Components/GithubCalender/GithubCalender';
import Cursor from './Components/MiniComponent/Cursor';
import { ThemeProvider } from '../src/ThemeContext';


function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <Cursor />
        <Navbar />
        <Intro />
        <Sidebar />
        <About />
        <Skill />
        <Work />
        <GithubCalender />
        <Contact />
      </div>
    </ThemeProvider>
  );
}

export default App;
