import React from "react";
import Header from "../../Components/Header/Header";
import NavbarButtons from "../../Components/NavbarButtons/NavbarButtons";

import "./style.css";

export default function Hospedagens() {
   return(
      <div>
         <Header />
         <main>
            <NavbarButtons />
            <h1>Hospedagens</h1>
         </main>
      </div>
   );
}