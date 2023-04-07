import React from "react";

import { FaBookOpen } from "react-icons/fa";
import imgCurriculo from "../../img/curriculo.png";

import curriculoPdf from "../../pdf/ThiagoDutra_curriculo.pdf";

import "./Curriculo.scss";

const Curriculo = () => {
  return (
    <div className="container animeLeft">
      <h2 className="titleCurriculo">Currículo</h2>
      <div className="container-curriculo">
        <img className="imgCurriculo" src={imgCurriculo} alt="img curriculo" />

        <div className="container-desc">
          <span className="info-curriculo">
            Nome <b>Thiago Dutra Sampaio Leite</b>
          </span>
          <span className="info-curriculo">
            Idade <b>25 anos</b>
          </span>
          <span className="info-curriculo">
            Cidade <b>Nova Friburgo - RJ</b>
          </span>
          <span className="info-curriculo">
            Telefone <b>(22) 99881-1992</b>
          </span>
          <span className="info-curriculo">
            Email <b>ThiagoDuutra01@gmail.com</b>
          </span>
          <span className="info-curriculo">
            Freelance <b>Disponível</b>
          </span>
          <span className="info-curriculo">
            Idiomas <b>Inglês (intermediário)</b>
          </span>
          <div className="container-btn">
            <a href={curriculoPdf} target="_blank" className="btn">
              Curriculo
              <FaBookOpen className="iconBook" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Curriculo;
