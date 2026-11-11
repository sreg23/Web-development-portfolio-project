import React from 'react';
import { NavLink } from 'react-router-dom';

// Change the function names and links
// to fit your portfolio topic.

function Navigation() {
  return (
    <nav className="main-nav">
        {/* Add links to Home, Topics, Gallery, Contact, and Staff Pages  */}
        <NavLink to="/">Home</NavLink>
        <NavLink to="/topics">Topics</NavLink>
        <NavLink to="/buckets">Bucket List</NavLink>
        <NavLink to="/gallery">Gallery</NavLink>
        <NavLink to="/order">Order</NavLink> {/* New Order link */}
    </nav>
  );
}

export default Navigation;
