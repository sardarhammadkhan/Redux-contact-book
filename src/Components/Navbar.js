import React from "react";
import {Link} from 'react-router-dom'
const Navbar = () => {
  return (
    <div>
      <nav className="navbar shadow fixed-top navbar-expand-sm navbar-dark bg-primary">
        <div className="container">
          <Link to='/Contacts' className="navbar-brand"> contact-book</Link>
          <div>
            <Link  to='/Add' className="ml-auto btn btn-light">Create-contact</Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
