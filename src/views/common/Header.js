import React from "react";

import logo_rimac from "../../assets/img/logo_rimac.png";
import ic_phone from "../../assets/img/ic_phone.png";

export default function Header() {
  return (
    <header className="header">
      <img className="header__logo" src={logo_rimac} alt="Rimac" />
      <div className="header__link">
        <img src={ic_phone} alt="teléfono" />
        <span>Llámanos</span>
      </div>
    </header>
  );
}
