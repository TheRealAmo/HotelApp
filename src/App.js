import logo from './logo.svg';
import './App.css';
import { Navbar, button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import Nav from "./components/NavBar.js"
import Banner from "./components/Banner"
import Frontcalender from "./components/frontcalender.js"
import Amenities from "./components/Amenities.js"

import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Nav />
     
      <Routes>
        <Route path="/" element={<Banner/>} />
        <Route path="about" element={<Amenities/>} />
      </Routes>
      <Frontcalender/>
      <Amenities  />

    </div>
  );
}

export default App;
