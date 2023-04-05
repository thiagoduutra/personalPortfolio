import React from "react";
import { Link } from "react-router-dom";
import "./Home.scss";

const Home = () => {
  return (
    <section className="container animeLeft">
      <div className="container-home">
        <span>Olá,</span>
        <h2 className="title-home">Me chamo Thiago Dutra</h2>
        <p>
          Sou desenvolvedor front end, apaixonado por tecnologia e em aprender
          coisas novas.
        </p>
        <Link to="/contact" className="btn">
          Entre em contato
        </Link>
      </div>
    </section>
  );
};

export default Home;
