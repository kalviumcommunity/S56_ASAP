import { Link } from "react-router-dom";
import "./Nav.css"
import React from "react";

function Navbar(){
    return(
        <div className="Main">
            <div className="navbar">
            <input className="input" type="text" placeholder="Search for the couple!!"/>

                <ul className="div1">
                    <li>Home</li>
                    <li>About</li>
                    
                    <Link to={"/form"}><button>Add New</button></Link>
                </ul>
            </div>
        </div>
    )
}

export default Navbar;
        