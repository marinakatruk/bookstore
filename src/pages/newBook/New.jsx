import React from 'react'
import { Header } from '../../components/header/header'
import { BookForm } from '../../components/bookForm/bookForm'

import styles from './new.module.scss'

export const New = () => {
    return (
        <div className={styles.container}>
            <Header />
            <div className={styles.main}>
                <h2>Enter the data</h2>
                <BookForm />
            </div>
        </div>
    )
}