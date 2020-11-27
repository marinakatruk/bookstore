import React from 'react'
import { Header } from '../../components/header/header.jsx'
import { Catalog } from '../../components/catalog/catalog'
import { Request } from '../../components/addRequest/addRequest'

import styles from './home.module.scss'



export const Home = ({ AddItemToCart, counter }) => {
    return (
       <div className={styles.container}>
           <Header counter={counter}/>
           <div className={styles.main}>
                <Catalog AddItemToCart={AddItemToCart}/>
                <Request/>
           </div>
       </div>
    )
}