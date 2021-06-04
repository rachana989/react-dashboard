import React from "react";
import auth from "./auth";
import "./login.css"


export const LandingPage = props => {
  return (
    <div id="logindiv">
        <br /><br />
        <h1 id="loginhead">Login Page</h1>
        <br />
        <br />
            <div>    
                <label className="loginlabel" htmlFor="user"> User ID </label>    
                <input className="logininput" type="text" name="user" placeholder="Enter User ID/Email ID"/>    
            </div>
            <br /><br />
            <div>    
                <label className="loginlabel" htmlFor="password"> Password </label>    
                <input className="logininput" type="password" name="password" placeholder="Enter Password"/>  
            </div>  
            <br />
            <br />
            <button className="loginbutton"
                onClick={() => {
                auth.login(() => {
                    props.history.push("/app");
                });
                }}
            >
                Login
            </button>
    </div>
  );
};
