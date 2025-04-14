import React from "react";
import "./InitHomeStyle.css";
import Animacao from "../Animacao/Animacao";

export default function InitHome() {
    return (
        <main className="section mainInitHome">
            <Animacao />
            <aside className="asideInitHome">

                <h1 className="h1InitHome">
                    A <strong><b>ADACapital</b></strong> fornece recursos e conselhos para os criadores, 
                    inventores e empreendedores que estão construindo um novo futuro.
                </h1>

            </aside>
            
        </main>
    )
}
