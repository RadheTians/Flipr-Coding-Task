import React from 'react';

import logo from '../Assets/logo.svg';
import profile from '../Assets/profile.svg';

function Header(props) {

    return (
        <nav className="navbar navbar-expand-lg navbar-light shadow-sm header">
            <a class="navbar-brand" href="#">
            <img src={logo} width="30" height="30" class="d-inline-block align-top" alt="" loading="lazy"/>
            Intugine
            </a>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item active">
                        <a class="nav-link" href="#">Home</a>
                    </li>
                    <li class="nav-item active">
                        <a class="nav-link" href="#">Brands</a>
                    </li>
                    <li class="nav-item active">
                        <a class="nav-link" href="#">Transporters</a>
                    </li>
                    <li>
                        <img src={profile} width="30" height="30" class="rounded-circle" alt="" loading="lazy"/>
                    </li>
                    <li>
                    <span class="badge badge-light">^</span>
                    </li>
                </ul>
            </div>
      </nav>
    );
}

export default Header;