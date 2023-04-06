import React from "react";

import "./Portfolio.scss";
import Carousel from "../../Components/Carousel/Carousel";

const Portfolio = () => {
  return (
    <div className="container animeLeft">
      <div className="container-portfolio">
        <h2 className="titlePortfolio">Portfólio</h2>
        <Carousel />
      </div>
    </div>
  );
};

export default Portfolio;
