import React from 'react'
import { Header } from '../../components/header/header.jsx'
import { Catalog } from '../../components/catalog/catalog'
import { Request } from '../../components/addRequest/addRequest'

import styles from './home.module.scss'



export const Home = ({ data, filteredData, updateData, addItemToCart, counter, term, filterData }) => {
    return (
       <div className={styles.container}>
           <Header counter={counter}
               data={data}
               term={term}
               filterData={filterData}
           />
           <div className={styles.main}>
                <Catalog data={data}
                    filteredData={filteredData}
                    term={term}
                    addItemToCart={addItemToCart}
                    updateData={updateData}/>
                <Request/>
           </div>
       </div>
    )
}