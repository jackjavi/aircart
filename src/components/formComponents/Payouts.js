import React from "react";
import "./Payouts.css";
import Paypal from "../../assets/paypal.png";
import Mpesa from "../../assets/mpesa-logo.png";
import Bank1 from "../../assets/bank1.png";
import Bank2 from "../../assets/bank2.png";
import Bank3 from "../../assets/bank3.png";
import ConnectPaypal from "../../assets/connect-paypal.png";

const Payouts = () => {
  const [paypalModalStyle, setPaypalModalStyle] = React.useState({
    marginBottom: "32px",
    display: "inline-block",
  });

  const [mpesaModalStyle, setMpesaModalStyle] = React.useState({
    marginBottom: "32px",
    display: "none",
    border: "none",
  });

  const [bankModalStyle, setBankModalStyle] = React.useState({
    marginBottom: "32px",
    display: "none",
    border: "none",
  });

  const [isPaypalClicked, setIsPaypalClicked] = React.useState({
    border: "1px solid #499df8",
  });
  const [isMpesaClicked, setIsMpesaClicked] = React.useState({
    border: "1px solid gray",
  });

  const [isBankClicked, setIsBankClicked] = React.useState({
    border: "1px solid gray",
  });

  const handlePaypal = () => {
    setPaypalModalStyle({ display: "inline-block" });
    setIsPaypalClicked({ border: "1px solid #499df8" });
    setIsMpesaClicked({ border: "1px solid gray" });
    setIsBankClicked({ border: "1px solid gray" });
    setMpesaModalStyle({
      marginBottom: "32px",
      display: "none",
      border: "none",
    });
    setBankModalStyle({
      marginBottom: "32px",
      display: "none",
      border: "none",
    });
  };

  const handleMpesa = () => {
    setMpesaModalStyle({ display: "inline-block" });
    setIsMpesaClicked({ border: "1px solid #499df8" });
    setIsPaypalClicked({ border: "1px solid gray" });
    setIsBankClicked({ border: "1px solid gray" });
    setPaypalModalStyle({
      marginBottom: "32px",
      display: "none",
      border: "none",
    });
    setBankModalStyle({
      marginBottom: "32px",
      display: "none",
      border: "none",
    });
  };

  const handleBank = () => {
    setBankModalStyle({ display: "inline-block" });
    setIsBankClicked({ border: "1px solid #499df8" });
    setIsMpesaClicked({ border: "1px solid gray" });
    setIsPaypalClicked({ border: "1px solid gray" });

    setMpesaModalStyle({
      marginBottom: "32px",
      display: "none",
      border: "none",
    });

    setPaypalModalStyle({
      marginBottom: "32px",
      display: "none",
      border: "none",
    });
  };
  return (
    <div className="payouts-div">
      <h3>Payouts</h3>
      <p className="payout-method">Choose your payout method</p>
      <p className="payout-links">
        <button
          style={isPaypalClicked}
          onClick={handlePaypal}
          className="payout-logo"
        >
          <span className="papypal">
            <span className="paypal-logo-text">
              <img className="paypal-logo" src={Paypal} alt="paypal-logo" />
            </span>
          </span>
        </button>
        <button
          style={isMpesaClicked}
          onClick={handleMpesa}
          className="payout-logo mpesa-payout-logo"
        >
          <span>
            <img className="mpesa-logo" src={Mpesa} alt="mpesa-logo" />
          </span>
        </button>

        <button
          style={isBankClicked}
          onClick={handleBank}
          className="payout-logo side-b"
        >
          <span className="side-a">
            <img src={Bank3} alt="bank-logo" />
            <img src={Bank1} alt="bank-logo" />
          </span>

          <img className="bank-2-logo" src={Bank2} alt="bank-logo" />
        </button>
      </p>

      <div className="payout-connect-modal">
        <div className="payout-modal-paypal-div">
          <img
            style={paypalModalStyle}
            src={ConnectPaypal}
            className="connect-paypal-img"
            alt="connect-paypal"
          />
        </div>

        <div style={mpesaModalStyle} className="payout-modal-mpesa-div ">
          <div className="account-div">
            <label htmlFor="phone-number">Mpesa Number</label>
            <input type="number" name="mpesaNumber" id="mpesa-number" />
          </div>
        </div>

        <div style={bankModalStyle} className="payout-modal-bank-div">
          <div className="account-div">
            <label htmlFor="account-number">Account Number</label>
            <input type="number" name="accountNumber" id="account-number" />
          </div>

          <div className="account-div">
            <label htmlFor="account-name">Account Name</label>
            <input type="text" name="accountName" id="account-name" />
          </div>

          <div className="account-div">
            <label for="bank-option">Bank</label>
            <select className="bank-option" id="bank-option" name="bankOption">
              <option className="option-option" value="">
                --choose bank--
              </option>
              <option value="kcb">KCB</option>
              <option value="cooperative">COOPERATIVE</option>
              <option value="equity">EQUITY</option>
              <option value="sidian">SIDIAN</option>
              <option value="faulu">FAULU</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payouts;
