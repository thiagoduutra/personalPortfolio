import React from "react";
import { FiLinkedin, FiGithub, FiMail } from "react-icons/fi";
import "./Contact.scss";

const Contact = () => {
  return (
    <div className="container animeLeft">
      <div className="container-contact">
        <h1 className="titleContact">Vamos trabalhar juntos?</h1>
        <span>Se você gostou do meu trabalho, entre em contato comigo!!</span>
        <ul className="container-iconsContact">
          <li className="link-contacts">
            <a
              href="https://www.linkedin.com/in/thiago-dutra-107b4a213/"
              target="_blank"
              title="Linkedin"
            >
              <FiLinkedin className="icons-contact" />
            </a>
          </li>
          <li className="link-contacts">
            <a href="" target="_blank" title="GitHub">
              <FiGithub className="icons-contact" />
            </a>
          </li>
          <li className="link-contacts">
            <a href="mailto:ThiagoDuutra01@gmail.com" title="Gmail">
              <FiMail className="icons-contact" />
            </a>
          </li>
        </ul>
        <span className="madeBy">Made by Thiago Dutra 2023</span>
      </div>
    </div>
  );
};

export default Contact;
