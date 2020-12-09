import React from 'react';
import {
  HashRouter,
  Switch,
  Route,
} from "react-router-dom";
import { Shop } from './pages/Shop/Shop.jsx'
import { Cart } from './pages/Cart/Cart'
import { BookCreator } from './pages/BookCreator/BookCreator.jsx'

import { Logo } from './components/Logo/Logo.jsx'
import { Footer } from './components/Footer/Footer.jsx'

import styles from './App.module.scss'

function App() {

  return (
    <HashRouter basename="/">
      <div className={styles.container}>
        <Logo/>
        <Switch>
          <Route exact path={'/'}>
            <Shop />
          </Route>
          <Route path={'/cart'}>
            <Cart />
          </Route>
          <Route path={'/new'}>
            <BookCreator />
          </Route>
        </Switch>
        <Footer/>
      </div>
    </HashRouter>
  );
}

export default App;
