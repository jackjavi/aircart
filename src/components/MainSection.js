import React from "react";
import "./MainSection.css";
import Form from "./Form";
import MainSectionRight from "./MainRightSection";
import FeaturedSeller from "../components/FeaturedSeller";

const MainSection = () => {
  return (
    <div className="main-section">
      <Form />
      <MainSectionRight />
      <FeaturedSeller />
    </div>
  );
};

export default MainSection;
