import React from "react";
import "./Header.css";
import HeaderRight from "./headerComponents/HeaderRight";
import MenuIcon from "@mui/icons-material/Menu";

import { HeaderLeft } from "./headerComponents/HeaderLeft";

const Header = () => {
  const [style, setStyle] = React.useState({ display: "none" });

  const handleMenuClick = () => {
    if (style.display === "none") {
      setStyle({ display: "flex" });
    } else {
      setStyle({ display: "none" });
    }
  };

  return (
    <header className="header">
      <HeaderLeft />
      <HeaderRight style={style} />
      <button onClick={handleMenuClick} className="menu-div">
        <MenuIcon />
      </button>
    </header>
  );
};

export default Header;
