import React from "react";
import auth from "./auth";
import Header from './Header';
import { Menu } from "./Menu";
import Dashboard from './Dashboard';
import Footer from './Footer';


export const AppLayout = props => {
  return (
    <>
    <div>
      <div class="wrapper">
      <Header/>
      <Menu/>
      <Dashboard/>
      <Footer/>
      
    </div>
      <button className="btn4"
        onClick={() => {
          auth.logout(() => {
            props.history.push("/");
          });
        }}
      >
        Logout
      </button>
    </div>
    </>
  );
};