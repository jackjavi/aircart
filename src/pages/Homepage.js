import React from "react";
import "./Homepage.css";
import Header from "../components/Header";
import MainSection from "../components/MainSection";

const Homepage = () => {
  return (
    <div className="container">
      <Header />
      <MainSection />
    </div>
  );
};

export default Homepage;
