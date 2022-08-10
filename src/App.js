import React from "react";
import Home from "./routes/Home";
import { Route, Routes } from "react-router-dom";
import "./index.css"

const App = () => {
return(
    <>
     <Routes basename="/portfolio-6ixxxxx">
        <Route path="/" element={<Home/>} />
     </Routes>
    </>
)
}

export default App
