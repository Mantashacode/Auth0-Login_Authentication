import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Logoutbtn = () => {
  const { logout } = useAuth0();
  return (
    <div>
      <nav className="navbar navbar-light bg-light">
        <button
          id="logout"
          className="btn btn-primary"
          onClick={() => logout()}
        >
          Log Out
        </button>
      </nav>
    </div>
  );
};

export default Logoutbtn;
