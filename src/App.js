import React from "react";
import Contact from "./components/Contact";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Bio from "./components/Bio"
import Project from "./components/Projects";
import Footer from "./components/Footer"
import "./App.css"

function App(){
  return(
    <Router>
      <div className="container">
        <div className="row">
          <Header/>
          <Nav/>
        </div>
        <Routes>
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Bio/>
        <Project/>
        <Footer/>
      </div>
    </Router>
  )
}

export default App;
