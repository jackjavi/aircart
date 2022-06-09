import React from "react";
import "./SignUp.css";
import SignUpLeft from "../components/signUpComponents/SignUpLeft";
import SignUpRight from "../components/signUpComponents/SignUpRight";

const SignUp = () => {
  return (
    <div className="signup-container">
      <SignUpLeft />
      <SignUpRight />
    </div>
  );
};

export default SignUp;
