import React from "react";
import "./Form.css";
import ToggleOffIcon from "@mui/icons-material/ToggleOff";
import ToggleOnIcon from "@mui/icons-material/ToggleOn";
import CoverImage from "./formComponents/coverImage";
import FileUploader3 from "./formComponents/FileUploader/FileUploader3";
import Payouts from "./formComponents/Payouts";
import "./PreviewBtn.css";

const Form = () => {
  const styles = {
    publish: {
      padding: "7%",
    },
    coverImg: {
      height: "224px",
      backgroundColor: "red",
    },
    prodName: {
      backgroundColor: "red",
      marginTop: "70%",
    },
  };

  const [toggle, setToggle] = React.useState(false);
  const [sellerData, setSellerData] = React.useState([]);
  const [price, setPrice] = React.useState({ productPrice: 10 });
  const [email, setEmail] = React.useState({ email: "Knairo@gmail.com" });
  const [productName, setProductName] = React.useState({
    name: "My Rap Album",
  });
  const [modalStyle, setModalStyle] = React.useState({ display: "none" });
  const [publishStyle, setPublishStyle] = React.useState({
    display: "none",
    zIndex: "600",
  });
  const [thumbImg, setThumbImg] = React.useState(null);
  const [fileDataURL, setFileDataURL] = React.useState(null);

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

  console.log(sellerData);

  const handlePriceChange = (e) => {
    const { name, value } = e.target;
    setPrice({ [name]: value });
  };

  const handleToggleOn = () => {
    setPrice({ productPrice: 10 });
  };

  const handleToggleOff = () => {
    setPrice({ productPrice: 0 });
  };

  const handleEmailChange = (e) => {
    const { name, value } = e.target;
    setEmail({ [name]: value });
    value
      ? setModalStyle({ display: "inline-block" })
      : setModalStyle({ display: "none" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
    setPublishStyle({ display: "inline", zIndex: "600", marginLeft: "9vh" });
  };
  console.log(publishStyle.display);

  React.useEffect(() => {
    let fileReader,
      isCancel = false;
    if (thumbImg) {
      fileReader = new FileReader();
      fileReader.onload = (e) => {
        const { result } = e.target;
        if (result && !isCancel) {
          setFileDataURL(result);
        }
      };
      fileReader.readAsDataURL(thumbImg);
    }
    return () => {
      isCancel = true;
      if (fileReader && fileReader.readyState === 1) {
        fileReader.abort();
      }
    };
  }, [thumbImg]);

  const handleProductName = (e) => {
    const { name, value } = e.target;
    setProductName({ [name]: value });
  };

  console.log(productName.name);

  return (
    <div>
      <form onSubmit={handleSubmit} className="main-left-container">
        <div className="preview-preview">
          <button type="submit" className="preview-btn">
            Preview
          </button>
        </div>
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
              <div className="email-address-div">
                <input
                  type="text"
                  name="email"
                  onChange={handleEmailChange}
                  id="product-name"
                  className="product-name-input"
                  placeholder="Email address"
                />

                <div style={modalStyle} className="email-modal">
                  <p>
                    <span className="email-modal-span-1">
                      Notifications about purchases and more will be sent to
                      your email.
                    </span>
                    <span className="email-modal-span-2">
                      Want to do more with aircart?
                    </span>
                    <button>Create account</button>
                  </p>
                </div>
              </div>

              <FileUploader3 />
              <div className="product-name-div">
                <label htmlFor="product-name" className="product-name-label">
                  What's the name of your product?
                </label>
                <input
                  type="text"
                  name="name"
                  value={productName.name}
                  onChange={handleProductName}
                  id="product-name"
                  className="product-name-input"
                  placeholder="My Rap Album"
                />
              </div>
              <div className="product-desc">
                <label
                  htmlFor="product-desc-name"
                  className="product-desc-label"
                >
                  Your product description
                </label>

                <textarea
                  className="product-desc-name"
                  id="product-desc-name"
                  name="productDescription"
                  rows="3"
                  cols="33"
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
                    onChange={handlePriceChange}
                    value={price.productPrice}
                    type="number"
                    name="productPrice"
                    id="product-price"
                    className="product-price-input"
                  />
                </div>
              </div>
              <div className="free-product">
                <div>
                  <span onClick={handleToggle} className="toggleIcons">
                    {toggle ? (
                      <ToggleOnIcon
                        onClick={handleToggleOn}
                        fontSize="large"
                        color="primary"
                      />
                    ) : (
                      <ToggleOffIcon
                        onClick={handleToggleOff}
                        fontSize="large"
                        color="secondary light"
                      />
                    )}
                  </span>
                </div>
                <div>
                  <span className="free-product-desc">Make product free</span>
                </div>
              </div>
              <hr className="hr" />
            </div>

            <CoverImage
              thumbImg={thumbImg}
              fileDataURL={fileDataURL}
              setThumbImg={setThumbImg}
            />
            <Payouts />
            <hr className="hr" />

            <div className="personalized-url">
              <h3>Your personalized URL</h3>
              <h4 className="url-url">URL</h4>
              <div className="url-input">
                <div className="url-input-1">
                  <p>aircart.app/</p>
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
          </div>
        </div>
      </form>
      <div style={publishStyle} className="main-left-container publish">
        <div className="main-left">
          <div style={styles.publish}>
            <div>
              <span>Back to edit</span>
            </div>
            <div className="cover-img-container" style={styles.coverImg}>
              {fileDataURL && <img src={fileDataURL} alt="cover-img" />}
            </div>
            <div style={styles.prodName}>
              <span>{productName.name}</span>
              <span>{price.productPrice}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
