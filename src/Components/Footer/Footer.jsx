import React from "react";
import { NavLink } from "react-router-dom";
import { FaHome, FaList, FaImage, FaPaperPlane, FaUser } from "react-icons/fa";

import "./Footer.scss";

const Footer = () => {
  return (
    <div className="container-footer">
      <span className="footer-name">Thiago Dutra</span>
      <nav className="container-navFooter">
        <ul className="container-ulFooter">
          <li className="footer-links">
            <NavLink className="link-svg" to="/home">
              <FaHome className="svg-img" />
            </NavLink>
            <NavLink className="link" to="/home">
              Home
            </NavLink>
          </li>
          <li className="footer-links">
            <NavLink className="link-svg" to="/aboutme">
              <FaUser className="svg-img" />
            </NavLink>
            <NavLink className="link" to="/aboutme">
              Sobre mim
            </NavLink>
          </li>
          <li className="footer-links">
            <NavLink className="link-svg" to="/curriculo">
              <FaList className="svg-img" />
            </NavLink>
            <NavLink className="link" to="/curriculo">
              Curriculo
            </NavLink>
          </li>
          <li className="footer-links">
            <NavLink className="link-svg" to="/portfolio">
              <FaImage className="svg-img" />
            </NavLink>
            <NavLink className="link" to="/portfolio">
              Portfólio
            </NavLink>
          </li>

          <li className="footer-links">
            <NavLink className="link-svg" to="/contact">
              <FaPaperPlane className="svg-img" />
            </NavLink>
            <NavLink className="link" to="/contact">
              Contato
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Footer;
