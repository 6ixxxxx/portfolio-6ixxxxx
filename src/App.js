import React from "react";
import Home from "./routes/Home";
import Contact from "./routes/Contact";
import Projects from "./routes/Projects";
import About from "./routes/About";
import { Route, Routes } from "react-router-dom";
import "./index.css"

const App = () => {
return(
    <>
     <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Contact" element={<Contact/>} />
        <Route path="/Projects" element={<Projects/>} />
        <Route path="/About" element={<About/>} />
     </Routes>
    </>
)
}

export default App
