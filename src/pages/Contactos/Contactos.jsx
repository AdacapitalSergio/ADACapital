import React from "react";
import Contacto from "../../components/Contactos/Contactos";
import Header from "../../components/Header/Header";
import Mapa from "../../components/Mapa/Mapa";
import Footer from "../../components/Footer/Footer";

export default function Contactos() {
    return (
        <>
            <Header />
            <Contacto />
            <Mapa />
            <Footer />
        </>
    )
}