import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Card from './components/Card';
 
function App () {
    return (
        <Router>
           
            <div className = "App">
                <Navbar />
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/about" element={<About/>} />
                <Route path="/contact" element={<Contact/>} />
                <Route path="/card/:user" element={<Card />} />
            </Routes>
            </div>
        </Router>
    );
}

export default App;

// This should be comment on the new version ok ok
// Boy I, boy I know, I know you got the feels
// Boy I, boy I know. I know you feel it too. 
// Ah! I'm so curious but your boy gotta keep it cool
// but I know everytime you move got me frozen I get
// so shy its obvious