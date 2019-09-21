import React from 'react';

const NavBar = (prop) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a href="#">{prop.logo}</a>
            <div className="btn-group">
              <button className="btn btn-primary">Home</button>
              <button className="btn btn-primary">About</button>
              <button className="btn btn-primary">Contact</button>
            </div>
        </nav>
    )
}

export default NavBar;