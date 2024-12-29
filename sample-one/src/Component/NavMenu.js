import React from 'react';
import { Link } from 'react-router-dom';

const NavMenu = () => {
  return (
    <nav>
      <ul>
        <li style={{ display: 'inline', marginRight: 10 }}>
          <Link to="/">Home</Link>
        </li>
        <li style={{ display: 'inline', marginRight: 10 }}>
          <Link to="/product">Product</Link>
        </li>
        <li style={{ display: 'inline', marginRight: 10 }}>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavMenu;