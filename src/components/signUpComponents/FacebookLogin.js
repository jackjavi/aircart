import React from "react";
import FacebookLogin from "react-facebook-login";

function FacebookLoginComponent() {
  const responseFacebook = (response) => {
    alert(`you signed in as ${response.name}`);
    // Login failed
    if (response.status === "unknown") {
      alert("Login failed!");
    }
  };

  return (
    <>
      <FacebookLogin
        appId="562866388662450"
        autoLoad={false}
        fields="name,email,picture"
        scope="public_profile,email,user_friends"
        callback={responseFacebook}
        icon="fa-facebook"
      />
    </>
  );
}

export default FacebookLoginComponent;
