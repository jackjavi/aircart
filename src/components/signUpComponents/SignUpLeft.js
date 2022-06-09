import React from "react";
import "./SignUpLeft.css";
import { HeaderLeft } from "../headerComponents/HeaderLeft";

const SignUpLeft = () => {
  return (
    <div className="sign-up-left-container">
      <HeaderLeft />
      <div className="sign-up-left-main-left">
        <h3>Sell your Music in seconds</h3>
        <p className="sign-up-main-left-p-1">
          Create your product in the simple steps, and when you are ready
          publish, start selling and earning.
        </p>
        <p className="sign-up-main-left-p-2">
          <span className="sign-up-main-left-span-1">
            Broken Pieces by Lila Fakau
          </span>
          <span className="sign-up-main-left-span-2">Get music</span>
        </p>
      </div>
    </div>
  );
};

export default SignUpLeft;
