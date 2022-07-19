/* ao adicionar a grid das fotos "portfolio" ficaram a sobrepor os contactos -.- */

import React from "react";
import "./Portfolio.css";
import img1 from "../../images/Imagens/img1.jpg";
import img2 from "../../images/Imagens/img2.jpg";
import img3 from "../../images/Imagens/img3.jpg";
import img4 from "../../images/Imagens/img4.jpg";
import img5 from "../../images/Imagens/pino.jpg";
import img6 from "../../images/Imagens/me.jpg";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>Trabalhos mais recentes</h5>
      <h2>Fotos</h2>
      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={img1} alt="" />
          </div>
          <h3>descriçao</h3>
        </article>
          <article className="portfolio__item">
            <div className="portfolio__item-image">
              <img src={img2} alt="" />
            </div>
            <h3>descriçao</h3>
          </article>
            <article className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={img3} alt="" />
              </div>
              <h3>descriçao</h3>
            </article>
              <article className="portfolio__item">
                <div className="portfolio__item-image">
                  <img src={img4} alt="" />
                </div>
                <h3>descriçao</h3>
              </article>
                <article className="portfolio__item">
                  <div className="portfolio__item-image">
                    <img src={img5} alt="" />
                  </div>
                  <h3>descriçao</h3>
                </article>
                <article className="portfolio__item">
                  <div className="portfolio__item-image">
                    <img src={img6} alt="" />
                  </div>
                  <h3>descriçao</h3>
                </article>
              </div>
              
    </section>
  );
};

export default Portfolio;
