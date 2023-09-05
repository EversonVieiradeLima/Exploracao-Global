import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';

import recife from "../../Images/Banner/recife.png";
import rio_de_janeiro from "../../Images/Banner/rio_de_janeiro.png";
import salvador from "../../Images/Banner/salvador.png";
import londres from "../../Images/Banner/londres.png";
import roma from "../../Images/Banner/roma.png";

export default function Carrossel() {
   return (
      <Carousel slide={false}>
         <Carousel.Item>
            <Image src={recife} text="Recife, Pernambuco" className="imageCarrossel" />
            <Carousel.Caption>
               <h3>Recife - Pernambuco</h3>
               <p>Venha conhecer a cidade do frevo e se encante com as lindas praias de Recife!</p>
            </Carousel.Caption>
         </Carousel.Item>
         <Carousel.Item>
            <Image src={londres} />
            <Carousel.Caption>
               <h3>Big Ben - Londres</h3>
               <p>Conheça a torre que abriga o maior relógio de quatro lados do mundo, e é a décima quarta torre de relógio mais alta do mundo.</p>
            </Carousel.Caption>
         </Carousel.Item>
         <Carousel.Item>
            <Image src={salvador} />
            <Carousel.Caption>
               <h3>Salvador - Bahia</h3>
               <p>
                  Venha conhecer a Capital da Alegria. Cidade encantadora com praias balíssimas.
               </p>
            </Carousel.Caption>
         </Carousel.Item>
         <Carousel.Item>
            <Image src={roma} />
            <Carousel.Caption>
               <h3>Coliseu - Roma</h3>
               <p>
                  Venha para o maior anfiteatro do mundo e um dos maiores símbolos da cidade italiana.
               </p>
            </Carousel.Caption>
         </Carousel.Item>
         <Carousel.Item>
            <Image src={rio_de_janeiro} />
            <Carousel.Caption>
               <h3>Rio de Janeiro - Rio de Janeiro</h3>
               <p>
                  Esta é a cidade do carnaval, com praias encantadoras!
               </p>
            </Carousel.Caption>
         </Carousel.Item>
      </Carousel>
   );
}