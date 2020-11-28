import React from 'react'
import { Header } from '../../components/header/header.jsx'
import { Catalog } from '../../components/catalog/catalog'
import { Request } from '../../components/addRequest/addRequest'

import styles from './home.module.scss'



export const Home = ({ data, AddItemToCart, counter, term, updateData }) => {
    return (
       <div className={styles.container}>
           <Header counter={counter}
               data={data}
               term={term}
               updateData={updateData}
           />
           <div className={styles.main}>
                <Catalog data={data} AddItemToCart={AddItemToCart}/>
                <Request/>
           </div>
       </div>
    )
}