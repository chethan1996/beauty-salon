import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import './App.css';
import Home from "./components/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Background from "./img/make-up_phone.jpeg"


function App() {
  return (

    <div className="App" >
      <BrowserRouter>
      <Routes>

      <Route path="/" element={<Home/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
