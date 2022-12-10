import logo from './logo.svg';
import "bulma/css/bulma.css";
import './App.css';
import Home from "./components/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Background from "./img/make-up_phone.jpeg"


function App() {
  return (

    <div className="App" style={{backgroundImage:`url(${Background})`}}>
      <BrowserRouter>
      <Routes>

      <Route path="/" element={<Home/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
