import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home";
import Pespectiva from "../pages/Pespectiva/Pespectiva";

export default function Rotas() {
    return (
        <BrowserRouter>
            <Routes>
            <Route path="/" element={<Home />}></Route>
                <Route path="/pespectiva" element={<Pespectiva />}></Route>
            </Routes>
        </BrowserRouter>
    )
}
