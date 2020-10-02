import React from 'react'
import { Header } from '../../components/header/header.jsx'
import { Catalog } from '../../components/catalog/catalog'
import { Request } from '../../components/addRequest/addRequest'

import styles from './home.module.scss'



export const Home = () => {
    return (
       <div className={styles.container}>
           <Header/>
           <div className={styles.main}>
                <Catalog/>
                <Request/>
           </div>
       </div>
    )
}