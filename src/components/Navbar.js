import React from 'react';
import {NavLink} from 'react-router-dom'

const styles = {
    nav: {
        paddingLeft: '15px'
    }
}

export const Navbar = () => (
    <nav style={styles.nav} className="navbar navbar-dark navbar-expand-lg bg-dark">
        <div className="navbar-brand">
            Test React App
        </div>

        <ul className="navbar-nav">
            <li className="nav-item">
                <NavLink className="nav-link" to="/" exact>Home</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" to="/about">About</NavLink>
            </li>
        </ul>
    </nav>
)
