import React from "react";
import "./SignUpContent.css";
import SignUpRightForm from "./SignUpRightForm";
/*import GoogleIcon from "../../assets/google-icon.png";
import FacebookIcon from "../../assets/facebook-icon.png";*/
import Header from "../Header";
/*import GoogleLogin from "./GoogleLogin";
import FacebookLoginComponent from "./FacebookLogin";*/
import { HeaderLeft } from "../headerComponents/HeaderLeft";
import jwtDecode from "jwt-decode";
import FacebookLogin from "react-facebook-login";

const SignUpRight = () => {
  const handleCallbackResponse = (res) => {
    let userObj = jwtDecode(res.credential);
    console.log(userObj);
    alert(`Welcome ${userObj.name} of email ${userObj.email}`);
  };

  React.useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      client_id: `979163570670-5spd53qi8ab4jq3cp9kftvjof1valog7.apps.googleusercontent.com`,
      callback: handleCallbackResponse,
    });

    google.accounts.id.renderButton(document.getElementById("signin-div"), {
      theme: "outline",
      size: "large",
    });
  }, []);

  const responseFacebook = (res) => {
    console.log(res);
    alert(`Welcome ${res.name} of email ${res.email}`);
  };
  return (
    <div className="sign-up-content">
      <div className="sign-up-left-container">
        <div className="header-signup">
          <HeaderLeft />
        </div>

        <div className="sign-up-left-main-left">
          <div className="sign-up-top"></div>
          <div className="sign-up-bottom">
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
      </div>
      <div className="sign-up-right">
        <div className="sign-up-right-header">
          <Header />
        </div>

        <div className="sign-up-right-main">
          <div className="sign-up-right-content">
            <div className="content-top">
              <div>
                <h3 className="sign-up-right-main-title">
                  Get started with aircart
                </h3>
              </div>
              <div>
                {" "}
                <p className="sign-up-right-main-desc">
                  Join more than 100,000 creators selling and earning with their
                  digital products.
                </p>
              </div>

              <div className="sign-up-right-buttons-div">
                {/* <GoogleLogin />
            <button className="sign-up-right-button">
              <span className="google-icon-text">
                <img height="35%" src={GoogleIcon} alt="google-icon" />
                Continue with Google
              </span>
            </button>*/}
                <div id="signin-div"></div>
                <FacebookLogin
                  appId="5495668660465250"
                  autoLoad={true}
                  fields="name,email,picture"
                  callback={responseFacebook}
                  cssClass="my-facebook-button-class"
                  data-button-type="sign in with"
                  icon="fa-facebook"
                />

                {/*<FacebookLoginComponent />
            <button className="sign-up-right-button">
              <span className="facebook-icon-text">
                <img height="35%" src={FacebookIcon} alt="google-icon" />
                Continue with Facebook
              </span>
            </button>*/}
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
            </div>
            <div className="content-bottom">
              <SignUpRightForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpRight;
