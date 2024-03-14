import { Link } from "react-router-dom";
import "./Nav.css"
// import customer from  "./images/customer"
import React from "react";

function Navbar(){
    return(
        <div className="Main">
            <div className="navbar">
            {/* <input className="input" type="text" placeholder="Search for the couple!!"/> */}
            {/* <img src={customer} alt="" /> */}
               <h1 id="LOGONAME" >WERIIDSHIPS</h1>

                <ul className="div1">
                    <li>Home</li>
                    <li>About</li>
                    
                    <Link to={"/form"}><button  id="addnew">Add New</button></Link>
                </ul>
            </div>
        </div>
    )
}

export default Navbar;
        