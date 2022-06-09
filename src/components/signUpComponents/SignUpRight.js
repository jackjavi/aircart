import React from "react";
import "./SignUpRight.css";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import SignUpRightForm from "./SignUpRightForm";

const SignUpRight = () => {
  return (
    <div className="sign-up-right-main">
      <h3 className="sign-up-right-main-title">Get started with aircart</h3>
      <p className="sign-up-right-main-desc">
        Join more than 100,000 creators selling and earning with their digital
        products.
      </p>
      <div className="sign-up-right-buttons-div">
        <button className="sign-up-right-button">
          <span className="google-icon-text">
            <GoogleIcon color="secondary" />
            Continue with Google
          </span>
        </button>
        <button className="sign-up-right-button">
          <span className="facebook-icon-text">
            <FacebookIcon color="primary" />
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
  );
};

export default SignUpRight;
