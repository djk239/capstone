import styles from "./Hero.module.css"
import image from '../../data/icons_assets/restauranfood.jpg'


function Hero (){
    return (
        <div className={styles.container}>
            <div className={styles.panel}>
                <h1 className={styles.title}>Little Lemon</h1>
                <h2 className={styles.subtitle}>Chicago</h2>
                <p className={styles.description}>We are a family Owned
                Mediterrean restaurant, focused on traditional recipes with a modern twist.</p>
                <button className={styles.button}>Reserve a Table</button>
            </div>
            <img className={styles.image} src={image} alt="compnay logo display here"/>
        </div>
    )
}

export default Hero;