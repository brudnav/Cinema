import React from 'react'
import styles from "./Home.module.css"
import joker from "../../assets/joker.jpg"
import { useNavigate } from 'react-router-dom'
const Home = () => {

    const navigate = useNavigate();
    return (
        <>
            <div className={styles.container}>
                <img className={styles.image} src={joker} />
                <h1 style={{ marginTop: 20 }}>Joker</h1>
                <div className={styles.information}>
                    <span>2020</span>
                    <span>Crime, Drama, Thriller</span>
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
                <div onClick={() => { navigate("/movie-detail") }} className='item'></div>
                <div onClick={() => { navigate("/movie-detail") }} className='item'></div>
                <div onClick={() => { navigate("/movie-detail") }} className='item'></div>
                <div onClick={() => { navigate("/movie-detail") }} className='item'></div>
                <div onClick={() => { navigate("/movie-detail") }} className='item'></div>
                <div onClick={() => { navigate("/movie-detail") }} className='item'></div>
            </div>
        </>
    )
}

export default Home