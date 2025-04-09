import React from "react";
import Header from "../../components/Header/Header";
import InitHome from "../../components/InitHome/InitHome";
import Footer from "../../components/Footer/Footer";
import SecondHome from "../../components/SecondHome/SecondHome";
import { Missao } from "../../components/talentos/missao/Missao";

export default function Home() {
    return (
        <main>
            <Header />
            <InitHome />
            <SecondHome />
            <Missao />
            <Footer />
        </main>
    )
}
