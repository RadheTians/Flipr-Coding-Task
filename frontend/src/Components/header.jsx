import React from 'react';

import logo from '../Assets/logo.svg';
import profile from '../Assets/profile.svg';

function Header(props) {

    return (
        <nav className="navbar navbar-expand-lg navbar-light shadow-sm header">
            <a className="navbar-brand" href="#">
            <img src={logo} width="30" height="30" className="d-inline-block align-top" alt="" loading="lazy"/>
            Intugine
            </a>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="#">Home</a>
                    </li>
                    <li className="nav-item active">
                        <a className="nav-link" href="#">Brands</a>
                    </li>
                    <li className="nav-item active">
                        <a className="nav-link" href="#">Transporters</a>
                    </li>
                    <li className="nav-item">
                        <img src={profile} width="35" height="35" className="rounded-circle img-background" alt="" loading="lazy"/>
                    </li>
                    <li className="nav-item">
                        <i className="arrow down"></i>
                    </li>
                </ul>
            </div>
      </nav>
    );
}

export default Header;