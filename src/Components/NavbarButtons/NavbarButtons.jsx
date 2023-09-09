import React from "react";
import { Link, useLocation } from "react-router-dom";
import Button from "react-bootstrap/Button";

import "./style.css";
import { PiSuitcaseLight } from "react-icons/pi";
import { Building } from "react-bootstrap-icons";
import { TfiMapAlt } from "react-icons/tfi";
import { LuPlane } from "react-icons/lu";
import { IoIosPeople } from "react-icons/io";

export default function NavbarButtons() {
  const location = useLocation();

   return (
      <div className="boxButtonOption">
          <div className="boxButton">
            <NavLink to="/" currentPath={location.pathname}>
              <PiSuitcaseLight className="iconButton" /> Pacotes
            </NavLink>
          </div>
          <div className="boxButton">
            <NavLink to="/hospedagens" currentPath={location.pathname}>
              <Building className="iconButton" /> Hospedagens
            </NavLink>
          </div>
          <div className="boxButton">
            <NavLink to="/destinos-turisticos" currentPath={location.pathname}>
              <TfiMapAlt className="iconButton" /> Destinos Turísticos
            </NavLink>
          </div>
          <div className="boxButton">
            <NavLink to="/passagens-aereas" currentPath={location.pathname}>
              <LuPlane className="iconButton" /> Passagens Aéreas
            </NavLink>
          </div>
          <div className="boxButton">
            <NavLink to="/quem-somos" currentPath={location.pathname}>
              <IoIosPeople className="iconButton" /> Quem Somos
            </NavLink>
          </div>
        </div>
   );
}

function NavLink({ to, currentPath, children }) {
  const isActive = to === currentPath;

  return (
    <Button
      as={Link}
      to={to}
      size="lg"
      className={`buttonOption ${isActive ? "on" : ""}`}
    >
      {children}
    </Button>
  );
}