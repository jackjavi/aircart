import React from "react";
import Logo from "../../assets/aircart-logo.png";
import DarkLogo from "../../assets/aircart-dark-logo.png";

export const HeaderLeft = () => {
  return (
    <div className="header-left">
      <img className="aircart-logo-light" src={Logo} alt="aircart-logo" />
      <img
        className="aircart-logo-dark"
        src={DarkLogo}
        alt="aircart-dark-logo"
      />
    </div>
  );
};
