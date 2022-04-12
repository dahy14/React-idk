import React from 'react';
import { Link, NavLink } from 'react-router-dom';


const Navbar = () => {
    return (
        <nav className="ui raised very padded segment">
            <a href="/" className="ui teal inverted segment">Gloria</a>
            <div className="ui right floated header">
                <Link to="/"><button className="ui button">Home</button></Link>
                <Link to="/about"><button className="ui button">About</button></Link>
                
                
                    
                <Link to="/contact">
                    <button className="ui button">
                        Contact
                    </button>
                </Link>
                
                
                
                <Link to="/card"><button className="ui button">Profiles</button></Link>
            </div>
        </nav>
    )
}

export default Navbar; 