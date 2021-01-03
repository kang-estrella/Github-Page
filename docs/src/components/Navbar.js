import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import 'bulma/css/bulma.css';

class Navbar extends Component {
    render() {
        return (
            <nav className="navbar" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                    <Link className="navbar-item" to="">
                        <strong>MJ Kang</strong>
                    </Link>
                </div>

                <div className="navbar-end">
                    <div className="navbar-item">
                        <div className="buttons">
                            <Link className="navbar-item" to="resume">
                                Resume
                            </Link>
                            <Link className="navbar-item" to="project">
                                Project
                            </Link>
                            <a className="navbar-item" href="https://blog.mj-kang.com/">
                                Blog
                            </a>
                        </div>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Navbar;