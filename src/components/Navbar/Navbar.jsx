import React from "react";
import { NavLink } from "react-router-dom";
import s from './Navbar.module.css';

const Navbar = () => {
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to="/profile"
                    style={({ isActive }) => ({ color: isActive ? 'gold' : '#fff' })}
                >Profile</NavLink>
            </div>
            <div className={`${s.item} ${s.active}`}>
                <NavLink to="/dialogs"
                    style={({ isActive }) => ({ color: isActive ? 'gold' : '#fff' })}
                >Message</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/news"
                    style={({ isActive }) => ({ color: isActive ? 'gold' : '#fff' })}
                >News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/music"
                    style={({ isActive }) => ({ color: isActive ? 'gold' : '#fff' })}
                >Music</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/settings"
                    style={({ isActive }) => ({ color: isActive ? 'gold' : '#fff' })}
                >Settings</NavLink>
            </div>
        </nav>
    );
}

export default Navbar;