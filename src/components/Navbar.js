import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import 'bulma/css/bulma.css';

class Navbar extends Component {
    render() {
        return (
            <div className="container">
                <nav className="navbar" role="navigation" aria-label="main navigation">
                    <div className="navbar-brand">
                        <Link className="navbar-item" to="">
                            <strong>MJ Kang</strong>
                        </Link>
                        <span className="navbar-burger" data-target="navbarMenuA">
                            <span></span>
                            <span></span>
                            <span></span>
                        </span>
                    </div>

                    <div id="navbarMenuA" className="navbar-menu">
                        <div className="navbar-end">
                            <Link className="navbar-item" to="resume">
                                Resume
                                    </Link>
                            <Link className="navbar-item" to="project">
                                Project
                                    </Link>
                            <div className="navbar-item">
                                <a className="button is-light" href="https://blog.mj-kang.com/">
                                    <span className="icon">
                                        <i className="fas fa-rss"></i>
                                    </span>
                                    <span>Blog</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Navbar;