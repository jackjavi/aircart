import React from "react";
import "./Header.css";
import HeaderRight from "./headerComponents/HeaderRight";

import { HeaderLeft } from "./headerComponents/HeaderLeft";

const Header = () => {
  return (
    <header className="header">
      <HeaderLeft />
      <HeaderRight />
    </header>
  );
};

export default Header;
