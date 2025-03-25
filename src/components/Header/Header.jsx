import React from "react";
import logoAdaBranco from "../../imagens/logoAdaBranco.png";
import { Link } from "react-router-dom";
import './HeaderStyle.css';

export default function  Header() {
    return (
        <nav className="navBar">
            <Link to="/#">
                <img src={logoAdaBranco} alt="Logotipo da AdaCapital" className="logotipo" />
            </Link>

            <ul className="navList">
                <li>
                    <Link to="/#" className="navLi">
                        Portfólio
                    </Link>
                </li>
                <li>
                    <Link to="/#" className="navLi">
                        Talento
                    </Link>
                </li>
                <li>
                    <Link to="/#" className="navLi">
                        Perspectivas
                    </Link>
                </li>
                <li>
                    <Link to="/#" className="navLi">
                        Contacto
                    </Link>
                </li>
                <li>
                    <Link to="/#" className="navLi loginBorder">
                        Login
                    </Link>
                </li>
            </ul>
        </nav>
    )
}