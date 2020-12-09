import React from 'react'
import { Link } from 'react-router-dom'

import styles from './AddRequest.module.scss'
import image from './pen2.png'

export const Request = () => {

    return (
        <div className={styles.container}>
            <div className={styles.request}>
                <h2>New Book</h2>
                <p>Didn't find what you were looking for?</p>
                <div className={styles.button}>
                    <Link to='/new'>Add a book</Link>
                </div>
            </div>
            <div className={styles.image}>
                <img src={image} alt="Typewriter" height="200px"></img>
            </div>

        </div>
    )
}