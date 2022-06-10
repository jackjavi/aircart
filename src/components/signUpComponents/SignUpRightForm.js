import React from "react";
import "./SignUpRightForm.css";
import axios from "axios";

const SignUpRightForm = () => {
  const [signUp, setSignUp] = React.useState({
    email: "",
    subject: "getCode",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSignUp({ [name]: value, subject: "getCode" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://192.168.0.116:5001", signUp)
      .then((res) => console.log(res.data));
    console.log(signUp);
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="sign-up-email-div">
        <label htmlFor="email">Email</label>
        <input onChange={handleChange} type="email" name="email" id="email" />
      </div>

      <div className="sign-up-email-div">
        <label htmlFor="full-name">Full Name</label>
        <input type="text" name="fullName" id="full-name" />
      </div>

      <div className="sign-up-email-div">
        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" />
      </div>

      <div className="sign-up-agreement-div">
        <p>
          By creating an account, you agree to our <span>Terms of Service</span>
          and <span>Privacy & cookie statement.</span>
        </p>
      </div>

      <div className="sign-up-btn">
        <button type="submit">Create aircart account</button>
      </div>

      <div className="sign-up-alternate-text">
        <p>
          Already have an account?<span>Log In</span>
        </p>
      </div>
    </form>
  );
};

export default SignUpRightForm;
