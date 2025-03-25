import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home";

export default function Rotas() {
    return (
        <BrowserRouter>
            <Home />
        </BrowserRouter>
    )
}
