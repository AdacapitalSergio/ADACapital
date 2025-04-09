import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import { Talentos } from "../pages/Talento/Talentos";
import Perspectivas from "../pages/Pespectiva/Pespectiva";
import Contacto from "../pages/Contactos/Contactos";

export default function Rotas() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/talentos" element={<Talentos/>}></Route>
                <Route path="/perpectiva" element={<Perspectivas/>}></Route>
                <Route path="/contactos" element={<Contacto/>}></Route>
            </Routes>       
        </BrowserRouter>
    )
}
