import React from 'react'
import { Header } from '../../components/header/header.jsx'
import { Catalog } from '../../components/catalog/catalog'

import styles from './home.module.scss'



export const Home = () => {
    return (
       <div className={styles.container}>
           <Header/>
            <Catalog/>
       </div>
    )
}