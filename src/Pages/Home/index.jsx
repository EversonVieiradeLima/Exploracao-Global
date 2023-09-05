import React, { useState } from "react";
import Janela from "../../Components/Modal/Janela";
import Header from "../../Components/Header/Header";
import NavbarButtons from "../../Components/NavbarButtons/NavbarButtons";
import Button from "react-bootstrap/Button";
import Formulario from "../../Components/FormHome";
import Carrossel from "../../Components/Carrossel/Carrossel";
import Cards from "../../Components/Cards/Cards";
import Duvidas from "../../Components/Accordion/Duvidas";
import ScrollTop from "../../Components/ButtonScroll/ScrollTop";
import Footer from "../../Components/Footer/Footer";

import "./style.css";

export default function Home() {
  const [showCards, setShowCards] = useState(false);
  const [reverseCards, setReverseCards] = useState(false);

  const toggleCards = () => {
    setShowCards(!showCards);
    setReverseCards(!reverseCards);
  };

  return (
    <div>
      <Janela />
      <Header />
      <main>
        <NavbarButtons />
        <Formulario />
        <Carrossel />
        <Cards reverseCards={reverseCards}  />

        {showCards && <Cards reverseCards={reverseCards}  />}

        <div className="boxButtonMaisDestinos">
          <Button size="lg" onClick={toggleCards} className="buttonMaisDestinos" id="buttonMaisDestinos">
            {showCards ? 'Ver Menos Destinos' : 'Ver Mais Destinos'}
          </Button>
        </div>

        <Duvidas />
        <ScrollTop />
      </main>
      <Footer />
    </div>
  );
}
