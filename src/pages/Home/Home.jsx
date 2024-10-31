import React from 'react'
import styles from "./Home.module.css"
import joker from "../../assets/joker.jpg"
const Home = () => {
    return (
        <>
            <div className={styles.container}>
                <img className={styles.image} src={joker} />
                <h1 style={{ marginTop: 20 }}>Joker</h1>
                <div className={styles.information}>
                    <span>2020</span>
                    <span> . </span>
                    <span>Crime, Drama, Thriller</span>
                    <span> . </span>
                    <span>Dolby Digital</span>
                </div>
            </div>
            <div className={styles.controls}>
                <span>⚫</span>
                <span>⚫</span>
                <span>⚫</span>
            </div>
            <h3>Promítáme a předprodej</h3>
            <div className={styles.grid}>
                <div className='item'></div>
                <div className='item'></div>
                <div className='item'></div>
                <div className='item'></div>
                <div className='item'></div>
                <div className='item'></div>
            </div>
        </>
    )
}

export default Home