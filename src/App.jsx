import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { Home } from './pages/home/Home.jsx'
import { Cart } from './pages/Cart/Cart'
import { New } from './pages/newBook/New.jsx'

import { Logo } from './components/logo/logo.jsx'
import { Footer } from './components/footer/footer.jsx'

import styles from './App.module.scss'

function App() {
  return (
    <Router>
      <div className={styles.container}>
        <Logo/>
        <Switch>
          <Route exact path={'/'} component={Home}/>
          <Route path={'/cart'} component={Cart}/>
          <Route path={'/new'} component={New}/>
        </Switch>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
