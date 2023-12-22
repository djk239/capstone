import styles from "./Navbar.module.css"
import image from '../data/icons_assets/Logo.svg'

function Navbar (){
    return (
        <nav className={styles.navbar}>
            <img className={styles.image} src={image} alt="compnay logo display here" />
            <ul className={styles.listcontainer}>
                <li>Home</li>
                <li>About</li>
                <li>Menu</li>
                <li>Reservations</li>
                <li>Order Online</li>
                <li>Login</li>
            </ul>
        </nav>
    )
}

export default Navbar;