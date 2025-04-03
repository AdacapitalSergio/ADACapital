import React from "react";
import Header from "../../components/Header/Header";
import InitHome from "../../components/InitHome/InitHome";
import Footer from "../../components/Footer/Footer";
import SecondHome from "../../components/SecondHome/SecondHome";
import Mapa from "../../components/Mapa/Mapa";

export default function Home() {
    return (
        <main>
            <Header />
            <InitHome />
            <SecondHome />
            <Footer />
        </main>
    )
}
