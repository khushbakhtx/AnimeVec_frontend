import React from 'react';
import { Link } from 'react-router-dom';
import './App.css'; 

function Menu() {
  return (
    <nav className="menu">
      <div className="logo">
        AnimeVec
      </div>
      <ul className="menu-items">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Menu;
