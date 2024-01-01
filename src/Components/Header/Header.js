import styles from "./Header.module.css"
import Navbar from '../Navbar/Navbar';

function Header({onPageChange}){
    return (
        <header className={styles.header}>
            <Navbar onPageChange={onPageChange} className={styles.navbar }/>

            
        </header>
    )
}

export default Header;