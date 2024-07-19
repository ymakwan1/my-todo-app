import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/shorten">Shorten URL</Link>
        </li>
        <li>
          <Link to="/urls">All URLs</Link>
        </li>
        <li>
          <Link to="/analytics">Analytics</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
