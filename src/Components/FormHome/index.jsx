import React, { useState } from "react";
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import { packagesData } from "../Pesquisa";

import "./style.css";
import bussola from "../../Images/Inputs/bussola.png";
 
const TravelPackage = ({ destination, image, description }) => (
   <div>
      <Row xs={1} md={2} className="g-4">
         <Col key={1}>
            <Card className="card">
               <Card.Img variant="top" src={image} />
               <Card.Body>
                  <Card.Title>{destination}</Card.Title>
                  <Card.Text>{description}</Card.Text>
               </Card.Body>
               <Button type="button" size="lg" className="buttonDetalhes">Ver Detalhes</Button>
            </Card>
         </Col>
      </Row>
   </div>
);

export default function Formulario() {
   const [searchTerm, setSearchTerm] = useState('');
   const [filteredPackages, setFilteredPackages] = useState([]);

   const handleSearch = () => {
      const newFilteredPackages = packagesData.filter(travelPackage => travelPackage.destination.toLowerCase().includes(searchTerm.toLowerCase()));
      setFilteredPackages(newFilteredPackages);
   };

   const handleInputChange = event => {
      setSearchTerm(event.target.value);
   };
   
   const handleSubmit = event => {
      event.preventDefault();
      if(event.target[0].value !== "") {
         handleSearch();
      }
   };

   return (
      <div className="containerPesquisa">
         <Form className="boxForm" onSubmit={handleSubmit}>
            <Row className="fomulario">
               <Col xs="auto">
                  <InputGroup className="mr-sm-2 input">
                     <InputGroup.Text className="boxImg">
                        <img src={bussola} alt="Bussola" width="20" height="20" />
                     </InputGroup.Text>
                     <Form.Control
                     type="text"
                     placeholder="Digite o Destino"
                     className="formControl"
                     value={searchTerm}
                     onChange={handleInputChange}
                     />
                  </InputGroup>
               </Col>
               <Col xs="auto">
                  <Button type="submit" size="lg" className="buttonBuscar">Buscar Destino</Button>
               </Col>
            </Row>
         </Form>
         <div className="packageList">
            {filteredPackages.map(travelPackage => (
               <TravelPackage
                  key={travelPackage.id}
                  destination={travelPackage.destination}
                  image={travelPackage.image}
                  description={travelPackage.description}
               />
            ))}
         </div>
      </div>
   );
}