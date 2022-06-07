import React from "react";
import "./Form.css";
import ToggleOffIcon from "@mui/icons-material/ToggleOff";
import ToggleOnIcon from "@mui/icons-material/ToggleOn";
import PaypalLogo from "../assets/paypal.png";
import Mpesa from "../assets/mpesa-logo.png";
import Bank1 from "../assets/bank1.png";
import Bank2 from "../assets/bank2.png";
import Bank3 from "../assets/bank3.png";
import ConnectPaypal from "../assets/connect-paypal.png";
import FileUploader from "./FileUploader/index";
import CoverImage from "./coverImage";

const Form = () => {
  const [toggle, setToggle] = React.useState(false);

  const [sellerData, setSellerData] = React.useState([]);

  React.useEffect(() => {
    const items = localStorage.getItem("sellerData");
    if (items) {
      setSellerData(items);
    }
  }, []);

  const handleToggle = () => {
    return setToggle((prevMode) => !prevMode);
  };

  const handleChange = () => {};

  const handleSubmit = (e) => {};

  console.log(sellerData);
  return (
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

          <FileUploader />

          <div className="product-name-div">
            <label htmlFor="product-name" className="product-name-label">
              What's the name of your product?
            </label>
            <input
              type="text"
              name="productName"
              onChange={handleChange}
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
              name="productDescription"
              onChange={handleChange}
              id="product-desc-name"
              className="product-desc-name"
              placeholder="Make it descriptive and short."
            />
          </div>

          <div product-price-div>
            <label htmlFor="product-price" className="product-price-label">
              Product Price
            </label>
            <div className="product-price-input-div">
              <p>$</p>
              <input
                type="number"
                name="productPrice"
                onChange={handleChange}
                id="product-price"
                className="product-price-input"
              />
            </div>
          </div>

          <div className="free-product">
            <div>
              <span onClick={handleToggle} className="toggleIcons">
                {toggle ? (
                  <ToggleOnIcon fontSize="large" color="secondary" />
                ) : (
                  <ToggleOffIcon fontSize="large" color="secondary" />
                )}
              </span>
            </div>
            <div>
              <span className="free-product-desc">Make product free</span>
            </div>
          </div>

          <hr className="hr" />
        </div>
        <CoverImage />
        <div className="payouts-div">
          <h3>Payouts</h3>
          <p className="payout-method">Choose your payout method</p>
          <p className="payout-links">
            <span className="payout-logo">
              <img src={PaypalLogo} alt="paypal-logo" />
            </span>
            <span className="payout-logo">
              <span>
                <img className="mpesa-logo" src={Mpesa} alt="mpesa-logo" />
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
              <input
                type="text"
                name="personalizedUrl"
                onChange={handleChange}
                placeholder="flexman"
              />
            </div>
          </div>
          <button className="copy-url">Copy URL</button>
        </div>
        <div className="preview-div">
          <button onSubmit={handleSubmit} type="submit" className="preview-btn">
            Preview
          </button>
        </div>
      </div>
    </div>
  );
};

export default Form;
