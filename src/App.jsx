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
          <Route path={'/cart'} component={Cart}/>
          <Route path={'/new'}><New handleSubmit={handleSubmit}/></Route>
        </Switch>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
