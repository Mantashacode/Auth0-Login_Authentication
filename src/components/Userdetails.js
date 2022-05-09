import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Logoutbtn from "./Logoutbtn";
import "react-json-pretty";
import JSONPretty from "react-json-pretty";

const Userdetails = () => {
  const { user } = useAuth0();
  console.log(user);
  return (
    <div>
      <div className="userDetails">
        <h4>User details</h4>
        <JSONPretty id="data" data={JSON.stringify(user)}></JSONPretty>
      </div>
      <Logoutbtn />
    </div>
  );
};

export default Userdetails;
