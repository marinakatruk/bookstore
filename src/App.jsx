import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { Shop } from './pages/Shop/Shop.jsx'
import { Cart } from './pages/Cart/Cart'
import { New } from './pages/NewBook/New.jsx'

import { Logo } from './components/Logo/Logo.jsx'
import { Footer } from './components/Footer/Footer.jsx'

import styles from './App.module.scss'

function App() {

  return (
    <Router>
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
            <New />
          </Route>
        </Switch>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
