import React, { Component } from 'react';
import App from './App';
import Project from './Project';
import Resume from './Resume';
import { Link, Switch, Route } from 'react-router-dom';
import 'bulma/css/bulma.css';

class Navbar extends Component {
    render() {
        return (
            <nav className="navbar" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                    <a className="navbar-item" href="./index.html">
                        <strong>MJ Kang</strong>
                    </a>
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

                <Switch>
                    <Route path="/" element={<App />} />
                    <Route path="/project" element={<Project />} />
                    <Route path="/resume" element={<Resume />} />
                </Switch>
            </nav>
        );
    }
}

export default Navbar;