import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import Contactos from "../pages/Contactos/Contactos";

export default function Rotas() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/contactos" element={<Contactos />} />
            </Routes>
        </Router>
    )
}
