import React from "react";
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaFacebook, FaInstagram, FaYoutube, FaLinkedin, FaTiktok  } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import "./ContactosStyle.css";

export default function Contacto() {
    return (
        <main style={{ paddingTop: "8rem", paddingBottom: "2rem"}}>
            <section className="contact-container">
                <h2>Entre em Contato</h2>

                <div className="contact-info">
                    <div className="contact-item">
                        <FaMapMarkerAlt className="contact-icon" />
                        <div>
                            <h3>Endereço</h3>
                            <p><b>Lubango - Huíla (Angola):</b> Bairro da Nossa Senhora do Monte, Junto a Polícia de Intervenção Rápida.</p>
                        </div>
                    </div>

                    <div className="contact-item">
                        <FaPhone className="contact-icon" />
                        <div>
                            <h3>Telefone</h3>
                            <p>(+244) 929 740 455</p>
                        </div>
                    </div>

                    <div className="contact-item">
                        <FaEnvelope className="contact-icon" />
                        <div>
                            <h3>Email</h3>
                            <p>contacto@adacapital.ao</p>
                        </div>
                    </div>
                </div>
                <ul className="ul-icon">
                    <li>
                        <a href="/#" target="_blank" rel="noopener noreferrer">
                            <FaFacebook />
                        </a>
                    </li>
                    <li>
                        <a href="/#" target="_blank" rel="noopener noreferrer">
                            <FaInstagram />
                        </a>
                    </li>
                    <li>
                        <a href="/#" target="_blank" rel="noopener noreferrer">
                            <FaYoutube />
                        </a>
                    </li>
                    <li>
                        <a href="/#" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin />
                        </a>
                    </li>
                    <li>
                        <a href="/#" target="_blank" rel="noopener noreferrer">
                            <FaTiktok />
                        </a>
                    </li>
                    <li>
                        <a href="/#" target="_blank" rel="noopener noreferrer">
                            <BsTwitterX />
                        </a>
                    </li>
                </ul>
            </section>
        </main>
    );
}
