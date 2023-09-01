import React from "react";
import Button from "react-bootstrap/Button";

import "./style.css";
import { Building } from "react-bootstrap-icons";
import { TfiMapAlt } from "react-icons/tfi";
import { LuPlane } from "react-icons/lu";
import { IoIosPeople } from "react-icons/io";

export default function NavbarButtons() {
   return (
      <div className="boxButtonOption">
          {/* <Button variant="outline-primary" size="lg" className="buttonOption on">Home</Button> */}
          <div className="boxButton">
            <Button
              variant="outline-primary"
              size="lg"
              className="buttonOption"
            >
              <Building className="iconButton" /> Hospedagens
            </Button>
          </div>
          <div className="boxButton">
            <Button
              variant="outline-primary"
              size="lg"
              className="buttonOption"
            >
              <TfiMapAlt className="iconButton" /> Destinos Turísticos
            </Button>
          </div>
          <div className="boxButton">
            <Button
              variant="outline-primary"
              size="lg"
              className="buttonOption"
            >
              <LuPlane className="iconButton" /> Passagens Aéreas
            </Button>
          </div>
          <div className="boxButton">
            <Button
              variant="outline-primary"
              size="lg"
              className="buttonOption"
            >
              <IoIosPeople className="iconButton" /> Quem Somos
            </Button>
          </div>
        </div>
   );
}