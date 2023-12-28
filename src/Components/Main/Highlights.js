import styles from "./Highlights.module.css"
import temp from '../../data/icons_assets/greek salad.jpg'
import Card from './Card';

const cardData = [
{id: 1, imagesrc: "greek salad.jpg", title: 'Greek salad', price: '$12.99', description: 'The famous greek salad of crispy lettuce, peppers, olives, and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.', link: 'https://www.chicken' },
{id: 2, imagesrc: "bruchetta.svg", title: 'Bruchetta', price: '$5.99', description: 'Our Bruschetta is made from grilled bread that has been smeared with garlic and seasonsed with salt and olive oil', link: 'https://www.chicken' },
{id: 3, imagesrc: 'lemon dessert.jpg', title: 'Lemon Dessert', price: '$5.00', description: 'This comes straight from grandma\'s recipe book, every last ingredient has been sourced and is as authentic as can be imaged.', link: 'https://www.chicken' },

];

const CardList = ({ data }) => {
    return (
        <ul className={styles.cards}>
            {data.map((card) => (
                <li>
                    <Card key={card.id} imagesrc={temp} title={card.title} price={card.price} description={card.description} link={card.link} />
                </li>
            ))}
        </ul>
    );
};


function Highlights (){
    return (
        <div className={styles.container}>
            <div className={styles.panel}>
                <h1>This weeks specials!</h1>
                <button className={styles.button}>Online Menu</button>
            </div>
            <CardList data={cardData} />
        </div>
    )
}

export default Highlights;