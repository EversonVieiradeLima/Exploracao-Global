import React from "react";
import Header from "../../Components/Header/Header";
import NavbarButtons from "../../Components/NavbarButtons/NavbarButtons";

import "./style.css";

export default function PassagensAereas() {
   return(
      <div>
         <Header />
         <main>
            <NavbarButtons />
            <h1>Passagens Aéreas</h1>
         </main>
      </div>
   );
}