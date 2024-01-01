import React, {useState} from 'react';
import styles from "./Navbar.module.css"
import image from '../../data/icons_assets/Logo.svg'
import menuicon from '../../data/icons_assets/icon _hamburger menu_.svg'

function Navbar ({ onPageChange }){
    const [menuopen, setMenuopen] = useState(false);

     const handleMenu = () => {
        setMenuopen(!menuopen);
    }

    return (
        <nav className={styles.navbar}>
            <img className={styles.image} src={image} alt="compnay logo display here" />
            <ul className={styles.listcontainer}>
                <a href="/#home" onClick={() => onPageChange('home')} >Home</a>
                <a href="/#about" onClick={() => onPageChange('about')} >About</a>
                <a href="/#menu" onClick={() => onPageChange('menu')} >Menu</a>
                <a href="/#reservations" onClick={() => onPageChange('reservations')} >Reservations</a>
                <a href="/#order-online" onClick={() => onPageChange('order-online')} >Order Online</a>
                <a href="/#login" onClick={() => onPageChange('login')} >Login</a>
            </ul>
            <img className={styles.menu} src={menuicon} 
            onClick={handleMenu}
            alt="hamburger menu icon"/>
            {menuopen && (
                <div className={styles.menucontainer}>
                    <ul className={styles.menuList}>
                        <a href="/#home" onClick={() => onPageChange('home')} >Home</a>
                        <a href="/#about" onClick={() => onPageChange('about')} >About</a>
                        <a href="/#menu" onClick={() => onPageChange('menu')} >Menu</a>
                        <a href="/#reservations" onClick={() => onPageChange('reservations')} >Reservations</a>
                        <a href="/#order-online" onClick={() => onPageChange('order-online')} >Order Online</a>
                        <a href="/#login" onClick={() => onPageChange('login')} >Login</a>
                    </ul>
                </div>
            )}

        </nav>
    )
}

export default Navbar;