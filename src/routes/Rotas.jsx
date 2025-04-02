import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home";
import { Talentos } from "../pages/Talento/Talentos";
import Perspectivas from "../pages/Pespectiva/Pespectiva";


export default function Rotas() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/talentos" element={<Talentos/>}></Route>
                <Route path="/perpectiva" element={<Perspectivas/>}></Route>
            </Routes>
                
        </BrowserRouter>
    )
}
