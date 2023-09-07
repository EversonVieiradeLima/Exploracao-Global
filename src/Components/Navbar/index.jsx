import React from "react";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Button from 'react-bootstrap/Button';

import "./style.css"
import logo from "../../Images/Logo/logo.png";
import { BiLogIn, BiBlock } from "react-icons/bi";
import { HiOutlineDocumentArrowUp } from "react-icons/hi2";
import { PiSuitcaseRolling, PiWechatLogoBold } from "react-icons/pi";
import { IoDocumentTextOutline } from "react-icons/io5";
import { BsQuestionCircle } from "react-icons/bs";

export default function NavBar() {

   return (
    <div>
      {[false].map((expand) => (
        <Navbar key={expand} expand={expand} className="bg-body-tertiary navbar" data-bs-theme="dark">
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
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} className="toggle" />
              
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
              className="offCanvas"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Menu
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body className="containerButtons">
                <Button variant="primary" size="lg" className="buttons"><BiLogIn className="iconsMenu" /> Fazer Login</Button>
                <Button variant="primary" size="lg" className="buttons"><HiOutlineDocumentArrowUp className="iconsMenu" /> Fazer Cadastro</Button>
                <Button variant="primary" size="lg" className="buttons"><PiSuitcaseRolling className="iconsMenu" /> Meus Pedidos</Button>
                <Button variant="primary" size="lg" className="buttons"><PiWechatLogoBold className="iconsMenu" /> Central de Ajuda</Button>
                <Button variant="primary" size="lg" className="buttons"><IoDocumentTextOutline className="iconsMenu" /> Termos e Condições</Button>
                <Button variant="primary" size="lg" className="buttons"><BiBlock className="iconsMenu" /> Política de Privacidade</Button>
                <Button variant="primary" size="lg" className="buttons"><BsQuestionCircle className="iconsMenu" /> Dúvidas Frequentes</Button>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </div>
   )
}