import "./Nav.css"
import React from "react"

function Navbar(){
    return(
        <div className="Main">
            <div className="navbar">
            <input className="input" type="text" placeholder="Choice your Favourties"/>

                <ul className="div1">
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar;
        