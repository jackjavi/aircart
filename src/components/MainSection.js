import React from "react";
import "./MainSection.css";
import ToggleOffIcon from "@mui/icons-material/ToggleOff";
import ToggleOnIcon from "@mui/icons-material/ToggleOn";
import PaypalLogo from "../assets/paypal.png";
import Mpesa from "../assets/mpesa-logo.png";
import Bank1 from "../assets/bank1.png";
import Bank2 from "../assets/bank2.png";
import Bank3 from "../assets/bank3.png";
import ConnectPaypal from "../assets/connect-paypal.png";

const MainSection = () => {
  const [toggle, setToggle] = React.useState(false);

  const handleToggle = () => {
    return setToggle((prevMode) => !prevMode);
  };
  return (
    <main className="main-section">
      <div className="main-left">
        <div className="product-info-content">
          <div className="product-info-header">
            <h3>Sell your product in seconds</h3>
            <p>
              Create your product in the simple steps, and when you are ready
              publish, start selling and earning.
            </p>
            <hr />
          </div>
          <div className="product-info">
            <h3>Product info</h3>
            <label htmlFor="product-file" className="product-file-label">
              Add your file
            </label>
            <div className="product-file-div">
              <p>Drag your file/folder here</p>
              <input type="file" className="product-file" id="product-file" />
            </div>

            <div className="product-name-div">
              <label htmlFor="product-name" className="product-name-label">
                What's the name of your product?
              </label>
              <input
                type="text"
                id="product-name"
                className="product-name-input"
                placeholder="My Rap Album"
              />
            </div>

            <div className="product-desc">
              <label htmlFor="product-desc-name" className="product-desc-label">
                Your product description
              </label>
              <input
                type="textarea"
                id="product-desc-name"
                className="product-desc-name"
                placeholder="Make it descriptive and short."
              />
            </div>

            <div product-price-div>
              <label htmlFor="product-price" className="product-price-label">
                Product Price
              </label>
              <input
                type="text"
                id="product-price"
                placeholder="$"
                className="product-price-input"
              />
            </div>

            <div className="free-product">
              <span onClick={handleToggle}>
                {toggle ? <ToggleOnIcon /> : <ToggleOffIcon />}
              </span>
              <p>Make product free</p>
            </div>

            <hr className="hr" />
          </div>
          <div className="customize-div">
            <h3>Customize</h3>
            <div className="cover-img">
              <h4>Cover Image</h4>
              <div className="cover-img-input-div">
                <input type="file" className="cover-img-input" />
                <p>Images should be horizontal, at least 1280x720x</p>
              </div>
            </div>
            <div className="thumbnail-img">
              <h4>Thumbnail Image</h4>
              <div className="input-file">
                <input type="file" />
                <p>
                  Your image should be square, atleast 600x600px, and JPG, PNG,
                  or GIT FORMAT
                </p>
              </div>
            </div>
            <hr className="hr" />
          </div>
          <div className="payouts-div">
            <h3>Payouts</h3>
            <p className="payout-method">Choose your payout method</p>
            <p className="payout-links">
              <span className="payout-logo">
                <img src={PaypalLogo} alt="paypal-logo" />
              </span>
              <span className="payout-logo">
                <span>
                  <img src={Mpesa} alt="mpesa-logo" />
                </span>
              </span>

              <span className="payout-logo side-b">
                <span className="side-a">
                  <img src={Bank3} alt="bank-logo" />
                  <img src={Bank1} alt="bank-logo" />
                </span>

                <img className="bank-2-logo" src={Bank2} alt="bank-logo" />
              </span>
            </p>
            <img
              src={ConnectPaypal}
              className="connect-paypal-img"
              alt="connect-paypal"
            />
          </div>
          <hr className="hr" />

          <div className="personalized-url">
            <h3>Your personalized URL</h3>
            <h4>URL</h4>
            <div className="url-input">
              <div className="url-input-1">
                <p>avatarroku.aircart.app/</p>
              </div>
              <div className="url-input-2">
                <input type="text" placeholder="flexman" />
              </div>
            </div>
            <button className="copy-url">Copy URL</button>
          </div>
        </div>
        <div className="preview-div">
          <button className="preview-btn">Preview</button>
        </div>
      </div>

      <div className="main-right">
        <h3>Sell any digital product in seconds</h3>
        <p>
          Empower yourself by selling your product, accept payments globally,
          earn rewards. Get started with your email.
        </p>
      </div>
      <div className="featured-product-link">
        <p>Learn to sculpt with Daniel Muthini</p>
        <span>
          <a href="/david-muthini">Get course</a>
        </span>
      </div>
    </main>
  );
};

export default MainSection;
