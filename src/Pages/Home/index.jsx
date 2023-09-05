import React, { useState, useEffect } from "react";
import Janela from "../../Components/Modal/Janela";
import Header from "../../Components/Header/Header";
import NavbarButtons from "../../Components/NavbarButtons/NavbarButtons";
import Button from "react-bootstrap/Button";
import Formulario from "../../Components/FormHome";
import Carrossel from "../../Components/Carrossel/Carrossel";
import Cards from "../../Components/Cards/Cards";
import Footer from "../../Components/Footer/Footer";

import "./style.css";
import { IoIosArrowUp } from "react-icons/io";

export default function Home() {
  const [showButton, setShowButton] = useState(false);

  const [showCards, setShowCards] = useState(false);

  const toggleCards = () => {
    setShowCards(!showCards);
  };

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  const scrollToTop = () => {
    const scrollStep = -window.scrollY / 20;

    const scrollInterval = setInterval(() => {
      if (window.scrollY !== 0) {
        window.scrollBy(0, scrollStep);
      } else {
        clearInterval(scrollInterval);
      }
    }, 15);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <Janela />
      <Header />
      <main>
        <NavbarButtons />
        <Formulario />
        <Carrossel />
        <Cards />

        <div className="boxButtonMaisDestinos">
          <Button size="lg" onClick={toggleCards} className="buttonMaisDestinos" id="buttonMaisDestinos">
            {showCards ? 'Ver Menos Destinos' : 'Ver Mais Destinos'}
          </Button>
        </div>
      {showCards && <Cards />}

        <div className={`back-to-top ${showButton ? "show" : ""}`}>
          <Button
            variant="primary"
            onClick={scrollToTop}
            className="buttonScroll"
          >
            <IoIosArrowUp />
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  );
}
