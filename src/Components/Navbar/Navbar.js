import React from 'react';
import styles from "./Navbar.module.css"
import image from '../../data/icons_assets/Logo.svg'
import menuicon from '../../data/icons_assets/icon _hamburger menu_.svg'

function Navbar (){
    return (
        <nav className={styles.navbar}>
            <img className={styles.image} src={image} alt="compnay logo display here" />
            <ul className={styles.listcontainer}>
                <a href="" >Home</a>
                <a href="" >About</a>
                <a href="" >Menu</a>
                <a href="" >Reservations</a>
                <a href="" >Order Online</a>
                <a href="" >Login</a>
            </ul>
            <img className={styles.menu} src={menuicon} alt="hamburger menu icon"/>
        </nav>
    )
}

export default Navbar;