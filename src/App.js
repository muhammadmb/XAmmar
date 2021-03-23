import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Slider from './Components/Slider/Slider';
import { SliderData } from './Data/SliderData';
import GlobalStyle from "./GlobalStyle";

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Navbar />
        <Slider slides={SliderData} />
      </BrowserRouter>

    </>
  );
}

export default App;
