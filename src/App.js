import React, { useState } from 'react'
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Dropdown from './Components/Dropdown/Dropdown';
import Navbar from './Components/Navbar/Navbar';
import Slider from './Components/Slider/Slider';
import { SliderData } from './Data/SliderData';
import GlobalStyle from "./GlobalStyle";

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
        <Slider slides={SliderData} />
      </BrowserRouter>

    </>
  );
}

export default App;
