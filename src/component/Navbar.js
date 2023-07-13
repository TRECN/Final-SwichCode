import React from "react";
import "../css/navbar.css";
import { Link } from "react-router-dom";


export default function NavBar({displayNav}) {

  return (
    
    <div className="nav">
      {
        displayNav?   
        <>
        <Link to="/" className="logo-name">
        Switch Code
      </Link>
      <ul>
        <li className="btnAbout">
          <Link to="/About" className="about">About</Link>
        </li>
        <li className="btnSignup">
          <Link to="/Signup" className="nav-signup">Signup</Link>
        </li>
      
       

      </ul>
        </>
        :
        <></>


      }
      
    </div>
  );
}
