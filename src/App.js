import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import GlobalStyle from "./GlobalStyle";

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>

    </>
  );
}

export default App;
