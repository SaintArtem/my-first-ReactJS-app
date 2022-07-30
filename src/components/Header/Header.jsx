import React from "react";
import s from './Header.module.css';
import { NavLink } from 'react-router-dom';
import bigLogo from "./../../assets/images/bigLogo.svg";
import musicPic from "./../../assets/images/musicBig.svg";
import notifPic from "./../../assets/images/notif.svg";

const Header = (props) => {
    return (
        <header className={s.header}>
            <div className="_container">
                <div className={s.headerWrapper}>
                    <ul className={s.headerList}>
                        <li className={s.headerList__li}>
                            <div className={s.logoBlock}>
                                <NavLink to="/feed">
                                    <img src={bigLogo} alt="vReacte" />
                                </NavLink>
                            </div>
                        </li>
                        <li className={s.headerList__li}>
                            <div className={s.searchBlock}>
                                <input id="mainSearch" className={s.mainSearch} type="text" placeholder="Search" />
                            </div>
                        </li>
                        <li className={s.headerList__li}>
                            <div className={s.modalsWrapper}>
                                <button type="button" id="notifButton" className={s.modalsBtn}>
                                    <img src={notifPic} alt="Notifications" />
                                </button>
                            </div>
                        </li>
                        <li className={s.headerList__li}>
                            <div className={s.modalsWrapper}>
                                <button type="button" id="musicButton" className={s.modalsBtn}>
                                    <img src={musicPic} alt="Music" />
                                </button>
                            </div>
                        </li>
                        <li className={s.headerList__li}>
                            <div className={s.modalsWrapper}>
                                <div className={s.loginBlock}>
                                    {
                                        props.isAuth ? props.login
                                            : <NavLink to={'/login'}>Login</NavLink>
                                    }
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    );
}

export default Header;