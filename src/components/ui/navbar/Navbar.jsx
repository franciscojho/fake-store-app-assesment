import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './navbar.module.css'

const Navbar = () => {
    return (
        <nav className={styles.store__navbar}>
            <img className={styles['store__navbar-img']} src="./logo192.png" alt="" />
            <ul className={styles['store__navbar-list']}>
                <li>
                    <NavLink
                        className={`${styles['store__navbar-item']} ${({ isActive }) =>
                            isActive ? 'nav-active' : ''}`}
                        to="/"
                    >
                        HOME
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        className={`${styles['store__navbar-item']} ${({ isActive }) =>
                            isActive ? 'nav-active' : ''}`}
                        to="/about"
                    >
                        ABOUT
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        className={`${styles['store__navbar-item']} ${({ isActive }) =>
                            isActive ? 'nav-active' : ''}`}
                        to="/product"
                    >
                        PRODUCT DETAIL
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar
