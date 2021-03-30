import React, { useState } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Dropdown from './Components/Dropdown/Dropdown';
import Navbar from './Components/Navbar/Navbar';
import GlobalStyle from "./GlobalStyle";
import Footer from './Components/Footer/Footer';
import HomePage from './Pages/Home/HomePage';
import MainPage from './Pages/Main/MainPage'
import { HomeForSale } from './Data/HomeForSaleData';
import { HomeForRantel } from './Data/HomesForRental';
import About from './Pages/About/About';

function App() {

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Navbar toggle={toggle} />
        <Dropdown isOpen={isOpen} toggle={toggle} />
        <Switch >
          <Route exact path="/" component={MainPage} />
          <Route exact path="/XAmmar" component={MainPage} />
          <Route path="/homes" component={() => <HomePage HomeForSale={HomeForSale} />} />
          <Route path="/rentals" component={() => <HomePage HomeForSale={HomeForRantel} />} />
          <Route path="/about" component={About} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
