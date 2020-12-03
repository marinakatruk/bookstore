import React from 'react'
import { useState } from 'react'
import { Header } from '../../components/header/header.jsx'
import { Catalog } from '../../components/catalog/catalog'
import { Request } from '../../components/addRequest/addRequest'

import styles from './home.module.scss'



export const Home = () => {
    
    const [filteredData, setFilteredData] = useState([]);
    const [term, setTerm] = useState('');

    const filterData = (obj) => {
        setFilteredData(obj.data);
        setTerm(obj.term);
    };


    return (
       <div className={styles.container}>
           <Header term={term} filterData={filterData} />
           <div className={styles.main}>
                <Catalog filteredData={filteredData} term={term} />
                <Request />
           </div>
       </div>
    )
}