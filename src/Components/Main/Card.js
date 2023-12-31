import styles from "./Card.module.css"
import image from "../../data/icons_assets/delivery.png"

const Card = ({ key, imagesrc, title, price, description, link }) => {
    return(
        <div className={styles.container}>
            <img className={styles.image} src={imagesrc} alt={title} />
            <div className={styles.line1}>
                <h2 className={styles.title}>{title}</h2>
                <h2 className={styles.price}>{price}</h2>
            </div>
            <p className={styles.description}>{description}</p>
            <a className={styles.link} href={link}>
                Order a delivery      
                <img className={styles.delivery} src={image} alt="delivery"/> 
            </a>

        </div>
    )
}

export default Card;