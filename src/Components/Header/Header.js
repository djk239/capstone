import styles from "./Header.module.css"
import Navbar from '../Navbar/Navbar';

function Header(){
    return (
        <header className={styles.header}>
            <Navbar className={styles.navbar }/>

            
        </header>
    )
}

export default Header;