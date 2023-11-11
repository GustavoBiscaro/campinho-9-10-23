import { Link } from "react-router-dom";

import React from "react";

import './navbar.css';


const navbar = () => {
  return (
    <nav className="navbar">
        <h2>
            <Link to={`/`}>Campinho Digital - React</Link>
        </h2>
        <ul>
            <li>
                <Link to={`/`}>Usuários</Link>
            </li>
          
        </ul>
    </nav>
  )
}

export default navbar