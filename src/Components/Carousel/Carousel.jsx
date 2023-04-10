import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";

import Calc from "../../img/calculadora.png";
import Nlw from "../../img/nlw-sports.png";
import Bikcraft from "../../img/bikcraft.png";
import formLogin from "../../img/form-login.png";
import slidePhoto from "../../img/slide-photos.png";
import animais from "../../img/animais.png";
import desafioM3P from "../../img/desafio1M3.png";
import desafio3M3 from "../../img/desafio3M3.png";
import desafio4M3 from "../../img/desafio4M3.png";
import desafio5M3 from "../../img/desafio5M3.png";
import desafio6M3 from "../../img/desafio6M3.png";
import gitHubApi from "../../img/github-users.png";
import quizSeries from "../../img/quiz-series.png";
import eccomerce from "../../img/eccomerce.png";

import "./Carousel.scss";

export const Carousel = () => {
  const settings = {
    infinite: true,
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  };
  return (
    <Slider {...settings}>
      <div className="container-infoCarts">
        <div className="container-info">
          <figure className="container-img">
            <img
              className="img-portfolio"
              src={Calc}
              alt="projeto calculadora"
            />
          </figure>
          <h3>Projeto Calculadora</h3>
          <p>Calculadora feita para testar conhecimento em Js</p>
          <ul className="container-tools">
            <li className="tools-link">HTML</li>
            <li className="tools-link">CSS</li>
            <li className="tools-link">JS</li>
          </ul>
          <div className="container-btn">
            <Link
              className="btn"
              to="https://thiagoduutra.github.io/Calculadora/"
              target="_blank"
            >
              Deploy
            </Link>
            <Link
              className="btn"
              to="https://github.com/thiagoduutra/Calculadora"
              target="_blank"
            >
              Repositório
            </Link>
          </div>
        </div>
      </div>
      <div className="container-infoCarts">
        <div className="container-info">
          <figure className="container-img">
            <img className="img-portfolio" src={Nlw} alt="projeto NLW" />
          </figure>
          <h3>Projeto NLW e-Sports</h3>
          <p>Feita na semana next level da Rocketseat</p>
          <ul className="container-tools">
            <li className="tools-link">HTML</li>
            <li className="tools-link">CSS</li>
          </ul>
          <div className="container-btn">
            <Link
              className="btn"
              to="https://thiagoduutra.github.io/nlw-esports-explorer/"
              target="_blank"
            >
              Deploy
            </Link>
            <Link
              className="btn"
              to="https://github.com/thiagoduutra/nlw-esports-explorer"
              target="_blank"
            >
              Repositório
            </Link>
          </div>
        </div>
      </div>
      <div className="container-infoCarts">
        <div className="container-info">
          <figure className="container-img">
            <img
              className="img-portfolio"
              src={Bikcraft}
              alt="projeto bikCraft"
            />
          </figure>
          <h3>Projeto BikCraft</h3>
          <p>Projeto feito no curso Origamid</p>
          <ul className="container-tools">
            <li className="tools-link">HTML</li>
            <li className="tools-link">CSS</li>
            <li className="tools-link">JS</li>
          </ul>
          <div className="container-btn">
            <Link
              className="btn"
              to="https://thiagoduutra.github.io/bikcraft/"
              target="_blank"
            >
              Deploy
            </Link>
            <Link
              className="btn"
              to="https://github.com/thiagoduutra/bikcraft"
              target="_blank"
            >
              Repositório
            </Link>
          </div>
        </div>
      </div>
      <div className="container-infoCarts">
        <div className="container-info">
          <figure className="container-img">
            <img
              className="img-portfolio"
              src={formLogin}
              alt="projeto login"
            />
          </figure>
          <h3>Projeto Formulário Login</h3>
          <p>Projeto iniciante</p>
          <ul className="container-tools">
            <li className="tools-link">HTML</li>
            <li className="tools-link">CSS</li>
            <li className="tools-link">JS</li>
          </ul>
          <div className="container-btn">
            <Link
              className="btn"
              to="https://thiagoduutra.github.io/form-loggin/"
              target="_blank"
            >
              Deploy
            </Link>
            <Link
              className="btn"
              to="https://github.com/thiagoduutra/form-loggin"
              target="_blank"
            >
              Repositório
            </Link>
          </div>
        </div>
      </div>
      <div className="container-infoCarts">
        <div className="container-info">
          <figure className="container-img">
            <img
              className="img-portfolio"
              src={slidePhoto}
              alt="projeto slide photo"
            />
          </figure>
          <h3>Projeto slide</h3>
          <p>Projeto feito para testar Js</p>
          <ul className="container-tools">
            <li className="tools-link">HTML</li>
            <li className="tools-link">CSS</li>
            <li className="tools-link">JS</li>
          </ul>
          <div className="container-btn">
            <Link
              className="btn"
              to="https://thiagoduutra.github.io/slide-photos/"
              target="_blank"
            >
              Deploy
            </Link>
            <Link
              className="btn"
              to="https://github.com/thiagoduutra/slide-photos"
              target="_blank"
            >
              Repositório
            </Link>
          </div>
        </div>
      </div>
      <div className="container-infoCarts">
        <div className="container-info">
          <figure className="container-img">
            <img
              className="img-portfolio"
              src={animais}
              alt="projeto animais fantasticos"
            />
          </figure>
          <h3>Projeto Animais Fantásticos</h3>
          <p>Projeto feito no curso Origamid</p>
          <ul className="container-tools">
            <li className="tools-link">HTML</li>
            <li className="tools-link">CSS</li>
            <li className="tools-link">JS</li>
            <li className="tools-link">Git</li>
          </ul>
          <div className="container-btn">
            <Link
              className="btn"
              to="https://thiagoduutra.github.io/AnimaisPage/"
              target="_blank"
            >
              Deploy
            </Link>
            <Link
              className="btn"
              to="https://github.com/thiagoduutra/AnimaisPage"
              target="_blank"
            >
              Repositório
            </Link>
          </div>
        </div>
      </div>
      <div className="container-infoCarts">
        <div className="container-info">
          <figure className="container-img">
            <img className="img-portfolio" src={desafioM3P} alt="Projeto M3" />
          </figure>
          <h3>Landing Page</h3>
          <p>Desafio 1 feito no programa de capacitação da M3 Academy </p>
          <ul className="container-tools">
            <li className="tools-link">HTML</li>
            <li className="tools-link">CSS</li>
          </ul>
          <div className="container-btn">
            <Link
              className="btn"
              to="https://thiagoduutra.github.io/challenge-landing-page/"
              target="_blank"
            >
              Deploy
            </Link>
            <Link
              className="btn"
              to="https://github.com/thiagoduutra/challenge-landing-page"
              target="_blank"
            >
              Repositório
            </Link>
          </div>
        </div>
      </div>
      <div className="container-infoCarts">
        <div className="container-info">
          <figure className="container-img">
            <img className="img-portfolio" src={desafio3M3} alt="Projeto M3" />
          </figure>
          <h3>Challenge Tourist</h3>
          <p>Desafio 3 feito no programa de capacitação da M3 Academy </p>
          <ul className="container-tools">
            <li className="tools-link">HTML</li>
            <li className="tools-link">SASS</li>
            <li className="tools-link">GIT</li>
            <li className="tools-link">JS</li>
            <li className="tools-link">Slick</li>
            <li className="tools-link">Gulp</li>
          </ul>
          <div className="container-btn">
            <Link
              className="btn"
              to="https://github.com/thiagoduutra/Challenge-tourist-attractions"
              target="_blank"
            >
              Repositório
            </Link>
          </div>
        </div>
      </div>
      <div className="container-infoCarts">
        <div className="container-info">
          <figure className="container-img">
            <img className="img-portfolio" src={desafio4M3} alt="Projeto M3" />
          </figure>
          <h3>Checkout</h3>
          <p>Desafio 4 feito no programa de capacitação da M3 Academy </p>
          <ul className="container-tools">
            <li className="tools-link">HTML</li>
            <li className="tools-link">SASS</li>
            <li className="tools-link">GIT</li>
            <li className="tools-link">JS</li>
            <li className="tools-link">Slick</li>
          </ul>
          <div className="container-btn">
            <Link
              className="btn"
              to="https://github.com/thiagoduutra/Challenge-template-checkout"
              target="_blank"
            >
              Repositório
            </Link>
          </div>
        </div>
      </div>
      <div className="container-infoCarts">
        <div className="container-info">
          <figure className="container-img">
            <img className="img-portfolio" src={desafio5M3} alt="Projeto M3" />
          </figure>
          <h3>React JS</h3>
          <p>Desafio 5 feito no programa de capacitação da M3 Academy </p>
          <ul className="container-tools">
            <li className="tools-link">HTML</li>
            <li className="tools-link">CSS</li>
            <li className="tools-link">GIT</li>
            <li className="tools-link">React JS</li>
            <li className="tools-link">TypeScript</li>
          </ul>
          <div className="container-btn">
            <Link
              className="btn"
              to="https://github.com/thiagoduutra/Challenge-React-TS"
              target="_blank"
            >
              Repositório
            </Link>
          </div>
        </div>
      </div>
      <div className="container-infoCarts">
        <div className="container-info">
          <figure className="container-img">
            <img className="img-portfolio" src={desafio6M3} alt="Projeto M3" />
          </figure>
          <h3>React JS</h3>
          <p>Desafio 6 feito no programa de capacitação da M3 Academy </p>
          <ul className="container-tools">
            <li className="tools-link">HTML</li>
            <li className="tools-link">SASS</li>
            <li className="tools-link">VTEX IO</li>
            <li className="tools-link">JSON</li>
            <li className="tools-link">React JS</li>
          </ul>
          <div className="container-btn">
            <Link
              className="btn"
              to="https://github.com/thiagoduutra/challenge-vtex-io"
              target="_blank"
            >
              Repositório
            </Link>
          </div>
        </div>
      </div>
      <div className="container-infoCarts">
        <div className="container-info">
          <figure className="container-img">
            <img
              className="img-portfolio"
              src={quizSeries}
              alt="Projeto series"
            />
          </figure>
          <h3>Quiz de series</h3>
          <p>Projeto para estudo ReactJS </p>
          <ul className="container-tools">
            <li className="tools-link">HTML</li>
            <li className="tools-link">SASS</li>
            <li className="tools-link">GIT</li>
            <li className="tools-link">React JS</li>
          </ul>
          <div className="container-btn">
            <Link
              className="btn"
              to="https://thiagoduutra.github.io/quiz-series/"
              target="_blank"
            >
              Deploy
            </Link>
            <Link
              className="btn"
              to="https://github.com/thiagoduutra/quiz-series"
              target="_blank"
            >
              Repositório
            </Link>
          </div>
        </div>
      </div>
      <div className="container-infoCarts">
        <div className="container-info">
          <figure className="container-img">
            <img className="img-portfolio" src={gitHubApi} alt="projeto API" />
          </figure>
          <h3>Github repositories</h3>
          <p>Projeto para consumo de API </p>
          <ul className="container-tools">
            <li className="tools-link">HTML</li>
            <li className="tools-link">SASS</li>
            <li className="tools-link">GIT</li>
            <li className="tools-link">React JS</li>
          </ul>
          <div className="container-btn">
            <Link
              className="btn"
              to="https://github.com/thiagoduutra/GitHub-users"
              target="_blank"
            >
              Repositório
            </Link>
          </div>
        </div>
      </div>
      <div className="container-infoCarts">
        <div className="container-info">
          <figure className="container-img">
            <img
              className="img-portfolio"
              src={eccomerce}
              alt="Projeto ecommerce"
            />
          </figure>
          <h3>Ecommerce</h3>
          <p>Projeto para testar conhecimentos React JS </p>
          <ul className="container-tools">
            <li className="tools-link">HTML</li>
            <li className="tools-link">SASS</li>
            <li className="tools-link">GIT</li>
            <li className="tools-link">React JS</li>
          </ul>
          <div className="container-btn">
            <Link
              className="btn"
              to="https://thiagoduutra.github.io/ecommerce/"
              target="_blank"
            >
              Deploy
            </Link>
            <Link
              className="btn"
              to="https://github.com/thiagoduutra/ecommerce"
              target="_blank"
            >
              Repositório
            </Link>
          </div>
        </div>
      </div>
    </Slider>
  );
};

export default Carousel;
