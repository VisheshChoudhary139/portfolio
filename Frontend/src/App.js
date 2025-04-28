import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import './App.css';
import Navbar from './component/Navbar';
import Home from './component/Home';
import Contact from './component/Contact';
import Projects from './component/Projects';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path = "/projects" element = {<Projects/>}/>
      </Routes>
    </Router>
  );
}

export default App;
