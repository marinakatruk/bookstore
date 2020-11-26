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

import { useState, useEffect } from 'react'

import styles from './App.module.scss'

function App() {
  const [books, setBooks] = useState([]);
  const [cartItems, setCartItems] = useState([{
      name: 'Becoming',
      autor: 'Michelle Obama',
      year: '2018',
      price: '28',
      image: '/img/becoming.png'
    }]);
    
  const [counter, setCounter] = useState(0);

  const handleSubmit = (book) => {
    setBooks([...books, book]);
  };

  useEffect(() => {
    localStorage.setItem('books', JSON.stringify(books));
  });


  return (
    <Router>
      <div className={styles.container}>
        <Logo/>
        <Switch>
          <Route exact path={'/'} component={Home}/>
          <Route path={'/cart'}><Cart cartItems={cartItems}/></Route>
          <Route path={'/new'}><New handleSubmit={handleSubmit}/></Route>
        </Switch>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
