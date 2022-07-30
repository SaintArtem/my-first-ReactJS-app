import React from "react";
import { NavLink } from "react-router-dom";
import s from './Navbar.module.css';
import userPic from "./../../assets/images/user-pic.svg";
import newsPic from "./../../assets/images/news.svg";
import messagesPic from "./../../assets/images/messages.svg";
import musicPic from "./../../assets/images/music.svg";
import usersPic from "./../../assets/images/users.svg";
import friendsPic from "./../../assets/images/friends.svg";
import settingsPic from "./../../assets/images/settings.svg";

const Navbar = () => {
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to="/profile"
                // !DRY
                    style={({ isActive }) => ({
                        color: isActive ? '#32D76A' : '#fff',
                        background: isActive ? 'rgba(50, 215, 106, 0.12)' : 'transparent',
                    })}>
                    <div className={s.flexWrapper}>
                        <div className={s.imageWrapper}><img src={userPic} alt="Settings" /></div>
                        <span>My profile</span>
                    </div>
                </NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/news"
                // !DRY
                    style={({ isActive }) => ({
                        color: isActive ? '#32D76A' : '#fff',
                        background: isActive ? 'rgba(50, 215, 106, 0.12)' : 'transparent',
                    })}>
                    <div className={s.flexWrapper}>
                        <div className={s.imageWrapper}><img src={newsPic} alt="Settings" /></div>
                        <span>News</span>
                    </div>
                </NavLink>
            </div>
            <div className={`${s.item} ${s.active}`}>
                <NavLink to="/dialogs"
                // !DRY
                    style={({ isActive }) => ({
                        color: isActive ? '#32D76A' : '#fff',
                        background: isActive ? 'rgba(50, 215, 106, 0.12)' : 'transparent',
                    })}>
                    <div className={s.flexWrapper}>
                        <div className={s.imageWrapper}><img src={messagesPic} alt="Settings" /></div>
                        <span>Messenger</span>
                    </div>
                </NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/friends"
                // !DRY
                    style={({ isActive }) => ({
                        color: isActive ? '#32D76A' : '#fff',
                        background: isActive ? 'rgba(50, 215, 106, 0.12)' : 'transparent',
                    })}>
                    <div className={s.flexWrapper}>
                        <div className={s.imageWrapper}><img src={friendsPic} alt="Settings" /></div>
                        <span>Friends</span>
                    </div>
                </NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/users"
                // !DRY
                    style={({ isActive }) => ({
                        color: isActive ? '#32D76A' : '#fff',
                        background: isActive ? 'rgba(50, 215, 106, 0.12)' : 'transparent',
                    })}>
                    <div className={s.flexWrapper}>
                        <div className={s.imageWrapper}><img src={usersPic} alt="Settings" /></div>
                        <span>Users</span>
                    </div>
                </NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/music"
                // !DRY
                    style={({ isActive }) => ({
                        color: isActive ? '#32D76A' : '#fff',
                        background: isActive ? 'rgba(50, 215, 106, 0.12)' : 'transparent',
                    })}>
                    <div className={s.flexWrapper}>
                        <div className={s.imageWrapper}><img src={musicPic} alt="Settings" /></div>
                        <span>Music</span>
                    </div>
                </NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/settings"
                // !DRY
                    style={({ isActive }) => ({
                        color: isActive ? '#32D76A' : '#fff',
                        background: isActive ? 'rgba(50, 215, 106, 0.12)' : 'transparent',
                    })}>
                    <div className={s.flexWrapper}>
                        <div className={s.imageWrapper}>
                            <img src={settingsPic} alt="Settings" />
                        </div>
                        <span>Settings</span>
                    </div>
                </NavLink>
            </div>
        </nav>
    );
}

export default Navbar;