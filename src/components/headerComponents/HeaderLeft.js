import React from "react";
import Logo from "../../assets/aircart-logo.png";

export const HeaderLeft = () => {
  return (
    <div className="header-left">
      <img className="aircart-logo" src={Logo} alt="aircart-logo" />
    </div>
  );
};
