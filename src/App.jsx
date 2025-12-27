
import React from "react";
import { Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Contacts from "./pages/Contacts";
import Footer from "./components/Footer";
import Navigations from "./components/Navigations";
import HomePage from "./pages/HomePage";


const App = () => {
  return (
    <div className="bg-black min-h-screen" style={{backgroundImage: "url('/bg.jpg')"}}>

      <Navigations />
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/skills" element={<Skills/>} />
        <Route path="/projects" element={<Projects/>} />
        <Route path="/contact" element={<Contacts/>} />
      </Routes>
      <Footer/>
    </div>
  );
};

export default App;
