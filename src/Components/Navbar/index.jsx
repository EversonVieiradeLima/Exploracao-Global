import React from "react";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';

import "./style.css"
import logo from "../../Images/Logo/logo.png";

export default function NavBar() {

   return (
    <div>
      <Navbar className="bg-body-tertiary navbar" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/" className="navbarBrand">
            <img
              alt="Logo Exploração Global"
              src={logo}
              width="60"
              height="60"
              className="d-inline-block align-top"
            />{' '}
            Exploração Global
          </Navbar.Brand>
          <div>
            <Button variant="primary" size="lg" className="buttonLogin">Login</Button>{' '}
            <Button variant="outline-primary" size="lg" className="buttonCadastro">Cadastro</Button>
          </div>
        </Container>
      </Navbar>
    </div>
   )
}