import styles from "./Footer.module.css"
import image from '../../data/icons_assets/restaurant chef B.jpg'


function Footer (){
    return (
        <div className={styles.container}>
            <img className={styles.image} src={image} alt="compnay logo display here"/>
            <ul className={styles.list}>
                <h3 className={styles.listheader}>Navigation</h3>
                <a>Home</a>
                <a>About</a>
                <a>Menu</a>
                <a>Reservations</a>
                <a>Order Online</a>
                <a>Login</a>
            </ul>
            <ul className={styles.list}>
                <h3 className={styles.listheader}>Contact</h3>
                <a>Address</a>
                <a>+1(800)-888-8888</a>
                <a>contact@littlelemon.com</a>
            </ul>
            <ul className={styles.list}>
                <h3 className={styles.listheader}>Social Media</h3>
                <a>Facebook</a>
                <a>Instagram</a>
                <a>X</a>
            </ul>
        </div>
    )
}

export default Footer;