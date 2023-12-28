import styles from "./Footer.module.css"
import image from '../../data/icons_assets/restaurant chef B.jpg'


function Footer (){
    return (
        <div className={styles.container}>
            <img className={styles.image} src={image} alt="compnay logo display here"/>
            <ul className={styles.list}>
                <h3 className={styles.listheader}>Doormat Navigation</h3>
                <li>Home</li>
                <li>About</li>
                <li>Menu</li>
                <li>Reservations</li>
                <li>Order Online</li>
                <li>Login</li>
            </ul>
            <ul className={styles.list}>
                <h3 className={styles.listheader}>Contact</h3>
                <li>Address</li>
                <li>phone number</li>
                <li>Email</li>
            </ul>
            <ul className={styles.list}>
                <h3 className={styles.listheader}>Social Media Links</h3>
                <li>Address</li>
                <li>phone number</li>
                <li>Email</li>
            </ul>
        </div>
    )
}

export default Footer;