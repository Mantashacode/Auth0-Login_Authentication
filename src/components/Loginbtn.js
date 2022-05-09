import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Loginbtn = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <div>
      <nav className="navbar navbar-light bg-light">
        <h3>This Login button will redirect you to a Auth0 login page</h3>
        <button
          id="login"
          className="btn btn-primary"
          onClick={() => loginWithRedirect()}
        >
          Login
        </button>
      </nav>
    </div>
  );
};

export default Loginbtn;
