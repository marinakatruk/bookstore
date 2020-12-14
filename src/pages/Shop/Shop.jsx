import React from 'react'
import { useState } from 'react'
import { Header } from '../../components/Header/Header.jsx'
import { Catalog } from '../../components/Catalog/Catalog'
import { Request } from '../../components/AddRequest/AddRequest'


import styles from './Shop.module.scss'



export const Shop = () => {

    
    const [filteredData, setFilteredData] = useState([]);
    const [term, setTerm] = useState('');


    const filterData = (obj) => {
        setFilteredData(obj.data);
        setTerm(obj.term);
    };


    return (
       <div className={styles.container}>
           <Header term={term} filterData={filterData} isMainPage={true}/>
           <div className={styles.main}>
                <Catalog filteredData={filteredData} term={term} />
                <Request />
           </div>
       </div>
    )
}