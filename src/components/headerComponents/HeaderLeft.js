import React from "react";
import Logo from "../../assets/logo-white.svg";
import DarkLogo from "../../assets/logo-dark-dark.svg";

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
