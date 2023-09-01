import React from "react";
import Nav from 'react-bootstrap/Nav';

import "./style.css";
import logo from "../../Images/Logo/logo.png";
import { BsFacebook, BsInstagram, BsTwitter, BsPinterest } from "react-icons/bs";

export default function Footer() {
   return(
      <footer className="containerFooter">
         <div className="boxLogoFooter">
            <img src={logo} alt="Logo Exploração Global" className="logoFooter" />
            <h2 className="TituloFooter">Explocação Global</h2>
         </div>
         <div className="containerNavLinks">
            <Nav defaultActiveKey="/" className="flex-column boxNavLinks">
               <Nav.Link href="/" className="navLink">Hospedágens baratas</Nav.Link>
               <Nav.Link eventKey="link-1" className="navLink">Hóspedágens promocionais</Nav.Link>
               <Nav.Link eventKey="link-2" className="navLink">Hóspedagens imperdíveis</Nav.Link>
            </Nav>
            <Nav defaultActiveKey="/" className="flex-column boxNavLinks">
               <Nav.Link href="/" className="navLink">Pacotes baratos</Nav.Link>
               <Nav.Link eventKey="link-1" className="navLink">Pacotes promocionais</Nav.Link>
               <Nav.Link eventKey="link-2" className="navLink">Pacotes imperdíveis</Nav.Link>
            </Nav>
            <Nav defaultActiveKey="/" className="flex-column boxNavLinks">
               <Nav.Link href="/" className="navLink">Passagens Aéreas baratas</Nav.Link>
               <Nav.Link eventKey="link-1" className="navLink">Passagens Aéreas promocionais</Nav.Link>
               <Nav.Link eventKey="link-2" className="navLink">Passagens Aéreas imperdíveis</Nav.Link>
            </Nav>

            <Nav defaultActiveKey="/" className="flex-column boxNavLinks">
               <Nav.Link href="/" className="navLink">Dúvidas Frequentes</Nav.Link>
               <Nav.Link eventKey="link-1" className="navLink">Fidelidade</Nav.Link>
               <Nav.Link eventKey="link-2" className="navLink">Promoção relâmpago</Nav.Link>
            </Nav>
         </div>
         <div className="containerRedes">
            <h2>Siga-nos!</h2>
            <div className="boxRedesSociais">
               <button className="redesSociais"><BsFacebook className="icones facebook" /></button>
               <button className="redesSociais"><BsInstagram className="icones instagram" /></button>
               <button className="redesSociais"><BsTwitter className="icones twitter" /></button>
               <button className="redesSociais"><BsPinterest className="icones pinterest" /></button>
            </div>
         </div>
         <p>Copyright &copy; 2023 - Desenvolvido por Éverson Vieira</p>
      </footer>
   );
}