import React, { useEffect, useState } from "react";
import logoAdaBranco from "../../imagens/logoAdaBranco.png";
import { Link } from "react-router-dom";
import "./HeaderStyle.css";

export default function Header() {
  const [navBackground, setNavBackground] = useState("transparent");

  const getLuminance = (rgb) => {
    const match = rgb.match(/\d+/g);
    if (!match) return 0;

    const [r, g, b] = match.map(Number);
    return (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll(".section");
      let newBackground = "transparent";

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 90 && rect.bottom >= 90) { 
          const bgColor = window.getComputedStyle(section).backgroundColor;
          const luminance = getLuminance(bgColor);

          newBackground = luminance > 0.6 ? "rgba(0, 0, 0, 0.7)" : "transparent";
        }
      });

      setNavBackground(newBackground);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav className="navBar" style={{ backgroundColor: navBackground }}>
        <Link to="/#">
          <img src={logoAdaBranco} alt="Logotipo da AdaCapital" className="logotipo" />
        </Link>

        <ul className="navList">
          <li><Link to="/#" className="navLi">Portfólio</Link></li>
          <li><Link to="/talentos" className="navLi">Talento</Link></li>
          <li><Link to="/#" className="navLi">Perspectivas</Link></li>
          <li><Link to="/#" className="navLi">Contacto</Link></li>
          <li><Link to="/#" className="navLi loginBorder">Login</Link></li>
        </ul>
      </nav>
      <div className="borde_bottom"></div>
    </>
  );
}
