import React from "react";
import jwt_decode from "jwt-decode";

const GoogleLogin = () => {
  const handleCallbackResponse = (response) => {
    let userObj = jwt_decode(response.credential);
    alert(`You signed is as ${userObj.name} of email-address ${userObj.email}`);
    console.log(userObj);
  };

  React.useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      client_id:
        "979163570670-dsduftnkmikruf0vjqqn7bt067c8kpaf.apps.googleusercontent.com",
      callback: handleCallbackResponse,
    });

    google.accounts.id.renderButton(document.getElementById("google-div"), {
      theme: "outline",
      size: "large",
    });
  });
  return <div id="google-div"></div>;
};

export default GoogleLogin;
