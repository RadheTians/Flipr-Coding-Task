import React from 'react';
import {Link,NavLink} from "react-router-dom";
import logo from '../Assets/img/logo.svg';
import profile from '../Assets/img/profile.svg';

function Header(props) {

    return (
        <nav className="navbar navbar-expand-lg navbar-light shadow-sm header">
            <Link className="navbar-brand ml-5" to="/">
            <img src={logo} width="30" height="30" className="d-inline-block align-top" alt="" loading="lazy"/>
            Intugine
            </Link>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                        <NavLink className="nav-link" exact activeClassName="action-show" to="/">Home</NavLink>
                    </li>
                    <li className="nav-item active">
                        <NavLink className="nav-link" exact activeClassName="action-show"  to="/branks">Brands</NavLink>
                    </li>
                    <li className="nav-item active">
                        <NavLink className="nav-link" exact activeClassName="action-show" to="/transporters">Transporters</NavLink>
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