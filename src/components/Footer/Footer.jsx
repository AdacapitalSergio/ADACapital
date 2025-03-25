import React from "react";
import './FooterStyle.css';

export default function Footer() {
    return (
        <footer className="footer">
            <p className="pFooter">
                © {new Date().getFullYear() } todos os direitos reservados.
            </p>
        </footer>
    )
}