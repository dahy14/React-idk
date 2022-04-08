import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';

function App () {
    return (
        <BrowserRouter>
            <div className = "App">
                <Navbar />
                <Route path='/' component = {Home} /> 
            </div>
        </BrowserRouter>
    );
}

export default App;