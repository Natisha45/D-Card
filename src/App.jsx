import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavbarComponent from "./Component/NavbarComponent/navbar";
import Home from "./pages/home/home";
import About from "./pages/about/About";
import Contact from "./pages/Contact us/contact";
import Gallery from "./pages/Gallery/Gallery";


function App() {
  return (
    
     <div>
          <NavbarComponent />

          <Routes>
     
     <Route path="/" element={<Home />} />
     <Route path="/about" element={<About />} />
     <Route path="/Gallery" element={<Gallery />} />
     <Route path="/Contact" element={<Contact />} />
   </Routes>



     </div>
   
    
    
  );
}



export default App;
