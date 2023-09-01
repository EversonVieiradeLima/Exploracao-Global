import React from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import "./style.css";
import pao_de_acucar_quad from "../../Images/Cards/pao_de_acucar_quad.png";
import hotel_luz_azul_quad from "../../Images/Cards/hotel_luz_azul_quad.png";
import passeio_de_barco_quad from "../../Images/Cards/passeio_de_barco_quad.png";
import museu_dOrsay_quad from "../../Images/Cards/museu_dOrsay_quad.png";

export default function Cards() {
   return(
      <div className="containerCards">
         <div className="boxCards">
            <Card className="bg-dark text-white boxCard">
               <Card.Img src={pao_de_acucar_quad} alt="Pão de açúcar" height={288} />
               <Card.ImgOverlay className="textCard">
                  <Card.Title>Passeio de Barco</Card.Title>
                  <Card.Text>Bruges, Belgica</Card.Text>
                  <Button type="button" size="lg" className="buttonDetalhesCards">Ver Detalhes</Button>
               </Card.ImgOverlay>
            </Card>

            <Card className="bg-dark text-white boxCard">
               <Card.Img src={passeio_de_barco_quad} alt="Pão de açúcar" height={288} />
               <Card.ImgOverlay className="textCard">
                  <Card.Title>Passeio de Barco</Card.Title>
                  <Card.Text>Bruges, Belgica</Card.Text>
                  <Button type="button" size="lg" className="buttonDetalhesCards">Ver Detalhes</Button>
               </Card.ImgOverlay>
            </Card>

            <Card className="bg-dark text-white boxCard">
               <Card.Img src={museu_dOrsay_quad} alt="Pão de açúcar" height={288} />
               <Card.ImgOverlay className="textCard">
                  <Card.Title>Passeio de Barco</Card.Title>
                  <Card.Text>Bruges, Belgica</Card.Text>
                  <Button type="button" size="lg" className="buttonDetalhesCards">Ver Detalhes</Button>
               </Card.ImgOverlay>
            </Card>

            <Card className="bg-dark text-white boxCard">
               <Card.Img src={hotel_luz_azul_quad} alt="Pão de açúcar" height={288} />
               <Card.ImgOverlay className="textCard">
                  <Card.Title>Passeio de Barco</Card.Title>
                  <Card.Text>Bruges, Belgica</Card.Text>
                  <Button type="button" size="lg" className="buttonDetalhesCards">Ver Detalhes</Button>
               </Card.ImgOverlay>
            </Card>
         </div>

         <div className="boxCards">
            <Card className="bg-dark text-white boxCard">
               <Card.Img src={museu_dOrsay_quad} alt="Pão de açúcar" height={288} />
               <Card.ImgOverlay className="textCard">
                  <Card.Title>Passeio de Barco</Card.Title>
                  <Card.Text>Bruges, Belgica</Card.Text>
                  <Button type="button" size="lg" className="buttonDetalhesCards">Ver Detalhes</Button>
               </Card.ImgOverlay>
            </Card>

            <Card className="bg-dark text-white boxCard">
               <Card.Img src={hotel_luz_azul_quad} alt="Pão de açúcar" height={288} />
               <Card.ImgOverlay className="textCard">
                  <Card.Title>Passeio de Barco</Card.Title>
                  <Card.Text>Bruges, Belgica</Card.Text>
                  <Button type="button" size="lg" className="buttonDetalhesCards">Ver Detalhes</Button>
               </Card.ImgOverlay>
            </Card>

            <Card className="bg-dark text-white boxCard">
               <Card.Img src={pao_de_acucar_quad} alt="Pão de açúcar" height={288} />
               <Card.ImgOverlay className="textCard">
                  <Card.Title>Passeio de Barco</Card.Title>
                  <Card.Text>Bruges, Belgica</Card.Text>
                  <Button type="button" size="lg" className="buttonDetalhesCards">Ver Detalhes</Button>
               </Card.ImgOverlay>
            </Card>

            <Card className="bg-dark text-white boxCard">
               <Card.Img src={passeio_de_barco_quad} alt="Pão de açúcar" height={288} />
               <Card.ImgOverlay className="textCard">
                  <Card.Title>Passeio de Barco</Card.Title>
                  <Card.Text>Bruges, Belgica</Card.Text>
                  <Button type="button" size="lg" className="buttonDetalhesCards">Ver Detalhes</Button>
               </Card.ImgOverlay>
            </Card>
         </div>   
      </div>
   );
}