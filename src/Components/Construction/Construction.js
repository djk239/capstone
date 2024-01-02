import React from "react";
import styles from "./Construction.module.css"
import image from "../../data/icons_assets/construction.png"

const Construction = () =>{
    return(
            <div className={styles.container}>
                <img src={image} className={styles.image} alt ="construction logo"/>
                <h3 className={styles.text}>This page is currently under construction please check back later.</h3>
            </div>
    );
}

export default Construction;