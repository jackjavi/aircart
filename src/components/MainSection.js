import React from "react";
import "./MainSection.css";
import Form from "./Form";
import MainSectionRight from "./MainRightSection";
import FeaturedSeller from "../components/FeaturedSeller";

const MainSection = () => {
  return (
    <>
      <main className="main-section">
        <Form />
        <MainSectionRight />
        <FeaturedSeller />
      </main>
    </>
  );
};

export default MainSection;
