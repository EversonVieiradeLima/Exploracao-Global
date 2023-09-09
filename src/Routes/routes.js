import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../Pages/Home/index.jsx";
import Hospedagens from "../Pages/Hospedagens/index.jsx";
import DestinosTuristicos from "../Pages/DestinosTuristicos/index.jsx";
import PassagensAereas from "../Pages/PassagensAereas/index.jsx";
import QuemSomos from "../Pages/QuemSomos/index.jsx";

export default function Rotas() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hospedagens" element={<Hospedagens />} />
        <Route path="/destinos-turisticos" element={<DestinosTuristicos />} />
        <Route path="/passagens-aereas" element={<PassagensAereas />} />
        <Route path="/quem-somos" element={<QuemSomos />} />
      </Routes>
    </Router>
  );
}
