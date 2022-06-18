import React from "react";
import "./SignUpContent.css";
import SignUpRightForm from "./SignUpRightForm";
import GoogleIcon from "../../assets/google-icon.png";
import FacebookIcon from "../../assets/facebook-icon.png";
import Header from "../Header";
/*import GoogleLogin from "./GoogleLogin";
import FacebookLoginComponent from "./FacebookLogin";*/
import { HeaderLeft } from "../headerComponents/HeaderLeft";

const SignUpRight = () => {
  return (
    <div className="sign-up-content">
      <div className="sign-up-left-container">
        <HeaderLeft className="header-signup" />
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
      <div className="sign-up-right">
        <div className="sign-up-right-header">
          <Header />
        </div>

        <div className="sign-up-right-main">
          <h3 className="sign-up-right-main-title">Get started with aircart</h3>
          <p className="sign-up-right-main-desc">
            Join more than 100,000 creators selling and earning with their
            digital products.
          </p>
          <div className="sign-up-right-buttons-div">
            {/* <GoogleLogin />*/}
            <button className="sign-up-right-button">
              <span className="google-icon-text">
                <img height="35%" src={GoogleIcon} alt="google-icon" />
                Continue with Google
              </span>
            </button>

            {/*<FacebookLoginComponent />*/}
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
            <div
              class="fb-login-button"
              data-width=""
              data-size="small"
              data-button-type="continue_with"
              data-layout="rounded"
              data-auto-logout-link="true"
              data-use-continue-as="true"
            ></div>
          </div>
          <SignUpRightForm />
        </div>
      </div>
    </div>
  );
};

export default SignUpRight;