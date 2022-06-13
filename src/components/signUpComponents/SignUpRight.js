import React from "react";
import "./SignUpRight.css";
import SignUpRightForm from "./SignUpRightForm";
import GoogleIcon from "../../assets/google-icon.png";
import FacebookIcon from "../../assets/facebook-icon.png";
import Header from "../Header";

const SignUpRight = () => {
  return (
    <div className="sign-up-right">
      <div className="sign-up-right-header">
        <Header />
      </div>

      <div className="sign-up-right-main">
        <h3 className="sign-up-right-main-title">Get started with aircart</h3>
        <p className="sign-up-right-main-desc">
          Join more than 100,000 creators selling and earning with their digital
          products.
        </p>
        <div className="sign-up-right-buttons-div">
          <button className="sign-up-right-button">
            <span className="google-icon-text">
              <img height="35%" src={GoogleIcon} alt="google-icon" />
              Continue with Google
            </span>
          </button>
          <button className="sign-up-right-button">
            <span className="facebook-icon-text">
              <img height="35%" src={FacebookIcon} alt="google-icon" />
              Continue with Facebook
            </span>
          </button>
        </div>
        <div className="sign-up-right-hr-div">
          <div>
            <hr />
          </div>
          <div className="or-div">or</div>
          <div>
            <hr />
          </div>
        </div>
        <SignUpRightForm />
      </div>
    </div>
  );
};

export default SignUpRight;
