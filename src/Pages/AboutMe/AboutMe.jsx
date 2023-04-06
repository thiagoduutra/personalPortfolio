import React from "react";

import "./AboutMe.scss";

import Photo from "../../img/thiago.png";

const AboutMe = () => {
  return (
    <div className="container animeLeft">
      <div className="container-aboutMe">
        <div className="aboutMe">
          <h2 className="title-aboutMe">Sobre mim</h2>
          <p>
            Olá, me chamo Thiago, tenho 25 anos. Sou desenvolvedor Front End.
            Curso Sistemas de Informações no Cefet-RJ, atualmente estou no 6
            período. Estudando há cerca de 8 meses focado em HTML, CSS,
            JavaScript, SASS e iniciando projetos pessoais com React.<br></br>
            <br></br>
            Amo me desafiar e resolver problemas. Sempre disposto a aprender
            novas tecnologias, novos desafios e principalmente aprimorar meus
            conhecimentos.
          </p>
        </div>
        <div className="img-aboutMe">
          <div className="wrapper-img">
            <img className="img" src={Photo} alt="foto de perfil" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
